---
description: Update your unit's current status in the CAD via API.
---

# Unit Status

{% hint style="warning" %}
This API endpoint requires the **standard** version of Sonoran CAD or higher. For more information, see our [pricing](../../../../pricing/faq/) page.
{% endhint %}

## Update Unit Status

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/unit_status`

The unit location API endpoint allows you to update a unit's location from in-game.

#### Request Body

| Name | Type   | Description                  |
| ---- | ------ | ---------------------------- |
| id   | string | Your community's ID          |
| key  | string | Your community's API Key     |
| type | string | UNIT\_STATUS                 |
| data | array  | Array of unit status objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
UNIT STATUS UPDATED
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
    "type": "UNIT_STATUS",
    "data": [
        {
            "apiId": "STEAM:1234", // (OPTION 1): API ID entered in the unit identifiers
                                   // Typically, this is their STEAM ID
            "account": "000-000-000", // (OPTION 2): Sonoran Account UUID
            "identIds": [123,456], // (Option 3): Identifier IDs
            "status": 0,           // Status Int (ENUM)
            "serverId": 1          // Server ID
        },
    ]
}
```

The unit status enumeration values are shown below. These reflect the default unit status options. Your community may have changed the wording with custom [unit status codes](../../../../tutorials/customization/unit-status-codes.md).

| Integer (Enumeration) Value | Status Description |
| --------------------------- | ------------------ |
| 0                           | UNAVAILABLE        |
| 1                           | BUSY               |
| 2                           | AVAILABLE          |
| 3                           | ENROUTE            |
| 4                           | ON\_SCENE          |
