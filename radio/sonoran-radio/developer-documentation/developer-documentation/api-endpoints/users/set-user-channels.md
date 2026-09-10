---
description: This endpoint updates the user's transmitting and scanned channels.
---

# Set User Channels

## Set User Channels

<mark style="color:green;">`POST`</mark> `/api/radio/set-user-channels/:id/:key/:roomId/:identity`

This endpoint updates the user's transmitting and scanned channels.

**Headers**

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |

**URL Parameters**

| Name       | Type   | Description                   |
| ---------- | ------ | ----------------------------- |
| `id`       | string | Community ID                  |
| `key`      | string | Community API Key             |
| `roomId`   | number | Server ID (0 if none created) |
| `identity` | string | User Radio Identity           |

**Body**

| Name       | Type         | Description                          |
| ---------- | ------------ | ------------------------------------ |
| `transmit` | number       | (OPTIONAL) Channel ID to transmit on |
| `scan`     | number array | (OPTIONAL) Channel IDs to scan       |

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
    "result": "ok"
}
```
{% endtab %}
{% endtabs %}
