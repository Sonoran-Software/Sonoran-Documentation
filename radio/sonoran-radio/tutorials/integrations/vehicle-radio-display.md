---
description: View Sonoran Radio on a working, in-vehicle 3D display!
---

# Vehicle Radio Display

## Vehicle Radio Display (Video Tutorial)

{% embed url="https://www.youtube.com/watch?v=xbV3KpBOFi4" %}

{% hint style="info" %}
The vehicle radio display is a **free** Tebex script fully compatible with the **free** version of Sonoran Radio.
{% endhint %}

<figure><img src="../../.gitbook/assets/display_promo (1).png" alt=""><figcaption><p>Sonoran Radio - Vehicle Display</p></figcaption></figure>

## Installation (Written) <a href="#acquire-the-script" id="acquire-the-script"></a>

## 1. Download the Script <a href="#acquire-the-script" id="acquire-the-script"></a>

"Purchase" the **free** [vehicle radio display from the Sonoran Store](https://www.sonoran.store/package/6668073).

Once purchased, see: [How to download the script from your Keymaster account.](https://docs.sonoran.store/general/tebex-assets)

## 2. Install the script

#### A. Extract Folders

Extract the script's two folders (`sonoran-radiodisplay` and `sonoran-radiodisplay_helper`) to a folder in your server's resources folder called `[sonoranradio]`.

<figure><img src="../../.gitbook/assets/image (240).png" alt=""><figcaption><p>Radio Display - Folders</p></figcaption></figure>

#### B. Rename Config Files

Inside of the `sonoran-radiodisplay` folder:

* Rename `config.changeme.lua` to `config.lua`
  * See more about the [configuration options](vehicle-radio-display.md#configuration) here.
* Rename `radios.changeme.json` to `radios.json`

#### C. Start the Resource

To start the display resource and give the auto-updater permissions to run, paste the following into your `server.cfg`

```
# Start the Radio Display Resource
ensure sonoran-radiodisplay

# Grant permissions to the auto-updater
add_ace resource.sonoran-radiodisplay command allow
add_ace resource.sonoran-radiodisplay_helper command allow
```

## Configuration

The `config.lua` file allows you to customize the labels, ACE permissions, and more!

<details>

<summary>Default <code>config.lua</code></summary>

```lua
Config = {}

Config.debug_mode = false -- Enable debug mode
Config.configuration_version = 1.0
Config.auto_update = true -- Enable auto updates

Config.lang = {
    addNewRadioHelp = 'Open the menu to begin spawning a new in-car model model',
    vehNotCompatible = 'This vehicle is not compatible with the in-car model placement system!',
    vehAlrRadio = 'This vehicle already has a valid in-car radio!',
    radioMenuHeader = 'Sonoran In-Car Radio',
    creditsPanel = 'Made by',
    spawningSubMenu = 'In-Car Radio Spawning',
    attachingSubMenu = 'Attaching',
    deletionSubMenu = 'Are you sure?',
    radioAttachMenuButton = 'Attach In-Car Radio',
    deleteMenuButton = 'Delete Current In-Car Radio',
    spawnMenuButton = 'Spawn In-Car Radio',
    deletionConfirmationButton = 'Yes, remove from all of these vehicles',
    deletionCancelButton = 'Cancel',
    deletionCancelled = 'In-Car Radio deletion cancelled',
    noRadioFound = 'No In-Car Radio is in this vehicle!',
    modelComboBox = 'Model:',
    vehAlrRadioNoti = '~r~This vehicle already has an In-Car Radio of this type',
    notInVeh = '~r~You must be in a vehicle!',
    vehicleBone = 'Radio - Vehicle Bone',
    object = "Object:",
    vehicleBoneComboBox = 'Vehicle Bone',
    objectName = 'Sonoran In-Car Radio',
    attachButton = 'Attach',
    detachButton = 'Detach',
    confirmPlacementButton = 'Apply to all of this vehicle model',
    cannotGoFaster = '~r~You cannot go any faster!',
    cannotGoSlower = '~r~You cannot go any slower!',
}

Config.commands = {
    carRadioMenu = 'radiodisplay',
    restricted = false -- should the radio display menu be restricted?
}

Config.permissionMode = "ace" -- Available Options: ace, framework, custom

-- Ace Permissions Section --
Config.acePerms = {
    aceObjectUseMenu = "sonoran.incarradio", -- Select the ace for placing new In-Car radios
    aceObjectAdminUseMenu = "sonoran.incarradio.admin", -- Select the ace for placing new In-Car radios into all vehicles of the same model
}

-- Framework Related Settings --
Config.framework = {
    frameworkType = "qb-core", -- This setting controls which framework is in use options are esx or qb-core
    civilianJobNames = {"unemployed"}, -- An array of job names that should be allowed to use the radio menu
    adminJobNames = {"admin"}, -- An array of job names that should be allowed to use the radio menu as an admin
    useCivilianJobListAsBlacklist = false, -- This will treat the civilian job list as a blacklist rather than a whitelist
}

-- Configuration For Custom Permissions Handling --
Config.custom = {
    checkPermsServerSide = true, -- If true the permission event will be sent out to the server side resource, this is recommended
    permissionCheck = function(_, type) -- This function will always be called server side.
        if type == 0 then -- Check permission to use the menu
            return true or false -- Return true if they have admin, return false if they don't
        end
    end
}

Config.general = {
    notificationType = "native", -- Available options: native, pNotify, okokNotify
    useAllowlistAsBlacklist = false, -- If true, the Config.allowlistedCars will be treated as an blacklist
}

Config.allowlistedCars = {
    "POLICE",
    "POLICE2",
    "POLICE3",
    "POLICE4",
    "FBI",
    "FBI2",
    "SHERIFF",
    "SHERIFF2",
}

```

</details>

## Spawning the Radio Display

1. Sit in a stopped vehicle and run `/radiodisplay` (or your configured menu command).
2. Select **Spawn In-Car Radio**, then **Sonoran In-Car Radio** to open placement for a new radio. To reposition an existing radio, select **Attach In-Car Radio**, then **Position this vehicle's radio**.

### Move

Select **Move** and left-drag a red, green, or blue arrow to move the radio along that axis. Drag a colored square to move along two axes at once.

> **Screenshot placeholder — Move gizmo:** In-game vehicle view with the radio, red/green/blue movement arrows, plane squares, and the placement toolbar visible with **Move** selected.

### Rotate

Select **Rotate** and left-drag a colored ring to turn the radio around that axis. The outer ring rotates it relative to your current view.

> **Screenshot placeholder — Rotation rings:** In-game vehicle view with the radio, colored rotation rings, outer ring, and the placement toolbar visible with **Rotate** selected.

Switch between **Local axes** and **World axes** to align movement and rotation with the radio or the world. Enable **Snap** for 1 cm movement and 5° rotation steps.

### Adjust your view

| Control | Action |
| --- | --- |
| Right-drag | Look around the cabin. Enable **Orbit radio** to circle the radio instead. |
| Middle-drag | Lean the camera slightly. |
| Mouse wheel | Zoom in or out. |
| **Look at display** | Aim the camera at the radio. |
| **Cabin view** | Restore the starting camera view. |

### Apply or save

* **Apply to this vehicle** applies the placement to the current radio without saving it for other vehicles.
* **Save for this vehicle model** saves the placement and uses it for vehicles of the same model. This requires administrator access when menu restrictions are enabled.
* **Reset** restores the radio's position and rotation from when you opened the editor.
* **Cancel** leaves an existing radio unchanged, or removes a new radio created for this placement session.

When restrictions are enabled in [configuration](vehicle-radio-display.md#configuration), menu access uses the configured permissions. With ACE permissions, `Config.acePerms.aceObjectUseMenu` grants menu access and `Config.acePerms.aceObjectAdminUseMenu` grants administrator access, including model saves.

Keep the vehicle stopped while placing the radio. Moving the vehicle or leaving it cancels placement. Close the tablet or other windows before opening the editor.

### `radios.json` Property Explanation <a href="#radars.json-property-explanation" id="radars.json-property-explanation"></a>

| Property Name | Example  | Notes                                                               |
| ------------- | -------- | ------------------------------------------------------------------- |
| `ID`          | `2`      | A unique ID for this saved radio placement.                         |
| `Position`    |          | The radio's saved x, y, and z offsets.                               |
| `Rotation`    |          | The radio's saved pitch, roll, and yaw.                              |
| `Vehicle`     | `POLICE` | This is the vehicles spawn code                                     |
| `Bone`        | `-1`     | The vehicle attachment point used by the radio.                     |

### Commands

| Command Name    | Command Description                                                 | Required Permissions |
| --------------- | ------------------------------------------------------------------- | -------------------- |
| `/radiodisplay` | Open the radio menu to spawn or reposition a display.                | As configured        |

### Default Vehicles

<table><thead><tr><th width="254">Vehicle Spawncode</th><th>Adds Radio by Default</th></tr></thead><tbody><tr><td><code>FBI</code></td><td><code>yes</code></td></tr><tr><td><code>FBI2</code></td><td><code>yes</code></td></tr><tr><td><code>POLICE</code></td><td><code>yes</code></td></tr><tr><td><code>POLICE2</code></td><td><code>yes</code></td></tr><tr><td><code>POLICE3</code></td><td><code>yes</code></td></tr><tr><td><code>POLICE4</code></td><td><code>yes</code></td></tr><tr><td><code>POLICEOLD1</code></td><td><code>no</code></td></tr><tr><td><code>POLICEOLD2</code></td><td><code>no</code></td></tr><tr><td><code>SHERIFF</code></td><td><code>yes</code></td></tr><tr><td><code>SHERIFF2</code></td><td><code>yes</code></td></tr></tbody></table>

## Additional Display Resources

Loving the radio display? Check out our [in-vehicle police radar](https://docs.sonoran.store/radar-display) and [radar detector](https://docs.sonoran.store/radar-detector) displays!

<div><figure><img src="../../.gitbook/assets/image (257).png" alt=""><figcaption><p>Sonoran Store: Radar Display</p></figcaption></figure> <figure><img src="../../.gitbook/assets/image (258).png" alt=""><figcaption><p>Sonoran Store: Radar Detector</p></figcaption></figure></div>

### Changelog

#### v1.0.1

* `fix: Duplicate radio items when a passenger is in the vehicle`

#### v1.0.0

* `Initial Release`
