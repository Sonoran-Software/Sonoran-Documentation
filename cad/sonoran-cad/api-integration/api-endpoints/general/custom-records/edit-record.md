---
description: >-
  Sonoran CAD allows you to easily modify an existing custom record in your
  community via API.
---

# Edit Record

{% hint style="warning" %}
This API endpoint requires the **Plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## Edit Record

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/general/edit_record`

This endpoint allows you to edit an existing custom record to your community.

```javascript
    "id": "YOUR_COMMUNITY_ID",
    "key": "YOUR_API_KEY",
    "type": "EDIT_RECORD",
    "data": [
        {
            "user": "STEAM:1234",  // API ID or user UUID/GUID that 'owns' this record
            "templateId": 5,       // Template ID (shown in Admin menu next to name) or on the record's `recordTypeId` field
            "useDictionary": true, // OPTION 1: Key/Value from template
            "recordId": 123,       // OPTION 1: Record ID being modified
            "replaceValues": {
                // Field UID and Value
                "first": "Brian",
                "last": "Sosnowski"
            },
            "record": null,        // OPTION 2: Full raw JSON structure
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
