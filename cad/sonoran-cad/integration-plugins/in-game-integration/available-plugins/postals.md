---
description: >-
  Allows sending nearest postal to the CAD via the location field. Also enables
  postal auto-fill for new dispatches and calls.
---

# Postals

{% hint style="success" %}
Looking for VPS, web, or dedicated hosting? Check out our official [server hosting](/broken/pages/-MRResNcPrj2q6MmmS6j)!
{% endhint %}

## Activation Video

Click to view our [locations and postal install video](https://youtu.be/Rc6MT0D6rcI).

## Activation Guide

### 1. Download and Install the Core

If you haven't already, be sure to install and configure the [SonoranCAD Core](../fivem-installation/) first.

### 2. Activate the Submodule and all Dependencies

Follow the [submodule activation guide](../submodule-configuration/#activating-a-submodule) for the required submodules.

### 3. Configure Postal Script and Exports

1. If you're using the publicly available [nearest-postal script](https://forum.cfx.re/t/release-nearest-postal-script/293511), you will need to follow the steps in the [usage](postals.md#using-nearest-postal) section below.
2. If you're using a custom postal codes file, you will need to add the file to the plugin and Sonoran CAD's fxmanifest as shown in the [usage ](postals.md#custom-postal-codes-file)section below.
3. If you're using an event triggered by a custom postals script, you must configure it as explained in the [usage](postals.md#custom-postal-events) section below.

{% hint style="danger" %}
nearestPostalResourceName should **ONLY** be filled out if you're using [our specific nearest postal script](https://forum.cfx.re/t/release-nearest-postal-script/293511). In other words, **do not** put the name of your HUD script here, as **that will not work**.
{% endhint %}

## Configuration

<table><thead><tr><th>Option</th><th>Description</th><th width="100">Default</th></tr></thead><tbody><tr><td>sendTimer</td><td>Time between sending postal updates to the server.</td><td>950 ms</td></tr><tr><td>shouldSendPostalData</td><td>Toggles the plugin on/off</td><td>True</td></tr><tr><td>nearestPostalResourceName</td><td>If using our <a href="https://forum.cfx.re/t/release-nearest-postal-script/293511">nearest-postal</a> script, specify the name of its folder here</td><td>nearest-postal</td></tr><tr><td>mode</td><td>Specify what "mode" this plugin should use to determine postals. If using nearest-postal, set this to <code>resource</code>. If using an event fired by another resource, set this to <code>event</code>. If using a custom postals file, set this to <code>file</code>.</td><td>resource</td></tr><tr><td>nearestPostalEvent</td><td>If you've set <code>mode</code> to <code>event</code>, specify the name of the event fired by your postals resource here</td><td></td></tr><tr><td>customPostalCodesFile</td><td>If you've set <code>mode</code> to <code>file</code>, copy your custom postal codes file to the postals plugin folder, and add the name of that file here.</td><td></td></tr></tbody></table>

## Usage

{% hint style="info" %}
If the configured postal resource or custom postal data is unavailable at runtime, SonoranCAD will now continue sending regular street names and coordinate-based location updates without a postal prefix. Check the troubleshooting error codes `ERR-LOC-104`, `ERR-LOC-105`, and `ERR-LOC-106` if postal data is missing or failing.
{% endhint %}

### Using [Nearest-Postal](https://forum.cfx.re/t/release-nearest-postal-script/293511)

{% hint style="warning" %}
The plugin only supports 1.5.0 or higher of the nearest-postal plugin. Be sure to download the latest version before using.
{% endhint %}

If you're using the publicly available [nearest-postal script](https://forum.cfx.re/t/release-nearest-postal-script/293511), some minor configuration is required.

#### 1. Set the Resource Name

In the Sonoran CAD postals plugin config, change the `nearestPostalsResourceName` value to the _**exact**_ name of your nearest postals resource.\
\
Ex: `nearest-postals-1.5`

#### 2. Ensure Proper Startup Order

Be sure that you are starting the nearest-postals addon/resource **before/above** where you `ensure sonorancad` in your `server.cfg`.

Be sure to restart both the Sonoran CAD resource and the nearest-postal script, or restart your server entirely to apply the changes made.

### Custom Postal Codes File

If you want to use your own custom postal codes file with this plugin, open the config and change `mode` to `file`.

Next, copy your custom postal codes file to the `submodules/postals` folder, and set the value of `customPostalCodesFile` to the name of this file. Include the .json file extension in the name.

### Custom Postal Events

If you're not using the nearest-postal script or a custom postal codes file, you will need to create a export in your postals script, and have it return the player's current postal as a string.

Additionally, you will need to edit the config to set `mode` to `event`, then specify the name of this event in `nearestPostalEvent`.

Need help? You can always [hire a developer](https://support.sonoransoftware.com/#/).

## Troubleshooting

If postal lookup fails, location updates for units will still continue using normal street/location data. Postal-specific failures now surface through the troubleshooting codes below instead of stopping all location updates:

* `ERR-LOC-104`: postal resource unavailable
* `ERR-LOC-105`: configured postal file missing or invalid
* `ERR-LOC-106`: postal lookup failed at runtime

See the [FiveM error codes reference](../fivem-installation/troubleshooting/error-codes.md) for the full descriptions and recommended fixes.

### The configured postals file (postals\_file.json) was not found

This error may be seen by users attempting to set up the plugin to use a [custom postal codes file](postals.md#custom-postal-codes-file). Specifically, the error will look something like this, substituting `postals_file.json` for whatever you've named your custom postal codes file to:

```
The configured postals file (postals_file.json) was not found. Please check it.
```

This means that either the postal codes file has not been correctly added to the fxmanifest, or that it has not been added at all. Please reference the above instructions on how to do so.

We recommend replacing the `files { }` section of your fxmanifest with the given code snippet, then changing `postals_file.json` to match the name of whatever postals file you're using.

If you've manually entered the line, verify that all the lines in the section **except for the last** are followed with a comma to ensure that the system can properly read it.
