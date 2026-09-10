---
description: This push event is sent whenever a unit logs into the CAD.
---

# Unit Logoff

### EVENT\_UNIT\_LOGOUT

```javascript
{
    "key": "YOUR_API_KEY", // Authenticate legitimate event traffic
    "type": "EVENT_UNIT_LOGOUT",
    "data": [
        {
            "identId": 1, // Identifier ID
        }
    ]
}
```

### Enumeration Values

Sonoran CAD uses integer enumeration values for the unit `STATUS` field. See the tables below for more information. These values reflect the default [unit status](../../../tutorials/customization/unit-status-codes.md) options.

| Integer (Enumeration) Value | Status Description |
| --------------------------- | ------------------ |
| 0                           | UNAVAILABLE        |
| 1                           | BUSY               |
| 2                           | AVAILABLE          |
| 3                           | ENROUTE            |
| 4                           | ON\_SCENE          |
