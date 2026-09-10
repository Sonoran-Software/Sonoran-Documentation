---
description: Retrieve the community penal code configuration.
---

# Get Penal Codes

<mark style="color:green;">`GET`</mark> `https://api.sonorancad.com/v2/general/penal-codes`

> **Rate limit:** `4 requests per minute` Authenticated v2 endpoints are rate limited per API key rather than per IP address.

Return the configured penal codes for the authenticated community.

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

local response = sonoran.cad:getPenalCodesV2()

if response.success then
  print(("Found %d penal codes"):format(#response.data))
else
  print(response.reason)
end
```
{% endtab %}

{% tab title="SonoranCADFiveM" %}
Use this tab when calling the v2 API from the server side of an in-game FiveM resource.

* **Sonoran.lua** and **Sonoran.js:** use the `sonorancad` export to get the configured CAD client.
* **Sonoran.Net:** FiveM exports do not return a .NET client, so read the Sonoran CAD convars and create a client.
* **Sonoran.py:** FiveM does not run Python resources; use the Sonoran.py tab for external integrations.

The API key is stored in `sonoran_apiKey` as a protected FiveM convar. After `add_convar_permission` is configured, only explicitly permitted resources can read it. Grant access with `add_convar_permission your-resource-name read sonoran_apiKey`. If the API key changes in `config.json`, fully restart the `sonorancad` resource before reading the updated value.

**Sonoran.lua**

```lua
local cad = exports["sonorancad"]:getCadClient()
local response = cad:getPenalCodesV2()

if response.success then
  print(("Found %d penal codes"):format(#response.data))
else
  print(response.reason)
end
```

**Sonoran.js**

```javascript
(async () => {
  const cad = exports["sonorancad"].getCadClient();
  const response = await cad.getPenalCodesV2();

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
using System.Collections.Generic;
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

var response = await sonoran.Cad.getPenalCodesV2();
var penalCodes = response.data?.ToObject<List<PenalCodeV2>>() ?? new();

foreach (var penalCode in penalCodes)
{
    Debug.WriteLine($"{penalCode.Code}: {penalCode.Title}");
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

  const response = await instance.cad.getPenalCodesV2();
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

response = instance.cad.getPenalCodesV2()

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
using System.Collections.Generic;
using Sonoran;

using var sonoran = new SonoranClient(new SonoranClientOptions
{
    product = SonoranProduct.CAD,
    communityId = "YOUR_COMMUNITY_ID",
    apiKey = "YOUR_API_KEY",
    defaultServerId = 1
});

var response = await sonoran.Cad.getPenalCodesV2();
var penalCodes = response.data?.ToObject<List<PenalCodeV2>>() ?? new();

foreach (var penalCode in penalCodes)
{
    Console.WriteLine($"{penalCode.Code}: {penalCode.Title}");
}
```
{% endtab %}

{% tab title="OpenAPI" %}
Import this YAML into Postman with **Import -> Raw text** to create a single-endpoint request collection for this route.

```yaml
openapi: "3.0.3"
info:
  title: "Sonoran CAD v2 - Get Penal Codes"
  version: "1.0.0"
  description: "Retrieve the community penal code configuration."
servers:
  -
    url: "https://api.sonorancad.com"
paths:
  /v2/general/penal-codes:
    get:
      summary: "Get Penal Codes"
      operationId: "getPenalCodes"
      responses:
        200:
          description: "Successful response"
          content:
            application/json:
              schema:
                type: "array"
                items:
                  $ref: "#/components/schemas/PenalCode"
              example:
                -
                  title: "Unsafe Lane Change"
                  code: "22107"
                  type: "INFRACTION"
                  bondType: "NONE"
                  bondAmount: 0
                  jailTime: "0"
      security:
        -
          bearerAuth:
components:
  schemas:
    PenalCode:
      type: "object"
      properties:
        title:
          type: "string"
        code:
          type: "string"
        type:
          type: "string"
        bondType:
          type: "string"
        bondAmount:
          type: "integer"
        jailTime:
          type: "string"
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
  --url "https://api.sonorancad.com/v2/general/penal-codes" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json"
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
[
  {
    "title": "Unsafe Lane Change",
    "code": "22107",
    "type": "INFRACTION",
    "bondType": "NONE",
    "bondAmount": 0,
    "jailTime": "0"
  }
]
```
