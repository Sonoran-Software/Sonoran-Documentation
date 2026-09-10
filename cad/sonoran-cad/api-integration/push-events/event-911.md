---
description: >-
  This push event sends data when a new 911/emergency call is placed via API or
  in-CAD.
---

# Event 911

### EVENT\_911 POST

```javascript
{
    "key": "YOUR_API_KEY", // Authenticate legitimate event traffic
    "type": "EVENT_911",
    "data": [
        {
            "call": {
                "callId": 1234,
                "isEmergency": true, // Emergency or Civil
                "caller": "John Doe",
                "location": "1234 E Hawick Ave",
                "description": "This is a 911 call!"
            },
            "apiIds": ["Steam:1234", "11112222"], // User account's API ID
            "communityUserId": "license:abc123", // Linked in-game user identifier
            "metaData": {
                "someKey": "someValue" // OPTIONAL: metaData for API custom storage
            },
        }
    ]
}
```

#### API IDs

The API ID list will only be returned if the 911 call was placed via the CAD interface and not via an API call.

#### Community User ID

When the originating CAD account has a linked `communityUserId`, Sonoran CAD includes it in the push payload. This is the preferred field for modern in-game integrations because it matches the same identifier used by v2 account linking and unit-targeting endpoints.

For FiveM implementations, see [Map Players to CAD Users](../getting-started/setting-your-api-id.md) and the SonoranCADFiveM [LINKING\_V2.md](https://github.com/Sonoran-Software/SonoranCADFiveM/blob/master/sonorancad/LINKING_V2.md) example flow.
