---
description: >-
  Bidirectionally synchronize locally stored CAD notepad entries with an iframe
  parent.
---

# Notepad Sync

The notepad iframe API keeps an in-game notepad synchronized with the notepad inside an embedded Sonoran CAD frontend. Notes remain in the CAD frontend's local browser storage and are not sent to the Sonoran CAD backend.

Each note has the following shape:

```json
{
  "id": "734c8df5-af36-4607-bb01-65e4d8ee64b0",
  "title": "Traffic Stop",
  "notes": "Blue Sultan, plate 4QXR128",
  "metadata": {
    "lookups": [
      {
        "start": 19,
        "end": 26,
        "text": "4QXR128",
        "type": "PLATE",
        "search": { "first": "", "last": "", "mi": "", "plate": "4QXR128" },
        "result": {
          "version": 2,
          "title": "State Return",
          "header": null,
          "sections": []
        }
      }
    ]
  }
}
```

`id` is a stable identifier. `metadata` is an optional JSON object for integration-specific data and linked lookup annotations. CAD automatically adds an ID and empty metadata object to older notes that do not have them.

When a CAD user highlights text and runs a name or plate lookup, CAD stores the linked text range, search object, and latest NCIC state-return snapshot in `metadata.lookups`. Preserve `metadata` when syncing notes from the iframe so users can preview the results or click the linked text to repeat the lookup. `result` is added after the lookup completes and uses the same state-return structure displayed in CAD call notes.

## Get Notes

Request the full note list after the iframe loads:

```javascript
cadFrame.contentWindow.postMessage({
  type: 'scad:notepad:get',
  requestId: 'initial-sync',
}, cadOrigin);
```

CAD responds with:

```json
{
  "type": "scad:notepad:state",
  "requestId": "initial-sync",
  "notes": []
}
```

## Set Notes

Send the complete note list whenever the in-game notepad adds, edits, or deletes a note:

```javascript
cadFrame.contentWindow.postMessage({
  type: 'scad:notepad:set',
  requestId: 'save-notes',
  notes: [
    {
      id: '734c8df5-af36-4607-bb01-65e4d8ee64b0',
      title: 'Traffic Stop',
      notes: 'Blue Sultan, plate 4QXR128',
      metadata: {},
    },
  ],
}, cadOrigin);
```

CAD stores the list locally, updates an open CAD notepad, and responds with the canonical list in `scad:notepad:changed`. If a note does not include `id` or `metadata`, CAD adds them in the response.

## Listen for CAD Changes

CAD emits the full note list whenever notes are changed in CAD and after applying `scad:notepad:set`:

```json
{
  "type": "scad:notepad:changed",
  "requestId": "save-notes",
  "notes": [
    {
      "id": "734c8df5-af36-4607-bb01-65e4d8ee64b0",
      "title": "Traffic Stop",
      "notes": "Blue Sultan, plate 4QXR128",
      "metadata": {}
    }
  ]
}
```

Changes made directly in CAD do not include `requestId`. Replace the in-game note list with the received `notes` array to keep both sides synchronized.

If `scad:notepad:set` does not contain a `notes` array, CAD responds with `scad:notepad:error` and `error: "invalid_notes"`.

## Search an External Selection

Send `scad:notepad:lookup` when a user highlights a name or plate in your external notepad and clicks your search button. CAD runs its normal lookup, opens the lookup tab, adds a link to the selected note text, and synchronizes the NCIC state-return snapshot through `scad:notepad:changed`. The CAD notepad does not need to be open.

The user must be logged in on the Police, Dispatch, EMS, or Fire page with a connected CAD session. Searches use that session's existing permissions and record filters; this event does not grant additional access.

First synchronize the note using `scad:notepad:set` and wait for its `scad:notepad:changed` response. Use the canonical note ID returned by CAD. Then send:

