---
description: This endpoint verifies a user account's secret ID.
---

# Verify Secret

{% hint style="warning" %}
This API endpoint requires the **Standard** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

## Get Account

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/general/verify_secret`

This endpoint verifies a user account's secret ID.

#### Request Body

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| id   | string | Your community's ID      |
| key  | string | Your community's API Key |
| type | string | VERIFY\_SECRET           |
| data | array  | Array of request objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```javascript
// Dictionary of Account UUID (key) and Secret (value)
{"91de0ce8-c571-11e9-9714-5600023b2434" : "41d2169d-3079-4a05-b92d-df2af78e8b3e"}
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
    "type": "VERIFY_SECRET",
    "data": [
        {
            "secret": "0000-0000-0000-0000" // GUID/UUID
        },
    ]
}
```
