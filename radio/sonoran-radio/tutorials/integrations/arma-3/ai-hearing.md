---
description: >-
  Let nearby Arma 3 AI detect a player's position while they transmit through
  Sonoran Radio.
---

# AI Hearing

AI hearing is an optional mission setting that gives away a transmitting player's position to nearby AI. It reproduces the core TFAR voice-exposure behavior without installing or calling TFAR.

The feature is disabled by default.

## Enable AI hearing

1. In Arma, open **Options** > **Addon Options**.
2. Select **Sonoran Radio**.
3. Open the **AI Hearing** section.
4. Enable **AI can hear transmissions**.
5. Set **Transmission hearing range** from 5 to 100 meters. The default is 20 meters.

This is a mission-wide CBA setting and should be configured by the server or mission administrator.

## Behavior

While the player holds Sonoran Radio's desktop push-to-talk control:

* The desktop overlay publishes a local transmitting heartbeat.
* The Arma client asks the server to expose that player to nearby living AI.
* AI closer to the speaker receive stronger knowledge of the player's position.
* Each AI is updated at most once every 20 seconds.
* AI that already have substantial knowledge of the player are not repeatedly updated by the radio system.

The desktop app sends the PTT heartbeat once per second. If the heartbeat stops, the bridge treats it as stale after three seconds and marks the player as no longer transmitting. Closing the overlay therefore cannot leave the player permanently exposed.

## Requirements

AI hearing works only when:

* the setting is enabled for the mission;
* the player is alive and has the Arma mod loaded;
* the Sonoran Radio desktop overlay is open;
* the local bridge is running; and
* a living non-player AI unit is inside the configured range.

Arma's normal proximity voice or another radio mod does not trigger this feature. It follows Sonoran Radio's own desktop transmission state.
