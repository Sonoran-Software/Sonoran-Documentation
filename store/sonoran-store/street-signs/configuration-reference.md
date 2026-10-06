---
description: Review the customer settings in the Street Signs configuration.
---

# Configuration

Edit `sonoran-streetsigns/config.lua`, save it, and restart Street Signs after changes. The supplied configuration contains the settings most servers need.

| Setting | Default | Purpose |
| --- | --- | --- |
| `Config.PermissionMode` | `'ace'` | Choose ACE, standalone, QBCore, or ESX access. |
| `Config.AcePermissions` | Five action permissions | Permission names used in ACE mode. |
| `Config.QBJobs` / `Config.ESXJobs` | Example jobs and grades | Jobs allowed to manage signs in the selected framework. |
| `Config.StandaloneAllowed` | Empty | Allowed player identifiers in standalone mode. |
| `Config.Updater.EnableAutoUpdate` | `false` | Enable automatic resource updates. |
| `Config.CAD.enabled` | `false` | Enable Sonoran CAD panels and Live Map sign controls. |
| `Config.Power.enabled` | `true` | Enable Sonoran Power Grid integration. Disable if unused. |
| `Config.Webhooks.enabled` | `false` | Enable Discord notifications. |
| `Config.Webhooks.signChanges.url` | Empty | Discord webhook for sign changes. |
| `Config.Webhooks.bannedWordAlerts.url` | Empty | Discord webhook for blocked text attempts. |
| `Config.Webhooks.bannedWordAlerts.mentionRoleIds` | Empty | Optional Discord roles to mention in moderation alerts. |
| `Config.Moderation.enabled` | `true` | Enable the included word filter. |
| `Config.Moderation.extraWords` | Empty | Additional words or phrases matched anywhere in text. |
| `Config.Moderation.extraWholeWords` | Empty | Additional terms matched as complete words. |

Review the example jobs before enabling a framework permission mode. Matching jobs receive full sign-management access.

Use the in-game menu or editor to change individual signs' color, brightness, messages, and placement.

When updating an older installation, use the current `config.CHANGEME.lua` as the reference and keep only the supported customer settings above. Preserve `data/signs.json` so your saved signs remain in place. See [Updating](getting-started.md#updating).

* [Installation and updating](getting-started.md)
* [Permissions](permissions.md)
* [Integrations and Webhooks](integrations-and-webhooks.md)
