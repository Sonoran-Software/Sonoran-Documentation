---
description: This push event is sent when a tone is played in the CAD.
---

# Tone Played

### EVENT\_TONE

```javascript
{
  "key": "YOUR_API_KEY", // Authenticate legitimate event traffic
  "type": "EVENT_TONE",
  "data": {
    "url": "https://s3.sonoransoftware.com/someTone.mp3",
    "playTonesTo": [
      {
        "type": 1, // Dispatch Call
        "value": 123, // Dispatch Call ID
        "label": "Dispatch Call 123"
      },
      {
        "type": 3, // Department
        "value": "Prescott PD",
        "label": "Prescott PD"
      },
    ]
  }
}
```

### playTonesTo Object

The[ tone board](../../tutorials/customization/tone-board.md) allows you to play tones to specific identifiers, dispatch calls, departments, and more. The `playTonesTo` array specifies who or what the tone was sent to.

#### type Enum

The `type` field is an enumerator value as follows:

| Enum (Integer) | Description                |
| -------------- | -------------------------- |
| 0              | All Active Units           |
| 1              | Specified Dispatch Call ID |
| 2              | Specified Agency           |
| 3              | Specified Department       |
| 4              | Specified Subdivision      |
| 5              | Specified Unit Identifier  |
| 6              | Specified Unit Group       |

#### value Property

The `value` property represents the specific target for the `type`.\
Ex: On a `type` `1` (dispatch call) the `value` would be a number representing the dispatch call ID.
