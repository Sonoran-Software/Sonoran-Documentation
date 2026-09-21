---
description: >-
  Diagnose Arma 3 tower signal, desktop-frame switching, bridge, and AI-hearing
  issues.
---

# Troubleshooting

## Pressing Y does not open a menu

This is expected. Sonoran Radio does not add an Arma radio dialog or `Y` keybind. Open the Sonoran Radio desktop app, connect to a Radio channel, and select the **Overlay** tab at the top, alongside **Dispatch**.

## The overlay receives no tower signal

Check the following:

1. CBA\_A3 and Sonoran Radio are loaded on both the server and client.
2. The Sonoran Radio desktop overlay is open.
3. A tower module exists and **Powered** is enabled.
4. **Active dishes** is greater than zero.
5. The player is inside the tower's configured range.
6. A destructible physical tower has not been killed or deleted.
7. Terrain attenuation is not reducing an already weak edge-of-range signal.
8. **Enable ARMA 3 bridge** and **ARMA 3 signal integration** are enabled under **Community Customizations → Game Integrations → ARMA 3**. Allow up to 30 seconds for active clients to refresh changes.

Mod version 0.3.3 or newer has no Sonoran CBA settings. A logged-in or voted server admin can use `#sonoranradio debugmode on` to enable tower diagnostics and signal logging, then `#sonoranradio debugmode off` to stop. Arma normally stores client RPT files under:

```
%LOCALAPPDATA%\Arma 3
```

## The local bridge is not running

Visit:

```
http://127.0.0.1:39114/health
```

If the page does not load:

1. Confirm `sonoran_radio_x64.dll` and the `bridge` directory remain in `@sonoran_radio`.
2. Confirm PowerShell is available and security software did not quarantine the DLL or bridge script.
3. Confirm another application is not using UDP port `39113` or HTTP port `39114`.
4. Run `@sonoran_radio\bridge\start-bridge.cmd` as a manual fallback, then reload the health page.

The bridge is localhost-only. Firewall port forwarding is not required.

## The wrong radio frame is displayed

1. Confirm the exact item class is listed on the intended frame under **Customize** > **Overlay**.
2. Save the frame configuration.
3. Close and reopen the desktop overlay to download the changed mappings.
4. Give the player only one intended radio item. The assigned radio is preferred; otherwise the first detected inventory radio is used.
5. Wait up to two seconds after changing the inventory item.

Class matching is case-insensitive. If an item has no mapping, the overlay leaves the current frame selected.

## The BLUFOR or OPFOR frame is missing

New communities registered with **ARMA 3** selected include the example ARMA 3 BLUFOR and ARMA 3 OPFOR frames. For an older community, create or select a desktop frame and add the corresponding class manually:

```
SonoranRadio_Item_BLUFOR
SonoranRadio_Item_OPFOR
```

## AI does not react to radio traffic

1. Enable **Enable ARMA 3 bridge** and **AI can hear radio transmissions** in the community's ARMA 3 integration settings. There is no in-game or per-user override.
2. Confirm the desktop overlay—not Arma proximity voice—is actively transmitting.
3. Confirm the AI is alive, is not player-controlled, and is within 20 meters of the speaker.
4. Confirm the local bridge health endpoint works.
5. Remember that the same AI is updated at most once every 20 seconds and AI that already know the player's location do not need another reveal.

TFAR is not required and does not control this setting.

## Overlay hidden or game pauses when focused

Select Arma's **Fullscreen Window** display mode. Exclusive fullscreen may hide desktop overlays. Enable **No Pause** in the launcher or use `-noPause` if the game pauses when the overlay has focus.

On the website, the **Overlay** tab is intentionally disabled; use the desktop app. The mobile app does not display this tab.

## BattlEye kicks or modified-data messages

Keep the original client kick message and server/client logs. A message saying you cannot connect for a number of seconds indicates a reconnect cooldown, not the original failure. Wait for it to expire, connect once, and inspect the first kick reason.

“Uses modified data file” alone does not identify a blocked Sonoran DLL or prove the mod caused a kick. Check that client/server mod versions agree and that the server has the current CBA and Sonoran `.bikey` files. If BattlEye explicitly names a blocked file, retain its exact path and message for support. Do not disable BattlEye or signature verification as the standard fix.

## A tower cannot be destroyed

Invisible towers have no physical object and cannot take damage. For a physical tower, edit its module and make sure **Indestructible** is disabled. If a synchronized editor object has its own mission damage protection, remove that protection as well.
