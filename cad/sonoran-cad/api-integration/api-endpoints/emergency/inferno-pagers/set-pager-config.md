---
description: >-
  This endpoint sets your community's Inferno Pager configuration for a specific
  server.
---

# Set Pager Config

{% hint style="warning" %}
This API endpoint requires the **plus** version of Sonoran CAD or higher.\
For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## Set Pager Config

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/SET_PAGER_CONFIG`

This endpoint sets the Inferno Pager configuration for a specific server in your community. If `nodes` is omitted, the existing node tree for that server is preserved.

#### Request Body

| Name                                   | Type   | Description              |
| -------------------------------------- | ------ | ------------------------ |
| id<mark style="color:red;">\*</mark>   | string | Your community's ID      |
| key<mark style="color:red;">\*</mark>  | string | Your community's API Key |
| type<mark style="color:red;">\*</mark> | string | SET\_PAGER\_CONFIG       |
| data<mark style="color:red;">\*</mark> | array  | Array of request objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
Updated pager config!
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
    "type": "SET_PAGER_CONFIG",
    "data": [
        {
            "serverId": 1,
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
                    "children": []
                }
            ]
        }
    ]
}
```

The `nodes` property is optional. If omitted, Sonoran CAD keeps the existing node tree for that `serverId` and only updates the minimal config fields.
