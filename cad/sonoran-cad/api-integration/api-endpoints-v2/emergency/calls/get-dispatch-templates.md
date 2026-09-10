---
description: >-
  Retrieve the custom dispatch call layouts configured for the authenticated
  community.
---

# Get Dispatch Templates

<mark style="color:green;">`GET`</mark> `https://api.sonorancad.com/v2/emergency/dispatch-templates`

Retrieve every dispatch layout for the community. Add `/{templateId}` to retrieve one layout. Use the returned field `uid` values when creating a custom dispatch call.

A template contains grouped `sections`, responsive field widths, and custom `statusOptions`. Each status option maps its community-facing label and API `id` to the canonical call behavior: `0` pending, `1` active, or `2` closed.

Fields with the `status`, `units`, or `description` binding are locked and required. Priority is represented as a standard `select` field whose text options are fully controlled by the community. The code field's visible label is controlled by the community's geographical 10-code setting.

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

local response = sonoran.cad:getDispatchTemplatesV2()
if response.success then
  print(("Found %d dispatch templates"):format(#response.data))
end
```
{% endtab %}

{% tab title="SonoranCADFiveM" %}
Use this tab when calling the v2 API from the server side of an in-game FiveM resource.

* **Sonoran.lua** and **Sonoran.js:** use the `sonorancad` export to get the configured CAD client.
* **Sonoran.Net:** read the protected Sonoran CAD convars and create a client.
* **Sonoran.py:** FiveM does not run Python resources; use the Sonoran.py tab for external integrations.

**Sonoran.lua**

```lua
local cad = exports["sonorancad"]:getCadClient()
local response = cad:getDispatchTemplatesV2()
```

**Sonoran.js**

```javascript
(async () => {
  const cad = exports["sonorancad"].getCadClient();
  const response = await cad.getDispatchTemplatesV2();
  console.log(response.data);
})();
```

**Sonoran.Net**

```csharp
using System.Collections.Generic;
using CitizenFX.Core.Native;
using Sonoran;

var serverId = int.TryParse(API.GetConvar("sonoran_serverId", "1"), out var parsed) ? parsed : 1;
using var sonoran = new SonoranClient(new SonoranClientOptions
{
    product = SonoranProduct.CAD,
    communityId = API.GetConvar("sonoran_communityID", ""),
    apiKey = API.GetConvar("sonoran_apiKey", ""),
    defaultServerId = serverId
});

var response = await sonoran.Cad.getDispatchTemplatesV2();
var templates = response.data?.ToObject<List<DispatchTemplateV2>>() ?? new();
```
{% endtab %}

{% tab title="Sonoran.js" %}
```javascript
// npm install @sonoransoftware/sonoran.js
const Sonoran = require('@sonoransoftware/sonoran.js');

const instance = new Sonoran.Instance({
  communityId: 'YOUR_COMMUNITY_ID',
  apiKey: 'YOUR_API_KEY',
  product: Sonoran.productEnums.CAD,
  serverId: 1,
});

const response = await instance.cad.getDispatchTemplatesV2();
console.log(response.data);
```
{% endtab %}

{% tab title="Sonoran.py" %}
```python
# pip install Sonoran.py
# Sonoran.py is for external Python integrations.
from sonoran import Instance, productEnums

instance = Instance(
    apiKey="YOUR_API_KEY",
    communityId="YOUR_COMMUNITY_ID",
    product=productEnums.CAD,
    serverId=1,
)

response = instance.cad.getDispatchTemplatesV2()
print(response.data)
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

var response = await sonoran.Cad.getDispatchTemplatesV2();
var templates = response.data?.ToObject<List<DispatchTemplateV2>>() ?? new();
```
{% endtab %}

{% tab title="OpenAPI" %}
```yaml
openapi: "3.0.3"
info:
  title: Sonoran CAD v2 - Dispatch Templates
  version: 1.0.0
servers:
  - url: https://api.sonorancad.com
paths:
  /v2/emergency/dispatch-templates:
    get:
      operationId: getDispatchTemplates
      security:
        - bearerAuth: []
      responses:
        '200':
          description: Community dispatch templates
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/DispatchTemplate'
  /v2/emergency/dispatch-templates/{templateId}:
    get:
      operationId: getDispatchTemplate
      security:
        - bearerAuth: []
      parameters:
        - name: templateId
          in: path
          required: true
          schema: { type: integer, minimum: 1 }
      responses:
        '200':
          description: Dispatch template
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/DispatchTemplate'
        '404': { description: Template not found }
components:
  securitySchemes:
    bearerAuth: { type: http, scheme: bearer, bearerFormat: JWT }
  schemas:
    DispatchTemplate:
      type: object
      properties:
        templateId: { type: integer }
        name: { type: string }
        version: { type: integer }
        isDefault: { type: boolean }
        statusOptions:
          type: array
          items:
            type: object
            properties:
              id: { type: string }
              label: { type: string }
              status: { type: integer, enum: [0, 1, 2] }
        sections:
          type: array
          items:
            type: object
            properties:
              uid: { type: string }
              label: { type: string }
              icon: { type: string }
              size: { type: integer, minimum: 4, maximum: 12 }
              fields:
                type: array
                items:
                  type: object
                  properties:
                    uid: { type: string }
                    type: { type: string }
                    label: { type: string }
                    binding: { type: string }
                    size: { type: integer, minimum: 1, maximum: 12 }
                    required: { type: boolean }
                    locked: { type: boolean }
                    placeholder: { type: string }
                    options: { type: array, items: { type: string } }
```
{% endtab %}

{% tab title="cURL" %}
```bash
curl --request GET \
  --url "https://api.sonorancad.com/v2/emergency/dispatch-templates" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json"
```
{% endtab %}
{% endtabs %}

## Response

```json
[
  {
    "templateId": 1,
    "name": "UK Control Room",
    "version": 2,
    "isDefault": true,
    "statusOptions": [
      { "id": "awaiting_deployment", "label": "Awaiting Deployment", "status": 0 },
      { "id": "deployed", "label": "Deployed", "status": 1 },
      { "id": "resolved", "label": "Resolved", "status": 2 }
    ],
    "sections": [
      {
        "uid": "call_source",
        "label": "Call Source",
        "icon": "fas fa-broadcast-tower",
        "size": 6,
        "fields": []
      }
    ]
  }
]
```
