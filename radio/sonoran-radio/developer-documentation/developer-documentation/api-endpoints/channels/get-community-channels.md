---
description: This endpoint gets all configured radio channels in a community.
---

# Get Community Channels

## Get Community Channels

<mark style="color:green;">`GET`</mark> `/api/radio/get-community-channels/:id/:key`

This endpoint gets all configured radio channels in a community.

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
    "groups": [
        {
            "id": 0,
            "name": "Default",
            "orderIndex": 0
        },
        {
            "id": 1,
            "name": "test",
            "orderIndex": 1
        }
    ],
    "channels": [
        {
            "id": 123,
            "groupId": 0,
            "displayName": "Patrol Ops",
            "recvFreqMajor": 40,
            "recvFreqMinor": 120,
            "xmitFreqMajor": 36,
            "xmitFreqMinor": 275,
            "repeatsXmit": true,
            "status": true,
            "orderIndex": 0,
            "talkoverProtection": false
        }
    ]
}
```
{% endtab %}
{% endtabs %}
