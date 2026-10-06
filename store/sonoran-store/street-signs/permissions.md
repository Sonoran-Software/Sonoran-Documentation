---
description: Choose who can edit messages and manage Street Signs.
---

# Permissions

Choose `ace`, `standalone`, `qb`, or `esx` in `Config.PermissionMode`. Restart Street Signs after changing the configuration.

## ACE permissions

ACE is the default mode. Grant only the actions each group needs:

| Permission | Access |
| --- | --- |
| `sonoran.signs.set` | Edit sign messages and use the visual editor |
| `sonoran.signs.edit` | Change sign settings and placement |
| `sonoran.signs.create` | Place new signs |
| `sonoran.signs.delete` | Remove signs |
| `sonoran.signs.admin` | All actions, including the full controller and refresh tools |

For administrators, add this to `server.cfg` using your server's existing staff group:

```cfg
add_ace group.admin sonoran.signs.admin allow
```

For a group that should only update messages:

```cfg
add_ace group.dot sonoran.signs.set allow
```

These examples grant access to groups; players must already belong to the chosen group.

## QBCore or ESX

Set `Config.PermissionMode = 'qb'` or `'esx'`, then review `Config.QBJobs` or `Config.ESXJobs`.

* A number allows that job grade and higher: `police = 3`.
* A list allows only those exact grades: `dot = { 0, 2 }`.

Matching jobs receive full sign-management access, including administrator tools. Start the framework before Street Signs.

## Standalone

Set `Config.PermissionMode = 'standalone'` and add allowed player identifiers to `Config.StandaloneAllowed`:

```lua
Config.StandaloneAllowed = {
    ['license:REPLACE_WITH_PLAYER_LICENSE'] = true
}
```

Allowed players receive full management access. A sign's original creator can also edit its content and settings.

## Sonoran CAD

CAD access is assigned separately from in-game permissions. Give the appropriate CAD roles access to **SonoranDOT VMS Control Center** and/or **SonoranDOT VMS Sign Editor**. See [Integrations and Webhooks](integrations-and-webhooks.md).
