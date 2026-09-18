---
description: >-
  Install the Sonoran Radio Arma 3 mod on a dedicated server and each player's
  Windows client.
---

# Install and Connect

## Requirements

* Arma 3 version 2.12 or newer
* [CBA\_A3](https://steamcommunity.com/sharedfiles/filedetails/?id=450814997)
* The Sonoran Radio Arma 3 mod on the server and every player client
* The Sonoran Radio desktop app for each player
* Windows on player computers; the client bridge uses the packaged `sonoran_radio_x64.dll` and PowerShell

TFAR and ACRE are not required. If your community does not want a second radio system or duplicate push-to-talk behavior, do not load those mods alongside Sonoran Radio.

## Install the mod

### Steam Workshop

Subscribe to the [Sonoran Radio Arma 3 mod](https://steamcommunity.com/sharedfiles/filedetails/?id=3798834148) and CBA\_A3. Add both mods to the dedicated server's mod list and to the preset distributed to players. Load CBA\_A3 before Sonoran Radio.

### Dedicated server setup

1. Install both Workshop mods on the server and keep them updated.
2. Add both to the server's normal `-mod` startup parameter, with CBA first. For example, if your mod folders use these names:

   ```text
   "-mod=@CBA_A3;@SonoranRadio"
   ```

   Use your actual folder names or paths. Sonoran Radio is required on clients too; do not load it only through `-serverMod`.
3. Copy the `.bikey` files from both mods' `keys` folders into the server's `keys` folder. When Sonoran Radio updates, copy the key supplied with that release.
4. Restart the server and distribute a preset containing both mods to your players.

Keep BattlEye and signature verification enabled. A kick needs its original error investigated; disabling protection is not an installation step.

## Community setup

A community administrator selects **ARMA 3** under **Community Customizations → Game Integrations**. The **ARMA 3 Installation** expansion contains a four-step walkthrough above the three community settings.

| Setting | Default | Effect |
| --- | --- | --- |
| Enable ARMA 3 bridge | On | Allows Radio to use the local bridge and the desktop app to attempt automatic startup of the installed bridge. |
| ARMA 3 signal integration | On | Applies tower quality to radio audio. Turn it off to stop applying ARMA signal degradation while keeping other bridge features available. |
| AI can hear radio transmissions | On | Allows nearby AI to detect players transmitting through the desktop overlay. |

These settings are saved for the **whole community**, not per user. Only community administrators can change them. Active radio clients refresh them within 30 seconds. Disabling bridge use also stops Radio's signal and AI-hearing integration; the other two saved values are retained.

Mod version **0.3.3 or newer** has no Sonoran CBA addon-settings menu or legacy in-game overrides. Tower modules remain configurable in Eden and Zeus. Use an updated desktop app and backend with community-settings support alongside the updated mod.

The bridge process may still exist because the mod starts its local transport. Disabling community bridge use stops Radio from using it; it does not terminate that process. No Radio API key belongs in the mod.

## Connect the desktop overlay

1. Open the Sonoran Radio desktop app.
2. Select the same Radio community used by the other players.
3. Join the desired channel or scan group.
4. Select the **Overlay** tab at the top, alongside **Dispatch**.
5. Start or join the Arma mission with the integration mod enabled.

The Arma mod starts its localhost companion automatically. No Radio API key is stored in the mod, and players do not need to start a separate bridge window.

The tab is disabled on the website; hover over it for the desktop-app requirement. It is hidden in the mobile app.

<figure><img src="../../../.gitbook/assets/overlay-top-navigation.png" alt="Sonoran Radio top navigation showing the Overlay tab beside Dispatch"><figcaption><p>Open the overlay from the top Overlay tab beside Dispatch in the desktop app. The tab is disabled on the website.</p></figcaption></figure>

For Arma, use **Fullscreen Window** display mode. Exclusive fullscreen can hide desktop overlays. Enable **No Pause** in the Arma launcher (or use `-noPause`) if the game pauses when you focus the overlay. See [Desktop Overlay](../../usage/desktop-overlay.md) for moving, resizing, and hotkeys.

The integration continues to use Sonoran Radio's normal desktop push-to-talk controls. Pressing `Y` in Arma will not open a Sonoran menu.

## Verify the local bridge

After the client enters a mission, open the following address on that same computer:

```
http://127.0.0.1:39114/health
```

A working bridge returns JSON containing `"ok": true` and `"integration": "arma3"`. The bridge only listens on the local computer and does not expose Radio credentials.

Continue with [Signal Towers and Repeaters](signal-towers-and-repeaters.md) to add coverage to a mission.
