---
description: >-
  The play_tone push event is sent to the game server when a dispatcher is
  sending a tone to one or more in-game speakers.
---

# Play Tone

## Play Tone

The `play_tone` push event is sent to the game server when a dispatcher is sending a tone to one or more in-game speakers.

These in-game speaker IDs are set from the [set-server-speakers](../api-endpoints/#set-in-game-speaker-locations) API endpoint.

```json
{
    "id": "", // Community ID
    "key": "", // Community API Key (Use to authenticate)
    "type": "play_tone",
    "payload": {
        // Tone audio file URLs in the order of "stack"
        "src": [
            "https://s3.sonoransoftware.com/radio/system/tones/signal_100.mp3",
        ],
        "ids": [
            "STATION_123",
            "STATION_456"
        ]
    }
}
```
