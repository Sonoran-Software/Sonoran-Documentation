---
description: Create a new dispatch call.
---

# Create Dispatch Call

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/v2/emergency/servers/{serverId}/dispatch-calls`

> **Rate limit:** `20 requests per minute`\
> Authenticated v2 endpoints are rate limited per API key rather than per IP address.

Create a new dispatch call and optionally attach initial units resolved from community user IDs, linked Roblox IDs, linked Discord IDs, or account UUIDs.

## Path Parameters

| Name       | Type    | Description                       |
| ---------- | ------- | --------------------------------- |
| `serverId` | integer | Configured Sonoran CAD server ID. |

## Request Body

The request must include at least one target property: `communityUserIds`, `accounts`, `roblox`, or `discord`. To create an unassigned call, send `communityUserIds: []` or `accounts: []`.

| Property             | Type                    | Required    | Description                                                                                                                                                                                                                               |
| -------------------- | ----------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `origin`             | integer                 | Yes         | Call origin enum. See `CALL_ORIGIN` below.                                                                                                                                                                                                |
| `status`             | integer                 | Yes         | Call status enum. See `CALL_STATUS` below.                                                                                                                                                                                                |
| `priority`           | integer                 | Yes         | Call priority.                                                                                                                                                                                                                            |
| `block`              | string                  | No          | Block or intersection label.                                                                                                                                                                                                              |
| `address`            | string                  | No          | Dispatch address text.                                                                                                                                                                                                                    |
| `postal`             | string                  | No          | Postal code.                                                                                                                                                                                                                              |
| `title`              | string                  | Yes         | Short dispatch title.                                                                                                                                                                                                                     |
| `code`               | string                  | No          | Call code such as `211`.                                                                                                                                                                                                                  |
| `description`        | string                  | No          | Full call description.                                                                                                                                                                                                                    |
| `notes`              | array                   | No          | Initial note objects to store on the call.                                                                                                                                                                                                |
| `communityUserIds`   | array of strings        | Conditional | Linked community users whose active identifiers should be attached. An empty array creates an unassigned call.                                                                                                                            |
| `roblox`             | string                  | Conditional | Roblox user ID whose linked account's active identifiers should be attached.                                                                                                                                                              |
| `discord`            | string                  | Conditional | Discord user ID whose linked account's active identifiers should be attached.                                                                                                                                                             |
| `accounts`           | array of strings (uuid) | Conditional | Accounts whose selected identifiers should be attached. An empty array creates an unassigned call.                                                                                                                                        |
| `metaData`           | object                  | No          | Additional string key/value metadata. Pass `x` and `y` coordinate values to enable live map placement and coordinate-based search actions. `z`, `radius`, `postal`, `block`, `code`, and `priority` may also be supplied when applicable. |
| `deleteAfterMinutes` | integer                 | No          | Schedule automatic deletion after creation.                                                                                                                                                                                               |

```json
{
  "origin": 0,
  "status": 1,
  "priority": 1,
  "block": "100",
  "address": "Mission Row",
  "postal": "9001",
  "title": "Armed Robbery",
  "code": "211",
  "description": "Clerk reports a firearm.",
  "notes": [],
  "communityUserIds": ["player-1234"],
  "metaData": {
    "source": "integration",
    "x": "425.1",
    "y": "-979.2",
    "z": "30.7",
    "radius": "75"
  }
}
```

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

local response = sonoran.cad:createDispatchCallV2({
    serverId = 1,
    origin = 1,
    status = 1,
    priority = 1,
    block = '101',
    address = 'Alta Street',
    postal = '100',
    title = 'Structure Fire',
    code = 'FIRE',
    description = 'Visible smoke from the roof.',
    notes = {},
    communityUserIds = {'player-1234'},
    metaData = {
      source = 'integration',
      x = '425.1',
      y = '-979.2',
      z = '30.7',
      radius = '75',
    },
  })

-- Inspect response.success, response.data, or response.reason as needed.
print(response.success)
```
{% endtab %}

{% tab title="SonoranCADFiveM" %}
Use this tab only when calling the v2 API from the server side of an in-game FiveM resource.

* **Sonoran.lua** and **Sonoran.js:** use the `sonorancad` export to get the ready CAD client.
* **Sonoran.Net:** FiveM exports do not return a .NET client. Read the Sonoran CAD convars and create a fresh client.
* **Sonoran.py:** FiveM does not run Python resources; use the Python tab for external integrations.

The API key is stored in `sonoran_apiKey` as a protected FiveM convar. FiveM restricts a convar after `add_convar_permission` is configured, so only explicitly permitted resources can read it. Grant another resource access with `add_convar_permission your-resource-name read sonoran_apiKey`. If you change the API key in `config.json`, fully restart the `sonorancad` resource before reading the updated convar value.

**Sonoran.lua**

```lua
local cad = exports["sonorancad"]:getCadClient()
```

**Sonoran.js**

```javascript
const cad = exports["sonorancad"].getCadClient();
```

**Sonoran.Net**

```csharp
// dotnet add package Sonoran.Net
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
```

After getting the Lua export client:

