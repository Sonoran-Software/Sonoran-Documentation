---
description: Get Permission Catalog using the granular CAD v2 permissions API.
---

# Get Permission Catalog

`GET` `https://api.sonorancad.com/v2/general/permissions/catalog`

Authenticate with your community API key using `Authorization: Bearer YOUR_API_KEY`. All SDK examples use the existing authenticated request and rate-limit handling.

Return the community-specific catalog of available, case-sensitive grant IDs and the legacy flag conversion map. Fetch this catalog before assigning permissions and refresh it when record templates change.

Global permissions use `global.<fieldName>`. Record permissions use `record.<templateId>.<action>`, with actions `read`, `create`, `edit.own`, `edit.any`, `delete.own`, `delete.any`, `supervise`, and, on backends supporting limited editing, `edit.selected`. Template IDs belong to the current community; do not copy them from another community or hardcode the sample ID below.

`legacyGrants` maps uppercase legacy flags (such as `POLICE`) to the grant arrays produced by CAD's migration rules. The example response is an excerpt; actual catalogs and mappings contain all applicable entries. Use this map to migrate an existing role configuration, then manage explicit grant lists with [Replace Account Permissions](replace-account-permissions.md).

## Editing grant discovery

Use `record.<templateId>.edit.selected` only when returned by this community's catalog. The grant permits editing opted-in fields (`editableByOthers: true`) on other accounts' records; it does not grant own-record editing. `edit.any` permits full editing, including owned records, without field opt-in on this backend version. `edit.own` permits full editing of owned records. Supervisor-only fields additionally require `supervise`, and read-only fields remain locked for account editing.

There is no permission-document version or endpoint change: `version` remains `2`. Existing grants remain unchanged and the new grant is not automatically assigned. The SDKs use string grant IDs and do not need new methods. Refresh the catalog when permission capabilities or templates change. Community API-key record operations retain their existing service authority; account grant changes do not narrow those credentials.

See [the account permission guide](../../../../tutorials/getting-started/permissions.md#record-editing-permissions) for rollout availability and examples.

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

local response = sonoran.cad:getPermissionCatalogV2()

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
local response = cad:getPermissionCatalogV2()

-- Inspect response.success, response.data, or response.reason as needed.
print(response.success)
```

After getting the JavaScript export client:
```javascript
const response = await cad.getPermissionCatalogV2();
console.log(response);
```

After constructing the .NET client from protected convars:
```csharp
var response = await sonoran.Cad.getPermissionCatalogV2();
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

  const response = await instance.cad.getPermissionCatalogV2();
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

response = instance.cad.getPermissionCatalogV2()

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

var response = await sonoran.Cad.getPermissionCatalogV2();

Console.WriteLine(response.success);
var result = response.success ? response.data?.ToObject<CadPermissionCatalogV2>() : null;
Console.WriteLine(result);
~~~
{% endtab %}
{% tab title="OpenAPI" %}
Import this YAML into Postman with **Import -> Raw text**.

~~~yaml
openapi: "3.0.3"
info:
  title: Sonoran CAD v2 - Get Permission Catalog
  version: 1.0.0
servers:
- url: https://api.sonorancad.com
paths:
  /v2/general/permissions/catalog:
    get:
      summary: Get Permission Catalog
      operationId: getPermissionCatalogV2
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
                  version:
                    type: integer
                    enum:
                    - 2
                  communityUuid:
                    type: string
                    format: uuid
                  permissions:
                    type: array
                    items:
                      type: object
                      properties:
                        id:
                          type: string
                        label:
                          type: string
                        templateId:
                          type: integer
                          nullable: true
                        templateName:
                          type: string
                          nullable: true
                        action:
                          type: string
                  legacyGrants:
                    type: object
                    additionalProperties:
                      type: array
                      items:
                        type: string
              example:
                version: 2
                communityUuid: 00000000-0000-0000-0000-000000000000
                permissions:
                - id: global.police
                  label: police
                  templateId: null
                  templateName: null
                  action: police
                - id: record.4.read
                  label: read
                  templateId: 4
                  templateName: Example record template
                  action: read
                legacyGrants:
                  POLICE:
                  - global.police
                  - record.4.read
        '400':
          description: Invalid request or account cannot be edited
        '401':
          description: Missing or invalid API key
        '429':
          description: Rate limited; follow Retry-After before retrying
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
  --url "https://api.sonorancad.com/v2/general/permissions/catalog" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json"
```
{% endtab %}
{% endtabs %}

## Response

```json
{
  "version": 2,
  "communityUuid": "00000000-0000-0000-0000-000000000000",
  "permissions": [
    {
      "id": "global.police",
      "label": "police",
      "templateId": null,
      "templateName": null,
      "action": "police"
    },
    {
      "id": "record.4.read",
      "label": "read",
      "templateId": 4,
      "templateName": "Example record template",
      "action": "read"
    }
  ],
  "legacyGrants": {
    "POLICE": [
      "global.police",
      "record.4.read"
    ]
  }
}
```
