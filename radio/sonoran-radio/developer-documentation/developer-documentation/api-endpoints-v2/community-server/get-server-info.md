---
description: Retrieve the authenticated Radio community identity and its current logo URL.
---

# Get Server Info

<mark style="color:green;">`GET`</mark> `https://api.sonoranradio.com/v2/servers/:communityId/info`

> **Rate limit:** `10 requests per minute` per API key.

The `communityId` path value is the short Radio community ID. The bearer API key
must belong to that community. The response includes the currently stored
`logoUrl`, which may use an older Radio image path until that logo is migrated.
Once migrated, its URL is
`https://s3.sonoranradio.com/com/{communityUuid}/logo.png`.

## Example Request

{% tabs %}
{% tab title="cURL" %}
```bash
curl --request GET \
  --url "https://api.sonoranradio.com/v2/servers/YOUR_COMMUNITY_ID/info" \
  --header "Authorization: Bearer YOUR_COMMUNITY_API_KEY" \
  --header "Accept: application/json"
```
{% endtab %}
{% tab title="OpenAPI" %}
```yaml
openapi: 3.1.0
info:
  title: Sonoran Radio v2 - Get Server Info
  version: 1.0.0
servers:
  - url: https://api.sonoranradio.com
paths:
  /v2/servers/{communityId}/info:
    get:
      summary: Get the authenticated community identity
      security:
        - bearerAuth: []
      parameters:
        - in: path
          name: communityId
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Community identity
          content:
            application/json:
              schema:
                type: object
                required: [communityUuid, communityId, logoUrl]
                properties:
                  communityUuid:
                    type: string
                    format: uuid
                  communityId:
                    type: string
                  logoUrl:
                    type: [string, 'null']
                    format: uri
        '401':
          description: Missing or invalid bearer key
        '404':
          description: Community does not exist or is not accessible with this key
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return `application/json`:

```json
{
  "communityUuid": "aaaaaaaa-bbbb-4ccc-8ddd-eeeeeeeeeeee",
  "communityId": "EXAMPLERADIO",
  "logoUrl": "https://s3.sonoranradio.com/42/community/comImage/image_example.png"
}
```

`logoUrl` is `null` when no community logo is configured.

Missing or invalid credentials return `401`. An API key for another community
returns `404` without revealing that community's UUID.
