---
description: >-
  The Unit Panic API call allows you to automatically trigger a unit panic from
  in-game.
---

# Unit Panic

{% hint style="warning" %}
This API endpoint requires the **standard** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

{% hint style="info" %}
Toggling a unit's panic status via the API will not send this push event. These events should be listened for locally on the game server.
{% endhint %}

## Unit Panic

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/unit_panic`

This The unit panic API endpoint allows you to automatically trigger a unit panic from in-game.

#### Request Body

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| id   | string | Your community's ID      |
| key  | string | Your community's API Key |
| type | string | UNIT\_PANIC              |
| data | array  | Array of unit objects    |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
UNIT PANIC UPDATED
```
{% endtab %}

{% tab title="400 The following errors may be sent in response:" %}
```
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
    "type": "UNIT_PANIC",
    "data": [
        {
            "apiId": "STEAM:1234", // (OPTION 1): API ID entered in the unit identifiers
            "account": "000-000-000", // (OPTION 2): Sonoran Account UUID
            "identIds": [123,456], // (Option 3): Identifier IDs
            "isPanic": true,
        }
    ]
}
```
