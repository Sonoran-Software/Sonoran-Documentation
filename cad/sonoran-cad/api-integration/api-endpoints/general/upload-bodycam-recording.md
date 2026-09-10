---
description: Upload a bodycam recording clip to Sonoran CAD.
---

# Upload Bodycam Recording

{% hint style="warning" %}
For new external integrations, prefer the dedicated v2 route: [`POST /v2/general/bodycam-recordings`](../../api-endpoints-v2/general/configuration/upload-bodycam-recording.md).
{% endhint %}

{% hint style="info" %}
This API endpoint is available on **Free** and higher Sonoran CAD plans. The rolling `24` hour upload allowance depends on your plan. For more information, see our [pricing](../../../pricing/faq/).
{% endhint %}

Use this endpoint to upload a single bodycam clip into Sonoran CAD's bodycam recordings system.

## Upload Bodycam Recording

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/upload`

#### Request Type

`multipart/form-data`

#### Form Fields

| Name         | Type   | Required | Description                                                      |
| ------------ | ------ | -------- | ---------------------------------------------------------------- |
| file         | file   | yes      | A single `.webm` clip to upload.                                 |
| community    | string | yes      | Your community ID.                                               |
| account      | string | yes      | The user's account UUID.                                         |
| sessionId    | string | yes      | The user's active session UUID.                                  |
| username     | string | yes      | The user's Sonoran CAD username.                                 |
| type         | string | yes      | Must be `bodycam`.                                               |
| durationMs   | number | yes      | Clip duration in milliseconds. Must be between `1` and `120000`. |
| identId      | string | no       | Identifier ID associated with the clip.                          |
| unitNumber   | string | no       | Unit number to store with the recording metadata.                |
| unitLocation | string | no       | Unit location to store with the recording metadata.              |

## Upload Limits

| Limit                 | Value                       |
| --------------------- | --------------------------- |
| Max files per request | `1`                         |
| Allowed file type     | `.webm`                     |
| Max file size         | `6000000` bytes (`6 MB`)    |
| Max clip duration     | `120000` ms (`120` seconds) |

Bodycam uploads are also limited by your community's rolling `24` hour plan allowance:

| Plan     | Max uploaded bodycam minutes per 24 hours |
| -------- | ----------------------------------------- |
| Free     | `10`                                      |
| Standard | `100`                                     |
| Pro      | `1000`                                    |

## Frontend Video Target

The backend validates the file type, file size, and duration. It does **not** directly reject uploads by resolution or frame rate.

To match the built-in Sonoran CAD frontend bodycam flow and stay within the `6 MB` upload limit, send clips using these target settings:

| Setting    | Target    |
| ---------- | --------- |
| Resolution | `960x540` |
| Frame rate | `10 FPS`  |
| Format     | `webm`    |

The built-in frontend bodycam capture requests `960x540` at `10 FPS`, and the recording uploader encodes clips as WebM with a `300000` bps video bitrate and `64000` bps audio bitrate. Third-party integrations should match those settings as closely as possible.

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```json
[
  "https://files.example.com/bodycam/community/unit/clip.webm"
]
```
{% endtab %}

{% tab title="400 The following errors may be sent in response:" %}
```http
Error: Invalid account ID.
Error: Invalid session ID.
Error: Bodycam clips must be between 1ms and 120000ms.
Error: Unable to validate bodycam upload session.
Error: Bodycam uploads must be webm files.
Error: Uploaded bodycam clip but failed to save recording metadata.
```
{% endtab %}
{% endtabs %}

```javascript
const formData = new FormData();
formData.append('file', bodycamBlob, 'bodycam-clip.webm');
formData.append('community', 'YOUR_COMMUNITY_ID');
formData.append('account', 'USER_ACCOUNT_UUID');
formData.append('sessionId', 'USER_SESSION_UUID');
formData.append('username', 'SonoranUsername');
formData.append('type', 'bodycam');
formData.append('durationMs', '90000');
formData.append('identId', '123');
formData.append('unitNumber', '1A-12');
formData.append('unitLocation', 'Senora Fwy / Route 68');

fetch('https://api.sonorancad.com/upload', {
  method: 'POST',
  body: formData,
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```
