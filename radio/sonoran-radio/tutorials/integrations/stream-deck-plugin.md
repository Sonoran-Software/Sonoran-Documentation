---
description: >-
  Sonoran Radio's official Stream Deck plugin gives you faster, customizable
  control over channels, volume, presets, and more.
---

# Stream Deck Plugin

<figure><img src="../../.gitbook/assets/radio_deck_promo_thumbnail.png" alt=""><figcaption></figcaption></figure>

<div><figure><img src="../../.gitbook/assets/radio_deck_promo_general.png" alt=""><figcaption></figcaption></figure> <figure><img src="../../.gitbook/assets/radio_deck_promo_channels.png" alt=""><figcaption></figcaption></figure> <figure><img src="../../.gitbook/assets/radio_deck_promo_dial.png" alt=""><figcaption></figcaption></figure></div>

## Introduction <a href="#introduction" id="introduction"></a>

Sonoran Radio's MacOS and Windows desktop applications offer direct integration with [Stream Deck hardware](https://www.elgato.com/us/en/p/stream-deck). By installing our official Stream Deck plugin, users can change channels, toggle preset channel groups, change channel and system volumes, and more - faster than ever before.

Don't have a physical Stream Deck? Download the [free Stream Deck Mobile app](https://www.elgato.com/us/en/s/stream-deck-mobile)!

## Installation <a href="#installation" id="installation"></a>

### 1. Download and Install the Plugin <a href="#id-1.-download-and-install-the-plugin" id="id-1.-download-and-install-the-plugin"></a>

[Download the official Sonoran Radio Stream Deck plugin from the Elgato Marketplace.](https://marketplace.elgato.com/product/sonoran-radio-6e959b5a-4cd3-40c8-b145-8eb1ea982fd5)

### 2. Configure Actions <a href="#id-2.-configure-actions" id="id-2.-configure-actions"></a>

Using the Stream Deck desktop application search for **Sonoran Radio** in the **Keys** and **Dials** sections.

Drag-and-drop an action category to the Stream Deck. Select the action to update the sub-type.

Ex: **Channel** key type > **Toggle XMIT Channels** > **Select Channels**

<figure><img src="../../.gitbook/assets/image.png" alt="" width="375"><figcaption></figcaption></figure>

### 3. Optional: FiveM Integration

Each action can be configured to control the desktop app (default) or [FiveM in-game resource](../usage/in-game-radio/).

For clients using the in-game radio in FiveM, simply toggle each action from **Desktop** to **FiveM**.

Sonoran Radio then acts as a local bridge between the Stream Deck, the desktop app, and the FiveM radio. The desktop app must be running, but does not have to have any radio community open or selected.

<figure><img src="../../.gitbook/assets/image (314).png" alt="" width="375"><figcaption></figcaption></figure>

1. Stream Deck sends the action to Sonoran Radio Desktop on localhost
2. Sonoran Radio Desktop forwards the command to a localhost WebSocket
3. your FiveM client script listens to that socket and forwards the event into the radio iframe/NUI
4. the iframe/NUI sends radio state snapshots back through your FiveM client script to Sonoran Radio Desktop
5. Stream Deck reads those snapshots for channel lists, labels, and action state

This means the normal setup for users is:

* keep **Sonoran Radio Desktop** running
* switch the Stream Deck action target to **FiveM**
* run a FiveM client script that connects to the desktop socket and forwards the documented messages

<figure><img src="../../.gitbook/assets/image (311).png" alt="" width="267"><figcaption></figcaption></figure>

### 4. FiveM Developer Setup

If you are implementing the FiveM side yourself, use the documented developer contract here:

{% content-ref url="../../developer-documentation/developer-documentation/stream-deck-api.md" %}
[stream-deck-api.md](../../developer-documentation/developer-documentation/stream-deck-api.md)
{% endcontent-ref %}

## Capabilities <a href="#action-capabilities" id="action-capabilities"></a>

### Keys

<details>

<summary>Channel Category Buttons</summary>

Channel actions allow you to do somethin

* **Next Group**
* **Previous Group**
* **Next Channel**
* **Previous Channel**
* **Toggle XMIT Channels**
  * Select one or more channels
  * Toggling this action will add and remove the selected channel(s) from your transmit list
* **Temporary XMIT Channel**
  * Select a channel
  * Pressing this action will temporarily transmit in the selected channel and return to your previous channel(s) after release
* **Toggle Scan Channels**
  * Select one or more channels
  * Toggling this action will add and remove the selected channel(s) from your scan list

</details>

<details>

<summary>Toggle Category Buttons</summary>

* **Push to Talk**
* **Toggle AI Mode**
* **Toggle Tone Board**

</details>

<details>

<summary>Audio Category Buttons</summary>

* **Volume Up**
* **Volume Down**
* **SFX Volume Up**
* **SFX Volume Down**
* **AI Volume Up**
* **AI Volume Down**

</details>

<details>

<summary>Desktop Category Buttons</summary>

* **Connected Users Overlay**
* **Focus Radio Overlay**
* **Toggle Radio Overlay**

</details>

### Dials

Stream Deck hardware with dials have the following supported actions:

<details>

<summary>Dial Options</summary>

* **Cycle Groups (Prev/Next)**
* **Cycle Channels (Prev/Next)**
* **Adjust Volume**
  * Optional Press to Mute
* **Adjust SFX Volume**
  * Optional Press to Mute
* **Adjust AI Volume**
  * Optional Press to Mute
* **Adjust Current Channel Volume**
  * Optional Press to Mute

</details>
