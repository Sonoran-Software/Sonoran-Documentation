---
description: >-
  This endpoint retrieves your community's Inferno Pager configuration for a
  specific server.
---

# Get Pager Config

{% hint style="warning" %}
This API endpoint requires the **plus** version of Sonoran CAD or higher.\
For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## Get Pager Config

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/GET_PAGER_CONFIG`

This endpoint retrieves the Inferno Pager configuration for a specific server in your community.

#### Request Body

| Name                                   | Type   | Description              |
| -------------------------------------- | ------ | ------------------------ |
| id<mark style="color:red;">\*</mark>   | string | Your community's ID      |
| key<mark style="color:red;">\*</mark>  | string | Your community's API Key |
| type<mark style="color:red;">\*</mark> | string | GET\_PAGER\_CONFIG       |
| data<mark style="color:red;">\*</mark> | array  | Array of request objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```json
{
    "natureWords": {
        "Emergency": "Emergency",
        "NonEmergency": "Non-Emergency",
        "Administrative": "Administrative"
    },
    "maxAddresses": 5,
    "maxBodyLength": 250,
    "nodes": [
        {
            "id": "root-1",
            "name": "Fire",
            "description": "Fire services",
            "permission": "fire",
            "address": "FIRE-01",
            "shortCode": "F1",
            "kind": "group",
            "children": [
                {
                    "id": "station-1",
                    "name": "Station 1",
                    "description": "",
                    "permission": "fire.station1",
                    "address": "FIRE-ST01",
                    "shortCode": "ST1",
                    "kind": "node",
                    "children": []
                }
            ]
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
    "type": "GET_PAGER_CONFIG",
    "data": [
        {
            "serverId": 1 // Server ID
        }
    ]
}
```

The returned configuration is always for the requested `serverId`.
