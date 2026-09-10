---
description: >-
  In some cases, the auto-updater requires manual steps from one version to the
  next.
---

# 🔁 Migration Guides

<details>

<summary>2.27.22 (Configurable PTT Animation)</summary>

Version 2.27.22 adds a new configuration option to customize the push-to-talk animation.

1. Open your existing `config.lua`
2. Add the following table to the configuration file

The values below preserve the existing default animation used while transmitting on foot with the radio closed.

```lua
Config.pttAnimation = {
	dictionary = 'random@arrests', -- Animation dictionary used while transmitting with the radio closed
	name = 'generic_radio_chatter' -- Animation name used while transmitting with the radio closed
}
```

</details>

<details>

<summary>2.26.0 (Display Name Sync)</summary>

Version 2.26.0 adds a new configuration option to set user's radio display names to match their in-game name.

1. Open your existing `config.lua`
2. Add the new properties to the configuration file

If set to `true` the radio display name will be set to the QBCore, QBox, ESX, or vanilla in-game name.

```lua
Config.syncPlayerNameToRadio = false -- Sync the player's in-game character name to their Sonoran Radio display name
```

</details>

<details>

<summary>2.25.6 (Water Degredation)</summary>

Version 2.25.6 adds a new configuration option to degrade signal strength when the user is underwater.

1. Open your existing `config.lua`
2. Add the new properties to the configuration file

```lua
Config.heavySignalDegradeInWater = { -- Heavily degrade radio signal while the player is in water to mimic an IP67-rated handheld
	enabled = true, -- Set to true to enable heavy signal degrade in water
	pedInWaterDegredation = 0.6, -- Signal strength multiplier when the player is simply in water (e.g. 0.6 would reduce signal strength to 60% of normal)
	pedUnderWaterDegredation = 0.3 -- Signal strength multiplier when the player is underwater (e.g. 0.3 would reduce signal strength to 30% of normal)
}
```

</details>

<details>

<summary>2.24.0 (Geo Channels, Auto Notifications, Display Name Function, Auto On-Scene Status AI)</summary>

Version 2.24.0 adds a new configuration options to:

* Create Geo-based channel switching
* Use new notification frameworks
* A custom function for guest user display names
* Allowing the upcoming AI to automatically change your status when you are en-route and arrive on-scene at a GPS routed location.

1. Open your existing `config.lua`
2. Add the new properties to the configuration file

**Geo Channels**

```lua
-- Geo-Channel Settings --
Config.geoChannels = {
	enabled = true,
	command = 'sonradgeoswitch', -- command to toggle geo-channel switching | e.g. /sonradgeoswitch
	friendlyCommand = 'geoswitch', -- friendly subcommand of the /radio command to toggle geo-channel switching | e.g. / radio geoswitch
	acePermission = '', -- ACE permission required to use disable geo-channel switching | Leave blank to allow all users
	showNotifications = true -- Show notifications when geo-channel switching is enabled/disabled
}

```

**Auto Notifications**

```lua
-- Change the type from 'native' to the new 'auto' option

-- OLD:
Config.notifications = {
	type = 'native', -- Available options: native, pNotify, okokNotify, ox_lib, chat, or custom
	notificationTitle = 'SonoranRadio', -- Notification Title for methods that support it

-- NEW:
Config.notifications = {
	type = 'auto', -- Available options: auto, native, pNotify, ox_lib, okokNotify, chat, or custom
	notificationTitle = 'SonoranRadio', -- Notification Title for methods that support it
```

**Guest Display Name**

```lua
-- Customize Radio Guest Display Names
Config.getGuestDisplayName = function(source)
	-- return ('Guest %s'):format(source)
	return nil
end
```

**AI GPS Auto-Status**

```lua
Config.autoOnSceneStatus = {
	enabled = true, -- Enable automatic ON_SCENE status when arriving at a waypoint created by SonoranRadio AI
	distance = 30.0, -- Distance in meters from the waypoint to trigger ON_SCENE status
	statusEnum = 4, -- Status enum for "ON_SCENE" -- See https://docs.sonoransoftware.com/cad/api-integration/api-endpoints/emergency/identifiers/unit-status for more information
	timeout = 300000 -- Time in milliseconds to timeout the auto ON_SCENE status after arriving at the waypoint
}
```

</details>

<details>

<summary>2.22.0 (Login as Guest)</summary>

Version 2.22.0 adds a new configuration option to use in-game ACE permissions for a guest login, removing the need for a user account.

1. Open your existing `config.lua`
2. Add the new property to the configuration file

```lua
Config.acePermsForRadioGuests = false -- Restrict users joining the radio as a guest to an ace permission
```

