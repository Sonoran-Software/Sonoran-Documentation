---
description: Integrate the Sonoran Radio Stream Deck plugin with desktop or FiveM.
---

# Stream Deck API

Sonoran Radio includes a Stream Deck plugin that can control the desktop application directly or control the FiveM radio through the desktop app.

This document covers the public integration contract for:

* the built-in **desktop bridge** exposed by the Electron app
* the built-in **FiveM bridge** exposed by the Electron app when Stream Deck actions are set to `FiveM`

## Overview

Each Stream Deck action is configured with a target:

* `Desktop` sends commands directly to Sonoran Radio Desktop
* `FiveM` sends commands to Sonoran Radio Desktop, which forwards them to a FiveM client over localhost

The plugin uses the same command and snapshot schema for both targets. The difference is transport:

* `Desktop` uses local HTTP requests to Sonoran Radio Desktop
* `FiveM` uses local HTTP requests to Sonoran Radio Desktop, and Sonoran Radio Desktop forwards commands and receives snapshots over a local WebSocket connected by your FiveM client script

## Recommended FiveM Architecture

When the Stream Deck action target is set to `FiveM`, the recommended flow is:

```
Stream Deck Plugin
  -> Sonoran Radio Desktop HTTP bridge
  -> local FiveM WebSocket client
  -> FiveM client script
  -> Sonoran Radio iframe/NUI

Sonoran Radio iframe/NUI
  -> FiveM client script
  -> local FiveM WebSocket client
  -> Sonoran Radio Desktop snapshot cache
  -> Stream Deck Plugin label/status polling
```

This means the Stream Deck plugin does not need to talk to the FiveM NUI directly anymore. As long as:

1. Sonoran Radio Desktop is running
2. the Stream Deck action is set to `FiveM`
3. your FiveM client script is connected to the desktop WebSocket
4. your FiveM client script forwards commands to the iframe and forwards snapshots back to desktop

the plugin will behave the same as normal.

## Desktop Bridge

When Sonoran Radio Desktop is running, it starts a local HTTP bridge on:

```
http://127.0.0.1:39112
```

### Health Check

`GET /streamdeck/health`

Response:

```json
{
  "ok": true,
  "appReady": true,
  "snapshotReady": true,
  "attempts": 1,
  "lastError": null
}
```

### Get Current Snapshot

`GET /streamdeck/labels`

Response:

```json
{
  "ok": true,
  "appReady": true,
  "channels": [
    {
      "id": 101,
      "label": "Law 1",
      "groupId": 10,
      "groupName": "Patrol"
    }
  ],
  "state": {
    "connected": true,
    "aiEnabled": false,
    "micOpen": false,
    "primaryChIds": [101],
    "scannedChIds": [102, 103],
    "sfxVolume": 25,
    "agentGain": 100
  }
}
```

### Send a Command

`POST /streamdeck/command`

Headers:

```http
Content-Type: application/json
```

Example request:

```json
{
  "command": "transmit.ptt",
  "phase": "down"
}
```

Example response:

```json
{
  "ok": true,
  "command": "transmit.ptt"
}
```

If the command is invalid, the radio is not ready, or the payload is malformed, the bridge returns a non-200 response.

## FiveM Desktop Bridge

When the Stream Deck action target is set to `FiveM`, the plugin first talks to the desktop app at:

```
http://127.0.0.1:39112
```

The desktop app then talks to your FiveM client over:

```
ws://127.0.0.1:39112/streamdeck/fivem/socket
```

### Health Check

`GET /streamdeck/fivem/health`

Response:

```json
{
  "ok": true,
  "socketPath": "/streamdeck/fivem/socket",
  "websocketClients": 1,
  "snapshotReady": true,
  "attempts": 1,
  "lastError": null
}
```

### Get Current FiveM Snapshot

`GET /streamdeck/fivem/labels`

Response:

