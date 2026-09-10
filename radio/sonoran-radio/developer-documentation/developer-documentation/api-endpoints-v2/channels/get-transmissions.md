---
description: Page through recent transmission logs for a specific Sonoran Radio community.
---

# Get Transmissions

## Get Transmissions

<mark style="color:green;">`GET`</mark> `/v2/servers/:communityId/transmissions`

> **Rate limit:** `12 requests per minute`

Returns paginated recent transmission log rows for the selected community.

**Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Authorization | `Bearer <community-api-key>` |

**URL Parameters**

| Name          | Type   | Description                |
| ------------- | ------ | -------------------------- |
| `communityId` | string | Sonoran Radio community ID |

**Query Parameters**

| Name      | Type    | Description                                 |
| --------- | ------- | ------------------------------------------- |
| `page`    | integer | 1-based page number. Defaults to `1`.       |
| `perPage` | integer | Page size. Defaults to `25`, maximum `100`. |

**Examples**

{% tabs %}
{% tab title="Sonoran.lua" %}
```lua
local response = client.radio:getTransmissionsV2({
  page = 1,
  perPage = 25
}, "YOUR_COMMUNITY_ID")
```
{% endtab %}

{% tab title="Sonoran.js" %}
```javascript
const response = await instance.radio?.getTransmissionsV2({
  page: 1,
  perPage: 25
}, 'YOUR_COMMUNITY_ID');
```
{% endtab %}

{% tab title="Sonoran.py" %}
```python
response = instance.radio.getTransmissionsV2({
    "page": 1,
    "perPage": 25,
}, "YOUR_COMMUNITY_ID")
```
{% endtab %}

{% tab title="Sonoran.Net" %}
```csharp
var response = await sonoran.Radio.getTransmissionsV2(new GetTransmissionsV2Query
{
    Page = 1,
    PerPage = 25
});
```
{% endtab %}

{% tab title="OpenAPI" %}
```yaml
openapi: 3.0.3
info:
  title: Sonoran Radio API v2
  version: "1.0"
servers:
  - url: https://api.sonoranradio.com
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
paths:
  /v2/servers/{communityId}/transmissions:
    get:
      summary: Get paginated transmission logs
      parameters:
        - in: path
          name: communityId
          required: true
          schema:
            type: string
            example: YOUR_COMMUNITY_ID
        - in: query
          name: page
          schema:
            type: integer
            example: 1
        - in: query
          name: perPage
          schema:
            type: integer
            example: 25
      security:
        - bearerAuth: []
      responses:
        "200":
          description: Paginated transmission logs response
        "401":
          description: Missing or invalid bearer token
        "404":
          description: Community not found for this API key
```
{% endtab %}

{% tab title="cURL" %}
```bash
curl -G "https://api.sonoranradio.com/v2/servers/YOUR_COMMUNITY_ID/transmissions" \
  -H "Authorization: Bearer your-community-api-key" \
  --data-urlencode "page=1" \
  --data-urlencode "perPage=25"
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`.

```json
{
  "transmissions": [
    {
      "id": "184927",
      "serverId": 12345,
      "account": "91de0ce8-c571-11e9-9714-5600023b2434",
      "channelId": 7,
      "time": "2026-06-18T18:42:31.000Z",
      "audioUrl": "https://cdn.example.com/transmissions/12345/2026-06-18_184231_audio.mp3",
      "transcript": "Unit 12, show me en route."
    }
  ],
  "pagination": {
    "page": 1,
    "perPage": 25,
    "total": 143,
    "totalPages": 6
  }
}
```
