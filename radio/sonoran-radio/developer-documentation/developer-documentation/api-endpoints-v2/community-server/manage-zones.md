---
description: >-
  Retrieve and mutate backend-authoritative GEO and degradation zones for a
  Sonoran Radio room.
---

# Manage Room Zones

These endpoints manage the canonical GEO and degradation zone configuration for one Radio room. Emergency zones remain panel-managed and are not modified by these routes.

| Method   | Route                                                              | Purpose                             |
| -------- | ------------------------------------------------------------------ | ----------------------------------- |
| `GET`    | `/v2/servers/:communityId/rooms/:roomId/zones`                     | Retrieve the complete room snapshot |
| `POST`   | `/v2/servers/:communityId/rooms/:roomId/zones/:zoneType`           | Create or replace a zone by name    |
| `PATCH`  | `/v2/servers/:communityId/rooms/:roomId/zones/:zoneType/:zoneName` | Replace an existing zone            |
| `DELETE` | `/v2/servers/:communityId/rooms/:roomId/zones/:zoneType/:zoneName` | Delete an existing zone             |

`zoneType` must be `geo` or `degrade`. The `zoneName` path value must be URL encoded.

> **Rate limits:** reads allow `12 requests per minute`; mutations allow `30 requests per minute`.

**Headers**

| Name          | Value                                 |
| ------------- | ------------------------------------- |
| Authorization | `Bearer <community-api-key>`          |
| Content-Type  | `application/json` for POST and PATCH |

POST and PATCH accept a `zone` object. GEO zones contain `transmitChannels`, `scanChannels`, and `acePerms`; degradation zones contain `degradeStrength`.

A zone must use exactly one supported shape:

* Polygon: `points` containing at least three finite `{ x, y }` coordinates.
* Circle: `center` containing finite `{ x, y }` coordinates and a positive finite `radius`.

Both shapes use `options.minZ` and `options.maxZ` for their vertical bounds. For example, a circle shape can replace the `points` property in the examples below with `center: { x: 0, y: 0 }, radius: 100`.

**Examples**

{% tabs %}
{% tab title="Sonoran.lua" %}
```lua
local snapshot = client.radio:getZonesV2()

local created = client.radio:createZoneV2("geo", {
  points = {
    { x = -100.0, y = -100.0 },
    { x = -100.0, y = 100.0 },
    { x = 100.0, y = 100.0 }
  },
  options = {
    name = "Downtown",
    minZ = 0,
    maxZ = 100,
    transmitChannels = { 143504 },
    scanChannels = {},
    acePerms = {}
  }
})

local updated = client.radio:updateZoneV2("geo", "Downtown", updatedZone)
local deleted = client.radio:deleteZoneV2("geo", "Downtown")
```
{% endtab %}

{% tab title="Sonoran.js" %}
```javascript
const snapshot = await instance.radio?.getZonesV2();

const created = await instance.radio?.createZoneV2('geo', {
  points: [
    { x: -100, y: -100 },
    { x: -100, y: 100 },
    { x: 100, y: 100 }
  ],
  options: {
    name: 'Downtown',
    minZ: 0,
    maxZ: 100,
    transmitChannels: [143504],
    scanChannels: [],
    acePerms: []
  }
});

const updated = await instance.radio?.updateZoneV2('geo', 'Downtown', updatedZone);
const deleted = await instance.radio?.deleteZoneV2('geo', 'Downtown');
```
{% endtab %}

{% tab title="Sonoran.py" %}
```python
snapshot = instance.radio.getZonesV2()

created = instance.radio.createZoneV2("geo", {
    "points": [
        {"x": -100, "y": -100},
        {"x": -100, "y": 100},
        {"x": 100, "y": 100},
    ],
    "options": {
        "name": "Downtown",
        "minZ": 0,
        "maxZ": 100,
        "transmitChannels": [143504],
        "scanChannels": [],
        "acePerms": [],
    },
})

updated = instance.radio.updateZoneV2("geo", "Downtown", updated_zone)
deleted = instance.radio.deleteZoneV2("geo", "Downtown")
```
{% endtab %}

