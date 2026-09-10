---
description: Remove members from a specific Sonoran Radio server.
---

# Kick Members

## Kick Members

<mark style="color:green;">`POST`</mark> `/v2/servers/:communityId/members/kick`

> **Rate limit:** `4 requests per minute`

Removes members from the selected server and disconnects them from live radio sessions when applicable.

**Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Authorization | `Bearer <community-api-key>` |
| Content-Type  | `application/json`           |

**Examples**

{% tabs %}
{% tab title="Sonoran.lua" %}
```lua
local response = client.radio:kickMembersV2({
  "91de0ce8-c571-11e9-9714-5600023b2434"
}, 1)
```
{% endtab %}

{% tab title="Sonoran.js" %}
```javascript
const response = await instance.radio?.kickMembersV2([
  "91de0ce8-c571-11e9-9714-5600023b2434"
], 1);
```
{% endtab %}

{% tab title="Sonoran.py" %}
```python
response = instance.radio.kickMembersV2([
    "91de0ce8-c571-11e9-9714-5600023b2434"
], 1)
```
{% endtab %}

{% tab title="Sonoran.Net" %}
```csharp
var response = await sonoran.Radio.kickMembersV2(new[]
{
    "91de0ce8-c571-11e9-9714-5600023b2434"
});
```
{% endtab %}

{% tab title="OpenAPI" %}
```yaml
openapi: 3.1.0
paths:
  /v2/servers/{communityId}/members/kick:
    post:
      security:
        - bearerAuth: []
```
{% endtab %}

{% tab title="cURL" %}
```bash
curl -X POST "https://api.sonoranradio.com/v2/servers/YOUR_COMMUNITY_ID/members/kick" \
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
  "kickedAccIds": [
    "91de0ce8-c571-11e9-9714-5600023b2434"
  ]
}
```
