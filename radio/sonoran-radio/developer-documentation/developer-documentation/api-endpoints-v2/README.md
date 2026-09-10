---
description: >-
  Sonoran Radio v2 API endpoints with bearer auth, community-scoped URLs, and
  documented per-endpoint rate limits.
---

# API Endpoints v2

Sonoran Radio v2 moves authentication to the `Authorization` header and scopes community-specific requests with `communityId` in the URL for `/v2/servers/{communityId}/...` routes.

## Available v2 Docs

### Libraries

Use the official Sonoran SDK libraries if you want package-managed helpers for the v2 API.

{% content-ref url="libraries.md" %}
[libraries.md](libraries.md)
{% endcontent-ref %}

### Authentication

Start here for bearer authentication, required headers, server-scoped routing, and common error formats.

{% content-ref url="authentication.md" %}
[authentication.md](authentication.md)
{% endcontent-ref %}

### Users

User endpoints cover connected users, member approval, moderation, permissions, and channel assignment.

{% content-ref url="users/" %}
[users](users/)
{% endcontent-ref %}

### Channels

Channel endpoints cover channel discovery and tone playback operations.

{% content-ref url="channels/" %}
[channels](channels/)
{% endcontent-ref %}

### Community Server

Community server endpoints cover server IP registration, subscription lookup, in-game speaker locations, and backend-authoritative room zones.

{% content-ref url="community-server/" %}
[community-server](community-server/)
{% endcontent-ref %}

## Response Formats

### Successful Requests

Successful responses return `application/json`.

### Failed Requests

Authenticated v2 request failures return `application/problem+json`.

Example:

```json
{
  "type": "https://httpstatuses.com/401",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Missing Authorization header.",
  "instance": "/v2/servers/YOUR_COMMUNITY_ID/channels",
  "traceId": "00-abc123..."
}
```

## Common Errors

| Status | Cause                                                       |
| ------ | ----------------------------------------------------------- |
| `400`  | Validation failed for one or more request values            |
| `401`  | Missing or invalid bearer token                             |
| `404`  | `communityId` is not available to the authenticated API key |
| `404`  | Requested room, member, or participant was not found        |
| `429`  | Rate limit exceeded for the endpoint                        |

## Rate Limits

All authenticated v2 endpoints are rate limited per API key, not per caller IP. Limits vary by endpoint, so each endpoint page includes the published limit for that route.

When a request is rate limited, the gateway returns `429 Too Many Requests`.

High-frequency integrations should respect the published per-endpoint limits even if a small internal buffer exists.

## Full OpenAPI Collection

<details>

<summary>OpenAPI v2 Collection (Postman Import)</summary>

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
  schemas:
    RadioZone:
      description: A polygon or circle GEO/degradation zone with an options object.
      allOf:
        - type: object
          required: [options]
          properties:
            options:
              type: object
        - oneOf:
            - type: object
              required: [points]
              properties:
                points:
                  type: array
                  minItems: 3
                  items:
                    type: object
                    required: [x, y]
                    properties:
                      x: { type: number }
                      y: { type: number }
            - type: object
              required: [center, radius]
              properties:
                center:
                  type: object
                  required: [x, y]
                  properties:
                    x: { type: number }
                    y: { type: number }
                radius: { type: number, exclusiveMinimum: 0 }
