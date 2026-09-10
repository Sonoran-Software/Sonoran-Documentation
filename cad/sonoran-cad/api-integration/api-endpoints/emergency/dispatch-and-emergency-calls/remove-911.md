---
description: >-
  This endpoint allows you to remove an existing emergency/911 call from the
  CAD.
---

# Remove 911

{% hint style="warning" %}
This API endpoint requires the **Standard** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

This endpoint allows you to remove an existing emergency/911 call from the CAD.

## Remove 911

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/remove_911`

#### Request Body

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| id   | string | Your community's ID      |
| key  | string | Your community's API Key |
| type | string | REMOVE\_911              |
| data | array  | Array of request objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
API ID(s) set!
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
    "type": "REMOVE_911",
    "data": [
        {
          "serverId": 1,
          "callId": 1 // Call ID
	}
    ]
}
```

#### Call ID

The call ID integer value can be retrieved from the [get calls API endpoint](get-calls.md), or returned in the response message when [creating a 911 call via an API call](911-call.md).
