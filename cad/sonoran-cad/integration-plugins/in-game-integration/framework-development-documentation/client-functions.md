---
description: >-
  This page will explain all exported functions from the SonoranCAD Core that
  can be used on the client side
---

# Client Functions

### getApiMode

Determines the API mode based on the configuration. This tells you which API URL is being used by the CAD for API Calls

```lua
exports.sonorancad.getApiMode()
```

{% tabs %}
{% tab title="Returns" %}
<table><thead><tr><th width="125">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>number</code></td><td><ul><li><code>1</code> for production mode (or if no mode is set in the configuration).</li><li><code>0</code> for development mode.</li></ul></td></tr></tbody></table>
{% endtab %}

{% tab title="Example Usage" %}
```lua
-- Example: Determining the API mode
Config = { mode = "development" }
local apiMode = getApiMode()
print(apiMode)  -- Output: 0 (development mode)

Config = { mode = nil }
local apiModeDefault = getApiMode()
print(apiModeDefault)  -- Output: 1 (default to production mode)

Config = { mode = "production" }
local apiModeProd = getApiMode()
print(apiModeProd)  -- Output: 1 (production mode)

```
{% endtab %}
{% endtabs %}
