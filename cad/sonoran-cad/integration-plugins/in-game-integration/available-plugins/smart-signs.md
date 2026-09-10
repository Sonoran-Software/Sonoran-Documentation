---
description: >-
  Our smart signs integration resource allows you to update roadway signs
  in-game directly from the CAD!
---

# Smart Signs

<figure><img src="../../../.gitbook/assets/smart_signs_promo.png" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
This third-party resource from London Studios is only available with the **Pro** version of Sonoran CAD.

If your community is not on the **Pro** version, this free resource will not work.
{% endhint %}

## Video Showcase

[View our video showcase of the Smart Signs resource here!](https://www.youtube.com/watch?v=ihfVSiB8oB8)

## Installation Guide

{% hint style="danger" %}
If you have the original London Studios Smart Signs resource **please remove and/or disable it from running**. Our resource completely replicates the functionality of the original resource and they will conflict if both are running at the same time.
{% endhint %}

### 1. Download the Resource

[Purchase the resource for free](https://londonstudios.net/smart-signs-sonoran/) from our store.

This resource is managed through Tebex and will require you to login with FiveM. Be sure to login **using the account that has the keymaster license** for your server.

Once "purchased" you can [download the asset from your keymaster account](https://keymaster.fivem.net/asset-grants).

### 2. Install the Resource

We suggest installing the `smartsigns_sonoran` and `smartsigns_sononran_helper` folders within the `[sonorancad]` folder your integration framework is installed in. The final result would look like the image below...

<figure><img src="../../../.gitbook/assets/image (133).png" alt=""><figcaption><p>Smartsigns installed to [sonorancad] folder</p></figcaption></figure>

### 3. Add Requirements to Server.cfg file

In your `server.cfg` add the following new line **after/below** your exec `@sonorancad/sonorancad.cfg` line:

```lua
# Start the Smart Signs Sonoran Edition ONLY
# Do NOT ensure or start the helper resource
ensure smartsigns_sonoran

# Permissions for Sonoran Smartsigns Auto-updater (REQUIRED)
add_ace resource.smartsigns_sonoran command allow
add_ace resource.smartsigns_sonoran_helper command allow
```

### 4. Configure options to your liking

Rename `config_RENAMEME.lua` to `config.lua`.

In the `config.lua` file, you can enable options depending on your framework you are using or permissions you would like to integrate with.

The smart signs resource also has support with ESX, VRP, Discord logging, ace permissions, and more. [View the documentation](smart-signs.md#smart-signs-configuration) from London Studios for the most up to date information.

### 5. Configure your Discord Webhook URL (optional)

Rename `sv_discordConfig_RENAMEME.lua` to `sv_discordConfig.lua` .

In the `sv_discordConfig.lua` file, you can specify the discord webhook URL you would like log messages sent to from Smart Signs. Additional settings and to enable webhook logging is found in the `config.lua` file you renamed in the previous

### 6. Set your Game Server IP/Port

In the Admin panel, navigate to Advanced > In-Game Integration > Push Events and Live Map

Ensure your game server's IP and game port are set. The CAD will use this to push sign updates to your server.

#### Differing Inbound/Outbound IP Addresses

`Error: Server ID: 123 has IP set to: 1.2.3.4 -> your IP: '2.3.4.5'`

Some hosting providers may have your game server sending traffic out from a different IP address than is used to connect to your game server. If this is the case, toggle the `Differing Outbound IP` checkbox for this server and fill in the `Outbound IP` field.

![Sonoran CAD - Push Event Panel](<../../../.gitbook/assets/image (345).png>)

## How to use

### In-Game Usage

This script works by approaching a sign. When a player approaches a sign and are in the range of the control panel, they are able to edit the text of the sign if they meet the required permission checks. The resource has been optimized so that the signs will load and unload for players based on how close they are to each sign which is perfect for larger servers as it means that server resources will not be used unnecessarily.

### Modifying Signs in the CAD

The street sign panel can be found on both the Dispatch and DMV pages. Users will need the `Modify Street Signs` permissions in order to update them.

Here, you can easily search to filter sign labels. Sign text can also be easily duplicated from one sign to another.

![Sonoran CAD - Street Signs UI](../../../.gitbook/assets/streetsigns.gif)

### Live Map

You can also modify smart signs right from the[ live map](smart-signs.md#undefined)!

Users will need both the `Modify Street Signs` and the `Self Dispatch` permissions in order to view and edit signs from the live map.

![Sonoran CAD - Live Map Smart Signs](<../../../.gitbook/assets/image (323).png>)

### Full Feature List

**Signs** – This is the main element of the resource, allowing you to walk up to a sign and change the text from an in-game control panel at the bottom of the sign. This can be used to open a world of roleplay opportunities.\
**Word Denylist** – You are able to set the resource up so that users cannot use specific words on a sign.\
**Discord Logs** – You can choose to send logs to your Discord server via a webhook each time a player sets the text on a sign.\
**Custom Model** – This resource includes high-quality letters and a custom sign model created by Beaver Mods. This will ultimately enhance realism.\
**Highly Configurable** – This resource is highly configurable, allowing you to setup each sign separately. You can adjust the location of each sign, all messages and even add extra characters from other languages.\
**Permission Checks** – You can easily enable permission checks in the configuration file for ACE permissions, framework jobs/groups or SonoranCAD active unit checking.

We understand that it may be confusing to use for some of our users. If you need support please feel free to open a ticket in the official London Studios Discord.

## Smart Signs Configuration

You can easily open the `config.lua` and configure the script to your liking in either **notepad**, **notepad ++** or using **Visual Studio Code.**

{% hint style="warning" %}
The config examples below are not the full configuration file and further explanation comments of what each setting does can be found in the `config.lua` file.
{% endhint %}

### **Main Configuration**

The first section is called **main**, allowing you to set the following:

<details>

<summary>Configuration</summary>

```lua
config = {
    configVersion = 1.5, -- Do not change, used to see if config file is requiring updates.
    auto_update = true, -- Enable automatic updates from Sonoran Software for Smart Signs.
    main = {
        -- Here you are able to define how far the sign will load in from.
        -- If the player has loaded in the sign and goes out of this range the sign will unload on their client.
        loadInDistance = 300.0,

        -- Here you are able to define how close the player must be to the signs keypad in order to edit the text.
        -- 3.0 is the ideal value for "arms reach"
        accessPointDistance = 3.0,

        -- Here is the prop for the sign.
        -- You can change this if you wish but we recommend leaving this unless you are highly experienced.
        signModelName = {
            left = `prop_led_trafficsign_left`,
            right = `prop_led_trafficsign_right`,
        },

        -- This is the text that appears when you are changing the message. You could use this to translate to another language.
        instructionalText = "Press [E] to adjust sign",

        -- This will bring every sign back to default
        resetSignCommand = "resetsmartsigns",
        resetSignCommandEnabled = true,
        resetSignSuggestion = "Reset all smart signs around the map!",

        changeSignCommand = "editsmartsigns", -- To edit signs across the map
        changeSignSuggestion = "Edit all smart signs around the map!",
        changeSignCommandEnabled = true,

        -- Here you can change which button must be pressed to change the text on the sign
        -- A list of controls can be found on the official FiveM documentation @ https://docs.fivem.net/docs/game-references/controls/
        adjustButton = {0, 103}, -- {control group, control}

        -- This will change whether users can use /newsmartsign to automatically add signs into the locations.json file
        -- This will also enable debug printing on both the client and the server. This should be set to false most of the time.
        developerMode = false,

        -- Blips for all signs are automatically enabled on developer mode. This allows you to keep blips while disabling developer mode
        enableBlips = true,
        shortRangeBlips = true,

        -- Here you can define a list of words which cannot be placed on signs.
        -- These are automatically removed and replaced with blank text
        bannedWords = {
            "fuck",
            "shit",
        },

        -- This setting will toggle automatic centering of text
        -- Please note that centering may not be perfect due to the even amount of characters accepted by the sign
        centerText = false,

        -- This setting will utilize Sonoran CAD's Integration in order to determine if users are an active unit
        -- in the cad before allowing them to change smartsigns in game. Active units are any units with the CAD open
        -- to police, ems, fire or dispatch panels.
        useUnitPermission = false,

        -- Enable this to use Ace Permissions.
        -- This requires you to give groups or individual users the permission set below
        -- If you want to add further Ace Permission integration, edit sv_smartsigns.lua
        acePermissions = {
            enabled = false,
            permission = "update.sign"
        },

        -- We've added vRP integration. All you need to do is enable it below
        -- Then, configure if you wish to check for groups or permissions, or even both
        -- If you want to add further vRP integration, edit sv_smartsigns.lua
        vRP = {
            enabled = false,
            checkGroup = {
                enabled = true, -- Enable this to use vRP group check
                groups = {"police", "emergency", "admin"}, -- A user can have any of the following groups, meaning you can add different jobs
            },
            checkPermission = {
                enabled = false, -- Enable this to use vRP permission check
                permissions = {"police.menu", "player.kick"} -- A user can have any of the following permissions, allowing you to add multiple
            },
        },

        -- We've added ESX integration. All you need to do is enable it below
        -- Then, configure which jobs you want to check for
        -- If you want to add further ESX integration, edit sv_smartsigns.lua
        ESX = {
            enabled = false,
            checkJob = {
                enabled = true, -- Enable this to use ESX job check
                jobs = {"police"} -- A user can have any of the following jobs, allowing you to add multiple
            }
        },

        -- We've added QBCore integration. All you need to do is enable it below
        QBCore = {
            enabled = false,
            checkJob = {
                enabled = false, -- Enable this to use QBCore job check
                jobs = {"police"}, -- A user can have any of the following jobs, meaning you can add different jobs
            },
            checkPermission = {
                enabled = false, -- Enable this to use QBCore permission check
                permissions = {"god"}, -- A user can have any of the following permissions, allowing you to add multiple
            },
        },

        -- Here is the animations which are played when entering text for a sign.
        -- It is unlikely that this will need to be changed but you can disable the animation if you wish to do so.
        -- Find the animation list here: https://alexguirre.github.io/animations-list/
        animation = {
            enabled = true,
            dict = "anim@heists@prison_heiststation@cop_reactions", -- This is the animation dictionary (these show in bold on the animation list)
            name = "cop_b_idle", -- This is the animation name (these show below bold dictionaries on the animation list)
        },

        -- This allows you to enable Discord logging for the signs
        -- You must add your webhook in sv_discordConfig.lua
        logging = {
            enabled = false,
            displayName = "Smart Signs",
            colour = 31487,
            title = "**New Sign Log**",
            icon = "https://i.imgur.com/o7oAPb8.png",
            footerIcon = "https://i.imgur.com/n3n7JNW.png",
            dateFormat = "%d-%m-%Y %H:%M:%S", -- Day-Month-Year Hour-Minute-Second

            -- This section will work regardless of logging being enabled
            -- Make sure to set this to false in order to disable all logging
            bannedWordLogs = {
                enabled = true,
                colour = 16711680,
            }
        },

        soundEffect = {
            enabled = true,
            name = "CONFIRM_BEEP",
            dict = "HUD_MINI_GAME_SOUNDSET",
        },

        -- This allows you to move the position of every sign to a certain offSet, such as 1m down, if you feel they are all too high for example
        signOffset = {0.0, 0.0, 0.0}, -- x, y, z
    },
```

</details>

To change the activation key (adjustButton), replace it with your desired key code from [here](https://docs.fivem.net/docs/game-references/controls/).

You can see from the above config just how configurable the resource is, allowing you to set many features such as the load in the distance and access points to edit the text of the signs, the different denied words and the animations played while the player is typing.

Secondly, the **instructionalText** section allows you to convert the access message to another language.

## Permission Checks

We’ve made it simpler than ever to integrate permissions into the resource. This can be Ace Permissions, VRP or even ESX Integration (built-in).

This means that you can restrict certain players, permissions or even jobs/groups from setting the message on a sign.

### **Sonoran CAD Permission Integration**

In the `config.lua` file, you can easily enable a permission check to allow "active units" in the CAD to change smartsigns in game.

Simply ensure that `useUnitPermission` is set to `true` to enable this check

```lua
useUnitPermission = true,
```

### **Ace Permission Integration**

In the `config.lua` file, you can easily enable ace permissions and set the required permission.

You could then add this to certain players in the `server.cfg` or even groups as part of a server framework.

For more help on that, see some [documentation on Ace Permissions here](https://forum.cfx.re/t/basic-aces-principals-overview-guide/90917).

```lua
acePermissions = {
    enable = false,
    permission = “update.sign”
},
```

### **vRP Integration**

In the `config.lua` file, you can easily enable vRP Integration including both `vRP.hasPermission` checks and `vRP.hasGroup` checks. This can allow you to restrict it to a police job for example, or highways maintenance job, if that exists on your server.

Simply changed enabled to true to enable vRP integration. This will then generate the necessary vRP Proxy on the server, enabling global vRP functions such as GetUserId.

In the `checkGroup = {}` section, you can set it up to check if the user has a required group. In the groups box, you can enter all the groups you would like to have permission, such as adding both police and administrators, as they may need to access them.

In the `checkPermission = {}` section, you can do the same as a group, but for a permission instead. As you use the vRP framework you should be familiar with permissions and how to issue them.

You should check your vRP `groups.lua` file to view your groups and the permissions for each group.

```lua
vRP = {            
    enabled = false,            
    checkGroup = {                
        enabled = true, — Enable this to use vRP group check                
        groups = {“police”, “emergency”, “admin”}, — A user can have any of the following groups, meaning you can add different jobs            
    },            
    checkPermission = {                
        enabled = false, — Enable this to use vRP permission check                
        permissions = {“police.menu”, “player.kick”} — A user can have any of the following permissions, allowing you to add multiple            
        
    },        
    
}
```

### **ESX Integration**

In the `config.lua` file, you can easily enable ESX Integration using a job check.

Simply change enabled to true to enable ESX integration. This will then generate the necessary ESX Shared Object on the server, enabling you to use ESX functions.

In the `checkJob = {}` section, you can set it up to check if the user has a required job. For example, by keeping it as `“police”`, it will only work if the user has the police job. Alternatively, you may choose to add more such as `“admin”`.

You should check your ESX jobs database table to be familiar with what jobs are configured on your server.

```lua
ESX = {            
    enabled = false,            
    checkJob = {                
        enabled = true, — Enable this to use ESX job check                
        jobs = {“police”} — A user can have any of the following jobs, allowing you to add multiple            
    }        
},
```

### **QB Core Integration**

In the `config.lua` file, you can easily enable QB Core Integration using a job or permission check.

Simply change enabled to true to enable the QB Core integration.

In the `checkJob = {}` section, you can set it up to check if the user has a required job. For example, by keeping it as `“police”`, it will only work if the user has the police job. Alternatively, you may choose to add more such as `“admin”`.

In the `checkPermission = {}` section, you can do the same as a job, but for a permission instead.

```lua
QBCore = {
    enabled = false,
    checkJob = {
        enabled = false, -- Enable this to use QBCore job check
        jobs = {"police"}, -- A user can have any of the following jobs, meaning you can add different jobs
    },
    checkPermission = {
        enabled = false, -- Enable this to use QBCore permission check
        permissions = {"god"}, -- A user can have any of the following permissions, allowing you to add multiple
    },
},
```

Overall, we think we’ve made it easy for you to add permission checks into the resource. If you need additional help setting it up, our support team is here to help. You can [open a support ticket here](https://support.sonoransoftware.com).

## Locations.json file <a href="#locations.json-file" id="locations.json-file"></a>

All sign locations and texts are now visible in the locations.json file, a dynamic file that will update every time players are on your server.

This means that any text set by players on signs will also be saved each time your server is restarted.

## Adding new Signs <a href="#adding-new-commands" id="adding-new-commands"></a>

To make it easier to set signs up we have added a /createsmartsign command which will only work while **developerMode** is set to true in config.lua. You can select left or right on the command depending on what side you want the sign to be.

This command will then spawn a sign prop that can be repositioned with the following controls:

**R** -- rotates the sign **Right Mouse Button** -- Exits Spooner Menu **Left Mouse Button** -- Allows you to move the sign as needed **ENTER** -- finish placement

Once you press ENTER the new sign location will automatically be added to the locations.json file. You will need to restart your server to see the sign after setting it up.
