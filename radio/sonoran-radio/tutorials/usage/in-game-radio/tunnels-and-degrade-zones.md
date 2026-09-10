---
description: >-
  Configure tunnels, underpasses, and other areas where radio signal will be
  degraded!
---

# Tunnels and Degrade Zones

<figure><img src="../../../.gitbook/assets/image (177).png" alt=""><figcaption><p>Sonoran Radio - Tunnel Detection System</p></figcaption></figure>

{% embed url="https://youtu.be/IHNPs6aATQU" %}

## What are Degrade Zones?

Degradation zones are areas like tunnels, underground areas, or mountain valleys that would experience signal loss in a realistic scenario. [Custom voice effects](../dispatch-panel/custom-voice-effects.md) will distort the audio more as signal loss increases.

## Creating and Modifying Zones

### Via Radio Panel

<details>

<summary>Degrade Zones via Panel</summary>

Use the polygon, square, or circle tool to create a new zone. Select the zone to customize the name, Z coordinates (floor and ceiling height), and the degrade strength.

<figure><img src="../../../.gitbook/assets/image (20).png" alt=""><figcaption></figcaption></figure>

</details>

### Via In-Game Menu

<details>

<summary>1. Accessing the Menu</summary>

Open the menu with the in-game `/radiomenu` command and select `Degradation Zones`

<figure><img src="../../../.gitbook/assets/image (202).png" alt="" width="222"><figcaption><p>Sonoran Radio -</p></figcaption></figure>

</details>

<details>

<summary>2. Zone Configuration Options</summary>

In the `Degradation Zones` menu, you can specify the strength and add points to create a 3D zone.

When creating a zone you can visualize via the drawn polygon and manipulate and move your last placed point using the on-screen controls

<div><figure><img src="../../../.gitbook/assets/image (265).png" alt="" width="222"><figcaption><p>Sonoran Radio - Degradation Zone Options</p></figcaption></figure> <figure><img src="../../../.gitbook/assets/image (204).png" alt="" width="375"><figcaption><p>Sonoran Radio - Degradation Zone Poly</p></figcaption></figure></div>

`Strength`\
\- The percent the signal strength will be cut by when inside the zone (0-1).\
\- Example: 0.5 = 50% [voice effect](../dispatch-panel/custom-voice-effects.md) degradation

`Add Point to Zone`\
\- Adds another point to the 3D zone

`Undo Last Point`\
\- Removes the last place point in the 3D zone

`Min Z`\
\- The minimum Z value (floor height) of the 3D zone

`Max Z`\
\- The maximum Z value (ceiling height) of the 3D zone

`Finish Zone Creation`\
\- Finishes the 3D zone and saves to the `tunnels.json` file

`Cancel Zone Creation`\
\- Cancels the 3D zone editor and closes the menu

</details>

<details>

<summary>3. View and Remove Configured Zones</summary>

Select `Edit Degradation Zone` in the menu and toggle on `Show Zones`. All configured zones on the map will be displayed in green. If the config.lua's `debug` mode is set to `true`, all zones will also be made visible.

Use the `Select Zone` menu option to swap back and forth between zones. Your selected zone will be displayed in red.

Use the `Delete Zone` menu option to delete the selected (red) zone.

<div><figure><img src="../../../.gitbook/assets/image (267).png" alt=""><figcaption><p>Degradation Zone: Visible</p></figcaption></figure> <figure><img src="../../../.gitbook/assets/image (266).png" alt=""><figcaption><p>Degradation Zone: Selected</p></figcaption></figure></div>

</details>
