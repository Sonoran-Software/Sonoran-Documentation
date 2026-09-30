---
description: Send ERLC emergency and dispatch calls to Discord with an aerial location image.
---

# ERLC 3D Location Webhooks

![ERLC 3D Location Webhooks](../../.gitbook/assets/erlc_notifications_promo.png)

See the call and its location together in Discord. Notifications include the call details and a watermarked aerial image when a matching location image is available.

Before you start, [connect Sonoran Bot to your CAD community](https://docs.sonoransoftware.com/bot/tutorials/getting-started). For in-game 911 calls, complete [ERLC setup](https://docs.sonoransoftware.com/cad/integration-plugins/erlc/getting-started) too.

### 1. Check ERLC mode

Make sure your CAD community is in **ER:LC** mode under **Administration → Advanced → In-Game Integration**.

### 2. Choose your notifications

Open **Administration → Advanced → Discord Integration**. Enable the events you want:

- **Emergency Call · Created** — new 911 calls.
- **Dispatch · Created** — new dispatch calls.
- **Dispatch · Modified** — updated dispatch calls.

### 3. Pick a channel

Choose your Discord **Server** and **Channel** for each enabled event. Changes save automatically. Role pings are optional.

Dispatch calls need a postal or supported location coordinates to include an image. In-game 911 calls use their reported location.
