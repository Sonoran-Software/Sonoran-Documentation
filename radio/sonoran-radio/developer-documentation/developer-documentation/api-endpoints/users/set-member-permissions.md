---
description: Batch update member permission bitmasks and private-channel access.
---

# Set Member Permissions

## Set Member Permissions

<mark style="color:green;">`POST`</mark> `/api/servers/:id/members/permissions`

This endpoint updates one or more members' community permissions. You can also use it to grant or remove access to specific private channels.

**Headers**

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |

**URL Parameters**

| Name | Type   | Description  |
| ---- | ------ | ------------ |
| `id` | string | Community ID |

**Body**

| Name        | Type         | Description                 |
| ----------- | ------------ | --------------------------- |
| `apiKey`    | string       | Community API key           |
| `userPerms` | object array | Permission changes to apply |

**`userPerms` object**

| Name           | Type         | Description                             |
| -------------- | ------------ | --------------------------------------- |
| `accId`        | string       | Account UUID                            |
| `perm`         | number       | Permission value                        |
| `profilePerms` | object array | Optional private-channel access updates |

**`profilePerms` object**

| Name        | Type    | Description                              |
| ----------- | ------- | ---------------------------------------- |
| `profileId` | number  | Channel/profile ID                       |
| `canJoin`   | boolean | Whether the member may join that profile |

**Permission Values**

| Permission                | Value |
| ------------------------- | ----- |
| `ADMIN`                   | `1`   |
| `COMM_KICK`               | `2`   |
| `COMM_BAN`                | `4`   |
| `RADIO_MOVE_CLIENT`       | `8`   |
| `RADIO_KICK`              | `16`  |
| `COMM_APPROVE`            | `32`  |
| `SET_DISPLAYNAME`         | `64`  |
| `COMM_SET_DISPLAYNAME`    | `128` |
| `RADIO_PLAY_TONES`        | `256` |
| `RADIO_TALKOVER_OVERRIDE` | `512` |

Combine multiple permissions by adding the values together.

**Example Body**

```json
{
  "apiKey": "your-community-api-key",
  "userPerms": [
    {
      "accId": "91de0ce8-c571-11e9-9714-5600023b2434",
      "perm": 34,
      "profilePerms": [
        {
          "profileId": 12,
          "canJoin": true
        }
      ]
    }
  ]
}
```

In this example, `34` grants `COMM_KICK` (`2`) and `COMM_APPROVE` (`32`).

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
