---
description: This endpoint allows you to add a new dispatch call note.
---

# Add Call Note

{% hint style="warning" %}
This API endpoint requires the **plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## Add Call Note

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/add_call_note`

#### Request Body

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| id   | string | Your community's ID      |
| key  | string | Your community's API Key |
| type | string | ADD\_CALL\_NOTE          |
| data | array  | Array of request objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
NOTE 'some note here' added to call #123
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
    "type": "ADD_CALL_NOTE",
    "data": [
        {
            "serverId": 1, // Default 1 - See guide on setting up multiple servers
            "callId": 123,
            "label": "A-10", // OPTIONAL (sender of the note)
            "note": "This is a test!" // Note text
        },
    ]
}
```

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
