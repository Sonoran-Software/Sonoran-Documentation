---
description: >-
  This endpoint gets a connected user in a specific room for a specific Sonoran
  Radio server.
---

# Get Connected User

## Get Connected User

<mark style="color:green;">`GET`</mark> `/v2/servers/:communityId/rooms/:roomId/users/:identity`

> **Rate limit:** `12 requests per minute`\
> This endpoint has a small internal gateway buffer, but the published public limit is `12 requests per minute`.

Returns a single connected participant.

**Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Authorization | `Bearer <community-api-key>` |

**Examples**

{% tabs %}
{% tab title="Sonoran.lua" %}
```lua
local response = client.radio:getConnectedUserV2(1, "91de0ce8-c571-11e9-9714-5600023b2434", "YOUR_COMMUNITY_ID")
```
{% endtab %}

{% tab title="Sonoran.js" %}
```javascript
const response = await instance.radio?.getConnectedUserV2(1, "91de0ce8-c571-11e9-9714-5600023b2434", "YOUR_COMMUNITY_ID");
```
{% endtab %}

{% tab title="Sonoran.py" %}
```python
response = instance.radio.getConnectedUserV2(1, "91de0ce8-c571-11e9-9714-5600023b2434", "YOUR_COMMUNITY_ID")
```
{% endtab %}

{% tab title="Sonoran.Net" %}
```csharp
var response = await sonoran.Radio.getConnectedUserV2("91de0ce8-c571-11e9-9714-5600023b2434");
```
{% endtab %}

{% tab title="OpenAPI" %}
```yaml
openapi: 3.1.0
paths:
  /v2/servers/{communityId}/rooms/{roomId}/users/{identity}:
    get:
      security:
        - bearerAuth: []
```
{% endtab %}

{% tab title="cURL" %}
```bash
curl -X GET "https://api.sonoranradio.com/v2/servers/YOUR_COMMUNITY_ID/rooms/1/users/91de0ce8-c571-11e9-9714-5600023b2434" \
  -H "Authorization: Bearer your-community-api-key"
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
{
  "identity": "91de0ce8-c571-11e9-9714-5600023b2434",
  "name": "Officer Smith",
  "metadata": "{\"sonrad\":true}",
  "state": "ACTIVE"
}
```
