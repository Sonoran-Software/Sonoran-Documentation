---
description: This endpoint allows you to manually set a user's API IDs.
---

# Set API IDs

{% hint style="warning" %}
This API endpoint requires the **Standard** version of Sonoran CAD or higher. For more information, see our [pricing ](../../../pricing/faq/)page.
{% endhint %}

This endpoint allows you to manually set a user's [API ID](../../getting-started/setting-your-api-id.md). This endpoint is used in our [tablet](/broken/pages/-MCu5Pqlq4KeXD2LHoVt) and [API ID plugin ](/broken/pages/-M7QrbOeDd37INb3cCg2)to automatically link your in-game user to the CAD.

## Set API IDs

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/general/set_api_id`

#### Request Body

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| id   | string | Your community's ID      |
| key  | string | Your community's API Key |
| type | string | SET\_API\_ID             |
| data | array  | Array of request objects |

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```
API ID(s) set!
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
    "type": "SET_API_ID",
    "data": [
        {
          "username": "Brian1234",  // OPTION 1: Account Username
          "account": "000-000-000", // OPTION 2: Account GUID
          "sessionId": "2daf5d1-8256-4373-9a", // OPTIONAL - Authentication
          "apiIds": [
              "11000010499F33C",
              "ABCD123",
          ],
          "pushNew": true, // Push new API IDs to array or override entirely
		    }
    ]
}
```

Note: The `apiIds` will automatically filter out any duplicate values.

### Optional Fields

#### Session ID

The `sessionId` field is an optional field for authentication purposes.

The following data object is [emitted from your web browser](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) via `window.parent.postMessage` and can be captured by a parent page when hosting it in an iframe:

```javascript
{
  "username": "SonoranBrian",
  "session": "1234-5678-9012-3456"
}
```

This object contains your session ID, and can be captured with resources like our [in-game tablet](/broken/pages/-MCu5Pqlq4KeXD2LHoVt).

This is how the in-game tablet and [API ID](/broken/pages/-M7QrbOeDd37INb3cCg2) plugin work to automatically link your API ID when using the tablet.

#### Push New

The `pushNew` boolean determines whether or not to update the user account's existing API IDs and "push" (add) these new `apiIds` or to overwrite their saved API IDs entirely.

If not set, the default value is `true` (add onto existing API IDs).
