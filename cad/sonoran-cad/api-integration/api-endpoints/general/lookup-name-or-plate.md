---
description: Retrieve all records associated with a name or license plate.
---

# Lookup Name or Plate

{% hint style="warning" %}
This API endpoint requires the **Plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

{% hint style="danger" %}
API response times may be increased slightly for communities with Database Sync enabled, depending upon the speed, latency and size of your in-game database.
{% endhint %}

## Lookup Name or Plate

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/general/lookup`

The lookup name endpoint allows you to retrieve all records associated with a provided name or license plate.

#### Request Body

| Name | Type   | Description                                  |
| ---- | ------ | -------------------------------------------- |
| id   | string | Your community's ID                          |
| key  | string | Your community's API Key                     |
| type | string | LOOKUP                                       |
| data | array  | Array containing a lookup information object |

\{% tab title="200 A successful call will be met with the following response: Detailed contents of the record type arrays can be found further below." %\}

```
{
  "records": []
}
```

```
INVALID REQUEST TYPE
INVALID COMMUNITY ID
API IS NOT ENABLED FOR THIS COMMUNITY
INVALID API KEY
INVALID EMPTY SEARCH
```

## API Call Example

```javascript
{
    "id": "YOUR_COMMUNITY_ID",
    "key": "YOUR_API_KEY",
    "type": "LOOKUP",
    "data": [
        {
            "apiId": "STEAM:1234", // OPTIONAL FIELD - Will return results to user's CAD
            "account": "000-000-000", // OPTIONAL FIELD - Will return results to user's CAD (via account UUID)
            "types": [2, 3], // Search only for warrant and BOLO records
            "first": "John", // (Partial) First name
            "last": "Doe", // (Partial) Last name
            "mi": "M", // Middle Initial
            "plate": "1234ABCD", // (Partial) License Plate
            "partial": true, // OPTIONAL - Partial lookup is ran if not defined
            "agency": "Yavapai County", // OPTIONAL - Agency of filing identifier
            "department": "YCSO", // OPTIONAL - Department of filing identifier
            "subdivision": "Speed Enforcement" // OPTIONAL - Subdivision of filing identifier
        }
    ]
}
```

{% hint style="warning" %}
Searches must include all name/plate data fields, but some can be left blank. Searches must include at least one field with string content (ex: first name 'John') and can not have all fields left blank.

To perform a plate based search, simply fill in the `plate` property and leave the rest blank.
{% endhint %}

{% tabs %}
{% tab title="API ID" %}
**API ID**

Adding the [API ID](../../getting-started/setting-your-api-id.md) field is _optional_, and will send the lookup results to the user's CAD as well.
{% endtab %}

{% tab title="Record Types" %}
**Record Type**

The record "type" is an enumerator used to distinguish the category of the custom record/report. These integer values are entered as an array in the `types` field of the lookup call.

The `characters` object array will always be included with the search. The `types` filtering only applies to the custom records being returned.

| Enum | Description                 |
| ---- | --------------------------- |
| 2    | Warrant                     |
| 3    | BOLO                        |
| 4    | License                     |
| 5    | Custom Vehicle Registration |
| 7    | Custom Character Record     |
| 8    | Custom Police Record        |
| 9    | Custom Police Report        |
| 10   | Custom Medical Record       |
| 11   | Custom Medical Report       |
| 12   | Custom Fire Record          |
| 13   | Custom Fire Report          |
| 14   | Custom DMV Record           |
| 15   | Custom Law Record           |
| 16   | Custom Law Report           |
{% endtab %}

{% tab title="Response Object Types" %}
**Response Object Types**

**Records Formatting**

All record results are returned in an object array. For more information on custom record structuring, see the documentation below:

{% content-ref url="custom-records/" %}
[custom-records](custom-records/)
{% endcontent-ref %}
{% endtab %}
{% endtabs %}