```json
{
  "ok": true,
  "websocketClients": 1,
  "snapshotReady": true,
  "channels": [
    {
      "id": 101,
      "label": "Law 1",
      "groupId": 10,
      "groupName": "Patrol"
    }
  ],
  "state": {
    "connected": true,
    "aiEnabled": false,
    "micOpen": false,
    "primaryChIds": [101],
    "scannedChIds": [102, 103],
    "sfxVolume": 25,
    "agentGain": 100
  }
}
```

### Forward a Command to FiveM

`POST /streamdeck/fivem/command`

Headers:

```http
Content-Type: application/json
```

Request:

```json
{
  "command": "transmit.ptt",
  "phase": "down"
}
```

Response:

```json
{
  "ok": true,
  "command": "transmit.ptt",
  "delivered": 1
}
```

If no FiveM socket clients are connected, the desktop app returns a non-200 response.

## WebSocket Message Contract

Your FiveM client should connect to:

```
ws://127.0.0.1:39112/streamdeck/fivem/socket
```

### Messages Sent From Desktop to FiveM

#### `hello`

Sent immediately after the socket connects.

```json
{
  "type": "hello",
  "ok": true,
  "snapshot": {
    "channels": [],
    "state": {
      "connected": false,
      "aiEnabled": false,
      "micOpen": false,
      "primaryChIds": [],
      "scannedChIds": [],
      "sfxVolume": 0,
      "agentGain": 0
    }
  }
}
```

#### `streamdeck_command`

Sent when a Stream Deck action is pressed/rotated while targeting `FiveM`.

```json
{
  "type": "streamdeck_command",
  "payload": {
    "command": "transmit.toggleChannels",
    "channelIds": [101, 102]
  }
}
```

#### `streamdeck_snapshot`

Sent when the FiveM client explicitly requests the latest cached snapshot.

```json
{
  "type": "streamdeck_snapshot",
  "snapshot": {
    "channels": [],
    "state": {
      "connected": false,
      "aiEnabled": false,
      "micOpen": false,
      "primaryChIds": [],
      "scannedChIds": [],
      "sfxVolume": 0,
      "agentGain": 0
    }
  }
}
```

### Messages Sent From FiveM to Desktop

#### `streamdeck_snapshot`

Send this whenever the iframe publishes a new radio snapshot.

```json
{
  "type": "streamdeck_snapshot",
  "snapshot": {
    "channels": [
      {
        "id": 101,
        "label": "Law 1",
        "groupId": 10,
        "groupName": "Patrol"
      }
    ],
    "state": {
      "connected": true,
      "aiEnabled": false,
      "micOpen": false,
      "primaryChIds": [101],
      "scannedChIds": [102, 103],
      "sfxVolume": 25,
      "agentGain": 100
    }
  }
}
```

#### `streamdeck_snapshot_request`

Optional. Ask the desktop app to send back its current cached snapshot.

```json
{
  "type": "streamdeck_snapshot_request"
}
```

### Optional Acknowledgements

The desktop app may reply with:

* `streamdeck_snapshot_ack`
* `streamdeck_command_ack`

These are informational and do not need special handling.

## Command Payload

All commands use the same JSON shape:

```json
{
  "command": "string",
  "phase": "down",
  "channelId": 101,
  "channelIds": [101, 102]
}
```

Fields:

| Field        | Type               | Required    | Notes                                         |
| ------------ | ------------------ | ----------- | --------------------------------------------- |
| `command`    | string             | Yes         | One of the supported command IDs listed below |
| `phase`      | `"down"` or `"up"` | No          | Defaults to `"down"` if omitted               |
| `channelId`  | number             | Conditional | Used by single-channel commands               |
| `channelIds` | number\[]          | Conditional | Used by multi-channel commands                |

### Phase Rules

Most commands execute on `phase: "down"`.

The following hold-style commands use both phases:

* `transmit.ptt`
* `transmit.tempChannel`

For those commands:

* send `phase: "down"` when the button is pressed
* send `phase: "up"` when the button is released

### Supported Commands

