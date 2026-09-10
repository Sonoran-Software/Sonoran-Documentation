---
description: >-
  This API endpoint allows communities with a large number of penal codes to set
  them easily with a single API call.
---

# Set Penal Codes

{% hint style="warning" %}
This API endpoint requires the **Standard** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

## Set Penal Codes

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/general/set_penal_codes`

This API endpoint allows communities with a large number of penal codes to set them easily with a single API call.

#### Request Body

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| id   | string | Your community's ID      |
| key  | string | Your community's API Key |
| type | string | SET\_PENAL\_CODES        |
| data | array  | Array of request objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
PENAL CODES SET!
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
    "type": "SET_PENAL_CODES",
    "data": [
        {
            "code": "(2)06",
            "type": "Felony",
            "title": "Armed Robbery",
            "bondType": "Federal Bail Bond",
            "jailTime": "5-10 Years",
            "bondAmount": 20000
        },
        {
            "code": "(2)07",
            "type": "Felony",
            "title": "Murder",
            "bondType": "Federal Bail Bond",
            "jailTime": "5-50 Years",
            "bondAmount": 100000
        }
    ]
}
```

### Penal Code Format

Your penal codes must be sent as a JSON object array in the exact format shown. Depending on how your community's penal codes are structure, you may want to write a script to automate this formatting. Then, send your penal codes via API with something like [Postman](https://www.postman.com/).

![Penal Codes set via API](<../../../.gitbook/assets/image (462).png>)
