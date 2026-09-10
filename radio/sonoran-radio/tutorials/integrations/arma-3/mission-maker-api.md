---
description: >-
  Script Sonoran Radio towers, active inventory radios, and signal events in an
  Arma 3 mission.
---

# Mission Maker API

The editor module is recommended for most missions. The following SQF functions are available when a mission needs dynamic towers or a custom inventory integration.

{% hint style="info" %}
Tower registration and state functions must run on the server. Positions use Arma ASL coordinates.
{% endhint %}

## Register a coordinate-only tower

```sqf
[
    "altis_north_relay", // Unique tower ID
    [14567, 16789, 185], // Position ASL
    8000,                // Range in meters
    4,                   // Total dishes
    objNull,             // Physical object
    4,                   // Active dishes
    true                 // Powered
] call sonoran_radio_fnc_registerTower;
```

Registering the same ID again replaces the existing tower record.

## Register a physical object

Give the editor object a variable name such as `radioTowerWest`, then run this on the server:

```sqf
[
    "altis_west_relay",
    [],
    6000,
    4,
    radioTowerWest,
    4,
    true
] call sonoran_radio_fnc_registerTower;
```

The mod derives the antenna location from the top of the object's bounding box. Killing or deleting the object turns off the tower and sets its active dishes to zero.

## Change tower state

```sqf
// Power off while preserving the current active-dish count.
["altis_north_relay", false, -1] call sonoran_radio_fnc_setTowerState;

// Restore power with two active dishes.
["altis_north_relay", true, 2] call sonoran_radio_fnc_setTowerState;
```

## Unregister a tower

```sqf
["altis_north_relay"] call sonoran_radio_fnc_unregisterTower;
```

## Read local signal quality

Run on a player client:

```sqf
private _quality = call sonoran_radio_fnc_getSignalQuality;
private _towerId = missionNamespace getVariable ["sonoran_radio_bestTowerId", ""];
```

Quality is normalized from `0` to `1`.

Subscribe to signal changes through CBA:

```sqf
["sonoran_radio_signalQualityChanged", {
    params ["_quality", "_previousQuality", "_towerId"];
    systemChat format ["Signal %1 from %2", _quality, _towerId];
}] call CBA_fnc_addEventHandler;
```

## Override the active radio item

For a nonstandard client-side inventory system:

```sqf
["my_mod_field_radio"] call sonoran_radio_fnc_setActiveRadioItem;
```

Return to automatic `ItemRadio` detection with:

```sqf
[""] call sonoran_radio_fnc_setActiveRadioItem;
```

## Enable the Arma Debug Console

The console is already available while previewing from Eden. To enable it elsewhere, use Eden's **Attributes** > **General** > **States** > **Debug Console** option or add one of the following values to the mission's `description.ext`:

```cpp
// Host or logged-in server admin only.
enableDebugConsole = 1;
```

```cpp
// Everyone. Use only in a private development mission.
enableDebugConsole = 2;
```

During the mission, press `Esc` and select **Debug Console**. Use **Server Exec** for tower registration/state calls and **Local Exec** for player inventory or local signal calls.

{% hint style="danger" %}
Do not publish a public mission with `enableDebugConsole = 2`. It allows every player to execute arbitrary SQF.
{% endhint %}

See Bohemia Interactive's [Arma 3 Debug Console documentation](https://community.bohemia.net/wiki/Arma_3:_Debug_Console) for the complete access rules.
