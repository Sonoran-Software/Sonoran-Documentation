---
description: This endpoint sets your community's available fire stations.
---

# Set Stations

{% hint style="warning" %}
This API endpoint requires the **plus** version of Sonoran CAD or higher.\
For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## Set Stations

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/SET_STATIONS`

#### Request Body

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| id   | string | Your community's ID      |
| key  | string | Your community's API Key |
| type | string | SET\_STATIONS            |
| data | array  | Array of request objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
Updated station config!
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
    "type": "SET_STATIONS",
    "data": {
        "serverId": 1,
        "config": {
            "locations": [
                {
                    "name": "Fire Station One",
                    "coordinates": {
                        "x": 1234,
                        "y": 5678
                    },
                    "icon": "fa-solid fa-face-smile", // Or a direct HTTPS URL to an image
                    "doors": [
                        "Bay One",
                        "Engine Two"
                    ],
                }
            ],
            "tones": [
                "Tone Name One",
                "Tone Name Two"
            ]
        }
    }
}
```
