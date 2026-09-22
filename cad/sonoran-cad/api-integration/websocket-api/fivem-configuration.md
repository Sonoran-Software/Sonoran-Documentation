---
description: Reload saved FiveM settings when an administrator applies configuration.
---

# FiveM Configuration

`EVENT_FIVEM_CONFIGURATION` tells a connected server to fetch and apply its saved configuration. CAD emits it when an administrator selects **Apply and restart** under **In-Game Integration > FiveM**, after verifying the saved revision and catalog fingerprint. **Save** alone does not emit this event.

## Delivery

Authenticate a websocket session on `/apiWsHub` with the community ID, API key and target `serverId`, and listen for `pushEvent`. The event is delivered as a JSON string to sessions authenticated for that community/server pair. Parse the string before accessing its fields.

This event is **websocket-only**: it has no legacy HTTP push fallback and is not queued for disconnected servers. If the server is disconnected, reconnect and apply again, or restart the resource so it fetches the saved settings on startup. Successful dispatch means a websocket message was sent, not that the resource finished restarting.

## Payload

```json
{
  "type": "EVENT_FIVEM_CONFIGURATION",
  "data": {
    "serverId": 1,
    "revision": 4,
    "schemaVersion": 1,
    "templateRevision": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
  }
}
```

The fingerprint above is illustrative. The payload contains no configuration values or API key.

| Property | Meaning |
| --- | --- |
| `serverId` | Server whose configuration should be applied. |
| `revision` | Saved configuration revision to fetch. |
| `schemaVersion` | Required wire protocol version; currently `1`. |
| `templateRevision` | SHA-256 fingerprint of the catalog used for this apply request. |

## Resource behavior

The official SonoranCADFiveM resource handles this event automatically:

1. Check the server ID and supported schema version, and ignore unchanged or obsolete notifications. A changed catalog fingerprint can require a reload even at the same saved revision.
2. [Fetch configuration](../api-endpoints-v2/general/configuration/get-fivem-configuration.md) and verify that the returned revision and catalog fingerprint match the event before scheduling a restart. If verification fails, the restart is cancelled; use Apply again in CAD.
3. Restart the `sonorancad` resource after five seconds. The resource fetches configuration again during startup, so a later save can become the revision loaded at startup.
4. Load the resolved settings and [acknowledge the loaded revision](../api-endpoints-v2/general/configuration/acknowledge-fivem-configuration.md). A `409` acknowledgement indicates that the saved revision has changed since it was loaded; the administrator can apply the newer saved settings.

Restarting the resource can interrupt active player integrations. The CAD apply action presents a restart warning. Custom consumers should validate the event and fetched configuration before applying settings, and acknowledge only what they actually loaded. Do not treat receiving an event as an acknowledgement.

The fetch endpoint returns resolved JSON data. It does not provide Lua source to execute. Dynamic maps, numeric keys, vectors and approved named hooks require the resource's configuration loader when constructing runtime Lua settings.
