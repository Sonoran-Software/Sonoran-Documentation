---
description: >-
  This endpoint allows you to remove any record retrieved from a LOOKUP_NAME or
  LOOKUP_PLATE request.
---

# Remove Record

{% hint style="warning" %}
This API endpoint requires the **Plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## Remove Record

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/general/remove_record`

This endpoint allows you to remove any record in your community.

#### Request Body

| Name | Type   | Description                  |
| ---- | ------ | ---------------------------- |
| id   | string | Your community's ID          |
| key  | string | Your community's API Key     |
| type | string | REMOVE\_RECORD               |
| data | array  | Array of unit status objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
REMOVED RECORD {ID}
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
    "type": "REMOVE_RECORD",
    "data": [
        {
            "id": 100, // Unique ID - Retrieved from LOOKUP_NAME or LOOKUP_PLATE
        },
    ]
}
```
