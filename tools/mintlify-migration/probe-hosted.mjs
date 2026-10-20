import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const args = process.argv.slice(2);
const option = (name, fallback) => args.includes(name) ? args[args.indexOf(name) + 1] : fallback;
const mode = option('--mode', 'staging');
if (!['staging', 'production'].includes(mode)) throw new Error('--mode must be staging or production');
if (!option('--base')) {
  console.error('Usage: node probe-hosted.mjs --base https://docs.example.com [--mode staging|production] [--sha commit] [--all-routes | --routes-file paths.json] [--mcp] [--mcp-read-only] [--report file.json]');
  process.exit(2);
}
const base = new URL(option('--base'));
if (base.protocol !== 'https:') throw new Error('Expected an HTTPS public documentation URL');
const report = {schemaVersion: 3, mode, base: base.origin, commit: option('--sha', null), generatedAt: new Date().toISOString(), pages: [], indexes: [], discovery: {}, mcp: null};
const here = path.dirname(fileURLToPath(import.meta.url));
const localRoot = path.resolve(option('--root', path.join(here, '../../mintlify')));
const manifestPath = path.resolve(option('--manifest', path.join(here, 'routing-manifest.json')));
const reportPath = path.resolve(option('--report', path.join(here, 'reports/hosted-probe.json')));
// AbortSignal.timeout uses an unreferenced timer. Keep the CLI alive while a
// final cold connection is waiting for that timeout, then release it below.
const keepAlive = setInterval(() => {}, 1000);
await fs.mkdir(path.dirname(reportPath), {recursive: true});
let checkpoint = Promise.resolve();
function saveCheckpoint() {
  checkpoint = checkpoint.then(() => fs.writeFile(reportPath, JSON.stringify(report, null, 2) + '\n'));
  return checkpoint;
}
let cachedPages = new Map();
if (args.includes('--resume')) {
  try {
    const previous = JSON.parse(await fs.readFile(reportPath, 'utf8'));
    if (previous.schemaVersion === report.schemaVersion && previous.mode === mode && previous.base === report.base && previous.commit === report.commit) {
      cachedPages = new Map(previous.pages.filter(p => p && !p.error).map(p => [p.route, p]));
      console.error(`Resuming ${cachedPages.size} completed route checks`);
    }
  } catch (error) { if (error.code !== 'ENOENT') throw error; }
}
async function request(route, init = {}) {
  const url = new URL(route, base);
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetch(url, {...init, signal: AbortSignal.timeout(20000)});
      const body = await response.text();
      if ((response.status === 429 || response.status >= 500) && attempt < 2) continue;
      return {response, body};
    } catch (error) { if (attempt === 2) throw error; }
  }
}
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map(m => [m[1].toLowerCase(), m[2]]));
const blocksIndexing = value => /(?:^|[\s,:;])(?:noindex|none)(?=$|[\s,;])/i.test(value || '');
const sourceOnly = page => page.mappingMethod === 'source-only-unpublished' || page.liveStatus === 404;
let manifest;
const manifestRoutes = args.includes('--all-routes') || option('--routes-file');
if (manifestRoutes || mode === 'production') manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
const intentionalNoindex = new Set((manifest?.pages || []).filter(sourceOnly).map(p => p.mintlifyPage));
let routes = manifestRoutes ? manifest.pages.map(p => ({route: p.expectedPath, page: p.mintlifyPage, title: p.title})) :
  ['/', '/index', '/cad', '/cms', '/radio', '/bot', '/store', '/studio'].map(route => ({route, page: route === '/' ? 'index' : route.slice(1)}));
