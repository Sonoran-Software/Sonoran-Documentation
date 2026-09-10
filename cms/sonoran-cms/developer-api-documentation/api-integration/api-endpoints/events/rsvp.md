---
description: This endpoint allows you to toggle RSVP with an event from a community.
---

# RSVP

## RSVP

<mark style="color:green;">`POST`</mark> `https://api.sonorancms.com/events/rsvp`

RSVP a community account found by API ID or account ID for an event.

#### Request Body

| Name                                   | Type   | Description              |
| -------------------------------------- | ------ | ------------------------ |
| id<mark style="color:red;">\*</mark>   | string | Community ID             |
| key<mark style="color:red;">\*</mark>  | string | API Key                  |
| type<mark style="color:red;">\*</mark> | string | RSVP                     |
| data<mark style="color:red;">\*</mark> | array  | Array of request objects |

{% tabs %}
{% tab title="200: OK The following 200 response texts may be sent in response:" %}
```javascript
RSVP_SUCCESS // This string will return whenever the account is added to the RSVP
UNRSVP_SUCCESS // This string will return whenever the acocunt is removed from the RSVP list
```
{% endtab %}

{% tab title="400: Bad Request The following 400 errors may be sent in response:" %}
```javascript
INVALID API KEY
INVALID COMMUNITY ID
API ID NOT LINKED TO AN ACCOUNT IN THIS COMMUNITY
```
{% endtab %}

{% tab title="404: Not Found The following 404 errors may be sent in response:" %}
```javascript
API ID NOT LINKED TO AN ACCOUNT IN THIS COMMUNITY
```
{% endtab %}
{% endtabs %}

```json
{
    "id": "YOUR_COMMUNITY_ID",
    "key": "YOUR_API_KEY",
    "type": "RSVP",
    "data": [
        {
            // User Identification
            "apiId": "SOME_API_ID", // Optional - must have one
            "username": "SOMEUSERNAME", // Optional - must have one
            "accId": "SOMEACCID", // Optional - must have one
            "discord": "111122223333444455", // Optional - must have one
            "uniqueId": 1234 // Optional - must have one
            // Configuration
            "eventId": "", // UUID of Event
        }
    ]
}
```
