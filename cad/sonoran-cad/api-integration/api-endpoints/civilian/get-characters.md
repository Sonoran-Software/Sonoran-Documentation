---
description: >-
  This endpoint allows you to retrieve all characters associated with a user
  account in the CAD.
---

# Get Characters

{% hint style="warning" %}
This API endpoint requires the **plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

## Get Characters

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/civilian/get_characters`

This endpoint allows you to retrieve all characters associated with a user account in the CAD.

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
    "type": "GET_CHARACTERS",
    "data": [
        {
            "apiId": "STEAM:1234" // (OPTION 1) API ID, Typically, this is their STEAM Hex
            "account": "000-000-000" // (OPTION 2) Sonoran Account UUID
        },
    ]
}
```

#### Result Ordering

The current/most recently selected character the user has set in the CAD will always be the first record in the list returned by this endpoint (index 0).

#### Record Formatting

Custom records require a strict format with several dozen different data fields. You can view a detailed explanation of [custom record formatting](../general/custom-records/#record-formatting).

#### Lookup via Account

Communities can optionally lookup via a user's Sonoran account UUID, by using the `account` value. This value is internal, and not exposed to on the UI. The [verify\_secret ](../general/verify-secret.md)or [get\_account ](../general/get-account.md)endpoints will allow communities to capture the account UUID programmatically.
