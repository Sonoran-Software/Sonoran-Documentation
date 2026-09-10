---
description: >-
  Set in-game speaker locations for tone playback on a specific Sonoran Radio
  server.
---

# Set In-Game Speaker Locations

## Set In-Game Speaker Locations

<mark style="color:yellow;">`PUT`</mark> `/v2/servers/:communityId/speakers`

> **Rate limit:** `2 requests per minute`

Stores the in-game speaker list used by tone playback targets.

**Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Authorization | `Bearer <community-api-key>` |
| Content-Type  | `application/json`           |

**Examples**

{% tabs %}
{% tab title="Sonoran.lua" %}
```lua
local response = client.radio:setInGameSpeakerLocationsV2({
  {
    label = "Fire Station 123",
    id = "STATION_123"
  }
}, 1)
```
{% endtab %}

{% tab title="Sonoran.js" %}
```javascript
const response = await instance.radio?.setInGameSpeakerLocationsV2([
  {
    label: "Fire Station 123",
    id: "STATION_123"
  }
], 1);
```
{% endtab %}

{% tab title="Sonoran.py" %}
```python
response = instance.radio.setInGameSpeakerLocationsV2([
    {
        "label": "Fire Station 123",
        "id": "STATION_123",
    }
], 1)
```
{% endtab %}

{% tab title="Sonoran.Net" %}
```csharp
var response = await sonoran.Radio.setInGameSpeakerLocationsV2(new object?[]
{
    new { label = "Fire Station 123", id = "STATION_123" }
});
```
{% endtab %}

{% tab title="OpenAPI" %}
```yaml
openapi: 3.1.0
paths:
  /v2/servers/{communityId}/speakers:
    put:
      security:
        - bearerAuth: []
```
{% endtab %}

{% tab title="cURL" %}
```bash
curl -X PUT "https://api.sonoranradio.com/v2/servers/YOUR_COMMUNITY_ID/speakers" \
  -H "Authorization: Bearer your-community-api-key" \
  -H "Content-Type: application/json" \
  -d "{\"locations\":[{\"label\":\"Fire Station 123\",\"id\":\"STATION_123\"}]}"
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
{
  "locationsCount": 1
}
```
