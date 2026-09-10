---
description: Customize your community's radio frames!
---

# Customizing Radio Frames

## Video Tutorial:

{% embed url="https://youtu.be/rv5Go-fYdak" %}
Sonoran Radio: Customize Frames
{% endembed %}

## Selecting Custom Frames

Custom radio frames can be selected in the radio settings menu. Custom frames allow your community to create more UI options for each department!

The drop-down menu will appear in your settings menu if you have one or more options available to you.

<figure><img src="../../../.gitbook/assets/image (167).png" alt="" width="165"><figcaption><p>Sonoran Radio - High Visibility Frame</p></figcaption></figure>

## Restricting Custom Frames

Restrict radio frames by department, job, or job grade, and set admin command permissions. Compatible with ESX, QBCore, or as a standalone.

You can use [CMS to automatically manage in-game ACE permissions](https://docs.sonoransoftware.com/cms/integration-capabilities/sonoran-radio-sync), and even sync them with Discord roles!

Example: `SAHP` department members with police job grades 1-3 can use frames:

* `default`
* `signalpro`
* `voxguard`
* `hi-vis`

<details>

<summary>Config.frames</summary>

<pre class="language-lua"><code class="lang-lua"><strong>Config.frames = {
</strong>	permissionMode = 'ace', -- ace, qbcore, esx or none
	adminPermission = 'sonoranradio.admin', -- ACE permission required to use admin commands
	departments = {
		['sahp'] = {
			label = 'San Andreas Highway Patrol',
			permissions = {
				jobs = { -- Jobs that can use this department
					['police'] = {
						grades = { -- Job grades that can use this department
							1,
							2,
							3
						}
					}
				},
				ace = { -- ACE Permissions that can use this department | ONLY EFFECTIVE IN ACE PERMISSION MODE
					'sonoranradio.sahp'
				}
			},
			-- Radio frames that can be used by this department
			allowedFrames = {
				'default',
				'signalpro',
				'voxguard',
				'hi-vis'
			}
		}
	}
}
</code></pre>

</details>

## Customizing Radio Frames

1. Navigate to the `sonoranradio\skins` directory.
2. Locate a skin folder, which will contain 2-4 images and a `skin.json` file, displaying different frames.
3. Observe the images, which include handheld, mobile, aircraft, and possibly HUD radio types.
4. Create a new skin folder and add your own frame images in the format you've observed in Step 3.
5. Copy over and modify an existing `skin.json` file to maintain format consistency.
6. In the `skin.json` file, specify the radio name and configure the frame types and body settings.
7. Configure the skin
   1. In the `skin.json` file, define the images for each radio type.
   2. Enable debug mode by [setting `Config.debug` to `true` in your `config.lua` file](../../getting-started/installing-the-in-game-resource.md#updates).
   3. Use the [in-game frame placement menu](customizing-radio-frames.md#frame-placement-menu) for easy adjustments.

<figure><img src="../../../.gitbook/assets/RadioDebugBoxesVeh.png" alt=""><figcaption><p>Sonoran Radio - Vehicle Radio - Debug Mode Enabled</p></figcaption></figure>

### Frame Types

The following are valid as values for `type`:

* `portable` - Used for handheld radios
* `vehicle` - Used for mobile radios installed in a vehicle
* `hud` - Top-down view of a portable radio

With `vehicle` type frames, you can additionally customize the `vehicleClasses` property to whitelist the frame to specific vehicle types.

For example, our `default` skin whitelists one frame to **aircraft** only: `"vehicleClasses": [15, 16]`. See available vehicle classes [here](https://docs.fivem.net/natives/?_0x29439776AAA00A62).

### Body Settings

1. In `body`, specify the image filename for each radio type.\
   For instance, use `radio-portable.png` for a portable radio.
2. Additionally, set the `width` value to define the image's display width in-game.

### Controls

1. Assign actions to buttons at specific positions on the radio image.
   * **Example:** Align a panic button hitbox with the panic button on the image, so clicking it in-game triggers a panic action.
2. Available action types: `power`, `next_preset`, `prev_preset`, `panic`, `home`, `hide`.

### Screen and Mini-Screen

Specify the position and width of the radio frame screen in Sonoran Radio to display information. Modify values under `screen` or `miniScreen` for HUD-type frames.

For `HUD`-type frames, `controls` can be left blank.

#### Screen Styles

If you would like to use a text-style display instead of the normal radio screen, you can set the `style` to `text`. For example:

```json
"screen": {
  "style": "text",
  "bottom": 17.625,
  "height": 7.875,
  "left": 5.125,
  "right": 5.875,
  "scale": 0.65
}
```

<div data-full-width="false"><figure><img src="../../../.gitbook/assets/image (221).png" alt="" width="179"><figcaption><p>Sonoran Radio Screen - Default</p></figcaption></figure> <figure><img src="../../../.gitbook/assets/FiveM_b3095_GTAProcess_irgR5p1mnW.png" alt="" width="178"><figcaption><p>Sonoran Radio Screen - Text</p></figcaption></figure></div>

## Example File

Below is an example of a `skin.json` file:

<details>

<summary>skin.json</summary>

```json
{
  "name": "Moto AX",
  "frames": [
    {
      "type": "portable",
      "body": { "image": "radio-portable.png", "width": 17 },
      "controls": [
        {
          "action": "power",
          "bottom": 29.6,
          "right": 0.8,
          "width": 2.7,
          "height": 2.7
        },
        {
          "action": "next_preset",
          "bottom": 30,
          "right": 7.25,
          "width": 1.25,
          "height": 4.25
        },
        {
          "action": "prev_preset",
          "bottom": 30,
          "left": 7.125,
          "width": 1.25,
          "height": 4.25
        },
        {
          "action": "panic",
          "bottom": 29.75,
          "left": 4,
          "width": 2,
          "height": 1.25
        },
        {
          "action": "home",
          "bottom": 3.25,
          "left": 6.75,
          "right": 6.75,
          "height": 1.5
        }
      ],
      "screen": {
        "bottom": 5.875,
        "height": 18.125,
        "left": 3.2185,
        "right": 3.2,
        "zIndex": 5
      }
    },
    {
      "type": "vehicle",
      "body": { "image": "radio-mobile.png", "width": 45.125 },
      "controls": [
        {
          "action": "power",
          "top": 2.25,
          "left": 6.15,
          "width": 2,
          "height": 2
        },
        {
          "action": "prev_preset",
          "top": 2.25,
          "right": 17.25,
          "width": 1.5,
          "height": 2
        },
        {
          "action": "next_preset",
          "top": 5,
          "right": 17.25,
          "width": 1.5,
          "height": 2
        },
        {
          "action": "hide",
          "top": 8.25,
          "right": 17.25,
          "width": 1.5,
          "height": 1.5
        },
        {
          "action": "home",
          "top": 11.25,
          "right": 17.25,
          "width": 1.5,
          "height": 1.5
        },
        {
          "action": "panic",
          "top": 2.25,
          "right": 3.75,
          "width": 2,
          "height": 2
        }
      ],
      "screen": {
        "top": 2.65,
        "height": 10.2,
        "left": 11,
        "width": 13.45,
        "zIndex": 5
      }
    },
    {
      "type": "hud",
      "body": { "image": "radio-portable-top.png", "width": 22.25 },
      "controls": [],
      "miniScreen": {
        "bottom": 7.2,
        "height": 3.75,
        "left": 7.75,
        "right": 7.5
      }
    }
  ]
}
```

</details>

## Frame Placement Menu

{% embed url="https://www.youtube.com/watch?v=rv5Go-fYdak" %}

The frame placement menu offers rapid configuration of the screen size, location, and button placements.

With debug mode enabled, open the menu by clicking on the icon in the top right of your screen.

Select the skin ID and frame that you wish to edit. Then, select each property and utilize the arrow keys to adjust the configuration.

Once complete, save your changes using the `Save skin.json` button.

<figure><img src="../../../.gitbook/assets/image (49).png" alt="" width="217"><figcaption></figcaption></figure>

## Programmatically Changing Frames

To get all available frames, utilize the following **server-side** export:

```lua
local frames = exports.sonoranradio:GetAvailableFrames(GetResourcePath('sonoranradio').. '/skins')
print(json.encode(frames))
-- Returns:
-- ["default","hi-vis","signalpro","voxguard"]
-- Array of frame names 
```

To set a users frame, utilize the **client-side** event:

```lua
local frameName = "hi-vis" -- Frame/skin name | i.e. hi-vis, default, voxguard
local source = 1 -- User's server ID
TriggerClientEvent('SonoranRadio::AdminSkinChange', source, frameName)
```
