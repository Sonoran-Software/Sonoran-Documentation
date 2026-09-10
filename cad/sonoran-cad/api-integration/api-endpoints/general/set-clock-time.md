# Set Clock Time

{% hint style="warning" %}
API endpoint requires the **Standard** version of Sonoran CAD or higher.\
For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

## Get Servers

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/general/set_clock`

This endpoint allows you set the CAD's

#### Request Body

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| id   | string | Your community's ID      |
| key  | string | Your community's API Key |
| type | string | GET\_SERVERS             |
| data | array  | Array of request objects |

{% tabs %}
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
    "type": "SET_CLOCK",
    "data": [
        {
            "serverId": 1, // Server ID
            "currentUtc": "01/30/2024 10:30", // Current time in UTC (January 30th, 2024 10:30AM)
            "currentGame": "01/30/2024 10:30", // Current in-game time at the UTC timestamp
            "secondsPerHour": 60 // 60 seconds (1 minute) equals 1 game hour 
        }
    ]
}
```
