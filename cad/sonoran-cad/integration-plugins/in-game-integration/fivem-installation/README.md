---
description: >-
  Sonoran CAD's Integration Core imports common API method wrappers and
  functionality. Installing our integration framework is easy! Learn more below.
---

# FiveM Installation

## A. One-Click Installation (RocketNode)

We've partnered with Rocket Node to bring you one-click Sonoran CAD installation for FiveM — making it easier than ever to host your community and connect with Sonoran CAD.

* [Purchase your FiveM Game Server!](https://sonoran.link/v2E9hKGm)
* Use code `SONORAN`to save big!

{% embed url="https://www.youtube.com/watch?v=h8Ftx14j8l8" %}

The Sonoran CAD FiveM resources has multiple "submodules" for every integration feature. [These are easily enabled and configured](../submodule-configuration/) in the `/configuration` folder.

{% content-ref url="../submodule-configuration/" %}
[submodule-configuration](../submodule-configuration/)
{% endcontent-ref %}

***

## B. Pre-Configured Resource Installation <a href="#pre-configured-resource-installation-recommended" id="pre-configured-resource-installation-recommended"></a>

{% embed url="https://youtu.be/QimkcbTPl44" %}

### 1. Download the ZIP

Download a pre-configured version of the in-game integration resource from the panel. This download will already have your community ID and API Key in the `config.lua` file in addition to file renaming done for you.

Navigate to `Admin` -> `Advanced` -> `In-Game Integration` -> `FiveM`

<figure><img src="../../../.gitbook/assets/image (75).png" alt=""><figcaption><p>Sonoran CAD: FiveM Resource Download</p></figcaption></figure>

### 2. Extract the ZIP File

Extract the `.zip` file into your resources directory. Place the `[sonorancad]` folder directly in the resources root directory.

<figure><img src="../../../.gitbook/assets/image (76).png" alt=""><figcaption><p>Sonoran CAD - Folder Structure</p></figcaption></figure>

### 3. Update Your Server Config

In your `server.cfg` file, simply add the following line:

**This is the** 🌟**only**🌟 **line that you need to add to your `server.cfg` file. Do not ensure any other part of the resource.**

```
exec @sonorancad/sonorancad.cfg
```

{% hint style="danger" %}
It is very important that the `sonoran_updatehelper` resource is not started manually. Doing so may cause a server crash if updates are available due to a race condition.

**DO NOT** start the whole \[sonorancad] folder as that will also start the sonoran\_updatehelper which might cause crashing if it is started manually. Example of not what to do `ensure [sonorancad]`
{% endhint %}

<details>

<summary>Advanced - Remove Tablet, pNotify, etc.</summary>

Adding the `exec @sonorancad/sonorancad.cfg` starts multiple resources bundled with the download. If you wish to not use one or more of the resources (or with a different name) you will need to:

* Copy/paste the contents of `sonorancad.cfg` to your `server.cfg`
* Remove the `exec @sonorancad/sonorancad.cfg` line from your `server.cfg`

Do not update the contents of `sonorancad.cfg` as it will be overwritten on resource updates.

</details>

### 4. Configure the Resource

Modify the `/configuration/config.json`file for any additional configuration values.

This is also where the global FiveM notification backend is configured. Set `notificationSystem` to one of:

* `auto`
* `ox_lib`
* `lation_ui`
* `pnotify`
* `chat`

When `notificationSystem` is `auto`, Sonoran CAD selects the first available system in this order:

1. `ox_lib`
2. `lation_ui`
3. `pnotify`
4. `chat`

### 5. Configure the Submodules

The Sonoran CAD FiveM resources has multiple "submodules" for every integration feature. [These are easily enabled and configured](../submodule-configuration/) in the `/configuration` folder.

{% content-ref url="../available-plugins/" %}
[available-plugins](../available-plugins/)
{% endcontent-ref %}

### 6. Configure the Auto-Updater

The Sonoran CAD FiveM resource contains an auto-updater that will override all non-configuration files when a new version of Sonoran CAD is released.

#### Whitelist Specific Files

Some communities have custom files inside the `[sonorancad]` folder they don't wish to have overwritten, like custom plate reader images.

Simply add the direct path to the directory or individual files to the `sonorancad/configuration/updaterIgnore.json` file.

#### Disable Automatic Updates

To disable this auto-update entirely set `allowAutoUpdate` to `false` in the `config.json`.

***

## Additional Configuration

### Convar Overrides

<details>

<summary>Convar Overrides</summary>

Starting with framework version 2.6.2, you can override any configuration option in your `config.json` file by specifying a convar before the sonorancad resource starts.

{% hint style="warning" %}
This feature does not work with arrays (like statusLabels). Any other configuration option can be set using the `sonoran_<configSettingHere>` format.
{% endhint %}

</details>

### Manual IP:Port Push Events

<details>

<summary>Manual IP:Port Push Events</summary>

The FiveM resource uses a [websocket](../../../api-integration/websocket-api/) to stream all events from the CAD to your local FiveM server. In the event that this websocket is not connected (games outside of FiveM) it will fall back to an optional `http://ip:port/sonorancad/event` POST method.

In the CAD admin panel, navigate to: Advanced > In-Game Integration\
Expand the "Server Events and Integrated Live Map" section.

Enter your server's public IP address and your game server's port. By default, this is port `30120`.

**Forward Push Events to an External Server**

You may wish to also send push events to another external web server, like a Discord bot.

In the framework configuration file, simply set `enablePushEventForwarding` to `true` and `pushEventForwardUrl` to your web server address.

</details>

### Steam API Key

<details>

<summary>Steam API Key</summary>

If your framework has the `primaryIdentifier` set to `steam` in the [configuration ](./#3.-configure-and-rename)(used for your API ID type), you'll need to ensure a Steam API key is set in your `server.cfg` file.

You can register a new Steam API Key at [http://steamcommunity.com/dev/apikey](http://steamcommunity.com/dev/apikey)

Then, paste it into your `server.cfg`

```
# Steam Web API key
# If you want to use Steam authentication (https://steamcommunity.com/dev/apikey) # -> replace "" with the key
set steam_webApiKey "YOUR_KEY_HERE"
```

</details>

## Updates

Sonoran CAD's integration framework and submodules will automatically update with the latest features, fixes, and changes!

Or, run `sonorancad update` to instantly check and apply any updates for the framework core.

## Commands

The Sonoran CAD integration framework comes with several commands. These commands can be run in your server console to provide information, update submodules , and more.

| Command                | Description                              |
| ---------------------- | ---------------------------------------- |
| `sonorancad help`      | Display list of commands                 |
| `sonorancad update`    | Run core/framework updater               |
| `sonorancad debugmode` | Toggle debug mode on/off                 |
| `sonorancad info`      | Dump version info and configuration data |
| `sonorancad support`   | Dump information for support staff       |

## Troubleshooting

{% content-ref url="troubleshooting/" %}
[troubleshooting](troubleshooting/)
{% endcontent-ref %}

### Server Crashes

1\. Check to make sure `sonoran_updatehelper` or `[sonorancad]` is not being started in your server.cfg.

{% hint style="danger" %}
It is very important that the `sonoran_updatehelper` resource is not started manually. Doing so may cause a server crash if updates are available due to a race condition.

**DO NOT** start the whole \[sonorancad] folder as that will also start the sonoran\_updatehelper which might cause crashing if it is started manually. Example of not what to do `ensure [sonorancad]`
{% endhint %}

2\. Try updating your smartsigns submodule manually to the latest version. This is done by copying over the lua files from the latest release found [here](../available-plugins/smart-signs.md) and overrideing the old files.

{% hint style="info" %}
We have gotten isolated reports of servers crashing with the following error, this is assumed to be related to having lower end VPS hardware specs and txadmin rebooting the server because the update process is taking too long.
{% endhint %}

![](<../../../.gitbook/assets/image (218).png>)

### Warning: Could not find file X

1.) Check that the file in question is actually present in the specified file path. To find the correct path please read the example below:

```
Started resource sonorancad (3 warnings)
^3Warning: Could not find file `html/config.js` (defined in fxmanifest.lua:16^7
```

In this example, you would navigate to the `sonorancad` **resource**, open the `html` **folder** and ensure the **file** `config.js` is present.

{% hint style="info" %}
This is simply a **WARNING**, if the resource works **AS EXPECTED**, you can simply ignore the warning and continue
{% endhint %}
