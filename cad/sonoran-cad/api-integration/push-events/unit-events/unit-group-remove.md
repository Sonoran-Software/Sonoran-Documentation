---
description: This push event notifies your server when a unit is removed from a unit group.
---

# Unit Group Remove

## EVENT\_UNIT\_GROUP\_REMOVE POST

```javascript
{
    "key": "YOUR_API_KEY", // Authenticate legitimate event traffic
    "type": "EVENT_UNIT_GROUP_REMOVE",
    "data": {
        "identId": 1,
        "groupName": "Ladder 61"
    }
}
```
