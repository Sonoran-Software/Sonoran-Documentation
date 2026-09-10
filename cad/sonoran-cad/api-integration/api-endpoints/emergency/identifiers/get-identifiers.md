---
description: >-
  Sonoran CAD allows you to retrieve all account unit identifiers via API
  endpoint.
---

# Get Identifiers

{% hint style="warning" %}
This API endpoint requires the **Plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## Get Account Identifiers

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/get_identifiers`

This endpoint allows you to retrieve all unit identifiers for a specified account in your community.

#### Request Body

| Name                                   | Type   | Description              |
| -------------------------------------- | ------ | ------------------------ |
| id<mark style="color:red;">\*</mark>   | string | Your community's ID      |
| key<mark style="color:red;">\*</mark>  | string | Your community's API Key |
| type<mark style="color:red;">\*</mark> | string | GET\_IDENTIFIERS         |
| data<mark style="color:red;">\*</mark> | array  | Array of request objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```javascript
{
    "selectedIdent": 1,
    "identifiers": [
        {
            "id": 12,
            "accId": "00000000-0000-0000-0000-000000000000",
            "status": 0,
            "isPanic": false,
            "location": "",
            "aop": "Los Santos",
            "data": {
                "unitNum": "A-10",
                "name": "John Doe",
                "district": "Los Santos",
                "department": "LSPD",
                "subdivision": "Patrol",
                "rank": "Officer",
                "group": "CAR-51",
                "communityUserId": "license:abc123"
            },
            "isDispatch": false
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
    "type": "GET_IDENTIFIERS",
    "data": [
        {
            "apiId": "Steam:1234", // (OPTION 1): Generally the Steam HEX
            "account": "000-000-000" // (OPTION 2): Sonoran Account UUID
        }
    ]
}
```
