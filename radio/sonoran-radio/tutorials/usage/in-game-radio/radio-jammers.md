---
description: >-
  Deploy a signal jammer to disrupt nearby emergency radios for the ultimate
  heist!
---

# Radio Jammers

<figure><img src="../../../.gitbook/assets/jammer.png" alt=""><figcaption></figcaption></figure>

## Video Example

Coming soon!

## Using the Radio Jammer

### Enabling the Jammer

1. Enable the `Config.radioJammers.enabled` option in your [config.lua](../../getting-started/installing-the-in-game-resource.md#updates).
2. Add the `sonoranradio.jammers` [ace permission](configuring-ace-permissions.md).

### Opening in Standalone

You can use `/radio jammer` command to open a personal scanner. This requires the `sonoranradio.jammers` [ace permission](configuring-ace-permissions.md).

### Opening in a Framework Server (QBCore, Qbox, etc.)

With the radio jammer item in their inventory, users can double click to open the [scanner menu](radio-jammers.md#using-the-radio-scanner-1).

[View our complete list of supported FiveM frameworks an inventories.](../../integrations/fivem-inventories.md)

<figure><img src="../../../.gitbook/assets/image (287).png" alt=""><figcaption><p>Sonoran Radio Jammer Item in Inventory</p></figcaption></figure>

#### Item Drop

{% hint style="warning" %}
Dropping jammers is not currently supported in OX inventory.

Support will be added at a later date, pending more information from the OX development team.
{% endhint %}

If the jammer item is dropped on the floor, you can interact by being near it and pressing `E`.

If the jammer is powered on, it will impact radios in the configured radius.

<figure><img src="../../../.gitbook/assets/image (286).png" alt=""><figcaption><p>Sonoran Radio Jammer Interaction</p></figcaption></figure>

## Permanent Jammers

Permanent Jammers are available to everybody at configurable locations across the map.

#### Configuring Permanent Jammers

You can use `/radio jammers` to easily add, move, or delete persistent jammers

<div data-full-width="false"><figure><img src="https://cdn.discordapp.com/attachments/871554360285474847/1428501231596208158/image.png?ex=68f2baf1&#x26;is=68f16971&#x26;hm=c5157bfd8fc03dc870bdd669c9285882d5723eab799ee9ab09e07a4f6e35f046&#x26;" alt=""><figcaption></figcaption></figure> <figure><img src="https://cdn.discordapp.com/attachments/871554360285474847/1428501231277445213/image.png?ex=68f2baf1&#x26;is=68f16971&#x26;hm=e8b2d6551fc92c517e4f831ac2864569261635c5082ff9881212cf62b72cd94a&#x26;" alt=""><figcaption></figcaption></figure> <figure><img src="https://cdn.discordapp.com/attachments/871554360285474847/1428501231948660816/image.png?ex=68f2baf1&#x26;is=68f16971&#x26;hm=9bee1262d6a2970b252ed09984f69dad06ca517eb85b960615aebfad96d981fc&#x26;" alt=""><figcaption></figcaption></figure></div>

When creating a jammer, you have the ability to choose between many different jammer-like models to best fit your needs.

<div><figure><img src="https://cdn.discordapp.com/attachments/871554360285474847/1428502707408207882/image.png?ex=68f2bc51&#x26;is=68f16ad1&#x26;hm=6b588ca32861e637cedd30a8c0d58941dd956cf4988423f6e3b63ec44e13241c&#x26;" alt=""><figcaption><p>"Satellite Jammer"</p></figcaption></figure> <figure><img src="https://cdn.discordapp.com/attachments/871554360285474847/1428502808436412538/image.png?ex=68f2bc69&#x26;is=68f16ae9&#x26;hm=09a02f409d103d9f145da258df0ad492e145f2dcde9d90ebdfc303572493c555&#x26;" alt=""><figcaption><p>"Case Jammer"</p></figcaption></figure> <figure><img src="https://media.discordapp.net/attachments/871554360285474847/1428501230812004435/image.png?ex=68f2baf1&#x26;is=68f16971&#x26;hm=e07883e37771a496cd200a3ca60c611f4f27c9a5b7a46c2b955d5602f36ef286&#x26;=&#x26;format=webp&#x26;quality=lossless&#x26;width=1536&#x26;height=864" alt=""><figcaption><p>"Suitcase Jammer"</p></figcaption></figure> <figure><img src="https://cdn.discordapp.com/attachments/871554360285474847/1428504579489660968/1000.png?ex=68f2be10&#x26;is=68f16c90&#x26;hm=46af200ce78885145c8d881161ff32b11a60da6a9e69495ffbad041ccf79301e&#x26;" alt=""><figcaption><p>"Handheld Jammer"</p></figcaption></figure></div>

You can also modify the `jammers.json` config file for more customization. By default, there are no jammers spawned.

## Jamming Radio Effect

In-game radio screens will reflect a jamming effect, with the intensity based on the jammer strength.

<figure><img src="../../../.gitbook/assets/jammer_radio.gif" alt=""><figcaption></figcaption></figure>

## Developers

### Ace Permissions

If you have enabled `Config.radioJammers.permissionMode`, you must add permissions in your `server.cfg`for the scanner to work.

The ACE permission for `/radio scanner` is `sonoranradio.jammers`.

The ACE permissions for specific jammer types are `sonoranradio.jammer_handheld`.

* `jammer_handheld` and other options are from the names in your [config.lua](../../getting-started/installing-the-in-game-resource.md#updates).

Learn more about [ACE Permissions](radio-jammers.md#ace-permissions).

### Giving the Scanner Item (QBCore)

Sonoran Radio does not provide a way to get the scanner item independently. You can give the item with any method, but here's an example chat command:

```
/giveitem <playerId> sonoran_radio_jammer_handheld 1
```
