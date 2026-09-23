---
description: >-
  Reference for Integration Panel definitions, UI nodes, bindings, styling,
  actions, search, sorting, and sounds.
---

# Manifest Reference

A panel definition is a JSON object stored at a stable `panelKey`. The definition controls presentation and behavior; state is stored separately per `serverId` and `instanceKey`.

## Definition

| Property        | Type      | Required | Description                                         |
| --------------- | --------- | -------- | --------------------------------------------------- |
| `schemaVersion` | integer   | Yes      | Must be `1`.                                        |
| `key`           | string    | No       | When present, must equal the route `panelKey`.      |
| `name`          | string    | Yes      | Panel header name; maximum 80 characters.           |
| `icon`          | string    | No       | Quasar or Font Awesome icon, such as `fas fa-lock`. |
| `surfaces`      | string\[] | No       | Layout availability: any of `dispatch`, `police`, `fire`, or `ems`. An empty array hides the panel from Add Window; explicit live-map blip references still work. This is not an authorization restriction. |
| `sounds`        | object\[] | No       | Up to 20 sound triggers.                            |
| `body`          | object\[] | Yes      | Recursive UI nodes; maximum 200 root nodes.         |

## Bindings

| Binding       | Value                                    |
| ------------- | ---------------------------------------- |
| `$state.path` | Current instance state                   |
| `$item.path`  | Current item inside a `repeat` node      |
| `$inputs.id`  | Current local control value, or the control's displayed `value` when untouched. Explicit empty strings are preserved. |
| `$value`      | New value emitted by the current control |

Use a binding as the entire property value, such as `"value": "$item.locked"`. For text containing other words, use interpolation such as `"Fuel: {{item.fuel}}%"` or `"Active: {{state.summary.active}}"`.

## Node Types

| Type       | Main properties                                                      | Purpose                                  |
| ---------- | -------------------------------------------------------------------- | ---------------------------------------- |
| `row`      | `children`, `gap`, `align`                                           | Horizontal layout that wraps as needed   |
| `column`   | `children`, `gap`, `align`                                           | Vertical layout                          |
| `grid`     | `children`, `minItemWidth`, `gap`                                    | Responsive auto-fit grid                 |
| `section`  | `title`, `children`, `style`, `animation`                            | Card-like group                          |
| `repeat`   | `source`, `children`, `search`, `sort`, `layout`                     | Render state array items                 |
| `text`     | `text`, `variant`, `appearance`                                      | Text; variants are `title` and `caption` |
| `icon`     | `icon`, `size`, `color`                                              | Quasar or Font Awesome icon              |
| `badge`    | `label`, `appearance`                                                | Compact status chip                      |
| `divider`  | —                                                                    | Separator line                           |
| `spacer`   | `size`                                                               | Vertical space in pixels                 |
| `alert`    | `text`, `appearance`                                                 | Highlighted message                      |
| `input`    | `id`, `label`, `value`, `placeholder`, `action`                      | Text input                               |
| `number`   | `id`, `label`, `value`, `action`                                     | Numeric input                            |
| `textarea` | `id`, `label`, `value`, `action`                                     | Multiline input                          |
| `select`   | `id`, `label`, `value`, `options`, `multiple`, `clearable`, `action` | Selection control                        |
| `iconPicker` | `id`, `label`, `value`, `options`, `searchable`, `readonly`, `action` | Square SVG picker |
| `toggle`   | `id`, `label`, `value`, `color`, `action`                            | Boolean switch                           |
| `checkbox` | `id`, `label`, `value`, `color`, `action`                            | Boolean checkbox                         |
| `button`   | `label`, `icon`, `disabled`, `appearance`, `action`                  | Explicit action                          |

Common layout properties are `grow`, `columns` from 1-12, and `gap` using `none`, `xs`, `sm`, `md`, `lg`, or `xl`.

Select options may be primitive values or `{ "label": "Display", "value": "stored-value" }` objects.

### SVG icon picker

An `iconPicker` is a 40-pixel square, matching the height of a dense text input. Clicking it opens a scrollable menu. Each option needs a stable string `value` and inline SVG markup in `svg`. An optional `name` supplies the tooltip and accessible name; without it, the picker uses `value`. Set `searchable` to `true` to show a search field that filters by `name` or `value` without calling the API. Search is off by default. The selected `value` is stored locally and available as `$value` in its action; your integration should process the action and publish the updated state.

![SVG icon picker in the panel builder with its menu open](<../../../.gitbook/assets/integration-panels/icon-picker.png>)

Typing `fi` narrows the same menu to Fire:

![SVG icon picker filtered by name](<../../../.gitbook/assets/integration-panels/icon-picker-filtered.png>)

