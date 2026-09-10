---
description: Fix a common issue causing the in-game microphone to not work.
---

# In-Game Microphone Not Working

## In-Game Microphone Not Working

Due to an old version of Chromium (web browser) that FiveM utilizes, we are unable to change audio devices in-game. FiveM utilizes your "default" Windows microphone.

To resolve this issue, simply set your desired microphone "as default" in Windows.

### 1. Control Panel Sound

Open the `Control Panel` and select `Hardware and Sound`

<figure><img src="../../../.gitbook/assets/image (164).png" alt=""><figcaption></figcaption></figure>

### 2. Manage Audio Devices

Select `Manage Audio Devices`

<figure><img src="../../../.gitbook/assets/image (165).png" alt=""><figcaption></figcaption></figure>

### 3. Set Microphone as Default

* Select the `Recording` tab
* Select your microphone
* Select `Set Default`
* Select `Apply`

<figure><img src="../../../.gitbook/assets/image (166).png" alt=""><figcaption></figcaption></figure>

### 4. Restart your Game

After setting your new default microphone restart your FiveM application.

## Further Troubleshooting

If you have set your mic as the default device and you are still unable to hear it in game, try the following steps:

* Ensure device is marked as "Default Communication Device" as well. If the "Set Default" button is greyed out, that means it is both the default device and the default communication device.
* Reset your audio devices in Windows settings, as shown below.

### Resetting Windows Audio Devices

1. Open Windows Settings, navigate to `System` > `Sound`
2. Under `Advanced sound options`, click `App volume and device preferences`
3. Scroll to the bottom and click `Reset` to reset to the Microsoft recommended defaults.
4. Restart FiveM to ensure it recognizes the changes.
