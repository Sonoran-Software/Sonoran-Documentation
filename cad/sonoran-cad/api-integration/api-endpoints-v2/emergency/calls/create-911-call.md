---
description: Create a new 911 call for a server.
---

# Create 911 Call

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/v2/emergency/servers/{serverId}/calls/911`

> **Rate limit:** `10 requests per minute`\
> Authenticated v2 endpoints are rate limited per API key rather than per IP address.

Create a new 911 call for a server.

## Path Parameters

| Name       | Type    | Description                       |
| ---------- | ------- | --------------------------------- |
| `serverId` | integer | Configured Sonoran CAD server ID. |

## Request Body

Common `metaData` keys used by the CAD:

| Property             | Type    | Required | Description                                                                                                                                                                                                                                                |
| -------------------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isEmergency`        | boolean | Yes      | Whether the 911 should be marked as an emergency call.                                                                                                                                                                                                     |
| `caller`             | string  | Yes      | Caller name or label shown in CAD.                                                                                                                                                                                                                         |
| `location`           | string  | Yes      | Human-readable location or address.                                                                                                                                                                                                                        |
| `description`        | string  | Yes      | Call details shown to dispatchers.                                                                                                                                                                                                                         |
| `deleteAfterMinutes` | integer | No       | Schedule automatic deletion after creation.                                                                                                                                                                                                                |
| `metaData`           | object  | No       | Additional string key/value metadata. Pass `x` and `y` coordinate values to enable live map placement, 911 screenshot rendering, and coordinate-based dispatch tools. `z`, `postal`, `block`, `code`, and `priority` may also be supplied when applicable. |

```json
{
  "isEmergency": true,
  "caller": "911 Caller",
  "location": "Alta St / Integrity Way",
  "description": "Shots fired",
  "deleteAfterMinutes": 15,
  "metaData": {
    "source": "integration",
    "x": "425.1",
    "y": "-979.2",
    "z": "30.7",
    "postal": "9001"
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

local response = sonoran.cad:createEmergencyCallV2({
    serverId = 1,
    isEmergency = true,
    caller = 'John Doe',
    location = '101 Alta Street',
    description = 'Structure fire with visible smoke.',
    deleteAfterMinutes = 30,
    metaData = {
      source = 'integration',
      x = '425.1',
      y = '-979.2',
      z = '30.7',
      postal = '9001',
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
local response = cad:createEmergencyCallV2({
    serverId = 1,
    isEmergency = true,
    caller = 'John Doe',
    location = '101 Alta Street',
    description = 'Structure fire with visible smoke.',
    deleteAfterMinutes = 30,
    metaData = {
      source = 'integration',
      x = '425.1',
      y = '-979.2',
      z = '30.7',
      postal = '9001',
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

  const response = await instance.cad.createEmergencyCallV2({
    serverId: 1,
    isEmergency: true,
    caller: 'John Doe',
    location: '101 Alta Street',
    description: 'Structure fire with visible smoke.',
    deleteAfterMinutes: 30,
    metaData: {
      source: 'integration',
      x: '425.1',
      y: '-979.2',
      z: '30.7',
      postal: '9001',
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

response = instance.cad.createEmergencyCallV2({
    "serverId": 1,
    "isEmergency": True,
    "caller": 'John Doe',
    "location": '101 Alta Street',
    "description": 'Structure fire with visible smoke.',
    "deleteAfterMinutes": 30,
    "metaData": {
      "source": 'integration',
      "x": '425.1',
      "y": '-979.2',
      "z": '30.7',
      "postal": '9001',
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

var response = await sonoran.Cad.createEmergencyCallV2(new CreateEmergencyCallV2Request
{
    ServerId = 1,
    IsEmergency = true,
    Caller = "John Doe",
    Location = "101 Alta Street",
    Description = "Structure fire with visible smoke.",
    DeleteAfterMinutes = 30,
    MetaData = new Dictionary<string, string>
    {
        ["source"] = "integration",
        ["x"] = "425.1",
        ["y"] = "-979.2",
        ["z"] = "30.7",
        ["postal"] = "9001"
    }
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
  title: "Sonoran CAD v2 - Create 911 Call"
  version: "1.0.0"
  description: "Create a new 911 call for a server."
servers:
  -
    url: "https://api.sonorancad.com"
paths:
  /v2/emergency/servers/{serverId}/calls/911:
    post:
      summary: "Create 911 Call"
      operationId: "create911Call"
      responses:
        200:
          description: "Successful response"
          content:
            application/json:
              schema:
                type: "object"
              example:
                callId: 302
                isEmergency: true
                caller: "Jane Doe"
                location: "Innocence Blvd"
                description: "Medical emergency reported."
                metaData:
                  phone: "555-0100"
                  x: "425.1"
                  y: "-979.2"
                  z: "30.7"
                  postal: "9001"
                updated: "2026-04-08T21:31:00Z"
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
              isEmergency: true
              caller: "911 Caller"
              location: "Alta St / Integrity Way"
              description: "Shots fired"
              deleteAfterMinutes: 15
              metaData:
                source: "integration"
                x: "425.1"
                y: "-979.2"
                z: "30.7"
                postal: "9001"
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
  --url "https://api.sonorancad.com/v2/emergency/servers/1/calls/911" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
  "isEmergency": true,
  "caller": "911 Caller",
  "location": "Alta St / Integrity Way",
  "description": "Shots fired",
  "deleteAfterMinutes": 15,
  "metaData": {
    "source": "integration",
    "x": "425.1",
    "y": "-979.2",
    "z": "30.7",
    "postal": "9001"
  }
}'
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
{
  "callId": 302,
  "isEmergency": true,
  "caller": "Jane Doe",
  "location": "Innocence Blvd",
  "description": "Medical emergency reported.",
  "metaData": {
    "phone": "555-0100",
    "x": "425.1",
    "y": "-979.2",
    "z": "30.7",
    "postal": "9001"
  },
  "updated": "2026-04-08T21:31:00Z"
}
```
