---
description: This push event notifies your server when a unit is added to a unit group.
---

# Unit Group Add

## EVENT\_UNIT\_GROUP\_ADD POST

```javascript
{
    "key": "YOUR_API_KEY", // Authenticate legitimate event traffic
    "type": "EVENT_UNIT_GROUP_ADD",
    "data": {
        "identId": 1,
        "identIds": [1, 2, 3], // OPTIONAL: Only sent when a unit group is having the name updated
        "groupName": "Ladder 61"
    }
}
```
