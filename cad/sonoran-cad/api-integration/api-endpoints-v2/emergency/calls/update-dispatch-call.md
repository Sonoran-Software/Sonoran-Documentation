---
description: Update editable fields on an existing dispatch call.
---

# Update Dispatch Call

<mark style="color:yellow;">`PATCH`</mark> `https://api.sonorancad.com/v2/emergency/servers/{serverId}/dispatch-calls/{callId}`

> **Rate limit:** `10 requests per minute`\
> Authenticated v2 endpoints are rate limited per API key rather than per IP address.

Update one or more editable fields on an existing dispatch call.

## Path Parameters

| Name       | Type    | Description                       |
| ---------- | ------- | --------------------------------- |
| `serverId` | integer | Configured Sonoran CAD server ID. |
| `callId`   | integer | Dispatch or 911 call ID.          |

## Request Body

Send only the fields you want to update.

If you provide `metaData`, it replaces the stored object for the call. Include existing keys you want to keep. Pass `x` and `y` to update the call's live map position; `z` and `radius` are also commonly used for map workflows.

```json
{
  "status": 1,
  "postal": "9002",
  "trackPrimary": true,
  "metaData": {
    "source": "integration",
    "x": "430.5",
    "y": "-982.1",
    "z": "31.0",
    "radius": "100"
  }
}
```

## Example Request

{% tabs %}
{% tab title="Sonoran.lua" %}
```lua
-- luarocks install sonoran.lua
-- For SonoranCADFiveM in-game usage, see the SonoranCADFiveM tab for the export-based client.
local Sonoran = require("sonoran")

local sonoran = Sonoran.createClient({
  product = Sonoran.productEnums.CAD,
  communityId = "YOUR_COMMUNITY_ID",
  apiKey = "YOUR_API_KEY",
  defaultServerId = 1
})

local response = sonoran.cad:updateDispatchCallV2(501, {
    serverId = 1,
    description = 'Caller confirmed the fire has spread to the garage.',
    postal = '100',
    metaData = {
      source = 'integration',
      x = '430.5',
      y = '-982.1',
      z = '31.0',
      radius = '100',
    },
  })

-- Inspect response.success, response.data, or response.reason as needed.
print(response.success)
```
{% endtab %}

{% tab title="SonoranCADFiveM" %}
Use this tab only when calling the v2 API from the server side of an in-game FiveM resource.

* **Sonoran.lua** and **Sonoran.js:** use the `sonorancad` export to get the ready CAD client.
* **Sonoran.Net:** FiveM exports do not return a .NET client. Read the Sonoran CAD convars and create a fresh client.
* **Sonoran.py:** FiveM does not run Python resources; use the Python tab for external integrations.

The API key is stored in `sonoran_apiKey` as a protected FiveM convar. FiveM restricts a convar after `add_convar_permission` is configured, so only explicitly permitted resources can read it. Grant another resource access with `add_convar_permission your-resource-name read sonoran_apiKey`. If you change the API key in `config.json`, fully restart the `sonorancad` resource before reading the updated convar value.

**Sonoran.lua**

```lua
local cad = exports["sonorancad"]:getCadClient()
```

**Sonoran.js**

```javascript
const cad = exports["sonorancad"].getCadClient();
```

**Sonoran.Net**

```csharp
// dotnet add package Sonoran.Net
using CitizenFX.Core.Native;
using Sonoran;

var communityId = API.GetConvar("sonoran_communityID", "");
var apiKey = API.GetConvar("sonoran_apiKey", "");
var serverIdRaw = API.GetConvar("sonoran_serverId", "1");
var serverId = int.TryParse(serverIdRaw, out var parsedServerId) ? parsedServerId : 1;

using var sonoran = new SonoranClient(new SonoranClientOptions
{
    product = SonoranProduct.CAD,
    communityId = communityId,
    apiKey = apiKey,
    defaultServerId = serverId
});
```

After getting the Lua export client:

```lua
local response = cad:updateDispatchCallV2(501, {
    serverId = 1,
    description = 'Caller confirmed the fire has spread to the garage.',
    postal = '100',
    metaData = {
      source = 'integration',
      x = '430.5',
      y = '-982.1',
      z = '31.0',
      radius = '100',
    },
  })

-- Inspect response.success, response.data, or response.reason as needed.
print(response.success)
```
{% endtab %}

{% tab title="Sonoran.js" %}
```javascript
// npm install @sonoransoftware/sonoran.js
// For SonoranCADFiveM in-game usage, see the SonoranCADFiveM tab for the export-based client.
const Sonoran = require('@sonoransoftware/sonoran.js');

(async () => {
  const instance = new Sonoran.Instance({
    communityId: 'YOUR_COMMUNITY_ID',
    apiKey: 'YOUR_API_KEY',
    product: Sonoran.productEnums.CAD,
    serverId: 1,
  });

  const response = await instance.cad.updateDispatchCallV2(501, {
    serverId: 1,
    description: 'Caller confirmed the fire has spread to the garage.',
    postal: '100',
    metaData: {
      source: 'integration',
      x: '430.5',
      y: '-982.1',
      z: '31.0',
      radius: '100',
    },
  });
  console.log(response);
})();
```
{% endtab %}

