---
description: Sonoran CAD allows you to retrieve detailed user account data via API.
---

# Get Account

{% hint style="warning" %}
This API endpoint requires the **Plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

## Get Account

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/general/get_account`

This endpoint allows you to retrieve information on a specified account in your community.

#### Request Body

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| id   | string | Your community's ID      |
| key  | string | Your community's API Key |
| type | string | GET\_ACCOUNT             |
| data | array  | Array of request objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```javascript
// Account Object
  {
    "uuid": "91de0ce8-c571-11e9-9714-5600023b2434",
    "username": "SonoranBrian",
    "status": 1,
    "joined": "2019-10-12T20:41:52.400299",
    "lastLogin": "2020-08-15T13:43:17.607111",
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
      "123456",
      ""
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
    "type": "GET_ACCOUNT",
    "data": [
        {
            "apiId": "Steam:1234", // (OPTION 1): Generally the Steam HEX
            "username": "SonoranBrian", // (OPTION 2): Sonoran CAD Username
            "account": "000-000-000" // (OPTION 3): Sonoran Account UUID
        },
    ]
}
```

### Search Type

The search can be by the user's `apiId`, their Sonoran CAD account `username`, or their Sonoran `account` uuid.
