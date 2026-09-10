---
description: >-
  This endpoint allows you to set a user's currently linked DB sync characters
  in the CAD.
---

# DB Sync: Link Character

{% hint style="warning" %}
This API endpoint requires the **plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

## Set Character Links

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/civilian/link_character`

This endpoint allows you to set a user's currently linked DB sync characters in the CAD.

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
Linked char sync ID '{linkId}' to user '{username}' - {User UUID}
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
    "type": "LINK_CHARACTER",
    "data": [
        {
            "apiId": "STEAM:1234", // API ID, Typically, this is their STEAM Hex
            "syncId": "", // DB Sync ID of character, matches the GET_CHARACTERS result`syncId`
            "action": 0 // 0: ADD, 2: REMOVE
    ]
}
```

#### Sync ID

The `syncId` parameter is the unique identifier for your DB sync character. This will match the values found in the `Character Mapping Column` in your DB sync config.
