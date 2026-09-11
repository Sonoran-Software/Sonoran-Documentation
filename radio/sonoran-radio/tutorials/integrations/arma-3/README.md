---
description: Connect Arma 3 to the Sonoran Radio desktop overlay with physical towers, inventory radios, and optional AI hearing.
---

# Arma 3 Integration

The Sonoran Radio Arma 3 integration connects an Arma mission to the Sonoran Radio desktop overlay. Signal towers affect radio quality, inventory items can select team-specific radio frames, and an optional setting lets nearby AI detect players while they transmit.

CBA_A3 is required. TFAR and ACRE are not required.

{% hint style="info" %}
Sonoran Radio does not add an in-game radio menu or a `Y` keybind. Players use the **Sonoran Radio desktop app** and its **Open Overlay** button for radio controls.
{% endhint %}

## Features

* Signal towers placed in Eden or Zeus
* Three stock Arma tower models and invisible signal-only repeaters
* Configurable range, dish capacity, power, destruction, and terrain attenuation
* Automatic signal degradation in the desktop overlay
* BLUFOR and OPFOR inventory radio items
* Custom Arma item-to-desktop-frame mappings
* Optional AI hearing while transmitting
* SQF APIs for scripted missions and custom inventory systems

For shared controls and hotkeys, see [Desktop App & Overlay](../../usage/desktop-overlay.md).

## Guides

{% content-ref url="install-and-connect.md" %}
[install-and-connect.md](install-and-connect.md)
{% endcontent-ref %}

{% content-ref url="signal-towers-and-repeaters.md" %}
[signal-towers-and-repeaters.md](signal-towers-and-repeaters.md)
{% endcontent-ref %}

{% content-ref url="radio-items-and-team-frames.md" %}
[radio-items-and-team-frames.md](radio-items-and-team-frames.md)
{% endcontent-ref %}

{% content-ref url="ai-hearing.md" %}
[ai-hearing.md](ai-hearing.md)
{% endcontent-ref %}

{% content-ref url="mission-maker-api.md" %}
[mission-maker-api.md](mission-maker-api.md)
{% endcontent-ref %}

{% content-ref url="troubleshooting.md" %}
[troubleshooting.md](troubleshooting.md)
{% endcontent-ref %}

Use [Dispatch AI for Arma 3](../dispatch-ai/arma-3.md) to change radio channels, manage scanned channels, set timers, and work with CAD from the desktop overlay.
