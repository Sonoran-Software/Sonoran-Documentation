---
description: Replace one panel instance's live state and update connected CAD clients.
---

# Set Integration Panel State

<mark style="color:blue;">`PUT`</mark> `https://api.sonorancad.com/v2/integration-panels/servers/{serverId}/panels/{panelKey}/instances/{instanceKey}/state`

> **Rate limit:** `300 requests per minute` per API key.

Replace the complete state object for one panel instance. The update is immediately pushed to connected CAD clients on the selected server.

The panel must already exist. A panel may store up to 100 instances per server.

## Path Parameters

| Name          | Type    | Description                                      |
| ------------- | ------- | ------------------------------------------------ |
| `serverId`    | integer | Configured CAD server ID allowed by the API key. |
| `panelKey`    | string  | Stable panel key.                                |
| `instanceKey` | string  | Stable instance key, commonly `default`.         |

## Request Body

| Property | Type   | Required | Description                                  |
| -------- | ------ | -------- | -------------------------------------------- |
| `state`  | object | Yes      | Complete replacement state; maximum 512 KiB. |

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

local state = {
  summary = { active = 1, normal = 2 },
  alarms = {
    { id = "mrpd-lobby", name = "MRPD Lobby", active = true }
  }
}

local response = sonoran.cad:setIntegrationPanelStateV2(
  "example.fire-alarms",
  "default",
  state,
  1
)
print(response.success)
```
{% endtab %}

{% tab title="SonoranCADFiveM" %}
Use this tab from the **server side** of a FiveM resource. Never expose the API key to client scripts.

Sonoran.lua and Sonoran.js use the configured client exported by `sonorancad`. Sonoran.Net must read the CAD convars and create a client. Grant the resource access to the protected key with `add_convar_permission your-resource-name read sonoran_apiKey`.

**Sonoran.lua**

```lua
local cad = exports["sonorancad"]:getCadClient()
local response = cad:setIntegrationPanelStateV2(
  "example.fire-alarms",
  "default",
  {
    summary = { active = 1, normal = 2 },
    alarms = {
      { id = "mrpd-lobby", name = "MRPD Lobby", active = true }
    }
  }
)
```

**Sonoran.js**

```javascript
(async () => {
  const cad = exports["sonorancad"].getCadClient();
  const response = await cad.setIntegrationPanelStateV2(
    'example.fire-alarms',
    'default',
    {
      summary: { active: 1, normal: 2 },
      alarms: [{ id: 'mrpd-lobby', name: 'MRPD Lobby', active: true }],
    }
  );
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

var state = new Dictionary<string, object?>
{
    ["summary"] = new Dictionary<string, object?> { ["active"] = 1, ["normal"] = 2 },
    ["alarms"] = new[]
    {
        new Dictionary<string, object?> { ["id"] = "mrpd-lobby", ["name"] = "MRPD Lobby", ["active"] = true }
    }
};

var response = await sonoran.Cad.setIntegrationPanelStateV2(
    "example.fire-alarms",
    "default",
    state
);
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

  const state = {
    summary: { active: 1, normal: 2 },
    alarms: [{ id: 'mrpd-lobby', name: 'MRPD Lobby', active: true }],
  };

  const response = await instance.cad.setIntegrationPanelStateV2(
    'example.fire-alarms',
    'default',
    state,
    1
  );
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

state = {
    "summary": {"active": 1, "normal": 2},
    "alarms": [{"id": "mrpd-lobby", "name": "MRPD Lobby", "active": True}],
}

response = instance.cad.setIntegrationPanelStateV2(
    "example.fire-alarms",
    "default",
    state,
    1,
)
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

var state = new Dictionary<string, object?>
{
    ["summary"] = new Dictionary<string, object?> { ["active"] = 1, ["normal"] = 2 },
    ["alarms"] = new[]
    {
        new Dictionary<string, object?> { ["id"] = "mrpd-lobby", ["name"] = "MRPD Lobby", ["active"] = true }
    }
};

var response = await sonoran.Cad.setIntegrationPanelStateV2(
    "example.fire-alarms",
    "default",
    state,
    1
);
Console.WriteLine(response.success ? response.data : response.reason);
```
{% endtab %}

{% tab title="OpenAPI" %}
Import this YAML into Postman with **Import -> Raw text**.

```yaml
openapi: "3.0.3"
info:
  title: "Sonoran CAD v2 - Set Integration Panel State"
  version: "1.0.0"
servers:
  - url: "https://api.sonorancad.com"
paths:
  /v2/integration-panels/servers/{serverId}/panels/{panelKey}/instances/{instanceKey}/state:
    put:
      summary: "Set Integration Panel State"
      operationId: "replaceIntegrationPanelState"
      security:
        - bearerAuth:
      parameters:
        - name: "serverId"
          in: "path"
          required: true
          schema:
            type: "integer"
          example: 1
        - name: "panelKey"
          in: "path"
          required: true
          schema:
            type: "string"
          example: "example.fire-alarms"
        - name: "instanceKey"
          in: "path"
          required: true
          schema:
            type: "string"
          example: "default"
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: "object"
              required:
                - "state"
              properties:
                state:
                  type: "object"
                  additionalProperties: true
            example:
              state:
                summary:
                  active: 1
                  normal: 2
                alarms:
                  - id: "mrpd-lobby"
                    name: "MRPD Lobby"
                    active: true
      responses:
        200:
          description: "Stored state and revision"
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
  --url "https://api.sonorancad.com/v2/integration-panels/servers/1/panels/example.fire-alarms/instances/default/state" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
    "state": {
      "summary": { "active": 1, "normal": 2 },
      "alarms": [
        { "id": "mrpd-lobby", "name": "MRPD Lobby", "active": true }
      ]
    }
  }'
```
{% endtab %}
{% endtabs %}

## Response

```json
{
  "panelKey": "example.fire-alarms",
  "serverId": 1,
  "instanceKey": "default",
  "state": {
    "summary": { "active": 1, "normal": 2 },
    "alarms": [
      { "id": "mrpd-lobby", "name": "MRPD Lobby", "active": true }
    ]
  },
  "revision": 5,
  "updatedAt": "2026-08-25T18:01:00Z"
}
```
