---
description: Sonoran CAD allows you to page through all community accounts via API.
---

# Get Accounts

{% hint style="warning" %}
This API endpoint requires the **Plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

## Get Account

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/general/get_accounts`

This endpoint allows you to page through all community accounts via API.

#### Request Body

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| id   | string | Your community's ID      |
| key  | string | Your community's API Key |
| type | string | GET\_ACCOUNTS            |
| data | array  | Array of request objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```javascript
{
  "pagination": {
    "limit": 1,
    "offset": 0,
    "total": 3
  },
  "accounts": [
    {
      "uuid": "91de0ce8-c571-11e9-9714-5600023b2434",
      "username": "SonoranBrian",
      "status": 1,
      "joined": "2023-06-21T20:44:07.321587",
      "lastLogin": "2024-12-11T19:37:50.099922",
      "permissions": {
        "civilian": true,
        "lawyer": true,
        "dmv": true,
        "police": true,
        "fire": true,
        "ems": true,
        "dispatch": true,
        "admin": true,
        "polRecAdd": true,
        "polRecEdit": true,
        "polRecRemove": true,
        "polSuper": true,
        "polEditUnit": true,
        "polEditOtherUnit": true,
        "selfDispatch": true,
        "liveMap": true,
        "medRecAdd": true,
        "medRecEdit": true,
        "medRecRemove": true,
        "medSuper": true,
        "fireRecAdd": true,
        "fireRecEdit": true,
        "fireRecRemove": true,
        "fireSuper": true,
        "dmvRecAdd": true,
        "dmvRecEdit": true,
        "dmvRecRemove": true,
        "dmvSuper": true,
        "modifyStreetSigns": true,
        "lawRecAdd": true,
        "lawRecEdit": true,
        "lawRecRemove": true,
        "lawSuper": true,
        "adminAccounts": true,
        "adminPermissionKeys": true,
        "adminCustomization": true,
        "adminDepartments": true,
        "adminTenCodes": true,
        "adminPenalCodes": true,
        "adminInGameIntegration": true,
        "adminDiscordIntegration": true,
        "adminLimits": true,
        "adminLogs": true
      },
      "apiIds": [
        "1234"
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
    "type": "GET_ACCOUNTS",
    "data": [
        {
            "limit": 100, // OPTIONAL: Max number of accounts to return (Default/Max = 100)
            "offset": 0, // OPTIONAL: Number of accounts to skip (Default = 0)
            "status": 1 // OPTIONAL: Account Status (Default = Active)
        },
    ]
}
```

### Pagination

This endpoint uses "pagination" or "pages" to get all community accounts.

Page 1:

* `limit` = `100` and `offset` of `0` returns the first 100 accounts

Page 2:

* `limit` = `100` and `offset` of `100` returns the second 100 accounts

### Status Enumerator

The `status` parameter specifies what accounts will be returned.

|   |                 |
| - | --------------- |
| 0 | Pending Account |
| 1 | Active Account  |
| 4 | Banned Account  |
