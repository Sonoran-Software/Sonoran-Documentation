---
description: >-
  Monitor police, jail, and prison doors; search by facility; change one lock;
  or request a lock-all action.
---

# Door Locks

This example connects an existing door lock resource to CAD. Dispatchers can search doors across police stations, jails, and prisons, see whether each controller is online, and view the current lock state. A door used in-game updates CAD, while a CAD user can lock or unlock an online door without entering the game.

![Door Locks custom integration panel](../../../../.gitbook/assets/door-locks.png)

## How It Connects

1. Install or update the panel definition when the resource is configured.
2. On resource start, read every configured door and publish the complete panel state.
3. When a player or another script changes a door in-game, publish the new state to CAD.
4. Poll for `door.set-locked` and `doors.lock-all` actions. Apply them through the door resource, acknowledge them, then republish the authoritative lock state.

## Game-Side Outline

The following is server-side pseudocode. Adapt the events and function names to your door lock resource and preferred [API library](../#sdk-helpers).

```lua
onResourceStart(function()
  setIntegrationPanel("example.door-locks", definition)
  publishPanelState(readAllDoors())
end)

-- Covers a player using a door and changes made by another script.
onDoorStateChanged(function()
  publishPanelState(readAllDoors())
end)

everySecond(function()
  local response = pollPanelActions({ after = cursor })

  for _, event in ipairs(response.events) do
    local success

    if event.actionId == "door.set-locked" then
      success = doorResource.setLocked(event.values.doorId, event.values.locked)
    elseif event.actionId == "doors.lock-all" then
      success = doorResource.lockAllOnlineDoors()
    end

    acknowledgePanelAction(event.id, success)
    publishPanelState(readAllDoors())
  end

  cursor = response.nextCursor -- Persist after every returned action is acknowledged.
end)
```

See [Set State](../set-state.md), [Poll Actions](../poll-actions.md), and [Acknowledge Action](../acknowledge-action.md) for copyable calls in every supported library.

## Actions

| Action ID         | Purpose                                    |
| ----------------- | ------------------------------------------ |
| `door.set-locked` | Lock or unlock one online door.            |
| `doors.lock-all`  | Lock every online door after confirmation. |

## Definition JSON

[Open the raw definition](https://github.com/Sonoran-Software/SonoranCAD-Documentation/tree/master/api-integration/api-endpoints-v2/integration-panels/examples/json/door-locks-definition.json)

<details>

<summary>Copy the complete definition</summary>

```json
{
  "schemaVersion": 1,
  "key": "example.door-locks",
  "name": "Door Locks",
  "icon": "fas fa-lock",
  "surfaces": ["dispatch", "police"],
  "body": [
    {
      "type": "row",
      "gap": "sm",
      "children": [
        { "type": "badge", "label": "Locked: {{state.summary.locked}}", "appearance": "primary" },
        { "type": "badge", "label": "Unlocked: {{state.summary.unlocked}}", "appearance": "positive" },
        { "type": "badge", "label": "Offline: {{state.summary.offline}}", "appearance": "muted" },
        {
          "type": "button",
          "label": "Lock all",
          "icon": "fas fa-lock",
          "appearance": "primary",
          "action": {
            "id": "doors.lock-all",
            "confirm": "Lock every online door?",
            "values": {}
          }
        }
      ]
    },
    {
      "type": "repeat",
      "source": "$state.doors",
      "emptyText": "No doors reported",
      "layout": "grid",
      "minItemWidth": 245,
      "gap": "sm",
      "search": {
        "placeholder": "Search doors",
        "fields": ["name", "facility", "status"]
      },
      "sort": {
        "label": "Order",
        "default": "facility",
        "options": [
          {
            "label": "Facility",
            "value": "facility",
            "rules": [
              { "path": "facility", "direction": "asc" },
              { "path": "name", "direction": "asc" }
            ]
          },
          {
            "label": "Unlocked first",
            "value": "unlocked",
            "rules": [
              { "path": "locked", "direction": "asc" },
              { "path": "name", "direction": "asc" }
            ]
          },
          {
            "label": "Name A-Z",
            "value": "name",
            "rules": [{ "path": "name", "direction": "asc" }]
          }
        ]
      },
      "children": [
        {
          "type": "section",
          "style": {
            "borderColor": "$item.color",
            "borderStyle": "solid",
            "borderWidth": "1px",
            "borderRadius": "6px",
            "minHeight": "124px"
          },
          "children": [
            {
              "type": "row",
              "align": "center",
              "children": [
                { "type": "icon", "icon": "$item.icon", "color": "$item.color" },
                { "type": "text", "text": "$item.name", "variant": "title", "grow": true },
                { "type": "badge", "label": "$item.status", "appearance": "$item.appearance" }
              ]
            },
            { "type": "text", "text": "$item.facility", "appearance": "muted" },
            {
              "type": "toggle",
              "id": "door-locked",
              "label": "Locked",
              "value": "$item.locked",
              "visibleWhen": { "path": "$item.offline", "equals": false },
              "color": "$item.color",
              "action": {
                "id": "door.set-locked",
                "values": { "doorId": "$item.id", "locked": "$value" }
              }
            },
            {
              "type": "alert",
              "text": "Door controller offline",
              "appearance": "warning",
              "visibleWhen": { "path": "$item.offline", "equals": true }
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

[Open the raw state](https://github.com/Sonoran-Software/SonoranCAD-Documentation/tree/master/api-integration/api-endpoints-v2/integration-panels/examples/json/door-locks-state.json)

<details>

<summary>Copy the example state</summary>

```json
{
  "summary": { "locked": 2, "unlocked": 1, "offline": 1 },
  "doors": [
    { "id": "mrpd-lobby", "name": "Lobby Entrance", "facility": "Mission Row PD", "status": "LOCKED", "locked": true, "offline": false, "icon": "fas fa-lock", "color": "primary", "appearance": "primary" },
    { "id": "mrpd-cell-1", "name": "Holding Cell 1", "facility": "Mission Row PD", "status": "UNLOCKED", "locked": false, "offline": false, "icon": "fas fa-lock-open", "color": "positive", "appearance": "positive" },
    { "id": "prison-gate", "name": "Vehicle Gate", "facility": "Bolingbroke Prison", "status": "LOCKED", "locked": true, "offline": false, "icon": "fas fa-lock", "color": "primary", "appearance": "primary" },
    { "id": "sandy-armory", "name": "Armory", "facility": "Sandy Shores SO", "status": "OFFLINE", "locked": true, "offline": true, "icon": "fas fa-triangle-exclamation", "color": "amber", "appearance": "warning" }
  ]
}
```

</details>
