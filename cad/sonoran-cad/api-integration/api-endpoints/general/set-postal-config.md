---
description: >-
  This endpoint allows you to set your community's postal configuration to be
  used with the Live Map search.
---

# Set Postal Config

{% hint style="warning" %}
This API endpoint requires the **Pro** version of Sonoran CAD or higher.\
For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

## Set Postal Config

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/general/set_postals`

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
    "type": "SET_POSTALS",
    "data": [
        {
            "code": "2000",
            "x": 2325.4345703125,
            "y": 5147.21484375,
        },
        {
            "x": 2151.2138671875,
            "y": 5166.0888671875,
            "code": "2001"
        },
    ]
}
```
