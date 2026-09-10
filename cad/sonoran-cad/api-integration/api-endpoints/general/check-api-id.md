---
description: >-
  This endpoint allows you to check if a user has properly setup their API ID in
  their CAD.
---

# Check API ID

{% hint style="warning" %}
This API endpoint requires the **standard** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

## Check API ID

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/general/check_apiid`

The unit location API endpoint allows you to check if a user has linked their CAD's API ID.

#### Request Body

| Name | Type   | Description                  |
| ---- | ------ | ---------------------------- |
| id   | string | Your community's ID          |
| key  | string | Your community's API Key     |
| type | string | CHECK\_APIID                 |
| data | array  | Array of unit status objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
{{ USERNAME }}
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

{% tab title="404 A non-linked API ID will be met with the following response:" %}
```
API ID NOT LINKED TO AN ACCOUNT IN THIS COMMUNITY
```
{% endtab %}
{% endtabs %}

```javascript
{
    "id": "YOUR_COMMUNITY_ID",
    "key": "YOUR_API_KEY",
    "type": "CHECK_APIID",
    "data": [
        {
            "apiId": "STEAM:1234", // API ID entered in the unit identifiers
                                   // Typically, this is their STEAM ID
        },
    ]
}
```
