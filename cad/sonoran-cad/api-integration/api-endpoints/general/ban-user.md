---
description: This endpoint allows you to kick or ban a user account in your community.
---

# Kick or Ban User

{% hint style="warning" %}
This API endpoint requires the **plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

## Ban User

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/general/ban_user`

This endpoint allows you to ban a user account in your community.

#### Request Body

| Name | Type   | Description                       |
| ---- | ------ | --------------------------------- |
| id   | string | Your community's ID               |
| key  | string | Your community's API Key          |
| type | string | BAN\_USER                         |
| data | array  | Array of user account ban objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
User Ban: {{ ACCOUNT UUID }} Status: {{ isBan }}
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

{% tab title="404 A non-linked API ID will be met with the following response:" %}
```
API ID NOT LINKED TO AN ACCOUNT IN THIS COMMUNITY
```
{% endtab %}
{% endtabs %}

```javascript
{
    "id": "YOUR_COMMUNITY_ID",
    "key": "YOUR_API_KEY",
    "type": "BAN_USER",
    "data": [
        {
            "apiId": "STEAM:1234",  // (Option 1) API ID entered in the unit identifiers
                                    //   Typically, this is their STEAM ID
            "accId": "000-000-000", // (Option 2) Sonoran SSO UUID
            "isBan": true, // OPTIONAL: Ban (true) or un-ban (false)
            "isKick": false // OPTIONAL: Kick instead of ban
        },
    ]
}
```
