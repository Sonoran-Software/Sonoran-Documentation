---
description: >-
  Sonoran CAD allows you to easily add new custom records and reports to your
  community via API.
---

# New Record

{% hint style="warning" %}
This API endpoint requires the **Plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## New Record

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/general/new_record`

This endpoint allows you to add a new custom record to your community.

#### Request Body

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| id   | string | Your community's ID      |
| key  | string | Your community's API Key |
| type | string | NEW\_RECORD              |
| data | array  | Array of record objects  |

{% tabs %}
{% tab title="200 " %}
```
{NEW RECORD OBJECT}
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
    "type": "NEW_RECORD",
    "data": [
        {
            "user": "STEAM:1234",  // API ID or user UUID/GUID that 'owns' this record
            "useDictionary": true, // OPTION 1: Key/Value from template
            "recordTypeId": 7,     // OPTION 1: Custom template ID number
            "replaceValues": {
                // Field UID and Value
                "first": "Brian",
                "last": "Sosnowski"
            },
            "record": null,        // OPTION 2: Full raw JSON structure
            "deleteAfterMinutes": 30 // OPTIONAL: Delete record after X minutes (temporary record)
        }
    ]
}
```

### Formatting Data for Custom Records

Custom records can be easily modified with a set of key/value pairs, or full raw JSON.

Learn more about these formatting options below:

{% content-ref url="api-options-for-adding-and-modifying-records.md" %}
[api-options-for-adding-and-modifying-records.md](api-options-for-adding-and-modifying-records.md)
{% endcontent-ref %}
