# GitBook to Mintlify staging migration

## Isolation and recovery

- Work branch: `codex/mintlify-migration`.
- GitBook continues publishing its existing `master` content. Production documentation DNS has not been switched.
- Mintlify publishes this branch, subdirectory `mintlify`, at https://sonoran-software-systems.mintlify.site/.
- R2 media uses the new isolated bucket `docs-mintlify` and https://docs-assets.sonoransoftware.com/. The pre-existing `docs` bucket is untouched.
- A 15-minute chat recovery automation continues the work. It must pause once staging meets the criteria below. The final documentation-domain cutover and GitBook cancellation require a later explicit user request.
- Source snapshot: `d01ddc8d7df4cc47d0d15d6e0e2842aa7a7d41c3` (`master`, October 19, 2026).
- Temporary sparse checkout is recorded in the chat's `work/worktree-purpose.txt`; it excludes media folders to conserve disk. Do not remove it while the recovery automation needs it.

## Verified so far

- 914 source content pages generated; 913 currently published GitBook pages mapped exactly once.
- All 913 existing canonical GitBook URLs return HTTP 200. Fifty-eight paths differ from filesystem inference and are explicitly preserved.
- Initial hosted Mintlify deployment succeeded (commit `1317525`).
- All 914 MDX files pass compile-only validation with GitHub-flavored Markdown. All 2,425 visible fenced code examples are preserved. Mintlify also accepted the generated configuration.
- Route QA checks all 914 generated pages and 2,112 internal links: no missing routes/aliases, bad page/fragment links, missing published heading IDs, duplicate explicit IDs, or incorrect navigation entries. All 6,028 published heading IDs are preserved, with 74 authored fragment aliases.
- R2 contains 2,875 unique objects, including three optimized animations. Complete object size/checksum verification found zero missing, mismatched, or unexpected objects. Public delivery, MIME, cache policy, CORS, and video seeking are verified.
- Every visible source page is in the new navigation. Hidden pages are excluded from navigation.
- Permanent Starter plan is selected. The Pro trial remains available until November 2; there is no early-end control visible in Billing. The trial-only reader assistant was explicitly disabled in its dashboard, but propagation to the public site still needs verification after deployment.
- Staging has global `noindex, follow` metadata and canonical metadata pointing to the existing production documentation domain. Hosted behavior still requires verification.

## Current work

1. Visually verify the official light/dark branding, disabled trial UI, and optimized animation playback in the next hosted build.
2. Finish auditing inherited external broken links. Internal routes and both published/authored anchor variants now pass locally.
3. Recheck the public staging site after every substantive build: page HTTP responses, redirects, Markdown export, robots metadata, canonicals, index completeness, native MCP search/page retrieval, and public images.
4. Visually compare pages across all seven product areas and each complex content type, on desktop and mobile. Fix layout, branding, tab/accordion/table/media behavior, and content loss. Use existing official branding assets.
5. Package reproducible build/upload/validation tools and concrete results in `tools/mintlify-migration`.
6. Prepare and test the Kara/Sonoran documentation integration changes before any domain cutover. Existing GitBook-specific MCP clients need discovery/adapter changes; a URL redirect alone is insufficient. Preserve recursive llms index support if Mintlify splits its index.
7. Inventory or securely archive cloud-only restricted Support test content, draft changes, GitBook settings, redirect history, comments, and platform history. Do not publish protected material into the public staging site.

## Staging acceptance criteria

- All 913 existing published page routes resolve successfully on Mintlify, including redirect aliases; existing useful heading links reach the corresponding sections.
- All converted MDX and site config compile; no unexpected missing page links, raw GitBook directives, authoring-only GitBook links, or required GitBook-hosted media remain.
- Required media is verified on the isolated R2 host with correct MIME types, cache policy, video seeking, and stable content-hash URLs.
- Search, navigation, Markdown export, complete machine-readable inventory, and native MCP reads work using permanent Starter capabilities. Pro-only reader UI is absent.
- Visual checks pass for every product, long API pages with all SDK tabs, large tables, nested accordions, videos/embeds, desktop/mobile, and both themes.
- Integration compatibility changes are reviewable and tested without modifying current production behavior.
- Remaining intentional differences (AI assistant, platform analytics/history, restricted access, and any unavailable free-plan feature) are documented for the user.

## Production cutover gate

Keep GitBook live until a later explicit cutover request. At that time, reconcile changes made to `master` after the source snapshot, verify final staging commit, retain DNS rollback values, prevalidate TLS, remove staging noindex metadata for production, switch the owned docs hostname, verify production behavior, and only then consider GitBook cancellation.
