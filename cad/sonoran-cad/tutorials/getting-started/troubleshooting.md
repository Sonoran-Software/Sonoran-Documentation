---
description: Troubleshooting steps for common issues in CAD
---

# Troubleshooting

## Cannot Load Sonoran CAD

### Tablet Not Loading

If you are using the in-game Tablet, please ensure that you are using the `Login with Sonoran` option, as both Apple and Discord have disabled OAuth over iFrames.

If you've created your account through Discord or Apple and would like to link it to a Sonoran login, please follow the steps shown [here](https://info.sonorancad.com/integration-plugins/integration-plugins/available-plugins/tablet#tablet-sso-sign-in-via-discord-apple).

Alternatively, if the tablet shows completely blank, then please delete your `nui-storage` folder as shown [here](https://info.sonorancad.com/integration-plugins/integration-plugins/available-plugins/tablet#known-issues).

### CAD Not Loading After Recent Update

If you cannot load Sonoran CAD due to a recent update, then please do `Ctrl` + `Shift` + `Refresh` to hard refresh the page and load it from scratch.

### CAD Not Loading (ESET Antivirus)

In certain cases, antivirus programs such as ESET are also known to block connections to the CAD. To add CAD to ESET's allow list, please follow the following instructions:

1. Open ESET program on your computer
2. Press the `F5` key to open Advanced setup.
3. Click `Web access protection`. Expand `URL list management` and click `Edit` next to `Address list`
4. Select `List of allowed addresses` and click `Edit`
5. Click `Add` in the `Edit list` window. Paste `*.sonorancad.com*` in the respective field, click `OK` → `OK` to save your changes, and exit the Advanced setup window.
   * If using CMS, also add `*sonorancms.com*`

For more information, see [here](https://support.eset.com/en/kb2960-exclude-a-safe-website-from-being-blocked-by-web-access-protection).
