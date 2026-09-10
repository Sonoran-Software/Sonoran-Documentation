---
description: This guide covers the activation process for a general submodule.
---

# Submodule Configuration

## Install the Resource

If you have not already, [install the base FiveM resource](../fivem-installation/).

## Activating a Submodule

The [FiveM resource](../fivem-installation/) contains multiple "submodules" for each integration. These can be individually enabled/disabled and configured.

{% content-ref url="../available-plugins/" %}
[available-plugins](../available-plugins/)
{% endcontent-ref %}

This example uses the `postals` submodule.

### 1. Configure and Enable the Submodule

* Navigate to the `\sonorancad\configuration` folder and locate the configuration file for your desired submodule.
  * For this example we will be using the `sonrad_config.lua` file (name depends on the submodule).
* **Enable** the submodule by changing the `enabled` variable from `false` to `true` in the submodule config.

<figure><img src="../../../.gitbook/assets/image (589).png" alt=""><figcaption></figcaption></figure>

### 2. Rename and Save

#### Rename

While the pre-configured resource should already have the file renamed, you may need to remove `.dist` from the configuration file name.

Ex: `sonrad_config.dist.lua` > `sonrad_config.lua`

#### Save

Save the lua file's changes.

### 3. Restart Sonoran CAD

Restart the `sonorancad` resource by entering `ensure sonorancad` in the server console and enjoy your submodule!
