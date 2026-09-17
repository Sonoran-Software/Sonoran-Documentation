---
description: >-
  The Sonoran CAD bodycam enables dispatchers to see live video from units
  in-game.
---

# Body Camera

{% hint style="warning" %}
Bodycam cloud footage storage is limited based on your subscription plan.

[View our pricing page](../../../pricing/faq/) for more information.
{% endhint %}

<figure><img src="../../../.gitbook/assets/livestream_bodycam_promo (1).png" alt=""><figcaption></figcaption></figure>

## What is the live Body Camera?

Sonoran CAD is the only external CAD system offering livestream video from in-game users accessible through the [live map](bodycam.md#live-map), [active units preview](bodycam.md#preview), or a [dedicated window](bodycam.md#window).

## Activation Guide

### 1. Download and Install the Resource

{% hint style="info" %}
This submodule is already **enabled by default** when installing the [Sonoran CAD FiveM resource](../fivem-installation/).

\
The [locations submodule](locations.md) includes all logic required to send bodycam images to the CAD and is **already enabled by default**. Keep this submodule enabled to maintain functionality.
{% endhint %}

### 2. Adjust the Configuration

The bodycam settings are stored inside of the `/configuration/bodycam_config.lua` file.

<details>

<summary>Configuration Options</summary>

| Variable                        | Description                                                                                                                                                                                                                            |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `command`                       | The command name to toggle your body camera on or off.                                                                                                                                                                                 |
| `requireUnitDuty`               | If enabled, the player must be logged into the CAD to use the body camera.                                                                                                                                                             |
| `enableAnimation`               | Play an in-game animation when activating or deactivating the body camera.                                                                                                                                                             |
| `enableOverlay`                 | <p>Enables or disables the blinking body camera image on screen when enabled.<br>Default <code>true</code></p>                                                                                                                         |
| `overlayLocation`               | <p>The position (corner) of the screen where the body camera image is displayed.<br>Options: <code>top-left</code>, <code>top-right</code>, <code>bottom-left</code>, <code>bottom-right</code><br>Default: <code>top-right</code></p> |
| `enableBeeps`                   | <p>Enables or disables the body camera beeping when turned on.<br>Default: <code>true</code></p>                                                                                                                                       |
| `beepType`                      | <p>Type of audio that the beeps use.</p><p><code>native</code> = GTAV Native Sounds</p><p><code>nui</code> = Custom Sound File</p>                                                                                                     |
| `beepFrequency`                 | <p>Adjusts the frequency at which unit body camera beeps when turned on(in milliseconds).<br>Default: <code>30000</code> (30 seconds)</p>                                                                                              |
| `beepRange`                     | The range at which a person can hear the bodycam beeps                                                                                                                                                                                 |
| `screenshotFrequency`           | <p>Adjusts the frequency at which unit body cameras update (in milliseconds).<br>Default: <code>2000</code> (2 seconds)</p>                                                                                                            |
| `defaultKeybind`                | The default keybind for toggling the bodycam.                                                                                                                                                                                          |
| `autoEnableWithLights`          | Automatically enable bodycam when emergency lights are enabled/disabled.                                                                                                                                                               |
| `autoEnableWithWeapons`         | Automatically enable bodycam when a weapon is drawn.                                                                                                                                                                                   |
| `clothing`                      | Clothing items that must be worn in order to have a body camera.                                                                                                                                                                       |
| `weapons`                       | Weapons that when drawn enable bodycam.                                                                                                                                                                                                |
| `bodycamCommandChangeFrequency` | <p>The command to adjust your individual body camera screenshot frequency to be different than the server's <code>screenshotFrequency</code> value.<br>Default: <code>bodycamFreq</code></p>                                           |

</details>

### 3. Ensure Players are Linked

Ensure the player has already [linked their CAD](../link-user-in-game.md) for this integration to work.

## In-Game Usage

When in-game, units [must also be actively signed into the dispatch, police, fire, or EMS panel](bodycam.md#unit-duty-requirement).

On first usage, players will be prompted to grant permission for the bodycam:

<figure><img src="../../../.gitbook/assets/image (528).png" alt=""><figcaption></figcaption></figure>

#### Commands

In-game commands can be used to

* `/bodycam` Toggle the bodycam on or off
* `/bodycam sound` Toggles the [beeps](bodycam.md#beeps) on and off locally
* `/bodycam anim` Toggles the [bodycam animation](bodycam.md#animation) on and off locally
* `/bodycam overlay` Toggles the [bodycam overlay](bodycam.md#body-camera-overlay) on and off locally
* `/bodycam forceoff` Enables the [force-off state](bodycam.md#force-off)

<figure><img src="../../../.gitbook/assets/image (571).png" alt=""><figcaption></figcaption></figure>

### Keybind

Users can customize a keybind to toggle their bodycams on and off.

Navigate to **Settings** > **Keybinds** > **FiveM** and look for the keybind **Toggle BodyCam** under the resource `sonorancad`.

<figure><img src="../../../.gitbook/assets/image (570).png" alt=""><figcaption></figcaption></figure>

#### Body Camera Overlay

When your bodycam is on and being viewed in the CAD a periodic beep and body overlay will appear on your screen.

<figure><img src="../../../.gitbook/assets/image (22).png" alt=""><figcaption></figcaption></figure>

### Beeps

The body camera plays server-sided beeps periodically while activated.

* `beepFrequency` determines how often these beeps are played
* `beepRange` determines how far away these beeps are heard

### Automatic Activation

The body camera will automatically activate when an officer activates their lights or draws a firearm.

* `autoEnableWithWeapons` enables automatic activation when one of the `weapons` items are used.
* `autoEnableWithLights` to enabled automatic activation when emergency lights are enabled.

### Force Off

Use `/bodycam forceoff` to keep your bodycam off, including automatic activation and viewing requests. Use `/bodycam` to turn it back on.

By default, force off requires the `sonorancad.bodycam.forceoff` FiveM ACE permission. CAD account permissions do not grant this access.

#### Grant Access

Add this example to `server.cfg` (or a permissions file executed by it), replacing `YOUR_LICENSE` with the player's license identifier:

```cfg
add_ace group.sonoran_cad_bodycam sonorancad.bodycam.forceoff allow
add_principal identifier.license:YOUR_LICENSE group.sonoran_cad_bodycam
```

Repeat the `add_principal` line for each player. Restart the server to apply, or run the lines in the server console for immediate access.

#### Disable the Permission Check

To allow everyone to use force off, set this value in `sonorancad/configuration/bodycam_config.lua`:

```lua
forceOffAce = "",
```

Restart `sonorancad` to apply. To require a different ACE permission instead, set `forceOffAce` to that permission and use it in your `add_ace` rule.

Other bodycam subcommands do not require this ACE permission. The bundled keybind permissions do not grant force-off access.

### Unit Duty Requirement

By default, the `requireUnitDuty` configuration value is set to `true`. This requires the unit to be logged into the Police, EMS or Fire portions of CAD in order to activate their bodycam.

### Animation

When toggling your body camera on or off an animation will play. To disable this, set `enableAnimation` to `false`.

### In-Game Recording

By default, each recording includes a 30-second shadow buffer followed by 1 minute 30 seconds of video, for a maximum total length of 2 minutes. The shadow buffer length can be adjusted with `recording.shadowBufferSeconds`, but the total recording length cannot exceed 2 minutes.

Recording can be started manually using a configurable keybind located under **Keybinds -> FiveM -> Sonoran CAD**. You can also enable automatic bodycam recording through `recording.autoRecordEvents`.

Developers can also trigger bodycam recordings with a [client event](../framework-development-documentation/client-events.md#bodycam-record-toggle).

Recordings can be viewed in the CAD under **Unit Management** > **Body Cam Recordings**

<figure><img src="../../../.gitbook/assets/image (568).png" alt=""><figcaption></figcaption></figure>

## CAD Usage

<figure><img src="../../../.gitbook/assets/20260225-2332-49.6056763.gif" alt=""><figcaption></figcaption></figure>

### Active Units

In the active units panel, hover over the camera icon to view a preview of their bodycam.

<figure><img src="../../../.gitbook/assets/image (525).png" alt="" width="297"><figcaption></figcaption></figure>

### Window

Click on the active unit preview or the pop out button on the live map to open a dedicated bodycam viewer window.

<figure><img src="../../../.gitbook/assets/image (522).png" alt="" width="375"><figcaption></figcaption></figure>

### Live Map

In the live map, selecting a unit or hovering near a unit in the 3D map will show the bodycam.

<div><figure><img src="../../../.gitbook/assets/image (523).png" alt=""><figcaption></figcaption></figure> <figure><img src="../../../.gitbook/assets/image (524).png" alt=""><figcaption></figcaption></figure></div>
