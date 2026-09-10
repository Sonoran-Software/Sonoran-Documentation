---
description: >-
  This endpoint allows you to update the primary unit identifier on a dispatch
  call.
---

# Update Call Primary

{% hint style="warning" %}
This API endpoint requires the **plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## Set Call Primary

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/set_call_primary`

This endpoint allows you to easily update the primary unit on a dispatch call.

#### Request Body

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| id   | string | Your community's ID      |
| key  | string | Your community's API Key |
| type | string | SET\_CALL\_PRIMARY       |
| data | array  | Array of request objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
CALL 123 POSTAL SET TO 456
```
{% endtab %}

{% tab title="400 The following 400 errors may be sent in response:" %}
```http
INVALID REQUEST TYPE
INVALID COMMUNITY ID
API IS NOT ENABLED FOR THIS COMMUNITY
INVALID API KEY
```
{% endtab %}
{% endtabs %}

```javascript
{
    "id": "YOUR_COMMUNITY_ID",
    "key": "YOUR_API_KEY",
    "type": "SET_CALL_PRIMARY",
    "data": [
        {
            "serverId": 1, // Default 1 - See guide on setting up multiple servers
            "callId": 100, // Can be retrieved from the GET_CALLS API endpoint
            "primary": 123, // Identifier ID
            "trackPrimary": false // Toggle unit tracking for in-game with Dispatch Notify plugin
        },
    ]
}
```

### Clearing the Primary Identifier

If you wish to clear the call's primary identifier, it is recommended to set the value to `-1`.
