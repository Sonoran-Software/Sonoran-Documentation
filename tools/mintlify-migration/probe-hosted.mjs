import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const args = process.argv.slice(2);
const option = (name, fallback) => args.includes(name) ? args[args.indexOf(name) + 1] : fallback;
if (!option('--base')) {
  console.error('Usage: node probe-hosted.mjs --base https://staging.mintlify.site [--sha commit] [--all-routes] [--mcp] [--mcp-read-only] [--report file.json]');
  process.exit(2);
}
const base = new URL(option('--base'));
if (base.protocol !== 'https:') throw new Error('Expected an HTTPS public staging URL');
const report = {base: base.origin, commit: option('--sha', null), generatedAt: new Date().toISOString(), pages: [], indexes: [], discovery: {}, mcp: null};
const here = path.dirname(fileURLToPath(import.meta.url));
const localRoot = path.resolve(option('--root', path.join(here, '../../mintlify')));
const manifestPath = path.resolve(option('--manifest', path.join(here, 'routing-manifest.json')));
const reportPath = path.resolve(option('--report', path.join(here, 'reports/hosted-probe.json')));
async function request(route, init = {}) {
  const url = new URL(route, base);
  const response = await fetch(url, {...init, signal: AbortSignal.timeout(20000)});
  const body = await response.text();
  return {response, body};
}
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map(m => [m[1].toLowerCase(), m[2]]));
let manifest;
if (args.includes('--all-routes')) manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
const routes = manifest ? manifest.pages.map(p => ({route: p.expectedPath, page: p.mintlifyPage, title: p.title})) :
  ['/', '/index', '/cad', '/cms', '/radio', '/bot', '/store', '/studio'].map(route => ({route, page: route === '/' ? 'index' : route.slice(1)}));
