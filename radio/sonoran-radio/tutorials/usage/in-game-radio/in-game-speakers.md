---
description: Configure in-game speakers that dispatchers can send tones to!
---

# In-Game Speakers

<figure><img src="../../../.gitbook/assets/image (176).png" alt=""><figcaption></figcaption></figure>

{% embed url="https://www.youtube.com/watch?v=q-8u20usxvg" %}

## Configuring In-Game Speakers

### 1. Access the Menu

Open the menu with the in-game `/radiomenu` command and select `Toneboard Speaker Menu` > `Spawn/Move/Delete Speaker`

<div><figure><img src="../../../.gitbook/assets/image (194).png" alt="" width="222"><figcaption><p>Sonoran Radio - /radiomenu</p></figcaption></figure> <figure><img src="../../../.gitbook/assets/image (195).png" alt="" width="222"><figcaption><p>Sonoran Radio - Toneboard Speaker Menu</p></figcaption></figure></div>

### 2. Configure the Speaker

#### Menu Options

The spawn (create) and edit menu will allow you to set the speaker type, name, range, and position.

<figure><img src="https://images-ext-1.discordapp.net/external/U2ds6All9FbMQfcQwxwjdF1WIt6ExVgfdFaQY1gHg9I/https/cdn.jordan2139.me/u/1052403544944283680/DczIjmhx.png?format=webp&#x26;quality=lossless" alt="" width="375"><figcaption></figcaption></figure>

#### Speaker Types

When spawning a new speaker please select the type you would like to use. See types below:

<div><figure><img src="../../../.gitbook/assets/image (196).png" alt=""><figcaption><p>Small - Wall</p></figcaption></figure> <figure><img src="../../../.gitbook/assets/image (197).png" alt=""><figcaption><p>Medium</p></figcaption></figure> <figure><img src="../../../.gitbook/assets/image (198).png" alt=""><figcaption><p>Medium - Wall</p></figcaption></figure> <figure><img src="../../../.gitbook/assets/image (199).png" alt=""><figcaption><p>Large</p></figcaption></figure></div>

#### Speaker Position

Use the controls displayed on screen to rotate and move the speaker to the desired location.

<figure><img src="https://images-ext-1.discordapp.net/external/QpaFNLLXgyKaCSITDzzPoyCElQH-nFXr9JVC-uniLiA/https/cdn.jordan2139.me/u/1052403544944283680/qLCwBu8I.png?format=webp&#x26;quality=lossless" alt=""><figcaption><p>Sonoran Radio - Speaker Position Controls</p></figcaption></figure>

### 3. Speaker Grouping

Speakers can be grouped by a customizable name when placed. Grouped speakers show up as a single option on the tone board.

If you would like to group already placed speakers you can do so by navigating to the `speakers.json` file and adding a `group` property. (If the value of the group property is empty, speakers will not group together). See below for more:

| Ungrouped Speaker(s)                                                             | Grouped Speaker(s)                                                               |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| <img src="../../../.gitbook/assets/image (141).png" alt="" data-size="original"> | <img src="../../../.gitbook/assets/image (140).png" alt="" data-size="original"> |

## Playing Tones to In-Game Speakers

Dispatchers can now [use the tone board](../dispatch-panel/custom-tone-board.md) and select one of the in-game speaker options to broadcast tones, microphone recordings, or AI powered text-to-speech to.

<figure><img src="../../../.gitbook/assets/image (192).png" alt="" width="219"><figcaption><p>Sonoran Radio - In-Game Speaker Broadcast</p></figcaption></figure>
