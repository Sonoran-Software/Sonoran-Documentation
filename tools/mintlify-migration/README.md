# Documentation validation tools

The active documentation is authored directly in `mintlify/` and published from `master` at https://docs.sonoransoftware.com. This directory retains its historical name for compatibility; it no longer regenerates the site from GitBook Markdown.

See [validation.md](validation.md) for local MDX/schema/code-example checks, preserved route/anchor checks and hosted production acceptance. `routing-manifest.json` and `fragment-aliases.json` record the URL compatibility baseline. The schema and dependency lockfile make local and CI validation repeatable.

The complete pre-cleanup source, committed media, conversion builder, original R2 asset inventory and upload tooling are on branch `archive/gitbook-2026-10-20` and annotated tag `gitbook-final-2026-10-20`. See the root [README](../../README.md) for recovery instructions and archive scope. Existing R2 objects remain live and unchanged.
