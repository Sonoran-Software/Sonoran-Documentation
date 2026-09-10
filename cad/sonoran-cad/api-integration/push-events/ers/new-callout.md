---
description: >-
  This push event is sent when a new ERS callout request is made on the live
  map.
---

# New Callout

### EVENT\_NEW\_CALLOUT

```javascript
{
  "key": "YOUR_API_KEY", // Authenticate legitimate event traffic
  "type": "EVENT_NEW_CALLOUT",
  "data": {
    "callout": {
      "calloutLocations": [ // Single location object, Z must be dynamically set
        {
          "x": 1234,
          "y": 5678,
          "z": 0,
        }
      ],
      "pedWeaponData": ["weapon_unarmed"],
      "pedActionOnNoActionFound": "none", // none, flee, attack, surrender
      "pedChanceToFleeFromPlayer": 0, // 0-100
      "pedChanceToObtainWeapons": 0, // 0-100
      "pedChanceToAttackPlayer": 0, // 0-100
      "pedChanceToSurrender": 0, // 0-100
    }
  }
}
```