paths:
  /v2/server-subscriptions/by-ip:
    get:
      summary: Get server subscription from IP
      responses:
        "200":
          description: Subscription response
  /v2/servers/{communityId}/channels:
    get:
      summary: Get community channels
      security:
        - bearerAuth: []
      parameters:
        - in: path
          name: communityId
          required: true
          schema:
            type: string
            example: YOUR_COMMUNITY_ID
      responses:
        "200":
          description: Channels response
  /v2/servers/{communityId}/transmissions:
    get:
      summary: Get paginated transmission logs
      security:
        - bearerAuth: []
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
      responses:
        "200":
          description: Paginated transmission logs response
  /v2/servers/{communityId}/connected-users:
    get:
      summary: Get connected users
      security:
        - bearerAuth: []
      parameters:
        - in: path
          name: communityId
          required: true
          schema:
            type: string
            example: YOUR_COMMUNITY_ID
      responses:
        "200":
          description: Connected users response
  /v2/servers/{communityId}/members:
    get:
      summary: Get paginated community members
      security:
        - bearerAuth: []
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
        - in: query
          name: status
          schema:
            type: string
            enum: [pending, approved, banned]
        - in: query
          name: sortBy
          schema:
            type: string
            enum: [username, displayName, approved, pending, permission, banned, accId]
        - in: query
          name: descending
          schema:
            type: boolean
            example: false
        - in: query
          name: search
          schema:
            type: string
            example: dispatch
      responses:
        "200":
          description: Paginated members response
  /v2/servers/{communityId}/rooms/{roomId}/users/{identity}:
    get:
      summary: Get connected user
      security:
        - bearerAuth: []
      parameters:
        - in: path
          name: communityId
          required: true
          schema:
            type: string
            example: YOUR_COMMUNITY_ID
        - in: path
          name: roomId
          required: true
          schema:
            type: integer
            example: 1
        - in: path
          name: identity
          required: true
          schema:
            type: string
            example: 91de0ce8-c571-11e9-9714-5600023b2434
      responses:
        "200":
          description: Connected user response
  /v2/servers/{communityId}/rooms/{roomId}/users/{identity}/channels:
    patch:
      summary: Set user channels
      security:
        - bearerAuth: []
      parameters:
        - in: path
          name: communityId
          required: true
          schema:
            type: string
            example: YOUR_COMMUNITY_ID
        - in: path
          name: roomId
          required: true
          schema:
            type: integer
            example: 1
        - in: path
          name: identity
          required: true
          schema:
            type: string
            example: 91de0ce8-c571-11e9-9714-5600023b2434
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                transmit:
                  type: array
                  items:
                    type: integer
                scan:
                  type: array
                  items:
                    type: integer
            example:
              transmit: [101]
              scan: [101, 102, 103]
      responses:
        "200":
          description: User channels updated
  /v2/servers/{communityId}/users/display-name:
    patch:
      summary: Set user display name
      security:
        - bearerAuth: []
      parameters:
        - in: path
          name: communityId
          required: true
          schema:
            type: string
            example: YOUR_COMMUNITY_ID
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [accId, displayName]
              properties:
                accId:
                  type: string
                displayName:
                  type: string
            example:
              accId: 91de0ce8-c571-11e9-9714-5600023b2434
              displayName: Dispatch 101
      responses:
        "200":
          description: Display name updated
  /v2/servers/{communityId}/members/approve:
    post:
      summary: Approve members
      security:
        - bearerAuth: []
      parameters:
        - in: path
          name: communityId
          required: true
          schema:
            type: string
            example: YOUR_COMMUNITY_ID
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [accIds]
              properties:
                accIds:
                  type: array
                  items:
                    type: string
            example:
              accIds:
                - 91de0ce8-c571-11e9-9714-5600023b2434
      responses:
        "200":
          description: Members approved
  /v2/servers/{communityId}/members/kick:
    post:
      summary: Kick members
      security:
        - bearerAuth: []
      parameters:
        - in: path
          name: communityId
          required: true
          schema:
            type: string
            example: YOUR_COMMUNITY_ID
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [accIds]
              properties:
                accIds:
                  type: array
                  items:
                    type: string
            example:
              accIds:
                - 91de0ce8-c571-11e9-9714-5600023b2434
      responses:
        "200":
          description: Members kicked
  /v2/servers/{communityId}/members/ban:
    post:
      summary: Ban members
      security:
        - bearerAuth: []
      parameters:
        - in: path
          name: communityId
          required: true
          schema:
            type: string
            example: YOUR_COMMUNITY_ID
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [accIds]
              properties:
                accIds:
                  type: array
                  items:
                    type: string
            example:
              accIds:
                - 91de0ce8-c571-11e9-9714-5600023b2434
      responses:
        "200":
          description: Members banned
  /v2/servers/{communityId}/members/display-names:
    patch:
      summary: Set member display names
      security:
        - bearerAuth: []
      parameters:
        - in: path
          name: communityId
          required: true
          schema:
            type: string
            example: YOUR_COMMUNITY_ID
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [accNicknames]
              properties:
                accNicknames:
                  type: array
                  items:
                    type: object
                    properties:
                      accId:
                        type: string
                      nickname:
                        type: string
            example:
              accNicknames:
                - accId: 91de0ce8-c571-11e9-9714-5600023b2434
                  nickname: Dispatch 101
      responses:
        "200":
          description: Member display names updated
  /v2/servers/{communityId}/members/permissions:
    patch:
      summary: Set member permissions
      security:
        - bearerAuth: []
      parameters:
        - in: path
          name: communityId
          required: true
          schema:
            type: string
            example: YOUR_COMMUNITY_ID
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [userPerms]
              properties:
                userPerms:
                  type: array
                  items:
                    type: object
                    properties:
                      accId:
                        type: string
                      perm:
                        type: integer
                      profilePerms:
                        type: array
                        items:
                          type: object
                          properties:
                            profileId:
                              type: integer
                            canJoin:
                              type: boolean
            example:
              userPerms:
                - accId: 91de0ce8-c571-11e9-9714-5600023b2434
                  perm: 34
                  profilePerms:
                    - profileId: 12
                      canJoin: true
      responses:
        "200":
          description: Member permissions updated
  /v2/servers/{communityId}/server-ip:
    post:
      summary: Set server IP
      security:
        - bearerAuth: []
      parameters:
        - in: path
          name: communityId
          required: true
          schema:
            type: string
            example: YOUR_COMMUNITY_ID
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [roomId, serverPort]
              properties:
                roomId:
                  type: integer
                serverPort:
                  type: integer
                overridePushUrl:
                  type: string
                pushUrl:
                  type: string
                nickname:
                  type: string
            example:
              roomId: 1
              serverPort: 30120
              pushUrl: http://127.0.0.1:30120/sonoranradio
              nickname: Patrol
      responses:
        "200":
          description: Server IP updated
  /v2/servers/{communityId}/speakers:
    put:
      summary: Set in-game speaker locations
      security:
        - bearerAuth: []
      parameters:
        - in: path
          name: communityId
          required: true
          schema:
            type: string
            example: YOUR_COMMUNITY_ID
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [locations]
              properties:
                locations:
                  type: array
                  items:
                    type: object
            example:
              locations:
                - label: Station 1
                  id: station-1
      responses:
        "200":
          description: Speaker locations updated
  /v2/servers/{communityId}/rooms/{roomId}/zones:
    get:
      summary: Get canonical room GEO and degradation zones
      security:
        - bearerAuth: []
      parameters:
        - in: path
          name: communityId
          required: true
          schema:
            type: string
            example: YOUR_COMMUNITY_ID
        - in: path
          name: roomId
          required: true
          schema:
            type: integer
            example: 1
      responses:
        "200":
          description: Canonical room zone snapshot
  /v2/servers/{communityId}/rooms/{roomId}/zones/{zoneType}:
    post:
      summary: Create or replace a GEO or degradation zone by name
      security:
        - bearerAuth: []
      parameters:
        - in: path
          name: communityId
          required: true
          schema:
            type: string
            example: YOUR_COMMUNITY_ID
        - in: path
          name: roomId
          required: true
          schema:
            type: integer
            example: 1
        - in: path
          name: zoneType
          required: true
          schema:
            type: string
            enum: [geo, degrade]
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [zone]
              properties:
                zone:
                  $ref: "#/components/schemas/RadioZone"
      responses:
        "201":
          description: Canonical room zone snapshot
  /v2/servers/{communityId}/rooms/{roomId}/zones/{zoneType}/{zoneName}:
    patch:
      summary: Replace an existing GEO or degradation zone
      security:
        - bearerAuth: []
      parameters:
        - in: path
          name: communityId
          required: true
          schema:
            type: string
            example: YOUR_COMMUNITY_ID
        - in: path
          name: roomId
          required: true
          schema:
            type: integer
            example: 1
        - in: path
          name: zoneType
          required: true
          schema:
            type: string
            enum: [geo, degrade]
        - in: path
          name: zoneName
          required: true
          schema:
            type: string
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [zone]
              properties:
                zone:
                  $ref: "#/components/schemas/RadioZone"
      responses:
        "200":
          description: Canonical room zone snapshot
    delete:
      summary: Delete an existing GEO or degradation zone
      security:
        - bearerAuth: []
      parameters:
        - in: path
          name: communityId
          required: true
          schema:
            type: string
            example: YOUR_COMMUNITY_ID
        - in: path
          name: roomId
          required: true
          schema:
            type: integer
            example: 1
        - in: path
          name: zoneType
          required: true
          schema:
            type: string
            enum: [geo, degrade]
        - in: path
          name: zoneName
          required: true
          schema:
            type: string
      responses:
        "200":
          description: Canonical room zone snapshot
  /v2/servers/{communityId}/tones/play:
    post:
      summary: Play tone
      security:
        - bearerAuth: []
      parameters:
        - in: path
          name: communityId
          required: true
          schema:
            type: string
            example: YOUR_COMMUNITY_ID
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [roomId, tones, playTo]
              properties:
                roomId:
                  type: integer
                tones:
                  type: array
                  items: {}
                playTo:
                  type: array
                  items:
                    type: object
            example:
              roomId: 1
              tones: [12]
              playTo:
                - type: channel
                  value: 101
      responses:
        "200":
          description: Tone played
```

</details>
