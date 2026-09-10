---
description: This endpoint updates the user's display name in the radio.
---

# Set User Display Name

## Set User Display Name

<mark style="color:green;">`POST`</mark> `/radio/set-user-display-name`

This endpoint updates a connected user's display name in the radio.

**Headers**

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |

**Body**

| Name          | Type   | Description         |
| ------------- | ------ | ------------------- |
| `id`          | string | Community ID        |
| `key`         | string | Community API Key   |
| `identity`    | string | User radio identity |
| `displayName` | string | New Display Name    |

You can also call the URL-parameter form:

<mark style="color:green;">`POST`</mark> `/radio/set-user-display-name/:id/:key/:identity`

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
