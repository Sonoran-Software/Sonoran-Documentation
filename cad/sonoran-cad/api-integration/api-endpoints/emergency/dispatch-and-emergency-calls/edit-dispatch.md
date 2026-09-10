---
description: >-
  This API endpoint allows you to update an existing dispatch call by changing
  one or more fields.
---

# Edit Dispatch

{% hint style="warning" %}
This API endpoint requires the **plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## Edit Dispatch

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/edit_dispatch`

This API endpoint allows you to edit an existing dispatch call. Only `serverId` and `callId` are required. All other supported dispatch fields are optional, so you can update a single value such as the title without resending the full call.

#### Request Body

| Name | Type   | Description               |
| ---- | ------ | ------------------------- |
| id   | string | Your community's ID       |
| key  | string | Your community's API Key  |
| type | string | EDIT\_DISPATCH            |
| data | array  | Array of dispatch objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
DISPATCH CALL {CallId} UPDATED
```
{% endtab %}

{% tab title="400 The following 400 errors may be sent in response:" %}
```http
INVALID REQUEST TYPE
INVALID COMMUNITY ID
API IS NOT ENABLED FOR THIS COMMUNITY
INVALID API KEY
ERROR: Missing editable dispatch fields. Provide at least one field to update.
```
{% endtab %}
{% endtabs %}

```javascript
{
    "id": "YOUR_COMMUNITY_ID",
    "key": "YOUR_API_KEY",
    "type": "EDIT_DISPATCH",
    "data": [
        {
            "serverId": 1, // Required - See guide on setting up multiple servers
            "callId": 123, // Required - Dispatch call ID to update
            "origin": 0, // OPTIONAL - See ORIGIN Enum
            "status": 1, // OPTIONAL - See STATUS Enum
            "priority": 2, // OPTIONAL - 1, 2, or 3
            "block": "123", // OPTIONAL
            "address": "4234 E. Example Ave", // OPTIONAL
            "postal": "456", // OPTIONAL
            "title": "Traffic Stop", // OPTIONAL
            "code": "10-39 - Traffic Stop", // OPTIONAL
            "primary": 123, // OPTIONAL - Primary unit identifier on the call
            "trackPrimary": true, // OPTIONAL - Track the primary unit in-game with the Dispatch Notify plugin
            "description": "Traffic Stop - Blue Sedan - XP123BS", // OPTIONAL
            "metaData": {
                "someKey": "someValue" // OPTIONAL: metaData for API custom storage
            }
        }
    ]
}
```

{% hint style="info" %}
This endpoint updates the dispatch call details only. Use the dedicated endpoints for attaching or detaching units and for adding call notes.
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
