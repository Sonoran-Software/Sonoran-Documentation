---
description: View Sonoran CAD's v2 API endpoints and authentication flow.
---

# v2 API Endpoints

The Sonoran CAD v2 API is a versioned API surface built around resource-style routes, standard HTTP methods, bearer authentication, and structured error responses.

## Available v2 Docs

### Libraries

Use the official Sonoran SDK libraries if you want package-managed helpers for the v2 API.

{% content-ref url="libraries.md" %}
[libraries.md](libraries.md)
{% endcontent-ref %}

### Authentication

Start here for bearer authentication, required headers, and common error formats.

{% content-ref url="authentication.md" %}
[authentication.md](authentication.md)
{% endcontent-ref %}

### Emergency

Emergency endpoints are grouped by feature area for units, identifiers, calls, map items, and configuration.

{% content-ref url="emergency/" %}
[emergency](emergency/)
{% endcontent-ref %}

### Civilian

Civilian endpoints cover character retrieval, character selection, linked sync-character IDs, and character removal.

{% content-ref url="civilian/" %}
[civilian](civilian/)
{% endcontent-ref %}

### Integration Panels

Integration Panels let third-party systems define interactive CAD UI, publish live state, and process CAD user actions.

{% content-ref url="integration-panels/" %}
[integration-panels](integration-panels/)
{% endcontent-ref %}

### General

General endpoints cover account management, custom records, lookup workflows, and community-level configuration.

{% content-ref url="general/" %}
[general](general/)
{% endcontent-ref %}



<!-- BEGIN GENERATED V2 OPENAPI -->
## Full OpenAPI Collection

Use this combined OpenAPI document if you want to import the full Sonoran CAD v2 API into Postman in one pass.

This generated collection currently includes `87` documented v2 operations.

<details>
<summary>Copy the full OpenAPI YAML</summary>

