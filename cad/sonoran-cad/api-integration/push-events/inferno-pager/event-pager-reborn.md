---
description: This push event is sent when a new Inferno page is sent.
---

# Event Pager Reborn

### EVENT\_PAGER\_REBORN

```javascript
{
  "key": "YOUR_API_KEY", // Authenticate legitimate event traffic
  "type": "EVENT_PAGER_REBORN",
  "data": {
    "addresses": [
      "FIRE-1",
      "BATTALION-1"
    ],
    "identIds": [
      12,
      34
    ],
    "nature": "Administrative", // Emergency, NonEmergency, or Administrative
    "body": "Respond to briefing room."
  }
}
```

### Data Fields

* `addresses`: Array of routed Inferno pager address strings selected in CAD.
* `identIds`: Array of integer unit identifier IDs when paging specific online units directly.
* `nature`: String enum value. Possible values are `Emergency`, `NonEmergency`, and `Administrative`.
* `body`: Message body sent with the page.
