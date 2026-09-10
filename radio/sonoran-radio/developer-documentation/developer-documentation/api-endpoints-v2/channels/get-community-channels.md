---
description: >-
  Get configured channel groups and channels for a specific Sonoran Radio
  server.
---

# Get Community Channels

## Get Community Channels

<mark style="color:green;">`GET`</mark> `/v2/servers/:communityId/channels`

> **Rate limit:** `6 requests per minute`\
> Authenticated v2 endpoints are rate limited per API key rather than per IP address.

Returns channel groups and channel definitions for the selected server.

**Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Authorization | `Bearer <community-api-key>` |

**Examples**

{% tabs %}
{% tab title="Sonoran.lua" %}
```lua
local response = client.radio:getCommunityChannelsV2()
```
{% endtab %}

{% tab title="Sonoran.js" %}
```javascript
const response = await instance.radio?.getCommunityChannelsV2();
```
{% endtab %}

{% tab title="Sonoran.py" %}
```python
response = instance.radio.getCommunityChannelsV2()
```
{% endtab %}

{% tab title="Sonoran.Net" %}
```csharp
var response = await sonoran.Radio.getCommunityChannelsV2();
```
{% endtab %}

{% tab title="OpenAPI" %}
```yaml
openapi: 3.1.0
paths:
  /v2/servers/{communityId}/channels:
    get:
      security:
        - bearerAuth: []
```
{% endtab %}

{% tab title="cURL" %}
```bash
curl -X GET "https://api.sonoranradio.com/v2/servers/YOUR_COMMUNITY_ID/channels" \
  -H "Authorization: Bearer your-community-api-key"
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
{
  "groups": [],
  "channels": [
    {
      "id": 101,
      "name": "Law Dispatch"
    }
  ]
}
```
