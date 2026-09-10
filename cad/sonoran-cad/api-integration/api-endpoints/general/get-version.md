---
description: This endpoint allows you to check your Sonoran CAD subscription version.
---

# Get Version

## Get Version

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/general/get_version`

This API endpoint gets the current plan used by the community.

#### Request Body

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| id   | string | Your community's ID      |
| key  | string | Your community's API Key |
| type | string | GET\_VERSION             |
| data | array  | Array of request objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
0 - FREE
1 - STARTER
2 - STANDARD
3 - PLUS
4 - PRO
6 - SONORAN ONE
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
    "type": "GET_VERSION",
    "data": []
}
```
