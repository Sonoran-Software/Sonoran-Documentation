---
description: >-
  This endpoint allows you to set a user's currently selected character in the
  CAD.
---

# Set Character

{% hint style="warning" %}
This API endpoint requires the **plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

## Get Characters

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/civilian/set_character`

This endpoint allows you to set a user's currently selected character in the CAD.

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
// Array of custom record character objects
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
    "type": "SET_CHARACTER",
    "data": [
        {
            "apiId": "STEAM:1234", // (OPTION 1) API ID, Typically, this is their STEAM Hex
            "account": "000-000-000", // (OPTION 2) Sonoran Account UUID
            "charId": 123, // ID of character, matches the GET_CHARACTERS result - either the `id` or `syncId` depending on whether or not DB sync is enabled
        },
    ]
}
```

#### Set via Account

Communities can optionally set a user's selected character via a user's Sonoran account UUID, by using the `account` value. This value is internal, and not exposed to on the UI. The [verify\_secret ](../general/verify-secret.md)or [get\_account ](../general/get-account.md)endpoints will allow communities to capture the account UUID programmatically.
