---
description: Search records by name or plate values.
---

# Lookup Name Or Plate

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/v2/general/lookups`

> **Rate limit:** `30 requests per minute` Authenticated v2 endpoints are rate limited per API key rather than per IP address.

Search records by name and plate values.

## Request Body

Optional notification routing supports `notifyCommunityUserId` by default, or `notifyRoblox`, `notifyDiscord`, or `notifyAccountUuid`.

Send either a name search using `first`, `last`, and optional `mi`, or send a `plate` search. Unused fields may be omitted or left blank, but at least one name or plate value must be provided.

```json
{
  "first": "John",
  "last": "Doe",
  "mi": "",
  "plate": "",
  "notifyCommunityUserId": "player-1234",
  "types": [7, 12],
  "partial": true
}
```

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

local response = sonoran.cad:lookupV2({
    first = 'John',
    last = 'Doe',
    mi = 'A',
    plate = 'ABC123',
    types = {1},
    partial = true,
  })

-- Inspect response.success, response.data, or response.reason as needed.
print(response.success)
```
{% endtab %}

{% tab title="SonoranCADFiveM" %}
Call from a server-side FiveM resource using the exported CAD client:

```lua
local cad = exports["sonorancad"]:getCadClient()
local response = cad:lookupV2({
  first = "John",
  last = "Doe",
  plate = "ABC123",
  types = { 1 },
  partial = true
})
print(response.success)
```

JavaScript resources can use `exports.sonorancad.getCadClient()`. For .NET, construct a client from the protected CAD convars. Python is for external integrations, not FiveM resources.
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

  const response = await instance.cad.lookupV2({
    first: 'John',
    last: 'Doe',
    mi: 'A',
    plate: 'ABC123',
    types: [1],
    partial: true,
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

response = instance.cad.lookupV2({
    "first": 'John',
    "last": 'Doe',
    "mi": 'A',
    "plate": 'ABC123',
    "types": [1],
    "partial": True,
  })

print(response.success)
print(response.data if response.success else response.reason)
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

var response = await sonoran.Cad.lookupV2(new LookupV2Request
{
    First = "John",
    Last = "Doe",
    Mi = "A",
    Plate = "ABC123",
    Types = new[] { 1 },
    Partial = true
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
  title: "Sonoran CAD v2 - Lookup Name Or Plate"
  version: "1.0.0"
  description: "Search records by name or plate values."
servers:
  -
    url: "https://api.sonorancad.com"
paths:
  /v2/general/lookups:
    post:
      summary: "Lookup Name Or Plate"
      operationId: "lookupNameOrPlate"
      responses:
        200:
          description: "Successful response"
          content:
            application/json:
              schema:
                type: "array"
                items:
                  type: "object"
              example:
                -
                  recordTypeId: 7
                  id: 2451
                  syncId: "citizen:1234"
                  name: "John Doe"
                  type: 7
                  sections:
                    category: 0
                    label: "Civilian Info"
                    fields:
                      label: "First Name"
                      value: "John"
                      uid: "first_name"
                -
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
              first: "John"
              last: "Doe"
              mi: ""
              plate: ""
              notifyCommunityUserId: "player-1234"
              types:
                - 7
                - 12
              partial: true
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
  --url "https://api.sonorancad.com/v2/general/lookups" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
  "first": "John",
  "last": "Doe",
  "mi": "",
  "plate": "",
  "notifyCommunityUserId": "player-1234",
  "types": [7, 12],
  "partial": true
}'
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
[
  {
    "recordTypeId": 7,
    "id": 2451,
    "syncId": "citizen:1234",
    "name": "John Doe",
    "type": 7,
    "sections": [
      {
        "category": 0,
        "label": "Civilian Info",
        "fields": [
          {
            "label": "First Name",
            "value": "John",
            "uid": "first_name"
          }
        ]
      }
    ]
  },
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
]
```
