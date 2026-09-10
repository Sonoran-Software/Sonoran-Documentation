---
description: Learn more about customizing your in-game FiveM keybinds.
---

# FiveM Keybinds & Commands

## FiveM Keybinds

Sonoran Radio allows you to customize keybinds for in-game actions on the radio.

To customize these, navigate to your GTA `Settings` -> `Key Bindings` -> `FiveM` -> `(sonoranradio)`

Communities can also customize the default keybinds for new users in the [configuration's](../../../getting-started/installing-the-in-game-resource.md#updates) `keybind` property with the [available options](https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/keyboard/).

<figure><img src="../../../../.gitbook/assets/image (247).png" alt=""><figcaption><p>FiveM Keybinds: Sonoran Radio</p></figcaption></figure>

### Radio Power

This keybind will turn your radio on/off.

### Prev/Next Channel (In Group)

These keybinds will move you to the previous or next channel within the current channel group.

### Prev/Next Group

These keybinds will move you to the previous or next channel group.

### Radio PTT

This keybind will transmit your voice on the radio while being held down.

### Panic

This keybind will toggle your panic status in the radio, and in [Sonoran CAD](../../../integrations/sonoran-cad-integration.md#cad-panic).

#### Auto PTT on Panic

Sonoran Radio has a [configurable option](../../../getting-started/installing-the-in-game-resource.md#updates) to automatically press a users PTT button for a configurable amount of time when the user [presses their radio panic button](./#panic):

```lua
Config.autoPttOnPanic = {
	enabled = true, -- Enable automatic PTT when panic button is pressed
	duration = 15 -- Duration in seconds to hold PTT when panic button is pressed
}
```

### Volume Up/Down

This keybind will quickly adjust your volume up/down, [based on the percentage set in your settings menu](./#radio-volume).

### Toggle Radio Users

This keybind will display the [current radio connected user list](../connected-users-list.md).

### Toggle Radio Talk Animation

This keybind will toggle on/off the talking animation.

***

## Stream Deck Integration

Stream Deck plugins like [FXCommands](https://marketplace.elgato.com/product/fxcommands-fivem-a6cdf538-76ac-4fc7-b8b8-130ea2b8bcbb) can be used to trigger any of the [FiveM client commands](fivem-keybinds-and-commands.md#fivem-client-commands) below.

***

## FiveM Client Commands

### Copying Channel and Scan List IDs

FiveM commands require channel and scan list IDs. These IDs can be made visible by toggling the `#` icon in the channel or scan list menus.

<div><figure><img src="../../../../.gitbook/assets/image (254).png" alt="" width="180"><figcaption><p>Modern UI: Channel and Scan IDs</p></figcaption></figure> <figure><img src="../../../../.gitbook/assets/image (255).png" alt="" width="198"><figcaption><p>Modern UI: Channel IDs</p></figcaption></figure></div>

### Toggle Channel Transmit

To toggle [transmitting on a specific channel](./#connecting-and-switching-channels) use the command

`/radio channel ID`

### Toggle Scan List

To toggle on/off a specific [scan list](./#custom-scan-lists) use the command

`/radio scanlist ID`

### Toggle Channel Scan

To toggle on/off [scanning a specific channel](./#channel-scanning-listening) use the command

`/radio scan ID`

### Mobile Repeater Menu

To activate or deactivate a configured [vehicle or trailer repeater](../in-game-repeaters.md#mobile-vehicle-repeaters), use the command

`/radio repeater`

This opens an activation-only menu for all players. Configuring which vehicle models have repeaters remains restricted to administrators through `/radiomenu`.

***

## FiveM Server Commands

Commands for the server console.

### Debug Mode Toggle

Toggle the [`config.debug` mode](../../../getting-started/installing-the-in-game-resource.md#updates) with the command

`sonoranradio debugmode`

Note: This mode does not persist through server restarts.

### Update Resource Command

Run the automatic update with the command

`sonoranradio update`
