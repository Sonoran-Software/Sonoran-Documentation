---
description: >-
  Sonoran Radio integrates with FiveM inventory systems for physical radio and
  scanner items.
---

# FiveM Inventories

## QBCore

QBCore inventory support for the radio and [radio scanner](../usage/in-game-radio/radio-scanners.md) items is automatically detected.

### Configuration

#### Inventory Restriction

To restrict radio and scanner access to users with the radio item in their inventory, set `config.enforceRadioItem` to `true`.

#### Inventory Item

Customize your radio and scanner items in your config.lua's `Config.RadioItem` and `Config.ScannerItem` objects.

<details>

<summary>Config.Lua Properties</summary>

```lua
-- Located in the Radio's config.lua
Config.RadioItem = {		 -- Note: Changes to this item will require a server restart to take effect
	name = 'sonoran_radio',  -- Item name in your inventory | STRING
	label = 'Sonoran Radio', -- Label for the item in your inventory | STRING
	weight = 1, 			 -- Weight of the item in your inventory | INT
	description = 'Communicate with others through the Sonoran Radio', -- Description of the item in your inventory | STRING
}
Config.ScannerItem = {
	name = 'sonoran_radio_scanner', -- Item ID
	label = 'Sonoran Radio Scanner', -- Label for the item in your inventory
	weight = 1, -- Weight of the item in your inventory
	description = 'Listen to radio chatter with the Sonoran Radio Scanner', -- Description of the item in your inventory
}

```

</details>

### Supported Inventories (QBCore)

Currently, the following QBCore inventories are supported:

* QBCore Inventory
* OX Inventory
* QS Inventory
* Core Inventory

## Qbox

### Configuration

#### Inventory Restriction

To restrict radio and scanner access to users with the radio item in their inventory, set `config.enforceRadioItem` to `true`.

#### Inventory Item

Qbox requires you to manually add the following to your `/ox_inventory/data/items.lua` file. The config.lua's `Config.RadioItem` and `Config.ScannerItem` can not be used with Qbox.

<details>

<summary>Ox Inventory Items File</summary>

```lua
['sonoran_radio_scanner'] = {
        label = 'Sonoran Radio Scanner',
        description = 'Listen to radio chatter with the Sonoran Radio Scanner',
        weight = 1,
        client = {
            image = 'radio.png',
            remove = function(total)
                if total < 1 then
                    TriggerServerEvent('SonoranRadio::DropItem::Scanner')
                end
            end
        }
    },
    ['sonoran_radio'] = {
        label = 'Sonoran Radio',
        description = 'Communicate with others through the Sonoran Radio',
        weight = 1,
        client = {
            image = 'radio.png'
        }
    },
```

</details>

### Supported Inventories (Qbox)

Currently, the following Qbox inventories are supported:

* OX Inventory

## Known Issues and Limitations

### OX Inventory

<details>

<summary>OX Inventory Bugs and Limitations</summary>

**QBCore Support**

[OX inventory has officially dropped QBCore support in sole favor of the Qbox framework. However, full functionality can still work.](https://overextended.dev/ox_inventory/Frameworks/qbx)

</details>

### QS Inventory

<details>

<summary>QS Inventory Bugs and Limitations</summary>

**Official Support**

While QS inventory has not been officially tested with Sonoran Radio, customers have reported it working with full functionality. Report any issues on our [support website](https://support.sonoransoftware.com).

</details>
