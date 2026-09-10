---
description: Search records by numeric, account-backed, or secret-backed values.
---

# Lookup By Value

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/v2/general/lookups/by-value`

> **Rate limit:** `30 requests per minute` Authenticated v2 endpoints are rate limited per API key rather than per IP address.

Search records by a typed lookup value.

## Request Body

Optional notification routing supports `notifyCommunityUserId` by default, or `notifyRoblox`, `notifyDiscord`, or `notifyAccountUuid`.

```json
{
  "searchType": "NUMBER",
  "value": "451",
  "notifyCommunityUserId": "player-1234",
  "types": [12]
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

local response = sonoran.cad:lookupByValueV2({
    searchType = 'plate',
    value = 'ABC123',
    types = {1},
  })

-- Inspect response.success, response.data, or response.reason as needed.
print(response.success)
```
{% endtab %}

{% tab title="SonoranCADFiveM" %}
Call from a server-side FiveM resource using the exported CAD client:

```lua
local cad = exports["sonorancad"]:getCadClient()
local response = cad:lookupByValueV2({
  searchType = "plate",
  value = "ABC123",
  types = { 1 }
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

  const response = await instance.cad.lookupByValueV2({
    searchType: 'plate',
    value: 'ABC123',
    types: [1],
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

response = instance.cad.lookupByValueV2({
    "searchType": 'plate',
    "value": 'ABC123',
    "types": [1],
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

var response = await sonoran.Cad.lookupByValueV2(new LookupByValueV2Request
{
    SearchType = "plate",
    Value = "ABC123",
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
  title: "Sonoran CAD v2 - Lookup By Value"
  version: "1.0.0"
  description: "Search records by numeric, account-backed, or secret-backed values."
servers:
  -
    url: "https://api.sonorancad.com"
paths:
  /v2/general/lookups/by-value:
    post:
      summary: "Lookup By Value"
      operationId: "lookupByValue"
      responses:
        200:
          description: "Successful response"
          content:
            application/json:
              schema:
                type: "object"
              example:
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
              searchType: "NUMBER"
              value: "451"
              notifyCommunityUserId: "player-1234"
              types: 12
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
  --url "https://api.sonorancad.com/v2/general/lookups/by-value" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
  "searchType": "NUMBER",
  "value": "451",
  "notifyCommunityUserId": "player-1234",
  "types": [12]
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
  }
]
```
