---
description: >-
  Retrieve a single community account by community user ID, linked Roblox ID,
  linked Discord ID, account UUID, or username.
---

# Get Account

<mark style="color:green;">`GET`</mark> `https://api.sonorancad.com/v2/general/accounts/account`

> **Rate limit:** `10 requests per minute`\
> Authenticated v2 endpoints are rate limited per API key rather than per IP address.

Return a single community account record.

## Query Parameters

| Name              | Type          | Default  | Description                                                                              |
| ----------------- | ------------- | -------- | ---------------------------------------------------------------------------------------- |
| `communityUserId` | string        | Optional | Default target option for the in-game community user ID. Provide exactly one identifier. |
| `roblox`          | integer       | Optional | Target the account linked to a Roblox user ID. Provide exactly one identifier.           |
| `discord`         | string        | Optional | Target the account linked to a Discord user ID. Provide exactly one identifier.          |
| `accountUuid`     | string (uuid) | Optional | Target account UUID. Provide exactly one identifier.                                     |
| `username`        | string        | Optional | Target username. Provide exactly one identifier.                                         |

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

local response = sonoran.cad:getAccountV2({
    communityUserId = 'player-1234',
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
local response = cad:getAccountV2({
    accountUuid = '00000000-0000-0000-0000-000000000000',
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

  const response = await instance.cad.getAccountV2({
    communityUserId: 'player-1234',
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

response = instance.cad.getAccountV2({
    "communityUserId": 'player-1234',
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

var response = await sonoran.Cad.getAccountV2(new GetAccountV2Query
{
    CommunityUserId = "player-1234"
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
  title: "Sonoran CAD v2 - Get Account"
  version: "1.0.0"
  description: "Retrieve a single community account by community user ID, linked Roblox ID, linked Discord ID, account UUID, or username."
servers:
  -
    url: "https://api.sonorancad.com"
paths:
  /v2/general/accounts/account:
    get:
      summary: "Get Account"
      operationId: "getAccount"
      responses:
        200:
          description: "Successful response"
          content:
            application/json:
              schema:
                type: "object"
              example:
                uuid: "00000000-0000-0000-0000-000000000000"
                username: "ExampleUser"
                communityUserId: "player-1234"
                status: 1
                joined: "2026-01-14T18:22:00Z"
                lastLogin: "2026-04-08T20:55:00Z"
                permissions:
                  police: true
                  dispatch: true
                  liveMap: true
                  adminInGameIntegration: true
      parameters:
        -
          description: "Default target option for the in-game community user ID. Provide exactly one identifier."
          name: "communityUserId"
          in: "query"
          schema:
            type: "string"
          required: false
        -
          description: "Target the account linked to a Roblox user ID. Provide exactly one identifier."
          name: "roblox"
          in: "query"
          schema:
            type: "integer"
          required: false
        -
          description: "Target account UUID. Provide exactly one identifier."
          name: "accountUuid"
          in: "query"
          schema:
            type: "string"
          required: false
        -
          description: "Target username. Provide exactly one identifier."
          name: "username"
          in: "query"
          schema:
            type: "string"
          required: false
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
  --url "https://api.sonorancad.com/v2/general/accounts/account?communityUserId=player-1234" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json"
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json` containing a single [Account Object](account-object.md).
