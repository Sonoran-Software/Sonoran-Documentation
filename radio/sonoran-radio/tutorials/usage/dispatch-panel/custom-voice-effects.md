---
description: Customize transmission voice effects for your community, or local user!
---

# Custom Voice Effects

<figure><img src="../../../.gitbook/assets/fx_promo (1).png" alt=""><figcaption><p>Sonoran Radio: Voice Effect Customization</p></figcaption></figure>

## Available Voice Effects

Sonoran Radio lets you create custom voice effect profiles for transmissions. These effects can be independently assigned to specific radio channels and emergency calls. Or, users can also customize their own voice effect preferences!

By clicking the **headphone** icon and using the signal strength sliders, you can hear how the effect will sound when users are talking.

### Vocoder

{% hint style="info" %}
The **vocoder** effect remains consistent and does not fluctuate based on [in-game signal strength](../in-game-radio/in-game-repeaters.md)
{% endhint %}

<details>

<summary>Vocoder</summary>

The Vocoder voice effect simulates a modern P25-style radio compression using an AMBE-like encoding approach, commonly heard in proprietary digital radio systems. It’s ideal for communities seeking realistic conditions and authentic downsides.

When enabled, audio is routed through a vocoder for encoding and decoding before broadcast, causing a slight transmission delay.

The vocoder has optional bitrates of `3200`, `2400`, `1600`, `1400`, `1300`, `1200`, `700` and `450` bit/s. While the suggested bitrate is `2400`, the bitrate can be increased for "less effect" or increased for "more effect".

