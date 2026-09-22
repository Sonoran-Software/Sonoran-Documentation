---
description: Get FiveM Configuration for a community server.
---

# Get FiveM Configuration

`GET` `https://api.sonorancad.com/v2/fivem/servers/{serverId}/configuration`

Fetch the resolved FiveM configuration for a server in the authenticated community. The response combines the current master catalog defaults with this community/server's saved overrides. It includes core settings and all submodule settings, including their enabled states. Local bootstrap credentials (`communityID`, `apiKey`, `serverId`, and `mode`) are not part of `values`.

Configure settings in CAD under **In-Game Integration > FiveM**. **Save** persists the configuration; **Apply and restart** separately sends the [configuration push event](../../../websocket-api/fivem-configuration.md). These API endpoints read and acknowledge configuration; they do not edit it.

A `revision` of `0` means no configuration has been saved for this server. Defaults are returned, but the official resource waits for the first save before starting its submodules. `schemaVersion` describes the wire protocol; `templateRevision` identifies the master catalog and can change without changing the saved revision. Consumers must preserve dynamic object keys and JSON value types.

## Authentication and parameters

Use `Authorization: Bearer YOUR_API_KEY`. `serverId` is the numeric ID of a server in that key's community (example: `1`). SDKs can use their configured default server: omit the GET argument, or pass `nil` / `undefined` / `None` / `null` as the acknowledgement's first argument.

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

local response = sonoran.cad:getFiveMConfigurationV2(1)

if response.success then
  print("Configuration revision:", response.data.revision)
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
local response = cad:getFiveMConfigurationV2()

if response.success then
  print("Configuration revision:", response.data.revision)
else
  print(response.reason)
end
```

**Sonoran.js**

```javascript
(async () => {
  const cad = exports["sonorancad"].getCadClient();
  const response = await cad.getFiveMConfigurationV2();

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

var response = await sonoran.Cad.getFiveMConfigurationV2();
var configuration = response.data?.ToObject<FiveMConfigurationV2>();

if (response.success && configuration is not null)
{
    Debug.WriteLine($"Configuration revision: {configuration.Revision}");
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

  const response = await instance.cad.getFiveMConfigurationV2(1);

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

response = instance.cad.getFiveMConfigurationV2(1)

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

var response = await sonoran.Cad.getFiveMConfigurationV2(1);
var configuration = response.data?.ToObject<FiveMConfigurationV2>();

if (response.success && configuration is not null)
{
    Console.WriteLine($"Configuration revision: {configuration.Revision}");
}
~~~
{% endtab %}
{% tab title="OpenAPI" %}
Import this YAML into Postman using **Import > Raw text**.

~~~yaml
openapi: "3.0.3"
info:
  title: Sonoran CAD v2 - Get FiveM Configuration
  version: 1.0.0
servers:
- url: https://api.sonorancad.com
paths:
  /v2/fivem/servers/{serverId}/configuration:
    get:
      summary: Get FiveM Configuration
      operationId: get_fivem_configuration
      parameters:
      - name: serverId
        in: path
        required: true
        schema:
          type: integer
          format: int32
          minimum: 1
        example: 1
      security:
      - BearerAuth: []
      responses:
        '200':
          description: Resolved configuration (values abbreviated in this example)
          content:
            application/json:
              schema:
                type: object
                required:
                - revision
                - schemaVersion
                - templateRevision
                - serverId
                - values
                - appliedRevision
                - appliedAt
                properties:
                  revision:
                    type: integer
                    format: int64
                    minimum: 0
                    description: Saved configuration revision; zero means this server
                      has no saved configuration.
                  schemaVersion:
                    type: integer
                    example: 1
                    description: Wire protocol version.
                  templateRevision:
                    type: string
                    description: SHA-256 fingerprint of the current configuration
                      catalog.
                  serverId:
                    type: integer
                    example: 1
                  values:
                    type: object
                    required:
                    - core
                    - plugins
                    properties:
                      core:
                        type: object
                        additionalProperties: true
                      plugins:
                        type: object
                        additionalProperties: true
                  appliedRevision:
                    type: integer
                    format: int64
                    nullable: true
                  appliedAt:
                    type: string
                    format: date-time
                    nullable: true
              example:
                revision: 4
                schemaVersion: 1
                templateRevision: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                serverId: 1
                values:
                  core: {}
                  plugins: {}
                appliedRevision: 3
                appliedAt: '2026-09-21T15:30:00Z'
        '401':
          description: Missing or invalid bearer API key
        '404':
          description: Server does not belong to the authenticated community
components:
  securitySchemes:
    BearerAuth:
      type: http
      scheme: bearer
~~~
{% endtab %}
{% tab title="cURL" %}
```bash
curl --request GET \
  --url "https://api.sonorancad.com/v2/fivem/servers/1/configuration" \
  --header "Authorization: Bearer YOUR_API_KEY"
```
{% endtab %}
{% endtabs %}

## Response

| Field | Meaning |
| --- | --- |
| `revision` | Saved configuration revision, or `0` before the first save. |
| `schemaVersion` | Configuration protocol version; currently `1`. |
| `templateRevision` | SHA-256 catalog fingerprint. Compare it as well as the revision. |
| `serverId` | Requested server ID. |
| `values.core` | Resolved core settings. |
| `values.plugins` | Resolved settings keyed by submodule name. |
| `appliedRevision` | Last acknowledged saved revision, or `null`. |
| `appliedAt` | Last acknowledgement timestamp, or `null`. |

The OpenAPI example abbreviates `values`; real responses contain the full resolved configuration. HTTP returns this object directly. SDKs expose it as `response.data` and use `response.success` for request status.

On startup, the official resource fetches configuration before loading submodules and retries failed or unavailable configuration every 60 seconds. After loading, it [acknowledges the revision](acknowledge-fivem-configuration.md). `appliedRevision` tracks the saved revision only; it does not record the catalog fingerprint or prove every integration is healthy.

`401` means authentication failed. `404` means the server is not part of the authenticated community.