```javascript
cadFrame.contentWindow.postMessage({
  type: 'scad:notepad:lookup',
  requestId: 'search-plate-1',
  noteId: '734c8df5-af36-4607-bb01-65e4d8ee64b0',
  lookupType: 'PLATE',
  start: 19,
  end: 26,
  text: '4QXR128',
}, cadOrigin);
```

This example selects the plate in `Blue Sultan, plate 4QXR128`. `start` is inclusive and `end` is exclusive, using JavaScript string offsets (UTF-16 code units), like a textarea's `selectionStart` and `selectionEnd`. `text` must exactly match `note.notes.slice(start, end)`, be nonempty, and have no leading or trailing whitespace. Trim the selected range and adjust its offsets before sending if necessary.

Use `lookupType: 'NAME'` for names. CAD accepts one to three whitespace-separated name parts: `John` searches the first name, `John Smith` searches first and last names, and `John Michael Smith` also searches middle initial `M`. `PLATE` searches the selected text as the plate. You do not need to construct the search object or NCIC result metadata yourself.

For an external textarea:

```javascript
function searchSelection(editor, noteId, lookupType) {
  const selected = editor.value.slice(editor.selectionStart, editor.selectionEnd);
  const text = selected.trim();
  if (!text) return;
  const start = editor.selectionStart + selected.indexOf(text);
  cadFrame.contentWindow.postMessage({
    type: 'scad:notepad:lookup',
    requestId: crypto.randomUUID(),
    noteId,
    lookupType,
    start,
    end: start + text.length,
    text,
  }, cadOrigin);
}
```

### Responses and Synchronization

CAD sends `scad:notepad:changed` with the request ID when it adds the link, and again when it stores the result. Preserve the complete metadata, including CAD-generated lookup IDs, when editing or syncing notes. Overlapping lookup links are replaced; other links and integration metadata are preserved.

After the search completes, CAD also sends:

```javascript
{
  type: 'scad:notepad:lookup:result',
  requestId: 'search-plate-1',
  noteId: '734c8df5-af36-4607-bb01-65e4d8ee64b0',
  lookup: {
    id: 'cad-generated-lookup-id',
    start: 19,
    end: 26,
    text: '4QXR128',
    type: 'PLATE',
    search: { first: '', last: '', mi: '', plate: '4QXR128' },
    result: { /* CAD-generated NCIC state-return snapshot */ },
  },
  noteUpdated: true,
}
```

`noteUpdated` is false if the note or link was deleted or the linked text changed while the search ran. CAD still returns the search result but does not recreate the removed note or overwrite the changed selection. Unrelated edits are preserved. After completion, click the synced link in CAD to repeat the search, or send another lookup request from the external script.

Treat received `scad:notepad:changed` messages as state updates; do not echo them back as `scad:notepad:set` or automatically trigger another lookup. Metadata alone never starts a search. Changes made through the CAD notepad continue to use the existing change events without a request ID.

### Errors

Errors use `scad:notepad:error` with the original `requestId` and one of these `error` values:

| Error                 | Meaning                                                                                       |
| --------------------- | --------------------------------------------------------------------------------------------- |
| `note_not_found`      | The note ID is not in the synchronized list.                                                  |
| `invalid_lookup_type` | Use `NAME` or `PLATE`.                                                                        |
| `invalid_selection`   | The range or text is invalid or no longer matches the stored note. Resync before retrying.    |
| `invalid_name`        | The selected name contains more than three parts.                                             |
| `lookup_unavailable`  | CAD is not connected on a supported emergency role page.                                      |
| `lookup_in_progress`  | Another iframe lookup is pending. Wait for its result or error before sending another.        |
| `lookup_timeout`      | No result arrived within 30 seconds, for example after navigating away or closing the lookup. |
| `lookup_failed`       | CAD could not start the lookup.                                                               |

Only one iframe lookup can be pending at a time. A timeout or failure can leave the linked annotation without a result; the user can click it in CAD or explicitly retry the request.
