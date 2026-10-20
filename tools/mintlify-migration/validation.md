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
```

This reads product roots, Markdown exports, canonicals, robots metadata, recursive agent indexes, and MCP capability discovery. The optional protocol check initializes MCP and lists tools; it does not invoke Assistant, API playground operations, feedback, or admin tools. It writes ignored `reports/hosted-probe.json`.

Inspect the full GitHub Mintlify check output as well as its conclusion. Mintlify can report deployment success while omitting individual pages that failed to parse. On the first staging deployment, one unescaped pipe in a Markdown table's JSX code string produced a 404 page while the overall check remained successful; enabling GFM in local compilation reproduces this failure.

The public MCP names must be discovered from the deployed site. Initial staging advertised `search_sonoran_software_documentation` and `query_docs_filesystem_sonoran_software_documentation`; search retained `Title:`/`Link:` text blocks. Native `getPage` and GitBook's `askQuestion` are absent. Search and `.md` content retrieval are available on Starter; the reader AI Assistant and Developer API require paid entitlements.

Check route, navigation, and anchor preservation with Python (standard library only):

```sh
python tools/mintlify-migration/qa_converted_routes.py
```

Defaults resolve relative to the script: repository `mintlify/`, the adjacent `routing-manifest.json`, and ignored `reports/route-qa.json`. Override them with `--root`, `--manifest`, or `--report`; `--help` lists resolved defaults. The command performs no network requests and exits nonzero for missing pages, aliases, published heading IDs, visible navigation entries, broken internal page/fragment links, GitBook links, hidden navigation pages, or duplicate explicit IDs. Asset delivery and hosted rendering remain covered by the other checks above.
