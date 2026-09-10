---
description: >-
  This submodule enables your passengers to view your CAD screen in real time
  via an in-vehicle laptop, handheld, tablet, or laptops placed around the map.
---

# CAD Display

{% embed url="https://youtu.be/mtiW0hFNNAU" %}

## Activation Guide

### 1. Download and Install the Resource

{% hint style="info" %}
This submodule is already **enabled by default** when installing the [Sonoran CAD FiveM resource](../fivem-installation/).
{% endhint %}

### 2. Adjust the Configuration

The CAD display settings are stored inside of the `/configuration/caddisplay_config.lua` file.

{% hint style="info" %}
User-facing notifications for **all** FiveM submodules are now configured centrally in `/configuration/config.json` using `notificationSystem`.

Supported values:

* `auto`
* `ox_lib`
* `lation_ui`
* `pnotify`
* `chat`

When set to `auto`, Sonoran CAD will choose the first available system in this order:

1. `ox_lib`
2. `lation_ui`
3. `pnotify`
4. `chat`
{% endhint %}

<details>

<summary>Default <code>caddisplay_config.lua</code></summary>

```lua
--[[
    Sonoran Plugins

    CAD Display Submodule Configuration
]]

local config = {
    enabled = true,
    pluginName = "caddisplay",
    pluginAuthor = "Sonoran Software Systems",
    configVersion = "1.1",

    lang = {
        addNewDisplayHelp = "Open the menu to begin placing a CAD display",
        vehNotCompatible = "This vehicle is not compatible with the CAD display placement system!",
        vehAlreadyDisplay = "This vehicle already has a CAD display placement!",
        menuHeader = "Sonoran CAD Display",
        creditsPanel = "Made by",
        spawningSubMenu = "CAD Display Spawning",
        attachingSubMenu = "Attaching",
        deletionSubMenu = "Remove placement?",
        attachMenuButton = "Attach CAD Display",
        deleteMenuButton = "Delete CAD Display Placement",
        spawnMenuButton = "Spawn CAD Display",
        deletionConfirmationButton = "Yes, remove from all of these vehicles",
        deletionCancelButton = "Cancel",
        deletionCancelled = "CAD display deletion cancelled",
        noDisplayFound = "No CAD display found in this vehicle!",
        modelComboBox = "Model:",
        vehAlreadyDisplayNoti = "~r~This vehicle already has a CAD display placement",
        notInVeh = "~r~You must be in a vehicle!",
        vehicleBone = "CAD Display - Vehicle Bone",
        object = "Object:",
        vehicleBoneComboBox = "Vehicle Bone",
        objectName = "Sonoran CAD Display",
        attachButton = "Attach",
        detachButton = "Detach",
        confirmPlacementButton = "Apply to all of this vehicle model",
        cannotGoFaster = "~r~You cannot go any faster!",
        cannotGoSlower = "~r~You cannot go any slower!"
    },

    commands = {
        cadDisplayMenu = "caddisplay",
        restricted = true -- should the CAD display menu be restricted?
    },

    permissionMode = "ace", -- Available Options: ace, framework, custom

    -- Ace Permissions Section --
    acePerms = {
        aceObjectUseMenu = "sonoran.caddisplay", -- Ace to open/attach CAD displays
        aceObjectAdminUseMenu = "sonoran.caddisplay.admin", -- Ace to save/delete placements for vehicle models
        aceWorldDisplayAdmin = "sonoran.caddisplay.world" -- Ace to save/delete station display placements
    },

    -- Framework Related Settings --
    framework = {
        frameworkType = "qb-core", -- Options: esx or qb-core
        civilianJobNames = {"unemployed"}, -- Jobs allowed to open the menu
        adminJobNames = {"admin"}, -- Jobs allowed to save/delete placements
        useCivilianJobListAsBlacklist = false -- Treat the civilian job list as a blacklist rather than whitelist
    },

    -- Configuration For Custom Permissions Handling --
    custom = {
        checkPermsServerSide = true, -- If true the permission event will be sent out to the server side resource
        permissionCheck = function(_, type) -- Always called server side.
            if type == 0 then -- Check permission to use the menu
                return true or false -- Return true if permitted, false otherwise
            end
        end
    },

    general = {
        useAllowlistAsBlacklist = false -- If true, allowlistedCars is treated as a blacklist
    },

    -- Vehicles with built-in laptop screens you want to skin with the CAD DUI
    -- Each entry needs:
    --   vehicle         - spawn code (model name) for the vehicle
    --   screenTexture   - texture name on the built-in laptop model to replace with the DUI
    --   textureWidth    - optional width of the built-in texture in pixels (used to scale the DUI), default 512
    --   textureHeight   - optional height of the built-in texture in pixels (used to scale the DUI), default 256
    builtinScreens = {
        -- Example:
        -- {vehicle = "POLICE", screenTexture = "laptop_screen", textureWidth = 512, textureHeight = 256}
    },

    allowlistedCars = {
        "POLICE",
        "POLICE2",
        "POLICE3",
        "POLICE4",
        "FBI",
        "FBI2",
        "SHERIFF",
        "SHERIFF2"
    },

    -- Interaction settings
    interactKey = "G", -- Default key mapping for interaction (RegisterKeyMapping)
    interactControl = 47, -- Fallback control code (INPUT_DETONATE) - avoid horn (E)
    interactRange = 1.5, -- Distance in meters to allow interacting with the laptop
    requestAcceptKey = "Y", -- Key to accept a control request
    requestDenyKey = "L" -- Key to deny a control request
}

if config.enabled then Config.RegisterPluginConfig(config.pluginName, config) end

```

