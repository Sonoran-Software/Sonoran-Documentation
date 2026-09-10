---
description: This guide covers creating a new dispatch call in Sonoran CAD.
---

# Creating a Call

## Select a Call Layout

<details>

<summary>Selecting a Dispatch Call Layout</summary>

If your community has configured [custom dispatch layouts](../customization/custom-dispatch-call-formats.md), you can change between them in the top right icon.

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

</details>

## Creating a Call

<details>

<summary>Add Available Units</summary>

**Manually Add Unit**

To add a unit to your call editor, click on an available unit or unit group, and select "Add to Call"

![Sonoran CAD - Add Unit to Call](<../../.gitbook/assets/image (232).png>)

**Attach Nearest Units**

When emergency calls are sent from in-game, they contain a coordinate location. Importing the emergency call from the table or live map will display an option to select and attach the closest units.

Entering a postal code will work as a secondary option to find the nearest units. You must have the [postals submodule](../../integration-plugins/in-game-integration/available-plugins/postals.md) enabled.

<div><figure><img src="../../.gitbook/assets/5feded729bf315a9005a757571cb8c6e.gif" alt="" width="375"><figcaption><p>Dispatch Editor: Nearest Units</p></figcaption></figure> <figure><img src="../../.gitbook/assets/Screen Recording 2025-04-23 131726.gif" alt="" width="375"><figcaption><p>Dispatch Editor: Nearest Postal Units</p></figcaption></figure></div>

**Drag-and-Drop**

Drag-and-drop is another fast way to add a unit to an existing call:

![Sonoran CAD - Attach Unit to Existing Call](../../.gitbook/assets/e168e0fb6bc579ec8c9839a2e741f872.gif)

You can also easily detach units from an existing call, or drag a unit from one call to another:

![Sonoran CAD - Existing Call Detach and Switch](../../.gitbook/assets/978f30dead2c2cf8dd7e573519e9b81a.gif)

</details>

<details>

<summary>Insert Call Information</summary>

In the call editor, you can view attached units and fill out the call information.\
Once completed, select "Create Call" to initiate the new dispatch call.

![Sonoran CAD - Unit Editor](<../../.gitbook/assets/image (344).png>)

</details>

## Manage a Call

<details>

<summary>Import Emergency Call</summary>

Emergency calls can be imported directly to the call editor for faster transfer of information. Click on the call to select `Open In Call Editor` to import the call description, address, and more.

<figure><img src="../../.gitbook/assets/d4655b26fe8b449ac4c8d9dfde40181a.gif" alt="" width="300"><figcaption><p>Sonoran CAD: Import Emergency Call</p></figcaption></figure>

</details>

<details>

<summary>Merge Additional Emergency Call</summary>

Often times civilians will continue to make additional emergency calls with updated information. At any time, you can merge these additional emergency calls into ongoing dispatch calls. Click on the emergency call to `Merge Emergency Call` to your dispatch call editor.

This will append the latest emergency call information to the description and update any address, postal, etc. information.

<figure><img src="../../.gitbook/assets/Recording_2025-06-26_123427.gif" alt="" width="375"><figcaption><p>Sonoran CAD: Merge Emergency Call</p></figcaption></figure>

</details>

<details>

<summary>Track, Update, and Manage the Call</summary>

The new dispatch will be displayed in your "Active Calls" window.\
You can select this call at anytime to preview, edit, or close.\
You can also drag-and-drop the call ID to the call editor to open the call.

![Sonoran CAD - Active Calls](<../../.gitbook/assets/image (110).png>)

</details>

<details>

<summary>Call Notes</summary>

Notes can be sent by units attached to the call.

**Text Notes**

Text based notes can be added in the note box and sent by pressing `enter` or `add note`.

**Note Links**

Record links for characters, arrest reports, etc. can also be sent in the dispatch call notes section. [Copy a record link](../records-management/searching-for-records.md#copy-record-links), then press the `Paste` button in the call notes section.

<figure><img src="../../.gitbook/assets/image (382).png" alt=""><figcaption><p>Sonoran CAD - Dispatch Call Notes</p></figcaption></figure>

</details>

<details>

<summary>Close the Call</summary>

To close the active dispatch, click on the active call and press "Close Call".

Or, you can select "Edit Call", change the status to "Closed", and press "Update Call".

![Sonoran CAD - Close Call](<../../.gitbook/assets/image (245).png>)

</details>

## Saved Call Types

<details>

<summary>Create a Saved Call Type</summary>

Saved call types allow dispatchers to quickly create commonly used calls.

To add a new saved call type, simply fill the information out in your editor, and press the save button. The saved types are organized based off of the call's title.

Saving a call with an identical title as another one will override it.

![Saved Dispatch Calls - Create](<../../.gitbook/assets/image (399).png>)

</details>

<details>

<summary>Open a Saved Call Type</summary>

To open a saved call type, simply select it from the dropdown at the top of the editor. The dropdown will also automatically filter as you type.

![Saved Dispatch Calls - Select](<../../.gitbook/assets/image (182).png>)

</details>

<details>

<summary>Remove a Saved Call Type</summary>

To remove a saved call type, simply select it from the dropdown and press the trash icon.

![Saved Dispatch Calls - Remove](<../../.gitbook/assets/image (142).png>)

</details>

<details>

<summary>Import/Export Saved Call Types</summary>

With a saved call type selected, the export button will allow you to save the current call type to a JSON file. Or, right-click the export button to export all of your saved call tyles to a JSON file.

<figure><img src="../../.gitbook/assets/image (503).png" alt=""><figcaption></figcaption></figure>

To import saved call types, the import button will appear when no saved call is selected. Click the icon to import a JSON file with one or more saved call types.

<figure><img src="../../.gitbook/assets/image (504).png" alt=""><figcaption></figcaption></figure>

</details>
