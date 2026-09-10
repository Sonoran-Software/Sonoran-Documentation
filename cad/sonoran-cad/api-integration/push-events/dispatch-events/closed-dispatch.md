---
description: >-
  The dispatch event sends a notice to your community when a dispatch call is
  closed.
---

# Closed Dispatch

### EVENT\_DISPATCH\_CLOSED POST

{% hint style="warning" %}
This push event is not sent triggered via the API.\
API triggers should be listened to locally on the game server.
{% endhint %}

```javascript
{
    "key": "YOUR_API_KEY", // Authenticate legitimate event traffic
    "type": "EVENT_DISPATCH_CLOSED",
    "data": {
        "eventOriginIdent": 123, // Identifier that created/caused this event
        "callIds": [1234, 5678]
    }
}
```
