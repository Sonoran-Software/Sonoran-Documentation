---
description: >-
  This endpoint allows you to send an image popup to a user's CAD from in-game
  for mugshots, evidence photos, etc.
---

# Send Photo

{% hint style="warning" %}
This API endpoint requires the **pro** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

## Send Photo

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/general/send_photo`

#### Request Body

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| id   | string | Your community's ID      |
| key  | string | Your community's API Key |
| type | string | SEND\_PHOTO              |
| data | array  | Array of request objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
Photo sent!
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
    "type": "SEND_PHOTO",
    "data": [
        {
          "apiId": "STEAM:1234", // User API ID
          "url": "https://example.com/photo.png" // Photo URL
    ]

```
