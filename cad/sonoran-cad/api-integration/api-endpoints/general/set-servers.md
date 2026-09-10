---
description: This endpoint allows you to update your CAD's server configuration.
---

# Set Servers

{% hint style="warning" %}
API endpoint requires the **Plus** version of Sonoran CAD or higher.\
For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

## Set Servers

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/general/set_servers`

This endpoint allows you to set your community's server configuration and update the live map deployment. This contains additional valuable Live Map configuration data.

#### Request Body

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| id   | string | Your community's ID      |
| key  | string | Your community's API Key |
| type | string | SET\_SERVERS             |
| data | array  | Array of request objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
Server config updated
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
    "type": "SET_SERVERS",
    "data": {
        "servers": [
            {
                "id": 1,
                "name": "Server 1",
                "description": "Main Server",
                "signal": "",
                "mapUrl": "",
                "mapIp": "",
                "listenerPort": 3232,
                "differingOutbound": false, // Different outbound/egress IP than the mapIp
                "outboundIp": "",
                "enableMap": true,
                "isStatic": false,
                "mapType": "NORMAL" // NORMAL, POSTAL, OCRP POSTAL
            }
        ]
        "deployMap": true // Deploy the Live Map with these server changes
    },
}
```
