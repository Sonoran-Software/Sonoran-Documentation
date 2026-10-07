---
description: Choose who can edit messages and manage Sonoran Street Signs.
---

# Permissions

Choose `ace`, `standalone`, `qb`, or `esx` in `Config.PermissionMode`. Restart Sonoran Street Signs after changing the configuration.

## ACE permissions

ACE is the default mode. Grant only the actions each group needs:

| Permission | Access |
| --- | --- |
| `sonoran.signs.set` | Use the visual editor, including text, icons, layout, schedules, and display settings |
| `sonoran.signs.edit` | Use menu text/settings tools and reposition existing signs |
| `sonoran.signs.create` | Place new signs |
| `sonoran.signs.delete` | Remove signs |
| `sonoran.signs.admin` | All actions, including the full controller and refresh tools |

For administrators, add this to `server.cfg` using your server's existing staff group:

```cfg
add_ace group.admin sonoran.signs.admin allow
```

For a group that should use the visual editor without placing or deleting signs:

```cfg
add_ace group.dot sonoran.signs.set allow
```

These examples grant access to groups; players must already belong to the chosen group.

`set` is broader than text-only access: it includes the visual editor's settings. Grant both `set` and `edit` when a group also needs the separate menu settings and repositioning tools. Administrator access does not bypass the distance requirement for in-game saves.

## QBCore or ESX

Set `Config.PermissionMode = 'qb'` or `'esx'`, then review `Config.QBJobs` or `Config.ESXJobs`.

* A number allows that job grade and higher: `police = 3`.
* A list allows only those exact grades: `dot = { 0, 2 }`.

Matching jobs receive full sign-management access, including administrator tools. Start the framework before Sonoran Street Signs.

## Standalone

Set `Config.PermissionMode = 'standalone'` and add allowed player identifiers to `Config.StandaloneAllowed`:

```lua
Config.StandaloneAllowed = {
    ['license:REPLACE_WITH_PLAYER_LICENSE'] = true
}
```

Allowed players receive full management access. A sign's original creator can also edit its content and settings.

## Sonoran CAD

CAD access is assigned separately from in-game permissions. Give the appropriate CAD roles access to both **Sonoran Street Signs** controllers: the overview and individual Live Map editor. See [Integrations and Webhooks](integrations-and-webhooks.md).
