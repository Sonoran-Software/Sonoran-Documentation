---
description: Connect Sonoran Street Signs to Sonoran CAD, Sonoran Power Grid, and Discord.
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

In CAD, give the appropriate roles access to the **Sonoran Street Signs**
controller. It manages all signs and also opens from their Live Map markers.
Search for the sign you want to edit. In-game ACE or job access does not
automatically grant CAD panel access.

If updating an existing installation, assign the overview controller permission
(`sonoran-dot-signs`). The previous individual editor permission is no longer used
by the map markers.

Changes synchronize between CAD and FiveM. CAD edits save immediately and can be made remotely.

* Search for a sign in the control center, or open **Sonoran Street Signs** from its Live Map marker.
* Update existing text and icon slots, choose a quick message, or adjust the theme, brightness, screen state, and Auto-Dim.
* Each sign card also lists existing schedules. Its schedule toggle controls whether the screen is on during that period. **Copy to base message** copies the schedule's text into the normal message; it does not remove the scheduled period.

CAD's message preview shows text. Check the physical display in-game when confirming an arranged layout or a scheduled message. Use the in-game editor to rearrange blocks and create schedules, and `/sign` to place, move, or delete signs.

CAD receives all signs together at startup and after saved changes. Map markers
load gradually to avoid rate limits; 76 new markers take about four minutes.
You can use the controller while markers are loading. A failed upload leaves the
in-game save intact and retries pending changes.

CAD's documented limits are **300 state uploads/minute** and **30 marker creates
or updates/minute per endpoint**, shared by integrations using the same API key.
Street Signs spaces state uploads at least one second apart and marker writes at
least three seconds apart. See the official [panel limits](https://github.com/Sonoran-Software/SonoranCAD-Documentation/blob/master/api-integration/api-endpoints-v2/integration-panels/README.md)
and [marker limits](https://github.com/Sonoran-Software/SonoranCAD-Documentation/blob/master/api-integration/api-endpoints-v2/emergency/map/create-blip.md).

> Screenshot placeholder: Sonoran CAD showing the Sonoran Street Signs controller, inline text and icon slots, and a Live Map marker opening the shared controller.

## Sonoran Power Grid

Power Grid integration is on by default. If you use it:

1. Start `sonoran-powergrid` before `sonoran-streetsigns`.
2. Keep `Config.Power.enabled = true`.
3. Use the Power Grid link tool within three meters of the sign's base to link it.

A power outage turns the linked sign's screen off while leaving the physical sign in place. Restoring power allows its display to return, provided the screen is enabled and the current schedule allows it.

If your server does not use Power Grid, set `Config.Power.enabled = false`.

> Screenshot placeholder: The same linked sign with power available and during a Power Grid outage.

## Discord notifications

Set `Config.Webhooks.enabled = true`, then paste Discord webhook URLs into the channels you want to use:

* `Config.Webhooks.signChanges.url` — Sign creation, changes, and deletion.
* `Config.Webhooks.bannedWordAlerts.url` — Attempts to save blocked text.

Leave a channel's URL empty to disable that channel. Add Discord role IDs to `Config.Webhooks.bannedWordAlerts.mentionRoleIds` if moderation alerts should mention a role.

Keep webhook URLs private and restart Sonoran Street Signs after updating the configuration.