```yaml
openapi: 3.0.3
info:
  title: Sonoran CAD v2 API
  version: 1.0.0
  description: Combined OpenAPI import for all documented Sonoran CAD v2 endpoints.
servers:
- url: https://api.sonorancad.com
paths:
  /v2/civilian/character-links/{syncId}:
    put:
      summary: Add Character Link
      operationId: addCharacterLink
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                accountUuid: 00000000-0000-0000-0000-000000000000
                syncId: citizen:1234
                action: ADD
      parameters:
      - description: Database Sync character identifier.
        name: syncId
        in: path
        schema:
          type: string
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              communityUserId: player-1234
              discord: '123456789012345678'
      tags:
      - Civilian
    delete:
      summary: Remove Character Link
      operationId: removeCharacterLink
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                accountUuid: 00000000-0000-0000-0000-000000000000
                syncId: citizen:1234
                action: REMOVE
      parameters:
      - description: Database Sync character identifier.
        name: syncId
        in: path
        schema:
          type: string
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              communityUserId: player-1234
              discord: '123456789012345678'
      tags:
      - Civilian
  /v2/civilian/characters/{characterId}:
    delete:
      summary: Delete Character
      operationId: deleteCharacter
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                characterId: 2451
      parameters:
      - description: Character record ID.
        name: characterId
        in: path
        schema:
          type: integer
        required: true
      security:
      - bearerAuth: []
      tags:
      - Civilian
  /v2/civilian/character-links:
    get:
      summary: Get Character Links
      operationId: getCharacterLinks
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
              example:
              - citizen:1234
              - citizen:5678
      parameters:
      - description: Default target option for the in-game community user ID. Provide
          exactly one identifier.
        name: communityUserId
        in: query
        schema:
          type: string
        required: false
      - description: Target the account linked to a Roblox user ID. Provide exactly
          one identifier.
        name: roblox
        in: query
        schema:
          type: integer
        required: false
      - description: Target the account linked to a Discord user ID. Provide exactly
          one identifier.
        name: discord
        in: query
        schema:
          type: string
        required: false
      - description: Target account UUID. Provide exactly one identifier.
        name: accountUuid
        in: query
        schema:
          type: string
        required: false
      security:
      - bearerAuth: []
      tags:
      - Civilian
  /v2/civilian/characters:
    get:
      summary: Get Characters
      operationId: getCharacters
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                recordTypeId: 7
                id: 2451
                syncId: citizen:1234
                name: John Doe
                type: 7
                sections:
                  category: 0
                  label: Civilian Info
                  fields:
                    label: First Name
                    value: John
                    uid: first_name
      parameters:
      - description: Default target option for the in-game community user ID. Provide
          exactly one identifier.
        name: communityUserId
        in: query
        schema:
          type: string
        required: false
      - description: Target the account linked to a Roblox user ID. Provide exactly
          one identifier.
        name: roblox
        in: query
        schema:
          type: integer
        required: false
      - description: Target the account linked to a Discord user ID. Provide exactly
          one identifier.
        name: discord
        in: query
        schema:
          type: string
        required: false
      - description: Target account UUID. Provide exactly one identifier.
        name: accountUuid
        in: query
        schema:
          type: string
        required: false
      security:
      - bearerAuth: []
      tags:
      - Civilian
  /v2/civilian/selected-character:
    put:
      summary: Set Selected Character
      operationId: setSelectedCharacter
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                accountUuid: 00000000-0000-0000-0000-000000000000
                characterId: citizen:1234
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              communityUserId: player-1234
              discord: '123456789012345678'
              characterId: '1042'
      tags:
      - Civilian
  /v2/emergency/servers/{serverId}/dispatch-calls/{callId}/notes:
    post:
      summary: Add Call Note
      operationId: addCallNote
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                callId: 501
                note: Caller is hiding.
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      - description: Dispatch or 911 call ID.
        name: callId
        in: path
        schema:
          type: integer
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              note: Suspect vehicle fleeing northbound
              noteType: text
              label: Integration
      tags:
      - Emergency / Calls
  /v2/emergency/servers/{serverId}/dispatch-calls/{callId}/attachments:
    post:
      summary: Attach Units
      operationId: attachUnits
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                callId: 501
                identIds:
                - 12
                - 18
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      - description: Dispatch or 911 call ID.
        name: callId
        in: path
        schema:
          type: integer
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              communityUserIds: player-1234
      tags:
      - Emergency / Calls
  /v2/emergency/servers/{serverId}/dispatch-calls/close:
    post:
      summary: Close Dispatch Calls
      operationId: closeDispatchCalls
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                callIds:
                - 501
                - 502
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              callIds:
              - 1042
              - 1043
      tags:
      - Emergency / Calls
  /v2/emergency/servers/{serverId}/calls/911:
    post:
      summary: Create 911 Call
      operationId: create911Call
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                callId: 302
                isEmergency: true
                caller: Jane Doe
                location: Innocence Blvd
                description: Medical emergency reported.
                metaData:
                  phone: 555-0100
                  x: '425.1'
                  y: '-979.2'
                  z: '30.7'
                  postal: '9001'
                updated: '2026-04-08T21:31:00Z'
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              isEmergency: true
              caller: 911 Caller
              location: Alta St / Integrity Way
              description: Shots fired
              deleteAfterMinutes: 15
              metaData:
                source: integration
                x: '425.1'
                y: '-979.2'
                z: '30.7'
                postal: '9001'
      tags:
      - Emergency / Calls
  /v2/emergency/servers/{serverId}/custom-dispatch-calls:
    post:
      operationId: createCustomDispatchCall
      security:
      - bearerAuth: []
      parameters:
      - name: serverId
        in: path
        required: true
        schema:
          type: integer
          minimum: 1
          example: 1
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
              - templateId
              - values
              properties:
                templateId:
                  type: integer
                  minimum: 1
                values:
                  type: object
                  additionalProperties: true
                identIds:
                  type: array
                  items:
                    type: integer
                accountUuid:
                  type: string
                  format: uuid
                accounts:
                  type: array
                  items:
                    type: string
                    format: uuid
                communityUserId:
                  type: string
                communityUserIds:
                  type: array
                  items:
                    type: string
                roblox:
                  type: string
                discord:
                  type: string
                notes:
                  type: array
                  items:
                    type: object
                metaData:
                  type: object
                  additionalProperties:
                    type: string
                deleteAfterMinutes:
                  type: integer
                  minimum: 0
            example:
              templateId: 1
              values:
                status: deployed
                priority: Immediate
                description: Reports of a disturbance outside the station.
                code: GRADE_1
                caller_name: Alex Smith
              communityUserIds:
              - player-1234
      responses:
        '201':
          description: Custom dispatch call created
        '400':
          description: Template values or required fields are invalid
        '404':
          description: Template or unit target not found
      tags:
      - Emergency / Calls
  /v2/emergency/servers/{serverId}/dispatch-calls:
    post:
      summary: Create Dispatch Call
      operationId: createDispatchCall
      responses:
        '201':
          description: Dispatch call created
          content:
            application/json:
              schema:
                type: object
              example:
                callId: 501
                origin: 0
                status: 1
                priority: 1
                block: '100'
                address: Mission Row
                postal: '9001'
                title: Armed Robbery
                code: '211'
                primary: 12
                trackPrimary: false
                description: Clerk reports a firearm.
                notes:
                - time: '2026-04-08T21:30:00Z'
                  label: Sonoran CAD
                  type: text
                  content: Caller is hiding.
                idents:
                - 12
                - 18
                metaData:
                  source: integration
                  x: '425.1'
                  y: '-979.2'
                  z: '30.7'
                  radius: '75'
                updated: '2026-04-08T21:30:00Z'
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              origin: 0
              status: 1
              priority: 1
              block: '100'
              address: Mission Row
              postal: '9001'
              title: Armed Robbery
              code: '211'
              description: Clerk reports a firearm.
              notes: []
              communityUserIds:
              - player-1234
              metaData:
                source: integration
                x: '425.1'
                y: '-979.2'
                z: '30.7'
                radius: '75'
      tags:
      - Emergency / Calls
  /v2/emergency/servers/{serverId}/dispatch-calls/attachments:
    delete:
      summary: Detach Units
      operationId: detachUnits
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                identIds:
                - 12
                - 18
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              communityUserIds: player-1234
      tags:
      - Emergency / Calls
  /v2/emergency/servers/{serverId}/calls:
    get:
      summary: Get Calls
      operationId: getCalls
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                ActiveCalls:
                  callId: 501
                  origin: 0
                  status: 1
                  priority: 1
                  block: '100'
                  address: Mission Row
                  postal: '9001'
                  title: Armed Robbery
                  code: '211'
                  primary: 12
                  trackPrimary: false
                  description: Clerk reports a firearm.
                  notes:
                    time: '2026-04-08T21:30:00Z'
                    label: Sonoran CAD
                    type: text
                    content: Caller is hiding.
                  idents:
                  - 12
                  - 18
                  metaData:
                    source: integration
                    x: '425.1'
                    y: '-979.2'
                    z: '30.7'
                    radius: '75'
                  updated: '2026-04-08T21:30:00Z'
                EmergencyCalls:
                  callId: 302
                  isEmergency: true
                  caller: Jane Doe
                  location: Innocence Blvd
                  description: Medical emergency reported.
                  metaData:
                    phone: 555-0100
                    x: '425.1'
                    y: '-979.2'
                    z: '30.7'
                    postal: '9001'
                  updated: '2026-04-08T21:31:00Z'
                ClosedCalls:
                  callId: 480
                  origin: 0
                  status: 2
                  priority: 1
                  block: '100'
                  address: Mission Row
                  postal: '9001'
                  title: Armed Robbery
                  code: '211'
                  primary: 12
                  trackPrimary: false
                  description: Clerk reports a firearm.
                  notes:
                    time: '2026-04-08T21:30:00Z'
                    label: Sonoran CAD
                    type: text
                    content: Caller is hiding.
                  idents:
                  - 12
                  - 18
                  metaData:
                    source: integration
                    x: '425.1'
                    y: '-979.2'
                    z: '30.7'
                    radius: '75'
                  updated: '2026-04-08T21:30:00Z'
                ClosedCallCount: 18
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      - description: Maximum number of closed dispatch calls returned.
        name: closedLimit
        in: query
        schema:
          type: integer
        required: true
      - description: Number of closed calls to skip.
        name: closedOffset
        in: query
        schema:
          type: integer
        required: true
      - description: Call table type filter. See `CALL_TABLE_TYPE` below.
        name: type
        in: query
        schema:
          type: integer
        required: true
      security:
      - bearerAuth: []
      tags:
      - Emergency / Calls
  /v2/emergency/accounts/{accountUuid}/current-call:
    get:
      summary: Get Current Call
      operationId: getCurrentCall
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                IdentId: 12
                CallId: 501
      parameters:
      - description: Sonoran CAD account UUID.
        name: accountUuid
        in: path
        schema:
          type: string
        required: true
      security:
      - bearerAuth: []
      tags:
      - Emergency / Calls
  /v2/emergency/dispatch-templates:
    get:
      operationId: getDispatchTemplates
      security:
      - bearerAuth: []
      responses:
        '200':
          description: Community dispatch templates
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/DispatchTemplate'
      tags:
      - Emergency / Calls
  /v2/emergency/dispatch-templates/{templateId}:
    get:
      operationId: getDispatchTemplate
      security:
      - bearerAuth: []
      parameters:
      - name: templateId
        in: path
        required: true
        schema:
          type: integer
          minimum: 1
      responses:
        '200':
          description: Dispatch template
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/DispatchTemplate'
        '404':
          description: Template not found
      tags:
      - Emergency / Calls
  /v2/emergency/servers/{serverId}/calls/911/{callId}:
    delete:
      summary: Remove 911 Call
      operationId: remove911Call
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                callId: 302
                serverId: 1
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      - description: Dispatch or 911 call ID.
        name: callId
        in: path
        schema:
          type: integer
        required: true
      security:
      - bearerAuth: []
      tags:
      - Emergency / Calls
  /v2/emergency/servers/{serverId}/dispatch-calls/{callId}/postal:
    patch:
      summary: Update Call Postal
      operationId: updateCallPostal
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                callId: 501
                postal: '9002'
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      - description: Dispatch or 911 call ID.
        name: callId
        in: path
        schema:
          type: integer
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              postal: '9001'
      tags:
      - Emergency / Calls
  /v2/emergency/servers/{serverId}/dispatch-calls/{callId}/primary:
    patch:
      summary: Update Call Primary
      operationId: updateCallPrimary
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                callId: 501
                identId: 12
                trackPrimary: true
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      - description: Dispatch or 911 call ID.
        name: callId
        in: path
        schema:
          type: integer
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              identId: 15
              trackPrimary: true
      tags:
      - Emergency / Calls
  /v2/emergency/servers/{serverId}/dispatch-calls/{callId}:
    patch:
      summary: Update Dispatch Call
      operationId: updateDispatchCall
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                callId: 501
                origin: 0
                status: 1
                priority: 1
                block: '100'
                address: Mission Row
                postal: '9002'
                title: Armed Robbery
                code: '211'
                primary: 12
                trackPrimary: false
                description: Clerk reports a firearm.
                notes:
                  time: '2026-04-08T21:30:00Z'
                  label: Sonoran CAD
                  type: text
                  content: Caller is hiding.
                idents:
                - 12
                - 18
                metaData:
                  source: integration
                  x: '430.5'
                  y: '-982.1'
                  z: '31.0'
                  radius: '100'
                updated: '2026-04-08T21:30:00Z'
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      - description: Dispatch or 911 call ID.
        name: callId
        in: path
        schema:
          type: integer
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              status: 1
              postal: '9002'
              trackPrimary: true
              metaData:
                source: integration
                x: '430.5'
                y: '-982.1'
                z: '31.0'
                radius: '100'
      tags:
      - Emergency / Calls
  /v2/emergency/servers/{serverId}/pager-config:
    get:
      summary: Get Pager Config
      operationId: getPagerConfig
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                natureWords:
                  Emergency: Emergency
                  NonEmergency: Non-Emergency
                  Administrative: Administrative
                maxAddresses: 5
                maxBodyLength: 250
                nodes: null
                perms:
                  roles: null
                  players: null
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      security:
      - bearerAuth: []
      tags:
      - Emergency / Configuration
    put:
      summary: Set Pager Config
      operationId: setPagerConfig
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                serverId: 1
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              natureWords:
                Emergency: Emergency
                NonEmergency: Non-Emergency
                Administrative: Administrative
              maxAddresses: 5
              maxBodyLength: 250
              nodes:
              - id: root-1
                name: Fire
                description: Fire services
                permission: fire
                address: FIRE-01
                shortCode: F1
                kind: group
                children: []
      tags:
      - Emergency / Configuration
  /v2/emergency/servers/{serverId}/callouts:
    put:
      summary: Set Callouts
      operationId: setCallouts
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                serverId: 1
                callouts: 1
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              callouts:
              - id: armed_suspect
                data:
                  PedActionOnNoActionFound: Flee
                  PedActionMinimumTimeoutInMs: 2000
                  PedChanceToFleeFromPlayer: 50
                  PedChanceToObtainWeapons: 30
                  CalloutName: Armed Suspect
                  CalloutDescriptions:
                  - Reports of an armed suspect in the area.
                  PedChanceToAttackPlayer: 20
                  PedActionMaximumTimeoutInMs: 10000
                  Enabled: true
                  CalloutLocations: []
                  PedChanceToSurrender: 30
                  PedWeaponData:
                  - WEAPON_PISTOL
                  CalloutUnitsRequired:
                    towRequired: false
                    fireRequired: false
                    description: Single suspect, use caution.
                    policeRequired: true
                    ambulanceRequired: false
      tags:
      - Emergency / Configuration
  /v2/emergency/servers/{serverId}/stations:
    put:
      summary: Set Stations
      operationId: setStations
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                serverId: 1
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              locations:
              - name: Mission Row
                coordinates:
                  x: 425.1
                  y: -979.2
                  z: 30.7
                  w: 0.0
                doors:
                - bay_1
                - bay_2
                icon: fas fa-building
              tones:
              - tone_station_open.mp3
              unitColors:
              - '#2563eb'
              - '#ef4444'
      tags:
      - Emergency / Configuration
  /v2/emergency/servers/{serverId}/street-sign-config:
    put:
      summary: Set Street Sign Config
      operationId: setStreetSignConfig
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                serverId: 1
                signs: 1
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              signs:
                id: 7
                coordinates:
                  x: 420.1
                  y: -980.4
                  z: 30.8
                  w: 0.0
                label: Mission Row
                text1: Mission Row
                text2: Integrity Way
                text3: ''
      tags:
      - Emergency / Configuration
  /v2/emergency/servers/{serverId}/street-signs:
    patch:
      summary: Update Street Signs
      operationId: updateStreetSigns
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                ids:
                - 7
                - 8
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              ids:
              - 1
              - 2
              text1: Mission Row
              text2: Alta St
              text3: Integrity Way
      tags:
      - Emergency / Configuration
  /v2/emergency/accounts/{accountUuid}/identifiers:
    post:
      summary: Create Identifier
      operationId: createIdentifier
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                identId: 42
      parameters:
      - description: Sonoran CAD account UUID.
        name: accountUuid
        in: path
        schema:
          type: string
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              status: 0
              aop: Los Santos
              unitNum: A-10
              name: John Doe
              district: Los Santos
              department: LSPD
              subdivision: Patrol
              rank: Officer
              group: CAR-51
              page: 0
              isDispatch: false
      tags:
      - Emergency / Identifiers
    get:
      summary: Get Identifiers
      operationId: getIdentifiers
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                SelectedIdent: 12
                Identifiers:
                  id: 12
                  accId: 00000000-0000-0000-0000-000000000000
                  status: 3
                  isPanic: false
                  location: Mission Row PD
                  coordinates:
                    x: 123.45
                    y: -456.78
                    z: 32.1
                    w: 180.0
                  aop: Los Santos
                  data:
                    unitNum: A-10
                    name: John Doe
                    district: Los Santos
                    department: LSPD
                    subdivision: Patrol
                    rank: Officer
                    group: CAR-51
                    page: 0
                  isDispatch: false
      parameters:
      - description: Sonoran CAD account UUID.
        name: accountUuid
        in: path
        schema:
          type: string
        required: true
      security:
      - bearerAuth: []
      tags:
      - Emergency / Identifiers
  /v2/emergency/accounts/{accountUuid}/identifiers/{identId}:
    delete:
      summary: Delete Identifier
      operationId: deleteIdentifier
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                identId: 12
                serverId: 1
      parameters:
      - description: Sonoran CAD account UUID.
        name: accountUuid
        in: path
        schema:
          type: string
        required: true
      - description: Identifier ID.
        name: identId
        in: path
        schema:
          type: integer
        required: true
      security:
      - bearerAuth: []
      tags:
      - Emergency / Identifiers
    patch:
      summary: Update Identifier
      operationId: updateIdentifier
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                identId: 12
                serverId: 1
                identifier:
                  id: 12
                  accId: 00000000-0000-0000-0000-000000000000
                  status: 3
                  isPanic: false
                  location: Mission Row PD
                  coordinates:
                    x: 123.45
                    y: -456.78
                    z: 32.1
                    w: 180.0
                  aop: Los Santos
                  data:
                    unitNum: A-10
                    name: John Doe
                    district: Los Santos
                    department: LSPD
                    subdivision: Patrol
                    rank: Officer
                    group: CAR-51
                    page: 0
                  isDispatch: false
      parameters:
      - description: Sonoran CAD account UUID.
        name: accountUuid
        in: path
        schema:
          type: string
        required: true
      - description: Identifier ID.
        name: identId
        in: path
        schema:
          type: integer
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              status: 2
              group: SUPERVISOR-1
              page: 3
      tags:
      - Emergency / Identifiers
  /v2/emergency/servers/{serverId}/identifier-groups/{groupName}:
    put:
      summary: Set Identifier Group
      operationId: setIdentifierGroup
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                ok: true
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      - description: Identifier group name.
        name: groupName
        in: path
        schema:
          type: string
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              communityUserIds: player-1234
      tags:
      - Emergency / Identifiers
  /v2/emergency/accounts/{accountUuid}/selected-identifier:
    put:
      summary: Set Selected Identifier
      operationId: setSelectedIdentifier
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                serverId: 1
                isDispatch: false
                identifier:
                  id: 12
                  accId: 00000000-0000-0000-0000-000000000000
                  status: 3
                  isPanic: false
                  location: Mission Row PD
                  coordinates:
                    x: 123.45
                    y: -456.78
                    z: 32.1
                    w: 180.0
                  aop: Los Santos
                  data:
                    unitNum: A-10
                    name: John Doe
                    district: Los Santos
                    department: LSPD
                    subdivision: Patrol
                    rank: Officer
                    group: CAR-51
                    page: 0
                  isDispatch: false
      parameters:
      - description: Sonoran CAD account UUID.
        name: accountUuid
        in: path
        schema:
          type: string
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              identId: 15
      tags:
      - Emergency / Identifiers
  /v2/emergency/servers/{serverId}/blips:
    post:
      summary: Create Blip
      operationId: createBlip
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                id: 32
                coordinates:
                  x: 425.5
                  y: -979.8
                  z: 0.0
                  w: 0.0
                subType: radius
                icon: fa-location-dot
                color: '#ff0000'
                tooltip: Perimeter
                data:
                - title: Assigned Unit
                  text: A-10
                radius: 100.0
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                data:
                  type: array
                  items:
                    type: object
                    properties:
                      title:
                        type: string
                      text:
                        type: string
                      panelKey:
                        type: string
                        pattern: ^[a-z0-9][a-z0-9._-]{1,79}$
                        description: Registered Integration Panel key. Renders the
                          panel instead of text.
                      instanceKey:
                        type: string
                        pattern: ^[a-z0-9][a-z0-9._-]{1,79}$
                        default: default
                        description: Exact instance on this server.
            example:
              coordinates:
                x: 441.2
                y: -981.9
                z: 0.0
                w: 0.0
              subType: scene
              icon: fa-solid fa-location-crosshairs
              color: red
              tooltip: Scene perimeter
              radius: 50.0
              data:
              - title: Units
                text: '2'
      tags:
      - Emergency / Map
    get:
      summary: Get Blips
      operationId: getBlips
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
              example:
              - id: 32
                coordinates:
                  x: 425.5
                  y: -979.8
                  z: 0.0
                  w: 0.0
                subType: radius
                icon: fa-location-dot
                color: '#ff0000'
                tooltip: Perimeter
                data:
                - title: Assigned Unit
                  text: A-10
                radius: 100.0
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      security:
      - bearerAuth: []
      tags:
      - Emergency / Map
  /v2/emergency/servers/{serverId}/blips/delete:
    post:
      summary: Delete Blips
      operationId: deleteBlips
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                ids:
                - 32
                - 33
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              ids:
              - 14
              - 15
      tags:
      - Emergency / Map
  /v2/emergency/servers/{serverId}/blips/{blipId}:
    patch:
      summary: Update Blip
      operationId: updateBlip
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                id: 32
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      - description: Blip ID.
        name: blipId
        in: path
        schema:
          type: integer
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                data:
                  type: array
                  description: Replaces all menu entries. An empty array clears the
                    menu.
                  items:
                    type: object
                    properties:
                      title:
                        type: string
                      text:
                        type: string
                      panelKey:
                        type: string
                        pattern: ^[a-z0-9][a-z0-9._-]{1,79}$
                        description: Registered Integration Panel key. Renders the
                          panel instead of text.
                      instanceKey:
                        type: string
                        pattern: ^[a-z0-9][a-z0-9._-]{1,79}$
                        default: default
                        description: Exact instance on this server.
            example:
              tooltip: Updated perimeter
              color: '#00a3ff'
              radius: 150
      tags:
      - Emergency / Map
  /v2/emergency/servers/{serverId}/accounts/{accountUuid}/units:
    get:
      summary: Get Account Units
      operationId: getAccountUnits
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                Units:
                  id: 12
                  accId: 00000000-0000-0000-0000-000000000000
                  status: 3
                  isPanic: false
                  location: Mission Row PD
                  coordinates:
                    x: 123.45
                    y: -456.78
                    z: 32.1
                    w: 180.0
                  aop: Los Santos
                  data:
                    unitNum: A-10
                    name: John Doe
                    district: Los Santos
                    department: LSPD
                    subdivision: Patrol
                    rank: Officer
                    group: CAR-51
                    page: 0
                  isDispatch: false
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      - description: Sonoran CAD account UUID.
        name: accountUuid
        in: path
        schema:
          type: string
        required: true
      - description: Only returns online identifiers for the target account.
        name: onlyOnline
        in: query
        schema:
          type: boolean
        required: true
      - description: When `true`, hides dispatcher identifiers.
        name: onlyUnits
        in: query
        schema:
          type: boolean
        required: true
      - description: Maximum number of rows returned.
        name: limit
        in: query
        schema:
          type: integer
        required: true
      - description: Number of rows to skip.
        name: offset
        in: query
        schema:
          type: integer
        required: true
      security:
      - bearerAuth: []
      tags:
      - Emergency / Units
  /v2/emergency/servers/{serverId}/units:
    get:
      summary: Get Active Units
      operationId: getActiveUnits
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                id: 12
                accId: 00000000-0000-0000-0000-000000000000
                status: 3
                isPanic: false
                location: Mission Row PD
                coordinates:
                  x: 123.45
                  y: -456.78
                  z: 32.1
                  w: 180.0
                aop: Los Santos
                data:
                  unitNum: A-10
                  name: John Doe
                  district: Los Santos
                  department: LSPD
                  subdivision: Patrol
                  rank: Officer
                  group: CAR-51
                  page: 0
                  communityUserId: license:abc123
                isDispatch: false
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      - description: Include offline identifiers in the response.
        name: includeOffline
        in: query
        schema:
          type: boolean
        required: true
      - description: When `true`, hides active dispatchers.
        name: onlyUnits
        in: query
        schema:
          type: boolean
        required: true
      - description: Maximum number of rows returned.
        name: limit
        in: query
        schema:
          type: integer
        required: true
      - description: Number of rows to skip.
        name: offset
        in: query
        schema:
          type: integer
        required: true
      security:
      - bearerAuth: []
      tags:
      - Emergency / Units
  /v2/emergency/servers/{serverId}/units/kick:
    post:
      summary: Kick Unit
      operationId: kickUnit
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                identId: 12
                reason: Restarting server.
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              oneOf:
              - type: object
                required:
                - communityUserId
                - reason
                properties:
                  communityUserId:
                    type: string
                  roblox:
                    type: integer
                  reason:
                    type: string
              - type: array
                items:
                  type: object
                  required:
                  - communityUserId
                  - reason
                  properties:
                    communityUserId:
                      type: string
                    roblox:
                      type: integer
                    reason:
                      type: string
            example:
            - communityUserId: player-1234
              reason: Connection reset by integration
            - communityUserId: player-5678
              reason: Server restart
      tags:
      - Emergency / Units
  /v2/emergency/servers/{serverId}/units/panic:
    patch:
      summary: Set Unit Panic
      operationId: setUnitPanic
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                updated: 1
                isPanic: true
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              communityUserIds: player-1234
              isPanic: true
      tags:
      - Emergency / Units
  /v2/emergency/servers/{serverId}/units/status:
    patch:
      summary: Set Unit Status
      operationId: setUnitStatus
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                updated: 1
                status: ENROUTE
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              communityUserIds: player-1234
              status: 3
      tags:
      - Emergency / Units
  /v2/emergency/servers/{serverId}/unit-locations:
    patch:
      summary: Update Unit Locations
      operationId: updateUnitLocations
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                updated: 1
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              updates:
              - communityUserId: player-1234
                location: Mission Row
                coordinates:
                  x: 441.2
                  y: -981.9
                  z: 30.7
                  w: 90.0
                peerId: peer-1
                vehicle:
                  model: police3
                  headingOffset: 0
      tags:
      - Emergency / Units
  /v2/general/permission-keys/applications:
    post:
      summary: Apply Permission Key
      operationId: applyPermissionKey
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                accountUuid: 00000000-0000-0000-0000-000000000000
                username: ExampleUser
                message: Permission key applied.
                permissions:
                  police: true
                  dispatch: true
                  liveMap: true
                  adminInGameIntegration: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              communityUserId: player-1234
              roblox: 123456789
              discord: '123456789012345678'
              permissionKey: YOUR_PERMISSION_KEY
      tags:
      - General / Accounts
  /v2/general/account-bans:
    post:
      summary: Kick Or Ban User
      operationId: kickOrBanUser
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                accountUuid: 00000000-0000-0000-0000-000000000000
                action: ban
                message: Account was banned.
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              communityUserId: player-1234
              roblox: 123456789
              isBan: true
      tags:
      - General / Accounts
  /v2/general/links/check:
    post:
      summary: Check Community Link
      operationId: checkCommunityLink
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                communityUserId: player_12345
                linked: true
                accountUuid: 00000000-0000-0000-0000-000000000000
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              communityUserId: player_12345
      tags:
      - General / Accounts
  /v2/general/links:
    post:
      summary: Create Community Link
      operationId: createCommunityLink
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                code: A7K2
                communityUserId: player_12345
                communityUuid: 00000000-0000-0000-0000-000000000000
                expiresAt: '2026-04-09T19:25:00Z'
                expiresInSeconds: 600
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              communityUserId: player_12345
      tags:
      - General / Accounts
  /v2/general/permissions/accounts/{accountId}:
    get:
      summary: Get Account Permissions
      operationId: getAccountPermissionsV2
      security:
      - bearerAuth: []
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  permissions:
                    type: object
                    properties:
                      version:
                        type: integer
                        enum:
                        - 2
                      grants:
                        type: array
                        items:
                          type: string
                  owner:
                    type: boolean
                  migrated:
                    type: boolean
                  status:
                    type: integer
              example:
                permissions:
                  version: 2
                  grants:
                  - global.police
                owner: false
                migrated: true
                status: 1
        '400':
          description: Invalid request or account cannot be edited
        '401':
          description: Missing or invalid API key
        '429':
          description: Rate limited; follow Retry-After before retrying
        '404':
          description: Account not found in this community
      parameters:
      - name: accountId
        in: path
        required: true
        schema:
          type: string
          format: uuid
        example: 00000000-0000-0000-0000-000000000000
      tags:
      - General / Accounts
    put:
      summary: Replace Account Permissions
      operationId: replaceAccountPermissionsV2
      security:
      - bearerAuth: []
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  accountUuid:
                    type: string
                    format: uuid
                  permissions:
                    type: object
                    properties:
                      version:
                        type: integer
                        enum:
                        - 2
                      grants:
                        type: array
                        items:
                          type: string
              example:
                accountUuid: 00000000-0000-0000-0000-000000000000
                permissions:
                  version: 2
                  grants:
                  - global.police
        '400':
          description: Invalid request or account cannot be edited
        '401':
          description: Missing or invalid API key
        '429':
          description: Rate limited; follow Retry-After before retrying
      parameters:
      - name: accountId
        in: path
        required: true
        schema:
          type: string
          format: uuid
        example: 00000000-0000-0000-0000-000000000000
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
              - grants
              properties:
                version:
                  type: integer
                  enum:
                  - 2
                  default: 2
                grants:
                  type: array
                  uniqueItems: true
                  items:
                    type: string
            example:
              version: 2
              grants:
              - global.police
      tags:
      - General / Accounts
  /v2/general/accounts/account:
    get:
      summary: Get Account
      operationId: getAccount
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                uuid: 00000000-0000-0000-0000-000000000000
                username: ExampleUser
                communityUserId: player-1234
                status: 1
                joined: '2026-01-14T18:22:00Z'
                lastLogin: '2026-04-08T20:55:00Z'
                permissions:
                  police: true
                  dispatch: true
                  liveMap: true
                  adminInGameIntegration: true
      parameters:
      - description: Default target option for the in-game community user ID. Provide
          exactly one identifier.
        name: communityUserId
        in: query
        schema:
          type: string
        required: false
      - description: Target the account linked to a Roblox user ID. Provide exactly
          one identifier.
        name: roblox
        in: query
        schema:
          type: integer
        required: false
      - description: Target account UUID. Provide exactly one identifier.
        name: accountUuid
        in: query
        schema:
          type: string
        required: false
      - description: Target username. Provide exactly one identifier.
        name: username
        in: query
        schema:
          type: string
        required: false
      security:
      - bearerAuth: []
      tags:
      - General / Accounts
  /v2/general/accounts:
    get:
      summary: Get Accounts
      operationId: getAccounts
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                pagination:
                  limit: 25
                  offset: 0
                  total: 1
                accounts:
                  uuid: 00000000-0000-0000-0000-000000000000
                  username: ExampleUser
                  status: 1
                  joined: '2026-01-14T18:22:00Z'
                  lastLogin: '2026-04-08T20:55:00Z'
                  permissions:
                    police: true
                    dispatch: true
                    liveMap: true
                    adminInGameIntegration: true
      parameters:
      - description: Maximum number of accounts returned. The backend enforces 1-100.
        name: limit
        in: query
        schema:
          type: integer
        required: true
      - description: Number of accounts to skip.
        name: offset
        in: query
        schema:
          type: integer
        required: true
      - description: Filter by account status. See `ACCOUNT_STATUS` below.
        name: status
        in: query
        schema:
          type: integer
        required: true
      - description: Case-insensitive username filter.
        name: username
        in: query
        schema:
          type: string
        required: false
      security:
      - bearerAuth: []
      tags:
      - General / Accounts
  /v2/general/permissions/catalog:
    get:
      summary: Get Permission Catalog
      operationId: getPermissionCatalogV2
      security:
      - bearerAuth: []
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  version:
                    type: integer
                    enum:
                    - 2
                  communityUuid:
                    type: string
                    format: uuid
                  permissions:
                    type: array
                    items:
                      type: object
                      properties:
                        id:
                          type: string
                        label:
                          type: string
                        templateId:
                          type: integer
                          nullable: true
                        templateName:
                          type: string
                          nullable: true
                        action:
                          type: string
                  legacyGrants:
                    type: object
                    additionalProperties:
                      type: array
                      items:
                        type: string
              example:
                version: 2
                communityUuid: 00000000-0000-0000-0000-000000000000
                permissions:
                - id: global.police
                  label: police
                  templateId: null
                  templateName: null
                  action: police
                - id: record.4.read
                  label: read
                  templateId: 4
                  templateName: Example record template
                  action: read
                legacyGrants:
                  POLICE:
                  - global.police
                  - record.4.read
        '400':
          description: Invalid request or account cannot be edited
        '401':
          description: Missing or invalid API key
        '429':
          description: Rate limited; follow Retry-After before retrying
      tags:
      - General / Accounts
  /v2/general/accounts/permissions:
    patch:
      summary: Modify Account Permissions
      operationId: modifyAccountPermissions
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                accountUuid: 00000000-0000-0000-0000-000000000000
                permissions:
                  police: true
                  dispatch: true
                  liveMap: true
                  adminInGameIntegration: true
                active: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              communityUserId: player-1234
              roblox: 123456789
              add:
              - POLICE
              - DISPATCH
              active: true
      tags:
      - General / Accounts
  /v2/general/photos:
    post:
      summary: Send Photo
      operationId: sendPhoto
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                communityUserId: player-1234
                delivered: 1
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              communityUserId: player-1234
              url: https://cdn.example.com/mugshots/example.png
      tags:
      - General / Accounts
  /v2/general/links/set:
    post:
      summary: Set Community Link
      operationId: setCommunityLink
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
              - accountUuid
              - secretUuid
              - communityUserId
              properties:
                accountUuid:
                  type: string
                  format: uuid
                secretUuid:
                  type: string
                  format: uuid
                communityUserId:
                  type: string
                  maxLength: 255
            example:
              accountUuid: 11111111-1111-1111-1111-111111111111
              secretUuid: 22222222-2222-2222-2222-222222222222
              communityUserId: fivem:12345
      responses:
        '200':
          description: The account link was set successfully.
          content:
            application/json:
              schema:
                type: object
              example:
                linked: true
                accountUuid: 11111111-1111-1111-1111-111111111111
                communityUserId: fivem:12345
        '400':
          description: The request body is invalid.
        '403':
          description: The account UUID and secret UUID do not match an account in
            the authenticated community.
      tags:
      - General / Accounts
  /v2/general/secrets/verify:
    post:
      summary: Verify Secret
      operationId: verifySecret
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                00000000-0000-0000-0000-000000000000: 11111111-2222-3333-4444-555555555555
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              secret: 00000000-0000-0000-0000-000000000000
      tags:
      - General / Accounts
  /v2/fivem/servers/{serverId}/configuration/acknowledge/{revision}:
    post:
      summary: Acknowledge FiveM Configuration
      operationId: acknowledge_fivem_configuration
      parameters:
      - name: serverId
        in: path
        required: true
        schema:
          type: integer
          format: int32
          minimum: 1
        example: 1
      - name: revision
        in: path
        required: true
        schema:
          type: integer
          format: int64
          minimum: 1
        example: 4
      security:
      - BearerAuth: []
      responses:
        '200':
          description: Loaded revision acknowledged
          content:
            application/json:
              schema:
                type: object
                required:
                - success
                properties:
                  success:
                    type: boolean
              example:
                success: true
        '401':
          description: Missing or invalid bearer API key
        '404':
          description: Server does not belong to the authenticated community
        '409':
          description: Revision changed or no configuration has been saved for this
            server
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
                  detail:
                    type: string
                  status:
                    type: integer
              example:
                status: 409
                title: Revision changed
                detail: Configuration changed after startup.
      tags:
      - General / Configuration
  /v2/general/servers/{serverId}/street-sign-auth:
    post:
      summary: Auth Street Signs
      operationId: authStreetSigns
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                authorized: true
                serverId: 1
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      security:
      - bearerAuth: []
      tags:
      - General / Configuration
  /v2/general/database-sync:
    get:
      summary: Get Database Sync Configuration
      operationId: getDatabaseSyncConfiguration
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/DatabaseSyncConfiguration'
              example:
                enabled: true
                character: true
                licenses: false
                vehicleRegistrations: true
      security:
      - bearerAuth: []
      tags:
      - General / Configuration
  /v2/fivem/servers/{serverId}/configuration:
    get:
      summary: Get FiveM Configuration
      operationId: get_fivem_configuration
      parameters:
      - name: serverId
        in: path
        required: true
        schema:
          type: integer
          format: int32
          minimum: 1
        example: 1
      security:
      - BearerAuth: []
      responses:
        '200':
          description: Resolved configuration (values abbreviated in this example)
          content:
            application/json:
              schema:
                type: object
                required:
                - revision
                - schemaVersion
                - templateRevision
                - serverId
                - values
                - appliedRevision
                - appliedAt
                properties:
                  revision:
                    type: integer
                    format: int64
                    minimum: 0
                    description: Saved configuration revision; zero means this server
                      has no saved configuration.
                  schemaVersion:
                    type: integer
                    example: 1
                    description: Wire protocol version.
                  templateRevision:
                    type: string
                    description: SHA-256 fingerprint of the current configuration
                      catalog.
                  serverId:
                    type: integer
                    example: 1
                  values:
                    type: object
                    required:
                    - core
                    - plugins
                    properties:
                      core:
                        type: object
                        additionalProperties: true
                      plugins:
                        type: object
                        additionalProperties: true
                  appliedRevision:
                    type: integer
                    format: int64
                    nullable: true
                  appliedAt:
                    type: string
                    format: date-time
                    nullable: true
              example:
                revision: 4
                schemaVersion: 1
                templateRevision: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                serverId: 1
                values:
                  core: {}
                  plugins: {}
                appliedRevision: 3
                appliedAt: '2026-09-21T15:30:00Z'
        '401':
          description: Missing or invalid bearer API key
        '404':
          description: Server does not belong to the authenticated community
      tags:
      - General / Configuration
  /v2/general/info:
    get:
      summary: Get Info
      operationId: getInfo
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                uuid: aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee
                community:
                  comId: examplecad
                  name: Example CAD
                  timezone: America/Phoenix
                  customLoginUrl: https://portal.examplecad.com/login
                codes:
                - 10-8
                - 10-23
      security:
      - bearerAuth: []
      tags:
      - General / Configuration
  /v2/general/login-page:
    get:
      summary: Get Login Page
      operationId: getLoginPage
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                comId: examplecad
                name: Example CAD
                timezone: America/Phoenix
                customLoginUrl: https://portal.examplecad.com/login
      parameters:
      - description: Use the community ID instead of `url`. Provide exactly one.
        name: communityId
        in: query
        schema:
          type: string
        required: false
      - description: Use the community website or login URL instead of `communityId`.
        name: url
        in: query
        schema:
          type: string
        required: false
      tags:
      - General / Configuration
  /v2/general/penal-codes:
    get:
      summary: Get Penal Codes
      operationId: getPenalCodes
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/PenalCode'
              example:
              - title: Unsafe Lane Change
                code: '22107'
                type: INFRACTION
                bondType: NONE
                bondAmount: 0
                jailTime: '0'
      security:
      - bearerAuth: []
      tags:
      - General / Configuration
    put:
      summary: Set Penal Codes
      operationId: setPenalCodes
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                required:
                - updated
                properties:
                  updated:
                    type: integer
              example:
                updated: 1
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
              - codes
              properties:
                codes:
                  type: array
                  items:
                    $ref: '#/components/schemas/PenalCode'
            example:
              codes:
              - title: Unsafe Lane Change
                code: '22107'
                type: INFRACTION
                bondType: NONE
                bondAmount: 0
                jailTime: '0'
      tags:
      - General / Configuration
  /v2/general/servers:
    get:
      summary: Get Servers
      operationId: getServers
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                servers:
                  id: 1
                  name: Main Server
                  description: Primary patrol server
                  signal: '100'
                  mapUrl: https://example.com/tiles/{z}/{x}/{y}.png
                  mapIp: 203.0.113.10
                  listenerPort: '30120'
                  differingOutbound: false
                  outboundIp: ''
                  enableMap: true
                  mapType: NORMAL
                  isStatic: false
                  liveMapFormat: 0
      security:
      - bearerAuth: []
      tags:
      - General / Configuration
    put:
      summary: Set Servers
      operationId: setServers
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                servers:
                  id: 1
                  name: Main Server
                  description: Primary patrol server
                  signal: '100'
                  mapUrl: https://example.com/tiles/{z}/{x}/{y}.png
                  mapIp: 203.0.113.10
                  listenerPort: '30120'
                  differingOutbound: false
                  outboundIp: ''
                  enableMap: true
                  mapType: NORMAL
                  isStatic: false
                  liveMapFormat: 0
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              deployMap: true
              servers:
                id: 1
                name: Main Server
                description: Primary patrol server
                signal: '100'
                mapUrl: https://example.com/tiles/{z}/{x}/{y}.png
                mapIp: 203.0.113.10
                listenerPort: '30120'
                differingOutbound: false
                outboundIp: ''
                enableMap: true
                mapType: NORMAL
                isStatic: false
                liveMapFormat: 0
      tags:
      - General / Configuration
  /v2/general/turn:
    get:
      summary: Get Turn Credentials
      operationId: getTurnCredentials
      parameters:
      - in: query
        name: userId
        required: false
        schema:
          type: string
        description: Optional user identifier appended to the generated TURN username.
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                iceServers:
                - urls:
                  - turn:coturn.sonorancad.com:3478?transport=udp
                  - turn:coturn.sonorancad.com:3478?transport=tcp
                  - stun:coturn.sonorancad.com:3478
                  username: 1735689600:unit-1
                  credential: base64-turn-credential
                ttl: 600
      security:
      - bearerAuth: []
      tags:
      - General / Configuration
  /v2/general/version:
    get:
      summary: Get Version
      operationId: getVersion
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                version: 2
                name: PLUS
      security:
      - bearerAuth: []
      tags:
      - General / Configuration
  /v2/general/servers/{serverId}/heartbeat:
    post:
      summary: Heartbeat
      operationId: heartbeat
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                serverId: 1
                playerCount: 32
                receivedAtUtc: '2026-04-08T21:35:00Z'
      parameters:
      - description: Configured Sonoran CAD server ID.
        name: serverId
        in: path
        schema:
          type: integer
        example: 1
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              playerCount: 42
      tags:
      - General / Configuration
  /v2/general/postals:
    put:
      summary: Set Postal Config
      operationId: setPostalConfig
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                updated: 2
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              postals: null
      tags:
      - General / Configuration
  /v2/general/bodycam-recordings:
    post:
      summary: Upload Bodycam Recording
      operationId: uploadBodycamRecording
      requestBody:
        required: true
        content:
          multipart/form-data:
            schema:
              type: object
              required:
              - file
              - durationMs
              properties:
                file:
                  type: string
                  format: binary
                accountUuid:
                  type: string
                  format: uuid
                communityUserId:
                  type: string
                durationMs:
                  type: integer
                  minimum: 1
                  maximum: 120000
                identId:
                  type: integer
                unitNumber:
                  type: string
                unitLocation:
                  type: string
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  type: string
              example:
              - https://files.example.com/bodycam/community/unit/clip.webm
        '400':
          description: Validation or upload error
          content:
            application/problem+json:
              schema:
                type: object
              example:
                title: Unable to upload bodycam recording
                status: 400
                detail: Bodycam uploads must be webm files.
      security:
      - bearerAuth: []
      tags:
      - General / Configuration
  /v2/general/lookups/custom:
    post:
      summary: Lookup By Custom Search
      operationId: lookupByCustomSearch
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                recordTypeId: 7
                id: 2451
                syncId: citizen:1234
                name: John Doe
                type: 7
                sections:
                  category: 0
                  label: Civilian Info
                  fields:
                    label: First Name
                    value: John
                    uid: first_name
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              map: drivers_license
              value: D1234567
              types: 7
              partial: false
      tags:
      - General / Lookups
  /v2/general/lookups/by-value:
    post:
      summary: Lookup By Value
      operationId: lookupByValue
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                recordTypeId: 7
                id: 2451
                syncId: citizen:1234
                name: John Doe
                type: 7
                sections:
                  category: 0
                  label: Civilian Info
                  fields:
                    label: First Name
                    value: John
                    uid: first_name
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              searchType: NUMBER
              value: '451'
              notifyCommunityUserId: player-1234
              types: 12
      tags:
      - General / Lookups
  /v2/general/lookups:
    post:
      summary: Lookup Name Or Plate
      operationId: lookupNameOrPlate
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
              example:
              - recordTypeId: 7
                id: 2451
                syncId: citizen:1234
                name: John Doe
                type: 7
                sections:
                  category: 0
                  label: Civilian Info
                  fields:
                    label: First Name
                    value: John
                    uid: first_name
              - recordTypeId: 12
                id: 451
                name: Incident Report
                type: 9
                sections:
                  category: 0
                  label: Report Details
                  fields:
                    label: Case Number
                    value: SC-2026-001
                    uid: case_number
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              first: John
              last: Doe
              mi: ''
              plate: ''
              notifyCommunityUserId: player-1234
              types:
              - 7
              - 12
              partial: true
      tags:
      - General / Lookups
  /v2/general/records:
    post:
      summary: Create Record
      operationId: createRecord
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                recordTypeId: 12
                id: 451
                name: Incident Report
                type: 9
                sections:
                  category: 0
                  label: Report Details
                  fields:
                    label: Case Number
                    value: SC-2026-001
                    uid: case_number
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              communityUserId: player-1234
              roblox: 123456789
              useDictionary: true
              recordTypeId: 12
              replaceValues:
                plate: ABC123
      tags:
      - General / Records
  /v2/general/records/{recordId}:
    delete:
      summary: Delete Record
      operationId: deleteRecord
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                recordId: 451
      parameters:
      - description: Record ID.
        name: recordId
        in: path
        schema:
          type: integer
        required: true
      security:
      - bearerAuth: []
      tags:
      - General / Records
    patch:
      summary: Update Record
      operationId: updateRecord
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                recordTypeId: 12
                id: 451
                name: Incident Report
                type: 9
                sections:
                  category: 0
                  label: Report Details
                  fields:
                    label: Case Number
                    value: SC-2026-001
                    uid: case_number
      parameters:
      - description: Record ID.
        name: recordId
        in: path
        schema:
          type: integer
        required: true
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              communityUserId: player-1234
              useDictionary: true
              templateId: 12
              replaceValues:
                plate: XYZ987
      tags:
      - General / Records
  /v2/general/templates/{recordTypeId}:
    get:
      summary: Get Template
      operationId: getTemplate
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                recordTypeId: 12
                id: 0
                name: Incident Report
                type: 9
                sections:
                  category: 0
                  label: Report Details
                  fields:
                    label: Case Number
                    value: ''
                    uid: case_number
      parameters:
      - description: Custom record template ID.
        name: recordTypeId
        in: path
        schema:
          type: integer
        required: true
      security:
      - bearerAuth: []
      tags:
      - General / Records
  /v2/general/templates:
    get:
      summary: Get Templates
      operationId: getTemplates
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                recordTypeId: 12
                id: 0
                name: Incident Report
                type: 9
                sections:
                  category: 0
                  label: Report Details
                  fields:
                    label: Case Number
                    value: ''
                    uid: case_number
      security:
      - bearerAuth: []
      tags:
      - General / Records
  /v2/general/record-drafts:
    post:
      summary: Send Draft
      operationId: sendDraft
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
              example:
                recordTypeId: 12
                id: 0
                name: Incident Report
                type: 9
                sections:
                  category: 0
                  label: Report Details
                  fields:
                    label: Case Number
                    value: ''
                    uid: case_number
      security:
      - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
            example:
              recordTypeId: 12
              replaceValues:
                '{{plate}}': ABC123
              communityUserId: player-1234
      tags:
      - General / Records
  /v2/integration-panels/servers/{serverId}/panels/{panelKey}/actions/{eventId}/ack:
    post:
      summary: Acknowledge Integration Panel Action
      operationId: acknowledgeIntegrationPanelAction
      security:
      - bearerAuth: []
      parameters:
      - name: serverId
        in: path
        required: true
        schema:
          type: integer
        example: 1
      - name: panelKey
        in: path
        required: true
        schema:
          type: string
        example: example.fire-alarms
      - name: eventId
        in: path
        required: true
        schema:
          type: string
          format: uuid
        example: 11111111-1111-1111-1111-111111111111
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
              - success
              properties:
                success:
                  type: boolean
                message:
                  type: string
                  maxLength: 500
                result:
                  type: object
                  additionalProperties: true
            example:
              success: true
              message: Alarm disabled
              result:
                alarmId: mrpd-lobby
                active: false
      responses:
        '200':
          description: Acknowledged action
          content:
            application/json:
              schema:
                type: object
              example:
                panelKey: example.fire-alarms
                serverId: 1
                eventId: 11111111-1111-1111-1111-111111111111
                success: true
                message: Alarm disabled
      tags:
      - Integration Panels
  /v2/integration-panels/{panelKey}:
    delete:
      summary: Delete Integration Panel
      operationId: deleteIntegrationPanel
      security:
      - bearerAuth: []
      parameters:
      - name: panelKey
        in: path
        required: true
        schema:
          type: string
        example: example.fire-alarms
      responses:
        '200':
          description: Panel disabled
          content:
            application/json:
              schema:
                type: object
              example:
                key: example.fire-alarms
                enabled: false
      tags:
      - Integration Panels
    get:
      summary: Get Integration Panel
      operationId: getIntegrationPanel
      security:
      - bearerAuth: []
      parameters:
      - name: panelKey
        in: path
        required: true
        schema:
          type: string
        example: example.fire-alarms
      responses:
        '200':
          description: Panel definition and instances
          content:
            application/json:
              schema:
                type: object
      tags:
      - Integration Panels
    put:
      summary: Set Integration Panel
      operationId: putIntegrationPanel
      security:
      - bearerAuth: []
      parameters:
      - name: panelKey
        in: path
        required: true
        schema:
          type: string
        example: example.fire-alarms
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
              - definition
              properties:
                definition:
                  type: object
            example:
              definition:
                schemaVersion: 1
                key: example.fire-alarms
                name: Fire Alarm
                icon: fas fa-bell
                surfaces:
                - dispatch
                - fire
                body:
                - type: text
                  text: Connected to the alarm controller.
      responses:
        '200':
          description: Created or replaced panel
          content:
            application/json:
              schema:
                type: object
      tags:
      - Integration Panels
  /v2/integration-panels:
    get:
      summary: List Integration Panels
      operationId: listIntegrationPanels
      security:
      - bearerAuth: []
      responses:
        '200':
          description: Active panels and stored instances
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
              example:
              - key: example.fire-alarms
                name: Fire Alarm
                definition:
                  schemaVersion: 1
                  name: Fire Alarm
                  body: []
                instances:
                - instanceKey: default
                  state: {}
                  revision: 4
      tags:
      - Integration Panels
  /v2/integration-panels/servers/{serverId}/panels/{panelKey}/actions:
    get:
      summary: Poll Integration Panel Actions
      operationId: pollIntegrationPanelActions
      security:
      - bearerAuth: []
      parameters:
      - name: serverId
        in: path
        required: true
        schema:
          type: integer
        example: 1
      - name: panelKey
        in: path
        required: true
        schema:
          type: string
        example: example.fire-alarms
      - name: after
        in: query
        schema:
          type: integer
          format: int64
          minimum: 0
          default: 0
      - name: limit
        in: query
        schema:
          type: integer
          minimum: 1
          maximum: 100
          default: 100
      responses:
        '200':
          description: Pending actions and next cursor
          content:
            application/json:
              schema:
                type: object
              example:
                events:
                - cursor: 42
                  id: 11111111-1111-1111-1111-111111111111
                  panelKey: example.fire-alarms
                  serverId: 1
                  instanceKey: default
                  actionId: alarm.set-active
                  actorUuid: 22222222-2222-2222-2222-222222222222
                  actorName: John Doe
                  values:
                    alarmId: mrpd-lobby
                    active: false
                  createdAt: '2026-08-25T18:02:00Z'
                  expiresAt: '2026-08-25T18:03:00Z'
                nextCursor: 42
      tags:
      - Integration Panels
  /v2/integration-panels/servers/{serverId}/panels/{panelKey}/instances/{instanceKey}/state:
    put:
      summary: Set Integration Panel State
      operationId: replaceIntegrationPanelState
      security:
      - bearerAuth: []
      parameters:
      - name: serverId
        in: path
        required: true
        schema:
          type: integer
        example: 1
      - name: panelKey
        in: path
        required: true
        schema:
          type: string
        example: example.fire-alarms
      - name: instanceKey
        in: path
        required: true
        schema:
          type: string
        example: default
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
              - state
              properties:
                state:
                  type: object
                  additionalProperties: true
            example:
              state:
                summary:
                  active: 1
                  normal: 2
                alarms:
                - id: mrpd-lobby
                  name: MRPD Lobby
                  active: true
      responses:
        '200':
          description: Stored state and revision
          content:
            application/json:
              schema:
                type: object
      tags:
      - Integration Panels
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
    BearerAuth:
      type: http
      scheme: bearer
  schemas:
    DispatchTemplate:
      type: object
      properties:
        templateId:
          type: integer
        name:
          type: string
        version:
          type: integer
        isDefault:
          type: boolean
        statusOptions:
          type: array
          items:
            type: object
            properties:
              id:
                type: string
              label:
                type: string
              status:
                type: integer
                enum:
                - 0
                - 1
                - 2
        sections:
          type: array
          items:
            type: object
            properties:
              uid:
                type: string
              label:
                type: string
              icon:
                type: string
              size:
                type: integer
                minimum: 4
                maximum: 12
              fields:
                type: array
                items:
                  type: object
                  properties:
                    uid:
                      type: string
                    type:
                      type: string
                    label:
                      type: string
                    binding:
                      type: string
                    size:
                      type: integer
                      minimum: 1
                      maximum: 12
                    required:
                      type: boolean
                    locked:
                      type: boolean
                    placeholder:
                      type: string
                    options:
                      type: array
                      items:
                        type: string
    DatabaseSyncConfiguration:
      type: object
      required:
      - enabled
      - character
      - licenses
      - vehicleRegistrations
      properties:
        enabled:
          type: boolean
        character:
          type: boolean
        licenses:
          type: boolean
        vehicleRegistrations:
          type: boolean
    PenalCode:
      type: object
      properties:
        title:
          type: string
        code:
          type: string
        type:
          type: string
        bondType:
          type: string
        bondAmount:
          type: integer
        jailTime:
          type: string
```
</details>
<!-- END GENERATED V2 OPENAPI -->
