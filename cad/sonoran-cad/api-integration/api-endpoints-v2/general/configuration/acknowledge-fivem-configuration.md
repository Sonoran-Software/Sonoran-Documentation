---
description: Report the saved FiveM configuration revision loaded by a server.
---

# Acknowledge FiveM Configuration

`POST` `https://api.sonorancad.com/v2/fivem/servers/{serverId}/configuration/acknowledge/{revision}`

Report the saved revision that the resource has loaded. This updates `appliedRevision` and `appliedAt` for this community/server. It does not save settings, send a push event, or restart the resource.

Only acknowledge after loading the configuration. The examples use revision `4` as an example of a revision already loaded by the caller; substitute the revision you actually loaded. The official SonoranCADFiveM resource performs this acknowledgement automatically. An acknowledgement is not a health check of every submodule.

## Authentication and parameters

Use `Authorization: Bearer YOUR_API_KEY`. `serverId` is the numeric ID of a server in that key's community (example: `1`). SDKs can use the configured default server by passing `nil` / `undefined` / `None` / `null` as the first argument.

`revision` is the positive saved revision that was loaded. There is no request body. If a newer revision was saved before acknowledgement, the API returns `409`; fetch again and apply the newer configuration before acknowledging it.

## Example request

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

local response = sonoran.cad:acknowledgeFiveMConfigurationV2(1, 4)

if response.success then
  print("Loaded revision acknowledged")
else
  print(response.reason)
end
```
{% endtab %}
{% tab title="SonoranCADFiveM" %}
Use this tab when calling the v2 API from the server side of an in-game FiveM resource.

* **Sonoran.lua** and **Sonoran.js:** use the `sonorancad` export to get the configured CAD client.
* **Sonoran.Net:** FiveM exports do not return a .NET client, so read the protected Sonoran CAD convars and create a client.
* **Sonoran.py:** FiveM does not run Python resources; use the Sonoran.py tab for external integrations.

The API key is stored in `sonoran_apiKey` as a protected FiveM convar. Grant an authorized server resource access with `add_convar_permission your-resource-name read sonoran_apiKey`.

**Sonoran.lua**

```lua
local cad = exports["sonorancad"]:getCadClient()
local response = cad:acknowledgeFiveMConfigurationV2(nil, 4)

if response.success then
  print("Loaded revision acknowledged")
else
  print(response.reason)
end
```

**Sonoran.js**

```javascript
(async () => {
  const cad = exports["sonorancad"].getCadClient();
  const response = await cad.acknowledgeFiveMConfigurationV2(undefined, 4);

  if (response.success) {
    console.log(response.data);
  } else {
    console.error(response.reason);
  }
})();
```

**Sonoran.Net**

```csharp
// dotnet add package Sonoran.Net
using CitizenFX.Core;
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

var response = await sonoran.Cad.acknowledgeFiveMConfigurationV2(serverId, 4);

if (response.success)
{
    Debug.WriteLine("Loaded revision acknowledged.");
}
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

  const response = await instance.cad.acknowledgeFiveMConfigurationV2(1, 4);

  if (response.success) {
    console.log(response.data);
  } else {
    console.error(response.reason);
  }
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

response = instance.cad.acknowledgeFiveMConfigurationV2(1, 4)

if response.success:
    print(response.data)
else:
    print(response.reason)
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

var response = await sonoran.Cad.acknowledgeFiveMConfigurationV2(1, 4);

if (response.success)
{
    Console.WriteLine("Loaded revision acknowledged.");
}
~~~
{% endtab %}
{% tab title="OpenAPI" %}
Import this YAML into Postman using **Import > Raw text**.

~~~yaml
openapi: "3.0.3"
info:
  title: Sonoran CAD v2 - Acknowledge FiveM Configuration
  version: 1.0.0
servers:
- url: https://api.sonorancad.com
paths:
  /v2/fivem/servers/{serverId}/configuration/acknowledge/{revision}:
    post:
      summary: Acknowledge FiveM Configuration
      operationId: acknowledge_fivem_configuration
      parameters:
      - name: serverId
        in: path
        required: true
        schema:
          type: integer
          format: int32
          minimum: 1
        example: 1
      - name: revision
        in: path
        required: true
        schema:
          type: integer
          format: int64
          minimum: 1
        example: 4
      security:
      - BearerAuth: []
      responses:
        '200':
          description: Loaded revision acknowledged
          content:
            application/json:
              schema:
                type: object
                required:
                - success
                properties:
                  success:
                    type: boolean
              example:
                success: true
        '401':
          description: Missing or invalid bearer API key
        '404':
          description: Server does not belong to the authenticated community
        '409':
          description: Revision changed or no configuration has been saved for this
            server
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
                  detail:
                    type: string
                  status:
                    type: integer
              example:
                status: 409
                title: Revision changed
                detail: Configuration changed after startup.
components:
  securitySchemes:
    BearerAuth:
      type: http
      scheme: bearer
~~~
{% endtab %}
{% tab title="cURL" %}
```bash
curl --request POST \
  --url "https://api.sonorancad.com/v2/fivem/servers/1/configuration/acknowledge/4" \
  --header "Authorization: Bearer YOUR_API_KEY"
```
{% endtab %}
{% endtabs %}

## Response

`200 OK` returns `{"success": true}`. A repeated acknowledgement of the current revision succeeds and refreshes its applied timestamp. A stale or unsaved revision returns `409 Conflict`.

`401` means authentication failed. `404` means the server is not part of the authenticated community. [Fetch configuration](get-fivem-configuration.md) to inspect the saved and applied revisions.
