---
description: This endpoint allows you to remove a character associated with a CAD account.
---

# Remove Character

{% hint style="warning" %}
This API endpoint requires the **plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

{% hint style="danger" %}
Characters can NOT be removed from communities using [Database Sync](../../../integration-plugins/database-sync-and-merge/), as all characters are pulled from your server's in-game database.
{% endhint %}

## Remove Character

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/civilian/remove_character`

This endpoint allows you to remove a character associated with a CAD account.

#### Request Body

| Name | Type   | Description                |
| ---- | ------ | -------------------------- |
| id   | string | Your community's ID        |
| key  | string | Your community's API Key   |
| type | string | REMOVE\_CHARACTER          |
| data | array  | Array of character objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
CHARACTER {ID} REMOVED FOR {USERNAME}
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

{% tab title="404 " %}
```
API ID NOT LINKED TO AN ACCOUNT IN THIS COMMUNITY
```
{% endtab %}
{% endtabs %}

```javascript
{
    "id": "YOUR_COMMUNITY_ID",
    "key": "YOUR_API_KEY",
    "type": "REMOVE_CHARACTER",
    "data": [
        {
            "id": -1, // Unique character ID - Use GET_CHARACTERS to retrieve
        },
    ]
}
```
