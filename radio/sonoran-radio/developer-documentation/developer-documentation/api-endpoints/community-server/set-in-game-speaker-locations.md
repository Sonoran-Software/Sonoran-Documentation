---
description: Sends a list of in-game speaker locations that the tone board can select.
---

# Set In-Game Speaker Locations

## Set In-Game Speaker Locations

<mark style="color:green;">`POST`</mark> `/radio/set-server-speakers`

Sends a list of in-game speaker locations that the tone board can select.

When played, the [play\_tone ](../../push-events/#play-tone)push event will be sent to your server's [pushUrl](set-in-game-speaker-locations.md#set-server-ip).

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

| Name        | Type                       | Description            |
| ----------- | -------------------------- | ---------------------- |
| `id`        | string                     | Community ID           |
| `key`       | string                     | Community API Key      |
| `locations` | array of `Location`objects | In-Game Tone Locations |

```json
// Location Object Array Structure
[
  {
    "label": "Fire Station 123" // STRING: Label for in-game location
    "id": "STATION_123" // STRING: Unique ID for in-game location
  },
  {
    "label": "Police Station ABC" // STRING: Label for in-game location
    "id": "STATION_456" // STRING: Unique ID for in-game location
  }
]
```

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
  "result": "ok"
}
```
{% endtab %}

{% tab title="400" %}
```json
{
  "error": "Invalid request"
}
```
{% endtab %}
{% endtabs %}
