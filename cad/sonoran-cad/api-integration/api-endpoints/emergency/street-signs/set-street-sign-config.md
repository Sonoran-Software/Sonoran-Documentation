---
description: This endpoint sets your community's street sign configuration.
---

# Set Street Sign Config

{% hint style="warning" %}
This API endpoint requires the **pro** version of Sonoran CAD or higher.\
For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## Set Street Sign Config

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/SET_STREETSIGN_CONFIG`

#### Request Body

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| id   | string | Your community's ID      |
| key  | string | Your community's API Key |
| type | string | SET\_STREETSIGN\_CONFIG  |
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
    "type": "SET_STREETSIGN_CONFIG",
    "data": [
        {
          "serverId": 1, // Server Id
          "signConfig": [
              {
                  "id": 1,
                  "label": "Some street sign",
                  "text1": "",
                  "text2": "",
                  "text3": ""
              },
              {
                  "id": 2,
                  "label": "Another street sign",
                  "text1": "",
                  "text2": "",
                  "text3": ""
              }
          ]
		    }
    ]
}
```
