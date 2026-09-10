---
description: Retrieve units for a specific account on a configured server.
---

# Get Account Units

<mark style="color:green;">`GET`</mark> `https://api.sonorancad.com/v2/emergency/servers/{serverId}/accounts/{accountUuid}/units`

> **Rate limit:** `10 requests per minute`\
> Authenticated v2 endpoints are rate limited per API key rather than per IP address.

Retrieve units for a specific account on a configured server.

## Path Parameters

| Name          | Type          | Description                       |
| ------------- | ------------- | --------------------------------- |
| `serverId`    | integer       | Configured Sonoran CAD server ID. |
| `accountUuid` | string (uuid) | Sonoran CAD account UUID.         |

## Query Parameters

| Name         | Type    | Default | Description                                             |
| ------------ | ------- | ------- | ------------------------------------------------------- |
| `onlyOnline` | boolean | `true`  | Only returns online identifiers for the target account. |
| `onlyUnits`  | boolean | `true`  | When `true`, hides dispatcher identifiers.              |
| `limit`      | integer | `100`   | Maximum number of rows returned.                        |
| `offset`     | integer | `0`     | Number of rows to skip.                                 |

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

local response = sonoran.cad:getAccountUnitsV2({
    serverId = 1,
    accountUuid = '00000000-0000-0000-0000-000000000000',
    onlyOnline = true,
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
local response = cad:getAccountUnitsV2({
    serverId = 1,
    accountUuid = '00000000-0000-0000-0000-000000000000',
    onlyOnline = true,
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

  const response = await instance.cad.getAccountUnitsV2({
    serverId: 1,
    accountUuid: '00000000-0000-0000-0000-000000000000',
    onlyOnline: true,
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

response = instance.cad.getAccountUnitsV2({
    "serverId": 1,
    "accountUuid": '00000000-0000-0000-0000-000000000000',
    "onlyOnline": True,
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

var response = await sonoran.Cad.getAccountUnitsV2(new GetAccountUnitsV2Query
{
    ServerId = 1,
    AccountUuid = "00000000-0000-0000-0000-000000000000",
    OnlyOnline = true
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
  title: "Sonoran CAD v2 - Get Account Units"
  version: "1.0.0"
  description: "Retrieve units for a specific account on a configured server."
servers:
  -
    url: "https://api.sonorancad.com"
paths:
  /v2/emergency/servers/{serverId}/accounts/{accountUuid}/units:
    get:
      summary: "Get Account Units"
      operationId: "getAccountUnits"
      responses:
        200:
          description: "Successful response"
          content:
            application/json:
              schema:
                type: "object"
              example:
                Units:
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
          description: "Sonoran CAD account UUID."
          name: "accountUuid"
          in: "path"
          schema:
            type: "string"
          required: true
        -
          description: "Only returns online identifiers for the target account."
          name: "onlyOnline"
          in: "query"
          schema:
            type: "boolean"
          required: true
        -
          description: "When `true`, hides dispatcher identifiers."
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
  --url "https://api.sonorancad.com/v2/emergency/servers/1/accounts/00000000-0000-0000-0000-000000000000/units?onlyOnline=true&onlyUnits=true&limit=100&offset=0" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json"
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
{
  "Units": [
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
        "page": 0
      },
      "isDispatch": false
    }
  ]
}
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
