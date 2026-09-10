---
description: >-
  Configure least-privilege ACE access for CCTV administrators, live viewers,
  and recording reviewers.
tags:
  - fivem
  - cctv
  - permissions
  - ace
---

# Permissions

CCTV checks permissions on the server. Grant only the actions each role needs.

| ACE node              | Purpose                                                          |
| --------------------- | ---------------------------------------------------------------- |
| cctv.admin            | Create and manage terminals, cameras, placement, and persistence |
| cctv.live.view        | View permitted cameras live                                      |
| cctv.recording.view   | Open the archive and replay permitted recordings                 |
| cctv.recording.create | Create manual recordings or bookmarks                            |
| cctv.recording.delete | Delete recordings                                                |
| cctv.recording.upload | Use the configured upload workflow                               |
| cctv.discord.send     | Use the configured Discord workflow                              |
| cctv.remote.all       | Access all remotely available terminal groups                    |

## Example roles

```cfg
add_ace group.cctvadmin cctv.admin allow
add_ace group.cctvadmin cctv.live.view allow
add_ace group.cctvadmin cctv.recording.view allow
add_ace group.cctvadmin cctv.recording.create allow

add_ace group.cctvstaff cctv.live.view allow
add_ace group.cctvstaff cctv.recording.view allow
add_ace group.cctvstaff cctv.recording.create allow

add_ace group.cctvsupervisor cctv.recording.delete allow
add_ace group.cctvsupervisor cctv.recording.upload allow
add_ace group.cctvsupervisor cctv.discord.send allow
```

Assign player identifiers to these groups using the server's existing ACE structure.

## Terminal-specific access

Use the following nodes to restrict access more precisely:

* `cctv.terminal.<terminalId>` grants access to one terminal.
* `cctv.remote.<group>` grants remote access to one terminal group.
* `cctv.remote.all` grants remote access across every group.

Prefer terminal or group permissions over cctv.remote.all. Automatic camera discovery, status, and cleanup require cctv.admin.

## Optional integrations

Upload and Discord permissions do not enable those integrations by themselves. The server-only integration must also be configured. Do not grant upload, deletion, sharing, or broad remote access to normal viewers unless their role requires it.
