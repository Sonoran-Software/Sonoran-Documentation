---
description: Getting your database Credentials to use with Database Sync.
hidden: true
---

# Old: Manual Sync Setup

## Character Mapping

{% hint style="warning" %}
Sonoran CAD requires character mapping to be properly configured for the additional license and vehicle registration mapping.
{% endhint %}

### 1. What is DB Sync Mapping?

The DB sync configuration is designed to show Sonoran CAD the specific tables and columns that data can be pulled from in your database.

### 2. Table Columns and Name

The `table name` field will contain the name of your database table containing character records.

The `column name` field will contain the name of the specific column in the character records table containing data for this row.

The `Character Mapping Column` contains a unique ID for the specific character. This unique identifier will also map records in your license and vehicle registration tables back to the character that owns them. Typically, this is a Steam ID or license ID.

Character records can also pull data from multiple different tables, such as a properties table to add address information. Just be sure that those additional tables have a proper `identifier` column to map back to the other characters table.

**Example:**

In our database, the `characters` table contains our character records. The `identifier` column contains the character's unique ID, the `firstname` column contains the characters first name, the `lastname` character contains the characters last name, etc.

![SQL Table Example](<../../.gitbook/assets/image (276).png>)

![DB Sync Character Mapping Example](<../../.gitbook/assets/image (213).png>)

### 3. Enable, Save and Test

Be sure that you have enabled character mapping via the toggle. Once your character mapping has been completed, hit the save button and then the test button. The test button will attempt to select a single random character with the mapping configuration specified.

If you see "Success!" move onto the next section.

## License and Vehicle Mapping

Licenses and Vehicle registrations can also be automatically pulled via CAD search with Database Sync.

### 1. Table Columns and Names

Similar to the character mapping, specify the table name containing your vehicle registrations or licenses. Unlike character mapping, data for these records can only be pulled from a single table.

The vehicle and license mapping will also need to have the `Character Mapping Column` specified. Again, this is the name of the column in your license/vehicle table containing a unique ID that maps back to the character that owns it.

**Example:**

In our database, the `owned_vehicles` table contains our stored vehicles. The `owner` column contains the character's unique ID that owns the vehicle, and the `plate` column contains the vehicle's license plate.

![SQL Vehicle Table Example](<../../.gitbook/assets/image (216).png>)

![DB Sync - Vehicle Mapping Example](<../../.gitbook/assets/image (440).png>)

### 2. Enable, Save and Test

Be sure that you have enabled the license/vehicle mapping via the toggle. Once your mapping has been completed, hit the save button and then the test button. The test button will attempt to select a single random license or vehicle with the mapping configuration specified.

If you see "Success!" move onto the next section.

## JSON Columns

Many databases store data in a JSON formatted column. Sonoran CAD can also parse these columns for data.

<details>

<summary>JSON Columns (Objects)</summary>

The following is for JSON columns that contain one or more object(s). Objects are formatted using `{}` and are NOT enclosed by `[]`.

**1. View the JSON Data**

In our database, the `accounts` column stores JSON formatted data. For this example, we want to display the `bank` money in the custom character record.

![SQL - JSON Column Example](<../../.gitbook/assets/image (454).png>)

