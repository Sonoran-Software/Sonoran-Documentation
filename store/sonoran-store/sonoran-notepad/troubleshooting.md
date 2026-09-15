---
description: >-
  Resolve installation, linking, sign-in, synchronization, and local-cache
  issues in Sonoran Notepad.
tags:
  - fivem
  - notepad
  - troubleshooting
  - sonoran cad
---

# Troubleshooting

## The CAD sync warning stays visible

The warning means Notepad is working locally but cannot confirm a linked, signed-in CAD tablet session.

1. Open the tablet and sign in to Sonoran CAD.
2. Confirm the player has linked the correct CAD community.
3. Run `/tablet checklink` to refresh the account link.
4. Close and reopen Notepad after the tablet finishes loading.
5. Confirm both `tablet` and `sonoran-notepad` are still started.

The warning must remain visible when the player is unlinked, signed out, the CAD page is not responding, or the tablet resource is stopped.

## The tablet is grey, blank, or not loading

Use the official [Tablet & Mini-CAD guide](https://docs.sonoransoftware.com/cad/integration-plugins/in-game-integration/available-plugins/tablet) and [FiveM tablet cache guide](https://docs.sonoransoftware.com/cad/download/fivem-clear-cache). Resolve the tablet session first; Notepad intentionally stays in local-only mode until the CAD page responds.

## A local note disappeared after a restart

The FiveM fallback cache is memory-only and resets when `sonoran-notepad` or the server restarts. This behavior is expected. Restore the tablet link and CAD sign-in before depending on local-only notes across sessions.

## A CAD note or change does not appear

1. Confirm the local-only warning is not visible.
2. Leave the notepad open briefly after the tablet becomes available so pending local changes can synchronize.
3. Confirm the note stays within the configured count, title, body, metadata, and total payload limits.
4. Remember that CAD Notepad Sync uses the CAD frontend's local browser storage. A different device or browser profile can have a different note list.

## Linked results do not appear

The **Linked results** section appears only for valid lookup annotations already included in the CAD note metadata. Sonoran Notepad does not start a new NCIC lookup from selected text. Malformed annotations or ranges that no longer match the note body are hidden safely.

If the issue remains after checking the server and client console, contact [Sonoran Software support](https://support.sonoransoftware.com/) with the Notepad version, SonoranCADFiveM version, startup order, and relevant error messages. Remove private player or CAD information before sharing logs.
