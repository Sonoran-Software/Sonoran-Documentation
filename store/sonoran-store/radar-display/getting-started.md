---
description: >-
  This page will walk you through getting and installing the Radar Display
  script.
---

# Getting Started

## Acquire the Script

After purchasing the script through the Sonoran store you may [download the script through the keymaster account](../general/tebex-assets.md) that purchased the script. Upon downloading extract the file to a safe place.

## Install Prerequisite

{% hint style="warning" %}
You must use the Sonoran Fork of WK\_Wars2x found [here](https://github.com/Sonoran-Software/wk_wars2x/releases/latest).

Minimum version required: `v1.3.3-sonoran`
{% endhint %}

{% hint style="info" %}
If you are using the Sonoran CAD FiveM Integration, **DO NOT** install a second copy of WK\_Wars2x, it is included and updated with the `sonorancad` resource.
{% endhint %}

WK\_Wars2x Radar script is required for this resource to function fully. Please ensure you are using the **Sonoran Fork** of WK\_Wars2x. This is included with the [Sonoran CAD FiveM Integration](https://info.sonorancad.com/integration-plugins/integration-plugins/framework-installation) by default.

You can also download the latest release of the resource [here](https://github.com/Sonoran-Software/wk_wars2x/releases/latest).

## Install the Script

1.  Inside the script package you just extracted will be two folders. Copy both to a folder in your server's resources folder called `[sonoranscripts]` note the `[]` in the name, without them it will not work.

    <figure><img src="../.gitbook/assets/directory_example (1).png" alt=""><figcaption><p>Sonoran Software - Radar Display - Folders</p></figcaption></figure>
2. In the `sonoran-radar/config` folder, rename `config.CHANGEME.lua` to `config.lua` and configure the settings below. Rename `radars.CHANGEME.json` to `radars.json` in the same folder. Use the [in-game placement editor](#place-and-edit-a-radar) to move, rotate, and save radars, or edit the saved placements manually.
3. Finally, in your `server.cfg` add the following:

```
ensure sonoran-radar

add_ace resource.sonoran-radar command allow
add_ace resource.sonoran-radar_helper command allow
```

## Configuring the Script

<details>

<summary>Default <code>config.lua</code></summary>

```lua
Config = {
    debug_mode = true,
    cars = {
        addonCars = {
            ['19tahoec3'] = {
                active = false,
                name = '19tahoec3',
                redneckCar = true
            }
        },
        blacklistedCars = {
            "FIRETRUK",
            "LGUARD",
            "PBUS",
            "POLMAV",
            "POLICET",
            "PRANGER",
            "PREDATOR",
            "RIOT",
            "RIOT2",
            "AMBULAN"
        },
        bones = {'chassis'}
    },
    update_speeds = {
        patrol_speed = 100, -- Time in MS between each update for the patrol speed
        target_speed = 250, -- Time in MS between each update for the target speed
        lock_speed = 250 -- Time in MS between each update for the lock speed
    },
    stalker = {
        default_ant = 'front' -- The default antenna to pull data from | Options: 'front' or 'back'
    },
    commands = {
        addNewRadar = 'addnewradar', -- The command to add a new radar
        restricted = true, -- restrict this command - you want this
        allowedToPlace = 'radar.admin' -- Ace group allowed to place the radar
    },
    lang = {
        addNewRadarHelp = 'Open the menu to begin spawning a new radar model',
        notInEmergency = 'You must be in a Emergency vehicle to use this!',
        vehNotCompatible = 'This vehicle is not compatible with the radar placement system!'
    }
}
```

</details>

## Radar Location Config

### Place and edit a radar

{% hint style="info" %}
The mouse placement editor described below is currently available in the release-candidate build.
{% endhint %}

1. Sit in a compatible emergency vehicle and stop the vehicle.
2. Run `/addnewradar`, or your server's configured placement command.
3. Select **Place radar**, choose a **Radar model** and **Vehicle bone**, then select **Place radar** to open the editor. If the vehicle already has a radar, select **Edit radar placement** instead.
4. Use **Move** and **Rotate** to adjust the radar, then choose an apply or save option below.

Keep the vehicle stopped and remain inside it while editing. Moving or leaving the vehicle cancels placement.

### Move the radar

Select **Move** and left-drag a colored arrow to move the radar along one axis. Drag a colored square to move it along two axes at once.

* **Local axes** follows the radar's orientation. Select it to switch to **World axes**, which follows the world's directions.
* **Snap** switches between free movement and 1 cm movement increments. It also enables 5-degree rotation increments.

> Screenshot placeholder: Radar Display in **Move** mode inside a stopped vehicle, showing the radar, colored movement arrows and squares, and the placement controls.

### Rotate the radar

Select **Rotate** and left-drag a colored ring to turn the radar around that axis. Use **Local axes** or **World axes** to choose the rotation directions, and enable **Snap** for 5-degree increments.

> Screenshot placeholder: Radar Display in **Rotate** mode inside a stopped vehicle, showing the rotation rings around the radar and **Rotate** selected in the placement controls.

### Adjust your view

* Right-drag to look around. Enable **Orbit radar** to circle the radar with right-drag instead.
* Middle-drag to lean the camera, and scroll the mouse wheel to zoom.
* **Look at radar** points the camera toward the radar.
* **Cabin view** restores the starting camera view.
* **Reset** restores the radar's position and rotation from when the editor opened.

### Apply, save, or cancel

| Action | Result |
| --- | --- |
| **Apply to this vehicle** | Applies the placement to the current vehicle without saving it for other vehicles or future spawns. |
| **Save for this vehicle model** | Saves the placement in `radars.json` for all vehicles of that model, including after a resource restart. Wait for the save confirmation. |
| **Cancel** | Keeps an existing radar's placement unchanged, or removes a new, unsaved radar. |

Existing saved placements work with the new editor without conversion.

To remove a saved placement, reopen `/addnewradar`, select **Delete saved radar**, then confirm with **Delete radar for this vehicle model**. This removes the saved placement for that model, rather than only the current vehicle. For a radar applied only to the current vehicle, use **Remove radar from this vehicle**.

### Edit saved placements manually

You can also copy an existing entry in `sonoran-radar/config/radars.json` and adjust its vehicle, attachment, position, and rotation values using the properties below. Give each entry a unique `ID`.

### `radars.json` Property Explanation

| Property Name | Example | Notes                                                                                                                                                                                 |
| ------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ID`          | `2`     | `ID` must be unique. No other radar can share this ID                                                                                                                                 |
| `Position`    |         | This is a table that contains the x, y, and z coords of the radar                                                                                                                     |
| `Rotation`    |         | This is a table that contains the x, y, and z rotation of the radar                                                                                                                   |
| `Vehicle`     | `FBI`   | This is the vehicles spawn code                                                                                                                                                       |
| `Bone`        | `-1`    | This is the index of the bone you would like to attach the radar to                                                                                                                   |
| `type`        | `1`     | <p>Enum:</p><p><code>1</code> Radar model with front and rear antennas</p><p><code>2</code> Radar model with only front antenna</p><p><code>3</code> Radar model with no antennas</p> |

## Commands

| Command Name   | Command Description                                                 | Required Permission    |
| -------------- | ------------------------------------------------------------------- | ---------------------- |
| `/addnewradar` | Opens the menu to place, edit, or remove a radar | Everyone when `commands.restricted` is `false`; otherwise requires the ACE permission set in `commands.allowedToPlace` (default: `radar.admin`) |

## Default Vehicles

| Vehicle Spawncode | Adds Radar by Default       |
| ----------------- | --------------------------- |
| `FBI`             | `yes`                       |
| `FBI2`            | `yes`                       |
| `POLICE`          | `yes`                       |
| `POLICE2`         | `yes`                       |
| `POLICE3`         | `BUGGED`(Investigating fix) |
| `POLICE4`         | `yes`                       |
| `POLICEOLD1`      | `no`                        |
| `POLICEOLD2`      | `no`                        |
| `SHERIFF`         | `yes`                       |
| `SHERIFF2`        | `yes`                       |
