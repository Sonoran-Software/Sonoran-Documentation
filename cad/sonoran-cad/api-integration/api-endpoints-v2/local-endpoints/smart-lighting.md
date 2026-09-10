---
description: >-
  Local API endpoints are pushed directly to the local desktop application,
  typically from in-game or other network devices.
---

# Smart Lighting

## Set Smart Light State

<mark style="color:green;">`POST`</mark> `http://localhost:9990/lighting`

This method sets the current smart lighting state.

#### Request Body

| Name  | Type   | Description       |
| ----- | ------ | ----------------- |
| state | string | some\_state\_here |

{% tabs %}
{% tab title="200 " %}
```
some_state_here
```
{% endtab %}
{% endtabs %}

```javascript
{
    "state": "lights"
}
```

### Lighting States

| State         | Description                                                    |
| ------------- | -------------------------------------------------------------- |
| `restore`     | Toggle 'Restore' lights when there is no active event          |
| `lights`      | Toggle 'Emergency' lights when emergency vehicle lights are on |
| `panic`       | Toggle 'Panic' lights                                          |
| `available`   | Toggle lights when unit status is changed                      |
| `unavailable` | Toggle lights when unit status is changed                      |
| `enroute`     | Toggle lights when unit status is changed                      |
| `onscene`     | Toggle lights when unit status is changed                      |
| `busy`        | Toggle lights when unit status is changed                      |
| `left`        | Toggle the left turn signal lights                             |
| `right`       | Toggle the right turn signal lights                            |
| `hazard`      | Toggle the hazard lights                                       |

### Local Port

The local port (`9990` by default) can be modified in the bodycam configuration section.

![Sonoran CAD - Bodycam Port](<../../../.gitbook/assets/image (340).png>)
