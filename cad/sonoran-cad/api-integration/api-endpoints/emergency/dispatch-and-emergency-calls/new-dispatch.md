---
description: >-
  This API endpoint allows you to generate and attach units to a new dispatch
  call.
---

# New Dispatch

{% hint style="warning" %}
This API endpoint requires the **plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## New Dispatch

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/new_dispatch`

The unit location API endpoint allows you to create and assign a new dispatch.

#### Request Body

| Name | Type   | Description               |
| ---- | ------ | ------------------------- |
| id   | string | Your community's ID       |
| key  | string | Your community's API Key  |
| type | string | NEW\_DISPATCH             |
| data | array  | Array of dispatch objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
NEW DISPATCH CREATED - ID: {CallId}
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
    "type": "NEW_DISPATCH",
    "data": [
        {
            "serverId": 1, // Default 1 - See guide on setting up multiple servers
            "origin": 0, // See ORIGIN Enum
            "status": 0, // See STATUS Enum
            "priority": 1, // 1, 2, or 3
            "block": "123",
            "address": "4234 E. Example Ave",
            "postal": "456",
            "title": "Traffic Stop",
            "code": "10-39 - Traffic Stop",
            "primary": 123, // Primary unit identifier on the call
            "trackPrimary": true, // Track the primary unit in-game with the Dispatch Notify plugin
            "description": "Traffic Stop - Blue Sedan - XP123BS",
            "notes": [], // Array of call note objects
            "metaData": {
                "someKey": "someValue" // OPTIONAL: metaData for API custom storage
            },
            "units": ["STEAM:1234"], // Array of API IDs
            "deleteAfterMinutes": 30 // OPTIONAL: Delete record after X minutes (temporary record)
        },
    ]
}
```

{% hint style="info" %}
The "Primary" unit field in the new dispatch is set to the first unit in the `units` array, if it exists.
{% endhint %}

### Enumeration Values

Sonoran CAD uses integer enumeration values for the `origin` and `status` fields. See the tables below for more information.

{% tabs %}
{% tab title="ORIGIN" %}
| Integer (Enumeration) Value | Origin Description |
| --------------------------- | ------------------ |
| 0                           | CALLER             |
| 1                           | RADIO DISPATCH     |
| 2                           | OBSERVED           |
| 3                           | WALK\_UP           |
{% endtab %}

{% tab title="STATUS" %}
| Integer (Enumeration) Value | Status Description |
| --------------------------- | ------------------ |
| 0                           | PENDING            |
| 1                           | ACTIVE             |
| 2                           | CLOSED             |
{% endtab %}
{% endtabs %}

### Note Object

Call notes are formatted on dispatch calls with the following object:

```json
{
    "time": "12:00:00",
    "label": "A-10",
    "type": "text",
    "content": "This is a note!"
}
```
