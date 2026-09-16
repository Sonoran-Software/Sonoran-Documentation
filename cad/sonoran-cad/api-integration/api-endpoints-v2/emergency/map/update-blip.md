---
description: Update a custom blip.
---

# Update Blip

<mark style="color:yellow;">`PATCH`</mark> `https://api.sonorancad.com/v2/emergency/servers/{serverId}/blips/{blipId}`

> **Rate limit:** `30 requests per minute`\
> Authenticated v2 endpoints are rate limited per API key rather than per IP address.

Update one or more editable fields on a custom blip.

## Path Parameters

| Name       | Type    | Description                       |
| ---------- | ------- | --------------------------------- |
| `serverId` | integer | Configured Sonoran CAD server ID. |
| `blipId`   | integer | Blip ID.                          |

## Request Body

{% hint style="warning" %}
**Staging only:** `panelKey` and `instanceKey` menu references require `https://staging-api.dev.sonorancad.com` and the staging CAD UI. These additions are not yet released on the production endpoint shown above. See [Development Branch](../../../development-branch.md).
{% endhint %}

`data` replaces the complete menu entry list. Each entry can contain `title`/`text` information or an Integration Panel reference using `panelKey` and `instanceKey` (default `default`). Panel keys are exact registered keys, not display names; the instance belongs to the selected server. Both keys use the panel API's 2–80 character lowercase key format. An optional `title` overrides the panel heading. A missing panel or instance displays an unavailable message.

For example, send `{"data":[{"panelKey":"smart-signs","instanceKey":"sign-12"}]}` to attach the sign editor. Send `{"data":[]}` to clear menu content, or resend only the information entries to remove a panel while retaining them. Omitting `data` preserves the current menu. In Sonoran.Net use `BlipDisplayDataV2.PanelKey` and `.InstanceKey`; the other SDKs pass these fields through their existing `updateBlipV2` helper.

See [Smart Signs: Live Map Editor](../../integration-panels/examples/smart-signs.md) for the complete workflow.

Send only the fields you want to update.

```json
{
  "tooltip": "Updated perimeter",
  "color": "#00a3ff",
  "radius": 150
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

local response = sonoran.cad:updateBlipV2(32, {
    serverId = 1,
    tooltip = 'Updated marker',
    color = '#ffaa00',
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
local response = cad:updateBlipV2(32, {
    serverId = 1,
    tooltip = 'Updated marker',
    color = '#ffaa00',
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

  const response = await instance.cad.updateBlipV2(32, {
    serverId: 1,
    tooltip: 'Updated marker',
    color: '#ffaa00',
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

response = instance.cad.updateBlipV2(32, {
    "serverId": 1,
    "tooltip": 'Updated marker',
    "color": '#ffaa00',
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

var response = await sonoran.Cad.updateBlipV2(
    32,
    new UpdateBlipV2Request
    {
        ServerId = 1,
        Tooltip = "Perimeter Updated",
        Color = "orange",
        Data =
        [
            new BlipDisplayDataV2
            {
                Title = "Units",
                Text = "3"
            }
        ],
        Radius = 75
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
  title: "Sonoran CAD v2 - Update Blip"
  version: "1.0.0"
  description: "Update a custom blip."
servers:
  -
    url: "https://api.sonorancad.com"
paths:
  /v2/emergency/servers/{serverId}/blips/{blipId}:
    patch:
      summary: "Update Blip"
      operationId: "updateBlip"
      responses:
        200:
          description: "Successful response"
          content:
            application/json:
              schema:
                type: "object"
              example:
                id: 32
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
          description: "Blip ID."
          name: "blipId"
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
              properties:
                data:
                  type: array
                  description: Replaces all menu entries. An empty array clears the menu.
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
              tooltip: "Updated perimeter"
              color: "#00a3ff"
              radius: 150
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
  --url "https://api.sonorancad.com/v2/emergency/servers/1/blips/32" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
  "tooltip": "Updated perimeter",
  "color": "#00a3ff",
  "radius": 150
}'
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
{
  "id": 32
}
```
