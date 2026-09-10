---
description: v2 record endpoints and custom record payload reference.
---

# Records

The v2 record API returns the same custom record structure used by the CAD. For most create, update, and draft requests, use a template with `useDictionary: true` and send `replaceValues` keyed by field `uid`. Send the full structure only when an integration must control sections or data that dictionary replacement does not support.

## Endpoints

{% content-ref url="get-templates.md" %}
[get-templates.md](get-templates.md)
{% endcontent-ref %}

{% content-ref url="get-template.md" %}
[get-template.md](get-template.md)
{% endcontent-ref %}

{% content-ref url="create-record.md" %}
[create-record.md](create-record.md)
{% endcontent-ref %}

{% content-ref url="update-record.md" %}
[update-record.md](update-record.md)
{% endcontent-ref %}

{% content-ref url="delete-record.md" %}
[delete-record.md](delete-record.md)
{% endcontent-ref %}

{% content-ref url="send-draft.md" %}
[send-draft.md](send-draft.md)
{% endcontent-ref %}

## Record Structure

```json
{
  "recordTypeId": 120,
  "id": 451,
  "syncUniqueId": "",
  "syncId": "",
  "name": "Incident Report",
  "img": "",
  "type": 9,
  "sections": [
    {
      "category": 0,
      "label": "Report Details",
      "fields": [
        {
          "type": "text",
          "label": "Case Number",
          "value": "SC-2026-001",
          "size": 6,
          "data": {},
          "options": [],
          "isPreviewed": true,
          "isSupervisor": false,
          "isRequired": true,
          "unique": false,
          "readOnly": false,
          "mask": "",
          "maskReverse": false,
          "dbMap": false,
          "isFromSync": false,
          "uid": "case_number",
          "dependency": {
            "type": "",
            "fid": "",
            "acceptableValues": []
          },
          "placeholder": ""
        }
      ],
      "searchCiv": false,
      "searchVeh": false,
      "enableDuplicate": false,
      "isDuplicate": false,
      "dependency": {
        "type": "",
        "fid": "",
        "acceptableValues": []
      }
    }
  ],
  "previewFields": []
}
```

### Record Properties

| Property        | Type    | Description                                                                                                                             |
| --------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `recordTypeId`  | integer | Community template ID. Fixed built-in templates use their `type` value; custom templates use the ID returned by the templates endpoint. |
| `id`            | integer | Individual stored record ID. A template has no stored record ID.                                                                        |
| `syncUniqueId`  | string  | Database Sync primary/unique identifier, when configured.                                                                               |
| `syncId`        | string  | Database Sync identifier, when configured.                                                                                              |
| `name`          | string  | Display name of the record or template.                                                                                                 |
| `img`           | string  | Record image URL.                                                                                                                       |
| `type`          | integer | Record family enum. See below.                                                                                                          |
| `sections`      | array   | Ordered section objects. Full records and templates contain these.                                                                      |
| `previewFields` | array   | Lightweight lookup values. Lookup responses may return these with `sections: []`.                                                       |

### Record Type Enum

These are the live record families accepted by the record system. Values omitted from this table are removed or internal-only.

| Value | Name                 | Template ID        |
| ----: | -------------------- | ------------------ |
|   `2` | Warrant              | `2`                |
|   `3` | BOLO                 | `3`                |
|   `4` | License              | `4`                |
|   `5` | Vehicle Registration | `5`                |
|   `7` | Character            | `7`                |
|   `8` | Police Record        | Community-specific |
|   `9` | Police Report        | Community-specific |
|  `10` | Medical Record       | Community-specific |
|  `11` | Medical Report       | Community-specific |
|  `12` | Fire Record          | Community-specific |
|  `13` | Fire Report          | Community-specific |
|  `14` | DMV Record           | Community-specific |
|  `15` | Lawyer Record        | Community-specific |
|  `16` | Lawyer Report        | Community-specific |

## Section Structure

