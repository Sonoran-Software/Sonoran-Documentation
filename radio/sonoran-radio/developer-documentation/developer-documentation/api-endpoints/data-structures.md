---
description: Common data structures for API requests and responses.
---

# Data Structures

### Connected User Metadata

User metadata stores the user's transmitting and scanned channel IDs.

```json
{
  "sonrad": true,
  "state": {
    "primaryChId": 19,
    "scannedChIds": [175, 176, 215, 216, 217, 218, 219, 220, 221],
    "scanLists": [
      {
        "id": 0,
        "name": "City Scan List",
        "channelIds": [20, 19, 173]
      },
      {
        "id": 1,
        "name": "County Example Scan List",
        "channelIds": [176, 175]
      }
    ],
    "spec": 2
  }
}
```
