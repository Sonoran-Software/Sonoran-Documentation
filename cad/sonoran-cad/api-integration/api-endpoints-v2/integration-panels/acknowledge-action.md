---
description: Acknowledge a processed Integration Panel action and notify the CAD user.
---

# Acknowledge Integration Panel Action

<mark style="color:blue;">`POST`</mark> `https://api.sonorancad.com/v2/integration-panels/servers/{serverId}/panels/{panelKey}/actions/{eventId}/ack`

> **Rate limit:** `240 requests per minute` per API key.

Acknowledge an action after the third-party system finishes processing it. The result is pushed live to connected CAD clients.

## Path Parameters

| Name       | Type    | Description                                      |
| ---------- | ------- | ------------------------------------------------ |
| `serverId` | integer | Configured CAD server ID allowed by the API key. |
| `panelKey` | string  | Stable panel key.                                |
| `eventId`  | UUID    | Action event ID returned by the poll endpoint.   |

## Request Body

| Property  | Type    | Required | Description                                         |
| --------- | ------- | -------- | --------------------------------------------------- |
| `success` | boolean | Yes      | Whether the third-party action succeeded.           |
| `message` | string  | No       | User-facing result message; maximum 500 characters. |
| `result`  | object  | No       | Structured result data; maximum 32 KiB.             |

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

local response = sonoran.cad:acknowledgeIntegrationPanelActionV2(
  "example.fire-alarms",
  "11111111-1111-1111-1111-111111111111",
  {
    serverId = 1,
    success = true,
    message = "Alarm disabled",
    result = { alarmId = "mrpd-lobby", active = false }
  }
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
local response = cad:acknowledgeIntegrationPanelActionV2(
  "example.fire-alarms",
  event.id,
  {
    success = true,
    message = "Alarm disabled",
    result = { alarmId = "mrpd-lobby", active = false }
  }
)
```

**Sonoran.js**

```javascript
(async () => {
  const cad = exports["sonorancad"].getCadClient();
  const response = await cad.acknowledgeIntegrationPanelActionV2(
    'example.fire-alarms',
    event.id,
    {
      success: true,
      message: 'Alarm disabled',
      result: { alarmId: 'mrpd-lobby', active: false },
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

var response = await sonoran.Cad.acknowledgeIntegrationPanelActionV2(
    "example.fire-alarms",
    eventId,
    new AcknowledgeIntegrationPanelActionV2Request
    {
        Success = true,
        Message = "Alarm disabled",
        Result = new Dictionary<string, object?>
        {
            ["alarmId"] = "mrpd-lobby",
            ["active"] = false
        }
    }
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

  const response = await instance.cad.acknowledgeIntegrationPanelActionV2(
    'example.fire-alarms',
    '11111111-1111-1111-1111-111111111111',
    {
      serverId: 1,
      success: true,
      message: 'Alarm disabled',
      result: { alarmId: 'mrpd-lobby', active: false },
    }
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

response = instance.cad.acknowledgeIntegrationPanelActionV2(
    "example.fire-alarms",
    "11111111-1111-1111-1111-111111111111",
    {
        "serverId": 1,
        "success": True,
        "message": "Alarm disabled",
        "result": {"alarmId": "mrpd-lobby", "active": False},
    },
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

var response = await sonoran.Cad.acknowledgeIntegrationPanelActionV2(
    "example.fire-alarms",
    "11111111-1111-1111-1111-111111111111",
    new AcknowledgeIntegrationPanelActionV2Request
    {
        ServerId = 1,
        Success = true,
        Message = "Alarm disabled",
        Result = new Dictionary<string, object?>
        {
            ["alarmId"] = "mrpd-lobby",
            ["active"] = false
        }
    }
);
Console.WriteLine(response.success ? response.data : response.reason);
```
{% endtab %}

{% tab title="OpenAPI" %}
Import this YAML into Postman with **Import -> Raw text**.

```yaml
openapi: "3.0.3"
info:
  title: "Sonoran CAD v2 - Acknowledge Integration Panel Action"
  version: "1.0.0"
servers:
  - url: "https://api.sonorancad.com"
paths:
  /v2/integration-panels/servers/{serverId}/panels/{panelKey}/actions/{eventId}/ack:
    post:
      summary: "Acknowledge Integration Panel Action"
      operationId: "acknowledgeIntegrationPanelAction"
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
        - name: "eventId"
          in: "path"
          required: true
          schema:
            type: "string"
            format: "uuid"
          example: "11111111-1111-1111-1111-111111111111"
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: "object"
              required:
                - "success"
              properties:
                success:
                  type: "boolean"
                message:
                  type: "string"
                  maxLength: 500
                result:
                  type: "object"
                  additionalProperties: true
            example:
              success: true
              message: "Alarm disabled"
              result:
                alarmId: "mrpd-lobby"
                active: false
      responses:
        200:
          description: "Acknowledged action"
          content:
            application/json:
              schema:
                type: "object"
              example:
                panelKey: "example.fire-alarms"
                serverId: 1
                eventId: "11111111-1111-1111-1111-111111111111"
                success: true
                message: "Alarm disabled"
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
curl --request POST \
  --url "https://api.sonorancad.com/v2/integration-panels/servers/1/panels/example.fire-alarms/actions/11111111-1111-1111-1111-111111111111/ack" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
    "success": true,
    "message": "Alarm disabled",
    "result": {
      "alarmId": "mrpd-lobby",
      "active": false
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
  "eventId": "11111111-1111-1111-1111-111111111111",
  "success": true,
  "message": "Alarm disabled"
}
```