{% tab title="Sonoran.py" %}
```python
# pip install Sonoran.py
# Sonoran.py is for external Python integrations; FiveM resources should use the SonoranCADFiveM tab.
from sonoran import Instance, productEnums

instance = Instance(
    apiKey="YOUR_API_KEY",
    communityId="YOUR_COMMUNITY_ID",
    product=productEnums.CAD,
    serverId=1,
)

response = instance.cad.updateDispatchCallV2(501, {
    "serverId": 1,
    "description": 'Caller confirmed the fire has spread to the garage.',
    "postal": '100',
    "metaData": {
      "source": 'integration',
      "x": '430.5',
      "y": '-982.1',
      "z": '31.0',
      "radius": '100',
    },
  })

print(response.success)
print(response.data if response.success else response.reason)
```
{% endtab %}

{% tab title="Sonoran.Net" %}
```csharp
// dotnet add package Sonoran.Net
// For SonoranCADFiveM in-game usage, see the SonoranCADFiveM tab; .NET creates a fresh client from convars.
using Sonoran;

using var sonoran = new SonoranClient(new SonoranClientOptions
{
    product = SonoranProduct.CAD,
    communityId = "YOUR_COMMUNITY_ID",
    apiKey = "YOUR_API_KEY",
    defaultServerId = 1
});

var response = await sonoran.Cad.updateDispatchCallV2(
    501,
    new UpdateDispatchCallV2Request
    {
        ServerId = 1,
        Priority = 2,
        Postal = "9002",
        Description = "Fire has extended to the roof.",
        TrackPrimary = true
    }
);

Console.WriteLine(response.success);
Console.WriteLine(response.data);
```
{% endtab %}

{% tab title="OpenAPI" %}
Import this YAML into Postman with **Import -> Raw text** to create a single-endpoint request collection for this route.

```yaml
openapi: "3.0.3"
info:
  title: "Sonoran CAD v2 - Update Dispatch Call"
  version: "1.0.0"
  description: "Update editable fields on an existing dispatch call."
servers:
  -
    url: "https://api.sonorancad.com"
paths:
  /v2/emergency/servers/{serverId}/dispatch-calls/{callId}:
    patch:
      summary: "Update Dispatch Call"
      operationId: "updateDispatchCall"
      responses:
        200:
          description: "Successful response"
          content:
            application/json:
              schema:
                type: "object"
              example:
                callId: 501
                origin: 0
                status: 1
                priority: 1
                block: "100"
                address: "Mission Row"
                postal: "9002"
                title: "Armed Robbery"
                code: "211"
                primary: 12
                trackPrimary: false
                description: "Clerk reports a firearm."
                notes:
                  time: "2026-04-08T21:30:00Z"
                  label: "Sonoran CAD"
                  type: "text"
                  content: "Caller is hiding."
                idents:
                  - 12
                  - 18
                metaData:
                  source: "integration"
                  x: "430.5"
                  y: "-982.1"
                  z: "31.0"
                  radius: "100"
                updated: "2026-04-08T21:30:00Z"
      parameters:
        -
          description: "Configured Sonoran CAD server ID."
          name: "serverId"
          in: "path"
          schema:
            type: "integer"
          example: 1
          required: true
        -
          description: "Dispatch or 911 call ID."
          name: "callId"
          in: "path"
          schema:
            type: "integer"
          required: true
      security:
        -
          bearerAuth:
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: "object"
            example:
              status: 1
              postal: "9002"
              trackPrimary: true
              metaData:
                source: "integration"
                x: "430.5"
                y: "-982.1"
                z: "31.0"
                radius: "100"
components:
  securitySchemes:
    bearerAuth:
      type: "http"
      scheme: "bearer"
      bearerFormat: "JWT"
```
{% endtab %}

{% tab title="cURL" %}
```bash
curl --request PATCH \
  --url "https://api.sonorancad.com/v2/emergency/servers/1/dispatch-calls/501" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
  "status": 1,
  "postal": "9002",
  "trackPrimary": true,
  "metaData": {
    "source": "integration",
    "x": "430.5",
    "y": "-982.1",
    "z": "31.0",
    "radius": "100"
  }
}'
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
{
  "callId": 501,
  "origin": 0,
  "status": 1,
  "priority": 1,
  "block": "100",
  "address": "Mission Row",
  "postal": "9002",
  "title": "Armed Robbery",
  "code": "211",
  "primary": 12,
  "trackPrimary": false,
  "description": "Clerk reports a firearm.",
  "notes": [
    {
      "time": "2026-04-08T21:30:00Z",
      "label": "Sonoran CAD",
      "type": "text",
      "content": "Caller is hiding."
    }
  ],
  "idents": [
    12,
    18
  ],
  "metaData": {
    "source": "integration",
    "x": "430.5",
    "y": "-982.1",
    "z": "31.0",
    "radius": "100"
  },
  "updated": "2026-04-08T21:30:00Z"
}
```

## Enumeration Values

### CALL\_STATUS

| Value | Description |
| ----- | ----------- |
| `0`   | `PENDING`   |
| `1`   | `ACTIVE`    |
| `2`   | `CLOSED`    |

### CALL\_ORIGIN

| Value | Description      |
| ----- | ---------------- |
| `0`   | `RADIO_DISPATCH` |
| `1`   | `SELF_INITIATED` |
