---
description: Receive Sonoran CAD push events over the websocket API.
---

# Push Events

The websocket API can receive Sonoran CAD push events without exposing a local HTTP listener. When a valid websocket session is active for the target `serverId`, Sonoran CAD sends push events to that socket first.

## How It Works

When your websocket client authenticates with a valid `serverId`, Sonoran CAD checks for an active websocket session for that exact community/server pair before sending a traditional push event HTTP `POST`.

If a matching websocket session exists:

* The push event is sent over the websocket connection.
* The legacy HTTP push event fallback is skipped.

If no matching websocket session exists:

* Sonoran CAD falls back to the existing HTTP push event delivery flow for that server IP/port.
* This fallback is useful for custom listeners or for servers that are not keeping an API websocket connection open.

## Requirements

* Authenticate over `/apiWsHub`
* Pass your `communityId`
* Pass your Sonoran CAD `apiKey`
* Pass the target `serverId` you want to receive push events for

## Incoming Event Name

Your websocket client should listen for:

```
pushEvent
```

## Payload Format

The `pushEvent` payload is the same JSON payload previously sent to local push event listeners over HTTP.

Example:

```json
{
  "key": "YOUR_API_KEY",
  "type": "EVENT_UNIT_STATUS",
  "data": {
    "units": []
  }
}
```

This means your existing push event parsing logic can usually be reused with minimal changes.

## Node.js Example

```js
const signalR = require("@microsoft/signalr");

const connection = new signalR.HubConnectionBuilder()
  .withUrl("https://api.sonorancad.com/apiWsHub", {
    transport: signalR.HttpTransportType.WebSockets,
    skipNegotiation: true,
  })
  .withAutomaticReconnect()
  .build();

connection.on("pushEvent", (payload) => {
  try {
    const event = typeof payload === "string" ? JSON.parse(payload) : payload;
    console.log("Received push event:", event.type, event.data);
  } catch (err) {
    console.error("Failed to parse push event payload:", err.message);
  }
});

await connection.start();

const auth = await connection.invoke(
  "authenticate",
  "yourCommunityId",
  "yourApiKey",
  1
);

if (!auth?.success) {
  throw new Error(`Authentication failed: ${auth?.error || "unknown error"}`);
}
```

## Notes

* Push event delivery over websocket is scoped to the authenticated `serverId`.
* If you operate multiple servers, create one websocket session per target `serverId`.
* Unit location updates continue to use the `unitLocation` websocket method separately from inbound `pushEvent` messages.
