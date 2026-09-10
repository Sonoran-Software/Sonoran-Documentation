---
description: >-
  Pulled over in a traffic stop? You'll hear the real radio chatter when an
  officer has an active radio nearby!
---

# Hear Nearby Radio Chatter

<figure><img src="../../../.gitbook/assets/image (172).png" alt=""><figcaption><p>Sonoran Radio - Hear Nearby Chatter</p></figcaption></figure>

Pulled over in a traffic stop? You'll hear the real radio chatter when an officer has an active radio nearby!

{% hint style="warning" %}
Due to bandwidth usage, this feature is automatically enabled with the Pro version only!

[Learn more about our paid subscription plans.](../../../pricing/pricing-faq/standalone-pricing.md)
{% endhint %}

## Video Example

{% embed url="https://youtu.be/R9-xBm0sGBA" %}

## Audio Examples

### Nearby Radio

If someone nearby has a radio, you'll hear the radio traffic they’re listening to coming from their device. The closer they are the louder the radio traffic will be. However, if they're [using an earpiece](hear-nearby-radio-chatter.md#in-game-earpiece), the audio won’t be audible to others.

### Radio in Vehicle

When someone with a [nearby radio](hear-nearby-radio-chatter.md#nearby-radio) enters a vehicle, the radio audio will become muffled. However, if a door is open, or a window is down or broken, the audio will become clearer and louder again.

### Nearby Emergency Phone Call

When someone is [making an emergency call to a dispatcher](../dispatch-panel/emergency-calls.md), nearby users will faintly hear the dispatcher's voice coming from the caller's phone.

### Nearby Radio Scanner

When someone is carrying (or has placed down) [a radio scanner](radio-scanners.md), nearby users will hear the channel that the scanner is set to.

## Usage

### Default Chatter Volume

The volume of nearby radio chatter matches the volume setting of the emitting radio. Users with an active radio can [adjust its volume using a hotkey or the settings menu](using-the-in-game-radio/#adjust-volume).

### Adjust Volume

Players can adjust the nearby radio volume in-game using the `/radiovolume` command.

Ex: `/radiovolume 75` sets the nearby radio to 75% volume.

<details>

<summary>Technical Information</summary>

When a player is within 15 game units of an active radio, they will hear the live chatter from the nearest radio. If multiple radios within range are tuned to different channels, the player will hear all those channels blended, but the sound will primarily emit from the closest radio source.

_This feature is experimental and subject to both change and improvements._

</details>

## In-Game Earpiece

Some communities may offer custom EUP (clothing and accessories) that players can use to personalize their characters. For radio users, an option to wear an earpiece (headphones) could be useful, allowing them to listen to radio chatter privately without others nearby overhearing.

Whenever a user inserts or removes a configured in-game earpiece, a notification will be displayed confirming that others around you can or can not hear your radio.

Communities can easily select which clothing items will be treated as a radio earpiece.

<div><figure><img src="../../../.gitbook/assets/image (179).png" alt="" width="147"><figcaption><p>Sonoran Radio: In-Game Radio Earpiece</p></figcaption></figure> <figure><img src="../../../.gitbook/assets/image (87).png" alt=""><figcaption><p>Sonoran Radio: Configure Earpieces</p></figcaption></figure></div>

### 1. Open the Earpiece Menu

Open the earpiece configuration menu via `/radiomenu` > `Configure Earpiece Chatter`

<figure><img src="../../../.gitbook/assets/image (86).png" alt="" width="223"><figcaption><p>Sonoran Radio Menu</p></figcaption></figure>

### 2. Toggle Earpiece Items

To add a chatter exclusion click "Add Earpiece Item" and select the component you'd like to add. Additionally, select any specific textures that will be considered an earpiece.

Once selected, anyone wearing this earpiece will not emit radio chatter to nearby users.

<figure><img src="../../../.gitbook/assets/image (87).png" alt="" width="222"><figcaption><p>Add or Remove Earpiece</p></figcaption></figure>

<div><figure><img src="../../../.gitbook/assets/image (90).png" alt="" width="375"><figcaption><p>Earpiece Item Selection</p></figcaption></figure> <figure><img src="../../../.gitbook/assets/image (91).png" alt="" width="375"><figcaption><p>Earpiece Texture Selection</p></figcaption></figure></div>

### 3. Removing Earpieces

To remove an earpiece option, navigate to the `Remove Earpiece Item` Menu option > Select the specific earpiece item > and `Confirm Removal`

<figure><img src="../../../.gitbook/assets/image (92).png" alt=""><figcaption></figcaption></figure>

### Manual Earpiece IDs (Advanced)

<details>

<summary>Manually Configure Earpiece IDs</summary>

The `earpieces.json` file defines earpiece items (custom EUP prop IDs) that block radio chatter from being heard nearby.

Component IDs

Look [here](https://docs.fivem.net/natives/?_0x829F2E2) for the component IDs for props (hats, glasses, earpieces, etc.). To find component IDs for drawables (shirts, pants, backpacks, etc.), look [here ](https://docs.fivem.net/natives/?_0x262B14F48D29DE80)and add 14 to the number.

For example, to exclude a clothing item under ACCESSORIES, it might look like this:

```lua
{
  componentId = 22, -- accessories (8) + offset (14) is 22
  drawableId = 78,  -- Number in vMenu
  texture = 0,      -- Number in vMenu (or 0 for all textures)
}
```

</details>

## Radio Scanners

Learn more about in-game radio scanners:

{% content-ref url="radio-scanners.md" %}
[radio-scanners.md](radio-scanners.md)
{% endcontent-ref %}
