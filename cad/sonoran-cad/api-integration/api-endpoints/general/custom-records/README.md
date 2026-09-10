---
description: >-
  Sonoran CAD allows you to access, create, update, and remove highly customize
  records and reports via API.
---

# Custom Records

## Record API Endpoints

All custom records and reports utilize the same common formatting. You can manage custom records via the endpoints shown below.

#### Retrieve Record Templates

Access your existing custom record types built from the CAD's [custom record editor](../../../../tutorials/customization/creating-custom-record-and-report-types.md).

{% content-ref url="get-record-template.md" %}
[get-record-template.md](get-record-template.md)
{% endcontent-ref %}

#### Create a New Record

Add a new custom record to your community.

{% content-ref url="new-record.md" %}
[new-record.md](new-record.md)
{% endcontent-ref %}

#### Edit an Existing Record

Modify and update an existing record in your community.

{% content-ref url="edit-record.md" %}
[edit-record.md](edit-record.md)
{% endcontent-ref %}

#### Remove a Record

Remove an existing record from your community.

{% content-ref url="remove-record.md" %}
[remove-record.md](remove-record.md)
{% endcontent-ref %}

## Record Formatting

Custom records require a strict format with several dozen different data fields. Due to the complexity, it is highly recommended to create a new custom record template in the CAD UI, and then [retrieve the record template](get-record-template.md) for adding new records.

{% tabs %}
{% tab title="Custom Record " %}
```javascript
{
    "recordTypeId": -1, // This is the unique ID for this record type!
    "id": -1, // This is the individual record ID number (Leave -1 for NEW)
    "syncId": "", // This is used for DB Sync/Merge mapping - Leave Blank
    "name": "Eample Record Type", // This is the name of the record type
    "type": 1, // See TYPE enum
    "sections": [] // Array of custom record "section" objects
}
```

**Record Type ID**

This is a unique ID for this record type. It is highly recommended to get all of this data from an [existing custom record template ](get-record-template.md)that you have created in the CAD.

**Record Type**

The record "type" is an enumerator used to distinguish the category of the custom record/report.

| Enum | Description                 |
| ---- | --------------------------- |
| 2    | Custom Warrant              |
| 3    | Custom BOLO                 |
| 4    | Custom License              |
| 5    | Custom Vehicle Registration |
| 7    | Custom Character            |
| 8    | Custom Police Record        |
| 9    | Custom Police Report        |
| 10   | Custom Medical Record       |
| 11   | Custom Medical Report       |
| 12   | Custom Fire Record          |
| 13   | Custom Fire Report          |
| 14   | Custom DMV Record           |
| 15   | Custom Law Record           |
| 16   | Custom Law Report           |
{% endtab %}

{% tab title="Section" %}
The "Section" object contains all of the data for a custom record section. These objects are held in the `sections` array in the custom record object.

```javascript
{
    "category": 0, // Premade or Custom Section Type
    "label": "Some Custom Section", // Name/Header of Section
    "fields": [], // Array of "FIELD" objects
    "searchCiv": false, // If this is a civilian character section,
                        //  display the search button to help search and import character data automatically
    "searchVeh": false, // If this is a vehicle information section,
                        //  display the search button to help search and import vehicle data automatically
    "enableDuplicate": true, // Allow users to duplicate this section while filling out the record/report
    "dependency": {
        "type": "", // EQUAL, NOTEQUAL, CONTAINS
        "fid": "_5678_wxyz",
        "acceptableValues": [
            "Something",
            "Example",
        ]
    } 
}
```

**Category**

The `category` field contains an enumerator representing the section type. These correspond to the custom or premade category types in the [custom record editor](../../../../tutorials/customization/creating-custom-record-and-report-types.md).

| Enum | Description    |
| ---- | -------------- |
| 0    | Custom         |
| 1    | Flags          |
| 5    | Speed          |
| 6    | Charges        |
| 9    | Linked Records |
{% endtab %}

{% tab title="Field" %}
The `field` object contains all of the data for an individual custom record field. These objects are held in the `fields` array in the `section` object.

```javascript
{
    "type": "input", // Field type (See Enum)
    "label": "Some Field Name",
    "value": "", // Field value - MUST be converted into a string
    "size": 6, // Integer value 1-12 for column width (6 = 1/2 the row width)
    "data": {}, // Object storing data for premade sections
    "options": ["Option 1", "Another Option"], // Options for dropdown or checkb
    "isPreviewed": false, // Should this field be seen in the lookup preview table?
    "isSupervisor": false, // Is this field restricted to supervisors only?
    "isRequired": false, // Is this field required to be filled before submitting?
    "unique": false, // Ensure unique value against any other records of this type (recordTypeId) - Non-DB Sync and custom sections only!
    "readOnly": false, // Prevent users from modifying auto-filled fields
    "mask": "###", // Force 3 number entry (See Details)
    "maskReverse": false, // Fill mask in reverse order (Money)
    "dbMap": false, // Allow this field to be mapped with DB Sync
    "isFromSync": false, // DB Sync Internal Processing (Ignore)
    "uid": "_1234_abcd", // Random unique field ID (DB Sync and Merge)
    "dependency": {
        "type": "", // Unused
        "fid": "_5678_wxyz",
        "acceptableValues": [
            "Something",
            "Example",
        ]
    }
}
```