{% tab title="Sonoran.Net" %}
```csharp
var snapshot = await sonoran.Radio.getZonesV2();

var zone = new RadioGeoZone
{
    Points =
    [
        new() { X = -100, Y = -100 },
        new() { X = -100, Y = 100 },
        new() { X = 100, Y = 100 }
    ],
    Options = new()
    {
        Name = "Downtown",
        MinZ = 0,
        MaxZ = 100,
        TransmitChannels = [143504]
    }
};

var created = await sonoran.Radio.createZoneV2(RadioMutableZoneType.Geo, zone);
var updated = await sonoran.Radio.updateZoneV2(RadioMutableZoneType.Geo, "Downtown", zone);
var deleted = await sonoran.Radio.deleteZoneV2(RadioMutableZoneType.Geo, "Downtown");
```
{% endtab %}

{% tab title="OpenAPI" %}
```yaml
openapi: 3.0.3
info:
  title: Sonoran Radio Room Zones API
  version: "2.0"
servers:
  - url: https://api.sonoranradio.com
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
  schemas:
    RadioZone:
      allOf:
        - type: object
          required: [options]
          properties:
            options: { type: object }
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
  /v2/servers/{communityId}/rooms/{roomId}/zones:
    get:
      security: [{ bearerAuth: [] }]
      parameters:
        - { in: path, name: communityId, required: true, schema: { type: string, example: YOUR_COMMUNITY_ID } }
        - { in: path, name: roomId, required: true, schema: { type: integer, example: 1 } }
      responses:
        "200": { description: Canonical room zone snapshot }
  /v2/servers/{communityId}/rooms/{roomId}/zones/{zoneType}:
    post:
      security: [{ bearerAuth: [] }]
      parameters:
        - { in: path, name: communityId, required: true, schema: { type: string, example: YOUR_COMMUNITY_ID } }
        - { in: path, name: roomId, required: true, schema: { type: integer, example: 1 } }
        - { in: path, name: zoneType, required: true, schema: { type: string, enum: [geo, degrade] } }
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [zone]
              properties:
                zone: { $ref: "#/components/schemas/RadioZone" }
      responses:
        "201": { description: Canonical room zone snapshot }
  /v2/servers/{communityId}/rooms/{roomId}/zones/{zoneType}/{zoneName}:
    patch:
      security: [{ bearerAuth: [] }]
      parameters:
        - { in: path, name: communityId, required: true, schema: { type: string, example: YOUR_COMMUNITY_ID } }
        - { in: path, name: roomId, required: true, schema: { type: integer, example: 1 } }
        - { in: path, name: zoneType, required: true, schema: { type: string, enum: [geo, degrade] } }
        - { in: path, name: zoneName, required: true, schema: { type: string } }
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [zone]
              properties:
                zone: { $ref: "#/components/schemas/RadioZone" }
      responses:
        "200": { description: Canonical room zone snapshot }
    delete:
      security: [{ bearerAuth: [] }]
      parameters:
        - { in: path, name: communityId, required: true, schema: { type: string, example: YOUR_COMMUNITY_ID } }
        - { in: path, name: roomId, required: true, schema: { type: integer, example: 1 } }
        - { in: path, name: zoneType, required: true, schema: { type: string, enum: [geo, degrade] } }
        - { in: path, name: zoneName, required: true, schema: { type: string } }
      responses:
        "200": { description: Canonical room zone snapshot }
```
{% endtab %}

{% tab title="cURL" %}
```bash
curl "https://api.sonoranradio.com/v2/servers/YOUR_COMMUNITY_ID/rooms/2/zones" \
  -H "Authorization: Bearer your-community-api-key"

curl -X POST "https://api.sonoranradio.com/v2/servers/YOUR_COMMUNITY_ID/rooms/2/zones/geo" \
  -H "Authorization: Bearer your-community-api-key" \
  -H "Content-Type: application/json" \
  -d '{"zone":{"points":[{"x":-100,"y":-100},{"x":-100,"y":100},{"x":100,"y":100}],"options":{"name":"Downtown","minZ":0,"maxZ":100,"transmitChannels":[143504],"scanChannels":[],"acePerms":[]}}}'

curl -X DELETE "https://api.sonoranradio.com/v2/servers/YOUR_COMMUNITY_ID/rooms/2/zones/geo/Downtown" \
  -H "Authorization: Bearer your-community-api-key"
```
{% endtab %}
{% endtabs %}

## Response

Every successful operation returns the complete canonical mutable-zone snapshot for the room:

```json
{
  "roomId": 2,
  "geoZones": [],
  "degradeZones": []
}
```
