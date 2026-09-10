---
description: >-
  This endpoint allows you to retrieve all active emergency calls, active
  dispatch calls, and previously closed dispatch calls.
---

# Get Calls

{% hint style="warning" %}
This API endpoint requires the **plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## Get Calls

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/get_calls`

This endpoint allows you to retrieve all active emergency calls, active dispatch calls, and previously closed dispatch calls.

#### Request Body

| Name                                   | Type   | Description                                                               |
| -------------------------------------- | ------ | ------------------------------------------------------------------------- |
| id<mark style="color:red;">\*</mark>   | string | Your community's ID                                                       |
| key<mark style="color:red;">\*</mark>  | string | Your community's API Key                                                  |
| type<mark style="color:red;">\*</mark> | string | GET\_CALLS                                                                |
| data<mark style="color:red;">\*</mark> | array  | Array of request objects                                                  |
| closedLimit                            | int    | Limit number of closed dispatch calls returned (Max 100, Default 10)      |
| closedOffset                           | int    | Used to paginate through the closed dispatches when paired with the limit |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```javascript
{
    // See below for full object structuring
    "activeCalls": [], // DISPATCH CALL Array
    "emergencyCalls": [], // EMERGENCY CALL Array
    "closedCalls": [], // CLOSED CALL Array
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
    "type": "GET_CALLS",
    "data": [
        {
            "serverId": 1 // Default 1 - See out guide on setting up multiple servers
            "closedLimit": 100, // OPTIONAL: Limit number of closed calls retuned (Max 100, default 10)
            "closedOffset": 0 // OPTIONAL: Used to paginate beyond the limit
            "type": 0 // OPTIONAL: CALL_TYPE ENUM Specify emergency or dispatch calls only, returns both if not specified
        },
    ]
}
```

### Object Structuring

The GET\_CALLS API endpoint returns arrays of the following object structures:

{% tabs %}
{% tab title="Dispatch Call" %}
```javascript
{
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
    "notes": [],
    "idents": [1, 2, 3] // Array of identifier IDs
}
```
{% endtab %}

{% tab title="Emergency Call" %}
```javascript
{
    "callId": -1,
    "isEmergency": false, // CIVIL or EMERGENCY
    "caller": "John Doe",
    "location": "1234 E. Test Ave",
    "description": "Help, my cat is stuck in a tree!"
}
```
{% endtab %}
{% endtabs %}

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

{% tab title="CALL_STATUS" %}
| Integer (Enumeration) Value | Status Description |
| --------------------------- | ------------------ |
| 0                           | PENDING            |
| 1                           | ACTIVE             |
| 2                           | CLOSED             |
{% endtab %}

{% tab title="UNIT_STATUS" %}
These represent the default [unit status](../../../../tutorials/customization/unit-status-codes.md) options.

| Integer (Enumeration) Value | Status Description |
| --------------------------- | ------------------ |
| 0                           | UNAVAILABLE        |
| 1                           | BUSY               |
| 2                           | AVAILABLE          |
| 3                           | ENROUTE            |
| 4                           | ON\_SCENE          |
{% endtab %}

{% tab title="CALL_TYPE" %}
| Integer (Enumeration) Value | Call Type Description |
| --------------------------- | --------------------- |
| `0`                         | DISPATCH CALL         |
| `1`                         | EMERGENCY CALL        |
| `100`                       | ALL CALLS             |
{% endtab %}
{% endtabs %}
