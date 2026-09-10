---
description: Unban members from a specific Sonoran Radio server.
---

# Unban Members

## Unban Members

<mark style="color:green;">`POST`</mark> `/v2/servers/:communityId/members/unban`

> **Rate limit:** `4 requests per minute`

Unbans members from the selected server so they can rejoin the community.

**Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Authorization | `Bearer <community-api-key>` |
| Content-Type  | `application/json`           |

**Examples**

{% tabs %}
{% tab title="Sonoran.lua" %}
```lua
local response = client.radio:unbanMembersV2({
  "91de0ce8-c571-11e9-9714-5600023b2434"
}, 1)
```
{% endtab %}

{% tab title="Sonoran.js" %}
```javascript
const response = await instance.radio?.unbanMembersV2([
  "91de0ce8-c571-11e9-9714-5600023b2434"
], 1);
```
{% endtab %}

{% tab title="Sonoran.py" %}
```python
response = instance.radio.unbanMembersV2([
    "91de0ce8-c571-11e9-9714-5600023b2434"
], 1)
```
{% endtab %}

{% tab title="Sonoran.Net" %}
```csharp
var response = await sonoran.Radio.unbanMembersV2(new[]
{
    "91de0ce8-c571-11e9-9714-5600023b2434"
});
```
{% endtab %}

{% tab title="OpenAPI" %}
```yaml
openapi: 3.1.0
paths:
  /v2/servers/{communityId}/members/unban:
    post:
      security:
        - bearerAuth: []
```
{% endtab %}

{% tab title="cURL" %}
```bash
curl -X POST "https://api.sonoranradio.com/v2/servers/YOUR_COMMUNITY_ID/members/unban" \
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
  "unbannedAccIds": [
    "91de0ce8-c571-11e9-9714-5600023b2434"
  ]
}
```
