---
description: Update stored member display names for a specific Sonoran Radio server.
---

# Set Member Display Names

## Set Member Display Names

<mark style="color:yellow;">`PATCH`</mark> `/v2/servers/:communityId/members/display-names`

> **Rate limit:** `4 requests per minute`

Updates member nicknames for the selected server.

**Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Authorization | `Bearer <community-api-key>` |
| Content-Type  | `application/json`           |

**Examples**

{% tabs %}
{% tab title="Sonoran.lua" %}
```lua
local response = client.radio:setMemberDisplayNamesV2({
  {
    accId = "91de0ce8-c571-11e9-9714-5600023b2434",
    nickname = "Chief Miller"
  }
}, 1)
```
{% endtab %}

{% tab title="Sonoran.js" %}
```javascript
const response = await instance.radio?.setMemberDisplayNamesV2([
  {
    accId: "91de0ce8-c571-11e9-9714-5600023b2434",
    nickname: "Chief Miller"
  }
], 1);
```
{% endtab %}

{% tab title="Sonoran.py" %}
```python
response = instance.radio.setMemberDisplayNamesV2([
    {
        "accId": "91de0ce8-c571-11e9-9714-5600023b2434",
        "nickname": "Chief Miller"
    }
], 1)
```
{% endtab %}

{% tab title="Sonoran.Net" %}
```csharp
var response = await sonoran.Radio.setMemberDisplayNamesV2(new[]
{
    new MemberDisplayNameV2Change
    {
        AccId = "91de0ce8-c571-11e9-9714-5600023b2434",
        Nickname = "Chief Miller"
    }
});
```
{% endtab %}

{% tab title="OpenAPI" %}
```yaml
openapi: 3.1.0
paths:
  /v2/servers/{communityId}/members/display-names:
    patch:
      security:
        - bearerAuth: []
```
{% endtab %}

{% tab title="cURL" %}
```bash
curl -X PATCH "https://api.sonoranradio.com/v2/servers/YOUR_COMMUNITY_ID/members/display-names" \
  -H "Authorization: Bearer your-community-api-key" \
  -H "Content-Type: application/json" \
  -d "{\"accNicknames\":[{\"accId\":\"91de0ce8-c571-11e9-9714-5600023b2434\",\"nickname\":\"Chief Miller\"}]}"
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
{
  "updatedAccIds": [
    "91de0ce8-c571-11e9-9714-5600023b2434"
  ]
}
```
