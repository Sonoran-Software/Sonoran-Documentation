---
description: Control Sonoran Studio smart lighting and Streamer.bot from local tools
---

# Developer Documentation

Sonoran Studio Desktop exposes a versioned HTTP API for local games, scripts, stream tools, and automation software. Use it to activate saved lighting scenes, control individual bulbs, play temporary lighting sequences, and invoke Streamer.bot actions.

{% hint style="info" %}
The API runs in the **Windows and macOS desktop app**, not on `sonoran.studio`. Keep the desktop app open and signed in. Lighting and Streamer.bot control require [Sonoran Studio Pro or Sonoran One](pricing.md).
{% endhint %}

## Quick start

The default base URL is:

```
http://127.0.0.1:9990/api/v1
```

The port is shown and can be changed at the bottom of the desktop app's Smart Lighting panel. Local requests do not need an API key.

Confirm that the API is running:

```bash
curl.exe http://127.0.0.1:9990/api/v1/status
```

Activate the saved `available` scene:

```bash
curl.exe --request POST http://127.0.0.1:9990/api/v1/lighting/state ^
  --header "Content-Type: application/json" ^
  --data "{\"state\":\"available\"}"
```

On macOS, Linux, or a shell other than Windows Command Prompt, use normal multiline shell syntax:

```bash
curl --request POST http://127.0.0.1:9990/api/v1/lighting/state \
  --header 'Content-Type: application/json' \
  --data '{"state":"available"}'
```

All `POST` requests must use `Content-Type: application/json`.

## Endpoint reference

| Method | Path                          | Purpose                                                                                           |
| ------ | ----------------------------- | ------------------------------------------------------------------------------------------------- |
| `GET`  | `/api/v1`                     | Discover the API version and endpoint paths                                                       |
| `GET`  | `/api/v1/status`              | Read API, entitlement, lighting, and Streamer.bot status                                          |
| `GET`  | `/api/v1/lighting/states`     | List every named lighting state and whether it has a saved sequence                               |
| `POST` | `/api/v1/lighting/state`      | Activate a saved lighting state                                                                   |
| `GET`  | `/api/v1/lighting/bulbs`      | List unique bulbs used by saved scenes                                                            |
| `POST` | `/api/v1/lighting/bulbs`      | Immediately set one or more bulbs to a color                                                      |
| `POST` | `/api/v1/lighting/sequence`   | Start a temporary, finite multi-frame sequence                                                    |
| `GET`  | `/api/v1/streamerbot/actions` | List enabled actions reported by Streamer.bot                                                     |
| `POST` | `/api/v1/streamerbot/actions` | Invoke any Streamer.bot action by ID or name                                                      |
| `POST` | `/api/v1/streamerbot/events`  | Invoke the action mapped to a Sonoran event                                                       |
| `POST` | `/lighting`                   | Legacy FiveM-compatible named lighting state endpoint                                             |
| `POST` | `/fivem`                      | Bundled FiveM integration endpoint for gameplay moments                                           |
| `POST` | `/lspdfr`                     | Bundled LSPDFR plugin endpoint for lighting state, gameplay moments, and validated overlay events |

Successful JSON responses contain `"ok": true`. Errors contain `"ok": false`, an `error` code, and a human-readable `message`.

The unversioned `/fivem` and `/lspdfr` routes are reserved for bundled Sonoran Studio game integrations. Third-party integrations should use the versioned `/api/v1` endpoints; LSPDFR overlay events are accepted only through the signed-in Studio desktop session.

## Status and discovery

### Discover endpoints

```http
GET /api/v1
```

This route returns the API name, `apiVersion`, and the paths supported by the installed desktop app. Clients should use it when they need to detect API capabilities.

### Get status

```http
GET /api/v1/status
```

Example response:

```json
{
  "ok": true,
  "apiVersion": 1,
  "premium": true,
  "lighting": {
    "currentState": "available",
    "configuredBulbs": 2
  },
  "streamerBot": {
    "enabled": true,
    "connected": true,
    "version": "1.0.0"
  }
}
```

Discovery and status remain available without a paid entitlement so clients can explain why a control request is unavailable.

## Lighting states

### List states

```http
GET /api/v1/lighting/states
```

Each result includes the API `state`, display `label`, saved frame count, and whether at least one saved frame contains a bulb.

### Activate a saved state

```http
POST /api/v1/lighting/state
Content-Type: application/json

{
  "state": "panic"
}
```

Supported state values are:

```
restore, lights, panic, unavailable, available, busy, enroute, onscene,
left, right, hazard, erlc_off, erlc_cruise, erlc_rear, erlc_full,
erlc_left, erlc_hazard, erlc_right, erlc_pattern, erlc_left_alley,
erlc_right_alley, erlc_take_down, erlc_spot_light
```

