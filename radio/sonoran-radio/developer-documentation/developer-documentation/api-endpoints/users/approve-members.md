---
description: Approve members who are already in your community.
---

# Approve Members

## Approve Members

<mark style="color:green;">`POST`</mark> `/api/servers/:id/members/approve`

This endpoint approves one or more members who are already in your community.

**Headers**

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |

**URL Parameters**

| Name | Type   | Description  |
| ---- | ------ | ------------ |
| `id` | string | Community ID |

**Body**

| Name     | Type         | Description              |
| -------- | ------------ | ------------------------ |
| `apiKey` | string       | Community API key        |
| `accIds` | string array | Account UUIDs to approve |

**Example Body**

```json
{
  "apiKey": "your-community-api-key",
  "accIds": [
    "91de0ce8-c571-11e9-9714-5600023b2434",
    "d8dc8c0e-5b24-4c17-9d5b-4f72ff2d6f8d"
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
