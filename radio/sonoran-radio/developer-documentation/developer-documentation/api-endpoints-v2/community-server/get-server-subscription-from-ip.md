---
description: >-
  Return the highest Sonoran Radio subscription level associated with the caller
  IP.
---

# Get Server Subscription from IP

## Get Server Subscription from IP

<mark style="color:green;">`GET`</mark> `/v2/server-subscriptions/by-ip`

> **Rate limit:** `2 requests per minute`

Returns the highest matching subscription level for the caller IP.

This endpoint does not require bearer authentication.

**Examples**

{% tabs %}
{% tab title="Sonoran.lua" %}
```lua
local response = client.radio:getServerSubscriptionFromIpV2()
```
{% endtab %}

{% tab title="Sonoran.js" %}
```javascript
const response = await instance.radio?.getServerSubscriptionFromIpV2();
```
{% endtab %}

{% tab title="Sonoran.py" %}
```python
response = instance.radio.getServerSubscriptionFromIpV2()
```
{% endtab %}

{% tab title="Sonoran.Net" %}
```csharp
var response = await sonoran.Radio.getServerSubscriptionFromIpV2();
```
{% endtab %}

{% tab title="OpenAPI" %}
```yaml
openapi: 3.1.0
paths:
  /v2/server-subscriptions/by-ip:
    get: {}
```
{% endtab %}

{% tab title="cURL" %}
```bash
curl -X GET "https://api.sonoranradio.com/v2/server-subscriptions/by-ip"
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
{
  "subscription": 2
}
```
