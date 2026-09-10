---
description: This endpoint allows you to easily update a custom live map blip.
---

# Modify Blip

{% hint style="warning" %}
This API endpoint requires the **pro** version of Sonoran CAD or higher.\
For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## Modify Blip

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/modify_blip`

This endpoint allows you to edit a custom blip on your live map.

#### Request Body

| Name                                   | Type   | Description              |
| -------------------------------------- | ------ | ------------------------ |
| id<mark style="color:red;">\*</mark>   | string | Your community's ID      |
| key<mark style="color:red;">\*</mark>  | string | Your community's API Key |
| type<mark style="color:red;">\*</mark> | string | MODIFY\_BLIP             |
| data<mark style="color:red;">\*</mark> | array  | Array of request objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
Blip 123 modified!
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
    "type": "MODIFY_BLIP",
    "data": [
        {
            "id": 123, // Blip IDm
            "subType": "Example", // OPTIONAL - Differentiate custom types
            "coordinates": { // OPTIONAL - Coordinate Update
                "x": 0,
                "y": 1
            },
            "radius": 100, // OPTIONAL - Displays a circle radius
            "icon": "https://example.com/icon.png" // OPTIONAL - Icon Update
            "color": "#df03fc", // OPTIONAL - Hex Color Code
            "tooltip": "Example added from the API!" // OPTIONAL - Blip Tooltip
            "data": [ // OPTIONAL - Display Data
                {
                    "title": "Example 1",
                    "text": "123",
                },
                {
                    "title": "Example 2",
                    "text": "456",
                }
            ]
        },
    ]
}
```
