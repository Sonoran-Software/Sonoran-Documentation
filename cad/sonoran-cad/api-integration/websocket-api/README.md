---
description: >-
  Access the Sonoran CAD API via WSS to reduce authentication overhead for
  frequent API calls.
---

# Websocket API

Use the websocket API for persistent, low-overhead integration traffic.

For frequent live-map location updates, prefer the websocket API over the HTTP v2 endpoint:

* Websocket `unitLocation` updates can be sent every `200ms` minimum. In practice, sending every `250ms` is a safe default.
* HTTP v2 `PATCH /v2/emergency/servers/{serverId}/unit-locations` is rate limited to `12 requests per minute`, which is effectively one request every `5 seconds`.

Current websocket API features include:

* Authenticating once and reusing the session for repeated calls
* Sending frequent `unitLocation` updates for the live map
* Receiving Sonoran CAD `pushEvent` messages for a specific `serverId`, including normal push-event traffic before HTTP listener fallback is used

## Pages

* [Authentication](authentication.md)
* [Unit Locations](unit-locations.md)
* [Push Events](push-events.md)