```json
{
  "type": "iconPicker",
  "id": "unit-icon",
  "label": "Unit icon",
  "value": "$state.unit.icon",
  "searchable": true,
  "options": [
    {
      "value": "shield",
      "name": "Shield",
      "svg": "<svg viewBox=\"0 0 24 24\"><path fill=\"#5AAAF8\" d=\"M12 2 3 6v5c0 5.4 3.8 9.7 9 11 5.2-1.3 9-5.6 9-11V6l-9-4Z\"/></svg>"
    },
    {
      "value": "fire",
      "name": "Fire",
      "svg": "<svg viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"#F6815B\"/></svg>"
    }
  ],
  "action": { "id": "unit.set-icon", "values": { "icon": "$value" } }
}
```

SVGs are rendered as images. Use basic shapes and explicit colors; scripts, external references, and unsupported SVG elements or attributes are rejected. A picker shows up to 100 valid options.

## Conditions

Add `visibleWhen` to any node. Use one comparison with a bound `path`.

```json
{
  "visibleWhen": {
    "path": "$item.status",
    "in": ["PENDING", "ASSIGNED"]
  }
}
```

Supported comparisons are `equals`, `notEquals`, and `in`. With no comparison, visibility follows the truthiness of `path`.

## Actions

Controls use the same action envelope. The CAD creates an event containing the action ID, resolved values, actor, panel, instance, and server.

```json
{
  "type": "toggle",
  "id": "door-locked",
  "label": "Locked",
  "value": "$item.locked",
  "action": {
    "id": "door.set-locked",
    "confirm": "Change this door?",
    "values": {
      "doorId": "$item.id",
      "locked": "$value"
    }
  }
}
```

`confirm` is optional. It displays a CAD confirmation dialog before the action is queued.

`input`, `number`, and `textarea` actions are emitted once when the user leaves a changed field. Selects, toggles, checkboxes, and icon pickers emit on selection or click. Successful action acknowledgments are quiet; failures show an error notification.

## Repeated Collections

Set `source` to a state array. Child nodes can bind to the current `$item`.

```json
{
  "type": "repeat",
  "source": "$state.doors",
  "emptyText": "No doors reported",
  "layout": "grid",
  "minItemWidth": 245,
  "gap": "sm",
  "children": []
}
```

`minItemWidth` accepts 120-800 pixels. The grid automatically changes its column count with the panel width.

### Search

Search is local to the CAD client and does not call the API.

```json
{
  "search": {
    "placeholder": "Search doors",
    "fields": ["name", "facility", "status"]
  }
}
```

If `fields` is omitted, primitive properties on the item are searched.

### Sort

Each option has a stable `value` and ordered rules. A rule can use `direction` (`asc` or `desc`) or an explicit `order` array.

```json
{
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
      }
    ]
  }
}
```

## Theme-Safe Styling

Arbitrary CSS is not accepted. This keeps community panels safe and compatible with every CAD theme.

`appearance` supports `positive`, `negative`, `warning`, `primary`, `info`, `muted`, and `neutral`.

Color fields and `style.backgroundColor`, `style.borderColor`, or `style.color` must use one of these v2 token names:

`amber`, `amber-text`, `background`, `blue`, `blue-text`, `component-border`, `foreground`, `foreground-light`, `icon`, `positive`, `positive-text`, `primary`, `primary-faded`, `primary-text`, `text-inverse`, `text-primary`, `text-subtitle`, or `text-title`.

Allowed non-color style properties are `borderRadius`, `borderStyle`, `borderWidth`, `fontSize`, `fontWeight`, `margin`, `maxHeight`, `minHeight`, `opacity`, `padding`, and `textAlign`.

Built-in animations are `pulse-negative`, `pulse-warning`, and `pulse-positive`. Animation values may be bound to state.

## Sounds

Sound URLs must use HTTPS. Local paths and localhost HTTP are accepted while developing. Browser autoplay rules may require the user to interact with the CAD before audio can play.

```json
{
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
  ]
}
```

| Property           | Rules                                                                         |
| ------------------ | ----------------------------------------------------------------------------- |
| `id`               | Stable sound identifier                                                       |
| `url`              | HTTPS audio URL                                                               |
| `volume`           | 0-1; default `0.7`                                                            |
| `maxDurationMs`    | 1,000-30,000; default `10,000`                                                |
| `trigger.event`    | `state` or `action`                                                           |
| `trigger.path`     | Dot path in state; omit to compare complete state                             |
| `trigger.operator` | `changed`, `increased`, `decreased`, `equals`, `becameTrue`, or `becameFalse` |
| `trigger.value`    | Comparison value for `equals`                                                 |
| `trigger.actionId` | Optional action ID filter for action sounds                                   |

State sounds compare the prior and current values and do not play on initial load. Duplicate playback is suppressed for 500 ms.
