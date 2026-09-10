---
description: >-
  Disable an active integration panel. Its stored definition and runtime data
  are retained.
---

# Delete Integration Panel

<mark style="color:red;">`DELETE`</mark> `https://api.sonorancad.com/v2/integration-panels/{panelKey}`

> **Rate limit:** `30 requests per minute` per API key.

Disable an active integration panel. Its stored definition and runtime data are retained.

## Path Parameters

| Name       | Type   | Description       |
| ---------- | ------ | ----------------- |
| `panelKey` | string | Stable panel key. |

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

local response = sonoran.cad:deleteIntegrationPanelV2("example.fire-alarms")
print(response.success)
```
{% endtab %}

{% tab title="SonoranCADFiveM" %}
Use this tab from the **server side** of a FiveM resource. Never expose the API key to client scripts.

Sonoran.lua and Sonoran.js use the configured client exported by `sonorancad`. Sonoran.Net must read the CAD convars and create a client. Grant the resource access to the protected key with `add_convar_permission your-resource-name read sonoran_apiKey`.

**Sonoran.lua**

```lua
local cad = exports["sonorancad"]:getCadClient()
local response = cad:deleteIntegrationPanelV2("example.fire-alarms")
print(response.success)
```

**Sonoran.js**

```javascript
(async () => {
  const cad = exports["sonorancad"].getCadClient();
  const response = await cad.deleteIntegrationPanelV2('example.fire-alarms');
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

var response = await sonoran.Cad.deleteIntegrationPanelV2("example.fire-alarms");
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

  const response = await instance.cad.deleteIntegrationPanelV2('example.fire-alarms');
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

response = instance.cad.deleteIntegrationPanelV2("example.fire-alarms")
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

var response = await sonoran.Cad.deleteIntegrationPanelV2("example.fire-alarms");
Console.WriteLine(response.success ? response.data : response.reason);
```
{% endtab %}

{% tab title="OpenAPI" %}
Import this YAML into Postman with **Import -> Raw text**.

```yaml
openapi: "3.0.3"
info:
  title: "Sonoran CAD v2 - Delete Integration Panel"
  version: "1.0.0"
servers:
  - url: "https://api.sonorancad.com"
paths:
  /v2/integration-panels/{panelKey}:
    delete:
      summary: "Delete Integration Panel"
      operationId: "deleteIntegrationPanel"
      security:
        - bearerAuth:
      parameters:
        - name: "panelKey"
          in: "path"
          required: true
          schema:
            type: "string"
          example: "example.fire-alarms"
      responses:
        200:
          description: "Panel disabled"
          content:
            application/json:
              schema:
                type: "object"
              example:
                key: "example.fire-alarms"
                enabled: false
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
curl --request DELETE \\
  --url "https://api.sonorancad.com/v2/integration-panels/example.fire-alarms" \\
  --header "Authorization: Bearer YOUR_API_KEY" \\
  --header "Accept: application/json"
```
{% endtab %}
{% endtabs %}

## Response

```json
{
  "key": "example.fire-alarms",
  "enabled": false
}
```
