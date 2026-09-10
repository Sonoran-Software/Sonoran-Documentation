---
description: Create a new custom record using template replacement values.
---

# Create Record

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/v2/general/records`

> **Rate limit:** `30 requests per minute`\
> Authenticated v2 endpoints are rate limited per API key rather than per IP address.

Create a custom record for a target account.

## Request Body

Use `communityUserId` by default, or provide exactly one of `roblox`, `discord`, or `accountUuid` as the target user.

The recommended path is to set `useDictionary` to `true`, provide the target `recordTypeId`, and pass `replaceValues` keyed by the template field placeholders. This avoids building the full record section and field structure yourself.

Advanced integrations may provide a full `record` object instead of `useDictionary`, `recordTypeId`, and `replaceValues`, but this is not recommended unless you need full control over the raw record payload.

This endpoint is also used to create civilian characters. The key difference is which template `recordTypeId` you submit.

## Choosing a `recordTypeId`

Use `GET /v2/general/templates` first if you need to inspect the templates available in your community.

Some built-in template families use fixed IDs from the backend, while custom templates keep the community-specific `recordTypeId` shown by the templates endpoint.

| Record kind           | `type` | `recordTypeId` to use | Notes                                                |
| --------------------- | ------ | --------------------- | ---------------------------------------------------- |
| Character             | `7`    | `7`                   | Creates a civilian character for the target account. |
| Warrant               | `2`    | `2`                   | Built-in required type.                              |
| BOLO                  | `3`    | `3`                   | Built-in required type.                              |
| License               | `4`    | `4`                   | Built-in required type.                              |
| Vehicle Registration  | `5`    | `5`                   | Built-in required type.                              |
| Custom Police Record  | `8`    | Community template ID | Check `GET /v2/general/templates`.                   |
| Custom Police Report  | `9`    | Community template ID | Check `GET /v2/general/templates`.                   |
| Custom Medical Record | `10`   | Community template ID | Check `GET /v2/general/templates`.                   |
| Custom Medical Report | `11`   | Community template ID | Check `GET /v2/general/templates`.                   |
| Custom Fire Record    | `12`   | Community template ID | Check `GET /v2/general/templates`.                   |
| Custom Fire Report    | `13`   | Community template ID | Check `GET /v2/general/templates`.                   |
| Custom DMV Record     | `14`   | Community template ID | Check `GET /v2/general/templates`.                   |
| Custom Lawyer Record  | `15`   | Community template ID | Check `GET /v2/general/templates`.                   |
| Custom Lawyer Report  | `16`   | Community template ID | Check `GET /v2/general/templates`.                   |

If you are creating a character, send the character template ID (`7`) or the raw character record payload with `type: 7`. For anything else, use the template ID returned by the templates endpoint for that record.

## Character Example

This example creates a civilian character for the target user by selecting the built-in character template:

```json
{
  "communityUserId": "player-1234",
  "useDictionary": true,
  "recordTypeId": 7,
  "replaceValues": {
    "first": "John",
    "last": "Doe",
    "dob": "01/01/1995"
  }
}
```

For a non-character custom record, the same endpoint looks like this:

```json
{
  "communityUserId": "player-1234",
  "useDictionary": true,
  "recordTypeId": 12,
  "replaceValues": {
    "plate": "ABC123"
  }
}
```

If you need to submit a fully assembled record, you can provide `record` instead. This is an advanced option and is not recommended for most integrations:

```json
{
  "communityUserId": "player-1234",
  "record": {
    "type": 9,
    "name": "Incident Report",
    "sections": []
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

local response = sonoran.cad:createRecordV2({
    communityUserId = 'player-1234',
    useDictionary = true,
    recordTypeId = 12,
    replaceValues = {
        ["case_number"] = "SC-2026-001"
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
local response = cad:createRecordV2({
    communityUserId = 'player-1234',
    useDictionary = true,
    recordTypeId = 5,
    replaceValues = {
        ["plate"] = "ABC123"
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

  const response = await instance.cad.createRecordV2({
    communityUserId: 'player-1234',
    useDictionary: true,
    recordTypeId: 12,
    replaceValues: {
      'case_number': 'SC-2026-001',
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

response = instance.cad.createRecordV2({
    "communityUserId": 'player-1234',
    "useDictionary": True,
    "recordTypeId": 12,
    "replaceValues": {
        "case_number": "SC-2026-001"
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

var response = await sonoran.Cad.createRecordV2(new CreateRecordV2Request
{
    AccountUuid = "00000000-0000-0000-0000-000000000000",
    UseDictionary = true,
    RecordTypeId = 12,
    ReplaceValues = new Dictionary<string, string>
    {
        ["case_number"] = "SC-2026-001"
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
  title: "Sonoran CAD v2 - Create Record"
  version: "1.0.0"
  description: "Create a new custom record using template replacement values."
servers:
  -
    url: "https://api.sonorancad.com"
paths:
  /v2/general/records:
    post:
      summary: "Create Record"
      operationId: "createRecord"
      responses:
        200:
          description: "Successful response"
          content:
            application/json:
              schema:
                type: "object"
              example:
                recordTypeId: 12
                id: 451
                name: "Incident Report"
                type: 9
                sections:
                  category: 0
                  label: "Report Details"
                  fields:
                    label: "Case Number"
                    value: "SC-2026-001"
                    uid: "case_number"
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
              communityUserId: "player-1234"
              roblox: 123456789
              useDictionary: true
              recordTypeId: 12
              replaceValues:
                plate: "ABC123"
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
  --url "https://api.sonorancad.com/v2/general/records" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
  "communityUserId": "player-1234",
  "useDictionary": true,
  "recordTypeId": 12,
  "replaceValues": {
    "plate": "ABC123"
  }
}'
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
{
  "recordTypeId": 12,
  "id": 451,
  "name": "Incident Report",
  "type": 9,
  "sections": [
    {
      "category": 0,
      "label": "Report Details",
      "fields": [
        {
          "label": "Case Number",
          "value": "SC-2026-001",
          "uid": "case_number"
        }
      ]
    }
  ]
}
```
