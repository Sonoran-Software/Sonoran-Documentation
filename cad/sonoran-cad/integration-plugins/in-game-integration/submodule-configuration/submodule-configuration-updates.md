---
description: >-
  Learn how to manually update your submodule configuration file when there has
  been a configuration update.
---

# Submodule Configuration Updates

`Submodule Updater: X has a new configuration version`: This means one of your submodules has been updated, but there is a newer configuration file available with additional properties. To resolve, we need to manually migrate the configuration file for the submodule.

## 1. Open the Configuration Files

In the `\sonorancad\configuration`directory, there will be two configuration files for the updated submodule:

* NEW: `{submoduleName}_config.dist.lua`
* OLD: `{submoduleName}_config.lua`

<div><figure><img src="../../../.gitbook/assets/image (471).png" alt="" width="375"><figcaption><p>New WraithV2 Configuration File</p></figcaption></figure> <figure><img src="../../../.gitbook/assets/image (472).png" alt="" width="375"><figcaption><p>Old WraithV2 Configuration File</p></figcaption></figure></div>

## 2. Compare the Config Files

Note the differences in the file. In this example:

* The `configVersion` is `1.5`on our current file but is `1.6`on the newly downloaded one.
* Additionally we are missing the entire `notificationTimers` section in our current config file.

<figure><img src="../../../.gitbook/assets/image (473).png" alt="" width="563"><figcaption><p>SonoranCAD - WraithV2 Configuration Differences</p></figcaption></figure>

## 3. Migrate the Configuration Values

### Method 1 (Recommended) - Overwrite Old Configuration File

* Simply copy and paste the entire contents of your **new** config file into your **existing** config file and make any needed configuration changes.
* Save the file and restart the resource

### Method 2 (Not Recommended) - Manually Add Changes

* Note down the changes in the **new configuration file** and add any missing properties to your **existing** configuration file.
* Ensure you change the version number to the correct version from the **new** file.
* Save your **existing** file and restart the resource
