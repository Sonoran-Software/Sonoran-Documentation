---
description: >-
  Sonoran CAD has additional record lookup capabilities via specific values for
  unit identifiers, record or supervisor status, and more!
---

# Lookup By Value

{% hint style="warning" %}
This API endpoint requires the **Plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

{% hint style="danger" %}
API response times may be increased slightly for communities with Database Sync enabled, depending upon the speed, latency and size of your in-game database.
{% endhint %}

## Lookup By Value

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/general/lookup_value`

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
            "apiId": "STEAM:1234", // OPTIONAL FIELD - Will return results to user's CAD
            "account": "000-000-000", // OPTIONAL FIELD - Will return results to user's CAD (via account UUID)
            "searchType": 0, // See the "Search Type" enum
            "value": 1, // See the "Value" information
            "types": [2, 3], // Search only for warrant and BOLO records
            "limit": 10, // OPTIONAL: Only the 10 most recent records
            "offset": 0, // OPTIONAL: Start from the first page of (10) records
        }
    ]
}
```

{% tabs %}
{% tab title="API ID" %}
**API ID**

Adding the [API ID](../../getting-started/setting-your-api-id.md) field is _optional_, and will send the lookup results to the user's CAD as well.
{% endtab %}

{% tab title="Search Type" %}
**SearchType Enumerator**

The `searchType` enumerator determines how your `value` integer is interpreted.

| Enum | Description        |
| ---- | ------------------ |
| 0    | IDENTIFIER         |
| 1    | SUPERVISOR\_STATUS |
| 2    | ACTIVE\_STATUS     |
| 3    | NUMBER             |
| 4    | SECRET             |
| 5    | ACCOUNT            |
{% endtab %}

{% tab title="Value" %}
**Value Integer**

The `value` integer is the primary search key for the `searchType` specified.

**Identifier (searchType 0)**

When specifying an identifier `searchType` the `value` represents the unique identifier ID of a specific unit. You can retrieve this unique identifier ID via the [Get Identifiers endpoint](../emergency/identifiers/get-identifiers.md).

This will return all records associated with the provided unit identifier.

**Supervisor Status (searchType 1)**

When specifying a supervisor status `searchType` the `value` represents the supervisor status of the records being searched.

| Enum | Description                          |
| ---- | ------------------------------------ |
| 0    | Open: Requires Supervisor Actions    |
| 1\`  | Closed: No Supervisor Actions Needed |

**Active Status (searchType 2)**

When specifying an active status `searchType` the `value` represents the record status of the records being searched.\
The `value` integer enumeration here is used particularly to search open/closed warrants and pending/approved/rejected DMV records.

| Enum | Description                                |
| ---- | ------------------------------------------ |
| 0    | <p>Warrant: Open</p><p>DMV: Pending</p>    |
| 1    | <p>Warrant: Closed</p><p>DMV: Approved</p> |
| 2    | DMV: Rejected                              |

**Number (searchType 3)**

When specifying a number `searchType` the `value` represents the unique record number being searched. You can find the specific record number via any [lookup ](lookup-name-or-plate.md)or [lookup by ](lookup-by-integer.md)[value](lookup-by-integer.md#lookup-by-int) result.

Secret (searchType 4)

When specifying a user account secret ID, the `value` represents the unique user account secret UUID. Users will find this secret key in their [API ID settings](../../getting-started/setting-your-api-id.md) menu.

Account (searchType 5)

When specifying a user account ID, the `value` represents the unique user account UUID. This value is internal, and not exposed to on the UI. The [verify\_secret ](verify-secret.md)or [get\_account ](get-account.md)endpoints will allow communities to capture the account UUID programmatically.
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
