---
description: Poll CAD user actions for a custom Integration Panel.
---

# Poll Integration Panel Actions

<mark style="color:green;">`GET`</mark> `https://api.sonorancad.com/v2/integration-panels/servers/{serverId}/panels/{panelKey}/actions`

> **Rate limit:** `240 requests per minute` per API key.

Poll unexpired CAD user actions for a panel. Actions remain available until acknowledged or until their 60-second lifetime expires.

Process events in cursor order. Acknowledge each event after the third-party action finishes, then persist `nextCursor` for the next poll. If processing fails before acknowledgement, poll again with the prior cursor.

## Path Parameters

| Name       | Type    | Description                                      |
| ---------- | ------- | ------------------------------------------------ |
| `serverId` | integer | Configured CAD server ID allowed by the API key. |
| `panelKey` | string  | Stable panel key.                                |

## Query Parameters

| Name    | Type    | Default | Description                                          |
| ------- | ------- | ------- | ---------------------------------------------------- |
| `after` | integer | `0`     | Return events with a cursor greater than this value. |
| `limit` | integer | `100`   | Return 1-100 events.                                 |

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

local response = sonoran.cad:getIntegrationPanelActionsV2(
  "example.fire-alarms",
  { serverId = 1, after = 0, limit = 100 }
)

if response.success then
  for _, event in ipairs(response.data.events) do
    print(event.actionId, event.id)
  end
end
```
{% endtab %}

{% tab title="SonoranCADFiveM" %}
Use this tab from the **server side** of a FiveM resource. Never expose the API key to client scripts.

Sonoran.lua and Sonoran.js use the configured client exported by `sonorancad`. Sonoran.Net must read the CAD convars and create a client. Grant the resource access to the protected key with `add_convar_permission your-resource-name read sonoran_apiKey`.

**Sonoran.lua**

```lua
local cad = exports["sonorancad"]:getCadClient()
local response = cad:getIntegrationPanelActionsV2(
  "example.fire-alarms",
  { after = 0, limit = 100 }
)
```

**Sonoran.js**

```javascript
(async () => {
  const cad = exports["sonorancad"].getCadClient();
  const response = await cad.getIntegrationPanelActionsV2(
    'example.fire-alarms',
    { after: 0, limit: 100 }
  );
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

var response = await sonoran.Cad.getIntegrationPanelActionsV2(
    "example.fire-alarms",
    new GetIntegrationPanelActionsV2Query { After = 0, Limit = 100 }
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

  const response = await instance.cad.getIntegrationPanelActionsV2(
    'example.fire-alarms',
    { serverId: 1, after: 0, limit: 100 }
  );

  if (response.success) {
    for (const event of response.data.events) {
      console.log(event.actionId, event.id);
    }
  }
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

response = instance.cad.getIntegrationPanelActionsV2(
    "example.fire-alarms",
    {"serverId": 1, "after": 0, "limit": 100},
)

if response.success:
    for event in response.data["events"]:
        print(event["actionId"], event["id"])
```
{% endtab %}

{% tab title="Sonoran.Net" %}
```csharp
// dotnet add package Sonoran.Net
using Sonoran;

using var sonoran = new SonoranClient(new SonoranClientOptions
{
    product = SonoranProduct.CAD,
    communityId = "YOUR_COMMUNITY_ID",
    apiKey = "YOUR_API_KEY",
    defaultServerId = 1
});

var response = await sonoran.Cad.getIntegrationPanelActionsV2(
    "example.fire-alarms",
    new GetIntegrationPanelActionsV2Query
    {
        ServerId = 1,
        After = 0,
        Limit = 100
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
  title: "Sonoran CAD v2 - Poll Integration Panel Actions"
  version: "1.0.0"
servers:
  - url: "https://api.sonorancad.com"
paths:
  /v2/integration-panels/servers/{serverId}/panels/{panelKey}/actions:
    get:
      summary: "Poll Integration Panel Actions"
      operationId: "pollIntegrationPanelActions"
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
        - name: "after"
          in: "query"
          schema:
            type: "integer"
            format: "int64"
            minimum: 0
            default: 0
        - name: "limit"
          in: "query"
          schema:
            type: "integer"
            minimum: 1
            maximum: 100
            default: 100
      responses:
        200:
          description: "Pending actions and next cursor"
          content:
            application/json:
              schema:
                type: "object"
              example:
                events:
                  - cursor: 42
                    id: "11111111-1111-1111-1111-111111111111"
                    panelKey: "example.fire-alarms"
                    serverId: 1
                    instanceKey: "default"
                    actionId: "alarm.set-active"
                    actorUuid: "22222222-2222-2222-2222-222222222222"
                    actorName: "John Doe"
                    values:
                      alarmId: "mrpd-lobby"
                      active: false
                    createdAt: "2026-08-25T18:02:00Z"
                    expiresAt: "2026-08-25T18:03:00Z"
                nextCursor: 42
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
curl --request GET \
  --url "https://api.sonorancad.com/v2/integration-panels/servers/1/panels/example.fire-alarms/actions?after=0&limit=100" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json"
```
{% endtab %}
{% endtabs %}

## Response

```json
{
  "events": [
    {
      "cursor": 42,
      "id": "11111111-1111-1111-1111-111111111111",
      "panelKey": "example.fire-alarms",
      "serverId": 1,
      "instanceKey": "default",
      "actionId": "alarm.set-active",
      "actorUuid": "22222222-2222-2222-2222-222222222222",
      "actorName": "John Doe",
      "values": {
        "alarmId": "mrpd-lobby",
        "active": false
      },
      "createdAt": "2026-08-25T18:02:00Z",
      "expiresAt": "2026-08-25T18:03:00Z"
    }
  ],
  "nextCursor": 42
}
```
