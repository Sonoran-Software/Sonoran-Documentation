---
description: >-
  The unit location update call allows you to update a unit's location from
  in-game.
---

# Update Unit Location

{% hint style="warning" %}
iThis API endpoint requires the **standard** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../../pricing/faq/)page.
{% endhint %}

## Unit Location

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/unit_location`

The unit location API endpoint allows you to update a unit's location from in-game.

#### Request Body

| Name | Type   | Description                    |
| ---- | ------ | ------------------------------ |
| id   | string | Your community's ID            |
| key  | string | Your community's API Key       |
| type | string | UNIT\_LOCATION                 |
| data | array  | Array of unit location objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
UNIT LOCATION UPDATED
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
    "type": "UNIT_LOCATION",
    "data": [
        {
            "apiId": "STEAM:1234", // API ID entered in the unit identifiers
                                   // Typically, this is their STEAM ID
            "location": "1234 W. Example St.",
            "coordinates": { // X/Y coordinates for live map (floats)
                "x": 1000,
                "y": 2000,
            }
        },
        {
            "apiId": "STEAM:5678",
            "location": "5678 E. Test Ave.",
            "coordinates": {
                "x": 1000,
                "y": 2000,
            }
        }
    ]
}
```

#### API ID

The **apiId** field contains a unique ID that every unit identifier must have specified in Sonoran CAD. Users can set this field in their identifier to properly map unit update API calls to their CAD identifier.\
\
For more information, see our guide on setting your unit's API ID:

{% content-ref url="../../../getting-started/setting-your-api-id.md" %}
[setting-your-api-id.md](../../../getting-started/setting-your-api-id.md)
{% endcontent-ref %}

#### Rate Limiting

To avoid being rate limited when frequently updating multiple unit locations, it is best to group multiple unit location update together into the **data** array field. When compared to making a separate API call with every location update, grouping multiple location updates into a single call every few seconds is more efficient.

_NOTE:_ We recommend updating unit locations in a group no more frequently than every 5 seconds.
