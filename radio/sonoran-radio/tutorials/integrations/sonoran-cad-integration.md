---
description: Integrate the Radio with your Sonoran CAD!
---

# Sonoran CAD Integration

## Sonoran Radio CAD Plugin

To enable integrations between Sonoran CAD and Radio, simply [enable the `sonrad` (Sonoran Radio) submodule in your CAD resource](https://info.sonorancad.com/integration-plugins/in-game-integration/fivem-installation/available-plugins/sonoran-radio-sonrad).

## Integration Features

### Panic Toggle

<details>

<summary>CAD Panic Toggle</summary>

Triggering your Sonoran Radio panic (by pressing the yellow button at the top of the radio) will also toggle your panic status in Sonoran CAD.

<img src="../../.gitbook/assets/image (100).png" alt="Sonoran Radio Handheld - Panic Button" data-size="original">

</details>

### Dispatch Call Information

<details>

<summary>Dispatch Call Information</summary>

When attached to a Sonoran CAD dispatch call, the radio will display a red call info box and set the top status bar to red. Click the call title to expand and collapse the information.

![Sonoran Radio x CAD Call Information](<../../.gitbook/assets/image (101).png>) ![Call Information - Expanded](../../.gitbook/assets/FiveM_b3095_GTAProcess_hDcNs1gDMg.png)

</details>

### Live Map Blips

<details>

<summary>Live Map Radio Tower Information</summary>

Sonoran Radio towers will be displayed on the CAD live map.

Select one of the blips to view it's repeater type and health.

![](<../../.gitbook/assets/image (62).png>)

</details>

## Display Name Sync

<details>

<summary>CAD To Radio Display Name</summary>

Automatically set your radio's display name based on your CAD unit information.

In the `sonorad` submodule's configuration file, set `config.syncRadioName.enabled` to true and customize the formatting in `config.syncRadioName.nameFormat`.

![](<../../.gitbook/assets/image (63).png>)

</details>
