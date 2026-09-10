---
description: >-
  This endpoint allows you to get a user's currently linked DB sync character
  IDs in the CAD.
---

# DB Sync: Get Character Links

{% hint style="warning" %}
This API endpoint requires the **plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

## Get Character Links

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/civilian/get_character_links`

This endpoint allows you to get a user's currently linked DB sync character IDs in the CAD.

#### Request Body

| Name | Type   | Description                |
| ---- | ------ | -------------------------- |
| id   | string | Your community's ID        |
| key  | string | Your community's API Key   |
| type | string | GET\_CHARACTERS            |
| data | array  | Array of character objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```javascript
// Array of character sync IDs
[]
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
    "type": "GET_CHARACTER_LINKS",
    "data": [
        {
            "apiId": "STEAM:1234" // API ID, Typically, this is their STEAM Hex
    ]
}
```

#### Sync ID

The `syncId` parameter is the unique identifier for your DB sync character. This will match the values found in the `Character Mapping Column` in your DB sync config.
