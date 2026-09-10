---
description: Create or replace a custom Integration Panel definition.
---

# Set Integration Panel

<mark style="color:blue;">`PUT`</mark> `https://api.sonorancad.com/v2/integration-panels/{panelKey}`

> **Rate limit:** `30 requests per minute` per API key.

Create a new panel or replace the complete definition of an existing panel. If `definition.key` is present, it must match `panelKey`.

## Path Parameters

| Name       | Type   | Description                      |
| ---------- | ------ | -------------------------------- |
| `panelKey` | string | Stable 2-80 character panel key. |

## Request Body

| Property     | Type   | Required | Description                                 |
| ------------ | ------ | -------- | ------------------------------------------- |
| `definition` | object | Yes      | Complete schema version 1 panel definition. |

See the [Manifest Reference](manifest-reference.md) for every definition option.

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

local definition = {
  schemaVersion = 1,
  key = "example.fire-alarms",
  name = "Fire Alarm",
  icon = "fas fa-bell",
  surfaces = { "dispatch", "fire" },
  body = {
    { type = "text", text = "Connected to the alarm controller." }
  }
}

local response = sonoran.cad:setIntegrationPanelV2("example.fire-alarms", definition)
print(response.success)
```
{% endtab %}

{% tab title="SonoranCADFiveM" %}
Use this tab from the **server side** of a FiveM resource. Never expose the API key to client scripts.

Sonoran.lua and Sonoran.js use the configured client exported by `sonorancad`. Sonoran.Net must read the CAD convars and create a client. Grant the resource access to the protected key with `add_convar_permission your-resource-name read sonoran_apiKey`.

**Sonoran.lua**

```lua
local cad = exports["sonorancad"]:getCadClient()
local definition = {
  schemaVersion = 1,
  key = "example.fire-alarms",
  name = "Fire Alarm",
  icon = "fas fa-bell",
  body = {
    { type = "text", text = "Connected to the alarm controller." }
  }
}

local response = cad:setIntegrationPanelV2("example.fire-alarms", definition)
```

**Sonoran.js**

```javascript
(async () => {
  const cad = exports["sonorancad"].getCadClient();
  const definition = {
    schemaVersion: 1,
    key: 'example.fire-alarms',
    name: 'Fire Alarm',
    icon: 'fas fa-bell',
    body: [{ type: 'text', text: 'Connected to the alarm controller.' }],
  };

  const response = await cad.setIntegrationPanelV2('example.fire-alarms', definition);
})();
```

**Sonoran.Net**

```csharp
using System.Collections.Generic;
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

var definition = new IntegrationPanelDefinitionV2
{
    Key = "example.fire-alarms",
    Name = "Fire Alarm",
    Icon = "fas fa-bell",
    Body = new[]
    {
        new Dictionary<string, object?>
        {
            ["type"] = "text",
            ["text"] = "Connected to the alarm controller."
        }
    }
};

var response = await sonoran.Cad.setIntegrationPanelV2("example.fire-alarms", definition);
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

  const definition = {
    schemaVersion: 1,
    key: 'example.fire-alarms',
    name: 'Fire Alarm',
    icon: 'fas fa-bell',
    surfaces: ['dispatch', 'fire'],
    body: [{ type: 'text', text: 'Connected to the alarm controller.' }],
  };

  const response = await instance.cad.setIntegrationPanelV2('example.fire-alarms', definition);
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

definition = {
    "schemaVersion": 1,
    "key": "example.fire-alarms",
    "name": "Fire Alarm",
    "icon": "fas fa-bell",
    "surfaces": ["dispatch", "fire"],
    "body": [{"type": "text", "text": "Connected to the alarm controller."}],
}

response = instance.cad.setIntegrationPanelV2("example.fire-alarms", definition)
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

var definition = new IntegrationPanelDefinitionV2
{
    Key = "example.fire-alarms",
    Name = "Fire Alarm",
    Icon = "fas fa-bell",
    Surfaces = new[] { "dispatch", "fire" },
    Body = new[]
    {
        new Dictionary<string, object?>
        {
            ["type"] = "text",
            ["text"] = "Connected to the alarm controller."
        }
    }
};

var response = await sonoran.Cad.setIntegrationPanelV2("example.fire-alarms", definition);
Console.WriteLine(response.success ? response.data : response.reason);
```
{% endtab %}

{% tab title="OpenAPI" %}
Import this YAML into Postman with **Import -> Raw text**.

```yaml
openapi: "3.0.3"
info:
  title: "Sonoran CAD v2 - Set Integration Panel"
  version: "1.0.0"
servers:
  - url: "https://api.sonorancad.com"
paths:
  /v2/integration-panels/{panelKey}:
    put:
      summary: "Set Integration Panel"
      operationId: "putIntegrationPanel"
      security:
        - bearerAuth:
      parameters:
        - name: "panelKey"
          in: "path"
          required: true
          schema:
            type: "string"
          example: "example.fire-alarms"
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: "object"
              required:
                - "definition"
              properties:
                definition:
                  type: "object"
            example:
              definition:
                schemaVersion: 1
                key: "example.fire-alarms"
                name: "Fire Alarm"
                icon: "fas fa-bell"
                surfaces:
                  - "dispatch"
                  - "fire"
                body:
                  - type: "text"
                    text: "Connected to the alarm controller."
      responses:
        200:
          description: "Created or replaced panel"
          content:
            application/json:
              schema:
                type: "object"
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
curl --request PUT \
  --url "https://api.sonorancad.com/v2/integration-panels/example.fire-alarms" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
    "definition": {
      "schemaVersion": 1,
      "key": "example.fire-alarms",
      "name": "Fire Alarm",
      "icon": "fas fa-bell",
      "surfaces": ["dispatch", "fire"],
      "body": [
        { "type": "text", "text": "Connected to the alarm controller." }
      ]
    }
  }'
```
{% endtab %}
{% endtabs %}

## Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "key": "example.fire-alarms",
  "name": "Fire Alarm",
  "definition": {
    "schemaVersion": 1,
    "key": "example.fire-alarms",
    "name": "Fire Alarm",
    "icon": "fas fa-bell",
    "surfaces": ["dispatch", "fire"],
    "body": [
      { "type": "text", "text": "Connected to the alarm controller." }
    ]
  },
  "updatedAt": "2026-08-25T18:00:00Z",
  "instances": []
}
```