if (option('--routes-file')) {
  const requested = JSON.parse(await fs.readFile(option('--routes-file'), 'utf8'));
  if (!Array.isArray(requested) || !requested.length || requested.some(p => typeof p !== 'string')) throw new Error('Route selection must be a nonempty JSON array of paths');
  const matches = (r, p) => [r.route, r.page, `/${r.page}`].includes(p);
  if (requested.some(p => !routes.some(r => matches(r, p)))) throw new Error('Route selection contains an unknown path');
  routes = routes.filter(r => requested.some(p => matches(r, p)));
  report.routeScope = {kind: 'selected', selected: routes.length, totalManifestPages: manifest.pages.length};
}
async function checkPage({route, page, title}) {
  try {
    const {response, body} = await request(route);
    const canonical = [...body.matchAll(/<link\b[^>]*>/gi)].map(m => attrs(m[0])).find(a => a.rel === 'canonical')?.href;
    const robotsTags = [...body.matchAll(/<meta\b[^>]*>/gi)].map(m => attrs(m[0])).filter(a => /^(robots|googlebot|bingbot)$/i.test(a.name || ''));
    const robots = robotsTags.find(a => a.name.toLowerCase() === 'robots')?.content;
    const mdRoute = `/${page}.md`;
    const md = await request(mdRoute);
    const head = await request(route, {method: 'HEAD'});
    const mdHead = await request(mdRoute, {method: 'HEAD'});
    const expectedCanonical = `https://docs.sonoransoftware.com${page === 'index' ? '' : `/${page}`}`;
    const blockers = robotsTags.filter(a => blocksIndexing(a.content)).map(a => ({source: `meta:${a.name}`, value: a.content}));
    for (const [source, headers] of [['GET', response.headers], ['HEAD', head.response.headers]]) {
      const value = headers.get('x-robots-tag');
      if (blocksIndexing(value)) blockers.push({source: `${source}:X-Robots-Tag`, value});
    }
    const expectedNoindex = mode === 'staging' || intentionalNoindex.has(page);
    const hasNoindex = robotsTags.some(a => a.name.toLowerCase() === 'robots' && blocksIndexing(a.content));
    const indexingMatches = expectedNoindex ? hasNoindex : blockers.length === 0;
    return {route, page, expectedTitle: title, status: response.status, canonical: canonical || null, robots: robots || null,
      hasNoindex, indexing: {expected: expectedNoindex ? 'excluded' : 'indexable', matches: indexingMatches, blockers},
      expectedCanonical, canonicalMatches: canonical === expectedCanonical,
      head: {status: head.response.status, type: head.response.headers.get('content-type'), robots: head.response.headers.get('x-robots-tag')},
      titlePresent: !title || body.includes(title.replaceAll('&', '&amp;')) || body.includes(title),
      markdown: {route: mdRoute, status: md.response.status, headStatus: mdHead.response.status,
        robots: md.response.headers.get('x-robots-tag'), headRobots: mdHead.response.headers.get('x-robots-tag'),
        type: md.response.headers.get('content-type'), chars: md.body.length,
        looksLikeHtml: /^\s*(?:<!doctype|<html)/i.test(md.body), title: md.body.match(/^#\s+(.+)$/m)?.[1], preview: md.body.slice(0, 130)}};
  } catch (error) { return {route, error: error.message}; }
}
// Bound concurrency so the full manifest probe is useful on public staging.
let nextRoute = 0;
report.inProgress = true;
await Promise.all(Array.from({length: 6}, async () => {
  while (nextRoute < routes.length) {
    const index = nextRoute++;
    report.pages[index] = cachedPages.get(routes[index].route) || await checkPage(routes[index]);
    if ((index + 1) % 100 === 0) {
      console.error(`Checked ${index + 1}/${routes.length} routes`);
      await saveCheckpoint();
    }
  }
}));
await saveCheckpoint();
const allowedIndexOrigins = new Set([base.origin]);
// Mintlify's .site alias advertises .app index links. Follow those exact
// same-project aliases rather than silently reading a different CDN cache.
const mintlifyAlias = base.hostname.match(/^(.+)\.mintlify\.(app|site)$/);
if (mintlifyAlias) allowedIndexOrigins.add(`https://${mintlifyAlias[1]}.mintlify.${mintlifyAlias[2] === 'site' ? 'app' : 'site'}`);
const queue = [new URL('/llms.txt', base).href];
const seenIndexes = new Set();
const markdownUrls = new Set();
while (queue.length && seenIndexes.size < 24) {
  const route = queue.shift();
  if (seenIndexes.has(route)) continue;
  seenIndexes.add(route);
  try {
    const {response, body} = await request(route);
    const links = [...body.matchAll(/\]\((https?:\/\/[^\s)]+)\)/g)].map(m => m[1]);
    const indexes = links.filter(link => {
      const url = new URL(link);
      return allowedIndexOrigins.has(url.origin) && !url.username && !url.password && !url.search && !url.hash && url.pathname.startsWith('/_llms/');
    });
    for (const link of links) if (new URL(link).pathname.endsWith('.md') && !new URL(link).pathname.startsWith('/_llms/')) markdownUrls.add(link);
    report.indexes.push({route, status: response.status, chars: body.length, links: links.length, nestedIndexes: indexes.length});
    for (const index of indexes) queue.push(index);
  } catch (error) { report.indexes.push({route, error: error.message}); }
}
report.indexedPageCount = markdownUrls.size;
report.systemEndpoints = [];
let robotsBody;
for (const route of ['/robots.txt', '/sitemap.xml']) {
  try {
    const {response, body} = await request(route);
    const head = await request(route, {method: 'HEAD'});
    const entry = {route, status: response.status, headStatus: head.response.status, type: response.headers.get('content-type'),
      chars: body.length, preview: body.slice(0, 400)};
    if (route === '/sitemap.xml') {
      entry.locations = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
      entry.locationCount = entry.locations.length;
    }
    if (route === '/robots.txt') robotsBody = body;
    report.systemEndpoints.push(entry);
  } catch (error) { report.systemEndpoints.push({route, error: error.message}); }
}
if (manifest) {
  const indexedPaths = new Set([...markdownUrls].map(url => new URL(url).pathname));
  const expected = [];
  const excluded = [];
  for (const page of manifest.pages) {
    const content = await fs.readFile(path.join(localRoot, `${page.mintlifyPage}.mdx`), 'utf8');
    const frontmatter = content.match(/^---\r?\n([\s\S]*?)\r?\n---/m)?.[1] || '';
    const excludedPage = mode === 'production' ? sourceOnly(page) : /^noindex:\s*true\s*$/m.test(frontmatter);
    (excludedPage ? excluded : expected).push(`/${page.mintlifyPage}.md`);
  }
  report.indexCoverage = {expectedCount: expected.length, excludedCount: excluded.length,
    missing: expected.filter(p => !indexedPaths.has(p)), excludedButIndexed: excluded.filter(p => indexedPaths.has(p)),
    unexpected: [...indexedPaths].filter(p => !expected.includes(p) && !excluded.includes(p))};
  const sitemap = report.systemEndpoints.find(e => e.route === '/sitemap.xml');
  if (sitemap?.locations) {
    const paths = new Set(sitemap.locations.map(url => new URL(url).pathname.replace(/\/$/, '') || '/'));
    const normalized = expected.map(p => p.replace(/\.md$/, '')).map(p => p === '/index' ? '/' : p);
    report.sitemapCoverage = {expectedCount: normalized.length, locationCount: paths.size,
      missing: normalized.filter(p => !paths.has(p) && !(p === '/' && paths.has('/index'))),
      unexpected: [...paths].filter(p => !normalized.includes(p) && !(p === '/index' && normalized.includes('/')))};
    delete sitemap.locations;
  }
  const config = JSON.parse(await fs.readFile(path.join(localRoot, 'docs.json'), 'utf8'));
  report.redirects = [];
  for (const redirect of config.redirects || []) {
    // This migration's redirects are exact path aliases, not wildcard rules.
    if (redirect.source.includes('*') || redirect.source.includes(':')) continue;
    try {
      const {response} = await request(redirect.source, {redirect: 'manual'});
      const location = response.headers.get('location');
      const expected = new URL(redirect.destination, base).href;
      const actual = location && new URL(location, base).href;
      report.redirects.push({source: redirect.source, destination: redirect.destination, status: response.status,
        location, matches: actual === expected && [307, 308].includes(response.status)});
    } catch (error) { report.redirects.push({source: redirect.source, error: error.message}); }
  }
  // The home route is also reachable through Mintlify's generated index path.
  report.homeIndex = await checkPage({route: '/index', page: 'index'});
}
// Check the public HTML routes against generic, Google, and Bing crawler rules.
// The longest matching path wins; Allow wins an equally specific conflict.
function robotsGroups(body) {
  const groups = [];
  let group = {agents: [], rules: []}, rulesStarted = false;
  for (const raw of body.split(/\r?\n/)) {
    const line = raw.replace(/#.*$/, '').trim();
    const colon = line.indexOf(':');
    if (colon < 0) continue;
    const name = line.slice(0, colon).trim().toLowerCase(), value = line.slice(colon + 1).trim();
    if (name === 'user-agent') {
      if (rulesStarted) { groups.push(group); group = {agents: [], rules: []}; rulesStarted = false; }
      group.agents.push(value.toLowerCase());
    } else if (['allow', 'disallow'].includes(name) && group.agents.length) {
      rulesStarted = true;
      if (value.startsWith('/')) group.rules.push({allow: name === 'allow', path: value});
    }
  }
  groups.push(group);
  return groups;
}
function robotsBlock(groups, agent, route) {
  const matching = groups.map(group => ({group, specificity: Math.max(-1, ...group.agents.map(value => value === '*' ? 0 : value && agent.toLowerCase().includes(value) ? value.length : -1))}));
  const specificity = Math.max(-1, ...matching.map(item => item.specificity));
  const rules = matching.filter(item => item.specificity === specificity && specificity >= 0).flatMap(item => item.group.rules);
  let winner;
  for (const rule of rules) {
    const end = rule.path.endsWith('$');
    const pattern = (end ? rule.path.slice(0, -1) : rule.path).replace(/[.+?^${}()|[\]\\]/g, '\\$&').replaceAll('*', '.*');
    if (!new RegExp(`^${pattern}${end ? '$' : ''}`).test(route)) continue;
    const length = Buffer.byteLength(rule.path.replace(/\*/g, '').replace(/\$$/, ''));
    if (!winner || length > winner.length || (length === winner.length && rule.allow)) winner = {...rule, length};
  }
  return winner && !winner.allow ? winner.path : null;
}
if (mode === 'production' && robotsBody !== undefined) {
  const publicRoutes = manifest.pages.filter(page => !sourceOnly(page)).map(page => page.expectedPath);
  if (!publicRoutes.includes('/index')) publicRoutes.push('/index');
  const groups = robotsGroups(robotsBody), blocked = [];
  for (const agent of ['*', 'Googlebot', 'Bingbot']) {
    for (const route of publicRoutes) {
      const rule = robotsBlock(groups, agent, new URL(route, base).pathname);
      if (rule) blocked.push({agent, route, rule});
    }
  }
  report.robotsCoverage = {checkedRoutes: publicRoutes.length, agents: ['*', 'Googlebot', 'Bingbot'], blocked};
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
          // A streamed JSON event may span network chunks. Parse only an event
          // terminated by the blank-line SSE boundary, never a partial chunk.
          const event = text.split(/\r?\n\r?\n/).slice(0, -1).find(event => /^data:\s*\{/m.test(event));
          if (event) return {status: response.status, data: JSON.parse(event.split(/\r?\n/).filter(line => line.startsWith('data:')).map(line => line.slice(5).trim()).join('\n'))};
        }
      }
      return {status: response.status, data: JSON.parse(text)};
    } finally { await reader.cancel(); }
  }
  try {
    const initialized = await rpc({jsonrpc: '2.0', id: 1, method: 'initialize', params: {protocolVersion: '2025-03-26', capabilities: {}, clientInfo: {name: `sonoran-${mode}-validation`, version: '1'}}});
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
  } catch (error) { report.mcp = {...report.mcp, error: error.message}; }
}
report.inProgress = false;
await saveCheckpoint();
const pageFailed = p => p.error || p.status !== 200 || p.head?.status !== 200 || !p.indexing?.matches || !p.canonicalMatches || p.markdown?.status !== 200 || p.markdown?.headStatus !== 200 || (mode === 'staging' && !blocksIndexing(p.markdown?.headRobots)) || p.markdown?.looksLikeHtml;
const pageFailures = report.pages.filter(pageFailed);
const indexFailures = report.indexes.filter(i => i.error || i.status !== 200);
const mcpFailures = (report.mcp?.acceptance || []).filter(a => a.error || a.isError || a.status !== 200 || (a.kind === 'search' && !a.hasSourceLinks) || (a.kind === 'filesystem' && !a.hasExpectedContent));
const redirectFailures = (report.redirects || []).filter(r => !r.matches);
const homeIndexFailure = report.homeIndex && pageFailed(report.homeIndex);
const systemFailures = report.systemEndpoints.filter(e => e.error || e.status !== 200 || e.headStatus !== 200);
const failed = pageFailures.length || indexFailures.length || systemFailures.length || report.robotsCoverage?.blocked.length || report.indexCoverage?.missing.length || report.indexCoverage?.excludedButIndexed.length || report.indexCoverage?.unexpected.length || report.sitemapCoverage?.missing.length || report.sitemapCoverage?.unexpected.length || redirectFailures.length || homeIndexFailure || report.discovery.status !== 200 || mcpFailures.length || report.mcp?.error || report.mcp?.initialized?.data?.error || report.mcp?.listed?.data?.error || (report.mcp && report.mcp.listed?.status !== 200);
const compactCoverage = coverage => coverage && Object.fromEntries(Object.entries(coverage).map(([key, value]) => [key, Array.isArray(value) ? {count: value.length, examples: value.slice(0, 8)} : value]));
console.log(JSON.stringify({base: report.base, mode, commit: report.commit, checkedPages: report.pages.length, pageFailureCount: pageFailures.length,
  pageFailures: pageFailures.slice(0, 15).map(p => ({route: p.route, status: p.status, error: p.error, canonical: p.canonical, expectedCanonical: p.expectedCanonical, noindex: p.hasNoindex, indexing: p.indexing, head: p.head?.status, mdStatus: p.markdown?.status, mdHead: p.markdown?.headStatus})), indexedPages: report.indexedPageCount,
  indexCoverage: compactCoverage(report.indexCoverage), sitemapCoverage: compactCoverage(report.sitemapCoverage), systemFailures,
  robotsCoverage: report.robotsCoverage && {...report.robotsCoverage, blocked: {count: report.robotsCoverage.blocked.length, examples: report.robotsCoverage.blocked.slice(0, 15)}},
  redirectsChecked: report.redirects?.length, redirectFailures, homeIndex: report.homeIndex,
  discoveryStatus: report.discovery.status, mcp: report.mcp?.error || report.mcp?.listed?.status,
  mcpAcceptanceFailures: mcpFailures, report: reportPath}, null, 2));
clearInterval(keepAlive);
if (failed) process.exitCode = 1;