**It is recommended to use the** [**clipping voice effect**](custom-voice-effects.md#clipping) **in addition to the vocoder to have in-game signal strength impact the transmission quality.**

</details>

### Clipping

<details>

<summary>Clipping</summary>

The clipping voice effect mutes or "clips" audio intermittently based on in-game signal strength. As the signal weakens, more audio is cut, making transmissions increasingly difficult to understand.

</details>

### Digital

<details>

<summary>Digital</summary>

The digital voice effect applies bitrate compression to the audio, causing it to sound increasingly robotic and harder to understand as signal quality decreases.

</details>

### Analog

<details>

<summary>Analog</summary>

The analog voice effect adds static and scratchiness to the audio, making it sound progressively fuzzier and less clear as signal quality deteriorates.

</details>

### Equalizer (Pre & Post-Effects)

{% hint style="info" %}
This **EQ** effect remains consistent and does not fluctuate based on [in-game signal strength](../in-game-radio/in-game-repeaters.md)
{% endhint %}

<details>

<summary>Equalizer</summary>

The equalizer effect allows you to boost or reduce frequencies throughout the audio range.\
\&#xNAN;_**Tip:** For a "tin can" effect, increase the mid frequencies while reducing the low and high ranges._

**Pre-Effect EQ**

The pre-effect EQ is a profile applied directly to the mic input before any effects (vocoder, digital, analogue, etc.) are applied. This can help improve clarity with the vocoder, grant a tin-can style effect, and more.

**Post-Effect EQ**

The post-effect EQ is a profile applied to the audio after all effects have been processed. This can help improve clarity and improve the finalized effects.

</details>

## Applying the Voice Effect

### On the User-Side

Voice effects can be customized by the individual listener, based on their preferences. Users can open their **Settings** menu and select the **Voice FX** tab to customize.

Toggle **Community FX** to **Local FX** mode to [bypass the community set channel effects](custom-voice-effects.md#to-radio-channels).

{% hint style="warning" %}
Enabling the vocoder locally forces your client to encode and decode all incoming transmissions, which can impact performance at higher user counts.

For better performance, [enable the vocoder at the channel level](custom-voice-effects.md#to-radio-channels) so users pre-process transmissions on their end.

When a [channel has vocoder FX enabled](custom-voice-effects.md#to-radio-channels), it cannot be bypassed client-side—all transmissions are already vocoded before playback.
{% endhint %}

<figure><img src="../../../.gitbook/assets/image (310).png" alt="" width="375"><figcaption></figcaption></figure>

### To Radio Channels

In the [channel editor, you can select the desired voice effect](configure-channels.md#setting-the-voice-effect). This voice effect will apply to anyone talking in that channel.

[User-side voice FX can bypass channel effects](custom-voice-effects.md#on-the-user-side), but enabling Vocoder FX forces all transmissions through the vocoder, ensuring it still applies to all custom FX.

<figure><img src="../../../.gitbook/assets/image (227).png" alt="" width="282"><figcaption><p>Sonoran Radio: Channel Voice Effect</p></figcaption></figure>

### To Emergency Calls

To apply a custom voice effect for [emergency phone calls](emergency-calls.md), toggle the phone icon in the voice effect tab.

**Note:** If no custom voice effect is selected for emergency calls, a default "tin can" EQ effect will be applied.

<figure><img src="../../../.gitbook/assets/image (226).png" alt="" width="375"><figcaption><p>Sonoran Radio: Emergency Call Voice Effect Selection</p></figcaption></figure>

## Import and Export Effects

You can import and export voice effect profiles to share with other communities. See some of our [public effect examples](custom-voice-effects.md#voice-profile-examples) to import.

To Export:

* Click the Import/Export Button.
* Click `Download` to save the current voice effect to a JSON file.

To Import:

* Click the Import/Export Button.
* Click the file icon to import a JSON file directly.
* Or, paste the JSON contents into the `Import` box and press `Import`.

<figure><img src="../../../.gitbook/assets/image (281).png" alt="" width="375"><figcaption></figcaption></figure>

## Voice Profile Examples

We've pre-configured voice effects for popular use. Copy the JSON code below to import into your voice effects panel.

### Vocoder Example

These voice effects combines the vocoder with pre and post-effect EQ customizations for the best possible clarity.

#### #1 Vocoder

[Click to listen to this example.](https://sonoransoftware.com/assets/files/sonoranradio/voice_effects/vocoder_example_1.mp3)

```json
{"id":11,"label":"Vocoder Example #1","vocoder":{"mode":"3200","enabled":true},"equalizer":[{"q":1,"freq":31,"gain":-20,"type":"lowshelf","freqlabel":"<31","bandwidthLabel":"2.5"},{"q":1,"freq":62,"gain":-20,"type":"peaking","freqlabel":"63","bandwidthLabel":"1.8"},{"q":1,"freq":125,"gain":-4,"type":"peaking","freqlabel":"125","bandwidthLabel":"1.2"},{"q":1,"freq":250,"gain":0,"type":"peaking","freqlabel":"250","bandwidthLabel":"0.6"},{"q":1,"freq":500,"gain":0,"type":"peaking","freqlabel":"500","bandwidthLabel":"0.0"},{"q":1,"freq":1000,"gain":-3.5,"type":"peaking","freqlabel":"1k","bandwidthLabel":"0.0"},{"q":1,"freq":2000,"gain":0.5,"type":"peaking","freqlabel":"2k","bandwidthLabel":"1.2"},{"q":1,"freq":4000,"gain":1.5,"type":"peaking","freqlabel":"4k","bandwidthLabel":"1.8"},{"q":1,"freq":8000,"gain":4.5,"type":"peaking","freqlabel":"8k","bandwidthLabel":"2.5"},{"q":1,"freq":16000,"gain":13.5,"type":"highshelf","freqlabel":">16k","bandwidthLabel":"2.5"}],"equalizerGain":{"low":0,"mid":0,"high":0},"postEqualizer":[{"q":1,"freq":31,"gain":-20,"type":"lowshelf","freqlabel":"<31","bandwidthLabel":"2.5"},{"q":1,"freq":62,"gain":-16.5,"type":"peaking","freqlabel":"63","bandwidthLabel":"1.8"},{"q":1,"freq":125,"gain":-12.5,"type":"peaking","freqlabel":"125","bandwidthLabel":"1.2"},{"q":1,"freq":250,"gain":-2,"type":"peaking","freqlabel":"250","bandwidthLabel":"0.6"},{"q":1,"freq":500,"gain":2.5,"type":"peaking","freqlabel":"500","bandwidthLabel":"0.0"},{"q":1,"freq":1000,"gain":3,"type":"peaking","freqlabel":"1k","bandwidthLabel":"0.0"},{"q":1,"freq":2000,"gain":5.5,"type":"peaking","freqlabel":"2k","bandwidthLabel":"1.2"},{"q":1,"freq":4000,"gain":1.5,"type":"peaking","freqlabel":"4k","bandwidthLabel":"1.8"},{"q":1,"freq":8000,"gain":-4,"type":"peaking","freqlabel":"8k","bandwidthLabel":"2.5"},{"q":1,"freq":16000,"gain":-1,"type":"highshelf","freqlabel":">16k","bandwidthLabel":"2.5"}],"clipDistortion":{"max":0.09,"min":0,"enabled":true,"aggressiveness":0.05},"analogDistortion":{"max":2,"min":0,"enabled":false,"aggressiveness":0.05,"constantStatic":0},"digitalDistortion":{"max":0,"min":0,"enabled":false,"aggressiveness":0,"constantStatic":0}}
```

#### #2 - Vocoder with Additional Bass

[Click to listen to this example.](https://sonoransoftware.com/assets/files/sonoranradio/voice_effects/vocoder_example_2.mp3)

```json
{"id":9,"label":"Vocoder Example #2 (More Bass)","vocoder":{"mode":"3200","enabled":true},"equalizer":[{"q":1,"freq":31,"gain":-20,"type":"lowshelf","freqlabel":"<31","bandwidthLabel":"2.5"},{"q":1,"freq":62,"gain":-11.5,"type":"peaking","freqlabel":"63","bandwidthLabel":"1.8"},{"q":1,"freq":125,"gain":-4,"type":"peaking","freqlabel":"125","bandwidthLabel":"1.2"},{"q":1,"freq":250,"gain":-10,"type":"peaking","freqlabel":"250","bandwidthLabel":"0.6"},{"q":1,"freq":500,"gain":-3,"type":"peaking","freqlabel":"500","bandwidthLabel":"0.0"},{"q":1,"freq":1000,"gain":4.5,"type":"peaking","freqlabel":"1k","bandwidthLabel":"0.0"},{"q":1,"freq":2000,"gain":-3.5,"type":"peaking","freqlabel":"2k","bandwidthLabel":"1.2"},{"q":1,"freq":4000,"gain":-4.5,"type":"peaking","freqlabel":"4k","bandwidthLabel":"1.8"},{"q":1,"freq":8000,"gain":-14,"type":"peaking","freqlabel":"8k","bandwidthLabel":"2.5"},{"q":1,"freq":16000,"gain":-18,"type":"highshelf","freqlabel":">16k","bandwidthLabel":"2.5"}],"equalizerGain":{"low":0,"mid":0,"high":0},"postEqualizer":[{"q":1,"freq":31,"gain":3,"type":"lowshelf","freqlabel":"<31","bandwidthLabel":"2.5"},{"q":1,"freq":62,"gain":3,"type":"peaking","freqlabel":"63","bandwidthLabel":"1.8"},{"q":1,"freq":125,"gain":3,"type":"peaking","freqlabel":"125","bandwidthLabel":"1.2"},{"q":1,"freq":250,"gain":3,"type":"peaking","freqlabel":"250","bandwidthLabel":"0.6"},{"q":1,"freq":500,"gain":3,"type":"peaking","freqlabel":"500","bandwidthLabel":"0.0"},{"q":1,"freq":1000,"gain":3,"type":"peaking","freqlabel":"1k","bandwidthLabel":"0.0"},{"q":1,"freq":2000,"gain":3,"type":"peaking","freqlabel":"2k","bandwidthLabel":"1.2"},{"q":1,"freq":4000,"gain":3,"type":"peaking","freqlabel":"4k","bandwidthLabel":"1.8"},{"q":1,"freq":8000,"gain":3,"type":"peaking","freqlabel":"8k","bandwidthLabel":"2.5"},{"q":1,"freq":16000,"gain":3,"type":"highshelf","freqlabel":">16k","bandwidthLabel":"2.5"}],"clipDistortion":{"max":0,"min":0,"enabled":false,"aggressiveness":0},"analogDistortion":{"max":0,"min":0,"enabled":false,"aggressiveness":0,"constantStatic":0},"digitalDistortion":{"max":0,"min":0,"enabled":false,"aggressiveness":0,"constantStatic":0}}
```

#### Emergency Call Example

This voice effect utilizes EQ customizations for the best possible phone call effect.

[Click to listen to this example.](https://sonoransoftware.com/assets/files/sonoranradio/voice_effects/emergency_example_1.mp3)

```json
{"id":10,"label":"Emergency Call Example","vocoder":{"mode":"3200","enabled":false},"equalizer":[{"q":1,"freq":31,"gain":-20,"type":"lowshelf","freqlabel":"<31","bandwidthLabel":"2.5"},{"q":1,"freq":62,"gain":-20,"type":"peaking","freqlabel":"63","bandwidthLabel":"1.8"},{"q":1,"freq":125,"gain":-20,"type":"peaking","freqlabel":"125","bandwidthLabel":"1.2"},{"q":1,"freq":250,"gain":-17,"type":"peaking","freqlabel":"250","bandwidthLabel":"0.6"},{"q":1,"freq":500,"gain":-5,"type":"peaking","freqlabel":"500","bandwidthLabel":"0.0"},{"q":1,"freq":1000,"gain":8.5,"type":"peaking","freqlabel":"1k","bandwidthLabel":"0.0"},{"q":1,"freq":2000,"gain":4,"type":"peaking","freqlabel":"2k","bandwidthLabel":"1.2"},{"q":1,"freq":4000,"gain":-8,"type":"peaking","freqlabel":"4k","bandwidthLabel":"1.8"},{"q":1,"freq":8000,"gain":-13.5,"type":"peaking","freqlabel":"8k","bandwidthLabel":"2.5"},{"q":1,"freq":16000,"gain":-20,"type":"highshelf","freqlabel":">16k","bandwidthLabel":"2.5"}],"equalizerGain":{"low":0,"mid":0,"high":0},"postEqualizer":[{"q":1,"freq":31,"gain":-20,"type":"lowshelf","freqlabel":"<31","bandwidthLabel":"2.5"},{"q":1,"freq":62,"gain":-20,"type":"peaking","freqlabel":"63","bandwidthLabel":"1.8"},{"q":1,"freq":125,"gain":-16.5,"type":"peaking","freqlabel":"125","bandwidthLabel":"1.2"},{"q":1,"freq":250,"gain":-6.5,"type":"peaking","freqlabel":"250","bandwidthLabel":"0.6"},{"q":1,"freq":500,"gain":0,"type":"peaking","freqlabel":"500","bandwidthLabel":"0.0"},{"q":1,"freq":1000,"gain":6.5,"type":"peaking","freqlabel":"1k","bandwidthLabel":"0.0"},{"q":1,"freq":2000,"gain":-4.5,"type":"peaking","freqlabel":"2k","bandwidthLabel":"1.2"},{"q":1,"freq":4000,"gain":-10.5,"type":"peaking","freqlabel":"4k","bandwidthLabel":"1.8"},{"q":1,"freq":8000,"gain":-16,"type":"peaking","freqlabel":"8k","bandwidthLabel":"2.5"},{"q":1,"freq":16000,"gain":-20,"type":"highshelf","freqlabel":">16k","bandwidthLabel":"2.5"}],"clipDistortion":{"max":0.07,"min":0.02,"enabled":true,"aggressiveness":0.02},"analogDistortion":{"max":1,"min":1,"enabled":true,"aggressiveness":0,"constantStatic":0},"digitalDistortion":{"max":0,"min":0,"enabled":false,"aggressiveness":0,"constantStatic":0}}
```
