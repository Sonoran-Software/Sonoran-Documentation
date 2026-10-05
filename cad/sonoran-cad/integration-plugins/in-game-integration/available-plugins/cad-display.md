---
description: >-
  Use your CAD on a vehicle or station laptop and let nearby players see your
  screen on in-game displays.
---

# CAD Display

{% embed url="https://youtu.be/mtiW0hFNNAU" %}

## Activation Guide

### 1. Download and Install the Resource

{% hint style="info" %}
This submodule is already **enabled by default** when installing the [Sonoran CAD FiveM resource](../fivem-installation/).
{% endhint %}

Update both the `sonorancad` and `tablet` resources together. The tablet resource must be running to use a laptop screen.

### 2. Adjust the Configuration

The CAD display settings are stored inside of the `/configuration/caddisplay_config.lua` file.

{% hint style="info" %}
User-facing notifications for **all** FiveM submodules are now configured centrally in `/configuration/config.json` using `notificationSystem`.

Supported values:

* `auto`
* `ox_lib`
* `lation_ui`
* `pnotify`
* `chat`

When set to `auto`, Sonoran CAD will choose the first available system in this order:

1. `ox_lib`
2. `lation_ui`
3. `pnotify`
4. `chat`
{% endhint %}

Start with the configuration included with your installed resource. The main settings for server owners are:

| Setting | When to change it |
| --- | --- |
| `permissionMode` | Choose ACE permissions, framework jobs, or your own permission integration. |
| `allowlistedCars` | Add the spawn codes of vehicles that should support CAD displays. |
| `general.useAllowlistAsBlacklist` | Set to `true` to block the listed vehicles instead of allowing only those vehicles. |
| `worldDisplays.enabled` | Enable or disable station displays around the map. |
| `builtinScreens` | Configure a laptop screen already included in a custom vehicle. See the setup below. |
| `interaction.enabled` | Set to `false` to disable the focused laptop view. Players can still use `/tablet open`. |

