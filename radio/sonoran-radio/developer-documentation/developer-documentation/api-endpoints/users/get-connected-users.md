---
description: This endpoint gets all connected users in a community.
---

# Get Connected Users

## Get Connected Users

<mark style="color:green;">`GET`</mark>`/api/radio/get-connected-users/:id/:key`

This endpoint gets all connected users in a community.

**Headers**

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |

**URL Parameters**

| Name  | Type   | Description       |
| ----- | ------ | ----------------- |
| `id`  | string | Community ID      |
| `key` | string | Community API Key |

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
    "result": "ok",
    "connectedUsers": [
        {
            "identity": "91de0ce8-c571-11e9-9714-5600023b2434",
            "name": "John Doe",
            "roomId": 1,
            "metadata": See "Connected User Metadata" in Data Structures below
        }
    ]
}
```
{% endtab %}
{% endtabs %}
