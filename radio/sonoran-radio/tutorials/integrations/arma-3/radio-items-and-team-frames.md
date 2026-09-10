---
description: >-
  Use Arma 3 inventory radios to select BLUFOR, OPFOR, or custom Sonoran Radio
  desktop frames.
---

# Radio Items and Team Frames

The Arma mod reports the player's radio `CfgWeapons` class to the local desktop overlay. The overlay switches to the community frame mapped to that class.

## Included radio items

| Display name           | Item class                 | Default frame |
| ---------------------- | -------------------------- | ------------- |
| Sonoran Radio (BLUFOR) | `SonoranRadio_Item_BLUFOR` | ARMA 3 BLUFOR |
| Sonoran Radio (OPFOR)  | `SonoranRadio_Item_OPFOR`  | ARMA 3 OPFOR  |

<figure><img src="../../../.gitbook/assets/desktop-radio-overlay.jpg" alt="Sonoran Radio desktop radio frame displayed over Arma 3 gameplay"><figcaption><p>The desktop radio overlay remains visible and usable while playing Arma 3.</p></figcaption></figure>

Newly created Radio communities include the two example desktop frames and mappings. Existing communities can map these classes to an existing frame or create new frames.

## Give a player a radio

Use Eden unit inventory, Zeus Arsenal, or a mission loadout to give the player one of the items. Search Arsenal for **Sonoran Radio (BLUFOR)** or **Sonoran Radio (OPFOR)**.

In a unit's Eden initialization field, use Arma's [`linkItem`](https://community.bohemia.net/wiki/linkItem) command:

```sqf
this linkItem "SonoranRadio_Item_BLUFOR";
```

To give yourself the BLUFOR item from the Arma Debug Console, select **Local Exec** and run:

```sqf
player linkItem "SonoranRadio_Item_BLUFOR";
```

For OPFOR, replace the class name with `SonoranRadio_Item_OPFOR`.

The item name does not automatically follow the unit's side. Mission makers must give each player or loadout the desired BLUFOR or OPFOR item.

{% hint style="warning" %}
Give a player only one intended radio item at a time. An assigned radio takes priority; otherwise the first detected radio in the inventory is reported.
{% endhint %}

## Map an item to a desktop frame

1. Open the Sonoran Radio admin panel.
2. Navigate to **Customization** > **Desktop Frames**.
3. Select the frame that should represent the team or inventory item.
4. In **ARMA Item Class Names**, enter the exact `CfgWeapons` class name and press Enter to create a chip.
5. Select **Save**.
6. Close and reopen the desktop overlay on player computers so it downloads the updated frame list.

Class matching is case-insensitive. One item class can map to only one frame, a frame can contain up to 32 mapped classes, and each class name can contain up to 128 characters.

Uploading new custom frame artwork requires a Pro subscription. Mapping an Arma item controls which configured frame the overlay selects; the Arma mod does not store frame images or Sonoran credentials.

## When frame switching occurs

The desktop overlay downloads the community's frame configuration when the overlay opens. Changes saved by an administrator therefore appear after the player closes and reopens the overlay.

While the overlay is open, the mod checks the active inventory radio on the normal signal update interval and sends a heartbeat at least every two seconds. The overlay checks the local bridge twice per second, so an equipped-item change normally switches the frame within one to two seconds.

If the detected item has no mapping, the current frame remains selected.

## Custom inventory items

Any custom item that inherits Arma's `ItemRadio` is detected automatically. Add its `CfgWeapons` class name to the desired frame in the admin panel.

For an inventory system that does not inherit `ItemRadio` or use Arma's assigned radio slot, call the client-side override when the custom radio is used:

```sqf
["my_mod_field_radio"] call sonoran_radio_fnc_setActiveRadioItem;
```

Clear the override and return to automatic detection with:

```sqf
[""] call sonoran_radio_fnc_setActiveRadioItem;
```