</details>

### ACE Permissions

When `commands.restricted` is `true` (the default) and `permissionMode` is `"ace"` (the default), the server checks these configurable nodes:

* `sonoran.caddisplay` allows a player to open the menu and use or attach a CAD display.
* `sonoran.caddisplay.admin` allows saving and deleting vehicle-model placements.
* `sonoran.caddisplay.world` allows saving and deleting station-display placements. If this value is blank, the current resource falls back to `aceObjectAdminUseMenu`.

For example, grant access to the appropriate role instead of `builtin.everyone`:

```cfg
add_ace group.sonoran_cad_display sonoran.caddisplay allow
add_ace group.sonoran_cad_display_admin sonoran.caddisplay.admin allow
add_ace group.sonoran_cad_display_admin sonoran.caddisplay.world allow
```

The distributed `sonorancad.cfg` also grants `command.SonoranCAD::caddisplay::Interact`, `command.SonoranCAD::caddisplay::AcceptRequest`, and `command.SonoranCAD::caddisplay::DenyRequest` to `builtin.everyone`. These fixed client keybind commands are registered unrestricted and do not replace the server-side display checks above.

### Commands

In-game commands can be used to

* `/caddisplay` Opens the CAD Display configuration menu

<figure><img src="../../../.gitbook/assets/image (577).png" alt=""><figcaption></figcaption></figure>

### Keybind

Users can customize a keybind to interact with a nearby CAD display.

Navigate to **Settings** > **Keybinds** > **FiveM** and look for the keybinds under the resource `sonorancad`.

<figure><img src="../../../.gitbook/assets/image (576).png" alt=""><figcaption></figcaption></figure>

### Usage

#### a. Prop Spawning

You can spawn a CAD Display laptop prop using the in-vehicle menu, which is accessed via the `/caddisplay` command. By default, this command requires the `sonoran.caddisplay` ACE permission.

Following the menu instructions, you can customize the laptop’s placement within your vehicle. Once you are satisfied with the placement, you may close the menu and the display will remain in your vehicle for the duration of its spawn.

If you have the `sonoran.caddisplay.admin` ACE permission, you also have the option to save the placement for all vehicles using that spawn code. This ensures the placement is automatically applied to all future spawns of that vehicle.

<div><figure><img src="../../../.gitbook/assets/image (506).png" alt="SonoranCAD - CAD Display - Menu"><figcaption><p>Sonoran CAD - CAD Display - Main Menu</p></figcaption></figure> <figure><img src="../../../.gitbook/assets/image (572).png" alt=""><figcaption><p>Sonoran CAD CAD Display - Spawning Menu</p></figcaption></figure> <figure><img src="../../../.gitbook/assets/image (573).png" alt=""><figcaption><p>Sonoran CAD - CAD Display - Attaching Menu</p></figcaption></figure> <figure><img src="../../../.gitbook/assets/image (574).png" alt=""><figcaption><p>Sonoran CAD - CAD Display - Delete Menu</p></figcaption></figure></div>

