import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {compile} from '@mdx-js/mdx';
import remarkGfm from 'remark-gfm';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const here = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
function option(name, fallback) {
  const index = args.indexOf(name);
  return index < 0 ? fallback : args[index + 1];
}
if (!option('--root')) {
  console.error('Usage: node validate-site.mjs --root <docs root> [--mode production|staging] [--report <json>] [--schema <json>] [--source-root <original source> --manifest <route manifest>]');
  process.exit(2);
}
const root = path.resolve(option('--root'));
const mode = option('--mode', 'production');
if (!['production', 'staging'].includes(mode)) {
  console.error('--mode must be production or staging');
  process.exit(2);
}
if (Boolean(option('--source-root')) !== Boolean(option('--manifest'))) {
  console.error('Source comparison requires both --source-root and --manifest');
  process.exit(2);
}
const reportPath = path.resolve(option('--report', path.join(here, 'reports/validation-report.json')));
const schemaPath = path.resolve(option('--schema', path.join(here, 'docs-schema.json')));
const rel = file => path.relative(root, file).split(path.sep).join('/');
const report = {
  root, mode, generatedAt: new Date().toISOString(),
  compiler: '@mdx-js/mdx@3.1.1 + remark-gfm@4.0.1 (compile only; content is never evaluated)',
  limitations: [
    'Not an authoritative Mintlify build: proprietary components, render layout, hosted search, OpenAPI and asset availability require hosted QA.',
    'Frontmatter is stripped with line numbers preserved. This checker does not parse YAML.',
    'Mintlify custom heading IDs are replaced by spaces before standard MDX compilation.',
    'Navigation file existence is checked; URL redirects and fragment behavior require hosted QA.'
  ],
  counts: {pages: 0, snippets: 0, navigationReferences: 0},
  schema: {source: 'https://mintlify.com/docs.json', snapshot: schemaPath},
  configErrors: [], navigationErrors: [], syntaxErrors: [], contentWarnings: [], codeFenceErrors: [],
  codeFences: {checkedPages: 0, checkedBlocks: 0, sourceComparison: null}
};

async function* walk(dir) {
  for (const entry of await fs.readdir(dir, {withFileTypes: true})) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(file);
    else if (entry.isFile() && /\.mdx?$/i.test(entry.name)) yield file;
  }
}

function stripFrontmatter(value) {
  return value.replace(/^\uFEFF?---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/,
    match => '\n'.repeat((match.match(/\n/g) || []).length));
}

