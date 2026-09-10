---
description: This endpoint allows you to get a community account ranks.
---

# Get Account Ranks

## Get Account Ranks

<mark style="color:green;">`POST`</mark> `https://api.sonorancms.com/general/get_account_ranks`

Get a Sonoran CMS community account's ranks by account ID, API ID, or username.

#### Request Body

| Name                                   | Type   | Description              |
| -------------------------------------- | ------ | ------------------------ |
| id<mark style="color:red;">\*</mark>   | string | Community ID             |
| key<mark style="color:red;">\*</mark>  | string | API Key                  |
| type<mark style="color:red;">\*</mark> | string | GET\_COM\_ACCOUNT        |
| data<mark style="color:red;">\*</mark> | array  | Array of request objects |

{% tabs %}
{% tab title="200: OK " %}
```javascript
[
    "4298c76d-a1ee-46dc-b33c-8daf2e2280dd", // UUID of Rank
    ...
]
```
{% endtab %}

{% tab title="400: Bad Request The following 400 errors may be sent in response:" %}
```javascript
INVALID API KEY
INVALID COMMUNITY ID
API ID NOT LINKED TO AN ACCOUNT IN THIS COMMUNITY
NO ACCOUNT FOUND UNDER GIVEN PARAMETERS IN THIS COMMUNITY
```
{% endtab %}
{% endtabs %}

```
{
    "id": "YOUR_COMMUNITY_ID",
    "key": "YOUR_API_KEY",
    "type": "GET_ACCOUNT_RANKS",
    "data": [
        {
            "apiId": "SOME_API_ID", // Optional - must have one
            "username": "SOMEUSERNAME", // Optional - must have one
            "accId": "SOMEACCID", // Optional - must have one
            "discord": "111122223333444455", // Optional - must have one
            "uniqueId": 1234 // Optional - must have one
        }
    ]
}
```
