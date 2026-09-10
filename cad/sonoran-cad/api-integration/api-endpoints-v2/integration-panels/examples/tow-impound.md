---
description: >-
  Display pending and assigned tow requests with vehicle details, then accept or
  complete each request from the CAD.
---

# Tow and Impound

This example connects an existing tow or impound resource to CAD. Requests created by an officer or another in-game system appear with the vehicle, plate, location, requester, and status. A dispatcher can accept or complete a request in CAD, and the resource applies that workflow change for in-game tow operators.

![Tow and Impound custom integration panel](../../../../.gitbook/assets/tow-impound.png)

## How It Connects

1. Install or update the panel definition when the resource is configured.
2. On resource start, publish every pending and assigned request plus the current summary.
3. Publish again when an in-game request is created, assigned, cancelled, or completed.
4. Poll for `tow.accept` and `tow.complete` actions. Apply them through the tow resource, acknowledge them, then publish the updated request list.

## Game-Side Outline

The following is server-side pseudocode. Adapt the events and function names to your tow resource and preferred [API library](../#sdk-helpers).

```lua
onResourceStart(function()
  setIntegrationPanel("example.tow-requests", definition)
  publishPanelState(readCurrentTowRequests())
end)

-- Includes requests created or updated by officers and tow operators.
onTowRequestChanged(function()
  publishPanelState(readCurrentTowRequests())
end)

everySecond(function()
  local response = pollPanelActions({ after = cursor })

  for _, event in ipairs(response.events) do
    local success

    if event.actionId == "tow.accept" then
      success = towResource.acceptRequest(event.values.requestId)
    elseif event.actionId == "tow.complete" then
      success = towResource.completeRequest(event.values.requestId)
    end

    acknowledgePanelAction(event.id, success)
    publishPanelState(readCurrentTowRequests())
  end

  cursor = response.nextCursor -- Persist after every returned action is acknowledged.
end)
```

See [Set State](../set-state.md), [Poll Actions](../poll-actions.md), and [Acknowledge Action](../acknowledge-action.md) for copyable calls in every supported library.

## Actions

| Action ID      | Purpose                            |
| -------------- | ---------------------------------- |
| `tow.accept`   | Assign the selected request.       |
| `tow.complete` | Mark an assigned request complete. |

## Definition JSON

[Open the raw definition](https://github.com/Sonoran-Software/SonoranCAD-Documentation/tree/master/api-integration/api-endpoints-v2/integration-panels/examples/json/tow-impound-definition.json)

<details>

<summary>Copy the complete definition</summary>

```json
{
  "schemaVersion": 1,
  "key": "example.tow-requests",
  "name": "Tow & Impound",
  "icon": "fas fa-truck-pickup",
  "surfaces": ["dispatch", "police"],
  "body": [
    {
      "type": "row",
      "gap": "sm",
      "children": [
        { "type": "badge", "label": "Pending: {{state.summary.pending}}", "appearance": "primary" },
        { "type": "badge", "label": "Assigned: {{state.summary.assigned}}", "appearance": "info" },
        { "type": "badge", "label": "Completed today: {{state.summary.completed}}", "appearance": "positive" }
      ]
    },
    {
      "type": "repeat",
      "source": "$state.requests",
      "emptyText": "No tow requests",
      "layout": "grid",
      "minItemWidth": 300,
      "gap": "sm",
      "search": {
        "placeholder": "Search plate, vehicle, or location",
        "fields": ["plate", "vehicle", "location", "requester", "status"]
      },
      "sort": {
        "label": "Order",
        "default": "priority",
        "options": [
          {
            "label": "Pending first",
            "value": "priority",
            "rules": [
              { "path": "status", "order": ["PENDING", "ASSIGNED", "COMPLETED"] },
              { "path": "createdAt", "direction": "asc" }
            ]
          },
          {
            "label": "Newest first",
            "value": "newest",
            "rules": [{ "path": "createdAt", "direction": "desc" }]
          },
          {
            "label": "Plate A-Z",
            "value": "plate",
            "rules": [{ "path": "plate", "direction": "asc" }]
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
            "minHeight": "166px"
          },
          "children": [
            {
              "type": "row",
              "align": "center",
              "children": [
                { "type": "icon", "icon": "fas fa-truck-pickup", "color": "$item.color" },
                { "type": "text", "text": "$item.plate", "variant": "title", "grow": true },
                { "type": "badge", "label": "$item.status", "appearance": "$item.appearance" }
              ]
            },
            { "type": "text", "text": "$item.vehicle" },
            { "type": "text", "text": "$item.location", "appearance": "muted" },
            { "type": "text", "text": "Requested by {{item.requester}}", "variant": "caption", "appearance": "muted" },
            {
              "type": "button",
              "label": "Accept request",
              "icon": "fas fa-check",
              "appearance": "primary",
              "visibleWhen": { "path": "$item.pending", "equals": true },
              "action": {
                "id": "tow.accept",
                "values": { "requestId": "$item.id" }
              }
            },
            {
              "type": "button",
              "label": "Mark complete",
              "icon": "fas fa-flag-checkered",
              "appearance": "positive",
              "visibleWhen": { "path": "$item.assigned", "equals": true },
              "action": {
                "id": "tow.complete",
                "values": { "requestId": "$item.id" }
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

[Open the raw state](https://github.com/Sonoran-Software/SonoranCAD-Documentation/tree/master/api-integration/api-endpoints-v2/integration-panels/examples/json/tow-impound-state.json)

<details>

<summary>Copy the example state</summary>

```json
{
  "summary": { "pending": 2, "assigned": 1, "completed": 8 },
  "requests": [
    { "id": "tow-1042", "plate": "46EJX219", "vehicle": "Vapid Stanier · Black", "location": "Alta St / Vespucci Blvd", "requester": "1A-12", "status": "PENDING", "createdAt": "2026-08-25T18:12:00Z", "pending": true, "assigned": false, "color": "primary", "appearance": "primary" },
    { "id": "tow-1043", "plate": "83KLM550", "vehicle": "Bravado Bison · White", "location": "Route 68 / Joshua Rd", "requester": "2L-04", "status": "PENDING", "createdAt": "2026-08-25T18:16:00Z", "pending": true, "assigned": false, "color": "primary", "appearance": "primary" },
    { "id": "tow-1039", "plate": "29QRS118", "vehicle": "Karin Sultan · Blue", "location": "Mission Row Impound", "requester": "1B-31 · Tow 7", "status": "ASSIGNED", "createdAt": "2026-08-25T17:54:00Z", "pending": false, "assigned": true, "color": "blue", "appearance": "info" }
  ]
}
```

</details>
