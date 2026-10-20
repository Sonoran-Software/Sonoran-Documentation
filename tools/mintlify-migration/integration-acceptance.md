# Staging integration acceptance

Technical observations from 2026-10-19. Production DNS and GitBook hosting remain separate from this staging work.

## Confirmed on the first hosted build

At `https://sonoran-software-systems.mintlify.site`, `/`, `/cad`, `/cms`, `/radio`, `/bot`, `/store`, and `/studio` return HTTP 200. Their Markdown exports also return HTTP 200 with Markdown content types. Both `/` and `/index` return 200 without an HTTP redirect and canonicalize to the existing production root. Global `robots: noindex, follow` appears in rendered HTML while public MCP search and agent indexes continue working.

Public `/mcp` initialize and tool-list requests succeed without auth. Two real search queries (CAD custom domains and Radio FiveM installation) return relevant source snippets and page links. Reading `/cad/tutorials/customization/custom-login-page.mdx` through the docs-filesystem tool succeeds. No Assistant, feedback, administrative, or product API operation was invoked.

The first build's agent index exposed 912 pages: the legacy account-permission adapter is intentionally marked `noindex`, and the Radio resource installation page failed hosted parsing. The overall GitHub deployment check nevertheless reported success and built only 913 pages. Its detailed output contained the missing page's parse error. GFM-aware local validation reproduced the failure; subsequent converter fixes pass locally across 914 pages and 2,425 visible fenced-code examples. Recheck hosted page/index counts after deploying those fixes.

## Starter comparison

Use the dashboard Assistant status as the authoritative service control. Its official configuration is managed in the dashboard; the current `docs.json` schema does not define an Assistant enable/disable property. The parent migration workflow set the dashboard status to Inactive. CSS removes remaining trial Assistant controls from the preview while preserving ordinary search. CSS does not cancel a subscription or disable a backend service. The account still reports its trial end date; do not describe the trial as ended.

Verify the resulting preview without invoking paid AI. Ordinary search, public MCP, Markdown exports, components, custom styling, and external assets are the intended free baseline. Reader Assistant, native developer API, analytics dashboards, previews, and other paid capabilities are outside that baseline.

References: [Assistant configuration](https://www.mintlify.com/docs/assistant/configure), [pricing](https://www.mintlify.com/pricing).

## Kara adapter required before domain cutover

Current Support backend retrieval first uses GitBook's `/~gitbook/mcp`, with tool names `searchDocumentation` and `getPage`; its final optional fallback calls GitBook's organization/site search API. Those vendor contracts require an adapter. Keeping public page URLs does not preserve the authoring/search API contracts.

Initial staging advertises:

* `search_sonoran_software_documentation`, accepting `query`.
* `query_docs_filesystem_sonoran_software_documentation`, accepting a read-only virtual-filesystem `command`.
* `submit_feedback`, which writes and must not be called by acceptance tests.

Native search results retain `Title:`, `Link:`, `Page:`, and `Content:` text blocks. The existing same-origin page-selection and product-prefix filtering can likely be retained. There is no native `getPage`; read selected public pages at their `.md` URLs, or use the docs-filesystem reader. Prefer validated direct Markdown reads when adapting the existing three-page retrieval pipeline. Continue returning reviewed content and source URLs for downstream answers. Do not replace source-backed retrieval with an unverified synthesized answer.

Discover deployed tool names instead of deriving them from branding. Stage search citations currently use `.mintlify.app`, while the discovery card advertises an internal `.main-vite.mintlify.me` host. Use the explicitly configured staging endpoint for QA, and validate citation paths against the expected site. After custom-domain cutover, verify every returned citation/discovery URL uses the intended public domain before updating production allowlists.

The published-index fallback must recursively follow same-origin `/_llms/*.txt` links. Mintlify splits indexes above 100,000 characters; the staging index already uses separate CAD, CMS, and Radio indexes. The current fallback reads only flat `.md` links in `/llms.txt`, so it misses most product pages. Preserve bounded reads, visited-set loop protection, a modest recursion/document limit, per-product filtering, HTTPS/default-port constraints, and same-origin URL validation. Reject arbitrary hosts, credentials, query strings, and invalid paths as the current implementation does.

Do not rely on Mintlify's paid Developer Search API for Starter parity. Public MCP plus Markdown retrieval supply the necessary free content-access primitives. If the old public GitBook MCP URL must retain identical tool names for installed clients, provide an explicitly maintained compatibility endpoint; a redirect to native `/mcp` alone cannot translate tool schemas.

References: [public search MCP](https://www.mintlify.com/docs/ai/model-context-protocol), [agent indexes](https://www.mintlify.com/docs/ai/llmstxt).

## Before declaring cutover ready

Check the complete deployment output for omitted pages; compare hosted Markdown/index coverage against the route manifest; exercise representative ordinary search, tabs, accordions, code-copy controls, embedded videos, mobile navigation, and download links; inspect production-equivalent canonical/robots behavior; and verify the adapted support retrieval against questions from each product. Protected Support content requires a separate access-control decision and is not part of this public staging dataset.
