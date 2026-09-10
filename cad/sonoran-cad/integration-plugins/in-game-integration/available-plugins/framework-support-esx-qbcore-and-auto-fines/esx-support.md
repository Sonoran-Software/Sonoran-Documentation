---
description: >-
  Adds support for ESX, QBCore and QBUS to other submodules, as well as the
  ability to issue fines automatically to users in-game.
hidden: true
---

# Depreciated: ESX Support

{% hint style="warning" %}
This submodule is being phased out in favor of the newer [frameworksupport](/broken/pages/VRhcq4DTKYKofHHkyPwD) support submodule. Please begin using that instead.
{% endhint %}

{% hint style="warning" %}
This submodule only functions with other submodules that require the **standard** version of Sonoran CAD or higher. The auto-fine functionality requires the **pro** version.

For more information, view our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

{% hint style="info" %}
ESX v2 is not supported by this submodule and will not function. Only ESX v1 is supported.
{% endhint %}

{% hint style="success" %}
Looking for VPS, web, or dedicated hosting? Check out our official [server hosting](/broken/pages/-MRResNcPrj2q6MmmS6j)!
{% endhint %}

## Activation Guide

### 1. Download and Install the Core

If you haven't already, be sure to install and configure the [SonoranCAD Core](../../fivem-installation/) first.

### 2. Activate the Submodule and all Dependencies

Follow the [submodule activation guide](../../submodule-configuration/#activating-a-submodule) for the `callcommands`, `locations`, and `postals` submodules.

### 3. \[Optional] Add your Game Server IP and Port

_This step is only required if you wish to use the automatic fine capability._

Be sure to have your game server IP and port set in the admin panel under `Advanced` > `In-Game Integration` > `Server Events and Integrated Live Map`

![Sonoran CAD - Server IP and Port](<../../../../.gitbook/assets/image (345).png>)

### 4. Set Your API ID

Don't forget to set your account [API ID](../../../../api-integration/getting-started/setting-your-api-id.md) to properly link your in-game user to the CAD.

### 5. Configuration

Review the `config_esxsupport.lua` file to configure the submodule to behave how you like. The file is well documented. Please review **all** the settings!

## Auto-Fines

Civilians in-game can be automatically billed with esx\_billing.

To do so, simply enable `issueFines` in the config and add a list of custom record types to the `fineableForms` array. Also, be sure that you have [configured your server IP and port](esx-support.md#4-optional-add-your-game-server-ip-and-port) in the admin menu.

Ex: `fineableForms = {"Arrest Report", "Speeding Citation"}`

The fines are pulled from your custom record's:

* `Charges` section -> `Fine` field
* `Speed` section -> `Fine` field

## Usage

This submodule can be used to issue fines to players when reports/records are entered into the CAD that include fines. You can configure the reports/records that are finable in the configuration. This submodule also adds support for ESX that other submodules can take advantage of. Currently, the following submodules are supported:

* [dispatchnotify](../dispatch-notify.md)
  * Adds the ability to show character names in dispatch responses (officer names)
  * Adds the ability to restrict functionality to certain jobs (like police). See the [dispatchnotify documentation](../dispatch-notify.md) for how to do this.
* [callcommands](../call-commands.md)
  * Adds the ability to show character names for the caller when they use /911. This is automatic when the submodule is installed.
* [livemap](../live-map.md)
  * Adds the ability to show character names on the map.

## Legacy ESX Support

{% hint style="warning" %}
Legacy ESX Support utilizes MySQL-Async in order to get character information from your database directly. ESX requires this in older versions so this shouldn't be an issue.
{% endhint %}

This is mainly for ESX v1 releases that were made before the character system implementation using only the `users` database table. These versions of ESX used the `users` table only for player information of active characters and a `characters` table that held all character information (active and secondary characters of your players).

Due to different handling of character information such as first name and last names, this option allows you to use esxsupport submodule with older "Legacy" ESX v1 releases.

Simply set `legacyESX` to true in your `config_esxsupport.lua`

## Configuration

| Config Value  | Description                                                                                                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identityType  | Newer ESX version use license instead of steam for identity.                                                                                                                                |
| usePrefix     | Some ESX versions don't use the prefix (such as license:abc) with the identity, set to false to disable the prefix.                                                                         |
| usingQbus     | If you are using Qbus/QBCore set this to true.                                                                                                                                              |
| QbusEventName | Change to the prefix to the name of the event you are using for Qbus/QBCore (NOTE: this is primarily used for renamed QBCore frameworks)                                                    |
| issueFines    | Whether to issue fines to players for finable reports/forms                                                                                                                                 |
| fineNotify    | Whether to send a message in chat when a player is issued a fine                                                                                                                            |
| fineableForms | A list of the names of forms that should issue fines to players.                                                                                                                            |
| legacyESX     | <p>Set to true if default settings do not get character name properly (older esx_identity/ESX legacy versions)<br><br>created for and tested with:<br>ESX v1.1.0<br>esx_identity v1.0.2</p> |