The desktop app plays the sequence saved for that state. Multi-frame saved scenes continue looping until another state is activated. `panic` has priority: while it is active, other named states return HTTP `409` until `restore` is sent.

## Bulbs

### List configured bulbs

```http
GET /api/v1/lighting/bulbs
```

The response contains each unique bulb used in at least one saved scene. Credentials are never returned.

```json
{
  "ok": true,
  "bulbs": [
    {
      "id": "wyze:AA11BB22",
      "type": "wyze",
      "mac": "AA11BB22",
      "model": "WLPA19C",
      "nickname": "Desk lamp",
      "color": "#ff0000",
      "states": ["available", "panic"]
    }
  ]
}
```

Use the returned `id` in control and sequence requests. IDs are formed from the provider and device ID, are case-insensitive when supplied, and should otherwise be treated as opaque strings.

### Set configured bulbs

```http
POST /api/v1/lighting/bulbs
Content-Type: application/json

{
  "bulbs": [
    { "id": "wyze:AA11BB22", "color": "#0066ff" },
    { "id": "philips:4", "color": "rgb(255, 80, 0)" }
  ]
}
```

Omit `color` to use the bulb's saved color. Up to 64 bulbs can be controlled in one request. `#RRGGBB` and `rgb(r, g, b)` colors are accepted; `#000000` turns supported bulbs off.

Direct control cancels the currently looping scene and sets the current named state to `restore`.

### Control an ad-hoc bulb descriptor

A bulb does not have to appear in a saved scene. Supply its provider descriptor instead of `id`:

```json
{
  "bulbs": [
    {
      "type": "govee",
      "mac": "AA:BB:CC:DD:EE:FF:00:11",
      "model": "H6008",
      "nickname": "Shelf",
      "color": "#00ff88"
    }
  ]
}
```

The provider must already be connected in the desktop app. `type` can be `wyze`, `philips`, `govee`, or `goveebt`. `mac` is the provider's device identifier rather than necessarily a network MAC address. Wyze and Govee Wi-Fi requests also require the device `model`. Using IDs returned by `GET /lighting/bulbs` is recommended because Studio fills these fields for you.

## Temporary sequences

Start a finite sequence with one to 40 frames:

```http
POST /api/v1/lighting/sequence
Content-Type: application/json

{
  "repeat": 3,
  "frames": [
    {
      "delay": 250,
      "bulbs": [
        { "id": "wyze:AA11BB22", "color": "#ff0000" },
        { "id": "philips:4", "color": "#0000ff" }
      ]
    },
    {
      "delay": 250,
      "bulbs": [
        { "id": "wyze:AA11BB22", "color": "#0000ff" },
        { "id": "philips:4", "color": "#ff0000" }
      ]
    }
  ]
}
```

`delay` is the number of milliseconds before the next frame and is clamped to `50`–`60000`. `repeat` is optional, defaults to `1`, and is clamped to `1`–`100`. Each frame can contain up to 64 configured IDs, ad-hoc bulb descriptors, or a mixture of both.

The endpoint returns HTTP `202` as soon as Studio accepts the sequence. Playback continues locally. A later state, bulb, or sequence request cancels it. The final colors remain active after the last frame.

## Streamer.bot actions

Enable and connect Streamer.bot in Sonoran Studio before using these endpoints.

### List actions

```http
GET /api/v1/streamerbot/actions
```

The result contains the ID, name, and optional group for every enabled action reported by Streamer.bot:

```json
{
  "ok": true,
  "actions": [
    {
      "id": "9b4d62c1-29b3-4cd5-b80d-a07f7045d08a",
      "name": "Play pursuit alert",
      "group": "Sonoran Studio"
    }
  ]
}
```

### Invoke any action

```http
POST /api/v1/streamerbot/actions
Content-Type: application/json

{
  "id": "9b4d62c1-29b3-4cd5-b80d-a07f7045d08a",
  "args": {
    "source": "custom-game",
    "unit": "2-Lincoln-14",
    "priority": 1,
    "test": false
  }
}
```

Supply `id`, `name`, or both. IDs are safer if action names may change. `args` is optional and is passed to Streamer.bot's `DoAction` request. It can contain up to 50 flat string, finite number, or boolean values; nested objects and arrays are rejected.

### Invoke a mapped Sonoran event

Use this endpoint when Sonoran Studio already maps an event to an action:

```http
POST /api/v1/streamerbot/events
Content-Type: application/json

{
  "event": "panic.started",
  "args": {
    "panicScope": "self",
    "unit": "2-Lincoln-14"
  }
}
```

Supported mapped events are:

