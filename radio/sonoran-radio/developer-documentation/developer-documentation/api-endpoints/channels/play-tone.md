---
description: This endpoint plays a tone (or multiple tones) in the radio.
---

# Play Tone

## Play Tone

<mark style="color:green;">`POST`</mark> `/api/play-tone`

This endpoint plays one or more tones for radio participants.

**Headers**

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |

**Request (Body)**

```typescript
interface Tone {
  id: number;
  color: string;
  textColor: string;
  label: string;
  icon: string;
  /**
   * An audio file URL
   */
  src?: string;
  /**
   * Optional local text-to-speech text.
   * If provided without src, supported radio clients will generate and play the audio locally.
   */
  tts?: string;
}

interface Request {
  /** The community ID */
  id: string;
  /** The community API key */
  key: string;

  /** Which room (server id) to play tones for */
  roomId: number;
  /**
   * Tones to play.
   * You can provide either:
   * - a saved tone ID from the community tone list
   * - a full Tone object
   */
  tones: Array;
  
  /** where to play the tones */
  playTo: {
    type: "channel" | "group" | "game";
    /**
      if type === 'channel', the channel ID
      if type === 'group', the group ID
      if type === 'game', the speaker ID (in speakers.json)
    */
    value: any;
  }[];
}

```

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
  "result": "ok",
  "code": 200
}
```
{% endtab %}
{% endtabs %}

You can use a full `Tone` object when you need to play a temporary or external tone without first saving it to the community tone list.

Supported `Tone` object options:

* `src` as an audio file URL ending in a supported audio extension such as `.mp3`, `.wav`, or `.ogg`
* `tts` as a text string for local text-to-speech playback on supported radio clients

Notes:

* A tone must include either `src` or `tts`
* `tts` playback is generated locally by supported radio clients
* In-game speaker playback requires `src`, since game clients need a playable audio URL

Audio File URL Example:

```json
{
  "id": "community-id",
  "key": "community-api-key",
  "roomId": 1,
  "tones": [
    {
      "id": -1,
      "color": "#647492",
      "textColor": "text-white",
      "label": "Custom Tone",
      "icon": "fas fa-volume-high",
      "src": "https://example.com/custom-tone.mp3"
    }
  ],
  "playTo": [
    {
      "type": "channel",
      "value": 123
    }
  ]
}
```

Text-To-Speech Example:

```json
{
  "id": "community-id",
  "key": "community-api-key",
  "roomId": 1,
  "tones": [
    {
      "id": -1,
      "color": "#647492",
      "textColor": "text-white",
      "label": "Dispatch TTS",
      "icon": "fas fa-wand-magic-sparkles",
      "tts": "Engine 51 respond code 3"
    }
  ],
  "playTo": [
    {
      "type": "channel",
      "value": 123
    }
  ]
}
```
