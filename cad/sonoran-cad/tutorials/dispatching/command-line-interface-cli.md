---
description: >-
  Sonoran CAD's CLI allows you to quickly create and close dispatch calls,
  attach, detach, add notes, change statuses, and more right from your keyboard!
---

# Command Line Interface (CLI)

## UI Overview

The CLI allows you to more quickly run common dispatch actions without the need to move your mouse, click, or drag-and-drop. The CLI is optimized to make these actions as fast as possible.

### Accessing the CLI

#### Via Hotkey

The CLI can be brought up using a [global hotkey](../other-features/configurable-hotkeys.md). This will automatically open the CLI in a popup modal with the input field focused.

<figure><img src="../../.gitbook/assets/image (608).png" alt=""><figcaption></figcaption></figure>

#### Via Window Tab

You can also access add the CLI panel to your custom layout.

<figure><img src="../../.gitbook/assets/image (609).png" alt=""><figcaption></figcaption></figure>

### Utilizing the CLI

The CLI uses custom commands and arguments to complete actions.

For example, to create a new dispatch call:

`NEW "TRAFFIC STOP" A-10 123 Example Description`

`[Command] [Saved Call Type] [Unit] [Postal] [Description`

Arguments are type-to-filter for items like units or [saved call types](creating-a-call.md#saved-call-types). Press **TAB** to auto-complete the argument. Press **Enter** to send the command.

### Customizing Commands

Select the **Customize Commands** icon to configure custom commands and arguments.

<figure><img src="../../.gitbook/assets/image (610).png" alt="" width="375"><figcaption></figcaption></figure>

### Custom Shortcuts

Users can also configure custom shortcuts. Shortcuts can be configured to enter custom CLI variables.

{% content-ref url="shortcuts.md" %}
[shortcuts.md](shortcuts.md)
{% endcontent-ref %}
