---
description: This push event sends data when an existing dispatch call is modified.
---

# Modified Dispatch

### EVENT\_DISPATCH\_EDIT POST

{% hint style="warning" %}
This push event is not sent triggered via the API.\
API triggers should be listened to locally on the game server.
{% endhint %}

```javascript
{
    "key": "YOUR_API_KEY", // Authenticate legitimate event traffic
    "type": "EVENT_DISPATCH_EDIT",
    "data": [
        "eventOriginIdent": 123, // Identifier that created/caused this event
        "dispatch": {
            "callId": -1,
            "origin": 0, // See ORIGIN Enum
            "status": 0, // See CALL_STATUS Enum
            "priority": 1, // 1, 2, or 3
            "block": "123",
            "address": "4234 E. Example Ave",
            "postal": "456",
            "title": "Traffic Stop",
            "code": "10-39 - Traffic Stop",
            "description": "Traffic Stop - Blue Sedan - XP123BS",
            "notes": "",
            "idents": [
                987,
                123,
                456,
            ],
          "metaData": {
             "origin911": 1 // 911 call ID if created from a 911 call
          }
        }
    ]
}
```

### Enumeration Values

Sonoran CAD uses integer enumeration values for the `ORIGIN` and `STATUS` fields. See the tables below for more information.

{% tabs %}
{% tab title="ORIGIN" %}
| Integer (Enumeration) Value | Origin Description |
| --------------------------- | ------------------ |
| 0                           | CALLER             |
| 1                           | RADIO DISPATCH     |
| 2                           | OBSERVED           |
| 3                           | WALK UP            |
{% endtab %}

{% tab title="STATUS" %}
| Integer (Enumeration) Value | Status Description |
| --------------------------- | ------------------ |
| 0                           | PENDING            |
| 1                           | ACTIVE             |
| 2                           | CLOSED             |
{% endtab %}
{% endtabs %}

### Idents

The `idents` field is an array of identifier/unit IDs. These IDs can be mapped by caching a table from the [get units endpoint](../../api-endpoints/emergency/identifiers/get-active-units.md).
