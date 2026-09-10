---
description: >-
  This endpoint allows you to retrieve all custom blips for a community's live
  map!
---

# Get Map Blips

{% hint style="warning" %}
This API endpoint requires the **pro** version of Sonoran CAD or higher.\
For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## Get Blips

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/get_blips`

This endpoint allows you to retrieve all custom blips on your live map.

#### Request Body

| Name                                   | Type   | Description              |
| -------------------------------------- | ------ | ------------------------ |
| id<mark style="color:red;">\*</mark>   | string | Your community's ID      |
| key<mark style="color:red;">\*</mark>  | string | Your community's API Key |
| type<mark style="color:red;">\*</mark> | string | GET\_BLIPS               |
| data<mark style="color:red;">\*</mark> | array  | Array of request objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```json
// Array of blip objects
[
    {
        "id": 1,
        "subType": "Example", // Differentiate custom blips types
        "coordinates": {
            "x": 0,
            "y": 0
        },
        "color": "#000FFF",
        "icon": "https://example.com/icon.png",
        "data": [
            {
                "title": "Example 1",
                "text": "123",
            },
            {
                "title": "Example 2",
                "text": "456",
            }
        ]
    }
]
```
{% endtab %}

{% tab title="400 The following 400 errors may be sent in response:" %}
```http
INVALID REQUEST TYPE
INVALID COMMUNITY ID
API ENDPOINT IS NOT ENABLED FOR THIS COMMUNITY
INVALID API KEY
```
{% endtab %}
{% endtabs %}

```javascript
{
    "id": "YOUR_COMMUNITY_ID",
    "key": "YOUR_API_KEY",
    "type": "GET_BLIPS",
    "data": [
        {
            "serverId": 1 // Server ID
        },
    ]
}
```
