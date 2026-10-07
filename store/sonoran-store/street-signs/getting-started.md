---
description: Install Sonoran Street Signs, configure access, and check your first sign.
---

# Installation

## Before you begin

You need:

* A current FiveM server with OneSync enabled
* Access to the server's resources folder and `server.cfg`
* The Cfx.re account that owns the Sonoran Street Signs package

Sonoran CAD, Power Grid, QBCore, and ESX are optional. Sonoran Street Signs does not require a database.

## Download and install

1. Download and extract the package from the [Cfx.re Portal](https://portal.cfx.re/). See [Accessing Tebex Assets](../general/tebex-assets.md) for help.
2. Place both complete folders, `sonoran-streetsigns` and `sonoran-streetsigns_helper`, beside each other in your server's resources directory.
3. Inside `sonoran-streetsigns`, rename `config.CHANGEME.lua` to `config.lua`.
4. Review [Permissions](permissions.md) and give the appropriate staff or jobs access.
5. If you do not use Sonoran Power Grid, set `Config.Power.enabled = false` in `config.lua`. CAD integration is off by default.
6. Add the following to `server.cfg`, then restart the server:

```cfg
ensure sonoran-streetsigns
```

Keep the folder names unchanged. Each folder must contain its own `fxmanifest.lua` directly inside it. The helper handles update restarts; it does not need an `ensure` line.

If you use a framework permission mode or optional integration, start that resource before Sonoran Street Signs. Follow [Integrations and Webhooks](integrations-and-webhooks.md) for CAD and Power Grid setup.

## First use

1. Join with an account that has Sonoran Street Signs access.
2. Run `/sign` and select **Nearby signs** or **All signs**.
3. Walk within three meters of the sign's control panel at the base. Select **Open visual editor** from the menu, or press `E` at the panel.
4. Edit the message and select **Save sign**. Check the sign in-game.

Default signs are added once. You can edit, move, or remove them through `/sign`; restarts and updates do not restore defaults you deleted or overwrite your saved placements with newer default positions.

> Screenshot placeholder: Player at the sign's lower control panel with the `E` edit prompt visible.

## Updating

Automatic updates are off by default. To enable them, set `Config.Updater.EnableAutoUpdate = true` and add:

```cfg
add_ace resource.sonoran-streetsigns command allow
add_ace resource.sonoran-streetsigns_helper command allow
add_unsafe_child_process_permission sonoran-streetsigns
```

The updater keeps your configuration and saved sign data. A needed restart waits until the server is empty.

For a manual update, back up `config.lua` and `data/signs.json`, stop the resource, replace the package files, and keep your configuration and saved data before starting it again. Replace both resource folders when the package includes helper changes.

If you are upgrading from an older configuration, compare it with the new `config.CHANGEME.lua`. Keep your access rules and integration settings in the current template. Old rendering, controller, and layout configuration options are no longer customer settings; use the sign editor for individual displays.

Review [Configuration](configuration-reference.md) for the remaining customer settings and [Using Signs](commands-and-usage.md) for placement and editing.
