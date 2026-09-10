---
description: All websocket API calls require authentication prior to invoking functions.
---

# Authentication

## Websocket Authentication

### Authentication Method

#### **Method:**

```
authenticatev2
```

#### **Parameters:**

| Parameter     | Type              |
| ------------- | ----------------- |
| `communityId` | String            |
| `apiKey`      | String            |
| `serverId`    | Number (Optional) |

### Response

```
{ success: boolean, error: string, count: number }
```

### serverId

`serverId` is optional for websocket authentication.

Use it when you want this websocket connection to receive Sonoran CAD push events for a specific configured server. If provided, the `serverId` must match a valid server configured in your CAD.

If `serverId` is omitted, the websocket session can still call websocket API methods such as `unitLocation`, but it will not be used as a push event destination for a specific server.

### Auth JS example (Node.js) Requires:

**Add the Microsoft SignalR Library**

```
npm i @microsoft/signalr
```

<pre class="language-js"><code class="lang-js"><strong>// Import the signalr library for backend connection
</strong><strong>const signalR = require("@microsoft/signalr");
</strong>
// Establist the connection object
const connection = new signalR.HubConnectionBuilder()
  .withUrl("https://api.sonorancad.com/apiWsHub", {
    transport: signalR.HttpTransportType.WebSockets,
    skipNegotiation: true,
  })
  .withAutomaticReconnect()
  .build();

// Start the WSS connection
await connection.start();

// Replace community ID and API key
const auth = await connection.invoke("authenticatev2", "yourCommunityId", "yourApiKey", 1);
if (!auth?.success) {
  throw new Error(`Authentication failed: ${auth?.error || "unknown error"}`);
}
</code></pre>
