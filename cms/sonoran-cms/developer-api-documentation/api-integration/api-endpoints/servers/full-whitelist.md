---
description: >-
  This endpoint allows you to get the full whitelist list for the specified
  server.
---

# Full Whitelist

## Full Whitelist

<mark style="color:green;">`POST`</mark> `https://api.sonorancms.com/servers/full_whitelist`

Gets the full list for everyone whitelisted for the specified server.

#### Request Body

| Name | Type   | Description     |
| ---- | ------ | --------------- |
| id   | string | Community ID    |
| key  | string | API Key         |
| type | string | FULL\_WHITELIST |
| data | array  |                 |

{% tabs %}
{% tab title="200: OK The following text responses may be sent in response:" %}
```json
[
    {
        "name": "John Doe",
        "apiIds: [...],
    }
]
```
{% endtab %}

{% tab title="400: Bad Request The following text responses may be sent in response:" %}
```javascript
INVALID REQUEST TYPE
INVALID COMMUNITY ID
```
{% endtab %}
{% endtabs %}

```
{
    "id": "YOUR_COMMUNITY_ID",
    "key": "YOUR_API_KEY",
    "type": "VERIFY_WHITELIST",
    "data": [
        {
            "serverId": 1,
        }
    ]
}
```
