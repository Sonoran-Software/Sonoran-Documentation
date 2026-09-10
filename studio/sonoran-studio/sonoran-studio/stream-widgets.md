---
description: >-
  Add a Sonoran Studio browser source to OBS, TikTok LIVE Studio, or Streamlabs
  Desktop.
icon: display
---

# Stream Widgets

## What are Stream Widgets?

Stream Widgets show live data like unit information, radio broadcast notifications, dispatch call data, and more. These are placed on your stream to increase audience engagement.

### 1. Widget Setup

After logging into Sonoran Studio, you can customize your canvas layout and widget information.

### 2. Canvas Dimensions

Depending on your streaming platform, your canvas size will need to be customized. Typically, vertical streaming like TikTok uses 1080 x 1920 px. Horizontal streams like YouTube and Twitch use 1920 x 1080 px.

Customize the size to fit your specific streaming platform.

<figure><img src="../.gitbook/assets/image (3).png" alt="" width="292"><figcaption></figcaption></figure>

### 3. Widget Layouts

Customizing your widgets is simple. Toggle on specific widgets, drag them around the canvas, and resize as needed.

Additionally when a widget selected, the background colors, font size, icons, and more can be edited.

Open **Icons & Sharing** to upload separate icons for CAD widgets, Radio widgets, and the **Unit HUD** bodycam display. Unit HUD icon changes apply only to the bodycam HUD, so the remaining CAD widgets can keep their own icon.

For temporary notification widgets, select **TEST** to show the example in both the canvas editor and every connected stream browser source using that layout. Keep your OBS, TikTok LIVE Studio, or Streamlabs browser source active while testing. Select **HIDE** to remove the editor preview; the live example closes automatically according to the widget's notification duration.

Studio includes separate temporary **Radio Tone** and **CAD Tone** widgets. Radio Tone appears when a tone is played to your Radio client. CAD Tone appears when your signed-in CAD client is one of the recipients selected for a tone. Each widget has its own position, styling, animation, display duration, and **TEST** control, so a CAD tone and Radio tone do not replace one another.

<div><figure><img src="../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure> <figure><img src="../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure></div>

### LSPDFR Widget Support

The [Sonoran Studio LSPDFR plugin](smart-lighting.md#lspdfr) can populate three overlay widgets without a Sonoran CAD community:

| Widget                | Data available from LSPDFR                                                        |
| --------------------- | --------------------------------------------------------------------------------- |
| Unit HUD              | Player persona name, agency, derived status, and current GTA street/area          |
| Attached Call         | Generated session call ID, callout name, and callout street/area after acceptance |
| Dispatch Notification | Callout name, message, and advisory when a callout is displayed                   |
| Radio Transmission    | Not supported by LSPDFR                                                           |
| Panic                 | Not supported by LSPDFR                                                           |

LSPDFR does not natively provide a callsign/unit number, postal, call priority/code, radio activity, or panic state. Missing rows use your configured fallback or remain blank. For location, select **Full** precision; **Postal only** has no LSPDFR postal value to display. See the [LSPDFR support details and install guide](smart-lighting.md#lspdfr) for lifecycle behavior and callout-pack compatibility.

### 4. Add Source to Streaming App

Once your widgets are configured, it's time to add them to your Stream! Select the **Setup Guide** for specific instructions for your platform. You will copy the **Browser Source URL** in the studio and add a new browser layer in your streaming app.

<img src="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FSNDrCcXxwsnYIi72Ym9Z%2Fuploads%2FWHgiBFycHCMAlW0X2NrX%2Fstreaming-setup-guide.webp?alt=media&#x26;token=292432bb-df7b-446a-80ca-83a2e9ade920" alt="Sonoran Studio streaming setup guide" width="375">

{% tabs %}
{% tab title="OBS Studio" %}
1. Open the scene that contains your game and select **+** in the Sources dock.
2. Choose **Browser**, select **Create new**, name it **Sonoran Studio**, and select **OK**.
3. Turn **Local file** off and paste your private Sonoran overlay URL into **URL**.
4. Enter the exact **Width** and **Height** shown in Studio.
5. Leave **Shutdown source when not visible** off so CAD and Radio events stay connected. Keep the transparent custom CSS OBS supplies.
6. Keep Sonoran Studio above your game capture in the Sources list. If necessary, use **Transform → Reset Transform**, then **Fit to Screen**.
7. Trigger a Studio **TEST** before going live.
{% endtab %}

{% tab title="TikTok LIVE Studio" %}
1. Open the landscape or portrait scene you plan to broadcast and select **Add source**.
2. Choose **Link**. Some versions call this a webpage or URL source.
3. Paste your private HTTPS overlay URL and name the source **Sonoran Studio**.
4. Set the source width and height to the exact Studio values when those fields are available. Otherwise, resize it to fill the complete scene.
5. Move it above your game, screen, or camera capture.
6. Check the mobile preview, then trigger a Studio **TEST**.
{% endtab %}

{% tab title="Streamlabs Desktop" %}
1. Open your gameplay scene, go to **Sources**, and select **+**.
2. Choose **Browser Source**, name it **Sonoran Studio**, and select **Add Source**.
3. Paste your private overlay URL.
4. Set **Width** and **Height** to the exact Studio values. You can normally leave FPS at 30.
5. Resize the source to fill the canvas and keep it above your game capture.
6. Trigger each Studio **TEST** before going live.
{% endtab %}
{% endtabs %}

{% hint style="info" %}
If your browser source isn't the correct size in your streaming app, inspect the properties and ensure you've set the dimmensions to match the canvas size from the Studio.

\
Verify the source width and height, reset its transform, and fit it to the scene again. For portrait broadcasts, confirm both Studio and the streaming app use the vertical dimensions.
{% endhint %}

### 5. Stream!

Next, it's time to go live! For CAD or Radio widgets, make sure you are logged into the community using the same account as the Studio app. For LSPDFR widgets, keep the signed-in Studio Windows app open, select **LSPDFR** under Lighting, and run the Studio LSPDFR plugin.
