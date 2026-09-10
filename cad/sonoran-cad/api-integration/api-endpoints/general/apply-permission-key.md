---
description: >-
  This endpoint allows you to apply a permission key to a user from your
  community.
---

# Apply Permission Key

{% hint style="warning" %}
This API endpoint requires the **plus** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

## Apply Permission Key

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/general/apply_permission_key`

This endpoint allows you to apply a permission key to a user in your community.

#### Request Body

| Name | Type   | Description                                  |
| ---- | ------ | -------------------------------------------- |
| id   | string | Your community's ID                          |
| key  | string | Your community's API Key                     |
| type | string | APPLY\_PERMISSION\_KEY                       |
| data | array  | Array of user account permission key objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
Permission key {{ KEY }} applied!
```
{% endtab %}

{% tab title="400 The following 400 errors may be sent in response:" %}
```http
INVALID REQUEST TYPE
INVALID COMMUNITY ID
API ENDPOINT IS NOT ENABLED FOR THIS COMMUNITY
INVALID API KEY
```
{% endtab %}

{% tab title="404 A non-linked API ID will be met with the following response:" %}
```
API ID NOT LINKED TO AN ACCOUNT IN THIS COMMUNITY
```
{% endtab %}
{% endtabs %}

```javascript
{
    "id": "YOUR_COMMUNITY_ID",
    "key": "YOUR_API_KEY",
    "type": "APPLY_PERMISSION_KEY",
    "data": [
        {
            "apiId": "STEAM:1234", // API ID entered in the unit identifiers
                                   // Typically, this is their STEAM ID
            "permissionKey": "Key123" // Name of Permission Key
        },
    ]
}
```

Learn more about [configuring permission keys](../../../tutorials/getting-started/permissions.md).
