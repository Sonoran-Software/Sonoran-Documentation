# Sonoran documentation

The public site is [docs.sonoransoftware.com](https://docs.sonoransoftware.com). Mintlify publishes the `mintlify/` directory from `master`. Edit the MDX pages and `mintlify/docs.json` directly; these are the production source of truth.

## Updating documentation

- Keep existing page paths and heading IDs stable. If a page moves, preserve its old URL with a redirect in `mintlify/docs.json`.
- Add visible pages to the navigation. Keep the intentional source-only page excluded from indexing.
- Use the existing media host, `https://docs-assets.sonoransoftware.com`. Media is stored in Cloudflare R2, bucket `docs-mintlify`; do not delete or rename referenced objects. Never commit credentials.
- Run validation before publishing. The original GitBook conversion must not be rerun over edited MDX.

```sh
npm ci --prefix tools/mintlify-migration --ignore-scripts --no-audit --no-fund
npm run validate --prefix tools/mintlify-migration
python tools/mintlify-migration/qa_converted_routes.py
```

After a deployment, check the affected routes and native public MCP. Full release acceptance is available with:

```sh
node tools/mintlify-migration/probe-hosted.mjs --base https://docs.sonoransoftware.com --mode production --sha COMMIT --all-routes --mcp-read-only
```

The historical `tools/mintlify-migration/` name is retained for the route baseline and validation commands. See its [validation guide](tools/mintlify-migration/validation.md). New pages may be added, but the preserved public routes and useful anchors remain a compatibility baseline.

## GitBook archive

The complete tracked pre-cleanup repository, including GitBook Markdown, SUMMARY files, committed media, conversion tooling and Git history, is preserved in:

- Branch [`archive/gitbook-2026-10-20`](https://github.com/Sonoran-Software/Sonoran-Documentation/tree/archive/gitbook-2026-10-20).
- Annotated tag [`gitbook-final-2026-10-20`](https://github.com/Sonoran-Software/Sonoran-Documentation/tree/gitbook-final-2026-10-20).
- Snapshot commit `ec04539260b0567e1cb32b4f3af0e35f83c73e69`; original GitBook source snapshot `d01ddc8d7df4cc47d0d15d6e0e2842aa7a7d41c3`.

The archive is for recovery and historical reference, not active authoring or deployment. To inspect one old text file without restoring the media tree:

```sh
git fetch origin refs/heads/archive/gitbook-2026-10-20:refs/remotes/origin/archive/gitbook-2026-10-20
git show origin/archive/gitbook-2026-10-20:cad/sonoran-cad/README.md
```

A Git archive preserves committed files. GitBook-only drafts, comments, revision metadata, analytics and unrelated organization collections are separate records; this repository does not claim to contain a complete export of them.
