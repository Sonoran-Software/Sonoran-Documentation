---
description: Implements the Wraith ARS 2X plate reader for automated plate reading.
---

# WraithV2

<figure><img src="../../../.gitbook/assets/wraith_plate_reader_promo.png" alt=""><figcaption></figcaption></figure>

## Showcase Video

View our [WraithV2 showcase video](https://www.youtube.com/watch?v=5oL7Mg6LQgg)!

## Activation Guide

### 1. Download and Install the Resource

{% hint style="info" %}
This submodule is already **enabled by default** when installing the [Sonoran CAD FiveM resource](../fivem-installation/).

\
The [locations submodule](locations.md) includes all logic required to send bodycam images to the CAD and is **already enabled by default**. Keep this submodule enabled to maintain functionality.
{% endhint %}

{% hint style="info" %}
Use of this submodule requires the Sonoran version of [Wraith ARS 2X](https://github.com/sonoran-Software/wk_wars2x)[ ](https://github.com/Sonoran-Software/wk_wars2x)radar and plate reader to function. This resource is bundled with the [Sonoran CAD FiveM Resource](../fivem-installation/) as `wk_wars2x`.
{% endhint %}

### 2. Adjust the Configuration

The bodycam settings are stored inside of the `/configuration/wraithv2_config.lua` file.

{% hint style="info" %}
WraithV2 now uses the shared FiveM notification system configured in `/configuration/config.json` with `notificationSystem`.

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

<summary><code>wraithv2_config.lua</code></summary>

| Config Option       | Description                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------ |
| useExpires          | use vehicle registration expirations, or not                                               |
| useMiddleInitial    | use middle initials?                                                                       |
| alertNoRegistration | alert if no registration was found on scan?                                                |
| statusUid           | Custom record field UID containing the status                                              |
| expiresUid          | Custom record field UID containing the expiration date                                     |
| flagOnStatuses      | List of statuses to flag/alert on                                                          |
| vehTypeFilter       | List of Classes that will NOT get ran through CAD                                          |
| notificationTimers  | Time in MS, for how long each alert type will last                                         |
| customFields        | Additional custom fields to show in your ALPR messages, such as insurance expiration, etc. |

</details>

### 3. Ensure Players are Linked

Ensure the player has already [linked their CAD](../link-user-in-game.md) for this integration to work.

### 4. Custom Record Handling

The in-game radar can alert you about expired registrations, BOLOs, warrants, and more:

<details>

<summary>Alert on Vehicle Status (Expired, Stolen, etc.)</summary>

When a vehicle is scanned by your radar, you can be notified if the vehicle registration status is inactive, expired, etc.

**1. Get the Status field ID**

In the custom record configuration panel, copy the field ID for your vehicle registration's status field. Typically this would be a dropdown (or "select") type field with options like "Active", "Pending", "Expired", etc.

![](<../../../.gitbook/assets/Screenshot 2024-11-12 at 7.36.39 PM.png>)

**2. Set the Field ID in your Config**

Ensure the `statusUid` configuration value matches your status field ID from the custom record.

If your vehicle registration record has an expiration date value in it, be sure to set the `expiresUid` value to its field ID and set `useExpires` to `true`. This will display the registration expiration date in the notifications.

![](<../../../.gitbook/assets/Screenshot 2024-11-12 at 7.44.27 PM.png>)

**3. Set Status Flag Options**

Customize the `flagOnStatuses` list to configure which vehicle registration statuses your radar will alter you on.

If the vehicle registration's status field (the record field ID that matches your `statusUid`) matches one of the `flagOnStatuses` values, your in-game radar will alert you.

![](<../../../.gitbook/assets/Screenshot 2024-11-12 at 7.46.54 PM.png>)

</details>

<details>

<summary>Alert on BOLO or Warrant</summary>

When a vehicle is scanned by your radar, you can be notified of any active warrant or BOLO record with that license plate on it.

**1. Ensure your Warrant or BOLO Record has a Status Field**

In order for the radar to determine if the warrant or BOLO record is active, ensure your custom record has a `status` type field on it.

![](<../../../.gitbook/assets/Screenshot 2024-11-12 at 7.50.05 PM.png>)

**2. Ensure your Warrant or BOLO Record has a Plate Field**

In order to match the vehicle plate with a record, ensure your custom record has a field with the field ID set to `plate`.

![](<../../../.gitbook/assets/Screenshot 2024-11-12 at 7.51.37 PM.png>)

**3. Receive In-Game Alerts**

Your radar will alter you when a scanned vehicle matches:

* A Warrant or BOLO record with the `status` type field of `ACTIVE`
* A license plate matching the `plate` field ID of one of those active records

</details>

### 5. Custom Field Display

You can configure custom fields to display in the Wraith ALPR notification. The fields are configured in the `wraithv2_config.lua` under the `customFields` section. You can get your custom field ID's from the Sonoran CAD Admin menu > Customize > [Custom Records](../../../tutorials/customization/creating-custom-record-and-report-types.md) section.

<div><figure><img src="../../../.gitbook/assets/image (499).png" alt=""><figcaption><p>SonoranCADFiveM - WraithV2 Configuration</p></figcaption></figure> <figure><img src="https://cdn.discordapp.com/attachments/630973482221436938/1440107400320516196/image.png?ex=691cf408&#x26;is=691ba288&#x26;hm=c7286089dfef9cb96efe48fc74d591f9a4b0ed24e8aa864115d71918282b2b49&#x26;" alt=""><figcaption><p>Sonoran CAD - Custom Records</p></figcaption></figure></div>

## Usage

For more information on using the in-game UI, please view the Sonoran version of the [Wraith ARS 2X](https://forum.cfx.re/t/release-wraith-ars-2x-police-radar-and-plate-reader-v1-2-4/1058277)[ ](https://github.com/Sonoran-Software/wk_wars2x)release information.\
**Results are sent directly to your CAD when a license plate is locked.**

WraithV2 now reuses a shared plate lookup cache. When a plate is scanned or locked, SonoranCAD caches the parsed plate result for 60 seconds and reuses it for repeat scans of the same normalized plate instead of running the full CAD lookup each time.

### Developer Usage

If you are building your own server-side resource and want the same parsed data that Wraith uses, call the shared export documented in [Server Functions](../framework-development-documentation/server-functions.md#cadgetplateinformation):

```lua
exports.sonorancad.cadGetPlateInformation("ABC123", function(regData, vehData, charData, boloData, warrantData)
    local registration = regData[1]
    local vehicle = vehData[1]
    local owner = charData[1]

    print(json.encode({
        registration = registration,
        vehicle = vehicle,
        owner = owner,
        boloData = boloData,
        warrantData = warrantData
    }))
end, {
    autoLookup = "123456789123456789",
    cacheTtlMs = 60000
})
```

Use `forceRefresh = true` in the options table if you need to bypass the existing cached result and pull fresh data immediately.

![Wraith ARS 2X Controls](<../../../.gitbook/assets/image (178).png>)

## Sonoran wk\_wars2x

{% hint style="info" %}
These features are not found in the original wk\_wars2x resource, and only come packaged with our [Sonoran CAD FiveM Resource](../fivem-installation/).
{% endhint %}

### Additional Features

* Added the ability to blacklist certain vehicle classes via the config.lua, these blacklisted vehicles will show on the plate reader as the `CONFIG.noPlateValue` value (default: "NO PLATE").
* Added the feature `CONFIG.realisticPlateScanning`. This feature is disabled by default due to certain vehicles having incorrect metadata causing this feature to display `CONFIG.noPlateValue` falsely. Behavior when enabled: when you are traveling toward/away from a vehicle that does not have a front/back plate the plate reader will not be able to scan it and will display the `CONFIG.noPlateValue` value.
* Added custom sounds when a BOLO, Warrant or unregistered vehicle plate is scanned.

### Realistic Plate Scanning

Set `CONFIG.realisticPlateScanning` to `true` to enable only scanning vehicles with the ALPR when they have a plate.

Note: Some vehicles may show a plate due to missing vehicle metadata or being able to remove the plate with extras.

<figure><img src="../../../.gitbook/assets/Screenshot 2023-11-14 172304.png" alt=""><figcaption><p>Sonoran wk_wars2x - Additional Config Options</p></figcaption></figure>

### Custom Alert Tones

Custom tones will now play when you scan a plate that is has either a BOLO, Warrant or is unregistered. These tones can be customized by replacing the existing files in the `/sonorancad/submodules/wraithv2/sfx` folder with your own. **Please note the files names need to be the same as the ones you are replacing**

### Doppler Sounds

The Doppler Effect allows the radar to automatically capture vehicle speeds while in motion. As patrol speed increases, the radar adjusts its frequency shift calculations to accurately track and lock moving targets in front of or behind the unit—enabling reliable speed detection without requiring the officer to remain stationary.

The doppler effect can be adjusted by opening the **controller** (F5 by default) > **Menu**

<figure><img src="../../../.gitbook/assets/image (53).png" alt="" width="209"><figcaption></figcaption></figure>

The doppler effect can be adjusted per client from a volume of 0 (off) to 5 (max volume). Additionally servers can disable the entire system via the configuration option `CONFIG.enable_doppler`

<div><figure><img src="../../../.gitbook/assets/image (54).png" alt=""><figcaption><p>Sonoran CAD - Wraith WkWars2x - Doppler Off</p></figcaption></figure> <figure><img src="https://cdn.discordapp.com/attachments/871554360285474847/1468339426567655475/image.png?ex=6983a927&#x26;is=698257a7&#x26;hm=185cbe9959a1c6bf0c74d41335e06ac94819dc1c41553275b3648d2c954c3bc8&#x26;" alt=""><figcaption><p>Sonoran CAD - Wraith WkWars2x - Doppler Max Volume</p></figcaption></figure></div>

#### Doppler Direction

You can customize the antenna that will trigger the doppler noise via the client settings menu between the options of "btH" (both), "rEr" (rear) or "FNt" (front). This will create the doppler audio effect based upon a vehicles speed in the respective antenna

<div><figure><img src="../../../.gitbook/assets/image (55).png" alt=""><figcaption><p>Sonoran CAD - Wraith WkWars2x - Front Only</p></figcaption></figure> <figure><img src="https://cdn.discordapp.com/attachments/871554360285474847/1468340770007285873/image.png?ex=6983aa68&#x26;is=698258e8&#x26;hm=5e561a7c6de7e7abfd76fb3617d9c188f1181e87f5649c5349ab5b915061f4a6&#x26;" alt=""><figcaption><p>Sonoran CAD - Wraith WkWars2x - Both Antennas</p></figcaption></figure> <figure><img src="https://cdn.discordapp.com/attachments/871554360285474847/1468340770363674827/image.png?ex=6983aa68&#x26;is=698258e8&#x26;hm=540beada2276ca6ae389cd118061d15273004f60076545ddd45c112c8f2842e6&#x26;" alt=""><figcaption><p>Sonoran CAD - Wraith WkWars2x - Rear Only</p></figcaption></figure></div>

## Troubleshooting

### AI Cars are Spamming the Reader

The framework ships with the `wk_wars2x` plate reader included. This will have the `config.use_sonorancad` set to `true`. When enabled, the plate reader will not run a lookup on any AI vehicle.

![Wraith - Use Sonoran CAD Config Option](<../../../.gitbook/assets/Screen Shot 2022-04-02 at 4.18.19 PM.png>)

### Vehicles Aren't Being Flagged

#### Status

Keep in mind that AI vehicles won't display or be ran unless there's a vehicle registration record added to the CAD with that plate.

Ensure that you've correctly followed [step 5](https://github.com/Sonoran-Software/SonoranCAD-Documentation/blob/master/broken/pages/-M7U3aBbrsfrj1Cmeqmm/README.md#5.-custom-record-handling) and the `statusUid` and `expirationUid` fields have been set correctly, both in the CAD record template and the submodule config.

Ensure that the `flagOnStatuses` array has the exact string/text values that match the options in your custom record template.

#### BOLO and Warrant

Ensure that your custom BOLO and Warrant records have a field with the `type` set to `status`. Otherwise, there's no way to determine if the BOLO/Warrant is active, closed, etc. The plate reader will warn of any active BOLO or Warrant records with the vehicle plate attached _and_ the `status` type field set to active/open.

### Error: attempt to index a nil value (local 'vehicle')

Some servers will see this error in their server console:

```
sv_wraithv2.lua:112 - attempt to index a nil value (local 'vehicle')
```

To fix this, navigate to your `[sonorancad]/wk_wars2x` folder, and rename `config.dist.lua` to just `config.lua`

The config not being renamed is the most common cause of this error, however, if for some reason that doesn't fix it, feel free to open a [support ticket](https://support.sonoransoftware.com) with us.
