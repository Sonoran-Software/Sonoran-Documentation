---
description: This endpoint allows you to modify existing street signs.
---

# Update Street Sign

{% hint style="warning" %}
This API endpoint requires the **pro** version of Sonoran CAD or higher.\
For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## Update Street Sign

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/UPDATE_STREETSIGN`

#### Request Body

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| id   | string | Your community's ID      |
| key  | string | Your community's API Key |
| type | string | UPDATE\_STREETSIGN       |
| data | array  | Array of request objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
API ID(s) set!
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
    "type": "UPDATE_STREETSIGN",
    "data": [
        {
          "serverId": 1, // Server Id
          "signData": {
              "ids": [1, 2],
              "text1": "",
              "text2": "",
              "text3": ""
          }
		    }
    ]
}
```
