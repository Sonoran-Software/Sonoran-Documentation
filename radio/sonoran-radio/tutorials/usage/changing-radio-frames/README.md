---
description: Configure radio layouts and switch between community frames in FiveM and ER:LC.
---

# Changing Radio Frames

A **frame** is a selectable radio design, such as a patrol radio or a high-visibility radio. A frame can contain an **On-foot**, **Vehicle**, and, for FiveM, **Aircraft** layout. These layouts are variants of the same radio: the selected frame stays selected while its artwork, screen, and buttons change for your situation.

For example, a patrol frame can show a handheld radio on foot and a dashboard radio in a vehicle. Selecting another frame changes the radio design; entering a vehicle changes the layout within that design.

## Configure frames and variants

Community administrators manage frames in the Sonoran Radio panel:

1. Open your community and go to **Customize** > **Game Integration**. Confirm that **FiveM** or **ER:LC** is selected.
2. Open **Customize** > **Overlay**.
3. Select an existing frame, or select **New Frame** to create one. Start with uploaded artwork or a blank canvas, as described in [Create a custom overlay](../desktop-overlay.md#create-a-custom-overlay).
4. Open **Manual**, select **On-foot**, and position the screen and button areas on the preview. Set the frame width and screen theme as needed.
5. Select **Vehicle** and add or select its layout. Follow the [FiveM vehicle-class setup](../in-game-radio/customizing-radio-frames.md#set-a-layout-for-vehicle-classes) for multiple layouts and their matching order. For ER:LC, use **Add this variant** if the Vehicle layout is missing.
6. Use **Change image** to upload the vehicle artwork, then adjust its screen, buttons, width, and theme independently. [Overlay AI](../overlay-ai.md) can also help create or refine the design.
7. For FiveM, use **Aircraft** to configure aircraft layouts. ER:LC communities have **On-foot** and **Vehicle** modes.
8. Select **Save changes** to publish the configuration to your community.

Uploading custom frame artwork requires a **Pro** subscription. See [View and Compare Plans](../../../pricing/pricing-faq/standalone-pricing.md).

Players select one of the available frames in their radio settings. Automatic layout changes use the variants belonging to that selected frame. If no matching variant exists, the radio uses its on-foot layout.

## Change frames with desktop hotkeys

In the [desktop overlay](../desktop-overlay.md):

1. Open **Radio Settings** > **Hotkeys**.
2. Find **Change Radio Frame**.
3. Assign the previous-frame and next-frame shortcuts using the left and right arrow controls.
4. Close settings and press either shortcut to cycle through the community's frames. Cycling wraps around at either end of the list.

These shortcuts select a different frame. ER:LC detection then displays that frame's vehicle variant when the ELS controller is visible. Configure the shortcuts on each computer where you use the desktop app.

For the FiveM in-game radio, choose a frame from its radio settings. Desktop frame shortcuts control the desktop overlay.

## Game-specific setup

{% content-ref url="fivem.md" %}
[fivem.md](fivem.md)
{% endcontent-ref %}

{% content-ref url="erlc.md" %}
[erlc.md](erlc.md)
{% endcontent-ref %}
