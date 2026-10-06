---
description: Connect Street Signs to Sonoran CAD, Sonoran Power Grid, and Discord.
---

# Integrations and Webhooks

These integrations are optional. You can place and edit signs in-game without them.

## Sonoran CAD

Use a current [SonoranCADFiveM integration](https://docs.sonoransoftware.com/cad/integration-plugins/in-game-integration/fivem-installation) and a CAD version that supports Integration Panels and custom Live Map markers.

Set `Config.CAD.enabled = true` in `config.lua`. Add the following after your Sonoran CAD configuration in `server.cfg`:

```cfg
ensure sonorancad
add_convar_permission sonoran-streetsigns read sonoran_apiKey
ensure sonoran-streetsigns
```

In CAD, assign the appropriate roles access to these two separate panels:

* **SonoranDOT VMS Control Center** — Find and manage all signs.
* **SonoranDOT VMS Sign Editor** — Edit an individual sign from its Live Map marker.

Give users one or both permissions according to their role. In-game ACE or job access does not automatically grant CAD panel access.

Changes synchronize between CAD and FiveM. CAD edits save immediately. CAD can update existing text and icon slots; use the in-game editor to rearrange the layout.

> Screenshot placeholder: Sonoran CAD showing the all-signs control center and an individual sign's Live Map editor.

## Sonoran Power Grid

Power Grid integration is on by default. If you use it:

1. Start `sonoran-powergrid` before `sonoran-streetsigns`.
2. Keep `Config.Power.enabled = true`.
3. Use the Power Grid link tool within three meters of the sign's base to link it.

A power outage turns the linked sign's screen off while leaving the physical sign in place. Restoring power allows its display to return.

If your server does not use Power Grid, set `Config.Power.enabled = false`.

> Screenshot placeholder: The same linked sign with power available and during a Power Grid outage.

## Discord notifications

Set `Config.Webhooks.enabled = true`, then paste Discord webhook URLs into the channels you want to use:

* `Config.Webhooks.signChanges.url` — Sign creation, changes, and deletion.
* `Config.Webhooks.bannedWordAlerts.url` — Attempts to save blocked text.

Leave a channel's URL empty to disable that channel. Add Discord role IDs to `Config.Webhooks.bannedWordAlerts.mentionRoleIds` if moderation alerts should mention a role.

Keep webhook URLs private and restart Street Signs after updating the configuration.
