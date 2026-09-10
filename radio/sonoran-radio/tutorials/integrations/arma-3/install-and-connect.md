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

Subscribe to the Sonoran Radio Arma 3 mod and CBA\_A3. Add both mods to the dedicated server's mod list and to the preset distributed to players. Load CBA\_A3 before Sonoran Radio.

## Connect the desktop overlay

1. Open the Sonoran Radio desktop app.
2. Select the same Radio community used by the other players.
3. Join the desired channel or scan group.
4. Select **Open Overlay**.
5. Start or join the Arma mission with the integration mod enabled.

The Arma mod starts its localhost companion automatically. No Radio API key is stored in the mod, and players do not need to start a separate bridge window.

The integration continues to use Sonoran Radio's normal desktop push-to-talk controls. Pressing `Y` in Arma will not open a Sonoran menu.

## Verify the local bridge

After the client enters a mission, open the following address on that same computer:

```
http://127.0.0.1:39114/health
```

A working bridge returns JSON containing `"ok": true` and `"integration": "arma3"`. The bridge only listens on the local computer and does not expose Radio credentials.

Continue with [Signal Towers and Repeaters](signal-towers-and-repeaters.md) to add coverage to a mission.
