---
description: Automatically use on-foot, vehicle, and aircraft radio layouts in the FiveM resource.
---

# FiveM Frame Changes

The Sonoran Radio FiveM resource reads whether your character is in a vehicle and which vehicle class it belongs to. It automatically displays the matching layout of your selected frame.

## Set up automatic layout changes

1. [Install and configure the FiveM resource](../../getting-started/installing-the-in-game-resource.md).
2. In **Customize** > **Overlay**, open **Manual** and configure the frame's **On-foot** layout.
3. Select **Vehicle** or **Aircraft**, select **Add layout**, and choose the **Vehicle classes** that should use it. Add additional layouts if different classes need different radio designs. Set their order, then select **Save changes**. See [Set a layout for vehicle classes](../in-game-radio/customizing-radio-frames.md#set-a-layout-for-vehicle-classes).
4. Open the radio in FiveM and select that frame in **Settings** > **FiveM** > **Radio Frame**.
5. Enter a vehicle to check its matching layout, exit to check the on-foot layout, and enter a helicopter or plane to check an aircraft layout.

| Player state | Layout |
| --- | --- |
| On foot | On-foot |
| In a vehicle other than a helicopter or plane | Vehicle, when configured for that class |
| In a helicopter or plane | Aircraft, when configured for that class |
| No matching vehicle or aircraft layout | On-foot |

FiveM uses the **first** vehicle layout whose class list matches the vehicle. Layouts restricted to helicopters and planes appear under **Aircraft**; layouts with non-aircraft classes appear under **Vehicle**. Both tabs share one matching order. An empty class list matches every class, so place that layout after more specific ones.

For example, place an **Emergency** class `18` layout before a layout with no classes selected. An emergency vehicle uses the first layout; other vehicles use the layout that matches every class. Returning to foot uses the selected frame's On-foot layout.

Layout changes work for both drivers and passengers. Emergency lights and sirens do not need to be active, and screen-recording access is not required for the FiveM resource.

## Make frames available to players

The panel controls frame artwork and layouts. FiveM's `Config.frames` controls which frames a player may select, using the community's configured ACE or framework permissions.

The Overlay editor displays an identifier such as `frame:123` under each frame name. Add that identifier to the relevant department's `allowedFrames` list when restricting frame access. Existing migrated skin names continue to resolve to their managed frames.

See [Restrict frame access](../in-game-radio/customizing-radio-frames.md#restrict-frame-access) for the department and permission configuration.

## Apply updates and troubleshoot

After selecting **Save changes**, the resource refreshes the community's frames. A configured game-server push connection can deliver the update immediately; the resource also checks on startup and roughly every 30 seconds. Failed checks retain the last successfully loaded configuration.

If a layout does not change:

* Confirm that the intended frame is selected in the in-game radio settings.
* Confirm that the intended vehicle layout was added and saved in the panel.
* Check its vehicle classes and matching order. An earlier layout that matches every class can take priority over a later aircraft or emergency layout.
* Check `Config.frames` if the frame is missing from a player's settings.
* If recent edits have not appeared, check that the resource can reach the Radio backend and allow it to refresh.

The [desktop previous/next-frame hotkeys](./#change-frames-with-desktop-hotkeys) operate the desktop overlay. FiveM players choose their in-game frame through the in-game radio settings.
