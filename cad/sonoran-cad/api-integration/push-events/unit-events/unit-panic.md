---
description: This event is sent when a unit toggles their panic status.
---

# Unit Panic

### EVENT\_UNIT\_PANIC

```javascript
{
    "key": "YOUR_API_KEY", // Authenticate legitimate event traffic
    "type": "EVENT_UNIT_PANIC",
    "data": [
        {
            "identIds": [1, 2, 3], // Identifier IDs
            "isPanic": true
        }
    ]
}
```
