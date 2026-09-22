---
description: Common questions and troubleshooting steps for Street Signs.
---

# FAQ and Troubleshooting

## Frequently Asked Questions

### Do I need a database?

No. Street Signs stores sign data locally and does not require MySQL or `oxmysql`.

### Where is sign data stored?

Street Signs stores sign data in:

```text
data/signs.json
```

### Why can I walk up to a sign but not edit it?

Being close to a sign is not enough by itself. The server still checks whether your account or job has set permission for that sign.

Review [Permissions](permissions.md).

### Why are some sign types missing?

The current free release includes Highway Sign Only. US/UK styles, billboards,
street signs, and vehicle boards are future expansion content. Turning on an
expansion toggle does not install an expansion model or resource.

For an installed expansion, also check:

```lua
Config.EnabledPacks
```

If a pack is set to `false`, its related sign options will not be available.

### The CAD panels or blip editors are missing

Check:

* `sonorancad` starts before Street Signs
* `Config.CAD.enabled = true`
* `add_convar_permission sonoran-streetsigns read sonoran_apiKey` is in `server.cfg`
* Your CAD build supports Integration Panels and panel-enabled custom blips
* The user has the separate custom permission for the control center or blip editor

### A CAD edit expires or does not reach the sign

CAD actions are time-limited. Confirm the FiveM server can reach the CAD API and
look at the Street Signs server console for a bounded CAD error. Also confirm
the sign was not edited elsewhere first; revision conflicts prevent one editor
from overwriting newer work.

### A linked sign does not turn off with Power Grid

Confirm `Config.Power.enabled = true`, start `sonoran-powergrid` before Street
Signs, and link again while standing within `Config.Power.linkDistance` of the
persisted sign.

### How do I allow more staff to use Street Signs?

That depends on your chosen permission mode:

* ACE: add the correct ACE objects to the desired group
* Standalone: add player identifiers to `Config.StandaloneAllowed`
* QBCore or ESX: add the correct jobs and grades in the config

### Can I use Street Signs without Sonoran CAD?

Yes. If you do not need CAD features, disable them in:

```lua
Config.CAD.enabled = false
```

### Can I log sign changes to Discord?

Yes. Configure `Config.Webhooks` and provide the webhook URL you want to use.

## Troubleshooting

### The resource starts but my config is not being used

Make sure you renamed:

```text
config.CHANGEME.lua -> config.lua
```

Then restart the resource.

### I cannot create signs

Check the following:

* `Config.PermissionMode`
* Your ACE permissions, identifiers, or framework job setup
* Whether you are using the correct command

Test command:

```text
/signcreate test_sign Test Sign
```

### I cannot open the full controller

`/signcontroller` is intended for admin-level access. Confirm that your account has the appropriate admin permission in the mode you selected.

### Signs do not appear for players

Check:

* The resource is started correctly
* The sign is enabled
* Players are close enough to the sign for it to render
* The sign pack used by that sign is enabled

### Sign text was blocked unexpectedly

Street Signs uses banned-word substring matching. Review:

```lua
Config.BannedWords
```

Short or broad entries may block more content than expected.

### My webhook messages are not posting

Check:

* `Config.Webhooks.enabled = true`
* The correct webhook URL is set
* The correct subsection URL is set for the webhook you want to use
* The server can reach Discord

### Auto update is not working

Check:

* `Config.Updater.EnableAutoUpdate = true`
* The `sonoran-streetsigns_helper` resource is installed
* These ACE permissions are present:

```cfg
add_ace resource.sonoran-streetsigns command allow
add_ace resource.sonoran-streetsigns_helper command allow
```

### I changed config values and nothing happened

After editing `config.lua`, restart the resource or restart the server so the updated settings are loaded.

## Still Need Help?

If the issue continues after reviewing your config, permissions, and startup order, collect:

* Your current `Config.PermissionMode`
* The affected command or workflow
* Any server console errors
* Whether the problem affects all signs or only some signs

That will make support and troubleshooting much faster.
