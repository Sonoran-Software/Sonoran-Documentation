---
description: >-
  Background audio injection blends in-game sounds—like sirens, helicopter
  rotors, boat engines, and gunshots—into your microphone output.
---

# Background Audio Injection

<figure><img src="../../../.gitbook/assets/Audio_Injection.png" alt=""><figcaption><p>Sonoran Radio - Background Noise Injection</p></figcaption></figure>

## Example Video

The example video shows audio snippets with:

* [Digital Effect](../dispatch-panel/custom-voice-effects.md): Sirens in Background
* [Vocoder](../dispatch-panel/custom-voice-effects.md): Helicopter Rotors

{% embed url="https://youtu.be/Ea9EowWi-Io" %}
Sonoran Radio: Background Audio Injection
{% endembed %}

## Using Background Audio Injection

### What is Background Audio Injection?

Background audio injection blends in-game sounds—like sirens, helicopter rotors, boat engines, and gunshots—into your microphone output.

If you're responding with sirens active, others on the radio will hear them in the background of your voice transmissions. The sound effect volume level is determined by the distance to the source.

### Enabling Background Audio Injection

To enable this feature:

1. Ensure your community is on the Pro version of Sonoran Radio.
2. Set `enableBackgroundAudio` to `true` in your [config.lua](../../getting-started/installing-the-in-game-resource.md#updates) file.

### Customizing Background Audio Sounds

Background audio sounds can be customized in the event of a specific siren type, gunshot sound, etc.

Communities can override the sound effects with custom files in the admin [SFX Customization panel](../dispatch-panel/custom-sfx.md#background-audio-injection).

## Troubleshooting

### Can't Hear Sirens

If sirens are not playing in the background of your microphone (when next to a vehicle with one on), follow these troubleshooting steps.

#### LVC Users (Luxart Vehicle Control)

Sonoran Radio integrates with Luxart Vehicle Control to determine when sirens are activated.

1. Ensure you have configured the `Config.luxartResourceName` configuration option to match the resource name of your installed Luxart Vehicle Control resource.
2. Ensure you are on the latest version of Luxart Vehicle Control, as older versions do not contain the developer events needed.
   1. LVC (v3.2.9-Rev2+): [Download](https://github.com/TrevorBarns/luxart-vehicle-control/releases)
   2. LVC Fleet (v1.0.1+): [Download](https://github.com/TrevorBarns/luxart-vehicle-control-fleet/releases)

#### Native Fallback

For communities not using LVC, the radio defaults to native siren detection. However, it cannot distinguish between just police lights and lights with sirens. As a result, background siren audio will play whenever police lights are active.
