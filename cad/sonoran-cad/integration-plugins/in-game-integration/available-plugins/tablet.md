---
description: >-
  Utilize an in-game overlay to attach to calls, view information, and more. Or,
  use the dedicated tablet item to access your full CAD screen.
---

# Tablet & Mini-CAD

<figure><img src="../../../.gitbook/assets/cad_promo_tablet_mini_cad.png" alt=""><figcaption><p>Sonoran CAD - Mini-CAD</p></figcaption></figure>

## Activation Guide

### 1. Download and Install the Resource

{% hint style="info" %}
This resource is already **enabled by default** inside of the `sonorancad.cfg` when installing the [Sonoran CAD FiveM resource](../fivem-installation/).
{% endhint %}

Server owners using [CAD Display](cad-display.md) should update `tablet` and `sonorancad` together so vehicle and station laptops can open the interactive CAD view.

### 2. Ensure Players are Linked

Ensure the player has already [linked their CAD](../link-user-in-game.md) for this integration to work.

## Configuration

<details>

<summary>Optional: URL Convar</summary>

If you wish to use a custom login page, you can set a convar in your server.cfg.\
\
The easiest way to show your [custom login page](../../../tutorials/customization/custom-login-page.md) is to use a query string.

`"https://sonorancad.com/?comid=YOUR_COMMUNITY_ID_HERE"`

Simply replace `YOUR_COMMUNITY_ID_HERE` in the URL with your [community ID](../../../tutorials/getting-started/finding-your-community-id-and-authentication-code.md).\
EX: `https://app.sonorancad.com/?comid=midwestrp`

Add the following to your server.cfg **before** starting the tablet resource:

```
setr sonorantablet_cadUrl "YOUR_URL_HERE"
```

Fill in with your actual URL above with the comid you want.

</details>

## Keybinds

Users can customize keybinds for the tablet and Mini-CAD.

Navigate to **Settings** > **Keybinds** > **FiveM** and look for the keybinds under the resource `tablet`.

<figure><img src="../../../.gitbook/assets/image (590).png" alt=""><figcaption></figcaption></figure>

## Commands

The commands below use the default `/tablet` command. Running `/tablet` by itself shows command help; use `/tablet open` to open the handheld tablet.

* `/tablet open` Opens the in-game tablet
* `/tablet size [width] [height]` Resize the tablet to best fit your screen. This size persists on reload of the client.
* `/tablet checklink` Checks again whether your CAD account is linked to the server's community.
* `/tablet refresh` Force-refresh the page when it's not loading properly.
* `/tablet mini open` Opens the mini-CAD
* `/tablet mini help` Displays a list of commands for the mini-CAD
* `/tablet mini prev` Pages to the previous dispatch call on the mini-CAD
* `/tablet mini next` Pages to the next dispatch call on the mini-CAD
* `/tablet mini attach` Attaches to the dispatch call on the mini-CAD
* `/tablet mini detail` Toggles expanded information on the mini-CAD
* `/tablet mini refresh` Manually refresh the call information on the mini-CAD
* `/tablet mini size [width] [height]` Resize the mini-CAD to best fit your screen. This size persists on reload of the client.

<figure><img src="../../../.gitbook/assets/image (591).png" alt=""><figcaption></figcaption></figure>

## Mini-CAD Usage

The mini-CAD displays as an overlay in-game.

<figure><img src="../../../.gitbook/assets/image (592).png" alt="" width="184"><figcaption></figcaption></figure>

#### Move and Close

You can close or move the Mini-CAD by opening the tablet, and interacting with the Mini-CAD window.

#### Controls

* Use the `Left Arrow Key` to display the previous call.
* Use the `Right Arrow Key` to display the next call.
* Use the `K` key to attach or detach to/from the displayed call.
* Use the `L` key to toggle display of the call details.
* **All these commands can be edited from the Keybinds menu.**

## Tablet Usage

<figure><img src="../../../.gitbook/assets/image (593).png" alt="" width="375"><figcaption></figcaption></figure>

When in-game, the tablet can be used to view your unit's Sonoran CAD police, fire, ems, or dispatch panel.

With the [CAD Display submodule](cad-display.md) enabled, nearby players can see a periodically refreshed image of your CAD on the handheld tablet prop. Their view may lag behind what you are doing.

### Using a Vehicle or Station Laptop

With [CAD Display](cad-display.md) enabled, you can use CAD directly on a configured vehicle or station laptop:

1. Close the handheld tablet, then press **G** while seated near the vehicle display or standing near the station laptop.
2. If another player controls the laptop, wait for them to accept your request. Once you have control, the camera moves toward the laptop screen.
3. Click, scroll, and type normally in CAD. Your login and current page carry over between the handheld tablet and laptop.
4. Click **Exit computer** beneath the screen when you are finished. Use this button if **Escape** does not respond while a CAD text field has focus.

You do not need to open the handheld tablet before using a laptop. Your saved tablet size and position are kept when you leave the laptop view. Only the controlling player can interact; nearby players see a periodically refreshed image of that player's screen.

See [CAD Display](cad-display.md) for laptop placement, control requests, permissions, and screen alignment.

## Auto User Link

When a user signs into the CAD using the in-game tablet, their account will be [automatically linked](../link-user-in-game.md).

If your account is not recognized, run `/link` in game and follow the linking instructions, then run `/tablet checklink`. The tablet no longer shows the old red registration bar or **Retry** button; use these commands to check your link.

## Known Issues

### Timeout SonoranCAD::mini:CallSync

<details>

<summary>Timeout SonoranCAD::mini:CallSync</summary>

Some users may see `SonoranCAD::mini:CallSync` listed multiple times after recieving a timeout.

When your client recieves a timeout from the server for any reason, it will display a list of the most recent requests. Because Sonoran's Mini-CAD runs frequent sync requests, these will consequenty be displayed.

**This is not an issue with or related to Sonoran CAD**. This is a general timeout between the client and server listing all recent calls as diagnostic information.

![Sonoran CAD Mini - Timeout Debug](<../../../.gitbook/assets/Screen Shot 2022-01-06 at 9.28.58 PM.png>)

</details>

### Tablet Showing Grey

<details>

<summary>Tablet Showing Grey</summary>

Some users may get a grey, black or blank screen when using the Sonoran Login method before and then opening the tablet and it just being a grey screen.

To resolve this, close FiveM, then to go to your `FiveM Application Data` folder then to `data` and then delete the `nui-storage` folder.

If you still are having issues reach out to our [support team](https://support.sonoransoftware.com).

![Sonoran CAD Tablet - Blank Screen Issue](<../../../.gitbook/assets/Tablet Blank Error.png>)

</details>
