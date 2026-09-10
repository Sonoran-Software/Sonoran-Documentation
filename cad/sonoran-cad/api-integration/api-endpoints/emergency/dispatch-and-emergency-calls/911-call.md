---
description: >-
  The 911 Call API endpoint allows you to send 911 calls from in-game directly
  to your dispatchers.
---

# New 911 Call

{% hint style="warning" %}
This API endpoint requires the **standard** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## Emergency Call

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/call_911`

The 911 call API endpoint allows you to send 911 calls from in-game directly to your dispatchers.

#### Request Body

| Name | Type   | Description                     |
| ---- | ------ | ------------------------------- |
| id   | string | Your community's ID             |
| key  | string | Your community's API Key        |
| type | string | CALL\_911                       |
| data | array  | Array of emergency call objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
EMERGENCY CALL ADDED ID: {ID}
```
{% endtab %}

{% tab title="400 The following 400 errors may be sent in response" %}
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
    "type": "CALL_911",
    "data": [
        {
            "serverId": 1, // Server ID Integer
            "isEmergency": true, // Displays EMERGENCY or CIVIL type in the CAD
            "caller": "John Doe",
            "location": "1234 E. Test St.",
            "description": "Help, someone is breaking into my house!",
            "metaData": {
                "someKey": "someValue", // OPTIONAL: metaData for API custom storage
                "x": 1000, // OPTIONAL: Live Map X Coordinate
                "y": 1000 // OPTIONAL: Live Map Y Coordinate
            },
            "deleteAfterMinutes": 30 // OPTIONAL: Delete record after X minutes (temporary record)
        }
    ]
}
```

### Server ID

Because Sonoran CAD allows you to separate units and dispatchers into separate servers, the serverId field ensures this emergency call is sent to the appropriate dispatcher.\
\
For more information, see our guide on [configuring multiple servers](../../../../tutorials/customization/configuring-multiple-servers.md).

### Meta Data

The `metaData` object can be used to store custom API data in the 911 call.

Additionally, the following `metaData` properties will auto-set the dispatch call information:

| Property   | Type    | Description                                        |
| ---------- | ------- | -------------------------------------------------- |
| `priority` | Integer | <p>Dispatch call priority</p><p>Values 1, 2, 3</p> |
| `block`    | String  | Dispatch Call Block                                |
| `postal`   | String  | Dispatch Call Postal                               |
| `code`     | String  | Dispatch Call 10-Code                              |
