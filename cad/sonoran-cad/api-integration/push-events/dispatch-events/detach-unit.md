---
description: >-
  The EVENT_UNIT_DETACH push event is sent when an identifier/unit is attached
  to a new call.
---

# Detach Unit

## EVENT\_DISPATCH\_UNIT\_DETACH Post

{% hint style="warning" %}
This push event is not sent triggered via the API.\
API triggers should be listened to locally on the game server
{% endhint %}

```javascript
{
  "key": "YOUR_API_KEY", // Authenticate legitimate event traffic
  "type": "EVENT_DISPATCH_UNIT_DETACH",
  "data": {
    "eventOriginIdent": 123, // Identifier that created/caused this event
    "ident": 1,              // (Option 1) Single Identifier/Unit ID
    "idents": [123, 456],    // (Option 2) Multiple Identifiers/Unit IDs
    "callId": 123        // Dispatch Call ID
  }
}
```

The `ident` is a unique number specifying the a unit "identifier" being detached from a call.

The `callId` represents the specific dispatch call they are being removed from.
