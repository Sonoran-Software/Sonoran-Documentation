---
description: >-
  This page will explain all client events from the SonoranCAD Core that can be
  used on the client side
---

# Client Events

### Bodycam Record Toggle

This client event triggers a bodycam recording using a custom trigger name. This event requires the [Body Camera submodule](../available-plugins/bodycam.md) to be enabled.

```lua
TriggerEvent('SonoranCAD::bodycam::AutoRecordTrigger', triggerName)
```

{% tabs %}
{% tab title="Parameters" %}
<table><thead><tr><th width="188">Name</th><th width="106">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>triggerName</code></td><td><code>string</code></td><td>A custom label describing what caused the recording to start.</td></tr></tbody></table>
{% endtab %}

{% tab title="Example Usage" %}
```lua
RegisterCommand('bodycamclip', function()
    TriggerEvent('SonoranCAD::bodycam::AutoRecordTrigger', 'manual-clip')
end, false)
```
{% endtab %}
{% endtabs %}

Use this event from your own client-side scripts whenever you want to create a bodycam clip for a specific gameplay action.