async function checkPage({route, page, title}) {
  try {
    const {response, body} = await request(route);
    const canonical = [...body.matchAll(/<link\b[^>]*>/gi)].map(m => attrs(m[0])).find(a => a.rel === 'canonical')?.href;
    const robots = [...body.matchAll(/<meta\b[^>]*>/gi)].map(m => attrs(m[0])).find(a => a.name?.toLowerCase() === 'robots')?.content;
    const mdRoute = `/${page}.md`;
    const md = await request(mdRoute);
    const expectedCanonical = `https://docs.sonoransoftware.com${route === '/' || route === '/index' ? '' : route}`;
    return {route, page, expectedTitle: title, status: response.status, canonical: canonical || null, robots: robots || null,
      hasNoindex: /noindex/i.test(robots || ''), expectedCanonical, canonicalMatches: canonical === expectedCanonical,
      titlePresent: !title || body.includes(title.replaceAll('&', '&amp;')) || body.includes(title),
      markdown: {route: mdRoute, status: md.response.status, type: md.response.headers.get('content-type'), chars: md.body.length,
        looksLikeHtml: /^\s*(?:<!doctype|<html)/i.test(md.body), title: md.body.match(/^#\s+(.+)$/m)?.[1], preview: md.body.slice(0, 130)}};
  } catch (error) { return {route, error: error.message}; }
}
// Bound concurrency so the full manifest probe is useful on public staging.
let nextRoute = 0;
await Promise.all(Array.from({length: 6}, async () => {
  while (nextRoute < routes.length) {
    const index = nextRoute++;
    report.pages[index] = await checkPage(routes[index]);
    if ((index + 1) % 100 === 0) console.error(`Checked ${index + 1}/${routes.length} routes`);
  }
}));
const queue = ['/llms.txt'];
const seenIndexes = new Set();
const markdownUrls = new Set();
while (queue.length && seenIndexes.size < 24) {
  const route = queue.shift();
  if (seenIndexes.has(route)) continue;
  seenIndexes.add(route);
  try {
    const {response, body} = await request(route);
    const links = [...body.matchAll(/\]\((https?:\/\/[^\s)]+)\)/g)].map(m => m[1]);
    const indexes = links.filter(link => new URL(link).pathname.startsWith('/_llms/'));
    for (const link of links) if (new URL(link).pathname.endsWith('.md') && !new URL(link).pathname.startsWith('/_llms/')) markdownUrls.add(link);
    report.indexes.push({route, status: response.status, chars: body.length, links: links.length, nestedIndexes: indexes.length});
    for (const index of indexes) queue.push(new URL(index).pathname);
  } catch (error) { report.indexes.push({route, error: error.message}); }
}
report.indexedPageCount = markdownUrls.size;
if (manifest) {
  const indexedPaths = new Set([...markdownUrls].map(url => new URL(url).pathname));
  const expected = [];
  const excluded = [];
  for (const page of manifest.pages) {
    const content = await fs.readFile(path.join(localRoot, `${page.mintlifyPage}.mdx`), 'utf8');
    const frontmatter = content.match(/^---\r?\n([\s\S]*?)\r?\n---/m)?.[1] || '';
    (/^noindex:\s*true\s*$/m.test(frontmatter) ? excluded : expected).push(`/${page.mintlifyPage}.md`);
  }
  report.indexCoverage = {expectedCount: expected.length, excludedCount: excluded.length,
    missing: expected.filter(p => !indexedPaths.has(p)), excludedButIndexed: excluded.filter(p => indexedPaths.has(p)),
    unexpected: [...indexedPaths].filter(p => !expected.includes(p) && !excluded.includes(p))};
}
try {
  const {response, body} = await request('/.well-known/mcp/server-card.json');
  report.discovery = {status: response.status};
  if (response.ok) {
    const data = JSON.parse(body);
    report.discovery = {...report.discovery, name: data.name, url: data.url, tools: data.tools, authentication: data.authentication};
  } else report.discovery.preview = body.slice(0, 160);
} catch (error) { report.discovery.error = error.message; }

// Optional protocol smoke test. Initialize and list public capabilities only;
// no tool calls, feedback writes, admin tools, or paid Assistant calls occur.
if (args.includes('--mcp') || args.includes('--mcp-read-only')) {
  const headers = {'Content-Type': 'application/json', 'Accept': 'application/json, text/event-stream'};
  async function rpc(payload) {
    const response = await fetch(new URL('/mcp', base), {method: 'POST', headers, body: JSON.stringify(payload), signal: AbortSignal.timeout(20000)});
    if (response.headers.get('mcp-session-id')) headers['Mcp-Session-Id'] = response.headers.get('mcp-session-id');
    if (!response.ok) return {status: response.status, error: (await response.text()).slice(0, 300)};
    if (response.status === 202 || !response.body) return {status: response.status};
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let text = '';
    try {
      while (text.length < 500000) {
        const chunk = await reader.read();
        if (chunk.done) break;
        text += decoder.decode(chunk.value, {stream: true});
        if (response.headers.get('content-type')?.includes('text/event-stream')) {
          const event = text.split(/\r?\n\r?\n/).find(event => /^data:\s*\{/m.test(event));
          if (event) return {status: response.status, data: JSON.parse(event.split(/\r?\n/).filter(line => line.startsWith('data:')).map(line => line.slice(5).trim()).join('\n'))};
        }
      }
      return {status: response.status, data: JSON.parse(text)};
    } finally { await reader.cancel(); }
  }
  try {
    const initialized = await rpc({jsonrpc: '2.0', id: 1, method: 'initialize', params: {protocolVersion: '2025-03-26', capabilities: {}, clientInfo: {name: 'sonoran-staging-validation', version: '1'}}});
    const protocol = initialized.data?.result?.protocolVersion;
    if (protocol) headers['MCP-Protocol-Version'] = protocol;
    await rpc({jsonrpc: '2.0', method: 'notifications/initialized'});
    const listed = await rpc({jsonrpc: '2.0', id: 2, method: 'tools/list', params: {}});
    report.mcp = {initialized, listed};
    // Exercise only public search and a fixed read-only filesystem command.
    // Never call feedback or the paid Assistant, even if those tools are listed.
    if (args.includes('--mcp-read-only')) {
      const tools = listed.data?.result?.tools || [];
      const search = tools.find(t => /^search_/.test(t.name));
      const filesystem = tools.find(t => /^query_docs_filesystem_/.test(t.name));
      report.mcp.acceptance = [];
      let id = 3;
      for (const query of ['Sonoran CAD custom login page custom domain', 'Sonoran Radio FiveM installing the in-game resource']) {
        if (!search) { report.mcp.acceptance.push({kind: 'search', query, error: 'Search tool absent'}); continue; }
        const result = await rpc({jsonrpc: '2.0', id: id++, method: 'tools/call', params: {name: search.name, arguments: {query}}});
        const text = (result.data?.result?.content || []).filter(c => c.type === 'text').map(c => c.text).join('\n');
        report.mcp.acceptance.push({kind: 'search', query, status: result.status, error: result.error || result.data?.error,
          isError: result.data?.result?.isError, hasSourceLinks: /Link:\s*https:\/\//.test(text),
          characters: text.length, preview: text.slice(0, 2000)});
      }
      if (filesystem) {
        const command = 'head -45 /radio/game-integrations/fivem/installing-the-in-game-resource.mdx';
        const result = await rpc({jsonrpc: '2.0', id: id++, method: 'tools/call', params: {name: filesystem.name, arguments: {command}}});
        const text = (result.data?.result?.content || []).filter(c => c.type === 'text').map(c => c.text).join('\n');
        report.mcp.acceptance.push({kind: 'filesystem', command, status: result.status, error: result.error || result.data?.error,
          isError: result.data?.result?.isError, characters: text.length, hasExpectedContent: /Sonoran Radio|Installing the In-Game Resource/i.test(text), preview: text.slice(0, 2000)});
      } else report.mcp.acceptance.push({kind: 'filesystem', error: 'Filesystem tool absent'});
    }
  } catch (error) { report.mcp = {error: error.message}; }
}
await fs.mkdir(path.dirname(reportPath), {recursive: true});
await fs.writeFile(reportPath, JSON.stringify(report, null, 2) + '\n');
const pageFailures = report.pages.filter(p => p.error || p.status !== 200 || !p.hasNoindex || !p.canonicalMatches || p.markdown?.status !== 200 || p.markdown?.looksLikeHtml);
const indexFailures = report.indexes.filter(i => i.error || i.status !== 200);
const mcpFailures = (report.mcp?.acceptance || []).filter(a => a.error || a.isError || a.status !== 200 || (a.kind === 'search' && !a.hasSourceLinks) || (a.kind === 'filesystem' && !a.hasExpectedContent));
const failed = pageFailures.length || indexFailures.length || report.indexCoverage?.missing.length || report.indexCoverage?.excludedButIndexed.length || report.indexCoverage?.unexpected.length || report.discovery.status !== 200 || mcpFailures.length || report.mcp?.error || (report.mcp && report.mcp.listed?.status !== 200);
console.log(JSON.stringify({base: report.base, commit: report.commit, checkedPages: report.pages.length, pageFailures, indexedPages: report.indexedPageCount,
  indexCoverage: report.indexCoverage, discoveryStatus: report.discovery.status, mcp: report.mcp?.error || report.mcp?.listed?.status,
  mcpAcceptanceFailures: mcpFailures, report: reportPath}, null, 2));
if (failed) process.exitCode = 1;
