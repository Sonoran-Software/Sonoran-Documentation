# Migration validation

Run from the repository root after rebuilding `mintlify/`:

```sh
npm ci --prefix tools/mintlify-migration --ignore-scripts --no-audit --no-fund
npm run validate --prefix tools/mintlify-migration
```

Dependencies are pinned in `package.json` and `package-lock.json`. Node 18 or newer is required for the hosted probe's built-in fetch. No full Mintlify CLI, browser, or proprietary runtime is installed.

The validator checks the official `docs.json` schema snapshot, exact navigation source references, MDX syntax with GitHub-flavored Markdown enabled, and fenced-code preservation against the original source Markdown. Explicit false GitBook conditionals are excluded from the visible-source comparison, while directive-looking text inside code fences is preserved. It compiles content without executing it. Reports are written to ignored `reports/validation-report.json`; failures exit nonzero. Every diagnostic includes its file and available line/column.

Mintlify heading IDs (`{#id}`) are masked before generic MDX compilation. Frontmatter is stripped with original line numbers retained; YAML field correctness and proprietary component behavior still need hosted verification. The schema's escaped underscore regex requires ordinary (non-Unicode) regex mode.

Run the public staging acceptance probe after a completed deployment:

```sh
npm run probe --prefix tools/mintlify-migration -- --base https://sonoran-software-systems.mintlify.site --mcp
# Full manifest, recursive index coverage, and actual public search/content reads:
npm run probe --prefix tools/mintlify-migration -- --base https://sonoran-software-systems.mintlify.site --sha COMMIT --all-routes --mcp-read-only
```

This reads product roots, Markdown exports, canonicals, robots metadata, recursive agent indexes, and MCP capability discovery. `--all-routes` checks HTML and Markdown GET/HEAD responses for each route with six concurrent workers, checks explicit 307/308 redirects and `robots.txt`/`sitemap.xml`, and compares agent-index/sitemap coverage against every local page except pages explicitly marked `noindex`. The expected canonical domain is the existing production domain, while staging HTML must remain globally `noindex`. The optional `--mcp` protocol check initializes MCP and lists tools. `--mcp-read-only` additionally performs two public search queries and one fixed `head` content read; it never invokes Assistant, API playground operations, feedback, or admin tools. `--sha` records which successfully deployed commit is under review; it does not prove server revision. Reports are written to ignored `reports/hosted-probe.json`, or `--report PATH`. Progress is checkpointed every100 routes; `--resume` reuses completed checks only from the same report version, base URL, and SHA label. Network timeouts and server errors receive at most two retries. Failed availability, canonical, robots, index coverage, or MCP acceptance checks exit nonzero.

Inspect the full GitHub Mintlify check output as well as its conclusion. Mintlify can report deployment success while omitting individual pages that failed to parse. On the first staging deployment, one unescaped pipe in a Markdown table's JSX code string produced a 404 page while the overall check remained successful; enabling GFM in local compilation reproduces this failure.

The public MCP names must be discovered from the deployed site. Initial staging advertised `search_sonoran_software_documentation` and `query_docs_filesystem_sonoran_software_documentation`; search retained `Title:`/`Link:` text blocks. Native `getPage` and GitBook's `askQuestion` are absent. Search and `.md` content retrieval are available on Starter; the reader AI Assistant and Developer API require paid entitlements.

Check route, navigation, and anchor preservation with Python (standard library only):

```sh
python tools/mintlify-migration/qa_converted_routes.py
```

Defaults resolve relative to the script: repository `mintlify/`, the adjacent `routing-manifest.json`, and ignored `reports/route-qa.json`. Override them with `--root`, `--manifest`, or `--report`; `--help` lists resolved defaults. The command performs no network requests and exits nonzero for missing pages, aliases, published heading IDs, visible navigation entries, broken internal page/fragment links, GitBook links, hidden navigation pages, or duplicate explicit IDs. Asset delivery and hosted rendering remain covered by the other checks above.
