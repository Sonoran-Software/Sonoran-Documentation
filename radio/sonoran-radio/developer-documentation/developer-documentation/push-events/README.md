---
description: Learn more about our Backend -> Game Server push events!
---

# Push Events

## Push Event Address

Push events are sent to your community's `pushUrl` (full IP/port) set in the [set-server-ip](../api-endpoints/#set-server-ip) API endpoint. This endpoint should be called on startup.

Push events can be authenticated by comparing the event's `id` and `key` to your community ID and API key.
