---
description: Learn more about custom integrations with the in-game resource!
---

# FiveM Resource API

These events are provided by the **FiveM resource** for use in FiveM scripts. For shared HTTP endpoints, see [API Endpoints v2](api-endpoints-v2/).

## Push-to-talk

When a user presses or releases their PTT key, the following event can be used:

```lua
-- Event sent from Sonoran Radio
TriggerEvent('SonoranRadio::API:ToggleTalking', toggle, inVeh)

-- Event listener in a custom script
AddEventHandler('SonoranRadio::API:ToggleTalking', function(toggle, inVeh) 
  print(toggle) -- Boolean (Are the talking?)
  print(inVeh) -- Boolean (Are they in a vehicle)
end)
```

## Radio Enabled

You can check if the radio is active (turned on) like so:

<pre class="language-lua"><code class="lang-lua"><strong>-- In your custom script
</strong><strong>-- true = active
</strong><strong>-- false = inactive
</strong><strong>local isActive = exports['sonoranradio']:isRadioActive()
</strong></code></pre>

## Emergency (911) Calls

You can start, end, and toggle an emergency call with a client resource export:

```lua
-- In your custom script
-- true     = Start
-- false    = End
-- 'toggle' = Toggle
exports['sonoranradio']:setEmergencyCall('toggle')
exports['sonoranradio']:setEmergencyCall('toggle', 'My Custom Name')
```

The following client events reflect the emergency call status:

```lua
-- Event sent from Sonoran Radio
TriggerEvent('SonoranRadio::API:EmergencyCall', enabled)

-- Event listener in a custom script
AddEventHandler('SonoranRadio::API:EmergencyCall', function(enabled)
    print(enabled) -- Boolean (is the call starting (true) or ending (false))
end)
```

```lua
-- Event sent from Sonoran Radio
TriggerEvent('SonoranRadio::API:EmergencyCallDispatcher', dispatcherNames)

-- Event listener in a custom script
AddEventHandler('SonoranRadio::API:EmergencyCallDispatcher', function(dispatcherNames)
    print(dispatcherNames) -- Table with strings for the dispatcher's names
    -- NOTE: does not receive `{}` if emergency call is ended
    -- (above event will receive that)
end)
```

## Signal Quality

You can read the player's signal quality and apply extra degradation from another client resource.

```lua
-- In your custom script
exports['sonoranradio']:getSignalQuality() -- raw infrastructure quality from 0.0 to 1.0
exports['sonoranradio']:getEffectiveSignalQuality() -- final quality after zones + extra degradation
exports['sonoranradio']:getExtraSignalDegradation() -- total extra degradation from third-party modifiers
```

### Forcing Extra Degradation

Use keyed modifiers so multiple resources can affect signal quality without overwriting each other.

```lua
-- Add 25% extra degradation from your resource
exports['sonoranradio']:setExtraSignalDegradation('my-resource', 0.25)

-- Reduce degradation by 10% for a temporary buff or item
exports['sonoranradio']:setExtraSignalDegradation('signal-booster', -0.10)

-- Clear your modifier when it is no longer needed
exports['sonoranradio']:clearExtraSignalDegradation('my-resource')
exports['sonoranradio']:clearExtraSignalDegradation('signal-booster')
```

The `amount` passed to `setExtraSignalDegradation(key, amount)` is clamped between `-1.0` and `1.0`.

* Positive values add more degradation.
* Negative values reduce degradation.
* Passing `0` or `nil` removes that key's modifier.

### Getting Signal Details

If you need the full breakdown of what the player is experiencing, use:

```lua
local signal = exports['sonoranradio']:getSignalQualityDetails()

print(signal.baseQuality) -- tower/rack/repeater quality before degradation
print(signal.zoneDegradation) -- active tunnel/polyzone degradation
print(signal.extraDegradation) -- third-party modifier total
print(signal.totalDegradation) -- final degradation after combining both
print(signal.effectiveQuality) -- final signal quality sent to the radio UI
print(signal.zoneName) -- current degradation zone name, or nil
```

