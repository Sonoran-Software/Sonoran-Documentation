---
description: This endpoint allows you to add a new character to an existing user account.
---

# New Character

{% hint style="warning" %}
This API endpoint requires the **plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

{% hint style="danger" %}
New characters can NOT be added to communities using [Database Sync](/broken/pages/-M4q1ttRJj-kIHpuRH3y), as all characters are pulled from your server's in-game database.
{% endhint %}

## New Character

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/civilian/new_character`

This endpoint allows you to add a new character to an existing user account.

#### Request Body

| Name | Type   | Description                |
| ---- | ------ | -------------------------- |
| id   | string | Your community's ID        |
| key  | string | Your community's API Key   |
| type | string | NEW\_CHARACTER             |
| data | array  | Array of character objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
NEW CHARACTER ADDED TO {{ USERNAME }}
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
    "type": "NEW_CHARACTER",
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

{% content-ref url="../general/custom-records/api-options-for-adding-and-modifying-records.md" %}
[api-options-for-adding-and-modifying-records.md](../general/custom-records/api-options-for-adding-and-modifying-records.md)
{% endcontent-ref %}
