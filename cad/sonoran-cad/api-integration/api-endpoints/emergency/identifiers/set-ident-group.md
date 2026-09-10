---
description: >-
  This endpoint allows you to set, change, or remove the group for one or more
  unit identifiers.
---

# Set Ident Group

{% hint style="warning" %}
This API endpoint requires the **pro** version of Sonoran CAD or higher. For more information, see our [pricing](../../../../pricing/faq/) page.
{% endhint %}

## Update Unit Status

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/emergency/idents_to_group`

The unit location API endpoint allows you to update a unit's location from in-game.

#### Request Body

| Name | Type   | Description                  |
| ---- | ------ | ---------------------------- |
| id   | string | Your community's ID          |
| key  | string | Your community's API Key     |
| type | string | UNIT\_STATUS                 |
| data | array  | Array of unit status objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
Set idents 123, 456, 789 to group 'Group 1".
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
    "type": "IDENTS_TO_GROUP",
    "data": [
        {
            "serverId": 1,          // Server ID
            "identIds": [123, 456, 789], // Array of identifier ID integers
            "account": "000-000-000", // OPTIONAL: Specify the Sonoran account GUID's current identifier to be added to the list of identIds
            "groupName": "Group 1" // Name of group to set the identifiers to. Use an empty string to clear their group.
        },
    ]
}
```
