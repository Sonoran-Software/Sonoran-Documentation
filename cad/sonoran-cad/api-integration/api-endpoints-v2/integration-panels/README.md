---
description: >-
  Build live, interactive CAD panels for third-party systems and in-game
  scripts.
---

# Integration Panels

Integration Panels put live data and controls from an existing game script or external service directly inside Sonoran CAD. Instead of building and maintaining a custom CAD frontend for every integration, define the panel once with JSON and connect it to your system through the v2 API.

Your integration remains the source of truth. It publishes the latest state to CAD, where authorized users can monitor and interact with it. Their button, toggle, select, and input actions are sent back to your integration to process. State changes made in-game or in CAD stay synchronized for every connected CAD user.

Use an Integration Panel when dispatchers or responders need to see or control part of another system without leaving CAD—for example, active fire alarms, facility door locks, tow requests, or fleet condition.

{% hint style="info" %}
Start with the [visual panel builder](https://sonorancad.com/integration-panel-builder). For the fastest implementation, use the Claude and Codex plugins or MCP tools at [sonoransoftware.com/developers](https://sonoransoftware.com/developers) to generate and refine your manifest and integration code.
{% endhint %}

## Examples

Start with a complete example, then replace its definition, state, and actions with data from your resource.

| [Fire Alarm](examples/fire-alarm.md)                                                               | [Door Locks](examples/door-locks.md)                                                               |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [![Fire Alarm integration panel](../../../.gitbook/assets/fire-alarm.png)](examples/fire-alarm.md) | [![Door Locks integration panel](../../../.gitbook/assets/door-locks.png)](examples/door-locks.md) |
| Sync active alarms, play an alert sound, and control alarm state.                                  | Monitor police and jail doors, then lock or unlock them from CAD.                                  |

| [Tow and Impound](examples/tow-impound.md)                                                                | [Fleet Management](examples/fleet-management.md)                                                                     |
| --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [![Tow and Impound integration panel](../../../.gitbook/assets/tow-impound.png)](examples/tow-impound.md) | [![Fleet Management integration panel](../../../.gitbook/assets/fleet-management.png)](examples/fleet-management.md) |
| Show incoming tow requests and move each request through its workflow.                                    | Group fleet vehicles, monitor their condition, and request repairs.                                                  |

[View all examples](examples/)

## How It Works

1. **Define:** Create or replace a reusable panel definition for the community. The definition controls layout, components, bindings, search, sorting, styling, sounds, and available actions.
2. **Publish:** Send the complete current state whenever the game script or external system changes. Connected CAD clients update live.
3. **Act:** A CAD user changes a control or presses a button. CAD adds that action and its values to the panel's action queue.
4. **Process:** Your server-side integration polls the queue, applies the change to its system, acknowledges the result, and publishes the resulting state.

Keep API calls and credentials on the server. A FiveM client script should send changes to its server-side resource, which then communicates with the CAD API.

Use a stable `panelKey` for the integration and an `instanceKey` for each independent dataset, location, or controller. For example, a door integration could use `doors` as the panel key and `mission-row` as the instance key.

## SDK Helpers

Sonoran.lua, Sonoran.js, Sonoran.py, and Sonoran.Net expose the same helper names. Lua calls them with `:`; the other libraries use `.`.

| Task                           | Helper                                |
| ------------------------------ | ------------------------------------- |
| List panels                    | `getIntegrationPanelsV2`              |
| Get one panel                  | `getIntegrationPanelV2`               |
| Create or replace a definition | `setIntegrationPanelV2`               |
| Delete a panel                 | `deleteIntegrationPanelV2`            |
| Replace live state             | `setIntegrationPanelStateV2`          |
| Poll CAD actions               | `getIntegrationPanelActionsV2`        |
| Acknowledge an action          | `acknowledgeIntegrationPanelActionV2` |

## Capabilities

* Responsive rows, columns, grids, sections, and repeated state collections
* Text, icons, badges, alerts, inputs, selects, toggles, checkboxes, and buttons
* State, repeated-item, input, and current-control bindings
* Search, named sort choices, conditions, confirmation prompts, and theme-safe styling
* Built-in pulse animations and state- or action-triggered sound effects
* Live API-to-CAD state updates and CAD-to-integration action events

## Limits

| Resource                       | Limit                                                          |
| ------------------------------ | -------------------------------------------------------------- |
| Active panels per community    | 50                                                             |
| Instances per panel and server | 100                                                            |
| Definition                     | 128 KiB; 200 root body nodes                                   |
| State per instance             | 512 KiB                                                        |
| Action result                  | 32 KiB                                                         |
| Sounds per definition          | 20                                                             |
| Panel name                     | 80 characters                                                  |
| Panel and instance keys        | 2-80 lowercase letters, numbers, dots, underscores, or hyphens |
| Pending action lifetime        | 60 seconds                                                     |

Rate limits are fixed one-minute windows per API key. A `429` response includes `Retry-After`.

| Operation group                        | Requests per minute |
| -------------------------------------- | ------------------: |
| List or get definitions                |                 120 |
| Create, replace, or delete definitions |                  30 |
| Replace state                          |                 300 |
| Poll actions                           |                 240 |
| Acknowledge actions                    |                 240 |

## Common Errors

| Status | Cause                                                                  |
| -----: | ---------------------------------------------------------------------- |
|  `400` | Invalid key, definition, query, or action result                       |
|  `401` | Missing or invalid bearer API key                                      |
|  `404` | Server, panel, or action was not found                                 |
|  `409` | Panel or instance limit reached, or state sent before its panel exists |
|  `413` | Definition, state, or action result exceeds its size cap               |
|  `429` | Per-API-key rate limit exceeded                                        |

## Reference

{% content-ref url="manifest-reference.md" %}
[manifest-reference.md](manifest-reference.md)
{% endcontent-ref %}

{% content-ref url="examples/" %}
[examples](examples/)
{% endcontent-ref %}

## Endpoints

{% content-ref url="list-panels.md" %}
[list-panels.md](list-panels.md)
{% endcontent-ref %}

{% content-ref url="get-panel.md" %}
[get-panel.md](get-panel.md)
{% endcontent-ref %}

{% content-ref url="set-panel.md" %}
[set-panel.md](set-panel.md)
{% endcontent-ref %}

{% content-ref url="delete-panel.md" %}
[delete-panel.md](delete-panel.md)
{% endcontent-ref %}

{% content-ref url="set-state.md" %}
[set-state.md](set-state.md)
{% endcontent-ref %}

{% content-ref url="poll-actions.md" %}
[poll-actions.md](poll-actions.md)
{% endcontent-ref %}

{% content-ref url="acknowledge-action.md" %}
[acknowledge-action.md](acknowledge-action.md)
{% endcontent-ref %}
