---
description: Ban one or more members from a community.
---

# Ban Members

## Ban Members

<mark style="color:green;">`POST`</mark> `/api/servers/:id/members/ban`

This endpoint bans one or more members from a community and disconnects them from the radio if they are currently connected.

**Headers**

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |

**URL Parameters**

| Name | Type   | Description  |
| ---- | ------ | ------------ |
| `id` | string | Community ID |

**Body**

| Name     | Type         | Description          |
| -------- | ------------ | -------------------- |
| `apiKey` | string       | Community API key    |
| `accIds` | string array | Account UUIDs to ban |

**Example Body**

```json
{
  "apiKey": "your-community-api-key",
  "accIds": [
    "91de0ce8-c571-11e9-9714-5600023b2434"
  ]
}
```

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
