---
description: >-
  This push event is sent when a user selects a new character in the civilian
  page.
---

# Character Selected

### EVENT\_CHAR\_SELECTED

```javascript
{
  "key": "YOUR_API_KEY", // Authenticate legitimate event traffic
  "type": "EVENT_CHAR_SELECTED",
  "data": {
    "accId": 000-000-000, // SSO GUID of user account
    "id": 1, // numerical record ID OR DB sync key string (steam hex, license, etc.)
  }
}
```
