---
description: >-
  Configure Street Signs integrations including CAD, power support, and Discord
  webhooks.
---

# Integrations and Webhooks

## Sonoran CAD

Street Signs can create an all-signs control center in CAD and add an editor to
each sign's live-map blip menu. Changes made in-game update CAD, and changes made
in CAD update the sign in-game.

### Requirements

* A Sonoran CAD build that supports custom Integration Panels and panel-enabled
  custom blips
* The current `sonorancad` FiveM resource
* Street Signs permission to read the protected CAD key

Add this after the `sonorancad` configuration in `server.cfg`:

```cfg
ensure sonorancad
add_convar_permission sonoran-streetsigns read sonoran_apiKey
ensure sonoran-streetsigns
```

Then enable CAD in `config.lua`:

```lua
Config.CAD.enabled = true
```

### Two Separate CAD Permissions

Street Signs registers two custom panels:

* **SonoranDOT VMS Control Center** shows all signs in one searchable window.
* **SonoranDOT VMS Sign Editor** appears inside an individual sign's live-map
  blip menu.

CAD exposes these as separate custom panel permissions. Assign both to users who
should manage signs everywhere, or assign only the control center or blip editor
when a role needs narrower access.

The panel keys are configurable, but do not change them after users have been
assigned permissions unless you intend to create new CAD permission entries.

### What Synchronizes

On startup, Street Signs publishes:

* Every sign's ID, label, location, text, theme, enabled state, and power state
* The complete grid layout
* Selected icon IDs and the configured in-game icon list
* HTTPS image URLs used by compatible future billboard controllers
* One custom map blip per sign

The game server remains responsible for saving sign data. CAD actions still go
through revision checks, banned-word filtering, and the remote grid/image
settings before they are accepted.

{% hint style="info" %}
CAD currently allows up to 100 instances for one panel on one server. A single
Street Signs editor panel therefore supports up to 100 independently addressed
signs.
{% endhint %}

### CAD Settings

```lua
Config.CAD = {
    enabled = true,
    syncOnStartup = true,
    actionPollMs = 2000,
    actionBatchSize = 50,
    panels = {
        overviewKey = 'sonoran-dot-signs',
        overviewName = 'SonoranDOT VMS Control Center',
        overviewInstanceKey = 'all-signs',
        overviewSurfaces = { 'dispatch', 'police', 'fire', 'ems' },
        editorKey = 'sonoran-dot-sign',
        editorName = 'SonoranDOT VMS Sign Editor'
    },
    blips = {
        enabled = true,
        subType = 'SONORAN_VMS_SIGN',
        icon = 'fas fa-sign-hanging',
        color = '#f5a623',
        menuTitle = 'Edit VMS sign'
    },
    shareIconCatalog = true,
    allowRemoteGridUpdates = true,
    allowRemoteImageUpdates = true
}
```

Set `allowRemoteGridUpdates` or `allowRemoteImageUpdates` to `false` if those
changes should be accepted only from the in-game controller.

## Sonoran Power Grid

Street Signs can register each sign as a Power Grid device. When its linked
power system is disabled, the display turns off for all players and CAD shows
the sign as having no power. Repairing the system restores the display. The
physical sign prop remains in place.

The integration is enabled by default:

```lua
Config.Power = {
    enabled = true,
    mode = 'sonoran_powergrid',
    resource = 'sonoran-powergrid',
    scriptIdentifier = 'sonoran_streetsigns',
    linkDistance = 3.0
}
```

Start `sonoran-powergrid` before Street Signs. To link a sign, use the Power Grid
link tool near the base of the persisted sign. Street Signs chooses the nearest
sign within `linkDistance`.

If your server does not run Power Grid, set `enabled = false`.

## Discord Webhooks

Street Signs can post webhook messages for:

* Sign create, update, and delete actions
* The actor responsible for a change, including CAD actions
* Blocked banned-word attempts

Enable the system with:

```lua
Config.Webhooks.enabled = true
```

### Sign Change Webhooks

```lua
Config.Webhooks.signChanges = {
    url = '',
    username = 'Street Signs',
    avatarUrl = '',
    color = 3447003
}
```

### Banned Word Alerts

```lua
Config.Webhooks.bannedWordAlerts = {
    url = '',
    username = 'Street Signs Moderation',
    avatarUrl = '',
    color = 15158332,
    mentionRoleIds = {
        -- '123456789012345678'
    }
}
```

Keep webhook URLs in the server configuration. Do not place them in the hosted
controller or send them through iframe messages.

## Auto Update

Street Signs includes updater support through `sonoran-streetsigns` and
`sonoran-streetsigns_helper`.

```lua
Config.Updater = {
    EnableAutoUpdate = false
}
```

If enabled, grant both resources command access:

```cfg
add_ace resource.sonoran-streetsigns command allow
add_ace resource.sonoran-streetsigns_helper command allow
```