**Type**

| `INPUT`                | Standard Textbox                                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- |
| `TEXTAREA`             | Multi-line Textbox                                                                                            |
| `ADDRESS`              | [Auto-filter Dropdown of Street Addresses](../../../../tutorials/customization/addresses-and-street-names.md) |
| `SELECT`               | Dropdown (Uses `options` array)                                                                               |
| `STATUS`               | DB Status Enums (See below)                                                                                   |
| `DATE`                 | Date Picker                                                                                                   |
| `TIME`                 | Time Picker                                                                                                   |
| `IMAGE`                | Image URL Viewer/Uploader                                                                                     |
| `CHECKBOXES`           | List of Checkboxes (Uses `options` array)                                                                     |
| `LABEL`                | Text Label                                                                                                    |
| `UNIT_NUMBER`          | Auto filled unit number                                                                                       |
| `UNIT_NAME`            | Auto filled unit name                                                                                         |
| `UNIT_RANK`            | Auto filled unit rank                                                                                         |
| `UNIT_AGENCY`          | Auto filled unit agency                                                                                       |
| `UNIT_DEPARTMENT`      | Auto filled unit department                                                                                   |
| `UNIT_SUBDIVISION`     | Auto filled unit subdivision                                                                                  |
| `UNIT_AGENCY_LOCATION` | Auto filled unit agency location                                                                              |
| `UNIT_AGENCY_ZIP`      | Auto filled unit agency zip                                                                                   |
| `UNIT_LOCATION`        | Auto filled unit location                                                                                     |

**Status**

The `STATUS` field type is required for `Vehicle Registration` type records and provides additional optional functionality for `BOLO` and `Warrant` records. This status allows the database to search for BOLO/Warrant records that are open or closed, and vehicle registrations that are approved or pending in the DMV panel.

The `STATUS` field value contains an enumeration (integer) value as follows:

| Enumerator (Int) | DMV Records | Warrant/BOLO Records |
| ---------------- | ----------- | -------------------- |
| `0`              | `PENDING`   | `ACTIVE`             |
| `1`              | `APPROVED`  | `CLOSED`             |
| `2`              | `REJECTED`  | N/A                  |

**Mask**

Masks can be used in a field to force a specific entry format\
Ex: `(###) ### - ####` forces a phone number format.

| Token | Description  |
| ----- | ------------ |
| #     | Numeric      |
| S     | Letter A-Z   |
| X     | Alphanumeric |

**UID**

The `UID` or "Unique ID" field helps internally map Database Merge fields.\
\
In addition, a `UID` field with the value of `"first"` and `"last"` are required for the civilian records. A `UID` field of `"plate"` is required for a vehicle registration record. This is how the backend process determines searchable license plate and character name values.

When you create a custom record and add in a `civilian` or `vehicle` section, the imported section will keep the same `UID` fields. This is how data is mapped from a character or vehicle search and placed into a custom record.

**Data**

The data object stores detailed objects for pre-made section types. The data object type (charge, agency info, flags, etc.) stored can be determined by the parent section's `category` enumeration value. If the parent section's `category` is not `0` (Custom) then the section will contain a single field, with the `data` property containing the detailed object.

Ex: `record.sections[index].fields[0].data` object would contain agency information if the `record.sections[index].category` is `2` (Agency).

```javascript
// Flags (Section Category 1)
{
   "flags": ["Some Flag", "Another Flag"]
}

// Checkboxes (Custom Section Category 0)
// Checkboxes options are set in the field.options array
// Checkboxes selection are set in the field.data.flags array
// Ex: options: ["Checkbox 1", "Checkbox 2", "Checkbox 3"]
// Ex: Select #1 & #3 data: { flags: ["Checkbox 1", "Checkbox 3"] }
{
   "flags": ["Checkbox 1", "Checkbox 3"]
}

// Agency (Section Category 2)
{
   "name": "LSPD", // Agency Name
   "recordNumber": -1, // New Record ID
   "date": "01/01/2020",
   "officer": "John Doe",
   "location": "1234 E. Test St",
   "zip": "12345",
   "badge": "A10"
}

// Speed (Section Category 5)
{
   "vehicleSpeed": "70",
   "speedLimit": "45",
   "paceType": "Radar",
   "date": "01/01/2020",
   "time": "10:00 PM",
   "fine": 350
}

// Charges (Section Category 6)
{
   "arrestCharge": "Assault",
   "arrestChargeType": "Misdemeanor",
   "arrestChargeCounts": 1,
   "arrestChargeCode": "A(102)",
   "arrestBondType": "Federal Bail Bond",
   "arrestBondAmount": 50000,
   "jailTime": "5 Years"
}
```
{% endtab %}
{% endtabs %}