```lua
local response = cad:createDispatchCallV2({
    serverId = 1,
    origin = 1,
    status = 1,
    priority = 1,
    block = '101',
    address = 'Alta Street',
    postal = '100',
    title = 'Structure Fire',
    code = 'FIRE',
    description = 'Visible smoke from the roof.',
    notes = {},
    communityUserIds = {'player-1234'},
    metaData = {
      source = 'integration',
      x = '425.1',
      y = '-979.2',
      z = '30.7',
      radius = '75',
    },
  })

-- Inspect response.success, response.data, or response.reason as needed.
print(response.success)
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

  const response = await instance.cad.createDispatchCallV2({
    serverId: 1,
    origin: 1,
    status: 1,
    priority: 1,
    block: '101',
    address: 'Alta Street',
    postal: '100',
    title: 'Structure Fire',
    code: 'FIRE',
    description: 'Visible smoke from the roof.',
    notes: [],
    communityUserIds: ['player-1234'],
    metaData: {
      source: 'integration',
      x: '425.1',
      y: '-979.2',
      z: '30.7',
      radius: '75',
    },
  });
  console.log(response);
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

response = instance.cad.createDispatchCallV2({
    "serverId": 1,
    "origin": 1,
    "status": 1,
    "priority": 1,
    "block": '101',
    "address": 'Alta Street',
    "postal": '100',
    "title": 'Structure Fire',
    "code": 'FIRE',
    "description": 'Visible smoke from the roof.',
    "notes": [],
    "communityUserIds": ['player-1234'],
    "metaData": {
      "source": 'integration',
      "x": '425.1',
      "y": '-979.2',
      "z": '30.7',
      "radius": '75',
    },
  })

print(response.success)
print(response.data if response.success else response.reason)
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

var response = await sonoran.Cad.createDispatchCallV2(new CreateDispatchCallV2Request
{
    ServerId = 1,
    Origin = 0,
    Status = 1,
    Priority = 1,
    Block = "Alta St / Integrity Way",
    Address = "101 Alta Street",
    Postal = "9001",
    Title = "Structure Fire",
    Code = "10-70",
    Description = "Visible smoke coming from the second floor.",
    Notes = new[]
    {
        new DispatchCallNoteV2
        {
            Label = "Dispatch",
            Type = "INFO",
            Content = "Caller reports flames visible from the rear alley."
        }
    },
    CommunityUserIds = new[] { "player-1234" },
    DeleteAfterMinutes = 30
});

Console.WriteLine(response.success);
Console.WriteLine(response.data);
```
{% endtab %}

{% tab title="OpenAPI" %}
Import this YAML into Postman with **Import -> Raw text** to create a single-endpoint request collection for this route.

```yaml
openapi: "3.0.3"
info:
  title: "Sonoran CAD v2 - Create Dispatch Call"
  version: "1.0.0"
  description: "Create a new dispatch call."
servers:
  -
    url: "https://api.sonorancad.com"
paths:
  /v2/emergency/servers/{serverId}/dispatch-calls:
    post:
      summary: "Create Dispatch Call"
      operationId: "createDispatchCall"
      responses:
        201:
          description: "Dispatch call created"
          content:
            application/json:
              schema:
                type: "object"
              example:
                callId: 501
                origin: 0
                status: 1
                priority: 1
                block: "100"
                address: "Mission Row"
                postal: "9001"
                title: "Armed Robbery"
                code: "211"
                primary: 12
                trackPrimary: false
                description: "Clerk reports a firearm."
                notes:
                  - time: "2026-04-08T21:30:00Z"
                    label: "Sonoran CAD"
                    type: "text"
                    content: "Caller is hiding."
                idents:
                  - 12
                  - 18
                metaData:
                  source: "integration"
                  x: "425.1"
                  y: "-979.2"
                  z: "30.7"
                  radius: "75"
                updated: "2026-04-08T21:30:00Z"
      parameters:
        -
          description: "Configured Sonoran CAD server ID."
          name: "serverId"
          in: "path"
          schema:
            type: "integer"
          example: 1
          required: true
      security:
        -
          bearerAuth:
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: "object"
            example:
              origin: 0
              status: 1
              priority: 1
              block: "100"
              address: "Mission Row"
              postal: "9001"
              title: "Armed Robbery"
              code: "211"
              description: "Clerk reports a firearm."
              notes: []
              communityUserIds:
                - "player-1234"
              metaData:
                source: "integration"
                x: "425.1"
                y: "-979.2"
                z: "30.7"
                radius: "75"
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
  --url "https://api.sonorancad.com/v2/emergency/servers/1/dispatch-calls" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
  "origin": 0,
  "status": 1,
  "priority": 1,
  "block": "100",
  "address": "Mission Row",
  "postal": "9001",
  "title": "Armed Robbery",
  "code": "211",
  "description": "Clerk reports a firearm.",
  "notes": [],
  "communityUserIds": ["player-1234"],
  "metaData": {
    "source": "integration",
    "x": "425.1",
    "y": "-979.2",
    "z": "30.7",
    "radius": "75"
  }
}'
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
{
  "callId": 501,
  "origin": 0,
  "status": 1,
  "priority": 1,
  "block": "100",
  "address": "Mission Row",
  "postal": "9001",
  "title": "Armed Robbery",
  "code": "211",
  "primary": 12,
  "trackPrimary": false,
  "description": "Clerk reports a firearm.",
  "notes": [
    {
      "time": "2026-04-08T21:30:00Z",
      "label": "Sonoran CAD",
      "type": "text",
      "content": "Caller is hiding."
    }
  ],
  "idents": [
    12,
    18
  ],
  "metaData": {
    "source": "integration",
    "x": "425.1",
    "y": "-979.2",
    "z": "30.7",
    "radius": "75"
  },
  "updated": "2026-04-08T21:30:00Z"
}
```

## Enumeration Values

### CALL\_STATUS

| Value | Description |
| ----- | ----------- |
| `0`   | `PENDING`   |
| `1`   | `ACTIVE`    |
| `2`   | `CLOSED`    |

### CALL\_ORIGIN

| Value | Description      |
| ----- | ---------------- |
| `0`   | `CALLER`         |
| `1`   | `RADIO_DISPATCH` |
| `2`   | `OBSERVED`       |
| `3`   | `WALK_UP`        |