| Property          | Type    | Description                                                               |
| ----------------- | ------- | ------------------------------------------------------------------------- |
| `category`        | integer | Section category enum.                                                    |
| `label`           | string  | Section heading.                                                          |
| `fields`          | array   | Ordered fields. Premade sections store their payload in `fields[0].data`. |
| `searchCiv`       | boolean | Shows the civilian search control on a custom section.                    |
| `searchVeh`       | boolean | Shows the vehicle search control on a custom section.                     |
| `enableDuplicate` | boolean | Allows users to duplicate the section while editing a record.             |
| `isDuplicate`     | boolean | Marks a duplicated section that the user may remove.                      |
| `dependency`      | object  | Optional visibility rule.                                                 |

### Section Category Enum

The following categories are authored by the current custom record editor.

| Value | Name        | `fields[0].data`                           |
| ----: | ----------- | ------------------------------------------ |
|   `0` | Custom      | Each field uses its own `value` or `data`. |
|   `1` | Flags       | `{ "flags": ["FLAG NAME"] }`               |
|   `5` | Speed       | Speed detail object shown below.           |
|   `6` | Charges     | `{ "charges": [...] }`                     |
|   `9` | Record Link | `{ "records": [...] }`                     |
|  `10` | Diagram     | `{ "diagram": {...}, "img": "..." }`       |

The editor's **Civilian** and **Vehicle** actions copy sections from the current character or vehicle template. They do not create separate section categories in new templates. Older agency, civilian, vehicle, and status category payloads remain readable for compatibility but should not be authored by new integrations.

### Premade Section Data

Flags:

```json
{
  "flags": ["ARMED", "VIOLENT"]
}
```

Speed:

```json
{
  "vehicleSpeed": "75",
  "speedLimit": "55",
  "paceType": "RADAR",
  "date": "2026/08/31",
  "time": "14:30",
  "fine": 250
}
```

Charges:

```json
{
  "charges": [
    {
      "arrestCharge": "Reckless Driving",
      "arrestChargeType": "Misdemeanor",
      "arrestChargeCounts": 1,
      "arrestChargeCode": "TRF-101",
      "arrestBondType": "Cash",
      "arrestBondAmount": 500,
      "jailTime": "0"
    }
  ]
}
```

Record links:

```json
{
  "records": [
    {
      "link": 451,
      "type": 9,
      "label": "Incident Report #451"
    }
  ]
}
```

`link` is the linked record's `syncUniqueId` when present, otherwise its numeric `id`. Diagram data contains the CAD diagram builder's Fabric canvas JSON in `diagram` and an optional rendered image URL in `img`; copy this object from a template or existing record instead of constructing Fabric objects manually.

## Field Structure

| Property       | Type      | Description                                                                                                           |
| -------------- | --------- | --------------------------------------------------------------------------------------------------------------------- |
| `type`         | string    | Field type enum. Values are case-sensitive in the editor; use the spelling shown below.                               |
| `label`        | string    | Display label.                                                                                                        |
| `value`        | string    | Field value for normal fields.                                                                                        |
| `size`         | integer   | Grid width from `1` through `12`.                                                                                     |
| `data`         | object    | Structured value for checkboxes, labels, and premade sections.                                                        |
| `options`      | string\[] | Options for `select` and `checkboxes`.                                                                                |
| `isPreviewed`  | boolean   | Includes the field in lightweight lookup previews.                                                                    |
| `isSupervisor` | boolean   | Requires the applicable supervisor permission to edit in the CAD.                                                     |
| `isRequired`   | boolean   | Requires a value before the CAD submits the record.                                                                   |
| `unique`       | boolean   | Enforces uniqueness for supported text and unit fields in custom sections.                                            |
| `readOnly`     | boolean   | Prevents editing in the CAD. Useful for generated and auto-filled fields.                                             |
| `mask`         | string    | Input mask for `text`/`random`, or `YYYY/MM/DD`, `DD/MM/YYYY`, or `MM/DD/YYYY` for `date`.                            |
| `maskReverse`  | boolean   | Applies a text mask from the end of the value.                                                                        |
| `dbMap`        | boolean   | Allows Database Sync mapping where that record family supports it.                                                    |
| `isFromSync`   | boolean   | Indicates that Database Sync supplied the current value.                                                              |
| `uid`          | string    | Stable field key used by `replaceValues`, dependencies, DB mapping, and merge logic. Do not include `'`, `#`, or `-`. |
| `dependency`   | object    | Optional visibility rule.                                                                                             |
| `placeholder`  | string    | Placeholder for input-backed field types.                                                                             |