## Panic Button

You can listen to or active the panic button with an API event

```lua
-- Activate the panic button
TriggerEvent('SonoranRadio::API:PanicButton')

-- Listen to the panic button
AddEventHandler('SonoranRadio::API:PanicButton', function(status)
    print(status) -- Boolean (whether the panic button is active or not)
    -- your code here
end)
```

## Set Display Name

Programmatically update a user's radio display name (Client Side)

{% hint style="warning" %}
The user must have permission to set their own display name
{% endhint %}

```lua
-- Set your current display name in the radio
exports['sonoranradio']:handleNameChange('my new name')
```

#### Guest Display Names

To customize guest display names without giving permission to change their own name, you can update the `Config.getGuestDisplayName`&#x20;

```lua
-- My Custom Guest Display Name Generator
-- Param `source`: The server id of the user logging in as guest
-- Returns string or nil (to use default)
Config.getGuestDisplayName = function(source)
    return ('I am logging in as a guest %s %s'):format(GetDisplayName(source), makeid())
end
```

## Tower Destruction

Get notified when a radio tower is destroyed or repaired

```lua
-- Event sent from Sonoran Radio (server-side)
TriggerEvent('SonoranRadio::API:TowerDishDestroyed', towerId, tower.DishStatus)

-- Event listener in a custom script
AddEventHandler('SonoranRadio::API:TowerDishDestroyed', function(playerSource, towerId, dishStatus) 
  print(playerSource) -- The player ID that destroyed the dish
  print(towerId) -- Numerical ID of the tower
  print(dishStatus) -- Array of statuses {'alive', 'alive', 'dead', 'alive'}
end)

-- Event sent from Sonoran Radio (server-side)
TriggerEvent('SonoranRadio::API:TowerRepaired', towerId, tower.DishStatus)

-- Event listener in a custom script
AddEventHandler('SonoranRadio::API:TowerRepaired', function(playerSource, towerId, dishStatus) 
  print(playerSource) -- The player ID that repaired the tower
  print(towerId) -- Numerical ID of the tower
  print(dishStatus) -- Array of statuses {'alive', 'alive', 'alive', 'alive'}
                    -- (NOTE: will always contain all 'alive')
end)
```

## Developer Events

This document lists the server-side events emitted for developer integrations. Payload sketches use Lua table syntax. Unless noted, timestamps are Unix seconds from `os.time()`. All payloads are sanitized to contain only primitive values and shallow tables.

### Common Payload Shapes

*   **Player Payload**

    ```
    {
        serverId = number,
        name = string?,
        identifiers = { string, ... }?,
        position = { x = number, y = number, z = number }?,
        heading = number?
    }
    ```

    Returned by `DeveloperEvents.playerContext`. `position`/`heading` are included when the underlying call requested coordinates.
*   **Dispatcher Payload**

    ```
    {
        serverId = number,
        name = string?,
        phoneNumber = string?,
        identifiers = { string, ... }?
    }
    ```

    Specialised player payload that also embeds the dispatcher’s lb-phone number when available.
*   **Callee Payload**

    ```
    {
        serverId = number?,
        name = string?,
        phoneNumber = string?,
        identifier = string?
    }
    ```

    Populated only when the lb-phone API exposes the remote party’s information.
*   **Static Jammer Payload**

    ```
    {
        id = string?,
        name = string?,
        note = string?,
        type = 'static' | 'handheld' | string,
        range = number?,
        strength = number?,
        active = boolean,
        temporary = boolean?,
        owner = number?,
        position = { x = number?, y = number?, z = number?, heading = number?, exact = boolean? }?
    }
    ```
*   **Handheld Jammer Payload**

    ```
    {
        id = string?,
        owner = number?,
        name = string?,
        range = number?,
        strength = number?,
        active = boolean
    }
    ```

### Dispatcher Redial Lifecycle

