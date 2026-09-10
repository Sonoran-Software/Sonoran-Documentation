---
description: Retrieve active, emergency, and closed calls for a server.
---

# Get Calls

<mark style="color:green;">`GET`</mark> `https://api.sonorancad.com/v2/emergency/servers/{serverId}/calls`

> **Rate limit:** `5 requests per minute`\
> Authenticated v2 endpoints are rate limited per API key rather than per IP address.

Retrieve dispatch calls, emergency calls, and recent closed calls.

## Path Parameters

| Name       | Type    | Description                       |
| ---------- | ------- | --------------------------------- |
| `serverId` | integer | Configured Sonoran CAD server ID. |

## Query Parameters

| Name           | Type    | Default | Description                                          |
| -------------- | ------- | ------- | ---------------------------------------------------- |
| `closedLimit`  | integer | `10`    | Maximum number of closed dispatch calls returned.    |
| `closedOffset` | integer | `0`     | Number of closed calls to skip.                      |
| `type`         | integer | `100`   | Call table type filter. See `CALL_TABLE_TYPE` below. |

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

local response = sonoran.cad:getCallsV2({
    serverId = 1,
    closedLimit = 10,
    closedOffset = 0,
    type = 100,
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
local response = cad:getCallsV2({
    serverId = 1,
    closedLimit = 10,
    closedOffset = 0,
    type = 100,
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

  const response = await instance.cad.getCallsV2({
    serverId: 1,
    closedLimit: 10,
    closedOffset: 0,
    type: 100,
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

response = instance.cad.getCallsV2({
    "serverId": 1,
    "closedLimit": 10,
    "closedOffset": 0,
    "type": 100,
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

var response = await sonoran.Cad.getCallsV2(new GetCallsV2Query
{
    ServerId = 1,
    ClosedLimit = 10,
    Type = "dispatch"
});

Console.WriteLine(response.success);
Console.WriteLine(response.data);
```
{% endtab %}

{% tab title="OpenAPI" %}
Import this YAML into Postman with **Import -> Raw text** to create a single-endpoint request collection for this route.

```yaml
openapi: "3.0.3"
info:
  title: "Sonoran CAD v2 - Get Calls"
  version: "1.0.0"
  description: "Retrieve active, emergency, and closed calls for a server."
servers:
  -
    url: "https://api.sonorancad.com"
paths:
  /v2/emergency/servers/{serverId}/calls:
    get:
      summary: "Get Calls"
      operationId: "getCalls"
      responses:
        200:
          description: "Successful response"
          content:
            application/json:
              schema:
                type: "object"
              example:
                ActiveCalls:
                  callId: 501
                  origin: 0
                  status: 1
                  priority: 1
                  block: "100"
                  address: "Mission Row"
                  postal: "9001"
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
                    x: "425.1"
                    y: "-979.2"
                    z: "30.7"
                    radius: "75"
                  updated: "2026-04-08T21:30:00Z"
                EmergencyCalls:
                  callId: 302
                  isEmergency: true
                  caller: "Jane Doe"
                  location: "Innocence Blvd"
                  description: "Medical emergency reported."
                  metaData:
                    phone: "555-0100"
                    x: "425.1"
                    y: "-979.2"
                    z: "30.7"
                    postal: "9001"
                  updated: "2026-04-08T21:31:00Z"
                ClosedCalls:
                  callId: 480
                  origin: 0
                  status: 2
                  priority: 1
                  block: "100"
                  address: "Mission Row"
                  postal: "9001"
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
                    x: "425.1"
                    y: "-979.2"
                    z: "30.7"
                    radius: "75"
                  updated: "2026-04-08T21:30:00Z"
                ClosedCallCount: 18
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
          description: "Maximum number of closed dispatch calls returned."
          name: "closedLimit"
          in: "query"
          schema:
            type: "integer"
          required: true
        -
          description: "Number of closed calls to skip."
          name: "closedOffset"
          in: "query"
          schema:
            type: "integer"
          required: true
        -
          description: "Call table type filter. See `CALL_TABLE_TYPE` below."
          name: "type"
          in: "query"
          schema:
            type: "integer"
          required: true
      security:
        -
          bearerAuth:
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
curl --request GET \
  --url "https://api.sonorancad.com/v2/emergency/servers/1/calls?closedLimit=10&closedOffset=0&type=100" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json"
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
{
  "ActiveCalls": [
    {
      "callId": 501,
      "origin": 0,
      "status": 1,
      "priority": 1,
      "block": "100",
      "address": "Mission Row",
      "postal": "9001",
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
        "x": "425.1",
        "y": "-979.2",
        "z": "30.7",
        "radius": "75"
      },
      "updated": "2026-04-08T21:30:00Z"
    }
  ],
  "EmergencyCalls": [
    {
      "callId": 302,
      "isEmergency": true,
      "caller": "Jane Doe",
      "location": "Innocence Blvd",
      "description": "Medical emergency reported.",
      "metaData": {
        "phone": "555-0100",
        "x": "425.1",
        "y": "-979.2",
        "z": "30.7",
        "postal": "9001"
      },
      "updated": "2026-04-08T21:31:00Z"
    }
  ],
  "ClosedCalls": [
    {
      "callId": 480,
      "origin": 0,
      "status": 2,
      "priority": 1,
      "block": "100",
      "address": "Mission Row",
      "postal": "9001",
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
        "x": "425.1",
        "y": "-979.2",
        "z": "30.7",
        "radius": "75"
      },
      "updated": "2026-04-08T21:30:00Z"
    }
  ],
  "ClosedCallCount": 18
}
```

## Enumeration Values

### CALL\_TABLE\_TYPE

| Value | Description      |
| ----- | ---------------- |
| `0`   | `DISPATCH_CALL`  |
| `1`   | `EMERGENCY_CALL` |
| `100` | `SEARCH_ALL`     |

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
