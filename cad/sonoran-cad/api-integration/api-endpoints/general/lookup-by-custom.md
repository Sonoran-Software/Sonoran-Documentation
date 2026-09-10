---
description: Sonoran CAD has additional record lookup capabilities via custom search types.
---

# Lookup By Custom Search

{% hint style="warning" %}
This API endpoint requires the **Plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

{% hint style="danger" %}
API response times may be increased slightly for communities with Database Sync enabled, depending upon the speed, latency and size of your in-game database.
{% endhint %}

## Lookup By Value

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/general/lookup_custom`

The lookup name endpoint allows you to retrieve all records associated with a specific value.

#### Request Body

| Name | Type   | Description                                  |
| ---- | ------ | -------------------------------------------- |
| id   | string | Your community's ID                          |
| key  | string | Your community's API Key                     |
| type | string | LOOKUP\_INT                                  |
| data | array  | Array containing a lookup information object |

\{% tab title="200 A successful call will be met with the following response: Detailed contents of the record type arrays can be found further below." %\}

```
[] // Array of records
```

```
INVALID REQUEST TYPE
INVALID COMMUNITY ID
API IS NOT ENABLED FOR THIS COMMUNITY
INVALID API KEY
INVALID EMPTY SEARCH
```

### API Call Example

```javascript
{
    "id": "YOUR_COMMUNITY_ID",
    "key": "YOUR_API_KEY",
    "type": "LOOKUP_INT",
    "data": [
        {
            "map": "ssn", // Unique Field ID for the custom search type
            "value": "Some Search Input",
            "types": [2, 3], // Search only for warrant and BOLO records
            "partial": true // Partial or exact string search from value
        }
    ]
}
```

{% tabs %}
{% tab title="Map" %}
The search `map` is the unique `Custom Record Field ID` used in your [custom search type](../../../tutorials/customization/custom-search-types.md).
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
