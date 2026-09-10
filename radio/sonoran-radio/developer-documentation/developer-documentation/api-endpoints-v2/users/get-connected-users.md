---
description: This endpoint gets all connected users for a specific Sonoran Radio server.
---

# Get Connected Users

## Get Connected Users

<mark style="color:green;">`GET`</mark> `/v2/servers/:communityId/connected-users`

> **Rate limit:** `6 requests per minute`

Returns every currently connected radio participant for the selected server.

**Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Authorization | `Bearer <community-api-key>` |

**URL Parameters**

| Name          | Type   | Description                |
| ------------- | ------ | -------------------------- |
| `communityId` | string | Sonoran Radio community ID |

**Examples**

{% tabs %}
{% tab title="Sonoran.lua" %}
```lua
local response = client.radio:getConnectedUsersV2()
```
{% endtab %}

{% tab title="Sonoran.js" %}
```javascript
const response = await instance.radio?.getConnectedUsersV2();
```
{% endtab %}

{% tab title="Sonoran.py" %}
```python
response = instance.radio.getConnectedUsersV2()
```
{% endtab %}

{% tab title="Sonoran.Net" %}
```csharp
var response = await sonoran.Radio.getConnectedUsersV2();
```
{% endtab %}

{% tab title="OpenAPI" %}
```yaml
openapi: 3.1.0
paths:
  /v2/servers/{communityId}/connected-users:
    get:
      parameters:
        - in: path
          name: communityId
          required: true
          schema:
            type: string
            example: YOUR_COMMUNITY_ID
      security:
        - bearerAuth: []
```
{% endtab %}

{% tab title="cURL" %}
```bash
curl -X GET "https://api.sonoranradio.com/v2/servers/YOUR_COMMUNITY_ID/connected-users" \
  -H "Authorization: Bearer your-community-api-key"
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
{
  "connectedUsers": [
    {
      "identity": "91de0ce8-c571-11e9-9714-5600023b2434",
      "name": "Officer Smith",
      "metadata": "{\"sonrad\":true}",
      "roomId": 1
    }
  ]
}
```