To more easily view the JSON data, we can copy it from the cell and paste it into a [JSON formatter](http://jsonviewer.stack.hu/).

![](<../../.gitbook/assets/image (465).png>)

We can see that the JSON "key" for the bank account amount is `bank`.

**2. Nested JSON Values**

Nested JSON values are also supported.\
Here, the `eye_color` is a JSON object, with the `item` property of `0`.

![Database - Nested JSON Value](<../../.gitbook/assets/image (409).png>)

In the DB Sync config, we list the JSON key as `eye_color.item`

![](<../../.gitbook/assets/image (252).png>)

Then, we can use [friendly mapping](database-sync-credentials.md#friendly-mapping) to convert the eye color `0` value to an actual color, like "brown".

</details>

<details>

<summary>JSON Columns (Array)</summary>

The following is for JSON columns that contain an array of objects. Arrays are enclosed by `[]` and contain one or more objects formatted by `{}`.

**1. View the JSON Data**

In our database, the `licenses` column stores JSON formatted data. This data is an array (list) `[]` of license objects `{}`.

To more easily view the JSON data, we can copy it from the cell and paste it into a [JSON formatter](http://jsonviewer.stack.hu/).

<figure><img src="../../.gitbook/assets/image (486).png" alt="" width="148"><figcaption></figcaption></figure>

For this example, we want to display the status (valid/invalid) of the license type `drivers`.

**2. Configure the JSON Key**

We want our `Driver's License Status` field in our custom record to reflect whether or not their license is valid. The `expireDate` JSON property displays `true` (expired) or `false` (valid).

For our JSON key, set it to the following:

`[?(@.license='drivers')].expireDate`

This tells DB sync to look in the array (list) `[]` for a license type of `drivers` and give us the `expireDate` value.

<figure><img src="../../.gitbook/assets/image (485).png" alt=""><figcaption></figcaption></figure>

Then, we can use [friendly mapping](database-sync-credentials.md#friendly-mapping) to convert the `true` to `Expired` and `false` to `Valid`.

</details>

## External Keys

### Introduction

In some cases, your license or vehicle registration tables may not directly contain a `Character Mapping ID` column (a column with an ID that directly maps back to the character/civilian record), but may contain a unique ID that maps back to a specific character in another table.

### Example: DB Layout

In this example, the `vehicle` table contains all of the vehicle information, but does not contain a `CharacterID` column. Instead, the `vehicle` table contains a `VehicleRegistrationID` column.

The `VehicleRegistrationId` column then maps to the `vehicleregistration` table. The `vehicleregistration` table then contains a corresponding `CharacterId` column, which maps back to the `character` table.

![Sonoran CAD - External Key DB Layout](<../../.gitbook/assets/image (89).png>)

### Example: CAD Config

In the CAD, the configuration is simple.

Toggle on the `External Key` checkbox, as the `vehicle` table's `VehicleId` needs to be mapped to an external table to be turned into the proper `characterId`.

Specify the external key's table (`vehicleregistration`) and the external key's column `CharacterId`.

![Sonoran CAD - External Key](<../../.gitbook/assets/image (254).png>)

### 2. Set the JSON Column and Key

Back in the mapping panel, we toggle the field as a `JSON Column` and set the column name to `accounts` as this is the column in our character table that contains the JSON data.

We can then set the JSON Key for this data as `bank`.

![DB Sync - JSON Column](<../../.gitbook/assets/image (457).png>)

## Friendly Mapping

{% hint style="warning" %}
Friendly Mapping requires the **pro** version of Sonoran CAD.

For more information, see our [pricing](../../pricing/faq/) or view how to check your community [limits](../../tutorials/getting-started/view-your-limits.md).
{% endhint %}

Friendly mapping allows you to convert any raw database value to a more user friendly value.\
Ex: `drive_license` in your database is converted to `Driver's License`.

### 1. Find Values to "Friendly Map"

{% hint style="warning" %}
MySQL `tinyint` column types may be displayed as numerical values `0` and `1` but be read as `True` and `False` by Sonoran CAD.\
\
Instead of mapping the "Database Vaue" as `0` or `1` you will need to map `False` and `True`.
{% endhint %}

In our SQL table, we can see the character's job columns has text values that can be improved. The `taxi` job value can be automatically converted to `Taxi Driver` in DB Sync records, and the `cardealer` jon can be automatically converted to `Car Dealer`.

![SQL Table - Unfriendly Values](<../../.gitbook/assets/image (196).png>)

### 2. Configure the Friendly Mapping

In our character table mapping, we can select `Modify` on the `job` field's friendly mapping.

![DB Sync - Modify Friendly Mapping](<../../.gitbook/assets/image (274).png>)

In the editor, we can now map the raw database value of `taxi` to a friendly value of `Taxi Driver` and the raw db value of `cardealer` to `Car Dealer`.

Be sure to hit save in the friendly mapping editor, and then save the configuration for your mapping section.

These new friendly mapped values will even work with [custom search types](../../tutorials/customization/custom-search-types.md)!

![Friendly Mapping Editor](<../../.gitbook/assets/image (203).png>)

### Import via CSV

#### 1. Copy the Google Sheet

Navigate to our [official friendly mapping Google Sheet](https://docs.google.com/spreadsheets/u/1/d/1Q83yqdH-YGlAv9zW-hJ1dA5k5hYPQDLfeXby0BXB6-k/copy) and make a copy. Using a copy of our official sheet ensures your friendly mapping is formatted correctly.

**You may ONLY use the Google sheet directly. Editing this via Excel or any other program is NOT supported.**

![Sonoran CAD - Copy Friendly Mapping CSV](<../../.gitbook/assets/image (312).png>)

**2. Add your Friendly Mappings**

Be sure to leave the top header line as it is. Below the header, add in your friendly mapping keys and values.

![Sonoran CAD - Edit Friendly Mapping CSV](<../../.gitbook/assets/image (140).png>)

#### 3. Download the CSV

In Google Sheets, navigate to File > Download > Comma Separated Values (.csv) to download the file.

![Sonoran CAD - Download Friendly Mapping CSV](<../../.gitbook/assets/image (424).png>)

#### 4. Import the CSV File

In the friendly mapping editor select `Import` > `CSV` > Select your downloaded Google spreadsheet

Then, save the mapping and save the database sync config.

![](<../../.gitbook/assets/image (387).png>)

### Import from JSON

You can also build and format your friendly mapping from raw JSON and paste them directly into the UI.

#### 1. Format the JSON Structure

The JSON structure is an object array. Be sure to strictly follow the format.

```javascript
[
  {
    "dbValue": "0",
    "friendlyValue": "Brown"
  },
  {
    "dbValue": "1",
    "friendlyValue": "Green"
  },
  {
    "dbValue": "2",
    "friendlyValue": "Blue"
  }
]
```

#### 2. Import the JSON Structure

In the friendly mapping editor select `Import` > `JSON` > Paste your JSON formatted structure

![Friendly Mapping - Import via JSON](<../../.gitbook/assets/image (354).png>)

## Custom Record Fields

Sonoran CAD's records are entirely customizable, this includes database sync records! You can easily enable database sync mapping for any custom field you add to a character, license, or vehicle registration record.

### 1. Edit your Custom Record

Navigate to Admin > Customization > Custom Records

Select your custom character, license, or vehicle registration record to open the editor.

Simply add a field if the desired field doesn't already exist and note the `Label` name for the next step. For this example, we'll enable database sync for a new `job` field in our character's table.

Be sure to save your custom record format after enabling this!

<figure><img src="../../.gitbook/assets/image (185).png" alt=""><figcaption><p>Custom Records - DB Sync Mapping Toggle</p></figcaption></figure>

### 2. Configure the Newly Mapped Field

Back in our database sync editor, we can now see the new `Job` field has been added. We can map this new field to our database as any other field.

![Database Sync - Custom Field Mapping](<../../.gitbook/assets/image (214).png>)
