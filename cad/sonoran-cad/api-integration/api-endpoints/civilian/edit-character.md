---
description: >-
  This endpoint allows you to update an existing character associated with an
  account in the CAD.
---

# Edit Character

{% hint style="warning" %}
This API endpoint requires the **plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

{% hint style="danger" %}
Characters can NOT be edited in communities using [Database Sync](../../../integration-plugins/database-sync-and-merge/), as all characters are pulled from your server's in-game database.
{% endhint %}

## Edit Character

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/civilian/edit_character`

This endpoint allows you to update an existing character associated with an account in the CAD.

#### Request Body

| Name | Type   | Description                |
| ---- | ------ | -------------------------- |
| id   | string | Your community's ID        |
| key  | string | Your community's API Key   |
| type | string | EDIT\_CHARACTER            |
| data | array  | Array of character objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
CHARACTER {ID} EDITED FOR {USERNAME}
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

{% tab title="404 " %}
```
API ID NOT LINKED TO AN ACCOUNT IN THIS COMMUNITY
```
{% endtab %}
{% endtabs %}

```javascript
{
    "id": "YOUR_COMMUNITY_ID",
    "key": "YOUR_API_KEY",
    "type": "EDIT_CHARACTER",
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
            "record": null        // OPTION 2: Full raw JSON structure
        }
    ]
}
```

### Formatting Data for Custom Records

Custom records can be easily modified with a set of key/value pairs, or full raw JSON.

Learn more about these formatting options below:

{% content-ref url="../general/custom-records/api-options-for-adding-and-modifying-records.md" %}
[api-options-for-adding-and-modifying-records.md](../general/custom-records/api-options-for-adding-and-modifying-records.md)
{% endcontent-ref %}
