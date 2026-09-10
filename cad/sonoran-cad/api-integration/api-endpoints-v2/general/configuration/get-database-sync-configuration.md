---
description: >-
  Retrieve the enabled state of community database sync and its supported record
  mappings.
---

# Get Database Sync Configuration

<mark style="color:green;">`GET`</mark> `https://api.sonorancad.com/v2/general/database-sync`

> **Rate limit:** `10 requests per minute`\
> Authenticated v2 endpoints are rate limited per API key rather than per IP address.

Return whether database sync is enabled for the authenticated community and whether character, license, and vehicle registration mappings are enabled. Connection credentials and mapping details are never returned.

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

local response = sonoran.cad:getDatabaseSyncConfigurationV2()

if response.success then
  print("Database sync enabled:", response.data.enabled)
  print("Character mapping enabled:", response.data.character)
  print("License mapping enabled:", response.data.licenses)
  print("Vehicle registration mapping enabled:", response.data.vehicleRegistrations)
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
local response = cad:getDatabaseSyncConfigurationV2()

if response.success then
  print("Database sync enabled:", response.data.enabled)
else
  print(response.reason)
end
```

**Sonoran.js**

```javascript
(async () => {
  const cad = exports["sonorancad"].getCadClient();
  const response = await cad.getDatabaseSyncConfigurationV2();

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

var response = await sonoran.Cad.getDatabaseSyncConfigurationV2();
var configuration = response.data?.ToObject<DatabaseSyncConfigurationV2>();

if (response.success && configuration is not null)
{
    Debug.WriteLine($"Database sync enabled: {configuration.Enabled}");
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

  const response = await instance.cad.getDatabaseSyncConfigurationV2();

  if (response.success) {
    console.log(response.data);
  } else {
    console.error(response.reason);
  }
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

response = instance.cad.getDatabaseSyncConfigurationV2()

if response.success:
    print(response.data)
else:
    print(response.reason)
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

var response = await sonoran.Cad.getDatabaseSyncConfigurationV2();
var configuration = response.data?.ToObject<DatabaseSyncConfigurationV2>();

if (response.success && configuration is not null)
{
    Console.WriteLine($"Database sync enabled: {configuration.Enabled}");
    Console.WriteLine($"Character mapping enabled: {configuration.Character}");
    Console.WriteLine($"License mapping enabled: {configuration.Licenses}");
    Console.WriteLine($"Vehicle registration mapping enabled: {configuration.VehicleRegistrations}");
}
```
{% endtab %}

{% tab title="OpenAPI" %}
Import this YAML into Postman with **Import -> Raw text** to create a single-endpoint request collection for this route.

```yaml
openapi: "3.0.3"
info:
  title: "Sonoran CAD v2 - Get Database Sync Configuration"
  version: "1.0.0"
  description: "Retrieve database sync enabled states for the authenticated community."
servers:
  -
    url: "https://api.sonorancad.com"
paths:
  /v2/general/database-sync:
    get:
      summary: "Get Database Sync Configuration"
      operationId: "getDatabaseSyncConfiguration"
      responses:
        200:
          description: "Successful response"
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/DatabaseSyncConfiguration"
              example:
                enabled: true
                character: true
                licenses: false
                vehicleRegistrations: true
      security:
        -
          bearerAuth:
components:
  schemas:
    DatabaseSyncConfiguration:
      type: "object"
      required:
        - "enabled"
        - "character"
        - "licenses"
        - "vehicleRegistrations"
      properties:
        enabled:
          type: "boolean"
        character:
          type: "boolean"
        licenses:
          type: "boolean"
        vehicleRegistrations:
          type: "boolean"
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
  --url "https://api.sonorancad.com/v2/general/database-sync" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json"
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json` with only the overall database sync state and the three supported mapping states.

```json
{
  "enabled": true,
  "character": true,
  "licenses": false,
  "vehicleRegistrations": true
}
```
