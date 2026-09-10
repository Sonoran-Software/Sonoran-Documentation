---
description: >-
  Sonoran CAD allows you to retrieve your custom record and report templates via
  API.
---

# Get Record Templates

{% hint style="warning" %}
This API endpoint requires the **Plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## Get Record Templates

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/general/get_templates`

This endpoint allows you to retrieve all custom record and report templates in your community.

#### Request Body

| Name       | Type   | Description              |
| ---------- | ------ | ------------------------ |
| templateId | number | Unique template ID       |
| id         | string | Your community's ID      |
| key        | string | Your community's API Key |
| type       | string | GET\_TEMPLATES           |
| data       | array  | Empty Array              |

{% tabs %}
{% tab title="200 " %}
```
[{RECORD TEMPLATES}]
```
{% endtab %}

{% tab title="400 " %}
```
INVALID REQUEST TYPE
INVALID COMMUNITY ID
API IS NOT ENABLED FOR THIS COMMUNITY
INVALID API KEY
```
{% endtab %}
{% endtabs %}

```javascript
    "id": "YOUR_COMMUNITY_ID",
    "key": "YOUR_API_KEY",
    "type": "GET_TEMPLATES",
    "recordTypeId": 123, // OPTIONAL - Matches a specific record's recordTypeId field
}
```

#### Record Formatting

Custom records require a strict format with several dozen different data fields. You can view a detailed explanation of [custom record formatting](./#record-formatting).
