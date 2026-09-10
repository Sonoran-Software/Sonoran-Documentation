---
description: This endpoint allows you to close an existing dispatch call.
---

# Close Dispatch

{% hint style="warning" %}
This API endpoint requires the **standard** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## Close Call

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/close_call`

This endpoint allows you to close an existing dispatch call.

#### Request Body

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| id   | string | Your community's ID      |
| key  | string | Your community's API Key |
| type | string | CLOSE\_CALL              |
| data | array  | Array of request objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
UNITS ATTACHED
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
    "type": "CLOSE_CALL",
    "data": [
        {
            "serverId": 1, // Default 1 - See guide on setting up multiple servers
            "callId": 100, // Can be retrieved from the GET_CALLS API endpoint
        },
    ]
}
```
