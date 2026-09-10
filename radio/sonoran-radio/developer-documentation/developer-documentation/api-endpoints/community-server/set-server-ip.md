---
description: >-
  This endpoint sets the IP address of a Sonoran Radio community, used for
  resource authentication.
---

# Set Server IP

## Set Server IP

<mark style="color:green;">`POST`</mark> `/radio/set-server-ip`

This endpoint sets the IP address of a Sonoran Radio community, used for resource authentication.

**Headers**

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |

**Body**

| Name      | Type   | Description       |
| --------- | ------ | ----------------- |
| `id`      | string | Community ID      |
| `key`     | string | Community API Key |
| `pushUrl` | string | Push Event URL    |

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
  "result": "ok"
}
```
{% endtab %}

{% tab title="404" %}
```json
{
  "result": "bad",
  "error": "Invalid community ID or API key"
}
```
{% endtab %}
{% endtabs %}

## G