| Command                     | Extra Fields         | Description                                           |
| --------------------------- | -------------------- | ----------------------------------------------------- |
| `group.next`                | None                 | Move to the next channel group                        |
| `group.previous`            | None                 | Move to the previous channel group                    |
| `channel.next`              | None                 | Move to the next channel within the current group     |
| `channel.previous`          | None                 | Move to the previous channel within the current group |
| `transmit.toggleChannels`   | `channelIds`         | Toggle one or more transmit channels                  |
| `transmit.tempChannel`      | `channelId`, `phase` | Temporarily transmit on a single channel while held   |
| `scan.toggleChannels`       | `channelIds`         | Toggle one or more scan channels                      |
| `toggle.ai`                 | None                 | Toggle AI on or off                                   |
| `transmit.ptt`              | `phase`              | Push-to-talk                                          |
| `toggle.toneBoard`          | None                 | Open or close the tone board                          |
| `audio.volumeUp`            | None                 | Increase master volume                                |
| `audio.volumeDown`          | None                 | Decrease master volume                                |
| `audio.volumeMute`          | None                 | Toggle master mute                                    |
| `audio.sfxUp`               | None                 | Increase SFX volume                                   |
| `audio.sfxDown`             | None                 | Decrease SFX volume                                   |
| `audio.sfxMute`             | None                 | Toggle SFX mute                                       |
| `audio.aiUp`                | None                 | Increase AI volume                                    |
| `audio.aiDown`              | None                 | Decrease AI volume                                    |
| `audio.aiMute`              | None                 | Toggle AI mute                                        |
| `audio.currentChannelsUp`   | None                 | Increase current primary channel volume               |
| `audio.currentChannelsDown` | None                 | Decrease current primary channel volume               |
| `audio.currentChannelsMute` | None                 | Toggle mute for current primary channels              |
| `desktop.connectedUsers`    | None                 | Open the connected users window                       |
| `desktop.focusRadio`        | None                 | Focus the Sonoran Radio desktop window                |
| `desktop.toggleRadio`       | None                 | Show or hide the Sonoran Radio desktop window         |

## Snapshot Schema

The plugin reads a snapshot to populate action configuration, channel selectors, and active button state.

```json
{
  "channels": [
    {
      "id": 101,
      "label": "Law 1",
      "groupId": 10,
      "groupName": "Patrol"
    }
  ],
  "state": {
    "connected": true,
    "aiEnabled": false,
    "micOpen": false,
    "primaryChIds": [101],
    "scannedChIds": [102, 103],
    "sfxVolume": 25,
    "agentGain": 100
  }
}
```

### Channels

| Field       | Type   | Description                      |
| ----------- | ------ | -------------------------------- |
| `id`        | number | Channel/profile ID               |
| `label`     | string | Display name shown in the plugin |
| `groupId`   | number | Parent group ID                  |
| `groupName` | string | Parent group display name        |

### State

| Field          | Type      | Description                                    |
| -------------- | --------- | ---------------------------------------------- |
| `connected`    | boolean   | Whether the radio is currently connected       |
| `aiEnabled`    | boolean   | Whether AI is enabled                          |
| `micOpen`      | boolean   | Whether the microphone/PTT is currently active |
| `primaryChIds` | number\[] | Current transmit channels                      |
| `scannedChIds` | number\[] | Current scan channels                          |
| `sfxVolume`    | number    | Current SFX volume                             |
| `agentGain`    | number    | Current AI volume                              |

## FiveM Iframe Message Contract

Inside the FiveM web view, Sonoran Radio uses iframe messages for Stream Deck integration.

### Messages Sent To Sonoran Radio

#### `streamdeck_command`

Send a standard command payload:

```json
{
  "type": "streamdeck_command",
  "payload": {
    "command": "transmit.toggleChannels",
    "channelIds": [101, 102]
  }
}
```

#### `streamdeck_snapshot_request`

Request that the iframe publish its latest state:

```json
{
  "type": "streamdeck_snapshot_request"
}
```

### Messages Sent From Sonoran Radio

#### `streamdeck_snapshot`

The iframe emits this message whenever radio/channel state changes and also in response to `streamdeck_snapshot_request`.

