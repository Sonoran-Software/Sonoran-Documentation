---
description: >-
  Monitor alarm controllers, surface active and fault states, toggle alarms, and
  play a sound when the active count increases.
---

# Fire Alarm

This example connects an existing in-game fire alarm resource to CAD. Dispatchers can see normal, active, and faulted controllers without entering the game. When an alarm activates in-game, the resource publishes the new state so the CAD card pulses red and plays an alert sound. A dispatcher can also use the panel toggle to change the alarm state in-game.

![Fire Alarm custom integration panel](../../../../.gitbook/assets/fire-alarm.png)

## How It Connects

1. Install or update the panel definition when the resource is configured.
2. On resource start, read every alarm controller and publish the complete panel state.
3. When an alarm changes in-game, publish the new state. Connected CAD clients update immediately.
4. Poll for `alarm.set-active` actions. Apply each action through the alarm resource, acknowledge it, then publish the authoritative state again.

## Game-Side Outline

The following is server-side pseudocode. Adapt the events and function names to your alarm resource and preferred [API library](../#sdk-helpers).

```lua
-- Install the definition once, then publish the current in-game state.
onResourceStart(function()
  setIntegrationPanel("example.fire-alarms", definition)
  publishPanelState(readAllAlarmControllers())
end)

-- In-game changes are pushed to every connected CAD user.
onAlarmStateChanged(function()
  publishPanelState(readAllAlarmControllers())
end)

-- Poll on the server. Never expose the CAD API key to a client script.
everySecond(function()
  local response = pollPanelActions({ after = cursor })

  for _, event in ipairs(response.events) do
    local success = fireAlarmResource.setActive(
      event.values.alarmId,
      event.values.active
    )

    acknowledgePanelAction(event.id, success)
    publishPanelState(readAllAlarmControllers())
  end

  cursor = response.nextCursor -- Persist after every returned action is acknowledged.
end)
```

See [Set State](../set-state.md), [Poll Actions](../poll-actions.md), and [Acknowledge Action](../acknowledge-action.md) for copyable calls in every supported library.

## Actions

| Action ID          | Purpose                     |
| ------------------ | --------------------------- |
| `alarm.set-active` | Toggle one alarm on or off. |

## Definition JSON

[Open the raw definition](https://github.com/Sonoran-Software/SonoranCAD-Documentation/tree/master/api-integration/api-endpoints-v2/integration-panels/examples/json/fire-alarm-definition.json)

<details>

<summary>Copy the complete definition</summary>

```json
{
  "schemaVersion": 1,
  "key": "example.fire-alarms",
  "name": "Fire Alarm",
  "icon": "fas fa-bell",
  "surfaces": ["dispatch", "fire", "ems", "police"],
  "sounds": [
    {
      "id": "alarm-active",
      "url": "https://s3.sonorancad.com/default/examples/demos/fire-alarm-demo.mp3",
      "volume": 0.7,
      "maxDurationMs": 8000,
      "trigger": {
        "event": "state",
        "path": "summary.active",
        "operator": "increased"
      }
    }
  ],
  "body": [
    {
      "type": "row",
      "gap": "sm",
      "children": [
        { "type": "badge", "label": "Active: {{state.summary.active}}", "appearance": "primary" },
        { "type": "badge", "label": "Normal: {{state.summary.normal}}", "appearance": "positive" },
        { "type": "badge", "label": "Fault: {{state.summary.fault}}", "appearance": "warning" }
      ]
    },
    {
      "type": "repeat",
      "source": "$state.alarms",
      "emptyText": "No alarms reported",
      "layout": "grid",
      "minItemWidth": 260,
      "gap": "sm",
      "search": {
        "placeholder": "Search alarms",
        "fields": ["name", "location", "status"]
      },
      "sort": {
        "label": "Order",
        "default": "active",
        "options": [
          {
            "label": "Active first",
            "value": "active",
            "rules": [
              { "path": "active", "direction": "desc" },
              { "path": "name", "direction": "asc" }
            ]
          },
          {
            "label": "Name A-Z",
            "value": "name",
            "rules": [{ "path": "name", "direction": "asc" }]
          },
          {
            "label": "Status",
            "value": "status",
            "rules": [
              { "path": "status", "order": ["ACTIVE", "FAULT", "NORMAL"] },
              { "path": "name", "direction": "asc" }
            ]
          }
        ]
      },
      "children": [
        {
          "type": "section",
          "animation": "$item.animation",
          "style": {
            "borderColor": "$item.color",
            "borderStyle": "solid",
            "borderWidth": "1px",
            "borderRadius": "6px",
            "minHeight": "132px"
          },
          "children": [
            {
              "type": "row",
              "align": "center",
              "children": [
                { "type": "icon", "icon": "fas fa-fire", "color": "$item.color" },
                { "type": "text", "text": "$item.name", "variant": "title", "grow": true },
                { "type": "badge", "label": "$item.status", "appearance": "$item.appearance" }
              ]
            },
            { "type": "text", "text": "$item.location", "appearance": "muted" },
            {
              "type": "toggle",
              "id": "alarm-active",
              "label": "Alarm active",
              "value": "$item.active",
              "color": "$item.color",
              "action": {
                "id": "alarm.set-active",
                "values": { "alarmId": "$item.id", "active": "$value" }
              }
            }
          ]
        }
      ]
    }
  ]
}
```

</details>

## Example State

[Open the raw state](https://github.com/Sonoran-Software/SonoranCAD-Documentation/tree/master/api-integration/api-endpoints-v2/integration-panels/examples/json/fire-alarm-state.json)

<details>

<summary>Copy the example state</summary>

```json
{
  "summary": { "active": 1, "normal": 1, "fault": 1 },
  "alarms": [
    {
      "id": "mrpd-lobby",
      "name": "MRPD Lobby",
      "location": "Mission Row",
      "status": "ACTIVE",
      "appearance": "primary",
      "color": "primary",
      "animation": "pulse-negative",
      "active": true
    },
    {
      "id": "sandy-24",
      "name": "Station 24",
      "location": "Sandy Shores",
      "status": "NORMAL",
      "appearance": "positive",
      "color": "positive",
      "active": false
    },
    {
      "id": "pillbox",
      "name": "Pillbox Medical",
      "location": "Los Santos",
      "status": "FAULT",
      "appearance": "warning",
      "color": "amber",
      "active": false
    }
  ]
}
```

</details>