* `SonoranRadio::Developer:DispatcherRedial:Requested`
  * Fired when a dispatcher starts a redial request.
  * Payload: `dispatcher`, `context`
* `SonoranRadio::Developer:DispatcherRedial:Failed`
  * Emitted when a redial cannot be created (missing phone number, lb-phone offline, etc).
  * Payload: `dispatcher`, `context`, `reason`, `message`
* `SonoranRadio::Developer:DispatcherRedial:Started`
  * Indicates the lb-phone call was created successfully.
  * Payload: `dispatcher`, `context`, `callId`, `startedAt`
* `SonoranRadio::Developer:DispatcherRedial:Answered`
  * Emitted when the callee picks up.
  * Payload: `dispatcher`, `context`, `callId`, `callee?`, `answeredAt`, `call?`
* `SonoranRadio::Developer:DispatcherRedial:CancelRequested`
  * Fired as soon as the dispatcher manually cancels.
  * Payload: `dispatcher`, `context`, `callId`, `callee?`, `requestedAt`
* `SonoranRadio::Developer:DispatcherRedial:Ended`
  * Always emitted when the call fully terminates (hang-up, timeout, cancellation).
  * Payload: `dispatcher`, `context`, `callId`, `callee?`, `reason`, `startedAt`, `answeredAt?`, `endedAt`, `call?`

### Panic Button

* `SonoranRadio::Developer:Panic:Activated`
  * Fired when a user enables panic.
  * Payload:
    * `player` – player payload including coordinates/heading when available
    * `active` – always `true`
    * `updatedAt` – timestamp the server acknowledged the change
    * `metadata?` – sanitized metadata sent with the panic request (currently nil)
* `SonoranRadio::Developer:Panic:Cleared`
  * Emitted when panic is cleared by the user or implicitly (logout/cleanup).
  * Payload:
    * `player`
    * `active` – always `false`
    * `updatedAt`
    * `metadata?`
    * `reason?` – `'playerDropped'` when cleared because the player disconnected

### Radio State

* `SonoranRadio::Developer:RadioState:Updated`
  * Fired whenever a client publishes a new radio state snapshot.
  * Payload:
    * `player`
    * `state` – sanitized copy of the radio state table supplied by the client

### Jammer Lifecycle

* `SonoranRadio::Developer:Jammer:Spawned`
  * Static jammer placed via the build tools.
  * Payload: `player`, `jammer` (static payload), `metadata?`
* `SonoranRadio::Developer:Jammer:Moved`
  * Static/dynamic jammer repositioned.
  * Payload: `player`, `jammer`, `from?` (position), `to?` (position), `dynamic` (boolean)
* `SonoranRadio::Developer:Jammer:Deleted`
  * Jammer removed from the world.
  * Payload: `player`, `jammer`, `dynamic`
* `SonoranRadio::Developer:Jammer:PowerToggled`
  * Jammer power state flipped (static or dynamic).
  * Payload: `player`, `jammer`, `dynamic`
* `SonoranRadio::Developer:Jammer:HandheldActivated`
  * Handheld jammer equipped by a player.
  * Payload: `player`, `jammer` (handheld payload), `options?`
* `SonoranRadio::Developer:Jammer:HandheldDeactivated`
  * Handheld jammer unequipped or forcibly cleared.
  * Payload: `player`, `jammer` (handheld payload), `reason?` (`'playerDropped'` when cleanup triggered)
* `SonoranRadio::Developer:Jammer:HandheldPowerToggled`
  * Handheld jammer power state toggled while equipped.
  * Payload: `player`, `jammer`
* `SonoranRadio::Developer:Jammer:HandheldPlaced`
  * Equipped handheld placed on the ground as a temporary static jammer.
  * Payload: `player`, `handheld` (handheld payload prior to placement), `groundJammer` (static payload)
* `SonoranRadio::Developer:Jammer:HandheldDropped`
  * Handheld converted to a ground jammer via inventory drop recovery.
  * Payload: `player`, `handheld?`, `groundJammer`, `dropId?`
