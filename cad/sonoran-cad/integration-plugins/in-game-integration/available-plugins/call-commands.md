---
description: Send emergency calls from in-game to the CAD.
---

# Call Commands

<figure><img src="../../../.gitbook/assets/sonoran_call_commands_promo (1).png" alt=""><figcaption></figcaption></figure>

## Activation Guide

### 1. Download and Install the Resource

{% hint style="info" %}
This submodule is already **enabled by default** when installing the [Sonoran CAD FiveM resource](../fivem-installation/).

\
The [locations submodule](locations.md) includes required logic to send location data and is **already enabled by default**. Keep this submodule enabled to maintain functionality.

\
The [postals submodule](postals.md) is optional and also enabled by default. Keep this submodule enabled if you wish to include postal code information with emergency calls.
{% endhint %}

### 2. Adjust the Configuration

The CAD display settings are stored inside of the `/configuration/callcommands_config.lua` file.

{% hint style="info" %}
Call Commands no longer has a per-submodule notification selector. Caller notifications now use the shared FiveM notification system configured in `/configuration/config.json` with `notificationSystem`.
{% endhint %}

### 3. Ensure Players are Linked

Ensure the player has already [linked their CAD](../link-user-in-game.md) for this integration's panic feature to work.

## Usage

### Commands

In-game commands can be used to

* `/panic` Toggles your unit's panic status
* `/911` Sends a 911 call to the CAD
* `/511` Sends a 511 call to the CAD (Civil)
* `/311` Sends a non-emergency call to the CAD (Civil)

<figure><img src="../../../.gitbook/assets/image (578).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (579).png" alt=""><figcaption></figcaption></figure>

### Key Binds

Users can customize a keybind to toggle their panic status.

Navigate to **Settings** > **Keybinds** > **FiveM** and look for the **Panic Button** keybind under the resource `sonorancad`.

<figure><img src="../../../.gitbook/assets/image (580).png" alt=""><figcaption></figcaption></figure>

### ACE Permissions

The distributed `sonorancad.cfg` grants the panic command node used by the panic keybind:

```cfg
add_ace builtin.everyone command.panic allow
```

`/panic` is currently registered with ACE restriction disabled, so this bundled entry provides compatibility/default access rather than acting as an authorization boundary. The `/911`, `/311`, and `/511` commands are also registered without ACE restriction. Do not replace this line with a group grant expecting `/panic` to become role-restricted; the current source does not enforce `command.panic`.

### Call Location

By default, calls responded to via the `/rcall` command located in [Dispatch Notify](dispatch-notify.md) will attempt to be routed to the callers current location, rather than the location of the call. If you would like calls to route to the location of the original call, please set `useCallLocation` to `true`
