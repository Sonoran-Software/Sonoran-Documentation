---
description: Create a dispatch call from a community-defined layout.
---

# Create Custom Dispatch Call

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/v2/emergency/servers/{serverId}/custom-dispatch-calls`

Create a dispatch call using a configured template. Call `GET /v2/emergency/dispatch-templates` first and key `values` by each field's `uid`.

The status field value must be a status option `id`, not the canonical numeric status. Sonoran CAD maps that option to pending, active, or closed behavior. Priority is a normal customizable select field: submit the selected text exactly as it appears in that field's `options` array. Unit targets are supplied through the target properties and are snapshotted into the required units field. The normalized template and complete value dictionary are stored on the call, so later template edits do not change historical calls.

## Path Parameters

| Name       | Type    | Description                       |
| ---------- | ------- | --------------------------------- |
| `serverId` | integer | Configured Sonoran CAD server ID. |

## Request Body

| Property             | Type                    | Required    | Description                                                                  |
| -------------------- | ----------------------- | ----------- | ---------------------------------------------------------------------------- |
| `templateId`         | integer                 | Yes         | Template returned by the dispatch-template endpoint.                         |
| `values`             | object                  | Yes         | Field values keyed by template field `uid`. Unknown keys are rejected.       |
| `identIds`           | array of integers       | Conditional | Active identifier IDs to attach. At least one valid unit target is required. |
| `accountUuid`        | string (uuid)           | Conditional | Account whose selected identifier is attached.                               |
| `accounts`           | array of strings (uuid) | Conditional | Accounts whose selected identifiers are attached.                            |
| `communityUserId`    | string                  | Conditional | One linked community user target.                                            |
| `communityUserIds`   | array of strings        | Conditional | Linked community user targets.                                               |
| `roblox`             | string                  | Conditional | Linked Roblox target.                                                        |
| `discord`            | string                  | Conditional | Linked Discord target.                                                       |
| `notes`              | array                   | No          | Initial call notes.                                                          |
| `metaData`           | object                  | No          | String metadata, including optional map coordinates.                         |
| `deleteAfterMinutes` | integer                 | No          | Schedule automatic call deletion.                                            |

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

local response = sonoran.cad:createCustomDispatchCallV2({
  serverId = 1,
  templateId = 1,
  values = {
    status = "deployed",
    priority = "Immediate",
    description = "Reports of a disturbance outside the station.",
    code = "GRADE_1",
    caller_name = "Alex Smith"
  },
  communityUserIds = {"player-1234"}
})
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
local response = cad:createCustomDispatchCallV2({
  templateId = 1,
  values = { status = "deployed", priority = "Immediate", description = "Disturbance reported." },
  communityUserIds = {"player-1234"}
})
```

**Sonoran.js**

```javascript
(async () => {
  const cad = exports["sonorancad"].getCadClient();
  const response = await cad.createCustomDispatchCallV2({
    templateId: 1,
    values: { status: 'deployed', priority: 'Immediate', description: 'Disturbance reported.' },
    communityUserIds: ['player-1234'],
  });
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

var response = await sonoran.Cad.createCustomDispatchCallV2(new CreateCustomDispatchCallV2Request
{
    TemplateId = 1,
    Values = new Dictionary<string, object?>
    {
        ["status"] = "deployed",
        ["description"] = "Disturbance reported."
    },
    CommunityUserIds = new[] { "player-1234" }
});
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

const response = await instance.cad.createCustomDispatchCallV2({
  serverId: 1,
  templateId: 1,
  values: {
    status: 'deployed',
    priority: 'Immediate',
    description: 'Reports of a disturbance outside the station.',
    code: 'GRADE_1',
    caller_name: 'Alex Smith',
  },
  communityUserIds: ['player-1234'],
});
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

response = instance.cad.createCustomDispatchCallV2({
    "serverId": 1,
    "templateId": 1,
    "values": {
        "status": "deployed",
        "priority": "Immediate",
        "description": "Reports of a disturbance outside the station.",
        "code": "GRADE_1",
        "caller_name": "Alex Smith",
    },
    "communityUserIds": ["player-1234"],
})
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

var response = await sonoran.Cad.createCustomDispatchCallV2(new CreateCustomDispatchCallV2Request
{
    ServerId = 1,
    TemplateId = 1,
    Values = new Dictionary<string, object?>
    {
        ["status"] = "deployed",
        ["priority"] = "Immediate",
        ["description"] = "Reports of a disturbance outside the station.",
        ["code"] = "GRADE_1",
        ["caller_name"] = "Alex Smith"
    },
    CommunityUserIds = new[] { "player-1234" }
});
```
{% endtab %}

{% tab title="OpenAPI" %}
```yaml
openapi: "3.0.3"
info:
  title: Sonoran CAD v2 - Create Custom Dispatch Call
  version: 1.0.0
servers:
  - url: https://api.sonorancad.com
paths:
  /v2/emergency/servers/{serverId}/custom-dispatch-calls:
    post:
      operationId: createCustomDispatchCall
      security:
        - bearerAuth: []
      parameters:
        - name: serverId
          in: path
          required: true
          schema: { type: integer, minimum: 1, example: 1 }
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [templateId, values]
              properties:
                templateId: { type: integer, minimum: 1 }
                values: { type: object, additionalProperties: true }
                identIds: { type: array, items: { type: integer } }
                accountUuid: { type: string, format: uuid }
                accounts: { type: array, items: { type: string, format: uuid } }
                communityUserId: { type: string }
                communityUserIds: { type: array, items: { type: string } }
                roblox: { type: string }
                discord: { type: string }
                notes: { type: array, items: { type: object } }
                metaData: { type: object, additionalProperties: { type: string } }
                deleteAfterMinutes: { type: integer, minimum: 0 }
            example:
              templateId: 1
              values:
                status: deployed
                priority: Immediate
                description: Reports of a disturbance outside the station.
                code: GRADE_1
                caller_name: Alex Smith
              communityUserIds: [player-1234]
      responses:
        '201': { description: Custom dispatch call created }
        '400': { description: Template values or required fields are invalid }
        '404': { description: Template or unit target not found }
components:
  securitySchemes:
    bearerAuth: { type: http, scheme: bearer, bearerFormat: JWT }
```
{% endtab %}

{% tab title="cURL" %}
```bash
curl --request POST \
  --url "https://api.sonorancad.com/v2/emergency/servers/1/custom-dispatch-calls" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "templateId": 1,
    "values": {
      "status": "deployed",
      "priority": "Immediate",
      "description": "Reports of a disturbance outside the station.",
      "code": "GRADE_1",
      "caller_name": "Alex Smith"
    },
    "communityUserIds": ["player-1234"]
  }'
```
{% endtab %}
{% endtabs %}

## Response

The response is the stored dispatch call. It includes canonical fields for existing integrations plus `template`, `values`, and `statusId` for the customized format.
