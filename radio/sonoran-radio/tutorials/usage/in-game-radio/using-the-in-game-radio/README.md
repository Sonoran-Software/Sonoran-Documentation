---
description: Learn more about the in-game radio resource.
---

# Using the In-Game Radio

{% embed url="https://youtu.be/x51SsH0LHUM" %}

## Initial Setup

### Displaying the In-Game Radio

By default, the radio display remains visible on-screen at all times. Users can toggle focus on the radio, enabling interaction when needed and un-focusing when done.

1. Use the [customizable keybind](./#setting-your-push-to-talk-ptt-keybind) (Default is `~` right above tab)
2. Use the `/radio` command

Access to the radio can be restricted with [ACE permissions](../configuring-ace-permissions.md).

### Hiding the In-Game Radio

#### A. Via Button

Use the purple button or icon on the radio frames:

<div><figure><img src="../../../../.gitbook/assets/image (218).png" alt="" width="375"><figcaption><p>Vehicle Radio: Hide Button</p></figcaption></figure> <figure><img src="../../../../.gitbook/assets/Screenshot 2024-12-05 124319.png" alt="" width="208"><figcaption><p>Handheld Radio: Hide Button</p></figcaption></figure></div>

#### B. Via Command

Use the `/radio hide` command in-game to hide the radio.

#### C. ESC Options

You can also [customize the display behavior when pressing `ESC`](./#escape-mode).

### Logging In

<details>

<summary>Login with Account</summary>

When you first use the in-game resource, you'll need to log in.\
A 4-digit code will appear for you to sign in from your browser.

<figure><img src="../../../../.gitbook/assets/image (331).png" alt="" width="375"><figcaption></figcaption></figure>

This will open [sradio.link](https://sradio.link) in a web browser, log in if needed, and your radio will be linked automatically with a 4-digit code.

<figure><img src="../../../../.gitbook/assets/image (129).png" alt="" width="375"><figcaption><p>Sonoran Radio - Activate Link</p></figcaption></figure>

</details>

<details>

<summary>Login as Guest</summary>

When you first use the in-game resource, you'll need to log in.\
If your community has ACE permissions configured, no account creation or link is necessary.

<figure><img src="../../../../.gitbook/assets/image (332).png" alt=""><figcaption></figcaption></figure>

Select **Login as guest** to bypass the account link and start using your radio. This guest option will only display if `acePermsForGuests` is set to `true`.

#### Permission Configuration

Learn how to [configure ACE permissions for the radio](../configuring-ace-permissions.md#ace-permission-sync).

#### Display Name

Custom display names are saved locally in your cache and automatically restored on future guest logins.

Guest usernames are set in the following priority order (whichever is found first):

* Last used guest display name
* [Custom framework function](../../../../developer-documentation/developer-documentation/resource-events.md#guest-display-names)
* First and last name from QBCore, QBox, or ESX.
* In-game display name

[Users with permission can change this name](../../dispatch-panel/using-the-dispatch-panel.md#display-names).

</details>

### Logging Out

You can logout/un-link your in-game radio via the settings menu (gear icon).

<div><figure><img src="../../../../.gitbook/assets/image (122).png" alt=""><figcaption><p>In-Game Radio - Settings</p></figcaption></figure> <figure><img src="../../../../.gitbook/assets/image (124).png" alt=""><figcaption><p>In-Game Radio - Unlink</p></figcaption></figure></div>

***

## Using the In-Game Radio

### Setting your Push-To-Talk (PTT) Keybind

[You can customize your PTT button in your GTA Settings.](fivem-keybinds-and-commands.md)

### Connecting and Switching Channels

<details>

<summary>Channel Selection via Knob</summary>

The radio will connect when you turn it on with the power button ([unless you need to login first](./#logging-in)).

**Previous/Next Channel (In Group)**

* Left click the top knob to rotate to the next channel inside the channel group.

**Previous/Next Group**

* Right-click the top knob to change its mode from channel changing to group changing.
* Left click the top knob to rotate to the next channel group.

![Sonoran Radio: Power Button](../../../../.gitbook/assets/FiveM_b3095_GTAProcess_y5BTRN8idW.png) ![Sonoran Radio: Channel List](../../../../.gitbook/assets/FiveM_b3095_GTAProcess_8EDvlAfgKq.png)

</details>

<details>

<summary>Channel Selection via Menu</summary>

Select the channel menu icon to open the channel selection options. Click on the channel you wish to transmit on.

`CTRL` + `Click` allows you to select multiple channels to transmit on at once.

<div><figure><img src="../../../../.gitbook/assets/image (57).png" alt="" width="279"><figcaption><p>Modern UI - Channel Menu Icon</p></figcaption></figure> <figure><img src="../../../../.gitbook/assets/image (58).png" alt="" width="279"><figcaption><p>Text UI - Channel Menu Icon</p></figcaption></figure></div>

<div><figure><img src="../../../../.gitbook/assets/image (56).png" alt="" width="277"><figcaption><p>Modern UI - Channel Selection</p></figcaption></figure> <figure><img src="../../../../.gitbook/assets/image (55).png" alt="" width="280"><figcaption><p>Text UI - Multi-Channel Selection</p></figcaption></figure></div>

</details>

<details>

<summary>Channel Selection via Hotkeys, Commands, and Stream Deck</summary>

Channels can also be changed via:

* [Channel Change Keybind](fivem-keybinds-and-commands.md#prev-next-channel-in-group)
* [In-Game Commands (Optional Stream Deck Integration)](fivem-keybinds-and-commands.md#fivem-client-commands)

</details>

### Channel Scanning/Listening

<details>

<summary>Scanning Radio Channels</summary>

Scanning a radio channel allows users to hear all transmissions, even if they are not actively transmitting on that channel. However, transmissions on the primary channel (the one you are actively talking on) will take priority, muting transmissions from scanned channels whenever someone speaks on the primary channel.

**Selecting Scanned Channels (**[**Modern or Text Display**](../../desktop-overlay.md#create-a-custom-overlay)**)**

1. Select the Channel Scan Icon
2. Select the channel group to view the contained channels
3. Click on a channel to toggle on/off scanning

[Learn how to toggle a channel scan via command or Stream Deck!](fivem-keybinds-and-commands.md#toggle-channel-scan)

![](<../../../../.gitbook/assets/image (75).png>) ![](<../../../../.gitbook/assets/image (76).png>)

Users can also [create a scan list](./#scan-lists) to swap between multiple scanned channels at once.

</details>

### Custom Scan Lists

<details>

<summary>Scan Lists</summary>

Users can scan one or more channels to listen without transmitting. For monitoring multiple channels, "Scan Lists" let users group channels and easily switch between them.

**Creating a Scan List (**[**Modern or Text Display**](../../desktop-overlay.md#create-a-custom-overlay)**)**

1. Toggle scanning on one or more channels.
2. Select the `+` icon next to `Scan Lists` to create a new scan list with the current selection.
3. Scan lists can be reordered via drag-and-drop.
4. Select the adjust button to rename or remove the scan list.
5. Click on the scan list to scan all of the channels inside of it.
6. Scan lists can be reordered via drag-and-drop

[Learn how to toggle a scan list via command or Stream Deck](fivem-keybinds-and-commands.md#toggle-scan-list)!

![](<../../../../.gitbook/assets/image (73).png>) ![](<../../../../.gitbook/assets/image (74).png>)

</details>

### Adjust Volume

{% hint style="info" %}
Your radio volume also controls how loudly [nearby users hear the radio chatter](../hear-nearby-radio-chatter.md).
{% endhint %}

<details>

<summary>Radio Volume</summary>

**System-Wide Volume**

In the settings menu (gear icon) you can adjust the radio's total volume output.

![In-Game Radio - Settings](<../../../../.gitbook/assets/image (122).png>) ![](<../../../../.gitbook/assets/image (244).png>)

**Per-User Volume**

You can also right-click on any user to adjust their volume specifically.

<img src="../../../../.gitbook/assets/image (123).png" alt="In-Game Radio - Per-User Volume" data-size="original">

**Per-Channel Volume**

Select the volume icon to change the current channel's transmission volume.

<div><figure><img src="../../../../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure> <figure><img src="../../../../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure></div>

**Volume Hotkey**

[You can also use the in-game keybind to quickly adjust volume.](fivem-keybinds-and-commands.md#volume-up-down)

The adjustment amount is customizable in the settings menu.

![](<../../../../.gitbook/assets/image (245).png>)

</details>

### Adjust Volume With Sirens

<details>

<summary>Automatic Volume Increase w/Sirens</summary>

When in-game, turning on your sirens will increase your overall radio volume by the configured amount. Turning your sirens back off will lower the volume back down.

This feature is automatically integrated with [Luxart Vehicle Control](https://github.com/TrevorBarns/luxart-vehicle-control).\
If the resource is not named `LVC`, the [`config.luxartResourceName` value must be updated](../../../getting-started/installing-the-in-game-resource.md#updates).

For communities not using LVC, the functionality will fall back to a FiveM native that will trigger the functionality if either lights or sirens are activated.

![](<../../../../.gitbook/assets/image (250).png>)

</details>

### Move and Resize the Radio

{% hint style="info" %}
**If you move your radio too far off of your screen:**

Use `/radio reset` to reset the size and position.
{% endhint %}

<details>

<summary>Radio Move and Resize</summary>

On the radio screen, open the `Settings` modal by pressing the gear icon.

Select `Move/Resize`

* Click and drag the radio to change it's position on your screen.
* Hold `ctrl` and drag to resize the radio.
* Press `esc` to save the new size and position.

![In-Game Radio - Settings](<../../../../.gitbook/assets/image (122).png>) ![In-Game Radio - Move/Resize](<../../../../.gitbook/assets/image (125).png>)

<img src="../../../../.gitbook/assets/image (153).png" alt="In-Game Radio - Adjustment" data-size="original">

</details>

### Escape Mode

<details>

<summary>ESC Radio Display Behavior</summary>

The Escape Mode selector changes the in-game radio display behavior after pressing `ESC`.\
The server default for this setting can be configured in the [config's `defaultEscapeMode` property](../../../getting-started/installing-the-in-game-resource.md#updates).

`Keep Radio Visible`

* The radio stays visible on `ESC`

`Hide Radio`

* The radio closes on `ESC`

`XMITT (PTT)`

* The radio closes on `ESC`, but is visible while transmitting

![](<../../../../.gitbook/assets/image (250).png>)

</details>

### Panic

<details>

<summary>In-Game Panic</summary>

Pressing the orange panic button on the in-game radio toggles your panic status.

This can also toggle your panic status in [Sonoran CAD](../../../integrations/sonoran-cad-integration.md#cad-panic).

[Dispatchers will also be able to see and clear your panic status.](../../dispatch-panel/using-the-dispatch-panel.md#unit-panic)

Sonoran Radio has a [configurable option](../../../getting-started/installing-the-in-game-resource.md#updates) to automatically press a users PTT button for a configurable amount of time when the user presses their radio panic button:

```lua
Config.autoPttOnPanic = {
	enabled = true, -- Enable automatic PTT when panic button is pressed
	duration = 15 -- Duration in seconds to hold PTT when panic button is pressed
}
```

![](<../../../../.gitbook/assets/image (248).png>)

</details>

### Display Names

<details>

<summary>Update User Display Name</summary>

[View several different methods to update a user's display name in the radio.](../../dispatch-panel/using-the-dispatch-panel.md#display-names)

</details>

### Radio Types

Sonoran Radio offers three radio platforms: handheld, top-down HUD, and vehicle.\
All three radio platforms can have [customizable frame styles](./#change-radio-frames).

<figure><img src="../../../../.gitbook/assets/image (209).png" alt=""><figcaption></figcaption></figure>

When opening the radio via `/radio` the handheld radio will display on-screen.\
The vehicle UI will display when opening the radio inside of a vehicle.\
The top-down HUD style can be viewed with the `/radiohud` command.

### Change Radio Frames

The settings menu also allows you to customize your radio frame:

<figure><img src="../../../../.gitbook/assets/image (167).png" alt="" width="165"><figcaption><p>Sonoran Radio - Custom Frames</p></figcaption></figure>

Learn more about customizable radio frames:

{% content-ref url="../customizing-radio-frames.md" %}
[customizing-radio-frames.md](../customizing-radio-frames.md)
{% endcontent-ref %}

## Civilian Usage

### Placing an Emergency (911) Call

Civilians can place an emergency call to speak directly with dispatchers:

{% content-ref url="../../dispatch-panel/emergency-calls.md" %}
[emergency-calls.md](../../dispatch-panel/emergency-calls.md)
{% endcontent-ref %}

## Custom Animations

Unlock multiple more custom radio animations, FREE with Sonoran Radio pro!

<figure><img src="../../../../.gitbook/assets/SONORAN X BIGPAPA2.png" alt=""><figcaption><p>Sonoran Radio x Big Daddy Scripts</p></figcaption></figure>

{% content-ref url="../../../integrations/big-daddy-radio-animations.md" %}
[big-daddy-radio-animations.md](../../../integrations/big-daddy-radio-animations.md)
{% endcontent-ref %}
