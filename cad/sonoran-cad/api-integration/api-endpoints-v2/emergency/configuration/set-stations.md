---
description: Replace station alert configuration for a server.
---

# Set Stations

<mark style="color:blue;">`PUT`</mark> `https://api.sonorancad.com/v2/emergency/servers/{serverId}/stations`

> **Rate limit:** `2 requests per minute`\
> Authenticated v2 endpoints are rate limited per API key rather than per IP address.

Replace the station alert configuration for a server.

Send the station alert payload as a top-level JSON object. Provide `locations`, `tones`, and `unitColors` directly in the request body.

## Path Parameters

| Name       | Type    | Description                       |
| ---------- | ------- | --------------------------------- |
| `serverId` | integer | Configured Sonoran CAD server ID. |

## Request Body

```json
{
  "locations": [
    {
      "name": "Mission Row",
      "coordinates": {
        "x": 425.1,
        "y": -979.2,
        "z": 30.7,
        "w": 0.0
      },
      "doors": ["bay_1", "bay_2"],
      "icon": "fas fa-building"
    }
  ],
  "tones": ["tone_station_open.mp3"],
  "unitColors": ["#2563eb", "#ef4444"]
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

local response = sonoran.cad:setStationsV2({
    // See the request body above for the full station config shape.
    locations = {},
    tones = {},
    unitColors = {},
  }, 1)

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

  const response = await instance.cad.setStationsV2({
    // See the request body above for the full station config shape.
    locations: [],
    tones: [],
    unitColors: [],
  }, 1);
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

response = instance.cad.setStationsV2({
    # See the request body above for the full station config shape.
    locations: [],
    "tones": [],
    "unitColors": [],
  }, 1)

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

var response = await sonoran.Cad.setStationsV2(
    new StationConfigV2
    {
        Locations = new[]
        {
            new StationLocationV2
            {
                Name = "Mission Row",
                Coordinates = new BlipCoordinatesV2
                {
                    X = 425.1,
                    Y = -979.2,
                    Z = 30.7,
                    W = 0.0
                },
                Doors = new[] { "bay_1", "bay_2" },
                Icon = "fas fa-building"
            }
        },
        Tones = new[] { "tone_station_open.mp3" },
        UnitColors = new[] { "#2563eb", "#ef4444" }
    },
    1
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
  title: "Sonoran CAD v2 - Set Stations"
  version: "1.0.0"
  description: "Replace station alert configuration for a server."
servers:
  -
    url: "https://api.sonorancad.com"
paths:
  /v2/emergency/servers/{serverId}/stations:
    put:
      summary: "Set Stations"
      operationId: "setStations"
      responses:
        200:
          description: "Successful response"
          content:
            application/json:
              schema:
                type: "object"
              example:
                serverId: 1
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
              locations:
                - name: "Mission Row"
                  coordinates:
                    x: 425.1
                    y: -979.2
                    z: 30.7
                    w: 0.0
                  doors:
                    - "bay_1"
                    - "bay_2"
                  icon: "fas fa-building"
              tones:
                - "tone_station_open.mp3"
              unitColors:
                - "#2563eb"
                - "#ef4444"
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
curl --request PUT \
  --url "https://api.sonorancad.com/v2/emergency/servers/1/stations" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
  "locations": [
    {
      "name": "Mission Row",
      "coordinates": {
        "x": 425.1,
        "y": -979.2,
        "z": 30.7,
        "w": 0.0
      },
      "doors": ["bay_1", "bay_2"],
      "icon": "fas fa-building"
    }
  ],
  "tones": ["tone_station_open.mp3"],
  "unitColors": ["#2563eb", "#ef4444"]
}'
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
{
  "serverId": 1
}
```