[Learn more about this new configuration line.](../../tutorials/usage/in-game-radio/configuring-ace-permissions.md#guest-login)

</details>

<details>

<summary>2.21.0 (AI Postal Callouts + Signal Jammers)</summary>

Version 2.21.0 adds a new configuration option for AI Pursuit Postal Callouts.

1. Open your existing `config.lua`
2. Add the new properties (`withPostal` and `postalResource`) to your `Config.autoCallouts` object. The end result should look like:

```lua
Config.autoCallouts = {
	enabled = true, -- Whether or not this feature is enabled
	speedUnit = 'mph', -- mph | kmh | none -- The unit of speed provided with the callout
	withPostals = false, -- Whether to include postals with the automatic callouts
	postalResource = 'nearest-postal',
}
```

Version 2.21.0 adds a new configuration option for Signal Jammers.

1. Open your existing `config.lua`
2. At the bottom of the configuration file, copy and paste the entire `Config.radioJammers` object.

```lua
Config.radioJammers = {
	enabled = true, -- Enable or disable radio jammers
	menuCommand = 'jammers', -- Subcommand to open the jammers menu | e.g. /sonoranradio jammers
	toggleRange = 3.0, -- Distance in meters required to toggle a jammer on/off
	permissionMode = 'none', -- ace, qbcore, esx or none
	acePermission = 'sonoranradio.jammers', -- ACE permission required to use jammers
	allowedJobs = { -- Jobs that can use jammers | Requires permission mode to be set to 'qbcore' or 'esx'
		['hacker'] = {
			grades = { -- Job grades that can use jammers
				1,
				2,
				3
			}
		}
	},
	jammers = {
		-- Define jammers here
		-- Example:
		{
			name = 'Hand Held Jammer', -- Name of the jammer
			model = 'm23_2_prop_m32_hackdevice_01a', -- Model name for the jammer
			offModel = 'm23_2_prop_m32_hackdevice_01a', -- Model name for the jammer when off | Optional
			range = 25, -- Range of the jammer in meters
			strength = 0.5, -- Strength of the jammer (0.0 to 1.0)
			permission = 'sonoranradio.jammer_handheld', -- ACE permission required to use this jammer | Optional
			-- If permission is not set, the jammer will be available to all players that can access the jammers menu
			type = 'handheld', -- Type of jammer (handheld or static)
			itemName = 'sonoran_radio_jammer_handheld', -- Item name for the jammer (if Config.enforceRadioItem is true)
			poweredItemName = 'sonoran_radio_jammer_handheld_on' -- Optional item that replaces the base item while the jammer is powered on
		},
		{
			name = 'Suitcase Jammer', -- Name of the jammer
			model = 'ch_prop_ch_mobile_jammer_01x', -- Model name for the jammer
			offModel = 'ch_prop_ch_mobile_jammer_01x', -- Model name for the jammer when off | Optional
			range = 100, -- Range of the jammer in meters
			strength = 0.8, -- Strength of the jammer (0.0 to 1.0)
			permission = '', -- ACE permission required to use this jammer | Optional
			-- If permission is not set, the jammer will be available to all players that can access the jammers menu
			type = 'static', -- Type of jammer (handheld or static)
			itemName = 'sonoran_radio_jammer_suitcase' -- Item name for the jammer (if Config.enforceRadioItem is true)
		},
		{
			name = 'Case Jammer', -- Name of the jammer
			model = 'h4_prop_h4_jammer_01a', -- Model name for the jammer
			offModel = 'h4_prop_h4_jammer_01a', -- Model name for the jammer when off | Optional
			range = 200, -- Range of the jammer in meters
			strength = 1.0, -- Strength of the jammer (0.0 to 1.0)
			permission = '', -- ACE permission required to use this jammer | Optional
			-- If permission is not set, the jammer will be available to all players that can
			type = 'static', -- Type of jammer (handheld or static)
			itemName = 'sonoran_radio_jammer_case' -- Item name for the jammer (if Config.enforceRadioItem is true)
		},
		{
			name = 'Satelite Jammer', -- Name of the jammer
			model = 'm23_2_prop_m32_jammer_01a', -- Model name for the jammer
			offModel = 'm23_2_prop_m32_jammer_01a', -- Model name for the jammer when off | Optional
			range = 300, -- Range of the jammer in meters
			strength = 1.0, -- Strength of the jammer (0.0 to 1.0)
			permission = '', -- ACE permission required to use this jammer | Optional
			-- If permission is not set, the jammer will be available to all players that can
			type = 'static', -- Type of jammer (handheld or static)
			itemName = 'sonoran_radio_jammer_satelite' -- Item name for the jammer (if Config.enforceRadioItem is true)
		}
	}
}
```

</details>

<details>

<summary>2.20.0 (Default ESC Behavior)</summary>

Version 2.20.0 adds a new feature to configure your community's default [ESC behavior setting](../../tutorials/usage/in-game-radio/using-the-in-game-radio/#c.-esc-options).

1. Open your existing `config.lua`
2. Add the new `Config.defaultEscapeMode = 'keep'` property. You can enable and configure this feature if desired.

<figure><img src="../../.gitbook/assets/image (34).png" alt=""><figcaption></figcaption></figure>

</details>

<details>

<summary>2.19.0 (PTT on Panic &#x26; AI Callouts)</summary>

Version 2.19.0 adds a new feature to automatically press a user's push-to-talk button on panic.

1. Open your existing `config.lua`
2. Add the three new config options:

**A. autoPttOnPanic Config**

```lua
Config.autoPttOnPanic = {
	enabled = true, -- Enable automatic PTT when panic button is pressed
	duration = 15 -- Duration in seconds to hold PTT when panic button is pressed
}
```

<figure><img src="../../.gitbook/assets/image (138).png" alt=""><figcaption></figcaption></figure>

**B. autoCallouts Config**

```
-- Have the radio automatically callout pursuit locations (when toggled with the keybind)
Config.autoCallouts = {
	enabled = true, -- Whether or not this feature is enabled
	speedUnit = 'mph', -- mph | kmh | none -- The unit of speed provided with the callout
}
```

<figure><img src="../../.gitbook/assets/image (278).png" alt=""><figcaption></figcaption></figure>

**C. toggleAutoCallouts Keybind**

Inside of the existing `Config.keybinds` add a new line for:\
\``['toggleAutoCallouts'] = '',`

<figure><img src="../../.gitbook/assets/image (279).png" alt=""><figcaption></figcaption></figure>

</details>

<details>

<summary>2.18.0 (LB Phone, Background Noise)</summary>

Version 2.18.0 adds a new integration for LB phone and feature to inject background noise into your transmissions.

1. Open your existing `config.lua`
2. Add the new `Config.showEmergencyCallHelp = true` option. [Setting this to false hides the emergency call banner.](../../tutorials/usage/dispatch-panel/emergency-calls.md#customize-the-emergency-number-and-banner)
3. Add the new `Config.phoneResource = 'none'` option. [Setting this to `'lb-phone'` enables the LB phone integration.](../../tutorials/integrations/fivem-phone-scripts.md#lb-phone)
4. Add the new `Config.enableBackgroundAudio = true` option. [Setting this to false disables the background audio injection feature.](../../tutorials/usage/in-game-radio/background-audio-injection.md)

<figure><img src="../../.gitbook/assets/image (276).png" alt=""><figcaption></figcaption></figure>

</details>

<details>

<summary>2.15.0 (ACE Perm Sync)</summary>

Version 2.15.0 adds a new feature to manage radio community approval and permissions via ACE perms.

1. Open your existing `config.lua`
2. Add the new `Config.acePermSync = false` property. You can enable and configure this feature if desired.

![](<../../.gitbook/assets/image (67).png>)

</details>

<details>

<summary>2.14.0 Release (LVC Resource Name)</summary>

Version 2.14.0 adds a new feature to increase radio volume when in-game sirens are on.

1. Open your existing `config.lua`
2. Add the new `Config.luxartResourceName = 'lvc'` property.

![](<../../.gitbook/assets/image (256).png>)

</details>

<details>

<summary>2.11.0 Release (Earpieces JSON)</summary>

Version 2.11.0 Migrates the earpiece configuration from the `config.lua`to `earpieces.json`. Therefore, this property is no longer needed in your `config.lua` file.

1. Open the new `earpieces.json` file to confirm your configuration has been migrated (after resource start).
2. Open your existing `config.lua`
3. Remove the `Config.chatterExclusions` property.

![](<../../.gitbook/assets/image (220).png>)

</details>

<details>

<summary>2.10.0 Release (Config Values)</summary>

Version 2.10.0 introduces new configuration values to customize the default user keybinds and the emergency call prefix.

Note: _This new default key mapping will only apply to new users who have not joined the server and had their keybind set yet._

1. Open your existing `config.lua`
2. Paste in the two, new default config options:

```lua
Config.emergencyCallCommand = '999' -- Command suffix to start or stop an emergency call (i.e. '911' == /radio 911)
```

```lua
-- Default radio keybinds (these can be changed in GTA settings) --
Config.keybinds = {
	['toggle'] = '',
	['ptt'] = '\\',
	['power'] = '',
	['panic'] = '',
	['nextChannel'] = '',
	['prevChannel'] = '',
	['talkAnim'] = ''
}
```

This is is also available from the auto-updater's `config.CHANGEME.lua`

</details>

<details>

<summary>2.8.1 Release (Mobile Repeater Default Key)</summary>

{% hint style="warning" %}
This section applies only to older 2.8.1-era resource versions. Current versions no longer register `Config.mobileRepeaterKeybind`. Players use `/radio repeater`, and administrators manage compatible vehicle models through **Radio Repeaters** > **Mobile Repeater Vehicles** in `/radiomenu`.
{% endhint %}

Version 2.8.1 introduces a new configuration value to customize the default user keybind to toggle mobile repeaters.

Note: _This new default key mapping will only apply to new users who have not joined the server and had their keybind set yet._

1. Open your existing `config.lua`
2. Paste in the new default config option (`Config.mobileRepeaterKeybind`)\
   This is also available from the auto-updater's `config.CHANGEME.lua`

```
-- Mobile repeater keybinds
Config.mobileRepeaterKeybind = {
	mapperType = 'keyboard', -- See: https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/
	map = 'g', -- See: https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/
	label = 'Toggle Radio Repeater'
}
```

Your `config.lua` show now look like the following:

<img src="../../.gitbook/assets/image (210).png" alt="" data-size="original">

</details>

<details>

<summary>2.7.0 (Speakers, Tunnels, Voice Effects, and Earpiece EUP)</summary>

Version 2.7.0 introduces a new configuration value for EUP earpiece detection (to prevent people from hearing nearby chatter).

1. Open your existing `config.lua`
2. Paste in the new default config option:\
   This is also available from the auto-updater's `config.CHANGEME.lua`

```lua
-- Radio Chatter Exclusion Settings --
Config.chatterExclusions = {
	{
		componentId = 2, -- Ears
		drawableId = 1, -- Number in vMenu MP Ped Component list
		texture = 0 -- Texture ID in vMenu MP Ped Component list
	},
	{
		componentId = 2, -- Ears
		drawableId = 2, -- Number in vMenu MP Ped Component list
		texture = 0 -- Texture ID in vMenu MP Ped Component list
	},
	{
		componentId = 2, -- Ears
		drawableId = 2, -- Number in vMenu MP Ped Component list
		texture = 0 -- Texture ID in vMenu MP Ped Component list
	},
	{
		componentId = 2, -- Ears
		drawableId = 42, -- Number in vMenu MP Ped Component list
		texture = 0 -- Texture ID in vMenu MP Ped Component list
	},
}
```

3.  Your `config.lua` should now appear like the following after adding in the `Config.chatterExclusions` property:

    <figure><img src="../../.gitbook/assets/image (102).png" alt=""><figcaption></figcaption></figure>

</details>

<details>

<summary>2.6.0 Release (In-Game Nearby Audio &#x26; Connected Users List)</summary>

Version 2.6.0 introduces new configuration values.

1. Open your existing `config.lua`
2. Ensure the following lines are set:
   1. `Config.chatter = true`
   2. `Config.acePermsForRadioUsers = false`
   3. `Config.talkSync = true`

Your `config.lua` should now look like the following:

![](<../../.gitbook/assets/image (175).png>)

</details>

<details>

<summary>2.3.0-1 Release (In-Game Configuration Menu)</summary>

### Configuration File

Version 2.3.0 introduces a new configuration value.

1. Open your existing `config.lua`
2. Ensure the following lines are set:
   1. `Config.radioUrl = 'https://sonoranradio.com'`
   2. `Config.apiUrl = 'https://api.sonoranradio.com/'`

Your `config.lua` file should now look like the following:

<img src="../../.gitbook/assets/image (158).png" alt="" data-size="original">

### ACE Permissions

Version 2.3.0 introduces a new in-game repeater configuration menu. This allows an easier way to add, edit, or remove in-game repeaters.

Communities will need to grant the new `command.radiomenu` permission.

Communities can remove the old spawn and remove command permissions:

* `command.spawnradiotower`
* `command.spawnradiorack`
* `command.spawnradiocellrepeater`
* `command.removeradiorepeater`

[See a complete example of our updated ACE permission structure.](../../tutorials/usage/in-game-radio/configuring-ace-permissions.md)

</details>

<details>

<summary>2.2.0 Release (In-Game Towers)</summary>

### Towers File

Version 2.2.0 introduces multiple new in-game tower options. This includes a new `towers.DEFAULT.json` file that is required.

1. Delete the existing `towers.json` file in your `sonoranradio` resource.
2. Rename the new `towers.DEFAULT.json` file to `towers.json` in your `sonoranradio` resource and save.

### Configuration File

Version 2.2.0 adds a new API key configuration for upcoming features.

1. Add the following to line to your `config.lua` file, below the `Config.comId` line:

`Config.apiKey = 'YOUR API KEY'`

2. Replace `YOUR API KEY` with the [community API key](../../tutorials/getting-started/installing-the-in-game-resource.md#id-3.-configure-community-information) from the `Administration` panel.

</details>
