---
description: >-
  Sonoran CAD pushes event data to your community for further integration
  possibilities. Learn more below!
---

# Push Events

## Configuring your Listener

Sonoran CAD defaults to websocket delivery when an active [API websocket session](../websocket-api/push-events.md) exists for the target `serverId`. For the [FiveM resource](../../integration-plugins/in-game-integration/fivem-installation/), this socket is setup automatically.

If no matching websocket session exists, Sonoran CAD falls back to `http://ip:gameport/sonorancad/event` **utilizing your existing game port**.

Server IP and port configuration is automatically added by the [FiveM resource](../../integration-plugins/in-game-integration/fivem-installation/) on startup for HTTP fallback compatibility.

You can also [manually configure the server information in the admin panel](../../tutorials/customization/configuring-multiple-servers.md).
