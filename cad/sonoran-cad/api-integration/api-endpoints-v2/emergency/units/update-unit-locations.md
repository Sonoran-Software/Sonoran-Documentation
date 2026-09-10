---
description: Update live map location data for one or more units.
---

# Update Unit Locations

<mark style="color:yellow;">`PATCH`</mark> `https://api.sonorancad.com/v2/emergency/servers/{serverId}/unit-locations`

> **Rate limit:** `12 requests per minute`\
> Authenticated v2 endpoints are rate limited per API key rather than per IP address.
>
> For frequent live-map streaming, prefer the [websocket `unitLocation` method](../../../websocket-api/unit-locations.md), which supports updates every `200ms` minimum after a single websocket authentication.

Queue and broadcast one or more unit location updates.

## Path Parameters

| Name       | Type    | Description                       |
| ---------- | ------- | --------------------------------- |
| `serverId` | integer | Configured Sonoran CAD server ID. |

## Request Body

Each update can target a unit with `communityUserId` by default, or with `roblox` or `discord` as alternatives. For Sonoran.lua, use `updateUnitLocationsV2(...)` for the HTTP v2 endpoint.

```json
{
  "updates": [
    {
      "communityUserId": "player-1234",
      "location": "Mission Row",
      "coordinates": {
        "x": 441.2,
        "y": -981.9,
        "z": 30.7,
        "w": 90.0
      },
      "peerId": "peer-1",
      "vehicle": {
        "model": "police3",
        "headingOffset": 0
      }
    }
  ]
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

local response = sonoran.cad:updateUnitLocationsV2({
    serverId = 1,
    updates = {
      {
        communityUserId = 'player-1234',
        location = 'Mission Row',
        coordinates = { x = 425.1, y = -979.2, z = 30.7, w = 0 },
      },
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
local response = cad:updateUnitLocationsV2({
    serverId = 1,
    updates = {
      {
        communityUserId = 'player-1234',
        location = 'Mission Row',
        coordinates = { x = 425.1, y = -979.2, z = 30.7, w = 0 },
      },
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

  const response = await instance.cad.updateUnitLocationsV2({
    serverId: 1,
    updates: [
      {
        communityUserId: 'player-1234',
        location: 'Mission Row',
        coordinates: { x: 425.1, y: -979.2, z: 30.7, w: 0 },
      },
    ],
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

response = instance.cad.updateUnitLocationsV2({
    "serverId": 1,
    "updates": [
      {
        "communityUserId": 'player-1234',
        "location": 'Mission Row',
        "coordinates": { "x": 425.1, "y": -979.2, "z": 30.7, "w": 0 },
      },
    ],
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

var response = await sonoran.Cad.updateUnitLocationsV2(new UpdateUnitLocationsV2Request
{
    ServerId = 1,
    Updates = new[]
    {
        new UnitLocationUpdateV2
        {
            CommunityUserId = "player-1234",
            Location = "Mission Row PD",
            X = 425.1,
            Y = -979.2,
            Z = 30.7,
            Heading = 180f
        }
    }
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
  title: "Sonoran CAD v2 - Update Unit Locations"
  version: "1.0.0"
  description: "Update live map location data for one or more units."
servers:
  -
    url: "https://api.sonorancad.com"
paths:
  /v2/emergency/servers/{serverId}/unit-locations:
    patch:
      summary: "Update Unit Locations"
      operationId: "updateUnitLocations"
      responses:
        200:
          description: "Successful response"
          content:
            application/json:
              schema:
                type: "object"
              example:
                updated: 1
      parameters:
        -
          description: "Configured Sonoran CAD server ID."
          name: "serverId"
          in: "path"
          schema:
            type: "integer"
          example: 1
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
              updates:
                - communityUserId: "player-1234"
                  location: "Mission Row"
                  coordinates:
                    x: 441.2
                    y: -981.9
                    z: 30.7
                    w: 90.0
                  peerId: "peer-1"
                  vehicle:
                    model: "police3"
                    headingOffset: 0
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
  --url "https://api.sonorancad.com/v2/emergency/servers/1/unit-locations" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
  "updates": [
    {
      "communityUserId": "player-1234",
      "location": "Mission Row",
      "coordinates": {
        "x": 441.2,
        "y": -981.9,
        "z": 30.7,
        "w": 90.0
      },
      "peerId": "peer-1",
      "vehicle": {
        "model": "police3",
        "headingOffset": 0
      }
    }
  ]
}'
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
{
  "updated": 1
}
```