#### b. Using Built-in Laptops

You can also use your vehicle’s built-in laptop as the CAD Display, without spawning a separate laptop prop.

<details>

<summary>b. Continued</summary>

1. This option requires additional configuration and third-party software. To begin, navigate to the `caddisplay_config.lua` file located in the `/sonorancad/configuration` folder. The `builtinScreens` section of this configuration file is where you define vehicles equipped with built-in laptops.
2. To obtain the `texture` name you will need to use a third-party software such as [OpenIV](https://openiv.com/).
3. Within OpenIV, click **File** in the top-right corner, then select **Open Folder** and navigate to the folder containing your vehicle files

<div><figure><img src="../../../.gitbook/assets/image (508).png" alt=""><figcaption><p>OpenIV - Open Folder Button</p></figcaption></figure> <figure><img src="https://cdn.discordapp.com/attachments/871554360285474847/1460761637798809641/image.png?ex=696817ca&#x26;is=6966c64a&#x26;hm=f11953db0efd5c7b19642b8cdeb01bfacbcf736580d476d32b78aafc7970eda3&#x26;" alt=""><figcaption><p>OpenIV - File Explorer</p></figcaption></figure></div>

4. Once OpenIV opens your selected folder, you will see your vehicle files. From here, open the `SPAWNCODE.ytd` file. A `.ytd` file is a texture dictionary that contains the textures used by the vehicle, such as screens, decals, and interior displays. For this tutorial, the spawn code used is `b3`.

<div align="center"><figure><img src="https://cdn.discordapp.com/attachments/871554360285474847/1460762366844207248/image.png?ex=69681877&#x26;is=6966c6f7&#x26;hm=7d3a6488930aa32624ab94a64a8ca190e712a9dedbbe452a91d19d75211758ce&#x26;" alt=""><figcaption><p>OpenIV - YTD Viewer</p></figcaption></figure></div>

5. Within the OpenIV Texture Viewer, scroll through the textures and locate the laptop screen texture. In the case of `b3`, the texture name is `laptop_screen`. Some vehicles may include multiple screen textures; ensure you select the one used for the in-vehicle laptop display.

<figure><img src="../../../.gitbook/assets/image (510).png" alt=""><figcaption><p>OpenIV - YTD Viewer - Laptop Screen Texture</p></figcaption></figure>

6.  Now that all required information has been gathered, you can begin adding it to the configuration. Be sure to note the texture’s dimensions as shown in OpenIV, as this information is required for proper display.

    **Important**: The texture dimensions must match exactly, or the display may not render correctly.

    For the tutorial vehicle, the configuration should appear as follows:

```lua
builtinScreens = {
    {
        vehicle = "b3",                 -- Vehicle spawn code
        screenTexture = "laptop_screen",-- Texture name from the .ytd file
        textureWidth = 256,             -- Texture width (must match OpenIV)
        textureHeight = 256             -- Texture height (must match OpenIV)
    }
},
```

</details>

#### c. Using the Screen

While inside a supported vehicle, either with a placed laptop prop or a configured built-in screen, look at the laptop and press the default keybind **G** to take control of the display.

This submodule also allows the [CAD Tablet](tablet.md) to mirror your screen in real time. Once the tablet is active and your CAD is open, you and others around you will see your CAD screen mirrored onto the tablet prop in your hand.

#### d. Passing Laptop Control

To transfer control of an in-vehicle laptop, have your passenger look at the laptop and press the default keybind **G**. This will send a control request to the current user.

Only one player may control the laptop at a time.

You can then press **Y** to accept the request or **L** to deny it. If accepted, the laptop will begin mirroring the passenger’s [CAD Tablet](tablet.md).

### Station CAD Display Props

Additionally, you can spawn laptops in police stations or other areas around the map as **Station CAD Displays**. These CAD displays will stay at the location permanent.

<div><figure><img src="../../../.gitbook/assets/image (602).png" alt=""><figcaption></figcaption></figure> <figure><img src="../../../.gitbook/assets/image (603).png" alt=""><figcaption></figcaption></figure></div>
