---
description: >-
  Configure and customize destructible radio towers in-game to impact radio
  performance.
---

# In-Game Repeaters

{% embed url="https://www.youtube.com/watch?v=sHAgi1Z_Er8" %}

## Available Repeater Types

### Server Rack

Server rack style repeaters are found by default inside of police stations and hospitals. These repeaters offer the most interactive destruction experience.

Press `E` on the door to open it.

Each server inside can be individually destroyed and will fall separately out of the rack. These can be configured with 1-5 servers in each. As more of these servers are destroyed, the repeater signal will diminish.

<div><figure><img src="../../../.gitbook/assets/server.png" alt=""><figcaption><p>Server Rack</p></figcaption></figure> <figure><img src="../../../.gitbook/assets/server_opened.png" alt=""><figcaption><p>Server Rack - Opened</p></figcaption></figure> <figure><img src="../../../.gitbook/assets/server_destroyed.png" alt=""><figcaption><p>Server Rack - Destroyed</p></figcaption></figure></div>

### Radio Tower

Tower style repeaters are found by default on hills, mountains, and large rooftops.

Players can climb the ladder to reach the top.

There are four dishes inside that each account for 25% of the health. As more of these dishes are destroyed, the repeater signal will diminish.

<div><figure><img src="../../../.gitbook/assets/tower (1).png" alt=""><figcaption><p>Radio Tower</p></figcaption></figure> <figure><img src="../../../.gitbook/assets/tower_broken.png" alt=""><figcaption><p>Radio Tower - Destroyed</p></figcaption></figure></div>

### Cellular Antenna

Cellular antenna style repeaters are found by default on the side of high-rises and other buildings.

Destroying this antenna will disable it's repeater range.

<div><figure><img src="../../../.gitbook/assets/cell.png" alt=""><figcaption><p>Cellular Antenna</p></figcaption></figure> <figure><img src="../../../.gitbook/assets/cell_destroyed.png" alt=""><figcaption><p>Cellular Antenna - Destroyed</p></figcaption></figure></div>

### Custom Repeaters

