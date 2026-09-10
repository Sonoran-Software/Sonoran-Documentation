---
description: Allows you to change a unit's status in the CAD.
---

# Unit Status

<figure><img src="../../../.gitbook/assets/unit_status_promo.png" alt=""><figcaption></figcaption></figure>

## Activation Guide

### 1. Download and Install the Resource

{% hint style="info" %}
This submodule is already **enabled by default** when installing the [Sonoran CAD FiveM resource](../fivem-installation/).
{% endhint %}

### 2. Adjust the Configuration

The bodycam settings are stored inside of the `/configuration/unitstatus_config.lua` file.

<details>

<summary><code>unitstatus_config.lua</code></summary>

| Option           | Description                                                  | Default                  |
| ---------------- | ------------------------------------------------------------ | ------------------------ |
| setStatusCommand | Command that will allow units to set their own status.       | setstatus                |
| statusCodes      | Array of status codes, configurable to be community-specific | Default SonoranCAD setup |
| enableAceCheck   | Require the server-side ACE check before a status update.    | `true`                   |

</details>

### 3. Ensure Players are Linked

Ensure the player has already [linked their CAD](../link-user-in-game.md) for this integration to work.

### 4. Setup User Permissions

When `enableAceCheck` is `true` (the default), players using the status command need the literal `command.setstatus` [ACE permission](https://forum.cfx.re/t/basic-aces-principals-overview-guide/90917). The current server-side check is not derived from `setStatusCommand`, so changing the client command name does not change this permission node.

**Example**

`add_ace group.sonoran_cad_units command.setstatus allow`

Add this line to your `config.cfg` for a group containing units who should be able to update their status. Avoid granting `builtin.everyone` unless public access is intentional.

## Commands

In-game commands can be used to

* `/setstatus [status]` Set your unit status in the CAD.

<figure><img src="../../../.gitbook/assets/image (595).png" alt=""><figcaption></figcaption></figure>

## Function

This is a server-side function only and is exported as `cadSetUnitStatus`. Use `setUnitStatus` if using with other submodules.

```lua
cadSetUnitStatus(<apiId>, <status>, [player])
```

* apiId: The identifier attached to the unit
* status: A status, can be the actual string or a number, based on configuration
* player (optional): server ID of the player, used to send a client event

## Event

```lua
--[[
    Event Name: SonoranCAD::unitstatus:UpdateStatus
    Arguments:
        statusText: Text or number of the status to set
]]

```