### Field Type Enum

| Value                  | Value storage | Behavior                                                                                |
| ---------------------- | ------------- | --------------------------------------------------------------------------------------- |
| `text`                 | `value`       | Single-line text input.                                                                 |
| `textarea`             | `value`       | Multi-line text input.                                                                  |
| `address`              | `value`       | Address input with CAD address search support.                                          |
| `select`               | `value`       | One value from `options`.                                                               |
| `checkboxes`           | `data.flags`  | Zero or more values from `options`.                                                     |
| `date`                 | `value`       | Date input using `mask`.                                                                |
| `time`                 | `value`       | Time input.                                                                             |
| `image`                | `value`       | Image URL.                                                                              |
| `status`               | `value`       | Built-in record status selector.                                                        |
| `label`                | `data`        | Display-only label; `data.color` is a color string and `data.size` is `5` through `50`. |
| `id`                   | `value`       | Read-only stored record ID.                                                             |
| `random`               | `value`       | Generates a value from `mask` in the CAD.                                               |
| `UNIT_NUMBER`          | `value`       | Auto-fills the active unit number in the CAD.                                           |
| `UNIT_NAME`            | `value`       | Auto-fills the active unit name.                                                        |
| `UNIT_RANK`            | `value`       | Auto-fills the active unit rank.                                                        |
| `UNIT_AGENCY`          | `value`       | Auto-fills the active unit agency/district.                                             |
| `UNIT_DEPARTMENT`      | `value`       | Auto-fills the active unit department.                                                  |
| `UNIT_SUBDIVISION`     | `value`       | Auto-fills the active unit subdivision.                                                 |
| `UNIT_AGENCY_LOCATION` | `value`       | Auto-fills the active agency location.                                                  |
| `UNIT_AGENCY_ZIP`      | `value`       | Auto-fills the active agency ZIP/postal code.                                           |
| `UNIT_LOCATION`        | `value`       | Auto-fills the active unit location.                                                    |

For `checkboxes`, use this field shape:

```json
{
  "type": "checkboxes",
  "options": ["OPTION A", "OPTION B"],
  "data": {
    "flags": ["OPTION A"]
  }
}
```

The `status` field stores string enum values:

| Record family                      | `"0"`       | `"1"`    | `"2"`    |
| ---------------------------------- | ----------- | -------- | -------- |
| Warrant and other records          | Active/Open | Closed   | —        |
| License, Vehicle Registration, DMV | Pending     | Approved | Rejected |

## Dependencies

Sections and fields use the same dependency object:

```json
{
  "type": "EQUAL",
  "fid": "status",
  "acceptableValues": ["1"]
}
```

| `type`       | Visible when the field identified by `fid`...                                               |
| ------------ | ------------------------------------------------------------------------------------------- |
| `EQUAL`      | Exactly matches an acceptable value. For checkboxes, exactly one selected value must match. |
| `NOTEQUAL`   | Does not match the acceptable values.                                                       |
| `CONTAINS`   | Contains an acceptable value. For checkboxes, at least one selected value must match.       |
| empty string | Uses `CONTAINS` behavior.                                                                   |

Use an empty `fid` and empty `acceptableValues` when no dependency is required.

## Dictionary Replacement

`replaceValues` keys must match field `uid` values from the selected template.

```json
{
  "useDictionary": true,
  "recordTypeId": 120,
  "replaceValues": {
    "case_number": "SC-2026-001",
    "summary": "Vehicle stopped after a traffic violation.",
    "risk_flags": {
      "flags": ["ARMED"]
    }
  }
}
```

For custom-section fields, normal values populate `value`; a `checkboxes` replacement must be an object containing `flags`. For Flags, Speed, Charges, and Record Link sections, use the first field's `uid` and provide the complete section data object shown above. Diagram data is not replaced by dictionary mode; submit a full `record` object when it must be changed.

## Preview Fields

Lightweight lookup responses may omit full sections and return:

```json
{
  "previewFields": [
    {
      "uid": "case_number",
      "label": "Case Number",
      "type": "text",
      "value": "SC-2026-001",
      "category": 0
    }
  ],
  "sections": []
}
```

`previewFields` contains fields marked `isPreviewed`, plus flags, charges, and the character date-of-birth field used by lookup results.
