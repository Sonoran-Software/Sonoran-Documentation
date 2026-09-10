---
description: Write, navigate, remove, and synchronize Sonoran Notepad pages.
tags:
  - fivem
  - notepad
  - sonoran cad
  - sync
---

# Using and Syncing Notes

## Open and close the notepad

Run `/notepad` or press `F7` with the default configuration. Use **Close** or press `Escape` to leave the notepad.

While it is open, the player performs a writing animation with notepad and pencil props. The animation and props stop when the interface closes or the resource stops.

## Write and navigate

Each page has a bold **Title** field and a lined **Note** area. Changes save automatically after a short pause.

* Select **Previous** to move to the preceding note.
* Select **Next** to move forward.
* Selecting **Next** on the last completed note creates a new blank page.
* Only one untouched blank page is kept at a time.
* Select the scissors control in the upper-right corner to tear out the current page.

The page indicator shows the current position and total number of notes.

## When CAD sync is available

On open, Notepad loads the player's local FiveM cache and asks the signed-in tablet for the current CAD note list. Edits, new pages, and removals are saved as a complete note list.

CAD sync is available only when:

1. The `tablet` resource is started.
2. The player's game account has an active Sonoran CAD community link.
3. The CAD page inside the tablet is signed in and responding.

The tablet owns the authenticated CAD page. Sonoran Notepad does not collect or store the player's CAD credentials, browser cookies, API key, or login token.

## Local-only mode

If CAD sync is unavailable, a compact warning appears above the notebook header. Editing, page navigation, and removal continue to work.

<figure><img src="../.gitbook/assets/sonoran-notepad-local-only.png" alt="Sonoran Notepad showing the CAD sync off warning while a local field note remains editable"><figcaption><p>The local-only warning explains why CAD sync is off without blocking the notebook.</p></figcaption></figure>

Local-only changes are marked for synchronization. When the tablet later reports a linked, signed-in CAD session, Notepad sends the current local list to CAD.

{% hint style="warning" %}
The FiveM-side fallback is memory-only. A resource or server restart clears it. Sonoran CAD also stores synchronized notepad data in the CAD frontend's local browser storage rather than the CAD backend.
{% endhint %}

## Linked lookup results

CAD notes may include lookup annotations in their metadata. When a valid annotation points to text in the note body, it appears under **Linked results**. Select a result to open its text-only detail view.

Notepad preserves these annotations while editing and syncing. It does not execute a new name or plate search by itself; linked results appear only when the CAD note data already includes the supported annotation and result information.
