# Sonoran documentation migration

This branch stages the public GitBook documentation in Mintlify without changing the GitBook source tree or production documentation hostname. Mintlify publishes the `mintlify/` subdirectory of `codex/mintlify-migration` at https://sonoran-software-systems.mintlify.site/.

The routing manifest records source commit `d01ddc8d7df4cc47d0d15d6e0e2842aa7a7d41c3`, 914 source pages, 913 published URLs, and the live heading IDs. `fragment-aliases.json` preserves older authored anchors; `link-overrides.json` records evidence for repaired obsolete links and the few related prose corrections. Source Markdown remains authoritative while GitBook is live. Reconcile later source changes before cutover; do not regenerate the manifest from filenames alone.

## Rebuild

Use Python 3.10+ with PyYAML and beautifulsoup4 installed. From the repository root:

```sh
python tools/mintlify-migration/build.py
```

The builder reads source Markdown and the checked-in manifests, and writes only `mintlify/` plus its conversion report. It does not upload assets or modify DNS. Keep the official branding and asset host in `asset-manifest.json`. Large animation derivatives preserve the original object mapping and use a separate `optimizedEntries` list.

Run the checks in [validation.md](validation.md), then inspect the complete Mintlify deployment log and hosted pages. A successful deployment status alone does not guarantee that every page was included. The workflow validates syntax, code examples, route/link/anchor coverage, and configuration before a change is treated as ready.

## Media

The isolated R2 bucket is `docs-mintlify`; its public hostname is https://docs-assets.sonoransoftware.com/. Objects use immutable SHA-256 keys. Original source assets are read directly from Git objects, avoiding another local media copy. Public CORS allows GET/HEAD and video range requests.

`r2-assets.cjs` uses the AWS S3 SDK, including for `--help`; install `@aws-sdk/client-s3` separately or point `AWS_SDK_MODULE` at an existing installation. `ffprobe` is required for `upload-optimized`; `sharp` is used only by `branding`. Run `node tools/mintlify-migration/r2-assets.cjs --help` for options. Supply existing credentials through environment variables or an untracked credentials file; never commit or log credential values. Keep working manifests and generated verification reports in the ignored `reports/` directory. Uploading is a separate operation from rebuilding, and ordinary site validation needs no credentials.

See [media.md](media.md) for reproduction commands, encoding settings, uploader usage, and review limits. The small checked-in [media verification evidence](evidence/media-verification.json) records the completed storage, public response, and optimized-video checksum checks.

## Acceptance and cutover

See [MIGRATION_STATUS.md](../../MIGRATION_STATUS.md) for the remaining work and production cutover gate, and [integration-acceptance.md](integration-acceptance.md) for the GitBook-specific API/MCP differences. Staging is marked `noindex` and canonicalizes to the current production URLs. Those staging settings must be reviewed for production.

The Starter plan is selected and the reader Assistant service is inactive. The Pro trial remains available until November 2 because Billing provides no visible early-end control. CSS also hides residual trial Assistant controls; this is not cancellation of the trial or a service control.

Keep GitBook live and retain the current documentation DNS until the user approves a tested cutover. The 15-minute recovery automation should pause once staging acceptance is complete.
