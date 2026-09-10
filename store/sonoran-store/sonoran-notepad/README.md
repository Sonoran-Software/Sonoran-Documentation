---
description: >-
  Write field notes in FiveM and synchronize them through your signed-in Sonoran
  CAD tablet.
tags:
  - fivem
  - notepad
  - sonoran cad
  - tablet
---

# 🗒️ Sonoran Notepad

Sonoran Notepad adds a paper-style field notebook to FiveM. Players can write multiple titled notes, turn between pages, tear out notes they no longer need, and keep working when Sonoran CAD is unavailable.

<figure><img src="../.gitbook/assets/sonoran-notepad-overview.png" alt="Sonoran Notepad showing a traffic-stop note, page controls, tear control, and a linked CAD result"><figcaption><p>The paper interface keeps titled field notes, navigation, removal, and linked CAD results together.</p></figcaption></figure>

## Features

* A bold title and lined writing area for each note
* Previous and next page controls with a single blank draft at the end
* A tear control for removing the current note
* Page-turn and tear animations
* A writing animation with notepad and pencil props while the interface is open
* Automatic local saves while the player writes
* Sonoran CAD synchronization through the authenticated in-game tablet
* A local-only mode when the tablet is unavailable, unlinked, or signed out
* Safe, text-only display of linked lookup results returned with CAD notes

## CAD sign-in and synchronization

The notepad does not ask for a CAD username, password, API key, or token. It sends supported Notepad Sync messages to the installed `tablet` resource, which owns the signed-in Sonoran CAD page.

CAD synchronization becomes available after the player's game account is linked and the CAD page inside the tablet is signed in and responsive. If either check fails, the notebook remains usable and displays a small local-only warning. Notes written in that state are retained in the FiveM-side cache and sent to CAD after synchronization becomes available again.

{% hint style="info" %}
Sonoran CAD's Notepad Sync storage is part of the CAD frontend's local browser storage, not a community-wide CAD database. The same notes are not guaranteed to appear in a different browser profile or on another device.
{% endhint %}

## Requirements

| Requirement             | Details                                                                                                                                 |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| FXServer                | A current FiveM server                                                                                                                  |
| Sonoran CAD integration | The current [SonoranCADFiveM resource](https://docs.sonoransoftware.com/cad/integration-plugins/in-game-integration/fivem-installation) |
| Tablet                  | The `tablet` resource with Notepad Sync relay support enabled and started                                                               |
| Player linking          | The player must be linked and signed in on the tablet for CAD sync                                                                      |
| Framework               | No roleplay framework or SQL database is required                                                                                       |

## Start here

1. Follow [Installation](installation.md) and start the resource after `tablet`.
2. Review [Configuration](configuration.md) before the first production start.
3. Learn how local saves and CAD synchronization behave in [Using and Syncing Notes](usage-and-sync.md).
4. Use [Troubleshooting](troubleshooting.md) if the local-only warning remains visible.

For help, contact [Sonoran Software support](https://support.sonoransoftware.com/).
