---
description: Install Sonoran Notepad with the required Sonoran CAD tablet dependency.
tags:
  - fivem
  - notepad
  - installation
  - sonoran cad
---

# Installation

## Before you begin

You need:

* A current FXServer
* The current [SonoranCADFiveM integration](https://docs.sonoransoftware.com/cad/integration-plugins/in-game-integration/fivem-installation)
* Its `tablet` resource enabled and working
* Access to the server's resource directory and `server.cfg`
* Access to the Cfx.re account that owns the Notepad package

The standard SonoranCADFiveM configuration already enables `tablet`. Complete that integration's setup before installing Sonoran Notepad.

## Download the resource

1. Sign in to the [Cfx.re Portal](https://portal.cfx.re/) with the account that owns the package.
2. Download and extract Sonoran Notepad.
3. Place the complete `sonoran-notepad` folder in the server's resources directory.

The resource manifest must be directly inside the folder:

```
resources/
└── [sonoran]/
    └── sonoran-notepad/
        ├── fxmanifest.lua
        ├── config/
        ├── client/
        ├── server/
        └── html/
```

Do not leave an extra nested folder such as `sonoran-notepad/sonoran-notepad/fxmanifest.lua`, and do not rename the resource.

## Prepare the configuration

Before the first start, rename:

```
config/config.CHANGEME.lua
```

to:

```
config/config.lua
```

Then review the command, keybind, updater, and safety limits in [Configuration](configuration.md). If the template is still present on first start, the resource attempts to rename it once, but preparing the file yourself makes the deployed configuration explicit.

## Configure the start order

Keep the Sonoran CAD integration's existing start configuration, then start Notepad afterward:

```cfg
exec @sonorancad/sonorancad.cfg
ensure sonoran-notepad
```

Do not add a second `ensure tablet` line when `sonorancad.cfg` already starts it. If your server manually lists individual Sonoran CAD resources instead, keep your existing list and confirm `tablet` starts before `sonoran-notepad`.

## First test

1. Fully restart the server and confirm `tablet` starts before `sonoran-notepad`.
2. Join with a player account linked to Sonoran CAD.
3. Open the in-game tablet and sign in to CAD.
4. Run `/notepad` or press `F7`.
5. Enter a title and body, move to the next page, and return to the first page.
6. Close and reopen the notepad and confirm the local note remains.
7. Confirm the CAD sync warning is not visible while the tablet is linked and signed in.
8. Sign out or test with an unlinked player and confirm the warning appears without blocking editing.

{% hint style="warning" %}
Local-only notes use a memory cache. Restarting the resource or server clears that cache, so restore CAD synchronization before relying on local-only notes for a later session.
{% endhint %}
