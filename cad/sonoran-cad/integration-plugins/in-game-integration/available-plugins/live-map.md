---
description: >-
  Sonoran CAD's 2D and 3D interactive live map allows you to update and view
  live unit locations, emergency calls, in-game road signs, and more!
---

# Live Map

<figure><img src="../../../.gitbook/assets/sonoran_3d_live_map_promo.png" alt=""><figcaption><p>Sonoran CAD - Live Map</p></figcaption></figure>

{% hint style="info" %}
This submodule is built into the Sonoran CAD FiveM resource and requires no additional configuration.
{% endhint %}

### 1. 2D Map Selection

In the admin panel, navigate to **Advanced** > **In-Game Integration** > **Live Map**

Here, you can enable and select a default map option for GTA, Roblox, or others. Additionally, pro communities can [upload a custom map](live-map.md#using-a-custom-map-fivem).

<figure><img src="../../../.gitbook/assets/Screenshot 2024-11-08 at 3.11.55 PM.png" alt=""><figcaption><p>Sonoran CAD - Live Map Type Selection</p></figcaption></figure>

### 2. Link In-Game

Don't forget to have each community member link their in-game user to the CAD.

[For FiveM users, run `/link` in-game.](../link-user-in-game.md)

For Roblox users, ensure your [Roblox account is linked to your Sonoran account](../../erlc/getting-started.md#linking-your-roblox-account).

### 3. User Access Permission

Users will need to be granted access to view the live map. This can be done via [Discord role sync](../../discord-bot-integration.md), [permission key](../../../tutorials/getting-started/permissions.md#permission-keys), or by [manually granting permissions](../../../tutorials/getting-started/permissions.md#manually-granting-permissions) in the admin menu.

### **4. Enjoy!**

In the Police, Fire, EMS, or Dispatch window you can now click the "Live Map" button to view your new live map! Selecting a blip will show it's updated position and unit information.

This is found in the task bar's start menu under **Unit Management** > **Live Map**\
You can also [pin the live map button to your taskbar](../../../tutorials/customization/customizing-your-layout.md#7-tab-system) for easy access.

{% hint style="info" %}
The live map will only show units that are in your server and also actively logged into the police, fire, or EMS panel in the CAD. Be sure to have your [API ID](../../../api-integration/getting-started/setting-your-api-id.md) set.
{% endhint %}

<figure><img src="../../../.gitbook/assets/image (526).png" alt="" width="191"><figcaption></figcaption></figure>

## **Using the Live Map**

### **Map Controls**

#### **Postal and Location Search**

{% hint style="warning" %}
The postal search functionality requires the **Pro** version of Sonoran CAD.

For more information, view our [pricing](../../../pricing/faq/) page.
{% endhint %}

With the [postals](postals.md) submodule configured, you can manually enter and search for a postal code on the live map.

Units, emergency calls, and dispatch calls with locations will also display a red pin icon. Clicking the icon will open the map and zoom to the location.

<figure><img src="../../../.gitbook/assets/Recording 2026-02-26 121354.gif" alt=""><figcaption></figcaption></figure>

#### Blip Customization

You can toggle specific blips visibility and outline colors for police, fire, EMS, and dispatch.

![Live Map - Blip Customization](<../../../.gitbook/assets/image (207).png>)

### **Unit Blips**

Unit blips display the live location of all police, fire, EMS, and dispatch units in-game. You can hover over a unit for brief details, or click on one for more options.

You can also easily filter the map to specific units by selecting them in the active units panel.

![Live Map - Unit Filter](../../../.gitbook/assets/map_filter.gif)

#### Menu Options

Clicking on a unit blip allows you to add the unit to a call, add the unit to a group, send the unit lookup results, edit the unit's information, toggle their panic state, and more.

![Live Map - Unit Blip Options](<../../../.gitbook/assets/image (211).png>)

#### Drag-and-Drop

{% tabs %}
{% tab title="Roblox 2D" %}
Unit Blips Support:

* Drag to the call editor
* Drag to an active call
* Drag to a unit group
* Drag to the unit group header to create a new group
* Drag to the lookup window or minimized tab
* Drag to the timer window or minimized tab
* Drag to the tone board window or minimized tab
{% endtab %}

{% tab title="FiveM 2D" %}
* Drag-and-drop an ERS Callout
* Drag-and-drop a dispatch call to a location
* Drag-and-drop a dispatch call to the editor
{% endtab %}

{% tab title="FiveM 3D" %}
* Drag-and-drop an ERS Callout
* Drag-and-drop a dispatch call
{% endtab %}
{% endtabs %}

### Emergency Call Blips

Emergency calls placed in-game will also appear on the live map. You can hover over the blip for the call details.

#### Menu Options

Clicking on the emergency blip allows you to import the call to your editor or remove the emergency call.

![Live Map - Emergency Call Blip](<../../../.gitbook/assets/image (175).png>)

### Smart Sign Blips

[Smart signs](smart-signs.md) will also appear as blips on the map. You can click on these to edit the signs in-game.

![Live Map - Smart Signs](<../../../.gitbook/assets/image (323).png>)

## FiveM Custom Map

{% hint style="danger" %}
This feature requires the **pro** version of Sonoran CAD.\
For more information, view our [pricing](https://app.gitbook.com/s/-M4pGN81fb4R6zFhodcu/pricing) page.
{% endhint %}

Sonoran CAD allows communities to upload custom map images to the integrated, hosted live map. If your community does not use one of the map types provided, you can upload the images manually.

<details>

<summary>Extract Images</summary>

Extract the images from the YTD files with a program like OpenIV.\
**You will need six files named exactly as follows:**\
`minimap_sea_0_0.png`\
`minimap_sea_0_1.png`\
`minimap_sea_1_0.png`\
`minimap_sea_1_1.png`\
`minimap_sea_2_0.png`\
`minimap_sea_2_1.png`

![OpenIV - Extract Images](<../../../.gitbook/assets/image (400).png>)

![OpenIV - Save Images](<../../../.gitbook/assets/image (220).png>)

</details>

<details>

<summary>Upload Images</summary>

Navigate to Admin > Advanced > In-Game Integration > Live Map and Push Events\
Select "Upload Custom" and upload all six correctly named files.

![Live Map - Custom Map Uploader](<../../../.gitbook/assets/image (366).png>)

</details>

<details>

<summary>File Size</summary>

Custom map images are limited to 30MB each. **However, if you are uploading more than 100MB of images total, you will need to upload in separate batches.**

</details>

### Roxwood Expansion

<details>

<summary>Roxwood Expansion</summary>

If your community is utilizing the Roxwood map expansion, there will be additional tiles to upload.

* `minimap_sea_-1_-1.png`
* `minimap_sea_-1_0.png`
* `minimap_sea_-1_1.png` (Optional, blank tile to the right)

Additionally, two existing map tiles will need to be updated, as they contain parts of both the main island and the Roxwood expansion.

* `minimap_sea_0_-1.png`
* `minimap_sea_0_0.png`
* `minimap_sea_0_1.png`

<figure><img src="../../../.gitbook/assets/Diagram.png" alt=""><figcaption></figcaption></figure>

</details>

### Cayo Perico Expansion

<details>

<summary>Cayo Perico Expansion</summary>

If your community is utilizing the Cayo Perico map expansion, there will be extra tiles to upload. Ensure these are named as:

* `minimap_sea_2_1.png`
  * Bottom right of the main island + top right of Cayo Perico
* `minimap_sea_2_2.png`
* `minimap_sea_3_1.png`
* `minimap_sea_3_2.png`

<figure><img src="../../../.gitbook/assets/image (489).png" alt="" width="375"><figcaption></figcaption></figure>

</details>

## Roblox Custom Maps

{% content-ref url="../../erlc/3d-live-map.md" %}
[3d-live-map.md](../../erlc/3d-live-map.md)
{% endcontent-ref %}

## Troubleshooting

### 3D Live Map not Loading

The 3D live map uses WebGL, an open source something.

In Chrome, navigate to `chrome://gpu/` and check if `WebGL` is **Disabled**. If so, try the following steps:

<figure><img src="../../../.gitbook/assets/image (527).png" alt="" width="316"><figcaption></figcaption></figure>

* **Chrome** > **Settings** > **System** > **Use Graphics Acceleration When Available**
* Ensure Graphics Drivers are Up-to-Date
* Fully restart your web browser

### Custom Blip Integration Panels

Custom blips can display interactive [Integration Panels](../../../api-integration/api-endpoints-v2/integration-panels/README.md) inside their menus in both 2D and 3D map views. Click a configured custom blip to view its controls. The connected integration must publish the panel and its state, process actions, and send back the updated result.

Developers can attach a panel and instance using the blip's `data` entries. The [Smart Signs example](../../../api-integration/api-endpoints-v2/integration-panels/examples/smart-signs.md) shows an individual sign editor, including the API setup and action handling. This is a custom integration example; adding a blip alone does not implement the game-side controls.
