---
description: >-
  Allows law enforcement to start a traffic stop which will automatically add a
  new call and attach the unit in the CAD.
hidden: true
---

# Traffic Stop

{% hint style="warning" %}
This submodule utilizes API endpoints that require the **plus** version of SonoranCAD or higher. For more information, view our [pricing ](../../../pricing/faq/)page.
{% endhint %}

{% hint style="success" %}
Looking for VPS, web, or dedicated hosting? Check out our official [server hosting](/broken/pages/-MRResNcPrj2q6MmmS6j)!
{% endhint %}

## Activation Video

Click to view our [traffic stop installation guide](https://youtu.be/QmI7Wst2ytY).

## Activation Guide

### 1. Download and Install the Core

If you haven't already, be sure to install and configure the [SonoranCAD Core](../fivem-installation/) first.

### 2. Activate the Submodule and all Dependencies

Follow the [submodule activation guide](../submodule-configuration/#activating-a-submodule) for the required submodules.

### 3. Configuration

| Option   | Description                       | Default         |
| -------- | --------------------------------- | --------------- |
| enablets | Enables the submodule.            | True            |
| origin   | Origin of the new call.           | 2 (OBSERVED)    |
| status   | Status of the new call            | 1 (ACTIVE)      |
| priority | Priority of the new call          | 1               |
| title    | Title of the call when created.   | Traffic Stop    |
| code     | The 10-code for the traffic stop. | 10-11 - Traffic |

### 4. Enable User Permissions

The default command ships with [ACE permission checks](https://forum.cfx.re/t/basic-aces-principals-overview-guide/90917) enabled. **You will need to allow `command.ts` for who you want to use this command.**

**Example**

`add_ace builtin.everyone command.ts allow`

This line in your `config.cfg` file will allow everyone to access the command. We highly reccomend creating [proper ace permission groups](https://forum.cfx.re/t/basic-aces-principals-overview-guide/90917) to prevent users from spamming.

### 5. Set Your API ID

Don't forget to set your account [API ID](../../../api-integration/getting-started/setting-your-api-id.md) to properly link your in-game user to the CAD.

## Usage

| Command | Description                                      |
| ------- | ------------------------------------------------ |
| ts      | Send a new dispatch to dispatch regarding the TS |

## Custom Events

Event is sent when the /ts command is processed.

```
 EVENT: SonoranCAD::trafficstop:cadIncomingTraffic
 PARAMS:
      origin =(1 = CALLER / 2 = RADIO DISPATCH / 3 = OBSERVED / 4 = WALK_UP
      status = 1 = PENDING / 2 = ACTIVE / 3 = CLOSED
      priority = 1, 2, or 3
      title = Title that will appear in CAD
      code = 10 code that will be used for the new dispatch
      address = street / cross street string
      postal = postal of the call
      description = description of Traffic Stop
      notes = notes for the call
      source = playerId
```
