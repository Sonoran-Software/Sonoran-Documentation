---
description: The TOGGLE_BODYCAM push event is sent when an a bodycam state is toggled.
---

# Toggle Bodycam

## TOGGLE\_BODYCAM Post

{% hint style="warning" %}
This push event is not sent triggered via the API.\
API triggers should be listened to locally on the game server
{% endhint %}

```javascript
{
  "key": "YOUR_API_KEY", // Authenticate legitimate event traffic
  "type": "EVENT_DISPATCH_TOGGLE_BODYCAM",
  "data": {
    "ident", "1",
    "state", true
  }
}
```

The `ident` is a unique number specifying the a unit "identifier" being detached from a call.

The `state` represents the requested toggle state of the unit's bodycam with `true` being on and `false` being off.
