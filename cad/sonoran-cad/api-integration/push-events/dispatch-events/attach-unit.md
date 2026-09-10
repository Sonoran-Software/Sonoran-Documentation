---
description: >-
  The EVENT_UNIT_ATTACH push event is sent when an identifier/unit is attached
  to a new call.
---

# Attach Unit

## EVENT\_DISPATCH\_UNIT\_ATTACH Post

{% hint style="warning" %}
This push event is not sent triggered via the API.\
API triggers should be listened to locally on the game server.
{% endhint %}

```javascript
{
  "key": "YOUR_API_KEY", // Authenticate legitimate event traffic
  "type": "EVENT_DISPATCH_UNIT_ATTACH",
  "data": {
    "eventOriginIdent": 123, // Identifier that created/caused this event
    "ident": 1,              // (Option 1) Single Identifier/Unit ID
    "idents": [123, 456],    // (Option 2) Multiple Identifiers/Unit IDs
    "callId": 111            // Dispatch Call ID
  }
}
        
```

### Identifier Field Options

The `ident` is a unique number specifying the a unit "identifier" being attached to a call. This field may be replaced with the `idents` array, specifying multiple identifiers being attached to the call at once.
