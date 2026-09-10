---
description: View some basic troubleshooting steps when activating Sonoran CAD submodules.
---

# Submodule Troubleshooting

## Core Commands

Sonoran CAD's core includes powerful built-in commands. **These commands are entered into your server console.**

**Ex:** A [support member](https://support.sonoransoftware.com) may ask you to send detailed logging information to them. They will give you the specific ID number to enter. (ex: 123)\
Entering `sonorancad support 123` in your server console will send your plugin configuration directly to our support application.

| Command                       | Description                                                                                                                                                                                                                                                                                        |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sonorancad debugmode          | Enables detailed debug logging                                                                                                                                                                                                                                                                     |
| sonorancad info               | Displays version and config information                                                                                                                                                                                                                                                            |
| sonorancad support <_NUMBER_> | <p>Sends important information for <a href="https://support.sonoransoftware.com">customer support</a> purposes.</p><p>The <em>NUMBER</em> parameter will be provided to you by a support team member.</p><p>Ex: <code>sonorancad support 123</code> sends us your plugin information for help.</p> |
| sonorancad plugin <_NAME_>    | <p>Displays plugin information</p><p>Ex: <code>sonorancad plugin callcommands</code></p>                                                                                                                                                                                                           |

## Quick Checks

### 1. Ensure your community is on a paid version.

Your community's subscription may have expired and failed to renew. Do a quick check on your [community limits](../../../tutorials/getting-started/view-your-limits.md) to make sure your community version includes the submodule you are trying to install.

{% hint style="info" %}
Each submodule guide lists the required subscription version at the top.
{% endhint %}

### 2. Ensure your submodule is enabled

Be sure to follow the [core installation](../fivem-installation/) and [submodule activation](./) guides thoroughly, depending on the specific submodule you are trying to activate.

\
Make sure you have not forgotten to enable the submodule in the plugin config file!

Enter `sonorancad info` into your server console.

![Sonoran Info - Disabled Plugins](<../../../.gitbook/assets/image (162).png>)

If the submodule you are having trouble with is listed as DISABLED, you may have forgotten to enable it in the submodule configuration.

![The "enabled" field should be set to "true"](../../../.gitbook/assets/enable_config.png)

### 3. Ensure your API ID is set correctly.

Ensure you have set your [API ID in the CAD](../../../api-integration/getting-started/setting-your-api-id.md) using the value from the [API ID submodule](../available-plugins/api-id-checker.md).

## Debug Mode

The SonoranCAD core includes a powerful debug mode. Enable this by entering `sonorancad debugmode` into your server console.

Debug mode will print out additional error information and JSON data for all API calls or push events.

### 1. Check your API ID:

For plugins that require your individual CAD user account to have the API ID set (live map, unit locations, panic, etc.) you can view this data in the console output.

The image below shows an API Call being made from the server to Sonoran CAD. This API call is type `UNIT_LOCATION` and includes all the data necessary.

Ensure the `APIID` listed in the API call matches the [API ID set in your CAD's user account](../../../api-integration/getting-started/setting-your-api-id.md).

![Debug Mode - Unit Location API Call](../../../.gitbook/assets/debug_console.png)

### 2. Check the Community ID and API Key

Your community ID and API key is also listed in the debug API call information. Be sure that the [community ID and API key](../../../api-integration/getting-started/retrieving-your-credentials.md) are correct.

## Still Having Trouble?

If you're still having trouble, our dedicated support team is here to help.

[Reach out to us and generate a support ticket at any time](https://support.sonoransoftware.com).

## Common Errors

### Error: Ensure config.json is present

Your framework or plugin config is not correctly named `config.json`. Ensure that is has been spelt correctly, is not `config.json.json`, etc.

You may need to open the file in a text editor to more easily see the file extension, and ensure that it is correctly named as `config.json`.

### Community Has Been API Blacklisted

The CAD backend will temporarily "blacklist" (deny) all API calls if multiple requests are made with an invalid format.

#### Causes

* Third-party or custom integration scripts may not be utilizing our API correctly. Try disabling them to rule out the issue.
* A bug with one of our [FiveM submodules](../available-plugins/).

#### Diagnosis

1. Enable debug mode on your FiveM server by entering the server command `sonorancad debugmode`. All API calls made will have the full JSON payload printed in your server console.
2. Wait for your next API blacklist notice. In your server console, you should see multiple failed/errored API calls at the same time as your blacklist. The JSON will show the full, bad data being sent to Sonoran CAD. Based on the `type` of these API calls, you can narrow down the source to a third-party/custom script or one of our FiveM submodules.
   1. If the bad API calls leading to the blacklist appear to be from an official Sonoran CAD submodule, [reach out to our support team](https://support.sonoransoftware.com/).
