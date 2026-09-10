---
description: Learn more about creating and managing radio channels!
---

# Configure Channels

{% embed url="https://youtu.be/Mm-sdHeZoHk" %}

## Creating Channel Groups

<figure><img src="../../../.gitbook/assets/image (116).png" alt=""><figcaption></figcaption></figure>

Channel groups allow communities to organize channels in separated categories.

Channel groups are configured in the `Customization` > `Channels & Groups` tab.

### Add a Group

To add a new channel group, select the green `+` icon to the right of the group bar.

Enter in a new group name, and select `Ok`.

<figure><img src="../../../.gitbook/assets/image (117).png" alt=""><figcaption><p>Sonoran Radio - Add Channel Group</p></figcaption></figure>

### Edit or Delete a Group

Select the gear icon on the group to rename it.

Select the trash icon on the group to remove it.

Re-order the channel groups via drag-and-drop.

### Shared Channels

Shared channels let you create a single channel that exists across multiple groups.

#### Setup

In this example, there are three radio groups — `City`, `Highway`, and `County`. Each group has its own `Interops` channel, but these channels are linked together so that any transmission on one `Interops` channel is heard across all three groups.

This setup allows seamless communication between departments while maintaining their individual group structures.

1. **Determine the "Primary" Channel**

* One channel must be chosen as the "Primary" channel that the other channels link to. In this example, we will select the `City` group's `Interops`.

2. **Link the First Channel to Primary**

* In the `Highway` group, edit the `Highway Interops` channel. Toggle the channel mode to `Shared` and select the `City Interops` channel (our "primary" channel).

3. **Link the Second Channel to Primary**

* In the `County` group, edit the `County Interops` channel. Toggle the channel mode to `Shared` and select the `City Interops` channel (our "primary" channel).

Now, any user in the City, Highway, or County Interops channel will appear in all three and any transmissions in one will be heard in all three.

<div><figure><img src="../../../.gitbook/assets/image (283).png" alt="" width="278"><figcaption></figcaption></figure> <figure><img src="../../../.gitbook/assets/image (284).png" alt="" width="281"><figcaption></figcaption></figure></div>

## Channels

Channels are inside of groups and are what users connect to in order to communicate.

You can create a channel in the `Customization` > `Channels & Groups` tab, or right inside of the `Dispatch` panel.

* Select the gear icon on the channel to rename it.
* Select the plus icon in the server settings or dispatch panel to add a new channel.
* Select the gear icon > trash icon to delete the channel.

<figure><img src="../../../.gitbook/assets/image (118).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (159).png" alt=""><figcaption><p>Sonoran Radio - Dispatch Panel Configure Channels</p></figcaption></figure>

When creating a channel, you only need to provide a name.

## Channel Options

<details>

<summary>Preview the AI Text-To-Speech</summary>

In the admin `Customize` tab, hovering over green the channel audio icon will play the text-to-speech audio stating the channel name.

A red icon indicates that the AI text-to-speech failed to generate. Simply re-save the channel to regenerate the audio file.

Users can enable or disable the channel text-to-speech playing when switching channels in their settings menu.

![](<../../../.gitbook/assets/image (181).png>) ![](<../../../.gitbook/assets/image (186).png>)

</details>

<details>

<summary>Customize the AI Pronunciation</summary>

By toggling on the `Advanced` mode, you can manually adjust how the AI pronounces the channel name, which can be helpful for abbreviations and other non-common words.'

![](<../../../.gitbook/assets/image (180).png>)

</details>

<details>

<summary>Setting the Voice Effect</summary>

Use the `Voice Effect` dropdown to set the [custom voice effect style](custom-voice-effects.md) for the channel.

![](<../../../.gitbook/assets/image (182).png>)

</details>

<details>

<summary>Toggle Talkover Protection</summary>

Toggle the `Talkover` prevention button to allow or prevent multiple users from talking at once.

With talkover prevented, the [talkover error sound](custom-sfx.md) will play and prevent the user from activating their mic.

![](<../../../.gitbook/assets/image (183).png>)

</details>

<details>

<summary>Restrict Channel Visibility</summary>

Switch the channel's visibility to `Public` (everyone can see and connect) or `Private` to restrict which users can connect and transmit.

Private channels will appear in the [community member permissions tab](../../getting-started/invite-and-manage-users.md), or be [automatically managed with Sonoran CMS](../../integrations/sonoran-cms.md).

![](<../../../.gitbook/assets/image (184).png>)

</details>

<details>

<summary>Customize Channel Frequency</summary>

With `Advanced` mode toggled, you can also customize the recieve and transmit frequency numbers for more realism.

![](<../../../.gitbook/assets/image (185).png>)

</details>
