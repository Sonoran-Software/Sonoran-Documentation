---
description: Approve existing pending members for a specific Sonoran Radio server.
---

# Approve Members

## Approve Members

<mark style="color:green;">`POST`</mark> `/v2/servers/:communityId/members/approve`

> **Rate limit:** `12 requests per minute`\
> This endpoint has a small internal gateway buffer, but the published public limit is `12 requests per minute`.

Approves pending community members already attached to the selected server.

**Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Authorization | `Bearer <community-api-key>` |
| Content-Type  | `application/json`           |

**Examples**

{% tabs %}
{% tab title="Sonoran.lua" %}
```lua
local response = client.radio:approveMembersV2({
  "91de0ce8-c571-11e9-9714-5600023b2434"
}, 1)
```
{% endtab %}

{% tab title="Sonoran.js" %}
```javascript
const response = await instance.radio?.approveMembersV2([
  "91de0ce8-c571-11e9-9714-5600023b2434"
], 1);
```
{% endtab %}

{% tab title="Sonoran.py" %}
```python
response = instance.radio.approveMembersV2([
    "91de0ce8-c571-11e9-9714-5600023b2434"
], 1)
```
{% endtab %}

{% tab title="Sonoran.Net" %}
```csharp
var response = await sonoran.Radio.approveMembersV2(new[]
{
    "91de0ce8-c571-11e9-9714-5600023b2434"
});
```
{% endtab %}

{% tab title="OpenAPI" %}
```yaml
openapi: 3.1.0
paths:
  /v2/servers/{communityId}/members/approve:
    post:
      security:
        - bearerAuth: []
```
{% endtab %}

{% tab title="cURL" %}
```bash
curl -X POST "https://api.sonoranradio.com/v2/servers/YOUR_COMMUNITY_ID/members/approve" \
  -H "Authorization: Bearer your-community-api-key" \
  -H "Content-Type: application/json" \
  -d "{\"accIds\":[\"91de0ce8-c571-11e9-9714-5600023b2434\"]}"
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
{
  "approvedAccIds": [
    "91de0ce8-c571-11e9-9714-5600023b2434"
  ]
}
```
