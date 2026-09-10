---
description: Upload CAD FiveM debug output directly to an open support ticket.
---

# Upload Debug

## Upload Debug

<mark style="color:green;">`POST`</mark> `https://api.sonoransoftware.com/v2/upload/debug/{ticketId}`

This endpoint allows a CAD FiveM integration to upload debug output directly into an existing support ticket.

The `ticketId` path parameter must be the short support ticket ID, not the ticket UUID.

Debug uploads are only accepted after a support team member has enabled debug uploads for that ticket.

#### Request Body

Send the request body as plain text. The body should contain the raw debug output you want attached to the ticket.

{% tabs %}
{% tab title="OpenAPI" %}
```yaml
openapi: 3.0.3
info:
  title: Sonoran Support API
  version: "1.0"
paths:
  /v2/upload/debug/{ticketId}:
    post:
      summary: Upload CAD debug output to a support ticket
      parameters:
        - in: path
          name: ticketId
          required: true
          schema:
            type: integer
          description: Short support ticket ID
      requestBody:
        required: true
        content:
          text/plain:
            schema:
              type: string
            example: |
              [sonorancad] Debug session started
              [sonorancad] Player cache refreshed
              [sonorancad] Completed sync in 42ms
      responses:
        "200":
          description: Debug uploaded successfully
        "400":
          description: Empty body or invalid non-CAD ticket
        "403":
          description: Debug upload is not enabled for this ticket
        "404":
          description: Ticket not found
```
{% endtab %}

{% tab title="cURL" %}
```bash
curl -X POST "https://api.sonoransoftware.com/v2/upload/debug/12345" \
  -H "Content-Type: text/plain" \
  --data-binary @debug.txt
```
{% endtab %}
{% endtabs %}

### Response Body

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```json
{
  "success": true,
  "ticketId": 12345
}
```
{% endtab %}

{% tab title="403 Debug upload is not enabled for this ticket:" %}
```json
{
  "success": false,
  "error": "Debug upload is not enabled for this ticket."
}
```
{% endtab %}

{% tab title="404 Ticket not found:" %}
```json
{
  "success": false,
  "error": "Ticket not found."
}
```
{% endtab %}
{% endtabs %}
