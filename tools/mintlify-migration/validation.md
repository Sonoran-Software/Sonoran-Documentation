# Production documentation validation

Mintlify MDX in `mintlify/` is authoritative. These checks do not need the archived GitBook tree. The historical directory name is kept so existing commands and integrations keep working.

Run from the repository root:

```sh
npm ci --prefix tools/mintlify-migration --ignore-scripts --no-audit --no-fund
npm run validate --prefix tools/mintlify-migration
python tools/mintlify-migration/qa_converted_routes.py
```

Pinned Node dependencies compile MDX with GitHub-flavored Markdown, without evaluating page content. Validation checks the official configuration schema snapshot, navigation targets and closed fenced examples. Production mode requires the canonical metadata `https://docs.sonoransoftware.com`, indexing `all` and no site-wide robots exclusion. It permits the existing intentionally excluded source-only page. Reports go to ignored `reports/validation-report.json`; failures exit nonzero.

Heading IDs (`{#id}`) are masked for generic MDX compilation. Frontmatter is stripped with line numbers preserved; YAML field correctness, proprietary components and rendered layout still need Mintlify build/browser verification. Code examples can evolve independently of archived GitBook Markdown. The optional historical conversion comparison requires both `--source-root` and `--manifest`; ordinary production validation does not use it.

The Python checker uses only the standard library and reads `routing-manifest.json` plus current MDX. It checks preserved routes, redirect aliases, navigation, internal links and useful published anchors without loading old source files. Keep the route/anchor manifests as compatibility baselines. New pages can be added without recreating historical source paths; review intentional removals or heading changes instead of blindly regenerating the baseline.

## Hosted acceptance

After Mintlify finishes publishing, run:

```sh
node tools/mintlify-migration/probe-hosted.mjs --base https://docs.sonoransoftware.com --mode production --sha COMMIT --all-routes --mcp-read-only --report tools/mintlify-migration/reports/hosted-production.json
```

This checks normal HTTPS, HTML and Markdown GET/HEAD, canonical metadata, production indexing, robots rules, redirects, sitemap and recursive agent indexes. It also discovers native public MCP and performs two read-only searches and a fixed content read. It does not invoke Assistant, API playground operations, feedback or administrative tools. Markdown exports may carry their own noindex header to avoid duplicate search results; their content must remain readable. The intentional source-only page stays outside public indexes.

For a targeted content change, use `--routes-file paths.json` instead of `--all-routes`. The file is a nonempty JSON array of route/page identifiers, such as `["cms/tutorials/customization/custom-domain"]`. The full inventory still supplies sitemap/index and redirect expectations. A partial page sweep must not be reported as complete route coverage. Use the full sweep after broad changes.

The SHA is a review label, not server revision proof. Review Mintlify's actual deployment revision and complete deployment log as well: a success badge alone can hide omitted pages. Hosted tests do not prove search-engine crawling or every browser/component behavior. For a deliberately isolated staging project, both validator and probe accept `--mode staging`; do not publish staging noindex to production.

## Archive

See the root README for `archive/gitbook-2026-10-20` and the annotated tag `gitbook-final-2026-10-20`. They preserve the old source, committed media, asset provenance and one-time conversion/upload tools. Those tools must not regenerate or overwrite the current production MDX. Existing R2 objects and URLs remain unchanged. Credentials and incomplete private cloud captures are not part of this public repository.
