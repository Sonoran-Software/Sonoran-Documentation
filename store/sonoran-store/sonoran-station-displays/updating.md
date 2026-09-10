---
description: Back up, replace, verify, and roll back Sonoran Station Displays safely.
tags:
  - update
  - backup
  - rollback
---

# Updating

Sonoran Station Displays checks the standard Sonoran packaging endpoint at startup and every six hours in official packaged builds, then logs `SSD-UPDATE-003` when a newer version is available. No customer configuration is required. Source/development builds retain the packaging token and safely skip the request. The checker is informational and does not automatically overwrite customer files.

## Before updating

1. Read the product [Changelog](changelog.md).
2. Record the installed resource version from `fxmanifest.lua`.
3. Stop `sonoran-stationdisplay`.
4. Back up:

```
sonoran-stationdisplay/config.lua
sonoran-stationdisplay/server/admin_webhook_config.lua
sonoran-stationdisplay/locales/
sonoran-stationdisplay/data/displays.json
```

1. Record any custom `Config.DisplayModels`, ACE object names, custom permission function, and service overrides.
2. Keep a copy of the entire previous resource for rollback.

Do not share a backup containing player identifiers or private call data.

## Replace the resource

For a normal Tebex/CFX update:

1. Download the current granted asset.
2. Extract it to a temporary location.
3. Verify the new package contains one `sonoran-stationdisplay` folder.
4. Replace the old resource folder with the new folder.
5. Restore `data/displays.json`.
6. Compare the new `config.lua` with your backup and reapply customer changes to the new schema.
7. Restore intentional locale customizations.

Do not copy only protected Lua files into an older resource. The manifest, browser files, Lua protocol, and configuration schema must stay on the same version.

{% hint style="warning" %}
Do not blindly overwrite a new `config.lua` with an old copy. Preserve your values while also adding any new settings from the release.
{% endhint %}

Older configs may contain update-check, dependency, DUI lifecycle/resolution, or event rate-limit settings that are now managed internally. Delete those obsolete entries and merge only documented customer-facing settings. The resource ignores old copies safely, but protected implementation values always take precedence.

## Asset Escrow considerations

Customer-editable config, locale, default data, packaged docs, and README are escrow ignored. Protected runtime files should be replaced from the newly downloaded granted asset.

Do not decrypt, merge, or edit escrow-protected files.

## Web files

Customers should replace the shipped `web/` directory from the release package. There is no Node.js install or web build step.

Source repository maintainers can run:

```powershell
python scripts/validate.py
python scripts/package.py
```

The CI equivalent requires a Lua 5.4 compiler:

```powershell
python scripts/validate.py --require-luac
```

## Restart order

```cfg
ensure sonorancad
ensure sonoran-stationdisplay
```

Restart the full server for an update when practical. This avoids leaving old DUI/browser state in connected clients.

## Verify after updating

1. Confirm the console connects to the expected SonoranCADFiveM version.
2. Confirm the expected number of displays loads.
3. Run `stationdisplay_serverdiag`.
4. Open in-game diagnostics.
5. Visit at least one LEO, Fire/EMS, and Both display.
6. Test Active Units, both call pages, all three Live Map modes, and configured Bodycams.
7. Verify main rotation, synchronized manual next/previous, map pan/reset, and bodycam pagination.
8. Test place, edit, move, refresh, and delete with the intended groups.
9. Confirm custom models remain aligned and independent.
10. Check server and client logs.

## Version migrations

Version 1.0.0 validates saved display entries on load and has no separate migration command. Future releases may add migration notes. Always follow the target release's changelog before restoring old data.

Check for:

* New or renamed permission nodes
* Configuration-version changes
* New required fields
* Model registry changes
* Supported SonoranCADFiveM minimum-version changes
* Bodycam runtime bridge/mode changes

## Roll back

1. Stop `sonoran-stationdisplay`.
2. Restore the complete previous resource folder.
3. Restore the matching configuration and persistence backup.
4. Start SonoranCADFiveM, then the display resource.
5. Confirm display count and inspect errors.

Do not use persistence data written by a newer incompatible schema unless the rollback notes confirm compatibility.

## Maintainer release workflow

The source repository uses:

* `release-candidate` for validation, packaging, and QA deployment
* Manual **Production Release** from `main` for semantic version synchronization and version metadata upload
* The FiveM Keymaster/Tebex escrow process for the protected archive
* **Updater Upload from Keymaster** for the encrypted `stationDisplay.pack.zip`

The release package is `stationDisplay.zip`; its one top-level resource folder remains `sonoran-stationdisplay`.
