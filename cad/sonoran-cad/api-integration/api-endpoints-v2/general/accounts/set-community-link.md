---
description: Directly link an authenticated community account to an in-game user ID.
---

# Set Community Link

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/v2/general/links/set`

> **Rate limit:** `30 requests per minute`\
> Authenticated v2 endpoints are rate limited per API key rather than per IP address.

Directly assign a `communityUserId` to an account in the authenticated community. The account UUID and its community-specific secret UUID must match. If the in-game ID is already linked to another account, the link is reassigned atomically.

This endpoint is intended for trusted server-side integrations such as the SonoranCADFiveM resource. Do not expose the community API key or forward account credentials from an untrusted client directly to this endpoint.

## CAD Frontend Iframe Event

When the Sonoran CAD frontend is running inside an iframe, it sends the following message to its parent after every successful community login, re-login, or reconnect:

```javascript
window.parent.postMessage({
  type: 'scad:account-link',
  accountUuid: '11111111-1111-1111-1111-111111111111',
  secretUuid: '22222222-2222-2222-2222-222222222222',
}, '*');
```

The event is not emitted in a top-level browser window or when either UUID is unavailable. It does not contain `communityUserId`; the parent integration must derive that value from the current in-game player and send all three values from its trusted server process to this endpoint.

The parent page should verify both `event.source` and `event.origin` before accepting the credentials:

```javascript
const cadFrame = document.getElementById('cadFrame');
const cadOrigin = new URL(cadFrame.src).origin;

window.addEventListener('message', (event) => {
  if (event.source !== cadFrame.contentWindow || event.origin !== cadOrigin) return;
  if (event.data?.type !== 'scad:account-link') return;

  const { accountUuid, secretUuid } = event.data;
  // Forward these values to the trusted game server. The server derives the
  // player's communityUserId and calls POST /v2/general/links/set.
});
```

Treat `secretUuid` as sensitive. Do not log it, persist it in browser storage, or expose the community API key to the iframe or game client.

## Request Body

```json
{
  "accountUuid": "11111111-1111-1111-1111-111111111111",
  "secretUuid": "22222222-2222-2222-2222-222222222222",
  "communityUserId": "fivem:12345"
}
```

All three properties are required. `communityUserId` may contain up to 255 characters.

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

local response = sonoran.cad:setCommunityLinkV2({
  accountUuid = "11111111-1111-1111-1111-111111111111",
  secretUuid = "22222222-2222-2222-2222-222222222222",
  communityUserId = "fivem:12345"
})

print(response.success)
```
{% endtab %}

{% tab title="SonoranCADFiveM" %}
Call this endpoint from the server side of a FiveM resource. Lua and JavaScript resources can use the CAD client exported by `sonorancad`:

```lua
local cad = exports["sonorancad"]:getCadClient()

local response = cad:setCommunityLinkV2({
  accountUuid = "11111111-1111-1111-1111-111111111111",
  secretUuid = "22222222-2222-2222-2222-222222222222",
  communityUserId = "fivem:12345"
})

print(response.success)
```

```javascript
const cad = exports.sonorancad.getCadClient();

const response = await cad.setCommunityLinkV2({
  accountUuid: '11111111-1111-1111-1111-111111111111',
  secretUuid: '22222222-2222-2222-2222-222222222222',
  communityUserId: 'fivem:12345',
});
```

FiveM exports do not return a .NET client. A server-side .NET resource should read the protected `sonoran_communityID`, `sonoran_apiKey`, and `sonoran_serverId` convars and construct a `SonoranClient`. FiveM does not run Python resources; use `Sonoran.py` only for external integrations.
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

  const response = await instance.cad.setCommunityLinkV2({
    accountUuid: '11111111-1111-1111-1111-111111111111',
    secretUuid: '22222222-2222-2222-2222-222222222222',
    communityUserId: 'fivem:12345',
  });
  console.log(response);
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

response = instance.cad.setCommunityLinkV2({
    "accountUuid": "11111111-1111-1111-1111-111111111111",
    "secretUuid": "22222222-2222-2222-2222-222222222222",
    "communityUserId": "fivem:12345",
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

var response = await sonoran.Cad.setCommunityLinkV2(new SetCommunityLinkV2Request
{
    AccountUuid = "11111111-1111-1111-1111-111111111111",
    SecretUuid = "22222222-2222-2222-2222-222222222222",
    CommunityUserId = "fivem:12345"
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
  title: "Sonoran CAD v2 - Set Community Link"
  version: "1.0.0"
  description: "Directly link an authenticated community account to an in-game user ID."
servers:
  -
    url: "https://api.sonorancad.com"
paths:
  /v2/general/links/set:
    post:
      summary: "Set Community Link"
      operationId: "setCommunityLink"
      security:
        -
          bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: "object"
              required:
                - "accountUuid"
                - "secretUuid"
                - "communityUserId"
              properties:
                accountUuid:
                  type: "string"
                  format: "uuid"
                secretUuid:
                  type: "string"
                  format: "uuid"
                communityUserId:
                  type: "string"
                  maxLength: 255
            example:
              accountUuid: "11111111-1111-1111-1111-111111111111"
              secretUuid: "22222222-2222-2222-2222-222222222222"
              communityUserId: "fivem:12345"
      responses:
        "200":
          description: "The account link was set successfully."
          content:
            application/json:
              schema:
                type: "object"
              example:
                linked: true
                accountUuid: "11111111-1111-1111-1111-111111111111"
                communityUserId: "fivem:12345"
        "400":
          description: "The request body is invalid."
        "403":
          description: "The account UUID and secret UUID do not match an account in the authenticated community."
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
  --url "https://api.sonorancad.com/v2/general/links/set" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
    "accountUuid": "11111111-1111-1111-1111-111111111111",
    "secretUuid": "22222222-2222-2222-2222-222222222222",
    "communityUserId": "fivem:12345"
  }'
```
{% endtab %}
{% endtabs %}

## Response

```json
{
  "linked": true,
  "accountUuid": "11111111-1111-1111-1111-111111111111",
  "communityUserId": "fivem:12345"
}
```

A `403` response intentionally does not reveal whether the account UUID or secret UUID was incorrect.
