---
description: Implements name and plate lookups via the CAD.
hidden: true
---

# Lookups

{% hint style="warning" %}
This submodule utilizes API endpoints that require the **plus** version of Sonoran CAD or higher. For more information, view our [pricing ](../../../pricing/faq/)page.
{% endhint %}

{% hint style="danger" %}
This submodule is currently only used as a dependency for other submodules , and **does not have any in-game commands for general player usage**.
{% endhint %}

{% hint style="success" %}
Looking for VPS, web, or dedicated hosting? Check out our official [server hosting](/broken/pages/-MRResNcPrj2q6MmmS6j)!
{% endhint %}

This submodule Implements name and plate lookups via the CAD.

## Activation Video

Click to view our [WraithV2 plate reader and lookup installation video](https://youtu.be/IgaISh1CykE).

## Activation Guide

### 1. Download and Install the Core

If you haven't already, be sure to install and configure the [SonoranCAD Core](../fivem-installation/) first.

### 2. Activate the Submodule and all Dependencies

Follow the [submodule activation guide](../submodule-configuration/#activating-a-submodule) for the required submodules.

### 3. Set Your API ID

Don't forget to set your account [API ID](../../../api-integration/getting-started/setting-your-api-id.md) to properly link your in-game user to the CAD.

## Configuration

{% hint style="warning" %}
Do not set the cache timer too low or you may run into rate limiting.
{% endhint %}

| Option          | Description                                                     | Default                  |
| --------------- | --------------------------------------------------------------- | ------------------------ |
| maxCacheTime    | How long to cache a looked-up plate.                            | 120 seconds              |
| stalePurgeTimer | How long between "stale" plate cleanups (keep unscanned plates) | 600 seconds (10 minutes) |

## Usage

### Exported Functions

NOTE: For return object definitions, see the [Developer Documentation](https://info.sonorancad.com/sonoran-cad/api-integration/api-endpoints/lookup-name-or-plate).

| Function       | Arguments                                    | Description                                            | Returns                                                       |
| -------------- | -------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------- |
| cadNameLookup  | FirstName, MiddleInitial, LastName, callback | Looks up a character based on the arguments specified. | Objects containing character data and all associated objects. |
| cadPlateLookup | plate, basicFlag, callback, autoLookup       | Looks up a vehicle based on specified plate number.    | Objects containing vehicle data and all associated objects.   |

#### Function Details

```lua
--[[
    cadNameLookup
        first: First Name
        last: Last Name
        mi: Middle Initial
        callback: function called with return data
]]
function cadNameLookup(first, last, mi, callback)

--[[
    cadPlateLookup
        plate: plate number
        basicFlag: true returns cached record if possible which only contains vehicleRegistrations object, false calls the API
        callback: the function called with the return data
        autoLookup: when populated with an API ID, pops open a search window on the officer's CAD (optional)
]]
function cadPlateLookup(plate, basicFlag, callback, autoLookup)
```

## For Developers

This plugin also adds the commands `namefind` and `platefind` which takes the above arguments and prints the returned JSON object to the console.

### ACE Permissions

These developer commands are registered with FiveM command restriction enabled. Grant the exact nodes to a restricted developer or support role:

```cfg
add_ace group.sonoran_cad_debug command.namefind allow
add_ace group.sonoran_cad_debug command.platefind allow
```

The command names are fixed in the current resource and are not configurable. They are intended for developer use, not general player access.
