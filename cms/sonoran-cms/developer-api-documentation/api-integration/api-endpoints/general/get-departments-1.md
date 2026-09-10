---
description: Provides all profile fields associated and configured by the community.
---

# Get Profile Fields

## Get Profile Fields

<mark style="color:green;">`POST`</mark> `https://api.sonorancms.com/general/get_profile_fields`

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
<pre class="language-javascript"><code class="lang-javascript">[
    {
<strong>        "id": "d9d1288e-3892-40d6-acc5-be2c3d294bd4",
</strong>        "type": "text array",
        "label": "Steam IDs",
        "options": null
    },
    ...
]
</code></pre>
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
    "type": "GET_PROFILE_FIELDS"
}
```
