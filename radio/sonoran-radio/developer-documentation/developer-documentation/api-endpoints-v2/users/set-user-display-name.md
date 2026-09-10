---
description: Update a stored user display name for a specific Sonoran Radio server.
---

# Set User Display Name

## Set User Display Name

<mark style="color:yellow;">`PATCH`</mark> `/v2/servers/:communityId/users/display-name`

> **Rate limit:** `12 requests per minute`\
> This endpoint has a small internal gateway buffer, but the published public limit is `12 requests per minute`.

Updates a single member display name and propagates that update to connected sessions.

**Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Authorization | `Bearer <community-api-key>` |
| Content-Type  | `application/json`           |

**Examples**

{% tabs %}
{% tab title="Sonoran.lua" %}
```lua
local response = client.radio:setUserDisplayNameV2({
  communityId = "YOUR_COMMUNITY_ID",
  accId = "91de0ce8-c571-11e9-9714-5600023b2434",
  displayName = "Chief Miller"
})
```
{% endtab %}

{% tab title="Sonoran.js" %}
```javascript
const response = await instance.radio?.setUserDisplayNameV2({
  communityId: "YOUR_COMMUNITY_ID",
  accId: "91de0ce8-c571-11e9-9714-5600023b2434",
  displayName: "Chief Miller"
});
```
{% endtab %}

{% tab title="Sonoran.py" %}
```python
response = instance.radio.setUserDisplayNameV2({
    "communityId": "YOUR_COMMUNITY_ID",
    "accId": "91de0ce8-c571-11e9-9714-5600023b2434",
    "displayName": "Chief Miller",
})
```
{% endtab %}

{% tab title="Sonoran.Net" %}
```csharp
var response = await sonoran.Radio.setUserDisplayNameV2(new SetUserDisplayNameV2Request
{
    AccId = "91de0ce8-c571-11e9-9714-5600023b2434",
    DisplayName = "Chief Miller"
});
```
{% endtab %}

{% tab title="OpenAPI" %}
```yaml
openapi: 3.1.0
paths:
  /v2/servers/{communityId}/users/display-name:
    patch:
      security:
        - bearerAuth: []
```
{% endtab %}

{% tab title="cURL" %}
```bash
curl -X PATCH "https://api.sonoranradio.com/v2/servers/YOUR_COMMUNITY_ID/users/display-name" \
  -H "Authorization: Bearer your-community-api-key" \
  -H "Content-Type: application/json" \
  -d "{\"accId\":\"91de0ce8-c571-11e9-9714-5600023b2434\",\"displayName\":\"Chief Miller\"}"
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
{
  "accId": "91de0ce8-c571-11e9-9714-5600023b2434",
  "displayName": "Officer Smith"
}
```
