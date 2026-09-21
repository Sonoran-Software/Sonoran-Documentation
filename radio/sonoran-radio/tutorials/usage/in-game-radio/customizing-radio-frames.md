---
description: Create FiveM radio overlays, choose a frame in game, and control who can use it.
---

# FiveM Radio Frames

Create and edit your FiveM radio frames in **Customize > Overlay** in the Radio panel. This is the same editor used for the desktop overlay.

## Create or edit a frame

Select **FiveM** in **Customize > Game Integration**, then follow [Create a custom overlay](../desktop-overlay.md#create-a-custom-overlay). Upload your artwork, position the screen and buttons, and select **Save changes**. Uploading custom artwork requires **Pro**.

<figure><img src="../../../.gitbook/assets/radio-overlay/overlay-editor.jpg" alt="Shared Radio Overlay editor with a County Patrol frame"><figcaption><p>Edit FiveM frames from the Radio panel.</p></figcaption></figure>

Use an updated FiveM resource. With your server's push URL configured, saving sends the updated frames to connected players. The resource also checks for changes on startup and every five minutes.

## Change your frame in game

1. Open the radio's **Settings**.
2. Select the **FiveM** tab.
3. Choose a frame from **Radio Frame**.

Only frames available to your player appear in the list.

<figure><img src="../../../.gitbook/assets/radio-overlay/fivem-frame-selector.jpg" alt="FiveM settings with the Radio Frame dropdown showing Default, County Patrol, and Signal Pro"><figcaption><p>Choose a frame in Settings > FiveM.</p></figcaption></figure>

## Restrict frame access

Frame permissions are still configured in the resource's **config.lua**, under `Config.frames`.

- `permissionMode = 'none'` lets everyone use all available frames.
- Use `ace`, `qbcore`, `qbox`, or `esx` to restrict frames by department permissions or job grades.
- Copy the ID shown below a frame's name in the Overlay editor, such as `frame:2`, into that department's `allowedFrames` list.

For example, allow players with the `sonoranradio.patrol` ACE to use two community frames:

```lua
Config.frames = {
    permissionMode = 'ace',
    adminPermission = 'sonoranradio.admin',
    departments = {
        patrol = {
            label = 'County Patrol',
            permissions = {
                ace = { 'sonoranradio.patrol' }
            },
            allowedFrames = { 'frame:1', 'frame:2' }
        }
    }
}
```

Replace those IDs with your own. For framework permissions, use `permissions.jobs` and the allowed `grades` from the resource's example configuration. [Sonoran CMS can manage ACE permissions from community roles](https://docs.sonoransoftware.com/cms/integration-capabilities/sonoran-radio-sync).

Existing local skins can remain installed; their folder names still work in `allowedFrames`. To bring an existing portable frame into the editor, upload its image and use **Import from FiveM (skin.json)** when creating the frame.
