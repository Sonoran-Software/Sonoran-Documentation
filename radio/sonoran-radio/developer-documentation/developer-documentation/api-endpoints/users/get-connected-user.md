---
description: This endpoint get a specific, connected user in a community.
---

# Get Connected User

## Get Connected User

<mark style="color:green;">`GET`</mark> `/api/radio/get-connected-user/:id/:key/:roomId/:identity`

This endpoint get a specific, connected user in a community.

**Headers**

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |

**URL Parameters**

| Name       | Type   | Description          |
| ---------- | ------ | -------------------- |
| `id`       | string | Community ID         |
| `key`      | string | Community API Key    |
| `roomId`   | number | Multi-Server Room ID |
| `identity` | string | User Account UUID    |

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
    "result": "ok",
    "data": {
        "identity": "91de0ce8-c571-11e9-9714-5600023b2434",
        "name": "John Doe",
        "metadata": See "Connected User Metadata" in Data Structures below
    }
}
```
{% endtab %}
{% endtabs %}
