---
description: >-
  This submodule lets communities export custom dispatch call templates from the
  CAD, define a custom in-game command, and generate dispatch calls using that
  command.
---

# Call Templates

<figure><img src="../../../.gitbook/assets/sonoran_call_templates_promo.png" alt=""><figcaption></figcaption></figure>

## Call Templates

This submodule lets communities export custom dispatch call templates from the CAD, define a custom in-game command, and generate dispatch calls using that command.

## Activation Guide

### 1. Download and Install the Resource

{% hint style="info" %}
This submodule is already **enabled by default** when installing the [Sonoran CAD FiveM resource](../fivem-installation/).

\
The [locations submodule](locations.md) includes required logic to send location data and is **already enabled by default**. Keep this submodule enabled to maintain functionality.

\
The [postals submodule](postals.md) is optional and also enabled by default. Keep this submodule enabled if you wish to include postal code information with emergency calls.
{% endhint %}

### 2. Adjust the Configuration

The CAD display settings are stored inside of the `/configuration/calltemplates_config.lua` file.

### 3. Ensure Players are Linked

Ensure the player has already [linked their CAD](../link-user-in-game.md) for this integration to work.

### Configuration

<details>

<summary>a. Main Configuration</summary>

| Option                     | Description                                                                           | Default                                                                                                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callTypeDirectory`        | Location of the call type JSON file                                                   | `submodules/calltemplates/calltypes`                                                                                                                                  |
| `defaultOrigin`            | Call origin used if the template does not specify one                                 | <p>Default: <code>2</code><br>Options:<br>- <code>0</code>: Caller<br>- <code>1</code>: Radio Dispatch<br>- <code>2</code>: Observed<br>- <code>3</code>: Walk Up</p> |
| `defaultStatus`            | Call status used if the template does not specify one                                 | <p>Default: 1<br>Options:<br>- <code>0</code>: Pending<br>- <code>1</code>: Active<br>- <code>2</code>: Closed</p>                                                    |
| `defaultPriority`          | Call priority used if the template does not specify one                               | `1`                                                                                                                                                                   |
| `reloadTemplatesOnEachUse` | When true, templates are re-read every command execution (useful while editing files) | `false`                                                                                                                                                               |

</details>

<details>

<summary>b. Call Type Configuration</summary>

In the `calltemplates_config.lua` file you will find a section named `commands` . In here, you can configure each custom command that will be used to create a call. Below you will find the options you can use during configuration.

| Option               | Type    | Description                                                                                                                                                                            |
| -------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `command`            | String  | The name of the command                                                                                                                                                                |
| `callTypeFile`       | String  | The name of the associated JSON file for the call type                                                                                                                                 |
| `descriptionPrefix`  | String  | The prefix of the call description                                                                                                                                                     |
| `suggestionText`     | String  | The command suggestion text                                                                                                                                                            |
| `includeWraithPlate` | Boolean | Attach locked plate from wraithv2 if available                                                                                                                                         |
| `includePlayerUnit`  | Boolean | Attach the player's unit to the call                                                                                                                                                   |
| `useAcePermissions`  | Boolean | Require a FiveM command ACE to use the command. The node is `command.<command>`; the shipped `ts` and `towreq` entries default to `true`, requiring `command.ts` and `command.towreq`. |

</details>

### ACE Permissions

The shipped `commands` entries enable `useAcePermissions`, so grant the exact command nodes to a role that should be able to create those calls:

```cfg
add_ace group.sonoran_cad_dispatch command.ts allow
add_ace group.sonoran_cad_dispatch command.towreq allow
```

The node follows the configured `command` value. If `useAcePermissions` is omitted, the current resource defaults the registration to restricted; setting it to `false` removes the command ACE requirement for that entry.

#### c. Add Call Type JSON Files

Each call type requires a JSON file to be added to the directory `submodules/calltemplates/calltypes`. You can either configure this file yourself or you can download it from Sonoran CAD. This [guide](../../../tutorials/dispatching/creating-a-call.md#import-export-saved-call-types) will explain how to create and export call types.

## Usage

By default, this submodule comes with a `/ts` (traffic stop) and `/towreq` (tow request) commands.

Example:

`/ts Blue four door sedan, occupied x1`

* Creates a dispatch call with the presets for a traffic stop.
* Adds `Blue four door sedan, occupied x1` to the description.
* Pre-fills the call's address and postal location with your in-game location.
