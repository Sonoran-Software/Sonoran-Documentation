---
description: Get a download URL to a pre-configured Sonoran CAD resource.
---

# FiveM Download

## FiveM Download

<mark style="color:green;">`GET`</mark>`https://api.sonorancad.com/download/fivem/<ID>/<KEY>`

This endpoint allows you to retrieve a download URL for a community's pre-configured FiveM installation.

### Response Body

{% tabs %}
{% tab title="200 A successful call will be met with the following response:" %}
```json
{
  "download": "https://s3.sonoransoftware.com/cad/temp/temp_e3ed4ee2-35f1-427e-a799-3771bbec4c75_resource.zip",
  "configLines": [
    "# Sonoran CAD",
    "ensure pNotify",
    "ensure wk_wars2x",
    "ensure sonorancad",
    "ensure tablet",
    "# permissions for Sonoran CAD auto-updater (REQUIRED)",
    "add_ace resource.sonorancad command allow",
    "add_ace resource.sonoran_updatehelper command allow"
  ]
}
```
{% endtab %}

{% tab title="404 The following 400 errors may be sent in response:" %}
```http
INVALID COMMUNITY ID OR KEY
```
{% endtab %}
{% endtabs %}

### Response Properties

The `download` URL will be a temporary link to a pre-configured ZIP.

The `configLines` will be a string array of lines to add to the `server.cfg` to start the CAD resource.

`pNotify` may still appear in the generated `configLines` because it is bundled with the default FiveM package, but user-facing notification routing is now configured centrally in `sonorancad/configuration/config.json` via `notificationSystem`, not per submodule.

For more information, view the [pre-configured installation guide](../../../integration-plugins/in-game-integration/fivem-installation/#pre-configured-resource-installation-recommended).
