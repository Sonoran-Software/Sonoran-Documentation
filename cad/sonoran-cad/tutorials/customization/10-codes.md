---
description: Learn more about importing your 10-codes into Sonoran CAD.
---

# 10-Codes

## What are 10-Codes?

10-Codes are used to differentiate and abbreviate dispatch situations.\
Ex: 10-10: Fight in Progress

### Modify 10-Codes

Under Admin > Customization > 10-Codes you can add, edit, or remove 10-codes for your community.

<figure><img src="../../.gitbook/assets/image (517).png" alt=""><figcaption></figcaption></figure>

### My locality doesn't call them "10-Codes"

Sonoran CAD allows you to change the naming of "10-Codes" to anything else you'd like.\
Learn more about our [geographical customization](geographical-settings.md).

## Import from Premade Spreadsheet (CSV)

We've compiled 10-code spreadsheets for all 50 US states. Download a CSV from our [10-code repository](https://github.com/Sonoran-Software/CAD-10-Codes) and [import it into the CAD](10-codes.md#id-4.-import-the-csv-file).

## Import 10-Codes from a Spreadsheet (CSV)

Sonoran CAD allows you to import 10-codes directly from a spreadsheet.

{% hint style="danger" %}
**Spreadsheet (CSV) importing is only supported directly from Google sheets.**

Support will not be provided to users modifying their spreadsheets with Excel, or any other program. The official Google sheet includes specific safety checks preventing invalid formats, blank spaces, etc.
{% endhint %}

### 1. Copy the Google Sheet

Navigate to our official [10-code Google sheet](https://docs.google.com/spreadsheets/d/1XOqjkrKcvP6hc9F6DynK03HqLVY8KWV7M4g6aQddBu8/copy) and make a copy. Using a copy of our official sheet ensures your 10-codes are formatted correctly.

**You may ONLY use the Google sheet directly. Editing this via Excel or any other program is NOT supported.**

![Sonoran CAD - Copy 10-Codes Spreadsheet](<../../.gitbook/assets/image (401).png>)

### 2. Add Your 10-Codes

Now that you have copied this sheet into your Google Drive, you can add new rows and format your 10-codes.

{% hint style="warning" %}
**Do NOT add additional columns.**\
Every 10-code must be on a separate row to be properly imported into Sonoran CAD.
{% endhint %}

![Sonoran CAD - 10-Codes CSV](<../../.gitbook/assets/image (302).png>)

### 3. Download the CSV

In Google Sheets, navigate to File > Download > Comma Separated Values (.csv) to download the file.

![Google Sheets - Download CSV](<../../.gitbook/assets/image (386).png>)

### 4. Import the CSV File

In Sonoran CAD, navigate to Admin > Customization > 10-Codes

In the 10-codes section, select the "Import" button.\
Then, select "CSV" as the import type and select your downloaded CSV file.

![Sonoran CAD - Import Data](<../../.gitbook/assets/image (339).png>)

![File Selector - Select CSV](<../../.gitbook/assets/image (335).png>)

After selecting the CSV file, your 10-codes will be imported into the CAD and saved automatically.

### Troubleshooting

Having issues importing your CSV? [Be sure you are using and editing our Google Sheet with the Google Sheets program only](10-codes.md#1-copy-the-google-sheet).

Our Google sheet includes specific error checking and validation to handle common mistakes.\
**Support is not provided if you are using Excel, or any other program.**

## Import from JSON

You can also build and format your 10-Codes directly into JSON. These JSON formatted 10-Codes can then be pasted directly into the UI.

### 1. Format the JSON Structure

The JSON structure is an string array. Be sure to strictly follow the format.

```javascript
[
  "10-10: Fight In Progress",
  "10-11: Dog Case",
  "10-15: Civil Disturbance",
  "10-16: Domestic Problem",
  "10-17: Meet Complainant",
  "10-25: Report in Person (Meet)",
  "10-31: Crime in Progress",
  "10-32: Man with Gun",
  "10-33: Emergency",
  "10-34: Riot",
  "10-35: Major Crime Alert",
  "10-37: Suspicious Vehicle",
  "10-45: Animal Carcass",
  "10-46: Assist Motorist",
  "10-52: Ambulance Needed",
  "10-55: Intoxicated Driver",
  "10-56: Intoxicated Pedestrian",
  "10-57: Hit and Run",
  "10-59: Escort",
  "10-70: Fire Alarm",
  "10-73: Smoke Report",
  "10-80: Chase in Progress",
  "10-89: Bomb Threat",
  "10-90: Bank Alarm",
  "10-91: Pick Up Prisoner / Subject",
  "10-92: Improperly Parked Vehicle",
  "10-94: Street Racing",
  "10-96: Mental Subject",
  "10-98: Prison / Jail Break"
]
```

### 2. Import the JSON Structure

In Sonoran CAD, navigate to Admin > Customization > 10-Codes

In the penal codes section, select the "Import" button.\
Then, select "JSON" and paste the JSON string array of 10-codes.

![](<../../.gitbook/assets/image (339).png>)

![Sonoran CAD - Paste JSON Content](<../../.gitbook/assets/image (253).png>)

After pasting the JSON content, your 10-codes will be imported into the CAD and saved automatically.
