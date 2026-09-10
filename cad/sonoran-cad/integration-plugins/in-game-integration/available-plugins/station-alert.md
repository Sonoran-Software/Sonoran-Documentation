---
description: >-
  Our Station Alert integration resource allows you to toggle fire station
  doors, lights, and send text-to-speech messages directly from the CAD!
---

# Station Alert

<figure><img src="../../../.gitbook/assets/station_alert_promo.png" alt=""><figcaption><p>Sonoran CAD x Inferno Collection</p></figcaption></figure>

{% hint style="warning" %}
This third-party resource from Inferno Collection is provided **free** only with the **Pro** version of Sonoran CAD and is a **separate download**.

If your community is not on the **Pro** version, you may still purchase the paid resource from Inferno Collection to use with any version of Sonoran CAD.
{% endhint %}

## Promotional Video

<details>

<summary>Watch the Promotional Video</summary>

{% embed url="https://www.youtube.com/watch?v=V0MBgqLFetA" %}

</details>

## Installation Guide

### 1. Download the Resource

Users can get the Station Alert resource from Inferno Collection.

* For Sonoran CAD **Pro** users, [download the FREE Station Alert (Sonoran Edition) package](https://sonoran.link/FtMqEnXF).
* For all other Sonoran CAD users, [purchase the paid Station Alert package](https://sonoran.link/AUd3Abat).

This resource is managed through Tebex and will require you to login with FiveM. Be sure to login **using the account that has the keymaster license** for your server.

Once purchased you can [download the resource from the CFX.re portal](https://portal.cfx.re/assets/granted-assets?search=Station+Alert).

### 2. Install the Resource

We suggest installing the `inferno-station-alert` folder within the `[sonorancad]` folder your integration framework is installed in. The final result would look like the image below:

<figure><img src="../../../.gitbook/assets/image (67).png" alt="" width="375"><figcaption><p>Station Alert: CAD Installation</p></figcaption></figure>

### 3. Start the Resource

In your `server.cfg` add the following new lines:

```lua
exec @inferno-station-alert/config.cfg
ensure inferno-station-alert
```

### 4. Configuration Options

Information on adding stations, lights, speakers, and more can be found in the [quick start guide](https://docs.inferno-collection.com/resources/station-alert/usage/).

The [configuration documentation](https://docs.inferno-collection.com/resources/station-alert/config/) provides further customization options.

## Usage

### 🌎 Live Map

On the live map, ensure you toggle station blips on. Clicking on a station will open the alert panel.

The following example:

* Opens doors `1` and `2`, closes door `3` at the `Roxwood` station
* Sets the station indicator lights to red and magenta at the `Roxwood` station
* Plays `Example Message` as text-to-speech at station `Roxwood`
* Plays `EMS Priority 1` from the station alert resource tones at station `Roxwood`

<figure><img src="../../../.gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure>

### 🚨 Station Alert Panel

Dispatchers can also add the dedicated `Station Alert` panel in their custom layouts.

Here, you can type-to-filter and select multiple stations at once.

<figure><img src="../../../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>

### 📞 Dispatch Call Editor

The dispatch call editor has a shortcut to quickly access nearby stations from an emergency call.

When an emergency call from in-game is imported into the dispatch editor, the `Nearby Stations` icon will be available. Selecting one of these nearby stations will prefill call information into the station alert builder panel in your layout.

<figure><img src="../../../.gitbook/assets/image (607).png" alt=""><figcaption></figcaption></figure>
