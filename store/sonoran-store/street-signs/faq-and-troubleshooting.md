---
description: Resolve common installation, access, display, and integration issues.
---

# Troubleshooting

## The resource will not start

Confirm OneSync is enabled, both package folders are installed, and `fxmanifest.lua` is directly inside each folder. Keep the original resource names and use the server account entitled to the asset.

## I cannot open the menu or edit a sign

Run `/sign`. Check [Permissions](permissions.md) for your selected mode and confirm your staff group, player identifier, or job grade has access.

For walk-up editing, stand near the control panel at the base of the sign and press `E`. Viewing a sign does not give editing access. The full controller requires administrator access.

Older guides may show `/signcreate` or other separate sign commands. The current version uses `/sign`, then **Place a new sign**, **Nearby signs**, or **All signs**.

## The screen is blank or the editor does not load

Check that the sign's screen is enabled. If it is linked to Power Grid, check its power supply. An active schedule with its state disabled also blanks the screen during that period. Brightness is limited to 5–100%; use the screen switch to turn the display off.

Move closer to the sign and confirm Street Signs is running. For a blank editor, check that the player can reach `https://signs.panel.sonoran.store/`, then reopen it.

## A message will not save

Stay within three meters of the selected sign's control panel, including when using the administrator's full controller, and wait for any previous save to finish. Correct unsupported characters or blocked text shown by the editor.

If someone else changed the same sign, reopen it and apply your changes to the latest version. For save errors, check the server console and confirm the resource can write to its `data` folder.

## A schedule or message does not look right

Schedules follow the in-game clock. Check the start and end times, including overnight periods, and avoid overlapping entries because the first matching period wins. Save after creating or toggling a schedule.

The normal editor preview shows your draft, which may differ from the scheduled message currently on the roadside sign. Editing the normal message does not replace a captured schedule. See [Daily schedules](commands-and-usage.md#daily-schedules) for the current controls and limits.

If **Edit text lines** did not change an arranged text block, open the visual editor and edit that block directly.

## CAD panels or sign updates are missing

Confirm:

* `Config.CAD.enabled = true`
* `sonorancad` starts before Street Signs
* The protected-key permission line from [CAD setup](integrations-and-webhooks.md) is present
* Your CAD version supports the panels and your role has the relevant panel permission

Check the Street Signs server console for CAD connection errors. A CAD synchronization error can occur even when the in-game change has saved; check the sign before retrying.

## Power Grid or Discord is not responding

For Power Grid, confirm the integration is enabled, the resource starts first, and the sign was linked near its base.

For Discord, confirm webhooks are enabled and the URL is entered in the correct notification channel. Check the server console for delivery errors.

## Changes disappeared after a restart or update

Placements and messages are saved in `sonoran-streetsigns/data/signs.json`. Keep that file when updating manually and restore your backup if it was replaced. Street Signs does not require MySQL.

Default placements are installed once; later package updates do not move existing saved signs or recreate deleted defaults. If the console reports invalid saved data, keep a backup of the affected file and contact support before replacing it.

## Automatic updates are not working

Confirm automatic updates are enabled, the helper folder is installed, and the update permission lines from [Updating](getting-started.md#updating) are present. A pending restart waits until the server is empty.

## Still need help?

Contact [Sonoran Software support](https://support.sonoransoftware.com/) with your Street Signs version, the affected action, and relevant server or client errors. Remove webhook URLs, API keys, and private player information before sharing logs.
