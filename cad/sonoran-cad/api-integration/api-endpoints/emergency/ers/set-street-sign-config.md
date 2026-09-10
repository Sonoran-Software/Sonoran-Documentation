---
description: This endpoint sets your community's available ERS callouts.
---

# Set Available Callouts

{% hint style="warning" %}
This API endpoint requires the **pro** version of Sonoran CAD or higher.\
For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## Set Available Callouts

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/SET_AVAILABLE_CALLOUTS`

#### Request Body

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| id   | string | Your community's ID      |
| key  | string | Your community's API Key |
| type | string | SET\_AVAILABLE\_CALLOUTS |
| data | array  | Array of request objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
Updated 1234 callouts
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
    "type": "SET_AVAILABLE_CALLOUTS",
    "data": {
        "callouts": [
            {
              "id": "some_callout_name",
              "data": {}
            },
            {
              "id": "some_callout_name_2",
              "data": {}
            }
        ],
        "serverId": 1
    }
}
```