// Mintlify consumes this extension before its MDX compiler; standard MDX alone
// would treat the ID as an invalid JavaScript expression. Avoid fenced code.
function normalizeHeadingIds(value) {
  let fence = null;
  return value.split('\n').map(line => {
    const opening = line.match(/^\s{0,3}(`{3,}|~{3,})/);
    if (opening) {
      if (!fence) fence = opening[1][0];
      else if (opening[1][0] === fence) fence = null;
      return line;
    }
    if (fence || !/^\s{0,3}#{1,6}\s/.test(line)) return line;
    return line.replace(/\s*\{#[^}\s]+\}\s*$/, match => ' '.repeat(match.length));
  }).join('\n');
}

let config;
try {
  config = JSON.parse(await fs.readFile(path.join(root, 'docs.json'), 'utf8'));
  // Official schema includes patterns such as ^phc\_ which are invalid with
  // Unicode regexp mode but valid with ordinary JavaScript regex semantics.
  const ajv = new Ajv({strict: false, allErrors: true, allowUnionTypes: true, unicodeRegExp: false});
  addFormats(ajv);
  const schema = JSON.parse(await fs.readFile(schemaPath, 'utf8'));
  const validate = ajv.compile(schema);
  report.schema.valid = validate(config);
  if (!report.schema.valid) report.configErrors = validate.errors;
  if (mode === 'production') {
    if (config.seo?.indexing !== 'all') report.configErrors.push({message: 'Production requires seo.indexing: "all"'});
    if (config.seo?.metatags?.canonical !== 'https://docs.sonoransoftware.com') {
      report.configErrors.push({message: 'Production canonical metadata must be https://docs.sonoransoftware.com'});
    }
    for (const [key, value] of Object.entries(config.seo?.metatags || {})) {
      if (/^(robots|googlebot|bingbot)$/i.test(key) && /(?:^|[\s,;])(noindex|none)(?:$|[\s,;])/i.test(String(value))) {
        report.configErrors.push({message: `Production ${key} metadata must not exclude the whole site from indexing`});
      }
    }
  }
} catch (error) {
  report.schema.valid = false;
  report.configErrors.push({message: error.message});
}

const files = [];
for await (const file of walk(root)) files.push(file);
files.sort();
const fileSet = new Set(files.map(file => rel(file)));
const pageReferenceKeys = new Set(['root', 'page']);
function checkReference(reference, location) {
  if (typeof reference !== 'string' || /^(https?:|mailto:|#)/.test(reference) || /^\w+\s+\//.test(reference)) return;
  report.counts.navigationReferences++;
  const target = reference.replace(/^\//, '').replace(/[?#].*$/, '');
  const exists = ['.mdx', '.md'].some(ext => fileSet.has(target + ext));
  if (!exists) report.navigationErrors.push({reference, location, message: 'No exact Markdown source for navigation path'});
}
function checkNavigation(value, location = 'navigation') {
  if (!value || typeof value !== 'object') return;
  if (Array.isArray(value)) {
    value.forEach((entry, i) => {
      if (typeof entry === 'string') checkReference(entry, `${location}[${i}]`);
      else checkNavigation(entry, `${location}[${i}]`);
    });
    return;
  }
  for (const [key, child] of Object.entries(value)) {
    if (pageReferenceKeys.has(key)) checkReference(child, `${location}.${key}`);
    else if (['groups', 'pages', 'tabs', 'anchors', 'dropdowns', 'products', 'versions', 'languages', 'menu'].includes(key)) checkNavigation(child, `${location}.${key}`);
  }
}
if (config?.navigation) checkNavigation(config.navigation);

const knownComponents = new Set(['Accordion', 'AccordionGroup', 'Accordions', 'Badge', 'Banner', 'Callout', 'Card', 'CardGroup', 'Check', 'CodeGroup', 'Columns', 'Danger', 'Expandable', 'Field', 'Fields', 'Frame', 'Heading', 'Icon', 'Info', 'Latex', 'Mermaid', 'Note', 'ParamField', 'Panel', 'Prompt', 'RequestExample', 'ResponseExample', 'ResponseField', 'Steps', 'Step', 'Tab', 'Tabs', 'Tip', 'Tooltip', 'Tree', 'Update', 'Updates', 'View', 'Warning']);
// Markdown allows an unclosed fence to consume the rest of the page. Check the
// parsed code nodes so lists, block quotes and fence-looking example text retain
// the compiler's own nesting rules instead of being scanned as new fences.
function checkFencedCodeBlocks() {
  return (tree, file) => {
    report.codeFences.checkedPages++;
    const value = String(file.value);
    function visit(node) {
      if (node.type === 'code' && node.position) {
        const source = value.slice(node.position.start.offset, node.position.end.offset);
        const lines = source.split(/\r?\n/);
        const opening = lines[0].match(/^(`{3,}|~{3,})/);
        if (opening) {
          report.codeFences.checkedBlocks++;
          const marker = opening[1];
          const closing = new RegExp(`^[ \\t>]*${marker[0]}{${marker.length},}[ \\t]*$`);
          if (lines.length < 2 || !closing.test(lines.at(-1))) {
            report.codeFenceErrors.push({file: rel(file.path), line: node.position.start.line, kind: 'unclosed-code-fence', reason: 'Fenced code block must have a closing fence'});
          }
        }
      }
      for (const child of node.children || []) visit(child);
    }
    visit(tree);
  };
}
for (const file of files) {
  const relative = rel(file);
  const value = await fs.readFile(file, 'utf8');
  if (relative.startsWith('snippets/')) report.counts.snippets++;
  else report.counts.pages++;
  const body = stripFrontmatter(value);
  const nonCode = body.replace(/^\s{0,3}(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\s{0,3}\1\s*$/gm, '').replace(/(`+)[^\n]*?\1/g, '');
  if (value.includes('{%')) report.contentWarnings.push({file: relative, kind: 'gitbook-directive', message: 'Unconverted GitBook directive remains'});
  if (/https?:\/\/[^\s"')>]*gitbook(?:\.io|\.com)/i.test(value)) report.contentWarnings.push({file: relative, kind: 'gitbook-url', message: 'GitBook hosted URL remains; inspect lifetime and migration requirement'});
  if (/^noindex:\s*true\s*$/m.test(value)) report.contentWarnings.push({file: relative, kind: 'noindex', message: 'Page noindex can exclude content from internal search and MCP; use global robots for staging'});
  const imports = new Set([...nonCode.matchAll(/^import\s+([A-Z]\w*)/gm)].map(match => match[1]));
  const customTags = new Set([...nonCode.matchAll(/<([A-Z][A-Za-z0-9.]*)\b/g)].map(match => match[1]));
  for (const tag of customTags) {
    if (!knownComponents.has(tag) && !imports.has(tag)) report.contentWarnings.push({file: relative, kind: 'component', component: tag, message: 'Verify component exists in Mintlify or is imported'});
  }
  try {
    await compile({path: file, value: normalizeHeadingIds(body)}, {format: 'mdx', outputFormat: 'program', development: false, remarkPlugins: [remarkGfm, checkFencedCodeBlocks]});
  } catch (error) {
    report.syntaxErrors.push({
      file: relative, line: error.line || error.place?.start?.line || null,
      column: error.column || error.place?.start?.column || null,
      rule: error.ruleId || null, reason: error.reason || error.message
    });
  }
}
// Optional archive conversion check. Current Mintlify pages are authoritative;
// ordinary validation must allow their examples to evolve independently.
function fencedBodies(value) {
  const blocks = [];
  const lines = value.replace(/\r\n/g, '\n').split('\n');
  let fence = null, body = [];
  for (const line of lines) {
    const match = line.match(/^([ \t]*)(`{3,}|~{3,})([^\n]*)$/);
    if (!fence && match) { fence = {char: match[2][0], count: match[2].length}; body = []; continue; }
    if (fence && new RegExp(`^[ \\t]*${fence.char}{${fence.count},}[ \\t]*$`).test(line)) {
      blocks.push(body.join('\n')); fence = null; continue;
    }
    if (fence) body.push(line);
  }
  return blocks;
}
function visibleGitBookSource(value) {
  // Preserve directive-looking examples inside fences, then model explicit
  // true/false conditionals. Unknown visitor conditions remain visible here.
  const fences = [];
  const protectedText = value.replace(/^([ \t]*)(`{3,}|~{3,})([^\n]*)\n[\s\S]*?^\1\2[ \t]*$/gm,
    match => `ZZVALIDATIONFENCE${fences.push(match) - 1}ZZ`);
  const stack = [];
  const active = () => !stack.includes(false);
  const directive = /\{%\s*(if\b[^%]*|else|endif)\s*%\}/g;
  let out = '', cursor = 0;
  for (const match of protectedText.matchAll(directive)) {
    if (active()) out += protectedText.slice(cursor, match.index);
    const token = match[1].trim();
    if (/^if\b/.test(token)) stack.push(/^if\s+false$/.test(token) ? false : /^if\s+true$/.test(token) ? true : null);
    else if (token === 'else' && stack.length) { if (stack.at(-1) !== null) stack[stack.length - 1] = !stack.at(-1); }
    else if (token === 'endif') stack.pop();
    cursor = match.index + match[0].length;
  }
  if (active()) out += protectedText.slice(cursor);
  return out.replace(/ZZVALIDATIONFENCE(\d+)ZZ/g, (_, index) => fences[Number(index)]);
}
if (option('--source-root') && option('--manifest')) {
  const sourceRoot = path.resolve(option('--source-root'));
  const manifest = JSON.parse(await fs.readFile(path.resolve(option('--manifest')), 'utf8'));
  let checkedPages = 0, checkedBlocks = 0;
  for (const page of manifest.pages || []) {
    const target = path.join(root, `${page.mintlifyPage || page.publishedPath.replace(/^\//, '') || 'index'}.mdx`);
    try {
      const before = fencedBodies(visibleGitBookSource(await fs.readFile(path.join(sourceRoot, page.source), 'utf8')));
      const after = fencedBodies(await fs.readFile(target, 'utf8'));
      checkedPages++; checkedBlocks += before.length;
      if (JSON.stringify(before) !== JSON.stringify(after)) report.codeFenceErrors.push({source: page.source, file: rel(target), sourceBlocks: before.length, convertedBlocks: after.length, changedBlocks: before.map((code, i) => code === after[i] ? null : i + 1).filter(Boolean)});
    } catch (error) { report.codeFenceErrors.push({source: page.source, file: rel(target), reason: error.message}); }
  }
  report.codeFences.sourceComparison = {sourceRoot, checkedPages, checkedBlocks};
}
report.ok = report.schema.valid && report.configErrors.length === 0 && report.navigationErrors.length === 0 && report.syntaxErrors.length === 0 && report.codeFenceErrors.length === 0;
await fs.mkdir(path.dirname(reportPath), {recursive: true});
await fs.writeFile(reportPath, JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ok: report.ok, root, ...report.counts, configErrors: report.configErrors.length, navigationErrors: report.navigationErrors.length, syntaxErrors: report.syntaxErrors.length, codeFenceErrors: report.codeFenceErrors.length, contentWarnings: report.contentWarnings.length, report: reportPath}, null, 2));
process.exitCode = report.ok ? 0 : 1;
