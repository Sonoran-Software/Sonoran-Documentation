import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const args = process.argv.slice(2);
const option = (name, fallback) => args.includes(name) ? args[args.indexOf(name) + 1] : fallback;
if (!option('--base')) {
  console.error('Usage: node probe-hosted.mjs --base https://staging.mintlify.site [--report file.json] [--mcp]');
  process.exit(2);
}
const base = new URL(option('--base'));
if (base.protocol !== 'https:') throw new Error('Expected an HTTPS public staging URL');
const report = {base: base.origin, generatedAt: new Date().toISOString(), pages: [], indexes: [], discovery: {}, mcp: null};
const here = path.dirname(fileURLToPath(import.meta.url));
const reportPath = path.resolve(option('--report', path.join(here, 'reports/hosted-probe.json')));
async function request(route, init = {}) {
  const url = new URL(route, base);
  const response = await fetch(url, {...init, signal: AbortSignal.timeout(20000)});
  const body = await response.text();
  return {response, body};
}
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map(m => [m[1].toLowerCase(), m[2]]));
for (const route of ['/', '/cad', '/cms', '/radio', '/bot', '/store', '/studio']) {
  try {
    const {response, body} = await request(route);
    const canonical = [...body.matchAll(/<link\b[^>]*>/gi)].map(m => attrs(m[0])).find(a => a.rel === 'canonical')?.href;
    const robots = [...body.matchAll(/<meta\b[^>]*>/gi)].map(m => attrs(m[0])).find(a => a.name?.toLowerCase() === 'robots')?.content;
    const mdRoute = route === '/' ? '/index.md' : `${route}.md`;
    const md = await request(mdRoute);
    report.pages.push({route, status: response.status, canonical: canonical || null, robots: robots || null,
      hasNoindex: /noindex/i.test(robots || ''), expectedCanonical: `https://docs.sonoransoftware.com${route === '/' ? '' : route}`,
      markdown: {route: mdRoute, status: md.response.status, type: md.response.headers.get('content-type'), chars: md.body.length,
        looksLikeHtml: /^\s*(?:<!doctype|<html)/i.test(md.body), preview: md.body.slice(0, 130)}});
  } catch (error) { report.pages.push({route, error: error.message}); }
}
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
if (args.includes('--mcp')) {
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
  } catch (error) { report.mcp = {error: error.message}; }
}
await fs.mkdir(path.dirname(reportPath), {recursive: true});
await fs.writeFile(reportPath, JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({base: report.base, pages: report.pages.map(p => ({route: p.route, status: p.status, noindex: p.hasNoindex, canonical: p.canonical, mdStatus: p.markdown?.status, error: p.error})), indexedPages: report.indexedPageCount, discoveryStatus: report.discovery.status, mcp: report.mcp?.error || report.mcp?.listed?.status, report: reportPath}, null, 2));
