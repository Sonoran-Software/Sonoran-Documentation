---
description: >-
  Easily view your API ID with a command, and check if a given API ID is linked
  to an account.
hidden: true
---

# Check API ID

{% hint style="info" %}
**This submodule has been merged into the SonoranCAD Core and no longer requires external configuration or setup**
{% endhint %}

## Usage

### Command

This submodule supplies the command `/apiid` which will print the player's primary identifier (the one they should use in Settings) to their console.

### Function

Callback output parameter: true/false if API ID exists.

```lua
cadApiIdExists("identifier_here", callback)
```

#### Example

```lua
cadApiIdExists("steam:1234567890", function(exists)
    if exists then
        print("API ID exists!")
    else
        print("API ID does not exist!")
    end
end)
```

### Event

This is a _server only_ event.

**Event Name:** SonoranCAD::apicheck:CheckPlayerLinked

**Response Event:** SonoranCAD::apicheck:CheckPlayerLinkedResponse

#### Example

```lua
-- Request
TriggerEvent("SonoranCAD::apicheck:CheckPlayerLinked", source, identifier)

-- Response
AddEventHandler("SonoranCAD::apicheck:CheckPlayerLinkedResponse", function(player, identifier, exists)
    print(("Player %s has API ID? %s"):format(player, exists))
end)
```
