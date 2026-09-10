---
description: Automatically sends linked units' in-game locations to Sonoran CAD.
---

# Unit Locations

The Unit Locations submodule automatically sends a unit's current street, coordinates, vehicle type, and emergency-light state to Sonoran CAD. Dispatchers and other supported CAD panels can then see the unit's current location.

This submodule is included with the core Sonoran CAD FiveM resource and is enabled by default. Players only need to [link their in-game user to Sonoran CAD](../link-user-in-game.md). No separate installation is required.

## Automatic Street Names

By default, the integration uses FiveM's native street-name lookup. Standard GTA street names work automatically.

Some custom HUD resources replace FiveM's game-wide text entries with their custom street names. These custom names also work automatically because the native lookup returns the updated name.

Other HUD resources keep custom names inside their own configuration. Those names are only visible to that HUD and cannot be detected automatically by other resources. For these HUDs, copy the HUD's street hash and name pairs into the Unit Locations configuration.

## Custom Street Names

Open `/sonorancad/configuration/locations_config.lua` and enable `customStreetNames`. Add the same hash and display-name pairs used by your HUD:

```lua
customStreetNames = {
    enabled = true,
    names = {
        [0xAC9F694E] = "Custom Freeway Name",
        ["0x10A6E7C9"] = "Custom Street Name"
    }
}
```

Both the primary street and the nearest crossing can be replaced. Numeric hashes, signed decimal hashes, and quoted hexadecimal hashes are supported.

If a street hash is not listed, the integration falls back to the normal FiveM street name. If `customStreetNames` is disabled or is not present in an older configuration file, unit locations continue working normally with native street names.

{% hint style="info" %}
If your HUD has an option to update custom names game-wide or update game text entries, enable that option instead. The Unit Locations submodule will then receive those names automatically, without duplicating the list in both configurations.
{% endhint %}

## Configuration

| Option                      | Description                                                                            | Default  |
| --------------------------- | -------------------------------------------------------------------------------------- | -------- |
| `clientCheckTime`           | How often the client checks whether location data changed.                             | `250` ms |
| `prefixPostal`              | Prefixes the location with the nearest postal when the Postals submodule is available. | `true`   |
| `customStreetNames.enabled` | Enables the custom street hash override list.                                          | `false`  |
| `customStreetNames.names`   | Maps FiveM street hashes to custom display names.                                      | Empty    |
