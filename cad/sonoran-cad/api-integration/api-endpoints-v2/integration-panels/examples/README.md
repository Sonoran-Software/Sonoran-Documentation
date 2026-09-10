---
description: >-
  Copy complete Integration Panel examples for common FiveM and third-party
  systems.
---

# Examples

These examples show how an existing FiveM resource or third-party system can expose its live data and controls inside CAD. Each one includes a rendered panel, complete definition, sample state, action IDs, and a short server-side integration outline.

The same two-way pattern applies to every example:

1. Your resource publishes its current state to CAD.
2. Connected CAD users see the update immediately.
3. A CAD interaction creates an action for your resource.
4. Your resource polls and applies the action, acknowledges it, then publishes the updated state.

{% hint style="info" %}
Use the AI plugins and MCP tools at [sonoransoftware.com/developers](https://sonoransoftware.com/developers) to adapt an example to your script, then verify it in the [visual panel builder](https://sonorancad.com/integration-panel-builder).
{% endhint %}

## Fire Alarm

Connect an in-game fire alarm resource so dispatchers can see every alarm and its current state. An alarm triggered in-game appears and pulses in CAD; a dispatcher can also change its state from the panel, and the resource applies that change in-game.

{% content-ref url="fire-alarm.md" %}
[fire-alarm.md](fire-alarm.md)
{% endcontent-ref %}

## Door Locks

Connect a door lock resource to show police station, jail, and prison doors by facility. Changes made at an in-game door update CAD, while CAD users can lock one door, unlock one door, or request a lock-all action.

{% content-ref url="door-locks.md" %}
[door-locks.md](door-locks.md)
{% endcontent-ref %}

## Tow and Impound

Connect a tow resource so new in-game requests appear for dispatchers with vehicle and location details. CAD users can accept or complete a request, and the resource updates the job for in-game tow operators.

{% content-ref url="tow-impound.md" %}
[tow-impound.md](tow-impound.md)
{% endcontent-ref %}

## Fleet Management

Connect a garage or fleet resource to group police, fire, and EMS vehicles and show fuel, health, and service state. Vehicle changes made in-game update the panel, while repair requests from CAD are sent back to the resource.

{% content-ref url="fleet-management.md" %}
[fleet-management.md](fleet-management.md)
{% endcontent-ref %}