```json
{
  "type": "streamdeck_snapshot",
  "snapshot": {
    "channels": [
      {
        "id": 101,
        "label": "Law 1",
        "groupId": 10,
        "groupName": "Patrol"
      }
    ],
    "state": {
      "connected": true,
      "aiEnabled": false,
      "micOpen": false,
      "primaryChIds": [101],
      "scannedChIds": [102, 103],
      "sfxVolume": 25,
      "agentGain": 100
    }
  }
}
```

## FiveM JavaScript Example

The following browser-side example shows the minimum bridge needed in FiveM to make Stream Deck `FiveM` mode work through Sonoran Radio Desktop.

This example assumes:

* your FiveM client script can open a browser WebSocket to `ws://127.0.0.1:39112/streamdeck/fivem/socket`
* your client script can forward messages to the Sonoran Radio iframe/NUI
* your iframe/NUI can send `streamdeck_snapshot` messages back to this script

```js
const DESKTOP_SOCKET_URL = 'ws://127.0.0.1:39112/streamdeck/fivem/socket';

let desktopSocket = null;
let reconnectTimer = null;
let latestSnapshot = {
  channels: [],
  state: {
    connected: false,
    aiEnabled: false,
    micOpen: false,
    primaryChIds: [],
    scannedChIds: [],
    sfxVolume: 0,
    agentGain: 0,
  },
};

function postToRadioIframe(message) {
  window.postMessage(message, '*');
}

function sendToDesktop(message) {
  if (!desktopSocket || desktopSocket.readyState !== WebSocket.OPEN) return;
  desktopSocket.send(JSON.stringify(message));
}

function scheduleReconnect() {
  if (reconnectTimer) return;
  reconnectTimer = window.setTimeout(() => {
    reconnectTimer = null;
    connectDesktopSocket();
  }, 3000);
}

function handleDesktopMessage(message) {
  if (!message || typeof message.type !== 'string') return;

  if (message.type === 'hello' && message.snapshot) {
    latestSnapshot = message.snapshot;
    return;
  }

  if (message.type === 'streamdeck_command' && message.payload) {
    postToRadioIframe({
      type: 'streamdeck_command',
      payload: message.payload,
    });
    return;
  }

  if (message.type === 'streamdeck_snapshot') {
    latestSnapshot = message.snapshot || latestSnapshot;
  }
}

function connectDesktopSocket() {
  if (desktopSocket && (desktopSocket.readyState === WebSocket.OPEN || desktopSocket.readyState === WebSocket.CONNECTING)) {
    return;
  }

  desktopSocket = new WebSocket(DESKTOP_SOCKET_URL);

  desktopSocket.addEventListener('open', () => {
    sendToDesktop({
      type: 'streamdeck_snapshot',
      snapshot: latestSnapshot,
    });
  });

  desktopSocket.addEventListener('message', (event) => {
    try {
      handleDesktopMessage(JSON.parse(event.data));
    } catch (error) {
      console.error('Failed to parse desktop Stream Deck message', error);
    }
  });

  desktopSocket.addEventListener('close', scheduleReconnect);
  desktopSocket.addEventListener('error', scheduleReconnect);
}

window.addEventListener('message', (event) => {
  const data = event.data;
  if (!data || typeof data.type !== 'string') return;

  if (data.type === 'streamdeck_snapshot' && data.snapshot) {
    latestSnapshot = data.snapshot;
    sendToDesktop({
      type: 'streamdeck_snapshot',
      snapshot: data.snapshot,
    });
    return;
  }

  if (data.type === 'streamdeck_snapshot_request') {
    postToRadioIframe({ type: 'streamdeck_snapshot_request' });
  }
});

connectDesktopSocket();
```

## Notes

* Use channel IDs exactly as returned by the snapshot.
* `transmit.tempChannel` and `transmit.ptt` should send both press and release phases.
* Multi-channel commands should send `channelIds` as an array of numbers.
* Your FiveM client does not need to translate command names or payload fields. Forward them exactly as documented.
* The desktop app caches the most recent FiveM snapshot, so send `streamdeck_snapshot` whenever radio state changes inside the iframe.
