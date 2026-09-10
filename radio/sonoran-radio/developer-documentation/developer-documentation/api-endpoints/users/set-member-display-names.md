---
description: Batch update member display names for a community.
---

# Set Member Display Names

## Set Member Display Names

<mark style="color:green;">`POST`</mark> `/api/servers/:id/members/nicknames`

This endpoint updates one or more stored member display names in a community.

Use this endpoint to change how members appear in the community member list. To update the display name of a currently connected radio user, use [Set User Display Name](set-user-display-name.md).

**Headers**

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |

**URL Parameters**

| Name | Type   | Description  |
| ---- | ------ | ------------ |
| `id` | string | Community ID |

**Body**

| Name           | Type         | Description       |
| -------------- | ------------ | ----------------- |
| `apiKey`       | string       | Community API key |
| `accNicknames` | object array | Members to update |

**`accNicknames` object**

| Name       | Type   | Description      |
| ---------- | ------ | ---------------- |
| `accId`    | string | Account UUID     |
| `nickname` | string | New display name |

**Example Body**

```json
{
  "apiKey": "your-community-api-key",
  "accNicknames": [
    {
      "accId": "91de0ce8-c571-11e9-9714-5600023b2434",
      "nickname": "Patrol 101"
    }
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
