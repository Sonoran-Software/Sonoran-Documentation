---
description: >-
  Notify officers of incoming calls, allow them to attach to them, notify the
  caller, and route units via GPS in real-time to calls and the lead pursuit
  officer...all in one!
---

# Dispatch Notify

<figure><img src="../../../.gitbook/assets/dispatch_notify_promo.png" alt=""><figcaption></figcaption></figure>

This submodule:

* Notifies officers of incoming calls
* [Allows officers to attach to calls via command](dispatch-notify.md#2-officer-attaches-to-the-call)
* Automatically routes attached units to the postal code
* Unit GPS routing is updated whenever the dispatch postal is updated
* [Allows the call postal and GPS routing to be automatically updated to the primary unit's location](dispatch-notify.md#primary-unit-tracking-pursuit)
* Notifies the civilian making the emergency call when an officer is en-route.

## Activation Guide

### 1. Download and Install the Resource

{% hint style="info" %}
This submodule is already **enabled by default** when installing the [Sonoran CAD FiveM resource](../fivem-installation/).

\
The [locations submodule](locations.md) includes required logic to send location data and is **already enabled by default**. Keep this submodule enabled to maintain functionality.

\
The [call commands submodule](call-commands.md) includes required logic to create emergency calls and is **already enabled by default**. Keep this submodule enabled to maintain functionality.

\
The [postals submodule](postals.md) is optional and also enabled by default. Keep this submodule enabled if you wish to include postal code information with emergency calls.
{% endhint %}

### 2. Adjust the Configuration

The CAD display settings are stored inside of the `/configuration/dispatchnotify_config.lua` file.

### 3. Ensure Players are Linked

Ensure the players have already [linked their CAD](../link-user-in-game.md) for this integration to work.

### Configuration

Review the `dispatchnotify_config.lua` file to configure the submodule to behave how you like. The file is well documented. Please review **all** the settings!

{% hint style="info" %}
Dispatch Notify no longer has its own per-submodule notification selector.

All user-facing FiveM notifications are now configured in `/configuration/config.json` with `notificationSystem`.

Supported values:

* `auto`
* `ox_lib`
* `lation_ui`
* `pnotify`
* `chat`

`auto` resolves in this order:

1. `ox_lib`
2. `lation_ui`
3. `pnotify`
4. `chat`
{% endhint %}

<details>

<summary><code>dispatchnotify_config.lua</code></summary>

| Config Value                  | Description                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| enableUnitNotify              | Enable incoming 911 call notifications                                                                                                                                                                                                                                                                                                                                                                |
| emergencyCallType             | Specifies what emergency calls are displayed as. Some countries use different numbers (like 999)                                                                                                                                                                                                                                                                                                      |
| civilCallType                 | Specifies non-emergency call types. If unused, set to blank ("")                                                                                                                                                                                                                                                                                                                                      |
| dotCallType                   | Some communities use 511 for tow calls. Specify below, or set blank ("") to disable                                                                                                                                                                                                                                                                                                                   |
| respondCommandName            | Command to respond to calls with                                                                                                                                                                                                                                                                                                                                                                      |
| enableUnitResponse            | <p>Enable call responding (self-dispatching)</p><p>If disabled, running commandName will return an error to the unit</p>                                                                                                                                                                                                                                                                              |
| dispatchDisablesSelfResponse  | If a dispatcher is detected to be online, automatically disable the response command.                                                                                                                                                                                                                                                                                                                 |
| dispatchDisablesUnitNotify    | If a dispatcher is detected to be online, automatically suppress incoming 911 call notifications to units.                                                                                                                                                                                                                                                                                            |
| enableUnitNotifyToggleCommand | Enable an in-game command to override unit 911 notifications                                                                                                                                                                                                                                                                                                                                          |
| unitNotifyToggleCommand       | In-game command to override unit 911 notifications                                                                                                                                                                                                                                                                                                                                                    |
| unitNotifyToggleAce           | Ace permission allowed to use the command. Leave blank ("") to allow anyone to use the command                                                                                                                                                                                                                                                                                                        |
| enableCallerNotify            | Enable "units are on the way" notifications                                                                                                                                                                                                                                                                                                                                                           |
| notifyMessage                 | <p>NotifyMessage: Message template to use when sending to the player</p><p>You can use the following replacements:</p><p><strong>{officer}</strong> - officer name</p>                                                                                                                                                                                                                                |
| incomingCallMessage           | <p>How should officers be notified of a new 911 call? Parameters:<br><strong>{location}</strong> - location of call (street + postal)<br><strong>{description}</strong> - description as given by civilian<br><strong>{caller}</strong> - caller's name<br><strong>{callId}</strong> - ID of the call so LEO can respond with /r911<br><strong>{command}</strong> - The command to use</p>            |
| unitDutyMethod                | <p>How to detect if units are online?<br><strong>incad</strong>: units must be logged into the CAD<br><strong>permissions</strong>: units must have the "sonorancad.dispatchnotify" ACE permission (see docs)<br><strong>esxjob</strong>: requires esxsupport submodule, use jobs instead for on duty detection<br><strong>custom</strong>: Use custom function (defined below as unitDutyCustom)</p> |
| esxJobsAllowed                | What jobs should count as being on duty?                                                                                                                                                                                                                                                                                                                                                              |
| waypointType                  | <p>Customise the title of a call made in the CAD<br><strong>postal</strong>: set gps to caller's postal (less accurate, more realistic) - REQUIRES <a href="postals.md">CONFIGURED POSTAL </a>SUBMODULE<br><strong>exact</strong>: set gps to caller's position (less realistic)<br><strong>none</strong>: disable waypointing</p>                                                                    |
| waypointFallbackEnabled       | Fall back to postal if exact coordinates cannot be found (for self-generated calls)                                                                                                                                                                                                                                                                                                                   |
| callTitle                     | <p>Type of waypoint to use when officer is attached<br><strong>Default</strong>: OFFICER RESPONSE</p>                                                                                                                                                                                                                                                                                                 |
| sendNotesToUnits              | Enable "the sending of notes to units" notifications                                                                                                                                                                                                                                                                                                                                                  |
| notifyMessage                 | <p>NotifyMessage: Message template to use when sending to the player</p><p>You can use the following replacements:</p><p><strong>{callid}</strong> - The CAD Call ID</p><p><strong>{note}</strong> - The Note Added</p>                                                                                                                                                                               |
| enableAddNote                 | Enable "the adding of the notes" notifications                                                                                                                                                                                                                                                                                                                                                        |
| addNoteCommand                | Command to add notes to a call with                                                                                                                                                                                                                                                                                                                                                                   |
| enableAddPlate                | Enable "the adding of plates that are locked" notifications - REQUIRES [CONFIGURED WRAITHV2 ](/broken/pages/-M7U3aBbrsfrj1Cmeqmm)SUBMODULE                                                                                                                                                                                                                                                            |
| addPlateCommand               | Command to add plates to a call with                                                                                                                                                                                                                                                                                                                                                                  |

</details>

### ACE Permissions

This submodule uses two separate, configurable ACE checks:

* `sonorancad.dispatchnotify` is the fixed node used when `unitDutyMethod = "permissions"`; it marks players with this ACE as on duty for notification logic. The shipped `unitDutyMethod` default is `"incad"`, so this ACE mode is opt-in.
* `sonorancad.dispatchnotify.toggle` is the shipped default for `unitNotifyToggleAce`. When `enableUnitNotifyToggleCommand` is enabled (the default) and this value is not blank, it controls who may use the default `/dn notify` override. Set `unitNotifyToggleAce` to `""` to allow anyone to use that override, or replace it with another ACE name.

For example, grant the nodes to the roles that need them:

```cfg
add_ace group.sonoran_cad_units sonorancad.dispatchnotify allow
add_ace group.sonoran_cad_dispatch_admin sonorancad.dispatchnotify.toggle allow
```

The main `/dn` command is not itself registered as an ACE-restricted command; these nodes gate the duty-detection mode and the notification-toggle branch described above.

## Commands

In-game commands can be used to

* `/dn respond [id`] Respond/Attach to the newly created dispatch call ID
* `/dn notify [on/off/auto]` - Toggle chat alerts on, off, or auto (using the configuration file's default)
* `/dn note [text]` Add a note to the current dispatch call
* `/dn plate` Adds your currently locked license plate number as a note from the [Wraith ALPR](wraithv2.md) submodule
* `/dn gps` Toggles on/off automatic GPS routing to the call's postal code

<figure><img src="../../../.gitbook/assets/image (584).png" alt=""><figcaption></figcaption></figure>

## Dispatch Call Responding

### 1. Civilian Places a 911 Call

This call can be placed from the Civilian menu of the CAD, or via the `/911` command in-game, supplied by the [callcommands](call-commands.md) submodule.

### 2. Officer Attaches to the Call

The unit will see a notification message of the incoming call, complete with the command to run in order to attach.

<figure><img src="../../../.gitbook/assets/image (585).png" alt=""><figcaption></figcaption></figure>

## Primary Unit Tracking (Pursuit)

Dispatch notify can also be used to track the primary unit on a call. This will automatically update the postal code on the dispatch call to the primary unit's current location. This is highly useful for pursuits, where additional units need to catch up and join the chase.

### 1. Toggle Unit Tracking for the Primary Unit

Dispatchers (or self-dispatch) can set the primary unit to any unit currently attached to the call. The slider next to the Primary Unit box will toggle tracking mode. When enabled, the postal will automatically update based on the primary unit's location and be sent to all attached units.

<figure><img src="../../../.gitbook/assets/image (586).png" alt=""><figcaption></figcaption></figure>

## Troubleshooting

* No notifications for 911 calls
  * Units must be logged into the CAD (by default) or meeting the requirements depending on how the submodule is configured.
  * Verify `/configuration/config.json` has the correct `notificationSystem` value.
  * If `notificationSystem` is `auto`, Sonoran CAD will use `ox_lib`, then `lation_ui`, then `pnotify`, then `chat`.
* Units do not automatically attach to calls
  * Ensure the players have already [linked their CAD](../link-user-in-game.md) for this integration to work.
* Caller is not notified when units attach to the call
  * If the caller ever leaves the server and rejoins, this feature does not work.
  * If dispatch created the call within the CAD, there is no way to notify a caller.
  * Ensure you are not overriding the 911 command (default `/911`) with another resource.