```
radio.started, radio.ended, unit.status, call.attached, call.changed,
call.note, dispatch.notification, panic.started, panic.ended,
game.weapon.drawn, game.weapon.holstered, game.player.died,
game.player.returned, game.travel.on_foot, game.travel.vehicle,
game.travel.aircraft, game.travel.watercraft, game.health.low,
game.health.recovered
```

If no action is mapped to the event, Studio returns HTTP `409`.

## Complete client examples

### JavaScript

This example uses the built-in `fetch` available in current Node.js versions:

```javascript
const studioBaseUrl = "http://127.0.0.1:9990/api/v1";

async function studioRequest(path, options = {}) {
  const response = await fetch(`${studioBaseUrl}${path}`, {
    ...options,
    headers: {
      ...(options.body ? { "content-type": "application/json" } : {}),
      ...options.headers,
    },
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(`Sonoran Studio ${response.status}: ${result.message}`);
  }
  return result;
}

const { bulbs } = await studioRequest("/lighting/bulbs");
const desk = bulbs.find((bulb) => bulb.nickname === "Desk lamp");

if (desk) {
  await studioRequest("/lighting/bulbs", {
    method: "POST",
    body: JSON.stringify({ bulbs: [{ id: desk.id, color: "#7f00ff" }] }),
  });
}
```

### Python

This example uses only Python's standard library:

```python
import json
from urllib.error import HTTPError
from urllib.request import Request, urlopen

BASE_URL = "http://127.0.0.1:9990/api/v1"


def studio_post(path, payload):
    request = Request(
        BASE_URL + path,
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urlopen(request, timeout=5) as response:
            return json.load(response)
    except HTTPError as error:
        details = json.load(error)
        raise RuntimeError(
            f"Sonoran Studio {error.code}: {details['message']}"
        ) from error


studio_post("/lighting/state", {"state": "enroute"})
```

### FiveM Lua

```lua
local studioUrl = "http://127.0.0.1:9990/api/v1/lighting/state"

local function setStudioLighting(state)
    PerformHttpRequest(studioUrl, function(statusCode, responseBody)
        if statusCode < 200 or statusCode >= 300 then
            print(("Sonoran Studio rejected %s: %s"):format(state, responseBody))
        end
    end, "POST", json.encode({ state = state }), {
        ["Content-Type"] = "application/json"
    })
end

setStudioLighting("lights")
```

## Legacy lighting endpoint

Existing integrations can continue to use:

```http
POST /lighting
Content-Type: application/json

{
  "state": "lights"
}
```

The default full URL is `http://127.0.0.1:9990/lighting`. Its state behavior and response codes match `POST /api/v1/lighting/state`. New integrations should use the versioned route.

## LAN access and authentication

The server binds only to `127.0.0.1` by default. This is the safest and recommended configuration.

To call Studio from another computer on the same trusted network:

1. Enable **Allow LAN control** at the bottom of the desktop Smart Lighting panel.
2. Select **Copy LAN token**.
3. Replace `127.0.0.1` with the Studio computer's private LAN address.
4. Send the token in `X-Sonoran-Token` or as a Bearer token.

```bash
curl --request POST http://192.168.1.50:9990/api/v1/lighting/state \
  --header 'Content-Type: application/json' \
  --header 'X-Sonoran-Token: YOUR_PRIVATE_TOKEN' \
  --data '{"state":"available"}'
```

```http
Authorization: Bearer YOUR_PRIVATE_TOKEN
```

Never put the token in a public repository, browser URL, stream overlay, or client-side webpage. LAN mode does not add TLS; use it only on a trusted private network. Do not expose port `9990` through a router or public firewall.

## Browser and security behavior

Native programs and command-line tools do not send an `Origin` header and can call the loopback API normally. Browser JavaScript is accepted only when its page is also served from `localhost`, `127.0.0.1`, or `::1`. Requests from public web origins are rejected to prevent a website from silently controlling local lights or Streamer.bot actions.

Request bodies are limited to 256 KiB. Provider credentials stay encrypted in the desktop app and are never accepted by or returned from this API.

## HTTP status codes

| Status | Meaning                                                               |
| ------ | --------------------------------------------------------------------- |
| `200`  | Request completed                                                     |
| `202`  | Temporary sequence accepted for local playback                        |
| `400`  | Invalid JSON field, state, bulb, sequence, event, or argument         |
| `403`  | Pro entitlement, LAN permission/token, or browser-origin check failed |
| `404`  | Endpoint does not exist                                               |
| `409`  | Current state prevents the change or no action is mapped to an event  |
| `413`  | Request body is larger than 256 KiB                                   |
| `415`  | A `POST` request did not use `application/json`                       |
| `500`  | Unexpected desktop error                                              |
| `503`  | Streamer.bot integration is unavailable                               |

Client code should use the HTTP status and the response's `message`; it should not depend on the exact wording of provider errors.
