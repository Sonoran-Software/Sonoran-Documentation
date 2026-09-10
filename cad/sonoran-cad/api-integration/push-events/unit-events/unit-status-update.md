---
description: This push event is sent whenever a unit's status call is changed.
---

# Unit Status Update

### EVENT\_UNIT\_STATUS

```javascript
{
    "key": "YOUR_API_KEY", // Authenticate legitimate event traffic
    "type": "EVENT_UNIT_STATUS",
    "data": [
        {
            "identIds": 1,
            "status": 0
        }
    ]
}
```

### Ident Field

The `identIds` array contains the unit identifier ID(s).

### Enumeration Values

Sonoran CAD uses integer enumeration values for the unit `STATUS` field. See the tables below for more information. These values reflect the default [unit status](../../../tutorials/customization/unit-status-codes.md) options.

| Integer (Enumeration) Value | Status Description |
| --------------------------- | ------------------ |
| 0                           | UNAVAILABLE        |
| 1                           | BUSY               |
| 2                           | AVAILABLE          |
| 3                           | ENROUTE            |
| 4                           | ON\_SCENE          |
