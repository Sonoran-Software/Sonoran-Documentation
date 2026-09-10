---
description: >-
  This endpoint allows you to retrieve your community's server configuration.
  This contains valuable Live Map configuration data and can be used to ensure
  correct Live Map configs.
---

# Get Servers

{% hint style="warning" %}
API endpoint requires the **Standard** version of Sonoran CAD or higher.\
For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

## Get Servers

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/general/get_servers`

This endpoint allows you to retrieve your community's server configuration. This contains valuable Live Map configuration data and can be used to ensure correct Live Map configs.

#### Request Body

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| id   | string | Your community's ID      |
| key  | string | Your community's API Key |
| type | string | GET\_SERVERS             |
| data | array  | Array of request objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
{
  "servers": [
    {
      "id": 1,
      "name": "Server 1",
      "description": "Default server description",
      "signal": null,
      "mapUrl": "https://cadapi.dev.sonoransoftware.com/map/community/map_example/index.html",
      "mapIp": "123.456.78.9",
      "mapPort": "30121",
      "differingOutbound": false, // Different outbound/egress IP than the mapIp
      "outboundIp": "",
      "listenerPort": "0000",
      "enableMap": false,
      "mapType": "POSTAL",
      "isStatic": false
    }
  ]
}
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
    "type": "GET_SERVERS",
    "data": []
}
```
