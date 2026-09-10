---
description: >-
  Force a unit offline by community user ID, linked Roblox ID, or linked Discord
  ID.
---

# Kick Unit

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/v2/emergency/servers/{serverId}/units/kick`

Legacy compatibility is also available with <mark style="color:red;">`DELETE`</mark> on the same route, but `POST` is preferred for integrations that need to send a JSON body reliably.

> **Rate limit:** `20 requests per minute`\
> Authenticated v2 endpoints are rate limited per API key rather than per IP address.

Force the currently selected identifier for a community user ID, linked Roblox ID, or linked Discord ID offline.

## Path Parameters

| Name       | Type    | Description                       |
| ---------- | ------- | --------------------------------- |
| `serverId` | integer | Configured Sonoran CAD server ID. |

## Request Body

Use `communityUserId` by default, or provide `roblox` or `discord` to target the unit through a linked external account.

This route accepts either a single kick request object or an array of kick request objects. SDK helpers currently send a single object over `POST`. Raw HTTP integrations may batch multiple kick requests in one call.

```json
{
  "communityUserId": "player-1234",
  "reason": "Connection reset by integration"
}
```

```json
[
  {
    "communityUserId": "player-1234",
    "reason": "Connection reset by integration"
  },
  {
    "communityUserId": "player-5678",
    "reason": "Server restart"
  }
]
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

local response = sonoran.cad:kickUnitV2({
    serverId = 1,
    communityUserId = 'player-1234',
    reason = 'Inactive or unresponsive.',
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

  const response = await instance.cad.kickUnitV2({
    serverId: 1,
    communityUserId: 'player-1234',
    reason: 'Inactive or unresponsive.',
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

response = instance.cad.kickUnitV2({
    "serverId": 1,
    "communityUserId": 'player-1234',
    "reason": 'Inactive or unresponsive.',
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

var response = await sonoran.Cad.kickUnitV2(new KickUnitV2Request
{
    ServerId = 1,
    CommunityUserId = "player-1234",
    Reason = "Disconnected by CAD administrator"
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
  title: "Sonoran CAD v2 - Kick Unit"
  version: "1.0.0"
  description: "Force a unit offline by community user ID, linked Roblox ID, or linked Discord ID."
servers:
  -
    url: "https://api.sonorancad.com"
paths:
  /v2/emergency/servers/{serverId}/units/kick:
    post:
      summary: "Kick Unit"
      operationId: "kickUnit"
      responses:
        200:
          description: "Successful response"
          content:
            application/json:
              schema:
                type: "object"
              example:
                identId: 12
                reason: "Restarting server."
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
              oneOf:
                -
                  type: "object"
                  required:
                    - "communityUserId"
                    - "reason"
                  properties:
                    communityUserId:
                      type: "string"
                    roblox:
                      type: "integer"
                    reason:
                      type: "string"
                -
                  type: "array"
                  items:
                    type: "object"
                    required:
                      - "communityUserId"
                      - "reason"
                    properties:
                      communityUserId:
                        type: "string"
                      roblox:
                        type: "integer"
                      reason:
                        type: "string"
            example:
              - communityUserId: "player-1234"
                reason: "Connection reset by integration"
              - communityUserId: "player-5678"
                reason: "Server restart"
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
  --url "https://api.sonorancad.com/v2/emergency/servers/1/units/kick" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '[
  {
    "communityUserId": "player-1234",
    "reason": "Connection reset by integration"
  },
  {
    "communityUserId": "player-5678",
    "reason": "Server restart"
  }
]'
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

Single-object requests keep the original response shape:

```json
{
  "identId": 12,
  "reason": "Restarting server."
}
```

Array requests return the count plus each kicked target:

```json
{
  "count": 2,
  "kicked": [
    {
      "identId": 12,
      "communityUserId": "player-1234",
      "reason": "Connection reset by integration"
    },
    {
      "identId": 34,
      "communityUserId": "player-5678",
      "reason": "Server restart"
    }
  ]
}
```
