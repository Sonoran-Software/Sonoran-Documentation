---
description: >-
  Configure the Notepad command, keybind, updater, and server-side safety
  limits.
tags:
  - fivem
  - notepad
  - configuration
---

# Configuration

Edit `sonoran-notepad/config/config.lua`, save the file, and restart the resource after making changes.

The resource does not require CAD credentials, an iframe URL, or an origin setting. CAD sign-in and iframe ownership remain inside the `tablet` resource.

## General settings

| Setting                       | Default                          | Purpose                                                                                 |
| ----------------------------- | -------------------------------- | --------------------------------------------------------------------------------------- |
| `Config.ConfigurationVersion` | `1.0`                            | Identifies the customer configuration schema. Keep the value supplied with the package. |
| `Config.Command`              | `notepad`                        | Command name without a leading slash.                                                   |
| `Config.DefaultKeybind`       | `F7`                             | Default keyboard binding registered with FiveM.                                         |
| `Config.KeybindDescription`   | `Open the Sonoran paper notepad` | Description shown in FiveM key binding settings.                                        |

Players can change their own binding under **Settings → Key Bindings → FiveM** after the resource has started.

## Automatic updates

| Setting                             | Default | Purpose                                                                                    |
| ----------------------------------- | ------- | ------------------------------------------------------------------------------------------ |
| `Config.AutoUpdate`                 | `true`  | Enables periodic update checks.                                                            |
| `Config.UpdateCheckIntervalMinutes` | `60`    | Minutes between update checks.                                                             |
| `Config.RestartUpdateWithPlayers`   | `false` | Controls whether an installed update may restart the resource while players are connected. |

Keep `Config.RestartUpdateWithPlayers` disabled unless you have planned for an in-session resource restart. A restart clears the memory-only FiveM note cache.

## Safety limits

| Setting                     | Default  | Purpose                                            |
| --------------------------- | -------- | -------------------------------------------------- |
| `Config.MaxNotes`           | `100`    | Maximum notes accepted in one full-list save.      |
| `Config.MaxTitleCharacters` | `2000`   | Maximum characters accepted in a note title.       |
| `Config.MaxBodyCharacters`  | `20000`  | Maximum characters accepted in a note body.        |
| `Config.MaxIdCharacters`    | `128`    | Maximum characters accepted in a note ID.          |
| `Config.MaxMetadataBytes`   | `65536`  | Maximum encoded metadata size for one note.        |
| `Config.MaxPayloadBytes`    | `524288` | Maximum encoded size of a complete note-list save. |

These limits protect the server and browser relay from malformed or unexpectedly large payloads. Raise them only after testing memory use, interface responsiveness, and CAD synchronization with representative notes.
