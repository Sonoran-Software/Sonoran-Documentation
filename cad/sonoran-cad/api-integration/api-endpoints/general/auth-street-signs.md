---
description: This endpoint authenticates the use of our integrated street signs plugin.
---

# Auth Street Signs

{% hint style="warning" %}
This API endpoint requires the **Pro** version of Sonoran CAD or higher.\
For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

## Authenticate Street Signs

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/general/auth_streetsigns`

This endpoint authenticates the use of our integrated street signs plugin.

#### Request Body

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| id   | string | Your community's ID      |
| key  | string | Your community's API Key |
| type | string | AUTH\_STREETSIGNS        |
| data | object | Request object           |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
Success
```
{% endtab %}

{% tab title="400 The following 400 errors may be sent in response:" %}
```http
Error: Server ID: x has IP set to: '1.2.3.4' -> your IP: '4.3.2.1'
Server not found with ID: 123
```
{% endtab %}
{% endtabs %}

```javascript
{
    "id": "YOUR_COMMUNITY_ID",
    "key": "YOUR_API_KEY",
    "type": "AUTH_STREETSIGNS",
    "data": {
        "serverId": 1
    }
}
```
