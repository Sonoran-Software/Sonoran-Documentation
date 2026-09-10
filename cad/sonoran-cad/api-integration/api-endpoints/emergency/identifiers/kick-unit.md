---
description: >-
  This endpoint allows you to forcefully kick an active unit back to the
  community menu.
---

# Kick Unit

{% hint style="warning" %}
This API endpoint requires the **standard** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## Kick Unit

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/kick_unit`

This endpoint allows you to forcefully kick an active unit back to the community menu.

#### Request Body

| Name | Type   | Description                  |
| ---- | ------ | ---------------------------- |
| id   | string | Your community's ID          |
| key  | string | Your community's API Key     |
| type | string | KICK\_UNIT                   |
| data | array  | Array of unit status objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
UNIT KICKED
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
    "type": "KICK_UNIT",
    "data": [
        {
            "apiId": "STEAM:1234", // API ID entered in the unit identifiers
                                   // Typically, this is their STEAM ID
            "reason": "Automated AFK Timer", // "You have been kicked for {REASON}"
            "serverId": 1
        },
    ]
}
```
