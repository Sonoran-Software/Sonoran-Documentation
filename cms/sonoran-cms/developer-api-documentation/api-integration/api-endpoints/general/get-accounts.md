---
description: >-
  This endpoint allows you to get community accounts paginated by sysStatus,
  comStatus, banned and archived.
---

# Get Accounts

## Get Accounts

<mark style="color:green;">`POST`</mark> `https://api.sonorancms.com/general/get_accounts`

Get Sonoran CMS community accounts paginated by sysStatus, comStatus, banned and archived.

#### Request Body

| Name                                   | Type   | Description              |
| -------------------------------------- | ------ | ------------------------ |
| id<mark style="color:red;">\*</mark>   | string | Community ID             |
| key<mark style="color:red;">\*</mark>  | string | API Key                  |
| type<mark style="color:red;">\*</mark> | string | GET\_ACCOUNTS            |
| data<mark style="color:red;">\*</mark> | array  | Array of request objects |

{% tabs %}
{% tab title="200: OK " %}
<pre class="language-json"><code class="lang-json"><strong>{
</strong><strong>    "total": 10, // Total accounts found within parameters
</strong>    "skip": 0, // Accounts skipped in query
    "take": 25, // Min. 25, max amount of accounts that will be returned
    "accounts": [
        {
            "accId": "00000000-0000-0000-0000-000000000000",
            "accName": "TestAccount",
            "activeApiIds": ["000000000000000"],
            "discordId": "000000000000000",
            "sysStatus": true,
            "comStatus": true,
            "archived": false,
            "banned": false,
        },
        ...
    ]
<strong>}
</strong></code></pre>
{% endtab %}

{% tab title="400: Bad Request The following 400 errors may be sent in response:" %}
```javascript
INVALID API KEY
INVALID COMMUNITY ID
```
{% endtab %}
{% endtabs %}

```
{
    "id": "YOUR_COMMUNITY_ID",
    "key": "YOUR_API_KEY",
    "type": "GET_ACCOUNTS",
    "data": [
        {
            skip: number, // optional - total accounts skipped in query
            take: number, // optional - total accounts grabbed in query (min. 25 - max 100)
            sysStatus: boolean, // Within community acc parameter
            comStatus: boolean, // Active / pending community acc parameter
            banned: boolean, // Banned community acc parameter
            archived: boolean, // Archived community acc paramter
        }
    ]
}
```
