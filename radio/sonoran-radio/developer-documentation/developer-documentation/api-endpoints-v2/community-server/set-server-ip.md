---
description: >-
  Set or update a server room IP and push URL for a specific Sonoran Radio
  server.
---

# Set Server IP

## Set Server IP

<mark style="color:green;">`POST`</mark> `/v2/servers/:communityId/server-ip`

> **Rate limit:** `2 requests per minute`

Adds or updates a room origin and push URL for the selected server.

**Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Authorization | `Bearer <community-api-key>` |
| Content-Type  | `application/json`           |

**Examples**

{% tabs %}
{% tab title="Sonoran.lua" %}
```lua
local response = client.radio:setServerIpV2({
  communityId = "YOUR_COMMUNITY_ID",
  roomId = 1,
  serverPort = 30120,
  pushUrl = "http://127.0.0.1:30120/sonoranradio",
  nickname = "Patrol"
})
```
{% endtab %}

{% tab title="Sonoran.js" %}
```javascript
const response = await instance.radio?.setServerIpV2({
  communityId: "YOUR_COMMUNITY_ID",
  roomId: 1,
  serverPort: 30120,
  pushUrl: "http://127.0.0.1:30120/sonoranradio",
  nickname: "Patrol"
});
```
{% endtab %}

{% tab title="Sonoran.py" %}
```python
response = instance.radio.setServerIpV2({
    "communityId": "YOUR_COMMUNITY_ID",
    "roomId": 1,
    "serverPort": 30120,
    "pushUrl": "http://127.0.0.1:30120/sonoranradio",
    "nickname": "Patrol",
})
```
{% endtab %}

{% tab title="Sonoran.Net" %}
```csharp
var response = await sonoran.Radio.setServerIpV2(new SetServerIpV2Request
{
    ServerPort = 30120,
    PushUrl = "http://127.0.0.1:30120/sonoranradio",
    Nickname = "Patrol"
});
```
{% endtab %}

{% tab title="OpenAPI" %}
```yaml
openapi: 3.1.0
paths:
  /v2/servers/{communityId}/server-ip:
    post:
      security:
        - bearerAuth: []
```
{% endtab %}

{% tab title="cURL" %}
```bash
curl -X POST "https://api.sonoranradio.com/v2/servers/YOUR_COMMUNITY_ID/server-ip" \
  -H "Authorization: Bearer your-community-api-key" \
  -H "Content-Type: application/json" \
  -d "{\"roomId\":1,\"serverPort\":30120,\"pushUrl\":\"http://127.0.0.1:30120/sonoranradio\",\"nickname\":\"Patrol\"}"
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
{
  "roomId": 1,
  "pushUrl": "http://127.0.0.1:30120/sonoranradio"
}
```
