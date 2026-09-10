---
description: Retrieve paginated community accounts.
---

# Get Accounts

<mark style="color:green;">`GET`</mark> `https://api.sonorancad.com/v2/general/accounts`

> **Rate limit:** `10 requests per minute`\
> Authenticated v2 endpoints are rate limited per API key rather than per IP address.

Return paginated community accounts.

## Query Parameters

| Name       | Type    | Default  | Description                                                      |
| ---------- | ------- | -------- | ---------------------------------------------------------------- |
| `limit`    | integer | `100`    | Maximum number of accounts returned. The backend enforces 1-100. |
| `offset`   | integer | `0`      | Number of accounts to skip.                                      |
| `status`   | integer | `1`      | Filter by account status. See `ACCOUNT_STATUS` below.            |
| `username` | string  | Optional | Case-insensitive username filter.                                |

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

local response = sonoran.cad:getAccountsV2({
    limit = 25,
    offset = 0,
    username = 'john',
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
local response = cad:getAccountsV2({
    limit = 25,
    offset = 0,
    username = 'john',
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

  const response = await instance.cad.getAccountsV2({
    limit: 25,
    offset: 0,
    username: 'john',
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

response = instance.cad.getAccountsV2({
    "limit": 25,
    "offset": 0,
    "username": 'john',
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

var response = await sonoran.Cad.getAccountsV2(new GetAccountsV2Query
{
    Limit = 25,
    Offset = 0,
    Status = "ACTIVE"
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
  title: "Sonoran CAD v2 - Get Accounts"
  version: "1.0.0"
  description: "Retrieve paginated community accounts."
servers:
  -
    url: "https://api.sonorancad.com"
paths:
  /v2/general/accounts:
    get:
      summary: "Get Accounts"
      operationId: "getAccounts"
      responses:
        200:
          description: "Successful response"
          content:
            application/json:
              schema:
                type: "object"
              example:
                pagination:
                  limit: 25
                  offset: 0
                  total: 1
                accounts:
                  uuid: "00000000-0000-0000-0000-000000000000"
                  username: "ExampleUser"
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
          description: "Maximum number of accounts returned. The backend enforces 1-100."
          name: "limit"
          in: "query"
          schema:
            type: "integer"
          required: true
        -
          description: "Number of accounts to skip."
          name: "offset"
          in: "query"
          schema:
            type: "integer"
          required: true
        -
          description: "Filter by account status. See `ACCOUNT_STATUS` below."
          name: "status"
          in: "query"
          schema:
            type: "integer"
          required: true
        -
          description: "Case-insensitive username filter."
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
  --url "https://api.sonorancad.com/v2/general/accounts?limit=25&offset=0&status=1" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json"
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
{
  "pagination": {
    "limit": 25,
    "offset": 0,
    "total": 1
  },
  "accounts": [
    // Array of Account Objects — see Account Object page for field descriptions.
  ]
}
```
