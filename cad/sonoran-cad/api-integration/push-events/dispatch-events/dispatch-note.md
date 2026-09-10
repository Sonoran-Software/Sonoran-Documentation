---
description: This push event sends data when a note is added to an existing dispatch call.
---

# Dispatch Note

### EVENT\_DISPATCH\_NOTE POST

{% hint style="warning" %}
This push event is not sent triggered via the API.\
API triggers should be listened to locally on the game server.
{% endhint %}

```javascript
{
    "key": "YOUR_API_KEY", // Authenticate legitimate event traffic
    "type": "EVENT_DISPATCH_NOTE",
    "data": {
        "callId": -1,
        "note": {
            "time": "12:00:00",
            "label": "A-10",
            "type": "text",
            "content": "Some message here!"
        }
    }
}
```
