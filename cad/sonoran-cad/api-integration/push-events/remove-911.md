---
description: This push event sends data when a 911 call is removed.
---

# Remove 911

### EVENT\_REMOVE\_911 POST

```javascript
{
    "key": "YOUR_API_KEY", // Authenticate legitimate event traffic
    "type": "EVENT_REMOVE_911",
    "data": [
        {
            "callIds": [1234, 5678]
        }
    ]
```
