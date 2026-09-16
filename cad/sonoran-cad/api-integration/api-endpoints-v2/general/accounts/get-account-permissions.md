---
description: Get Account Permissions using the granular CAD v2 permissions API.
---

# Get Account Permissions

`GET` `https://api.sonorancad.com/v2/general/permissions/accounts/{accountId}`

Authenticate with your community API key using `Authorization: Bearer YOUR_API_KEY`. All SDK examples use the existing authenticated request and rate-limit handling.

Read an account's permission snapshot in the authenticated community. `accountId` is the account UUID, not its community user ID, Discord ID, or Roblox ID. Resolve the UUID using [Get Account](get-account.md) when necessary.

The response includes `permissions.version`, `permissions.grants`, `owner`, `migrated`, and membership `status` (`0` pending, `1` active; other statuses are not editable). Owner snapshots contain all catalog grants. `migrated` indicates the community's v2 permission storage is available; it does not indicate whether this individual account has been explicitly edited. Legacy-derived reads can also include `permissions.legacy` and `permissions.legacyTemplates` metadata.

A missing account returns HTTP `404`. A failed read must never be treated as an empty grant list. Check the SDK response's `success` before using `data` or computing an update. See [Replace Account Permissions](replace-account-permissions.md) to save a complete grant list.

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

local response = sonoran.cad:getAccountPermissionsV2("00000000-0000-0000-0000-000000000000")

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
local response = cad:getAccountPermissionsV2("00000000-0000-0000-0000-000000000000")

-- Inspect response.success, response.data, or response.reason as needed.
print(response.success)
```

After getting the JavaScript export client:
```javascript
const response = await cad.getAccountPermissionsV2("00000000-0000-0000-0000-000000000000");
console.log(response);
```

After constructing the .NET client from protected convars:
```csharp
var response = await sonoran.Cad.getAccountPermissionsV2("00000000-0000-0000-0000-000000000000");
Console.WriteLine(response.success);
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

  const response = await instance.cad.getAccountPermissionsV2("00000000-0000-0000-0000-000000000000");
  console.log(response);
})();
```
{% endtab %}
{% tab title="Sonoran.py" %}
~~~python
# pip install Sonoran.py
# Sonoran.py is for external Python integrations; FiveM resources should use the SonoranCADFiveM tab.
from sonoran import Instance, productEnums

instance = Instance(
    apiKey="YOUR_API_KEY",
    communityId="YOUR_COMMUNITY_ID",
    product=productEnums.CAD,
    serverId=1,
)

response = instance.cad.getAccountPermissionsV2("00000000-0000-0000-0000-000000000000")

print(response.success)
print(response.data if response.success else response.reason)
~~~
{% endtab %}
{% tab title="Sonoran.Net" %}
~~~csharp
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

var response = await sonoran.Cad.getAccountPermissionsV2("00000000-0000-0000-0000-000000000000");

Console.WriteLine(response.success);
var result = response.success ? response.data?.ToObject<CadAccountPermissionsV2>() : null;
Console.WriteLine(result);
~~~
{% endtab %}
{% tab title="OpenAPI" %}
Import this YAML into Postman with **Import -> Raw text**.

~~~yaml
openapi: "3.0.3"
info:
  title: Sonoran CAD v2 - Get Account Permissions
  version: 1.0.0
servers:
- url: https://api.sonorancad.com
paths:
  /v2/general/permissions/accounts/{accountId}:
    get:
      summary: Get Account Permissions
      operationId: getAccountPermissionsV2
      security:
      - bearerAuth: []
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  permissions:
                    type: object
                    properties:
                      version:
                        type: integer
                        enum:
                        - 2
                      grants:
                        type: array
                        items:
                          type: string
                  owner:
                    type: boolean
                  migrated:
                    type: boolean
                  status:
                    type: integer
              example:
                permissions:
                  version: 2
                  grants:
                  - global.police
                owner: false
                migrated: true
                status: 1
        '400':
          description: Invalid request or account cannot be edited
        '401':
          description: Missing or invalid API key
        '429':
          description: Rate limited; follow Retry-After before retrying
        '404':
          description: Account not found in this community
      parameters:
      - name: accountId
        in: path
        required: true
        schema:
          type: string
          format: uuid
        example: 00000000-0000-0000-0000-000000000000
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
~~~
{% endtab %}
{% tab title="cURL" %}
```bash
curl --request GET \
  --url "https://api.sonorancad.com/v2/general/permissions/accounts/00000000-0000-0000-0000-000000000000" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json"
```
{% endtab %}
{% endtabs %}

## Response

```json
{
  "permissions": {
    "version": 2,
    "grants": [
      "global.police"
    ]
  },
  "owner": false,
  "migrated": true,
  "status": 1
}
```
