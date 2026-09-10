---
description: >-
  The user_connected push event is sent to the game server when a user connects
  to the radio.
---

# User Connected

## User Connected

The `user_connected` push event is sent to the game server when a user connects to the radio.

```json
{
    "id": "", // Community ID
    "key": "", // Community API Key (Use to authenticate)
    "type": "user_connected",
    "payload": {
        "identity": "000-000-000-000"
    }
}
```
