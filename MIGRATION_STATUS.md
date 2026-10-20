# GitBook to Mintlify staging migration

## Isolation and recovery

- Work branch: `codex/mintlify-migration`.
- GitBook continues publishing its existing `master` content. Production documentation DNS has not been switched.
- Mintlify publishes this branch, subdirectory `mintlify`, at https://sonoran-software-systems.mintlify.app/. The `.site` alias serves the same project but can retain older CDN cache entries.
- Draft review: https://github.com/Sonoran-Software/Sonoran-Documentation/pull/9.
- R2 media uses the new isolated bucket `docs-mintlify` and https://docs-assets.sonoransoftware.com/. The pre-existing `docs` bucket is untouched.
- The 15-minute chat recovery automation was created for this migration. Staging acceptance is now complete; pause the automation after recording completion, pending user review. The final documentation-domain cutover and GitBook cancellation require a later explicit user request.
- Source snapshot: `d01ddc8d7df4cc47d0d15d6e0e2842aa7a7d41c3` (`master`, October 19, 2026).
- Temporary sparse checkout is recorded in the chat's `work/worktree-purpose.txt`; it excludes media folders to conserve disk. Do not remove it while the recovery automation needs it.

## Verified so far

- 914 source content pages generated; 913 currently published GitBook pages mapped exactly once.
- All 913 existing canonical GitBook URLs return HTTP 200. Fifty-eight paths differ from filesystem inference and are explicitly preserved.
- Hosted content deployment `927cb07` and final footer-style deployment `6eb7f16` include all 914 pages with no failed parses; push and pull-request validation workflows passed. An early predecessor exposed why the full deployment log must be checked rather than only its success badge.
- Full hosted baseline: all 914 HTML/Markdown GET and HEAD checks, 58 redirects, exact 913-page sitemap and recursive agent indexes, MCP discovery, two real searches and a file read passed. Subsequent targeted checks covered all eight Guidde corrections and all nine table changes. Evidence records the corresponding commit SHAs.
- All 914 MDX files pass compile-only validation with GitHub-flavored Markdown. All 2,425 visible fenced examples and 22 HTML code payloads are preserved. All 1,255 figures contain one image/caption, and none of the 2,486 tab panels contains a heading that could become inaccessible in an inactive tab. Mintlify accepted the generated configuration.
- Route QA checks all 914 generated pages and 2,153 internal links: no missing routes/aliases, bad page/fragment links, missing published heading IDs, duplicate explicit IDs, or incorrect navigation entries. All 6,028 published heading IDs are preserved, with 74 authored fragment aliases.
- Fifty-two inherited external links containing `broken-reference` were repaired with evidence-backed topic links or, for obsolete historical features, their original text retained without a dead hyperlink.
- The cloud-only restricted Support space contains six pages: Software Troubleshooting and CAD have test text; CMS, Radio, and Example are blank; Billing is a section listing. Visible page text is archived locally outside the public repository. No restricted Support content was published. Platform version history and analytics remain a separate pre-cancellation archive task.
- R2 contains 2,875 unique objects, including three optimized animations. Complete object size/checksum verification found zero missing, mismatched, or unexpected objects. Public delivery, MIME, cache policy, CORS, and video seeking are verified.
- Every visible source page is in the new navigation. Hidden pages are excluded from navigation.
- Permanent Starter plan is selected. The Pro trial remains available until November 2; no early-end control is visible in Billing. The reader Assistant service is Inactive, and browser checks confirm that its remaining trial controls are absent. Ordinary search works.
- Hosted HTML has `noindex, follow`, Markdown exports have `X-Robots-Tag: noindex`, and canonical URLs point to the corresponding existing production paths. Agent retrieval remains available.
- Representative desktop/mobile checks across all seven product areas cover official light/dark branding, product/navigation drawers, SDK tabs, scrollable tables, accordion opening and direct fragment opening, ordinary search, image loading, all three optimized animations, Guidde playback and YouTube playback. This is representative visual coverage, not a pixel comparison of every page.
- Support/social/legal footer links are restored. The Terms of Service link now uses its verified Terms route, repairing an inherited incorrect footer target. No legal text changed.
- Private Kara compatibility work preserves GitBook as the default and prepares explicit Mintlify search/Markdown retrieval plus recursive indexes. The full application and real test project compile with zero errors; 562 tests passed, zero failed, and nine existing opt-in PostgreSQL tests were skipped. Native read-only search/content retrieval passed all seven products. The patch and local branch remain private; production Support is unchanged.
- Fourteen unmerged GitBook draft review captures are preserved locally outside this public repository: eight report no changes and six contain visible changed-page text. These are review-text/media-reference captures, not full binary/revision-history exports. No drafts were published or marked reviewed.
- The live GitBook site reports no installed integrations. Sampled public scripts expose no GA/GTM/third-party widget to port. Native GitBook analytics, reader AI and collaboration history are separate plan/platform differences described in `tools/mintlify-migration/feature-parity.md`.
- Organization OpenAPI has no configured specifications; no separately hosted API spec was found to transfer. Translation UI is upgrade-only. The organization integration catalog has an incomplete Discord setup, while the live site's installed-integration list is empty.
- The private settings inventory records that legacy/unpublished organization collections are separate from this published site. No organization/account deletion or unrelated content migration is authorized by this work.
- Final footer wrapping is verified in the browser. The source `master` still matches the snapshot after a fresh fetch.

## Review state

The public staging migration meets the acceptance criteria below and is ready for user review. No production domain or billing cutover has occurred. The private provider patch is tested and reviewable but has not been deployed. Its nine database integration fixtures still require an isolated PostgreSQL test environment; they were skipped intentionally rather than pointed at a live database.

Before any GitBook cancellation, decide how to retain needed cloud-only binaries, comments, revisions and analytics. Draft review-text snapshots are not a complete export of those records. Preserve unrelated legacy organization content and review site/seat billing separately; do not delete the organization.

## Staging acceptance criteria

- All 913 existing published page routes resolve successfully on Mintlify, including redirect aliases; existing useful heading links reach the corresponding sections.
- All converted MDX and site config compile; no unexpected missing page links, raw GitBook directives, authoring-only GitBook links, or required GitBook-hosted media remain.
- Required media is verified on the isolated R2 host with correct MIME types, cache policy, video seeking, and stable content-hash URLs.
- Search, navigation, Markdown export, complete machine-readable inventory, and native MCP reads work using permanent Starter capabilities. Pro-only reader UI is absent.
- Visual checks pass for every product, long API pages with all SDK tabs, large tables, nested accordions, videos/embeds, desktop/mobile, and both themes.
- Integration compatibility changes are reviewable and tested without modifying current production behavior.
- Remaining intentional differences (AI assistant, platform analytics/history, restricted access, and any unavailable free-plan feature) are documented for the user.

## Production cutover gate

Keep GitBook live until a later explicit cutover request. At that time, reconcile changes made to `master` after the source snapshot, verify the final staging commit, review/deploy the private documentation-provider adapter in coordination with hostname routing, retain DNS rollback values, prevalidate TLS, remove staging noindex metadata for production, switch the owned docs hostname, and verify production routes, citations, indexes and media. Review the free-plan AI/analytics/access differences and the cloud-record retention decision before considering GitBook cancellation. Establish the post-cutover authoring branch and update the migration-only source-fidelity checks when Mintlify MDX becomes authoritative.
