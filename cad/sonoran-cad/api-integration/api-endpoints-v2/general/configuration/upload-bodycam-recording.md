---
description: >-
  Upload a bodycam recording clip to Sonoran CAD through the dedicated v2
  bodycam endpoint.
---

# Upload Bodycam Recording

> **Rate limit:** `30 requests per minute`\
> Authenticated v2 endpoints are rate limited per API key rather than per IP address.

Upload a single bodycam clip into Sonoran CAD's bodycam recordings system through a dedicated v2 endpoint.

{% hint style="info" %}
This API endpoint is available on **Free** and higher Sonoran CAD plans. The rolling `24` hour upload allowance depends on your plan. For more information, see our [pricing](../../../../pricing/faq/).
{% endhint %}

## Endpoint

<mark style="color:green;">`POST`</mark> `https://api.sonorancad.com/v2/general/bodycam-recordings`

#### Request Type

`multipart/form-data`

#### Authentication

Use standard v2 bearer authentication:

| Header          | Value                 | Description                |
| --------------- | --------------------- | -------------------------- |
| `Authorization` | `Bearer YOUR_API_KEY` | Authenticates the request. |

#### Form Fields

| Name              | Type    | Required      | Description                                                                                                                 |
| ----------------- | ------- | ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `file`            | file    | Yes           | A single `.webm` clip to upload.                                                                                            |
| `accountUuid`     | string  | Conditionally | Account UUID that owns the recording. Provide exactly one of `accountUuid`, `communityUserId`, `roblox`, or `discord`.      |
| `communityUserId` | string  | Conditionally | Community user ID that owns the recording. Provide exactly one of `accountUuid`, `communityUserId`, `roblox`, or `discord`. |
| `roblox`          | integer | Conditionally | Roblox user ID linked to the account that owns the recording. Provide exactly one target identifier.                        |
| `discord`         | string  | Conditionally | Discord user ID linked to the account that owns the recording. Provide exactly one target identifier.                       |
| `durationMs`      | number  | Yes           | Clip duration in milliseconds. Must be between `1` and `120000`.                                                            |
| `identId`         | number  | No            | Identifier ID associated with the clip.                                                                                     |
| `unitNumber`      | string  | No            | Unit number to store with the recording metadata.                                                                           |
| `unitLocation`    | string  | No            | Unit location to store with the recording metadata.                                                                         |

The authenticated API key determines the community. You do **not** need to send `community`, `sessionId`, `username`, or `type=bodycam`.

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

## Example Request

{% tabs %}
{% tab title="Sonoran.lua" %}
```lua
local Sonoran = require("sonoran")

local sonoran = Sonoran.createClient({
  product = Sonoran.productEnums.CAD,
  apiKey = "YOUR_API_KEY",
  communityId = "YOUR_COMMUNITY_ID"
})

local file = assert(io.open("bodycam-clip.webm", "rb"))
local file_content = file:read("*a")
file:close()

local response = sonoran.cad:uploadBodycamRecordingV2({
  accountUuid = "USER_ACCOUNT_UUID",
  durationMs = 90000,
  identId = 123,
  unitNumber = "1A-12",
  unitLocation = "Senora Fwy / Route 68",
  fileName = "bodycam-clip.webm",
  fileContent = file_content,
  contentType = "video/webm"
})

print(response.success)
print(response.reason or "")
```
{% endtab %}

{% tab title="SonoranCADFiveM" %}
Use this tab only when calling the v2 API from the server side of an in-game FiveM resource.

* **Sonoran.lua** and **Sonoran.js:** use the `sonorancad` export to get the ready CAD client.
* **Sonoran.Net:** FiveM exports do not return a .NET client. Read the Sonoran CAD convars and create a fresh client.
* **Sonoran.py:** FiveM does not run Python resources; use the Python tab for external integrations.

The API key is stored in `sonoran_apiKey` as a protected FiveM convar. FiveM restricts a convar after `add_convar_permission` is configured, so only explicitly permitted resources can read it. Grant another resource access with `add_convar_permission your-resource-name read sonoran_apiKey`. If you change the API key in `config.json`, fully restart the `sonorancad` resource before reading the updated convar value.

**Sonoran.lua**

```lua
local cad = exports["sonorancad"]:getCadClient()
```

**Sonoran.js**

```javascript
const cad = exports["sonorancad"].getCadClient();
```

**Sonoran.Net**

```csharp
// dotnet add package Sonoran.Net
using CitizenFX.Core.Native;
using Sonoran;

var communityId = API.GetConvar("sonoran_communityID", "");
var apiKey = API.GetConvar("sonoran_apiKey", "");
var serverIdRaw = API.GetConvar("sonoran_serverId", "1");
var serverId = int.TryParse(serverIdRaw, out var parsedServerId) ? parsedServerId : 1;

using var sonoran = new SonoranClient(new SonoranClientOptions
{
    product = SonoranProduct.CAD,
    communityId = communityId,
    apiKey = apiKey,
    defaultServerId = serverId
});
```
{% endtab %}