Additional integrations like the [mobile command center](in-game-repeaters.md#mobile-command-center-repeater), [power grid hacking](in-game-repeaters.md#hacking-repeaters-power-grid-integration), and [custom vehicle repeaters](in-game-repeaters.md#mobile-vehicle-repeaters) offer further customization.

***

## Configuration

### Tower Placement

#### Default Positions

<figure><img src="../../../.gitbook/assets/Default Placement.png" alt="" width="303"><figcaption><p>Sonoran Radio - Default Tower Positions</p></figcaption></figure>

#### Game Menu Configuration

To add, edit, or remove a repeater, open the configuration menu by typing `/radiomenu`.

Access to this command requires the `command.radiomenu` [ACE permission](configuring-ace-permissions.md).

<div><figure><img src="../../../.gitbook/assets/image (154).png" alt=""><figcaption><p>Spawn Repeater</p></figcaption></figure> <figure><img src="../../../.gitbook/assets/image (157).png" alt=""><figcaption><p>Move/Edit Repeater</p></figcaption></figure> <figure><img src="../../../.gitbook/assets/image (156).png" alt=""><figcaption><p>Delete Repeater</p></figcaption></figure></div>

#### Manual Configuration

Alternatively, you can edit the individual `towers.json` file in the `sonoranradio` resource.

<details>

<summary>towers.json</summary>

```json
[
  // Radio Tower
  {
    // Unique Identifier
    "Id": "74d910e5-5705-4b58-baaf-88a8ca82734c",
    // Type of repeater (tower)
    "type": "radioTower",
    // XYZ Coordinates
    "PropPosition": {
      "x": -577.4769287109375,
      "y": -138.4747314453125,
      "z": 51.9765625
    },
    // Signal range in units
    "Range": 1500,
    // Allow destruction
    "Destruction": true
  },
  // Server Rack
  {
    // Unique Identifier
    "Id": "50a9c40a-e5bb-46b2-9a83-c5164599c64c",
    // Type of repeater (Server Rack)
    "type": "serverRack",
    // XYZ Coordinates
    "PropPosition": {
      "x": 443.3538513183594,
      "y": -983.1824340820312,
      "z": 30.6783447265625
    },
    // 360 degree compass heading for angles
    "heading": 90,
    // Signal range in units
    "Range": 1500,
    // Status of each server in rack: "alive" or "dead"
    "serverStatus": [
      "alive",
      "alive",
      "alive",
      "alive",
      "alive"
    ],
    // Is the repeater on or not
    "Powered": true,
    // Make the repeater invisible by setting to true
    "NotPhysical": false,
    // Temporary repeater
    "DontSaveMe": false,
    // Allow destruction
    "Destruction": true
  },
  // Cell Repeater
  {
    // Unique Identifier
    "Id": "1f68f034-500b-4b29-9356-8c8bf63fda04",
    // Type of repeater (cell repeater)
    "type": "cellRepeater",
    // XYZ Coordinates
    "PropPosition": {
      "x": 152.5,
      "y": -775.9000244140625,
      "z": 264.29998779296877
    },
    // 360 degree compass heading for angles
    "heading": 340.0,
    // Signal range in units
    "Range": 1500.0,
    // Is the repeater on or not
    "Powered": true,
    // Make the repeater invisible by setting to true
    "NotPhysical": false,
    // Temporary repeater
    "DontSaveMe": false,
    // Status of the antenna: "alive" or "dead"
    "AntennaStatus": "alive",
    // Allow destruction
    "Destruction": true
  }
]

```

</details>

***

## Using the In-Game Towers

### Destroying a Tower

When tower destruction is enabled, users can use any form of weapon to damage the repeaters.

Once damaged and destroyed, the tower no longer provides radio coverage within that range.

### Repairing a Tower

#### Individual Towers

Players can walk up to a destroyed repeater and press `G` to being the repair process.

The repair time can be configured in the `config.lua`'s `towerRepairTimer`.

You can also restrict permissions to repairing a tower with [ACE permissions](configuring-ace-permissions.md) by setting `acePermsForTowerRepair` to `true` in the `config.lua`.

#### All Towers

The configuration menu can be used to repair all repeaters on the map at once.

<figure><img src="../../../.gitbook/assets/image (271).png" alt="" width="222"><figcaption><p>Sonoran Radio: Repair All Repeaters</p></figcaption></figure>

### Viewing Tower Coverage

#### Via In-Game Map

Enabling`Config.debug` in the `config.lua` file will display a radius around each tower, where the edge represents 50% radio quality.

#### Via Sonoran CAD Live Map

View Sonoran Radio repeater signal strength and health on the integrated CAD live map.\
Or, view dispatch call information on the in-game radio!

{% content-ref url="../../integrations/sonoran-cad-integration.md" %}
[sonoran-cad-integration.md](../../integrations/sonoran-cad-integration.md)
{% endcontent-ref %}

### Viewing Signal Strength

Coming Soon!

***

## Degrade Signals in Tunnels

Sonoran Radio also allows you to configure tunnels and other areas where signal will be degraded!

{% content-ref url="tunnels-and-degrade-zones.md" %}
[tunnels-and-degrade-zones.md](tunnels-and-degrade-zones.md)
{% endcontent-ref %}

***

## Additional Integrations

### Mobile Command Center Repeater

The [Sonoran Mobile Command Center](https://www.sonoran.store/package/5287071) also offers a built-in radio repeater to improve reception on a scene.

Raise the radio antenna by running the `/mccradio` command.

<div><figure><img src="../../../.gitbook/assets/mcc.png" alt=""><figcaption><p>Sonoran Mobile Command Center</p></figcaption></figure> <figure><img src="../../../.gitbook/assets/mcc_radio.png" alt=""><figcaption><p>Sonoran Mobile Command Center</p></figcaption></figure></div>

### Hacking Repeaters - Power Grid Integration

Communities can add additional [Sonoran Power Grid](https://www.sonoran.store/package/5120025) integration support, enabling users to hack a radio repeater's power source instead of destroying it.

<figure><img src="../../../.gitbook/assets/power_grid_promo.png" alt="" width="563"><figcaption><p>Sonoran Power Grid</p></figcaption></figure>

### Mobile (Vehicle) Repeaters

Mobile repeaters extend radio coverage from configured vehicle models and attached trailer models. Their coverage moves with the vehicle while the repeater is active.

Enable the feature in `config.lua`:

```lua
Config.enableVehicleRepeaters = true
```

Vehicle models are configured via in-game menu.

#### Configure a Vehicle Model

Configuration requires the `command.radiomenu` [ACE permission](configuring-ace-permissions.md).

1. Enter the vehicle you want to configure. To configure a trailer model, attach the trailer to the vehicle first.
2. Open `/radiomenu`.
3. Select **Radio Repeaters** > **Mobile Repeater Vehicles**.
4. Select **Add Current Vehicle** or **Add Attached Trailer**.
5. Set the menu label and repeater range, then select **Save Vehicle Repeater**.

<div><figure><img src="../../../.gitbook/assets/image (341).png" alt=""><figcaption></figcaption></figure> <figure><img src="../../../.gitbook/assets/image (342).png" alt=""><figcaption></figcaption></figure> <figure><img src="../../../.gitbook/assets/image (343).png" alt=""><figcaption></figcaption></figure></div>

The range must be between `1` and `10000`. The detected model is saved, so the configuration applies to every vehicle with that model, not only the vehicle used during setup.

Use the same menu to update an existing model or select **Remove Configured Vehicle** to delete it. Removing a model also disables active repeaters using that model.

#### Activate a Mobile Repeater

Activation does not require the administrator configuration permission.

1. Sit in the driver or front-passenger seat of a configured vehicle.
2. Run `/radio repeater` to open the activation menu.
3. Select **Enable Current Vehicle Repeater** or **Enable Attached Trailer Repeater**. The menu displays whether the repeater is active or inactive.

If both the towing vehicle and its attached trailer are configured, the activation menu targets the trailer. Administrators can also activate or deactivate the detected repeater from **Mobile Repeater Vehicles** in `/radiomenu`.

#### Repeater Lifecycle

The server tracks active mobile repeaters as their networked vehicles move. A mobile repeater is automatically disabled when its vehicle is destroyed, despawns, or its model is removed from the configuration.

If menu changes do not persist, check the server log and verify that the resource has permission to write `mobileRepeaters.json`.
