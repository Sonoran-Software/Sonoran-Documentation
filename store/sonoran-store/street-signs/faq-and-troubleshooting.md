---
description: Resolve common installation, access, display, and integration issues.
---

# Troubleshooting

## The resource will not start

Confirm OneSync is enabled, both package folders are installed, and `fxmanifest.lua` is directly inside each folder. Keep the original resource names and use the server account entitled to the asset.

## I cannot open the menu or edit a sign

Run `/sign`. Check [Permissions](permissions.md) for your selected mode and confirm your staff group, player identifier, or job grade has access.

For walk-up editing, stand near the control panel at the base of the sign and press `E`. Viewing a sign does not give editing access. The full controller requires administrator access.

## The screen is blank or the editor does not load

Check that the sign's screen is enabled and its brightness is above zero. If it is linked to Power Grid, check its power supply.

Move closer to the sign and confirm Street Signs is running. For a blank editor, check that the player can reach `https://signs.panel.sonoran.store/`, then reopen it.

## A message will not save

Stay near the sign's control panel when using a nearby editor, and wait for any previous save to finish. Correct unsupported characters or blocked text shown by the editor.

If someone else changed the same sign, reopen it and apply your changes to the latest version. For save errors, check the server console and confirm the resource can write to its `data` folder.

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

## Automatic updates are not working

Confirm automatic updates are enabled, the helper folder is installed, and the update permission lines from [Updating](getting-started.md#updating) are present. A pending restart waits until the server is empty.

## Still need help?

Contact [Sonoran Software support](https://support.sonoransoftware.com/) with your Street Signs version, the affected action, and relevant server or client errors. Remove webhook URLs, API keys, and private player information before sharing logs.
