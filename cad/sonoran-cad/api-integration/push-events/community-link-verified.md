---
description: This push event is sent when a player completes a community link flow.
---

# Community Link Verified

### EVENT\_COMMUNITY\_LINK\_VERIFIED

This push event is sent when a player completes the CAD link flow created by [Create Community Link](../api-endpoints-v2/general/accounts/create-community-link.md).

Sonoran CAD prefers websocket delivery first when an authenticated websocket session is active for the target `serverId`. If no matching websocket session exists, it falls back to the standard local HTTP push event listener.

```javascript
{
  "key": "YOUR_API_KEY", // Authenticate legitimate event traffic
  "type": "EVENT_COMMUNITY_LINK_VERIFIED",
  "data": {
    "communityUserId": "license:abc123",
    "accountUuid": "00000000-0000-0000-0000-000000000000"
  }
}
```

Use `communityUserId` to match the active in-game linking session and mark that player as linked immediately.

If you need to verify the current link state on demand instead of waiting for an event, use [Check Community Link](../api-endpoints-v2/general/accounts/check-community-link.md).
