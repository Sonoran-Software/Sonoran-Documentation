---
description: Learn more about using the Sonoran Radio dispatch panel.
---

# Using the Dispatch Panel

{% embed url="https://youtu.be/Mm-sdHeZoHk" %}

## Dispatch Portal

When you first open a Sonoran Radio community with standalone enabled, you will see this page:

<figure><img src="../../../.gitbook/assets/chrome_zSfO1BMnt3.png" alt="" width="375"><figcaption><p>Sonoran Radio - Connect to Radio</p></figcaption></figure>

To join the radio, press **Connect.** After connecting, you will be greeted with a row of channels, and a list of connected users underneath them

<figure><img src="../../../.gitbook/assets/chrome_QijQa7OJc1.png" alt="" width="375"><figcaption><p>Sonoran Radio - Radio Hub</p></figcaption></figure>

### Hotkeys (Keybinds)

{% hint style="warning" %}
Push-to-talk key binds are only global in the [desktop application](../../../download-the-app.md).

On web, the browser window must be in focus.
{% endhint %}

<details>

<summary>Dispatch Hotkeys</summary>

Hotkeys allow for faster actions at the press of a button. These can be configured by clicking the gear icon to open the settings menu.

![](<../../../.gitbook/assets/image (241).png>)

![](<../../../.gitbook/assets/image (242).png>)

