---
description: This push event is sent whenever a unit logs into the CAD.
---

# Unit Login

### EVENT\_UNIT\_LOGIN

```javascript
{
    "key": "YOUR_API_KEY", // Authenticate legitimate event traffic
    "type": "EVENT_UNIT_LOGIN",
    "data": [
        {
            "unit":
            {
                "id": -1,
                "accId": "123-456-7890", // Account UUID
                "status": 0, // See UNIT_STATUS Enum
                "isPanic": false, // PANIC State
                "location": "1234 E. Test Ave",
                "aop": "South District",
                "data": {
                     "apiIds": [
                         "STEAM:1234", // API ID - Typically Steam Hex
                     ],
                     "unitNum": "A-10",
                     "name": "Brian Sosnowski",
                     "district": "Maricopa County",
                     "department": "MCSO",
                     "subdivision": "Speed Enforcement",
                     "rank": "CPT",
                     "group": "CAR 51", // Name of unit group
                     "page": 0 // Police
                }
            },
            "isDispatch": false,
            "selfDispatch": false
        }
    ]
}
```

### Enumeration Values

#### Unit Status

Sonoran CAD uses integer enumeration values for the unit `STATUS` field. See the tables below for more information. These values reflect the default [unit status](../../../tutorials/customization/unit-status-codes.md) options.

| Integer (Enumeration) Value | Status Description |
| --------------------------- | ------------------ |
| 0                           | UNAVAILABLE        |
| 1                           | BUSY               |
| 2                           | AVAILABLE          |
| 3                           | ENROUTE            |
| 4                           | ON\_SCENE          |

#### Unit Page

The unit's `data.page` property reflects what page in the CAD the unit is viewing.

| Integer (Enumeration) Value | Description |
| --------------------------- | ----------- |
| 0                           | POLICE      |
| 1                           | FIRE        |
| 2                           | EMS         |
| 3                           | DISPATCH    |
