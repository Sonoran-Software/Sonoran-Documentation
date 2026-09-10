---
description: >-
  This endpoint gets the subscription enumeration value of a Sonoran Radio
  community, based on the IP address it's called from.
---

# Get Server Subscription from IP

## Get Server Subscription from IP

<mark style="color:green;">`GET`</mark> `/radio/check-server-subscription`

This endpoint gets the subscription enumeration value of a Sonoran Radio community, based on the IP address it's called from. The IP address is set via the [set server IP endpoint](get-server-subscription-from-ip.md#set-server-ip).

**Headers**

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
  "result": "ok",
  "subscription": 0 // 0 = Free, 1 = Plus, 2 = Pro
}
```
{% endtab %}

{% tab title="400" %}
```json
{
  "error": "Invalid request"
}
```
{% endtab %}
{% endtabs %}
