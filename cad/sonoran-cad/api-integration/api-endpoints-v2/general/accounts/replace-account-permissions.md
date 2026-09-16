---
description: Replace Account Permissions using the granular CAD v2 permissions API.
---

# Replace Account Permissions

`PUT` `https://api.sonorancad.com/v2/general/permissions/accounts/{accountId}`

Authenticate with your community API key using `Authorization: Bearer YOUR_API_KEY`. All SDK examples use the existing authenticated request and rate-limit handling.

Replace the account's complete explicit grant list in the authenticated community. `accountId` is the account UUID, not a community user ID. This operation does not add to the existing list: omitted grants are removed. The request must contain `grants`; `version` is `2` (the server also defaults an omitted version to `2`).

Use exact, case-sensitive grant IDs from [Get Permission Catalog](get-permission-catalog.md). To retain existing permissions, first [read the account](get-account-permissions.md), check that the read succeeded, and build the complete desired list. Concurrent replacements can overwrite each other; coordinate writers.

Only pending or active non-owner memberships can be edited. Nonempty grants activate pending memberships, subject to the community member limit. An empty array clears grants and makes an active membership pending. This endpoint does not ban, unban, restore removed memberships, or reactivate expired memberships. Unknown grants, owner edits, missing/noneditable accounts, and membership-limit failures return HTTP `400`.

A granular replacement ends legacy category inheritance for future record templates. Refresh the catalog and explicitly grant access to new templates when needed. Existing legacy integrations remain supported, but new integrations should use this endpoint.

## Request Body

```json
{"version": 2, "grants": ["global.police"]}
```

To clear all permissions, explicitly send:

```json
{"version": 2, "grants": []}
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

local response = sonoran.cad:replaceAccountPermissionsV2("00000000-0000-0000-0000-000000000000", { "global.police" })

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
local response = cad:replaceAccountPermissionsV2("00000000-0000-0000-0000-000000000000", { "global.police" })

-- Inspect response.success, response.data, or response.reason as needed.
print(response.success)
```

After getting the JavaScript export client:
```javascript
const response = await cad.replaceAccountPermissionsV2("00000000-0000-0000-0000-000000000000", ["global.police"]);
console.log(response);
```

After constructing the .NET client from protected convars:
```csharp
var response = await sonoran.Cad.replaceAccountPermissionsV2("00000000-0000-0000-0000-000000000000", new[] { "global.police" });
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

  const response = await instance.cad.replaceAccountPermissionsV2("00000000-0000-0000-0000-000000000000", ["global.police"]);
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

response = instance.cad.replaceAccountPermissionsV2("00000000-0000-0000-0000-000000000000", ["global.police"])

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

var response = await sonoran.Cad.replaceAccountPermissionsV2("00000000-0000-0000-0000-000000000000", new[] { "global.police" });

Console.WriteLine(response.success);
var result = response.success ? response.data?.ToObject<CadReplaceAccountPermissionsV2Response>() : null;
Console.WriteLine(result);
~~~
{% endtab %}
{% tab title="OpenAPI" %}
Import this YAML into Postman with **Import -> Raw text**.

~~~yaml
openapi: "3.0.3"
info:
  title: Sonoran CAD v2 - Replace Account Permissions
  version: 1.0.0
servers:
- url: https://api.sonorancad.com
paths:
  /v2/general/permissions/accounts/{accountId}:
    put:
      summary: Replace Account Permissions
      operationId: replaceAccountPermissionsV2
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
                  accountUuid:
                    type: string
                    format: uuid
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
              example:
                accountUuid: 00000000-0000-0000-0000-000000000000
                permissions:
                  version: 2
                  grants:
                  - global.police
        '400':
          description: Invalid request or account cannot be edited
        '401':
          description: Missing or invalid API key
        '429':
          description: Rate limited; follow Retry-After before retrying
      parameters:
      - name: accountId
        in: path
        required: true
        schema:
          type: string
          format: uuid
        example: 00000000-0000-0000-0000-000000000000
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
              - grants
              properties:
                version:
                  type: integer
                  enum:
                  - 2
                  default: 2
                grants:
                  type: array
                  uniqueItems: true
                  items:
                    type: string
            example:
              version: 2
              grants:
              - global.police
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
curl --request PUT \
  --url "https://api.sonorancad.com/v2/general/permissions/accounts/00000000-0000-0000-0000-000000000000" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{"version": 2, "grants": ["global.police"]}'
```
{% endtab %}
{% endtabs %}

## Response

```json
{
  "accountUuid": "00000000-0000-0000-0000-000000000000",
  "permissions": {
    "version": 2,
    "grants": [
      "global.police"
    ]
  }
}
```
