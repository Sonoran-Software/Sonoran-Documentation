---
description: >-
  The EVENT_STREETSIGN_UPDATED push event notifies your server when a street
  sign has been updated from the CAD.
---

# Sign Updated

### EVENT\_STREETSIGN\_UPDATED

```javascript
{
  "key": "YOUR_API_KEY", // Authenticate legitimate event traffic
  "type": "EVENT_STREETSIGN_UPDATED",
  "data": {
    "signData": {
      "ids": [1, 2],
      "text1": "",
      "text2": "",
      "text3": ""
    }
  }
}
```
