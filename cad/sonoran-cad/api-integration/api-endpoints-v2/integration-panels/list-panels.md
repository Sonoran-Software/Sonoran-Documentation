---
description: >-
  List every active integration panel for the authenticated community with its
  stored instances.
---

# List Integration Panels

<mark style="color:green;">`GET`</mark> `https://api.sonorancad.com/v2/integration-panels`

> **Rate limit:** `120 requests per minute` per API key.

List every active integration panel for the authenticated community with its stored instances.

## Example Request

{% tabs %}
{% tab title="Sonoran.lua" %}
```lua
-- luarocks install sonoran.lua
local Sonoran = require("sonoran")
local sonoran = Sonoran.createClient({
  product = Sonoran.productEnums.CAD,
  communityId = "YOUR_COMMUNITY_ID",
  apiKey = "YOUR_API_KEY",
  defaultServerId = 1
})

local response = sonoran.cad:getIntegrationPanelsV2()
print(response.success)
```
{% endtab %}

{% tab title="SonoranCADFiveM" %}
Use this tab from the **server side** of a FiveM resource. Never expose the API key to client scripts.

Sonoran.lua and Sonoran.js use the configured client exported by `sonorancad`. Sonoran.Net must read the CAD convars and create a client. Grant the resource access to the protected key with `add_convar_permission your-resource-name read sonoran_apiKey`.

**Sonoran.lua**

```lua
local cad = exports["sonorancad"]:getCadClient()
local response = cad:getIntegrationPanelsV2()
print(response.success)
```

**Sonoran.js**

```javascript
(async () => {
  const cad = exports["sonorancad"].getCadClient();
  const response = await cad.getIntegrationPanelsV2();
  console.log(response.success ? response.data : response.reason);
})();
```

**Sonoran.Net**

```csharp
using CitizenFX.Core.Native;
using Sonoran;

var communityId = API.GetConvar("sonoran_communityID", "");
var apiKey = API.GetConvar("sonoran_apiKey", "");
var serverId = int.TryParse(API.GetConvar("sonoran_serverId", "1"), out var parsed) ? parsed : 1;

using var sonoran = new SonoranClient(new SonoranClientOptions
{
    product = SonoranProduct.CAD,
    communityId = communityId,
    apiKey = apiKey,
    defaultServerId = serverId
});

var response = await sonoran.Cad.getIntegrationPanelsV2();
```
{% endtab %}

{% tab title="Sonoran.js" %}
```javascript
// npm install @sonoransoftware/sonoran.js
const Sonoran = require('@sonoransoftware/sonoran.js');

(async () => {
  const instance = new Sonoran.Instance({
    communityId: 'YOUR_COMMUNITY_ID',
    apiKey: 'YOUR_API_KEY',
    product: Sonoran.productEnums.CAD,
    serverId: 1,
  });

  const response = await instance.cad.getIntegrationPanelsV2();
  console.log(response.success ? response.data : response.reason);
})();
```
{% endtab %}

{% tab title="Sonoran.py" %}
```python
# pip install Sonoran.py
from sonoran import Instance, productEnums

instance = Instance(
    apiKey="YOUR_API_KEY",
    communityId="YOUR_COMMUNITY_ID",
    product=productEnums.CAD,
    serverId=1,
)

response = instance.cad.getIntegrationPanelsV2()
print(response.data if response.success else response.reason)
```
{% endtab %}

{% tab title="Sonoran.Net" %}
```csharp
// dotnet add package Sonoran.Net
using System.Collections.Generic;
using Sonoran;

using var sonoran = new SonoranClient(new SonoranClientOptions
{
    product = SonoranProduct.CAD,
    communityId = "YOUR_COMMUNITY_ID",
    apiKey = "YOUR_API_KEY",
    defaultServerId = 1
});

var response = await sonoran.Cad.getIntegrationPanelsV2();
Console.WriteLine(response.success ? response.data : response.reason);
```
{% endtab %}

{% tab title="OpenAPI" %}
Import this YAML into Postman with **Import -> Raw text**.

```yaml
openapi: "3.0.3"
info:
  title: "Sonoran CAD v2 - List Integration Panels"
  version: "1.0.0"
servers:
  - url: "https://api.sonorancad.com"
paths:
  /v2/integration-panels:
    get:
      summary: "List Integration Panels"
      operationId: "listIntegrationPanels"
      security:
        - bearerAuth:
      responses:
        200:
          description: "Active panels and stored instances"
          content:
            application/json:
              schema:
                type: "array"
                items:
                  type: "object"
              example:
                - key: "example.fire-alarms"
                  name: "Fire Alarm"
                  definition:
                    schemaVersion: 1
                    name: "Fire Alarm"
                    body: []
                  instances:
                    - instanceKey: "default"
                      state: {}
                      revision: 4
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
curl --request GET \\
  --url "https://api.sonorancad.com/v2/integration-panels" \\
  --header "Authorization: Bearer YOUR_API_KEY" \\
  --header "Accept: application/json"
```
{% endtab %}
{% endtabs %}

## Response

```json
[
  {
    "id": "00000000-0000-0000-0000-000000000000",
    "key": "example.fire-alarms",
    "name": "Fire Alarm",
    "definition": { "schemaVersion": 1, "name": "Fire Alarm", "body": [] },
    "updatedAt": "2026-08-25T18:00:00Z",
    "instances": [
      { "instanceKey": "default", "state": {}, "revision": 4, "updatedAt": "2026-08-25T18:01:00Z" }
    ]
  }
]
```
