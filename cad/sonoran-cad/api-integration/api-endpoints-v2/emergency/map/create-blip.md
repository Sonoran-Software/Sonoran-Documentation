---
description: Create a custom blip.
---

# Create Blip

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/v2/emergency/servers/{serverId}/blips`

> **Rate limit:** `30 requests per minute`\
> Authenticated v2 endpoints are rate limited per API key rather than per IP address.

## Path Parameters

| Name       | Type    | Description                       |
| ---------- | ------- | --------------------------------- |
| `serverId` | integer | Configured Sonoran CAD server ID. |

## Request Body

```json
{
  "coordinates": {
    "x": 441.2,
    "y": -981.9,
    "z": 0.0,
    "w": 0.0
  },
  "subType": "scene",
  "icon": "fa-solid fa-location-crosshairs",
  "color": "red",
  "tooltip": "Scene perimeter",
  "radius": 50.0,
  "data": [
    {
      "title": "Units",
      "text": "2"
    }
  ]
}
```

## Example Request

### Interactive panel menu entries

{% hint style="warning" %}
**Staging only:** the `panelKey` and `instanceKey` menu fields require `https://staging-api.dev.sonorancad.com` and the staging CAD UI. The production endpoint shown above remains the existing blip API. See [Development Branch](../../../development-branch.md).
{% endhint %}

To embed a registered Integration Panel, add a `data` entry with `panelKey` and `instanceKey`:

```json
{
  "data": [
    { "title": "Location", "text": "Vespucci Boulevard" },
    { "panelKey": "smart-signs", "instanceKey": "sign-12", "title": "Edit street sign" }
  ]
}
```

Include the required coordinates, subtype, icon, color, and tooltip from the request above when creating a blip. `panelKey` is the registered key, not the display name. `instanceKey` defaults to `default`; both keys must match the panel API's 2–80 character lowercase key format. The instance is resolved on this blip's server. If it is missing, the menu shows an unavailable message rather than another instance's data. `title` optionally overrides the panel heading. With `panelKey` present, that entry renders the panel instead of `text`.

Lua, JavaScript, and Python accept these fields inside `data` with the existing `createBlipV2` helper. In Sonoran.Net, set `PanelKey` and `InstanceKey` on `BlipDisplayDataV2`. See the complete [Smart Signs editor](../../integration-panels/examples/smart-signs.md) for definition, state, and Save actions.

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

local response = sonoran.cad:createBlipV2({
    serverId = 1,
    coordinates = { x = 425.1, y = -979.2, z = 30.7, w = 0 },
    subType = 'radius',
    icon = 'fire',
    color = '#ff0000',
    tooltip = 'Structure Fire',
    radius = 25,
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
local response = cad:createBlipV2({
    serverId = 1,
    coordinates = { x = 425.1, y = -979.2, z = 30.7, w = 0 },
    subType = 'radius',
    icon = 'fire',
    color = '#ff0000',
    tooltip = 'Structure Fire',
    radius = 25,
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

  const response = await instance.cad.createBlipV2({
    serverId: 1,
    coordinates: { x: 425.1, y: -979.2, z: 30.7, w: 0 },
    subType: 'radius',
    icon: 'fire',
    color: '#ff0000',
    tooltip: 'Structure Fire',
    radius: 25,
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

response = instance.cad.createBlipV2({
    "serverId": 1,
    "coordinates": { "x": 425.1, "y": -979.2, "z": 30.7, "w": 0 },
    "subType": 'radius',
    "icon": 'fire',
    "color": '#ff0000',
    "tooltip": 'Structure Fire',
    "radius": 25,
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

var response = await sonoran.Cad.createBlipV2(new CreateBlipV2Request
{
    ServerId = 1,
    Coordinates = new BlipCoordinatesV2
    {
        X = 420.1,
        Y = -980.4,
        Z = 30.8,
        W = 0
    },
    SubType = "call",
    Icon = "fire",
    Color = "red",
    Tooltip = "Structure Fire",
    Data =
    [
        new BlipDisplayDataV2
        {
            Title = "Units",
            Text = "2"
        }
    ],
    Radius = 50
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
  title: "Sonoran CAD v2 - Create Blip"
  version: "1.0.0"
  description: "Create a custom blip."
servers:
  -
    url: "https://api.sonorancad.com"
paths:
  /v2/emergency/servers/{serverId}/blips:
    post:
      summary: "Create Blip"
      operationId: "createBlip"
      responses:
        200:
          description: "Successful response"
          content:
            application/json:
              schema:
                type: "object"
              example:
                id: 32
                coordinates:
                  x: 425.5
                  y: -979.8
                  z: 0.0
                  w: 0.0
                subType: "radius"
                icon: "fa-location-dot"
                color: "#ff0000"
                tooltip: "Perimeter"
                data:
                  - title: "Assigned Unit"
                    text: "A-10"
                radius: 100.0
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
              properties:
                data:
                  type: array
                  items:
                    type: object
                    properties:
                      title:
                        type: string
                      text:
                        type: string
                      panelKey:
                        type: string
                        pattern: '^[a-z0-9][a-z0-9._-]{1,79}$'
                        description: Registered Integration Panel key. Renders the panel instead of text.
                      instanceKey:
                        type: string
                        pattern: '^[a-z0-9][a-z0-9._-]{1,79}$'
                        default: default
                        description: Exact instance on this server.
            example:
              coordinates:
                x: 441.2
                y: -981.9
                z: 0.0
                w: 0.0
              subType: "scene"
              icon: "fa-solid fa-location-crosshairs"
              color: "red"
              tooltip: "Scene perimeter"
              radius: 50.0
              data:
                - title: "Units"
                  text: "2"
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
curl --request POST \
  --url "https://api.sonorancad.com/v2/emergency/servers/1/blips" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
  "coordinates": {
    "x": 441.2,
    "y": -981.9,
    "z": 0.0,
    "w": 0.0
  },
  "subType": "scene",
  "icon": "fa-solid fa-location-crosshairs",
  "color": "red",
  "tooltip": "Scene perimeter",
  "radius": 50.0,
  "data": [
    {
      "title": "Units",
      "text": "2"
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
  "id": 32,
  "coordinates": {
    "x": 425.5,
    "y": -979.8,
    "z": 0.0,
    "w": 0.0
  },
  "subType": "radius",
  "icon": "fa-location-dot",
  "color": "#ff0000",
  "tooltip": "Perimeter",
  "data": [
    {
      "title": "Assigned Unit",
      "text": "A-10"
    }
  ],
  "radius": 100.0
}
```