* [Push to Talk](using-the-dispatch-panel.md#transmitting-push-to-talk)
* [AI Mode Toggle](../../integrations/dispatch-ai.md#via-hotkey)
* [Temporary Per-Channel Push to Talk](using-the-dispatch-panel.md#transmitting-push-to-talk)
* [Tone Board](custom-tone-board.md)
* [Change Group Tab](using-the-dispatch-panel.md#switching-transmit-and-scanned-channels-1)
* [Change Channel](using-the-dispatch-panel.md#switching-transmit-and-scanned-channels)
* [Volume Change](using-the-dispatch-panel.md#volume-sliders)

Right click on a hotkey button for the option to clear it.

![](<../../../.gitbook/assets/image (268).png>)

</details>

### Transmitting (Push to Talk)

<details>

<summary>Dispatch Push To Talk</summary>

To transmit over Sonoran Radio, you can press the microphone button on the top-left.

Alternatively, use the [PTT hotkey](using-the-dispatch-panel.md#hotkeys-keybinds).

<figure><img src="../../../.gitbook/assets/image (60).png" alt=""><figcaption><p>Dispatch: PTT Button</p></figcaption></figure>

To temporarily transmit in a single channel, and move back to your original channel afterwards, select the keyboard icon to set a per-channel XMIT hotkey.

<figure><img src="../../../.gitbook/assets/image (59).png" alt=""><figcaption><p>Dispatch: Per-Channel XMIT Hotkey</p></figcaption></figure>

</details>

### Switching Transmit and Scanned Channels

<details>

<summary>Switching Transmit and Scanned Channels</summary>

To switch to another channel, click the microphone button on the channel card.

`CTRL` + `Click` on the microphone option to transmit on multiple channels at once.

[You can also change channels via hotkey.](using-the-dispatch-panel.md#hotkeys-keybinds)

<img src="../../../.gitbook/assets/chrome_RoHvxqifER.png" alt="Sonoran Radio - Switch Channel" data-size="original">

#### Scanning (Listen) To Multiple Channels

Select the headphone icon on each channel to listen in.\
You can listen to multiple channels at once.

<img src="../../../.gitbook/assets/chrome_9pL06Zodh1.png" alt="Sonoran Radio - Scan Channel" data-size="original">

</details>

### Drag and Drop Users

<details>

<summary>User Drag-And-Drop</summary>

Change a user's channel ([requires permission](../../getting-started/invite-and-manage-users.md#manage-user-permissions)) by dragging and dropping their name into the channel header.

<img src="../../../.gitbook/assets/image (150).png" alt="" data-size="original">

</details>

### User Actions

<details>

<summary>User Actions (Right Click)</summary>

Right click in the user to:

* Kick the user from the channel ([Requires Permission](../../getting-started/invite-and-manage-users.md#manage-user-permissions))
* Clear the [user's panic status](using-the-dispatch-panel.md#unit-panic)
* Move the user to a different channel ([Requires Permission](../../getting-started/invite-and-manage-users.md#manage-user-permissions))
* Adjust the user's volume ([Requires Permission](../../getting-started/invite-and-manage-users.md#manage-user-permissions))
* Change the user's display name ([Requires Permission](../../getting-started/invite-and-manage-users.md#manage-user-permissions))
* Stun the user from transmissing temporarily ([Requires Permission](../../getting-started/invite-and-manage-users.md#manage-user-permissions))
* Ping the user to get their attention

![](<../../../.gitbook/assets/image (246).png>)

</details>

### Unit Panic

<details>

<summary>Unit Panic Status</summary>

When a [unit toggles their panic status in-game](../in-game-radio/using-the-in-game-radio/#panic), the dispatch portal will reflect this with a red banner and a red highlight on the panicked unit.

Dispatchers can [right-click the user to clear the panic](using-the-dispatch-panel.md#user-actions-right-click) for them.

The [customizable panic sound effect](custom-sfx.md) will also alert dispatchers to an active unit panic.

![](<../../../.gitbook/assets/image (249).png>)

</details>

### Display Names

<details>

<summary>Via Dispatch Portal</summary>

To change your display name, users will need the `Change Display Name` permission. To manage others, users will need the `Manage Display Names` permission.

**Via Radio Interface**

Right click a user in the radio interface and select `Display Name`

<img src="../../../.gitbook/assets/image (189).png" alt="Sonoran Radio - Change Display Name" data-size="original">

</details>

<details>

<summary>Via Members Tab</summary>

**Via Members Tab**

In the admin panel's `Members` tab, select the drop-down and `Set Display Name` button to edit a user's display name.

<img src="../../../.gitbook/assets/image (190).png" alt="" data-size="original">

</details>

<details>

<summary>Via Sonoran CMS</summary>

**Via Sonoran CMS**

[Sonoran CMS can also automatically set and manage your Radio display names and sync them with Discord.](../../integrations/sonoran-cms.md)

</details>

<details>

<summary>Via Sonoran CAD Sync</summary>

[Learn about automatically setting radio display names to match your unit information in Sonoran CAD.](../../integrations/sonoran-cad-integration.md)

</details>

<details>

<summary>Via Command</summary>

Use the in-game command `/radio displayname John Doe` to update your radio display name.

[In-game commands can also be restircted with ACE permission](../in-game-radio/configuring-ace-permissions.md)s.

</details>

<details>

<summary>Via Developer Export or Endpoint</summary>

Programmatically [update a user's display name in FiveM](../../../developer-documentation/developer-documentation/resource-events.md#set-display-name), [update a display name via API](../../../developer-documentation/developer-documentation/api-endpoints/users/set-user-display-name.md), or use a [custom framework function for guest users](../../../developer-documentation/developer-documentation/resource-events.md#guest-display-names).

</details>

### Volume Changes

<details>

<summary>Volume Sliders</summary>

Adjust the overall voice and sound effect volume by [opening the settings menu](using-the-dispatch-panel.md#dispatch-hotkeys) and selecting the `Audio` tab.

In addition to the manual sliders, you can customize how much the [volume hotkeys](using-the-dispatch-panel.md#dispatch-hotkeys) adjust the volume.

You can also [adjust volume for a specific user](using-the-dispatch-panel.md#user-actions-right-click).

![](<../../../.gitbook/assets/image (243).png>)

</details>

<details>

<summary>Per-User Volume</summary>

Right-click on a user to individually increase or decrease their transmission volume.

<figure><img src="../../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

</details>

<details>

<summary>Per-Channel Volume</summary>

Right-click on a channel to individually increase or decrease transmission volume.

<figure><img src="../../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

</details>

### Viewing Channel IDs

<details>

<summary>Channel IDs</summary>

Some integrations like ACE perm sync or scanner permissions may require you to enter the internal ID number of a specific channel.

These IDs are shown in the customization menu when configuring channels.

<div><figure><img src="../../../.gitbook/assets/image (333).png" alt=""><figcaption></figcaption></figure> <figure><img src="../../../.gitbook/assets/image (334).png" alt=""><figcaption></figcaption></figure></div>

Select the `#` symbol on the last channel in the dispatch panel to toggle ID visibility.

![](<../../../.gitbook/assets/image (259).png>)

</details>
