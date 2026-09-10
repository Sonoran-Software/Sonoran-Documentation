---
description: Find out how to map a QB Core database with Sonoran CAD!
hidden: true
---

# QB Core Mapping Tutorial

## Character Mapping

QB Core stores player information in the `players` table.

The player's first and last name is stored as JSON in the `charinfo` column. We'll toggle these as a `JSON Column` and set the JSON keys to `firstname` and `lastname`.

The `citizenid` column stores a unique player ID. This will be our `Character Mapping Column`.

![](<../../.gitbook/assets/image (188).png>)

![](<../../.gitbook/assets/image (129).png>)

### Multiple Residency

QB Core also allows players to own multiple residences at once.

Sonoran CAD's DB Sync will pull all of these from their external `player_houses` table.

![QB Core - DB Sync - Residency Mapping](<../../.gitbook/assets/image (226).png>)

Because multiple residences can be listed at once, it's recommended you update your custom record's residence field to the `textarea` type.

![](<../../.gitbook/assets/image (313).png>)

The custom record now shows the residency textarea with all owned addresses.

![QB Core - Multi Residence in Custom Record with DB Sync](<../../.gitbook/assets/image (210).png>)

## Vehicle Mapping

QB Core stores the vehicle information in the `player_vehicles` table.

The `Unique ID` for vehicles is stored in the `citizenid` column and matches the values stored in the `citizenid` column from our player mapping.

The `plate` column stores the vehicle's license plates.

You can configure other custom fields may include color, make, model, etc. Vehicle colors are often stored as a number. You can use [friendly mapping](./#friendly-mapping) to convert a number to a color name.

![](<../../.gitbook/assets/image (324).png>)

![](<../../.gitbook/assets/image (379).png>)

## License Mapping

Because of how licenses are stored in QB Core, this process adds a couple of extra steps.

### 1. Open Admin panel to License Record

You will first need to edit the License record to adapt it for how QBCore stores its licenses. Open the Admin Panel by going to the following...

`Admin Panel` -> `Customization` -> `Custom Records` -> Click `#4 - License`

![Sonoran CAD Custom Record Editor](<../../.gitbook/assets/image (204).png>)

### **2**. Edit License Information Section

Replace the last three fields in the `License Information:` section with the following. Make sure to change the `type` to `text` and remove the `mask`. You can use the screenshot below as a guide. Then click `Save` before moving on.

{% hint style="danger" %}
**Don't forget to click Save before continuing!**
{% endhint %}

![Sonoran CAD custom record editor](<../../.gitbook/assets/image (221).png>)

### 3. Open DBSync Settings

Click `Advanced` -> `In-Game Integration` to open the DBSync settings menu.

### 4. Fill in DBSync Settings

As of writing on 2/28/2022, the following pictured settings will work for QBCore's latest version. Fill in the `Table Name`, `Character Mapping Column`, `Column Name`s, `JSON Column`s and `Friendly Mapping`s as shown below. Make sure to click `Save Mapping Config` once finished.

{% hint style="info" %}
We are aware of the misspelling "licence", this is intentional in QBCore to differentiate between another piece of data referred to as "license"
{% endhint %}

![Sonoran CAD DBSync Settings](<../../.gitbook/assets/image (212).png>)

![Sonoran CAD DBSync Friendly Mapping Settings](<../../.gitbook/assets/image (277).png>)

Congratulations! You should now be all set up to display your licenses from QBCore in Sonoran CAD. Feel free to test a record lookup to verify everything is in order.

![Example QBCore DBSynced license data](<../../.gitbook/assets/image (293).png>)