The standard laptop includes a screen alignment profile, including when upgrading an older configuration. Custom screens may need [screen alignment](#screen-alignment-for-server-owners) before players can interact with them.

### ACE Permissions

When `commands.restricted` is `true` (the default) and `permissionMode` is `"ace"` (the default), the server checks these configurable nodes:

* `sonoran.caddisplay` allows a player to open the menu and use or attach a CAD display.
* `sonoran.caddisplay.admin` allows menu access and saving or deleting vehicle-model placements.
* `sonoran.caddisplay.world` allows saving and deleting station-display placements. If this value is blank, the current resource falls back to `aceObjectAdminUseMenu`.

Station administrators also need menu access. With the default configuration, vehicle administration permission alone does not grant station administration.

For example, grant access to the appropriate role instead of `builtin.everyone`:

```cfg
add_ace group.sonoran_cad_display sonoran.caddisplay allow
add_ace group.sonoran_cad_display_admin sonoran.caddisplay.admin allow
add_ace group.sonoran_cad_display_admin sonoran.caddisplay.world allow
```

If you use framework permissions instead, use `framework.adminJobNames` to choose which jobs can manage vehicle and station placements.

### Commands

* `/caddisplay` opens the vehicle display menu when seated in a supported vehicle, or the station display menu when on foot.
* `/caddisplay calibrate` opens screen alignment for display administrators. This is only needed for custom or misaligned screens.

<figure><img src="../../../.gitbook/assets/image (577).png" alt=""><figcaption></figcaption></figure>

### Keybind

The default keys are **G** to use a nearby display or request control, **Y** to accept a control request, and **L** to deny one.

Navigate to **Settings** > **Keybinds** > **FiveM** and look for the keybinds under the resource `sonorancad`.

<figure><img src="../../../.gitbook/assets/image (576).png" alt=""><figcaption></figcaption></figure>

### Usage

#### a. Prop Spawning

1. Stop the vehicle and stay seated. Run `/caddisplay`, choose **Spawn CAD Display**, and select the laptop.
2. Drag the colored arrows to move the laptop, or the colored squares to move it along two directions at once. Select **Rotate** to use the rotation rings. **Snap** helps make small, even adjustments.
3. Choose **Apply to this vehicle** to use the placement on your current vehicle. Administrators can choose **Save for this vehicle model** to reuse it for future vehicles with the same spawn code.

To reposition an existing laptop, open **Attach CAD Display** and choose **Position this vehicle's display with mouse**. **Cancel** discards your preview; closing without applying does not save a new placement. Keep the vehicle stopped throughout editing.

The editor opens a cabin view aimed at the laptop. These controls help check its position:

| Control | What it does |
| --- | --- |
| Hold the right mouse button and drag | Look around from the cabin viewpoint. |
| **Orbit laptop** | Switch right-drag to circling around the laptop. Toggle it off to look around again. |
| Mouse wheel | Zoom the editor view. |
| Hold the middle mouse button and drag | Lean the view a short distance. |
| **Look at display** | Turn toward the laptop from your current viewpoint. |
| **Cabin view** | Restore the starting view and zoom. |
| **Reset** | Restore the laptop's starting placement in the editor. |

These view controls do not change your normal gameplay camera settings. Built-in vehicle screens cannot be moved with the prop editor; use [screen alignment](#screen-alignment-for-server-owners) to fit the CAD to them.

<figure><img src="../../../.gitbook/assets/image (506).png" alt="SonoranCAD - CAD Display - Menu"><figcaption><p>Sonoran CAD - CAD Display - Main Menu</p></figcaption></figure>

#### b. Using Built-in Laptops

You can also use your vehicle’s built-in laptop as the CAD Display, without spawning a separate laptop prop.

Built-in screens need both the texture setup below and a [screen alignment profile](#screen-alignment-for-server-owners) for interaction. The texture name alone does not tell CAD Display where the screen is inside your vehicle.

<details>

<summary>b. Continued</summary>

1. This option requires additional configuration and third-party software. To begin, navigate to the `caddisplay_config.lua` file located in the `/sonorancad/configuration` folder. The `builtinScreens` section of this configuration file is where you define vehicles equipped with built-in laptops.
2. To obtain the `texture` name you will need to use a third-party software such as [OpenIV](https://openiv.com/).
3. Within OpenIV, click **File** in the top-right corner, then select **Open Folder** and navigate to the folder containing your vehicle files

<div><figure><img src="../../../.gitbook/assets/image (508).png" alt=""><figcaption><p>OpenIV - Open Folder Button</p></figcaption></figure> <figure><img src="https://cdn.discordapp.com/attachments/871554360285474847/1460761637798809641/image.png?ex=696817ca&#x26;is=6966c64a&#x26;hm=f11953db0efd5c7b19642b8cdeb01bfacbcf736580d476d32b78aafc7970eda3&#x26;" alt=""><figcaption><p>OpenIV - File Explorer</p></figcaption></figure></div>

4. Once OpenIV opens your selected folder, you will see your vehicle files. From here, open the `SPAWNCODE.ytd` file. A `.ytd` file is a texture dictionary that contains the textures used by the vehicle, such as screens, decals, and interior displays. For this tutorial, the spawn code used is `b3`.

<div align="center"><figure><img src="https://cdn.discordapp.com/attachments/871554360285474847/1460762366844207248/image.png?ex=69681877&#x26;is=6966c6f7&#x26;hm=7d3a6488930aa32624ab94a64a8ca190e712a9dedbbe452a91d19d75211758ce&#x26;" alt=""><figcaption><p>OpenIV - YTD Viewer</p></figcaption></figure></div>

5. Within the OpenIV Texture Viewer, scroll through the textures and locate the laptop screen texture. In the case of `b3`, the texture name is `laptop_screen`. Some vehicles may include multiple screen textures; ensure you select the one used for the in-vehicle laptop display.

<figure><img src="../../../.gitbook/assets/image (510).png" alt=""><figcaption><p>OpenIV - YTD Viewer - Laptop Screen Texture</p></figcaption></figure>

6.  Now that all required information has been gathered, you can begin adding it to the configuration. Be sure to note the texture’s dimensions as shown in OpenIV, as this information is required for proper display.

    **Important**: The texture dimensions must match exactly, or the display may not render correctly.

    For the tutorial vehicle, the configuration should appear as follows:

```lua
builtinScreens = {
    {
        vehicle = "b3",                 -- Vehicle spawn code
        screenTexture = "laptop_screen",-- Texture name from the .ytd file
        textureWidth = 256,             -- Texture width (must match OpenIV)
        textureHeight = 256             -- Texture height (must match OpenIV)
    }
},
```

</details>

#### c. Using the Screen

1. Close the handheld tablet if it is open. Sit in a vehicle with a configured display, or stand close to a station laptop.
2. Press **G**. If another player controls the display, they must approve your request first.
3. Once you have control, the camera moves toward the screen. Click, scroll, and type in CAD as you would in the tablet. Your CAD login and current page stay loaded when switching between the tablet and laptop.
4. Click **Exit computer** below the screen to return to the game. If **Escape** does not close the view while you are typing inside CAD, use **Exit computer**.

You do not need to open the tablet first. `/tablet open` remains available for handheld use.

Nearby players see a periodically refreshed image of the controlling player's CAD on the display. Their view can lag behind your clicks and typing. They must take control to interact with CAD themselves. The [CAD Tablet](tablet.md) also shows your CAD screen on the handheld prop for nearby players.

#### d. Passing Laptop Control

To transfer control of a laptop, have the other player press **G** while seated near the vehicle display or standing near the station display. This sends a control request to the current user.

Only one player may control the laptop at a time.

The current user can press **Y** to accept the request or **L** to deny it. If you are typing in CAD, click **Exit computer** first so the key is not entered into a CAD field. If accepted, the requesting player takes control using their own CAD session.

### Station CAD Display Props

Station CAD Displays are saved laptops that stay in police stations or other locations around the map.

1. With station administration permission, run `/caddisplay` while on foot to open **Station CAD Displays**. You do not need to be in a vehicle.
2. Choose **Place Station Display**, or select an existing display and choose **Edit Selected Display**.
3. Use the same colored arrows and rotation rings as vehicle placement. Right-drag to orbit the laptop, middle-drag to pan, and use the mouse wheel to move closer or farther away. **Frame object** brings the laptop into view; **Original view** restores the starting camera.
4. Click **Save station display** to keep your placement, or **Cancel** to discard your changes.

To remove a saved laptop, select it in the station menu and choose **Delete Selected Display**. If the menu reports missing permission, ask your server administrator to check your menu and station permissions. If station displays are disabled, enable `worldDisplays.enabled` first.

<div><figure><img src="../../../.gitbook/assets/image (602).png" alt=""><figcaption></figcaption></figure> <figure><img src="../../../.gitbook/assets/image (603).png" alt=""><figcaption></figcaption></figure></div>

### Screen Alignment for Server Owners

Use this when CAD does not fit the laptop screen, or a custom screen reports a missing interaction profile. The standard laptop already includes a starting profile.

1. Close the tablet and other menus. Stand within 3 meters of the station display, or sit in the stopped vehicle containing the screen.
2. Run `/caddisplay calibrate`. You need menu access and administration permission for the vehicle or station display you are adjusting.
3. Place the four numbered markers on the visible screen corners, viewed from the front: **top-left, top-right, bottom-right, bottom-left**. Aim and click to place a marker; press **Tab** to select the next one.
4. Use the **arrow keys** and **Page Up/Page Down** to fine-tune the markers, including their depth. Hold **Shift** for smaller movements or **Ctrl** to move all four together. If clicking does not land on the screen, use these keys instead.
5. Press **Enter** to apply the alignment locally, then **G** to test it. **R** resets the corners, **F** flattens the fourth corner if needed, and **Backspace** cancels.
6. To keep the alignment for everyone, copy the block printed in the **F8 console** into your active `caddisplay_config.lua`. For a separate laptop prop, place it inside `interaction.models`. For a built-in screen, place it inside that vehicle's `builtinScreens` entry. Replace any existing profile for the same model, then restart `sonorancad`.

{% hint style="info" %}
Pressing **Enter** only applies a temporary test on your client. The alignment is lost after a resource restart unless you copy it into the configuration. Calibration does not save or move the laptop's placement.
{% endhint %}

### Troubleshooting Laptop Interaction

* **G does not open the laptop:** close the handheld tablet and other menus, move closer, and check the on-screen notification. Server owners should confirm both `sonorancad` and `tablet` are updated and running.
* **Missing screen profile or an incorrectly aligned screen:** use the screen alignment steps above. Built-in screens need their own profile even if their texture already shows CAD.
* **Laptop interaction is disabled:** the server owner can enable `interaction.enabled`. Players can use `/tablet open` in the meantime.
* **Placement will not start:** stop the vehicle and close any other camera or placement mode before trying again.
