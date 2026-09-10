# Leave Community

{% hint style="warning" %}
This API endpoint is not available to the public and exists for internal documentation only for the CMS program.
{% endhint %}

## Leave Community

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/sso/community`

This endpoint allows you to retrieve your community's server configuration. This contains valuable Live Map configuration data and can be used to ensure correct Live Map configs.

#### Request Body

| Name                                          | Type   | Description                                       |
| --------------------------------------------- | ------ | ------------------------------------------------- |
| id<mark style="color:red;">\*</mark>          | string | Your community's ID                               |
| key<mark style="color:red;">\*</mark>         | string | Your community's API Key                          |
| type<mark style="color:red;">\*</mark>        | string | LEAVE\_COMMUNITY                                  |
| data<mark style="color:red;">\*</mark>        | array  | Array of request objects                          |
| internalKey<mark style="color:red;">\*</mark> | N/A    | Key for internal use only, not open to the public |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
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
    "internalKey": "" // Not disclosed to public
    "type": "LEAVE_COMMUNITY",
    "data": [
        {
            "account": "000-000-000-000" // Account UUID
        }
    ]
}
```
