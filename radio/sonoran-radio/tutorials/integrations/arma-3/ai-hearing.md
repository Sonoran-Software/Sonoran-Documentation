---
description: >-
  Let nearby Arma 3 AI detect a player's position while they transmit through
  Sonoran Radio.
---

# AI Hearing

AI hearing is an optional community setting that gives away a transmitting player's position to nearby AI. It reproduces the core TFAR voice-exposure behavior without installing or calling TFAR.

The feature is enabled by default for ARMA communities.

## Enable AI hearing

1. As a community administrator, open **Community Customizations → Game Integrations → ARMA 3** in Sonoran Radio.
2. Leave **Enable ARMA 3 bridge** enabled.
3. Set **AI can hear radio transmissions** as desired.

The setting applies to the entire community and reaches active radio clients within 30 seconds. There is no per-player or CBA override in mod version 0.3.3 or newer. The hearing radius is fixed at 20 meters. Tower configuration remains separate.

Disabling AI hearing does not disable automatic in-game direct-talk synchronization.

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

* community bridge use and AI hearing are enabled;
* the player is alive and has the Arma mod loaded;
* the Sonoran Radio desktop overlay is open;
* the local bridge is running; and
* a living non-player AI unit is within the 20-meter hearing radius.

Arma's normal proximity voice or another radio mod does not trigger this feature. It follows Sonoran Radio's own desktop transmission state.
## Automatic direct-talk synchronization

This is separate from AI hearing. While the desktop overlay transmits, the bridge can hold Arma's **Push to Talk (Direct)** action so nearby players also hear the speaker through Arma voice.

The mod automatically detects a single keyboard binding for that action. Bind it to a plain keyboard key, not a mouse/controller button or a modifier-key combination, and use a different key for Sonoran Radio push-to-talk. No separate bridge launcher is normally needed.

Arma must be focused, mission updates must be arriving, and Arma voice/microphone settings must be working. The held key releases when transmission stops, the game loses focus, or updates expire. Run Arma and the companion at the same Windows privilege level. Test with another player; nearby listeners may hear both proximity and radio audio.

Turning off community AI hearing only stops AI exposure; it does not disable this direct-talk behavior.