{% tab title="Sonoran.js" %}
```javascript
const fs = require('fs');
const Sonoran = require('sonoran.js');

const sonoran = Sonoran.instance({
  product: Sonoran.productEnums.CAD,
  apiKey: 'YOUR_API_KEY',
  communityId: 'YOUR_COMMUNITY_ID'
});

const response = await sonoran.cad.uploadBodycamRecordingV2({
  accountUuid: 'USER_ACCOUNT_UUID',
  durationMs: 90000,
  identId: 123,
  unitNumber: '1A-12',
  unitLocation: 'Senora Fwy / Route 68',
  fileName: 'bodycam-clip.webm',
  fileContent: fs.readFileSync('./bodycam-clip.webm'),
  contentType: 'video/webm'
});

console.log(response);
```
{% endtab %}

{% tab title="Sonoran.py" %}
```python
from sonoran import Instance, productEnums

instance = Instance(
    apiKey="YOUR_API_KEY",
    communityId="YOUR_COMMUNITY_ID",
    product=productEnums.CAD,
)

with open("bodycam-clip.webm", "rb") as clip:
    response = instance.cad.uploadBodycamRecordingV2(
        {
            "accountUuid": "USER_ACCOUNT_UUID",
            "durationMs": 90000,
            "identId": 123,
            "unitNumber": "1A-12",
            "unitLocation": "Senora Fwy / Route 68",
            "fileName": "bodycam-clip.webm",
            "fileContent": clip.read(),
            "contentType": "video/webm",
        }
    )

print(response)
```
{% endtab %}

{% tab title="Sonoran.Net" %}
```csharp
using Sonoran;

using var sonoran = new SonoranClient(new SonoranClientOptions
{
    product = SonoranProduct.CAD,
    apiKey = "YOUR_API_KEY",
    communityId = "YOUR_COMMUNITY_ID"
});

SonoranResponse response = await sonoran.Cad.uploadBodycamRecordingV2(new UploadBodycamRecordingV2Request
{
    AccountUuid = "USER_ACCOUNT_UUID",
    DurationMs = 90000,
    IdentId = 123,
    UnitNumber = "1A-12",
    UnitLocation = "Senora Fwy / Route 68",
    FileName = "bodycam-clip.webm",
    FileContent = await File.ReadAllBytesAsync("bodycam-clip.webm"),
    ContentType = "video/webm"
});

Console.WriteLine(response.success);
Console.WriteLine(response.data);
```
{% endtab %}

{% tab title="OpenAPI" %}
Import this YAML into Postman with **Import -> Raw text** to create a single-endpoint request collection for this route.

```yaml
openapi: "3.0.3"
info:
  title: "Sonoran CAD v2 - Upload Bodycam Recording"
  version: "1.0.0"
  description: "Upload a bodycam recording clip through the dedicated v2 bodycam endpoint."
servers:
  -
    url: "https://api.sonorancad.com"
paths:
  /v2/general/bodycam-recordings:
    post:
      summary: "Upload Bodycam Recording"
      operationId: "uploadBodycamRecording"
      requestBody:
        required: true
        content:
          multipart/form-data:
            schema:
              type: "object"
              required:
                - "file"
                - "durationMs"
              properties:
                file:
                  type: "string"
                  format: "binary"
                accountUuid:
                  type: "string"
                  format: "uuid"
                communityUserId:
                  type: "string"
                durationMs:
                  type: "integer"
                  minimum: 1
                  maximum: 120000
                identId:
                  type: "integer"
                unitNumber:
                  type: "string"
                unitLocation:
                  type: "string"
      responses:
        200:
          description: "Successful response"
          content:
            application/json:
              schema:
                type: "array"
                items:
                  type: "string"
              example:
                - "https://files.example.com/bodycam/community/unit/clip.webm"
        400:
          description: "Validation or upload error"
          content:
            application/problem+json:
              schema:
                type: "object"
              example:
                title: "Unable to upload bodycam recording"
                status: 400
                detail: "Bodycam uploads must be webm files."
      security:
        -
          bearerAuth:
components:
  securitySchemes:
    bearerAuth:
      type: "http"
      scheme: "bearer"
      bearerFormat: "JWT"
```
{% endtab %}

{% tab title="cURL" %}
```bash
curl --request POST \
  --url "https://api.sonorancad.com/v2/general/bodycam-recordings" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --form "file=@bodycam-clip.webm;type=video/webm" \
  --form "accountUuid=USER_ACCOUNT_UUID" \
  --form "durationMs=90000" \
  --form "identId=123" \
  --form "unitNumber=1A-12" \
  --form "unitLocation=Senora Fwy / Route 68"
```
{% endtab %}
{% endtabs %}

## Response

Successful requests return the uploaded file URL list.

```json
[
  "https://files.example.com/bodycam/community/unit/clip.webm"
]
```

## Common Errors

```http
Provide exactly one of `accountUuid`, `communityUserId`, `roblox`, or `discord`.
Account USER_ACCOUNT_UUID was not found in this community.
File exceeds 6000000 bytes.
Bodycam uploads must be webm files.
Bodycam uploads are limited to 10 minutes per 24 hours for the FREE plan.
Uploaded bodycam clip but failed to save recording metadata.
```
