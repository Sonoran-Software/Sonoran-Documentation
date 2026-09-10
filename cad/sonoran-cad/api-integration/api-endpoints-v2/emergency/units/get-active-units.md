---
description: Retrieve active emergency units for a configured server.
---

# Get Active Units

<mark style="color:green;">`GET`</mark> `https://api.sonorancad.com/v2/emergency/servers/{serverId}/units`

> **Rate limit:** `3 requests per minute`\
> Authenticated v2 endpoints are rate limited per API key rather than per IP address.

Retrieve active units for the specified CAD server.

## Path Parameters

| Name       | Type    | Description                       |
| ---------- | ------- | --------------------------------- |
| `serverId` | integer | Configured Sonoran CAD server ID. |

## Query Parameters

| Name             | Type    | Default | Description                                  |
| ---------------- | ------- | ------- | -------------------------------------------- |
| `includeOffline` | boolean | `false` | Include offline identifiers in the response. |
| `onlyUnits`      | boolean | `true`  | When `true`, hides active dispatchers.       |
| `limit`          | integer | `100`   | Maximum number of rows returned.             |
| `offset`         | integer | `0`     | Number of rows to skip.                      |

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

local response = sonoran.cad:getUnitsV2({
    serverId = 1,
    includeOffline = false,
    onlyUnits = true,
    limit = 100,
    offset = 0,
  })

-- Inspect response.success, response.data, or response.reason as needed.
print(response.success)
```
{% endtab %}

{% tab title="SonoranCADFiveM" %}
Use this tab only when calling the v2 API from the server side of an in-game FiveM resource.

For in-game resources that only need current active CAD units, use SonoranCADFiveM's [`GetUnitCache`](../../../../integration-plugins/in-game-integration/framework-development-documentation/server-functions.md#getunitcache) export instead of polling this endpoint. The export reads the local real-time unit cache, supports callback-style usage from other CFX runtimes, and is not limited by this endpoint's API rate limit.

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
local response = cad:getUnitsV2({
    serverId = 1,
    includeOffline = false,
    onlyUnits = true,
    limit = 100,
    offset = 0,
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

  const response = await instance.cad.getUnitsV2({
    serverId: 1,
    includeOffline: false,
    onlyUnits: true,
    limit: 100,
    offset: 0,
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

response = instance.cad.getUnitsV2({
    "serverId": 1,
    "includeOffline": False,
    "onlyUnits": True,
    "limit": 100,
    "offset": 0,
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

var response = await sonoran.Cad.getUnitsV2(new GetUnitsV2Query
{
    ServerId = 1,
    OnlyUnits = true,
    IncludeOffline = false
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
  title: "Sonoran CAD v2 - Get Active Units"
  version: "1.0.0"
  description: "Retrieve active emergency units for a configured server."
servers:
  -
    url: "https://api.sonorancad.com"
paths:
  /v2/emergency/servers/{serverId}/units:
    get:
      summary: "Get Active Units"
      operationId: "getActiveUnits"
      responses:
        200:
          description: "Successful response"
          content:
            application/json:
              schema:
                type: "object"
              example:
                id: 12
                accId: "00000000-0000-0000-0000-000000000000"
                status: 3
                isPanic: false
                location: "Mission Row PD"
                coordinates:
                  x: 123.45
                  y: -456.78
                  z: 32.1
                  w: 180.0
                aop: "Los Santos"
                data:
                  unitNum: "A-10"
                  name: "John Doe"
                  district: "Los Santos"
                  department: "LSPD"
                  subdivision: "Patrol"
                  rank: "Officer"
                  group: "CAR-51"
                  page: 0
                  communityUserId: "license:abc123"
                isDispatch: false
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
          description: "Include offline identifiers in the response."
          name: "includeOffline"
          in: "query"
          schema:
            type: "boolean"
          required: true
        -
          description: "When `true`, hides active dispatchers."
          name: "onlyUnits"
          in: "query"
          schema:
            type: "boolean"
          required: true
        -
          description: "Maximum number of rows returned."
          name: "limit"
          in: "query"
          schema:
            type: "integer"
          required: true
        -
          description: "Number of rows to skip."
          name: "offset"
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
  --url "https://api.sonorancad.com/v2/emergency/servers/1/units?includeOffline=false&onlyUnits=true&limit=100&offset=0" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json"
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
[
  {
    "id": 12,
    "accId": "00000000-0000-0000-0000-000000000000",
    "status": 3,
    "isPanic": false,
    "location": "Mission Row PD",
    "coordinates": {
      "x": 123.45,
      "y": -456.78,
      "z": 32.1,
      "w": 180.0
    },
    "aop": "Los Santos",
    "data": {
      "unitNum": "A-10",
      "name": "John Doe",
      "district": "Los Santos",
      "department": "LSPD",
      "subdivision": "Patrol",
      "rank": "Officer",
      "group": "CAR-51",
      "page": 0,
      "communityUserId": "license:abc123"
    },
    "isDispatch": false
  }
]
```

## Enumeration Values

### UNIT\_STATUS

| Value | Description   |
| ----- | ------------- |
| `0`   | `UNAVAILABLE` |
| `1`   | `BUSY`        |
| `2`   | `AVAILABLE`   |
| `3`   | `ENROUTE`     |
| `4`   | `ON_SCENE`    |
| `100` | `OFFLINE`     |

### UNIT\_PAGE

| Value | Description |
| ----- | ----------- |
| `0`   | `POLICE`    |
| `1`   | `FIRE`      |
| `2`   | `EMS`       |
| `3`   | `DISPATCH`  |
| `-1`  | `UNKNOWN`   |
