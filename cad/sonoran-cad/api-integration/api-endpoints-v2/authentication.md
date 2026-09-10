---
description: Learn how to authenticate requests against the Sonoran CAD v2 API.
---

# Authentication

All current v2 API endpoints require bearer authentication.

## Base URL

```http
https://api.sonorancad.com
```

## Required Headers

| Header          | Value                                                                        | Description                  |
| --------------- | ---------------------------------------------------------------------------- | ---------------------------- |
| `Authorization` | `Bearer` [`YOUR_API_KEY`](../getting-started/retrieving-your-credentials.md) | Authenticates the request    |
| `Accept`        | `application/json`                                                           | Recommended for all requests |

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

local response = sonoran.cad:getUnitsV2({
  onlyUnits = true,
  includeOffline = false
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
local response = cad:getUnitsV2({
  onlyUnits = true,
  includeOffline = false
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

  const response = await instance.cad.getUnitsV2({
    onlyUnits: true,
    includeOffline: false,
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

response = instance.cad.getUnitsV2({
    "onlyUnits": True,
    "includeOffline": False,
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

var response = await sonoran.Cad.getUnitsV2(new GetUnitsV2Query
{
    OnlyUnits = true,
    IncludeOffline = false
});

Console.WriteLine(response.success);
Console.WriteLine(response.data);
```
{% endtab %}

{% tab title="cURL" %}
```bash
curl --request GET \
  --url "https://api.sonorancad.com/v2/emergency/servers/1/units?onlyUnits=true&includeOffline=false" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Accept: application/json"
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
const response = await fetch(
  "https://api.sonorancad.com/v2/emergency/servers/1/units?onlyUnits=true&includeOffline=false",
  {
    method: "GET",
    headers: {
      Authorization: "Bearer YOUR_API_KEY",
      Accept: "application/json",
    },
  }
);

const data = await response.json();
console.log(data);
```
{% endtab %}

{% tab title="PowerShell" %}
```powershell
$headers = @{
  Authorization = "Bearer YOUR_API_KEY"
  Accept = "application/json"
}

Invoke-RestMethod `
  -Method Get `
  -Uri "https://api.sonorancad.com/v2/emergency/servers/1/units?onlyUnits=true&includeOffline=false" `
  -Headers $headers
```
{% endtab %}
{% endtabs %}

## Response Formats

### Successful Requests

Successful responses return `application/json`.

### Failed Requests

Failed requests return `application/problem+json`.

Example:

```json
{
  "type": "https://httpstatuses.com/401",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Missing Authorization header.",
  "instance": "/v2/emergency/servers/1/units",
  "traceId": "00-abc123..."
}
```

## Common Authentication Errors

| Status | Cause                                                                      |
| ------ | -------------------------------------------------------------------------- |
| `401`  | Missing `Authorization` header                                             |
| `401`  | `Authorization` header is not using the `Bearer` scheme                    |
| `401`  | API key is invalid                                                         |
| `404`  | The requested `serverId` is not configured for the authenticated community |

## Rate Limits

All v2 endpoints are rate limited per API key. Limits vary by endpoint, so check the individual endpoint page for the current enforced limit.

When a request is rate limited, the API returns `429 Too Many Requests`.

Example:

```json
{
  "message": "API rate limit exceeded",
  "request_id": "9457fb389b3729164e453e4db4328909"
}
```

If the gateway provides a `Retry-After` header, your client should wait that long before retrying.

Our official libraries already help with this:

* [`Sonoran.js`](https://github.com/Sonoran-Software/Sonoran.js) automatically retries v2 CAD requests on `429` responses up to 2 times.
* [`Sonoran.lua`](https://github.com/Sonoran-Software/Sonoran.Lua) automatically retries v2 CAD requests on `429` responses up to 2 times.
* [`Sonoran.Net`](https://github.com/Sonoran-Software/Sonoran.Net) automatically retries v2 CAD requests on `429` responses up to 2 times and respects `Retry-After` when it is provided.
* [`Sonoran.py`](https://pypi.org/project/Sonoran.py/) automatically retries v2 CAD requests on `429` responses up to 2 times and respects `Retry-After` when it is provided.

These retries are intentionally limited. High-frequency integrations should still avoid bursty request patterns and should respect the published per-endpoint limits.
