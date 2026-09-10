---
description: Play one or more tones for a specific Sonoran Radio server.
---

# Play Tone

## Play Tone

<mark style="color:green;">`POST`</mark> `/v2/servers/:communityId/tones/play`

> **Rate limit:** `12 requests per minute`\
> This endpoint has a small internal gateway buffer, but the published public limit is `12 requests per minute`.

Plays one or more saved tone IDs or custom tone payloads to channels, groups, or in-game speaker targets.

**Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Authorization | `Bearer <community-api-key>` |
| Content-Type  | `application/json`           |

**Examples**

{% tabs %}
{% tab title="Sonoran.lua" %}
```lua
local response = client.radio:playToneV2(1, { 12 }, {
  { type = "channel", value = 101 }
}, 1)
```
{% endtab %}

{% tab title="Sonoran.js" %}
```javascript
const response = await instance.radio?.playToneV2(
  1,
  [12],
  [{ type: "channel", value: 101 }],
  1
);
```
{% endtab %}

{% tab title="Sonoran.py" %}
```python
response = instance.radio.playToneV2(
    1,
    [12],
    [{"type": "channel", "value": 101}],
    1,
)
```
{% endtab %}

{% tab title="Sonoran.Net" %}
```csharp
var response = await sonoran.Radio.playToneV2(new PlayToneV2Request
{
    Tones = new object[] { 12 },
    PlayTo = new object[] { new { type = "channel", value = 101 } }
});
```
{% endtab %}

{% tab title="OpenAPI" %}
```yaml
openapi: 3.1.0
paths:
  /v2/servers/{communityId}/tones/play:
    post:
      security:
        - bearerAuth: []
```
{% endtab %}

{% tab title="cURL" %}
```bash
curl -X POST "https://api.sonoranradio.com/v2/servers/YOUR_COMMUNITY_ID/tones/play" \
  -H "Authorization: Bearer your-community-api-key" \
  -H "Content-Type: application/json" \
  -d "{\"roomId\":1,\"tones\":[12],\"playTo\":[{\"type\":\"channel\",\"value\":101}]}"
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
{
  "roomId": 1,
  "played": true
}
```
