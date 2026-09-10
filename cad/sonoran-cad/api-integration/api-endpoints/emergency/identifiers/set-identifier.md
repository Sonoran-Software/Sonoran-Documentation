---
description: This endpoint allows you to set the selected identifier for a unit.
---

# Set Identifier

{% hint style="warning" %}
This API endpoint requires the **Plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## Set Identifier

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/set_identifier`

This endpoint allows you to retrieve all unit identifiers for a specified account in your community.

#### Request Body

| Name                                   | Type   | Description              |
| -------------------------------------- | ------ | ------------------------ |
| id<mark style="color:red;">\*</mark>   | string | Your community's ID      |
| key<mark style="color:red;">\*</mark>  | string | Your community's API Key |
| type<mark style="color:red;">\*</mark> | string | SET\_IDENTIFIER          |
| data<mark style="color:red;">\*</mark> | array  | Array of request objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```javascript
"Identifier Switched!"
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
    "type": "SET_IDENTIFIER",
    "data": [
        {
            "apiId": "Steam:1234", // (OPTION 1): Generally the Steam HEX
            "account": "000-000-000", // (OPTION 2): Sonoran Account UUID
            "identId" 2 // New identifier ID
        }
    ]
}
```
