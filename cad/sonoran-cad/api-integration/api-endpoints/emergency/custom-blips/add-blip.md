---
description: >-
  This endpoint allows you to add a new custom blip to your community's live
  map!
---

# Add Blip

{% hint style="warning" %}
This API endpoint requires the **pro** version of Sonoran CAD or higher.\
For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## Add Blip

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/add_blip`

This endpoint allows you to add a custom blip to your live map.

#### Request Body

| Name                                   | Type   | Description              |
| -------------------------------------- | ------ | ------------------------ |
| id<mark style="color:red;">\*</mark>   | string | Your community's ID      |
| key<mark style="color:red;">\*</mark>  | string | Your community's API Key |
| type<mark style="color:red;">\*</mark> | string | ADD\_BLIP                |
| data<mark style="color:red;">\*</mark> | array  | Array of request objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```json
// Blip object with ID set
[
    {
        "id": 1234,
        "coordinates": {
            "x": 0,
            "y": 0
        },
        "icon": "https://example.com/icon.png"
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
    "type": "ADD_BLIP",
    "data": [
        {
            "serverId": 1, // Server ID
            "blip": {
                "id": -1, // New ID
                "subType": "Example", // Differentiate custom blips
                "coordinates": {
                    "x": 123,
                    "y": 456
                },
                "radius": 100, // Displays a circle radius
                "icon": "https://example.com/icon.png", // URL or Icon Name
                "color": "#df03fc", // Hex Color Code
                "tooltip": "Example added from the API!", // Blip Tooltip
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
        },
    ]
}
```
