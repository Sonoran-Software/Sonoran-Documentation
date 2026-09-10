---
description: View the latest changes to Sonoran CAD!
---

# 📋 Changelog

## Roadmap

[View our upcoming roadmap!](https://roadmap.sonorancad.com)

## Changelog

### 3.43.30 09/10/2026

{% tabs %}
{% tab title="Fixed" %}
Mobile Builds: Publishing Fixes

* Fixed Android SDK installation and enabled replacement of pending TestFlight reviews for production iOS builds.
{% endtab %}
{% endtabs %}

### 3.43.29 09/09/2026

{% tabs %}
{% tab title="New" %}
Database Sync: Setup Walkthrough

* Added a guided walkthrough for setting up Database Sync.

Support: Contact and Feedback

* Added a menu option to contact support and submit feedback.
{% endtab %}

{% tab title="Fixed" %}
Desktop: Active Calls Loading

* Fixed active calls loading indefinitely on desktop.

Closed Calls: Performance

* Fixed freezing and performance issues when loading large closed calls.
{% endtab %}
{% endtabs %}

### 3.43.26 09/09/2026

{% tabs %}
{% tab title="Fixed" %}
Desktop App: Reliable Close and Reopen

* Fixed the Windows app remaining in the background after closing its main window and preventing it from reopening.
{% endtab %}
{% endtabs %}

### 3.43.26 09/09/2026

{% tabs %}
{% tab title="New" %}
Notepad: Linked Lookup Notes

* Added bi-directional iframe note syncing and inline name and plate lookups with NCIC previews.

Notepad: External Name and Plate Searches

* Added iframe requests to search highlighted text in external notepads and sync linked results back to CAD notes.
{% endtab %}

{% tab title="Changed" %}
Website: Homepage and Pricing Improvements

* Improved homepage loading and search visibility, added a dedicated pricing page, and streamlined sign-in and logout.
{% endtab %}
{% endtabs %}

### 3.43.25 08/27/2026

{% tabs %}
{% tab title="New" %}
ER:LC Integration: Emergency Call Auto-Delete

* Added configurable automatic removal of ER:LC emergency calls after a selected number of minutes.

ER:LC Integration: Emergency Call Type Controls

* Added individual controls to enable or disable Police, Fire, and DOT emergency calls.
{% endtab %}
{% endtabs %}

### 3.43.24 08/26/2026

{% tabs %}
{% tab title="New" %}
Integration Panels

* Added an all-new API to create custom UI panels in the CAD, complete with events and storage for third-party integrations.
{% endtab %}

{% tab title="Fixed" %}
Records: Charge Preview Tooltips

* Fixed ambiguous charge previews from displaying details for the wrong penal code.

Dispatch: Custom Call Statuses

* Fixed active and historical calls displaying legacy statuses instead of their customized dispatch status.
{% endtab %}
{% endtabs %}

### 3.43.23 08/25/2026

{% tabs %}
{% tab title="New" %}
Shortcuts: Workflow Automation

* Added recordable taskbar shortcuts with reusable steps, hotkeys, CLI commands and arguments, import and export, and Stream Deck playback.
{% endtab %}

{% tab title="Fixed" %}
Self Dispatch: New Call Taskbar Action

* Fixed creating a call from the New Call taskbar item in self dispatch.
{% endtab %}
{% endtabs %}

### 3.43.22 08/13/2026

{% tabs %}
{% tab title="New" %}
Dispatch Calls: Layout Customization

* Added a visual dispatch call layout editor for arranging sections and configuring system fields, custom fields, statuses, and required fields.

Dispatch Calls: Call ID Format Customization

* Added customizable dispatch call ID formats with year, month, day, and numeric ID variables for region-specific numbering.

Community Settings: Geographical Customization

* Added geographical settings for regional terminology, address and measurement formats, date and time preferences, and community menu labels.
{% endtab %}
{% endtabs %}

### 3.43.19 08/05/2026

{% tabs %}
{% tab title="Fixed" %}
Call Viewer: Mobile Call Notes

* Fixed call notes so they display and remain scrollable on mobile and tablet screen sizes.
{% endtab %}
{% endtabs %}

### 3.43.19 08/03/2026

{% tabs %}
{% tab title="New" %}
Call Viewer: State Returns

* Added a State Returns tab for attaching full lookup results to calls and reviewing them in table, card, or NCIC views.

Database Sync: Automatic AI Setup

* Added an AI-guided setup that automatically builds and reviews database sync field mappings.
{% endtab %}

{% tab title="Changed" %}
Dispatch Taskbar: New Call Shortcut

* Added the New Call taskbar action for dispatchers so they can open call creation directly from the taskbar.
{% endtab %}
{% endtabs %}

### 3.43.18 07/29/2026

{% tabs %}
{% tab title="New" %}
Custom Records: AI Narrative Improvement

* Added Pro AI assistance for polishing custom record narratives, with usage visibility for administrators.
{% endtab %}

{% tab title="Fixed" %}
Lookup: Custom Section Labels

* Fixed lookup result columns displaying internal placeholder field names instead of custom section labels.
{% endtab %}
{% endtabs %}

### 3.43.17 07/28/2026

{% tabs %}
{% tab title="Fixed" %}
Lookup: Flag Voice Announcements

* Fixed lookup results failing to announce enabled custom flag names with text-to-speech.
{% endtab %}
{% endtabs %}

### 3.43.15 07/23/2026

{% tabs %}
{% tab title="New" %}
Records: NCIC Results View

* Added an NCIC-style results view for Lookup and Records with theme-based defaults and a persistent user preference.

Dispatch: Command Line Overhaul

* Added a customizable dispatcher CLI with saved-call creation, unit and call actions, autocomplete, keyboard navigation, configurable hotkeys, and taskbar access.
{% endtab %}

{% tab title="Fixed" %}
Records: Mobile PDF Printing

* Fixed an issue preventing record PDFs from opening or printing on mobile devices.

Lookup: Retro Search Type Icons

* Fixed Plate, Identifier, and Record ID searches displaying the same icon in retro mode.

Taskbar: Dual Compact Toolbar Width

* Fixed the secondary taskbar failing to span the full width when Dual Taskbar and Compact Toolbar are enabled.
{% endtab %}
{% endtabs %}

### 3.43.13 07/22/2026

{% tabs %}
{% tab title="New" %}
DB Sync: Save and Disabled Indicators

* Improved the individual DB sync sections to show disabled markers and added an unsaved changes notice

Bodycam: Recording Toggle

* Improved the unit identifier bodycam tab to show a start/stop recording button with a notice about the hotkeys for web and desktop users

Custom Layouts: Bodycam Viewer

* Added support for the live bodycam viewer as a custom layout panel
{% endtab %}

{% tab title="Changed" %}
Customization: Settings vs hotkeys

* Updated the customization menu to have separate tabs for general settings vs hotkeys
{% endtab %}

{% tab title="Fixed" %}
Bodycam: Recording Timeline Scrubber

* Fixed an issue with the bodycam recording playback timeline scrubber skipping to the end visually

Bodycam: Shadow Recording

* Fixed an issue with the web and desktop version not properly including the shadow recording in some cases

Trevor Theme: Dual Taskbar

* Fixed an issue with the secondary taskbar when in dual mode on the Trevor theme not having proper width for tabs

Dual Taskbar: Customization

* Fixed an issue where the customization tab button would not work if in the secondary taskbar

Lookup: Create Record on Character

* Fixed an issue where creating a new record from a civilian record in the lookup tab wouldn't automatically import them to the record

Call Editor: Create Call Selection

* Fixed an issue where opening the call editor tab after a refresh would prevent the dropdown selections from working, until the editor was cleared

Call Editor: New Line for Notes

* Fixed an issue where pressing ENTER in the call notes would send the note with a new line above it. SHIFT + ENTER is now used for newlines.

Call Editor: Call Description

* Fixed an issue where the call description box of the call viewer could sometimes overflow the parent container.
{% endtab %}
{% endtabs %}

### 3.43.12 07/20/2026

{% tabs %}
{% tab title="New" %}
Themes: Mark19

* Added a new Mark19 theme option by default

Themes: Trevor

* Added a new Trevor theme option by default
{% endtab %}
{% endtabs %}

### 3.43.10 07/04/2026

{% tabs %}
{% tab title="New" %}
ER:LC Setup Helper

* Added an improved walkthrough layout for the ER:LC integration

FiveM Setup Helper

* Added an improved walkthrough layout for the FiveM integration
{% endtab %}

{% tab title="Fixed" %}
Dispatch Call Update SFX

* Fixed an issue where dispatchers would hear SFX for all call updates not just the ones they had open
{% endtab %}
{% endtabs %}

### 3.43.9 07/02/2026

{% tabs %}
{% tab title="New" %}
Multiple Call Editors

* Added the ability to open and edit multiple dispatch calls at once

Multi-Monitor Drag-and-Drop

* Added drag-and-drop support for multi-monitor layouts to drag units, dispatch calls, and emergency calls from one monitor into another monitor's call editor.

Drag-and-Drop Row

* Updated the drag-and-drop system for units, dispatch calls, and emergency calls to make the entire row draggable, not just the ID chips.

Active Groups Display Persistent

* Added a toggle to the active groups panel to hide persistent groups that have no active units in them

Penal Code Preview

* Added a preview tooltip to penal codes in the records panel search results

Billing Page Overhaul

* UI overhaul to the customer billing portal, making it easier to view important information, select the community to upgrade, and see offers.
{% endtab %}

{% tab title="Changed" %}
Sonoran CAD Logo Redirect

* Improved behavior when in a community and clicking the Sonoran CAD logo in the header so that it goes back to the community menu, not the homepage.
{% endtab %}

{% tab title="Fixed" %}
Multi-Monitor Call Viewer Hyperlink

* Fixed an issue where selecting a dispatch call would switch to the call viewer window instead of using the existing call viewer window on another monitor

Multi-Monitor Live Map Hyperlink

* Fixed an issue with live map hyperlinks (unit locations, emergency call pins, etc.) would switch to the full live map window instead of using the existing live map window on another monitor

Multi-Monitor Header Shortcuts

* Fixed issues and improved handling with the desktop header allowing for double-click and drag to the top of the monitor for full-screen shortcuts.

Record Agency Field IDs

* Fixed an issue with custom record agency sections having the record ID still show as NEW

Tablet Layout Drag-and-Drop

* Fixed an issue on the tablet sized screens preventing drag-and-drop custom layouts from saving and reverting instantly

Panel Expand and Collapse

* Fixed an issue with the tablet sized screen not allowing double-click to expand and collapse layout panels

Active Calls Unit Display

* Fixed an issue with the units on an active call only displaying a maximum of two when the column was wide enough for more
{% endtab %}
{% endtabs %}

### 3.43.6 06/29/2026

{% tabs %}
{% tab title="New" %}
Custom Layouts: Chat

* Added support for the chat window in custom layouts.

Custom Layouts: Recordings

* Added support for the bodycam recordings window in custom layouts.

Game Overlay Tab

* Added a new taskbar tab to open the in-game overlay for desktop applications, making it more visible and easier to find.
{% endtab %}
{% endtabs %}

### 3.43.5 06/29/2026

{% tabs %}
{% tab title="New" %}
Live Map Optimizations

* Optimized the FiveM 3D live map and added additional optimizations for both 3D live maps to keep it persistently loaded Saved Types

Saved Types

* Added a new option to keep the saved call types dropdown visible in the call editor Send Lookup to Unit

Send Lookup to Unit

* Re-added support to send lookups to units Theme - Undo Changes

Theme - Undo Changes

* Added a menu option to undo the unsaved changes to your current theme selection
{% endtab %}

{% tab title="Fixed" %}
Multi-Monitor Close Error

* Fixed an error popup happening whenever a multi-monitor window was closed Unit Event Subscription

Unit Event Subscription

* Fixed an issue where units would still be subscribed to updates, hearing things like panic toggles if they switched to the civilian page Tablet Size Drag-and-Drop

Tablet Size Drag-and-Drop

* Fixed an issue with users on the in-game tablet unable to drag-and-drop taskbar tabs to reorder if their tablet was too small
{% endtab %}
{% endtabs %}

### 3.43.4 06/27/2026

{% tabs %}
{% tab title="New" %}
Multiple Monitor Support

* Added experimental support for multiple desktop screens for multi-monitor use when using the Windows or OSX application

Call Viewer ID Hyperlink

* Added a hyperlink to the call ID number in the call viewer, allowing users to quickly switch calls

Panel Expand and Collapse

* Added a double-click action to the custom layout panel header, allowing users to quickly expand and collapse a panel

Layout Panels - Signal

* Added support for the signal panel to be placed in custom layouts

Layout Panels - Tone Board

* Added support for the tone board panel to be placed in custom layouts
{% endtab %}

{% tab title="Fixed" %}
Call Viewer Layout - Units

* Fixed an issue with the unit attachments not being available in the layout version of the call viewer

Call Viewer Layout - Attachments

* Fixed an issue with call note attachments not opening the record when in the layout version

Record Viewer - ID

* Fixed an issue with record IDs showing as -1 when opening the record

Call Viewer - Description

* Fixed resizing issues with the call editor description and overall layout for shorter screens

Call Viewer Layout - Drag Unit Attachment

* Fixed an issue where dragging a unit to the call viewer would open the full call viewer page

Tasbkar - Subtask Overflow

* Removed the visible scrollbar on the subtaskbar when items overflowed
{% endtab %}
{% endtabs %}

### 3.43.3 06/26/2026

{% tabs %}
{% tab title="New" %}
Desktop Layout: Live Map

* Added live map support to the layout panels instead of only a dedicated tab

Desktop Layout: Call Viewer

* Added support for the call editor in the desktop layout system

Themes: Save Layout

* Themes now save desktop panel sizes and locations

Call Viewer: Hotkey

* Added a new desktop hotkey to open the dedicated call viewer tab

Customization: Map Behavior

* Added a customization behavior for opening the dedicated live map window vs desktop panel

Customization: Call Behavior

* Added a customization behavior for opening the dedicated call viewer window vs desktop panel
{% endtab %}

{% tab title="Changed" %}
Customization: Settings

* Removed the settings menu from the taskbar dropdown and moved them to the customization menu
{% endtab %}
{% endtabs %}

### 3.43.2 06/25/2026

{% tabs %}
{% tab title="New" %}
Lookup Panels - Tablet Size

* Updated the civilian and record panel inside the lookup section to have a maximum height and the option to collapse the panels

Customization - Font Size

* Added significantly larger font size options
{% endtab %}

{% tab title="Changed" %}
Lookup Tab - Search Types

* Search types expansion area in the lookup panel is now collapsed by default
{% endtab %}

{% tab title="Fixed" %}
Preview Fields - Record IDs

* Fixed an issue with record IDs showing as NEW in the preview fields

Live Map - Postal Search

* Fixed an issue with live map postal search not working (FiveM resource restart required)

Custom Layout - Outdated Cache

* Fixed an issue causing some users to load their old custom layouts, mixing with the new system in strange ways

Active Calls - Refresh

* Fixed an issue with active calls list spam reloading in some cases
{% endtab %}
{% endtabs %}

### 3.43.0 06/25/2026

{% tabs %}
{% tab title="New" %}
UI Customization Overhaul

* Revamped the entire emergency services panel UI with new customization options, theme editor, custom layout system, and more.

Record Lookup Optimizations

* Major overhauls for the record lookup systems, vastly improving performance for communities with hundreds of thousands of records. Supervisor panels no longer limit the number of records visible, in-game tablet performance has been improved, and more.
{% endtab %}
{% endtabs %}

### 3.42.2 04/30/2026

{% tabs %}
{% tab title="New" %}
Record Edit History

* Audit and view historical changes to record fields

Homepage Refresh

* Initial UI refresh of the homepage

Authentication Optimizations

* Overhauled backend authentication logic to heavily improve performance
{% endtab %}

{% tab title="Fixed" %}
Initial Socket Connections

* Fixed an issue with initial connections getting a 404 on socket initialization

3D FiveM Map Unit Locations

* Fixed an issue with unit locations appearing south east of where they should be

Station Alert API

* Fixed an API issue causing the latest Station Alert resource to not show locations in the UI
{% endtab %}
{% endtabs %}

### 3.42.1 04/10/2026

{% tabs %}
{% tab title="Fixed" %}
Stream Deck Port Binding

* Fixed an issue with the desktop app sometimes resulting in a port error message displaying from the Stream Deck plugin
{% endtab %}
{% endtabs %}

### 3.42.0 04/02/2026

{% tabs %}
{% tab title="New" %}
FiveM: Bodycam Recording

* The FiveM bodycam now offers automated recording on events, stored in Sonoran CAD.

FiveM: Bodycam Overlay

* Added a new bodycam overlay in-game.

Unit Chat

* Added a messaging system between units, complete with text-to-speech

Tone Board TTS & Stacking

* Added localized text-to-speech, speech-to-text, and stacking to the tone board

Persistent Groups

* Communities can now create persistent unit groups that are not removed when units disconnect. Groups can also be self-assigned by units and have limits set.

Modify Identifier

* Initial UI revamp of the unit editor

Admin Panel UI Colors

* Initial color revamp of the admin panels and navigation
{% endtab %}

{% tab title="Fixed" %}
Desktop Overlay Dispatch

* Fixed an issue with the desktop overlay not allowing dispatchers to toggle on the feature to include emergency calls
{% endtab %}
{% endtabs %}

### 3.41.4 03/24/2026

{% tabs %}
{% tab title="New" %}
In-Game Desktop Overlay

* Desktop app users can now toggle an in-game overlay via hotkey. The overlay allows users to change their status, view attached call information, send notes, attach/detach from calls, and automatically convert emergency calls to dispatch calls.

Automatic Character Creation Command

* Added new customizable in-game commands to automatically register civilian characters.

Bodycam Panic Recording

* When a user presses their panic button, the body camera will automatically start recording.

Bodycam Taskbar

* Added the ability to configure your bodycam from the bottom taskbar, no longer requiring access to the unit editor.
{% endtab %}
{% endtabs %}

### 3.41.3 03/23/2026

{% tabs %}
{% tab title="New" %}
Bodycam Recordings

* Added manual bodycam recordings for the web and desktop version, complete with hotkeys to toggle. All communities have access to limited cloud storage.

ER:LC Automatic Emergency Calls

* All in-game emergency calls placed via user phone or automated alarms (fires, robberies, etc.) now create an automatic call in the dispatch panel

ERLC Traffic Stop - License Plate

* Switched from custom :log command to a custom ;ts command
* No longer requires a manual plate entry

ER:LC Civilian Panel Auto-Registration

* Removed the in-app prompt to enter the license plate

ER:LC Register Vehicle Command

* Switched from custom :log commands to custom ;register commands
* No longer requires the license plate to be entered in the command

ER:LC Plate Reader

* No longer requires a registration record to run a lookup
{% endtab %}
{% endtabs %}

### 3.41.1 03/19/2026

{% tabs %}
{% tab title="New" %}
Custom Lookup Types

* Unlimited custom lookup types are now available on the **free** plan
* Added advanced custom lookup types to specify multiple search criteria at once
* Added record re-indexing to allow newly created custom record searches to locate old records

Bodycam Viewer

* Bodycams now have tones for on/off and repeat tones while activated
* Bodycams now have a toggleable overlay with the unit information
* Bodycams now have a toggleable effect overlay for more realism

ER:LC Civilian Panel: Auto Vehicle Registration

* ER:LC communities now have a button in the civilian panel to automatically register vehicles

Text-To-Speech Overhaul

* Overhauled the text-to-speech system to use local AI models, now allowing them to work on all app platforms instead of only Chrome
{% endtab %}

{% tab title="Fixed" %}
**Roblox Custom Live Map**

* Re-added custom live map support for Roblox communities
{% endtab %}
{% endtabs %}

### 3.41.0 03/16/2026

{% tabs %}
{% tab title="New" %}
MacOS Desktop App

* Added a free MacOS desktop application

ER:LC v2

* Completly overhauled ER:LC integration system, available free to all communities

Free Version Unlocks (Phase 1)

* Unlocked the following paid features for the free version:
  * Full ER:LC Integration
  * Desktop Hotkeys
  * Unlimited Agencies / Departments / Subdivisions
  * PRF Record Printing
  * Unlimited Discord Webhooks
  * Unlimited Tone Board Customization
  * Unlimited Civilian Characters per Account
{% endtab %}
{% endtabs %}

### 3.40.4 03/06/2026

{% tabs %}
{% tab title="New" %}
DB Sync - Include API Records

* Database sync lookups can now have an option toggled on to return API-created records. This is primarily useful for DB sync communities using integrations like ERS that automatically add ERS-generated character records into the CAD database.

Rapid ID - Address Import

* Rapid IQ completion now automatically adds the address into the call editor
{% endtab %}

{% tab title="Fixed" %}
Unit Group Bodycam

* Fixed an issue with units inside of a group not showing a bodycam preview icon when in card mode

Record Drafts - Community Specific

* Fixed an issue where saved record drafts were global instead of community specific
{% endtab %}
{% endtabs %}

### 3.40.0 02/26/2026

{% tabs %}
{% tab title="New" %}
3D Live Map

* Added an all-new 3D live map for FiveM

Bodycam Video Feeds

* Revamped the bodycam system to now show true live video instead of screenshots

Unit Location Speed

* Added a new websocket API to update unit locations every 250ms instead of 5 seconds
{% endtab %}
{% endtabs %}

### 3.39.1 02/23/2026

{% tabs %}
{% tab title="New" %}
Custom Record Placeholder Fields

* Added the ability to set placeholder text on custom record fields
{% endtab %}

{% tab title="Fixed" %}
Rapid IQ Customization

* Fixed general issues with Rapid IQ customizations not saving

Locked Window Restore

* Fixed an issue where the command line, timers, and signal window would not save after restart/refresh when locked to a desktop
{% endtab %}
{% endtabs %}

### 3.39.0 02/19/2026

{% tabs %}
{% tab title="New" %}
Rapid IQ

* Added an all-new, customizable medical priority dispatching system to walk dispatch call takers through medical questions in order to extract the best information for first responders.

ERLC Live Map Zoom

* Added support to the ER:LC live map to zoom to the location when the location pin icon is selected on a unit.
{% endtab %}
{% endtabs %}

### 3.38.8 01/09/2026

{% tabs %}
{% tab title="New" %}
Create Record from Civilian Lookup

* Civilian lookup results now have a button to create a new record, automatically importing their character information.

Automatic Record Drafts

* Removed the manual save draft button when creating a new record as drafts now auto-save until submitted.
{% endtab %}

{% tab title="Fixed" %}
Reconnection Handling

* Reworked re-connection handling to resolve issues where lookups and other windows wouldn't work after re-connecting and required a refresh.
* Fixed an issue where pinned tabs in the taskbar would be wiped on re-connection until a refresh.
* Fixed an issue where the self-dispatch button would appear on the dispatch call editor after a re-connection until after a refresh.

Dispatch Automations Button

* Fixed an issue where the dispatch automations button would be displayed on non-dispatch pages.

Dispatch Saved Types Clear

* Fixed an issue where the saved call type selection wasn't cleared when clearing the call editor.
{% endtab %}
{% endtabs %}

### 3.38.7 12/22/2025

{% tabs %}
{% tab title="Changed" %}
Scroll Bar Style

* Shrank the width of scrollbars and changed the color to a theme option.

Lookup Clear Inputs

* Added a clear button to all inputs in the lookup search options, allowing for a quick clear and re-focus.

Draggable Window Handles

* Increased the size of the draggable window hit boxes for resizing. Additionally, allowed the use of the window resize drag handles when the window is not in focus.
{% endtab %}

{% tab title="Fixed" %}
Live Map Upload: Cache Busting

* Fixed an issue with cache busting when uploading a new, custom live map.

Call Editor Attach/Detach Automations

* Fixed an issue where attaching and detaching units via call editor would not fire the dispatch status automations.
{% endtab %}
{% endtabs %}

### 3.38.6 12/16/2025

{% tabs %}
{% tab title="New" %}
Lookup History

* Added a history button to the lookup window to re-run prior searches.

Call Record Attachments

* Added a button in the call notes to quickly view all attached records.
{% endtab %}

{% tab title="Changed" %}
Dispatch Automation Timers

* The timer window no longer opens as a popup if a timer is created via dispatch automation.
{% endtab %}

{% tab title="Fixed" %}
Unit Group Action Menu

* Fixed an issue where the unit actions right-click menu was missing when viewing groups in card mode.

Timer Expire Notification

* Fixed an issue with automatic timers where changing a unit’s status to clear a countdown timer could still cause the timer-completion notification sound to play when the original timer expired.
{% endtab %}
{% endtabs %}

### 3.38.5 12/13/2025

{% tabs %}
{% tab title="New" %}
Save Themes

* Users can now save their custom themes to quickly swap between.

Export All Themes

* Users can now right-click the theme export to export and share all of their themes at once.

Export All Saved Call Types

* Users can now right-click the saved call types export button to export and share all of their themes at once.

Themes: No Background

* Added a button to remove all background images from the theme.
{% endtab %}

{% tab title="Fixed" %}
Custom Layout Save

* Fixed an issue causing custom layouts to not save properly after a refresh.

Custom Layout Required Window Multi-Desktop

* Fixed an issue preventing users from changing a required window (call editor, units, etc.) to one of the new multi-desktop layers.
{% endtab %}
{% endtabs %}

### 3.38.0 12/12/2025

{% tabs %}
{% tab title="New" %}
Theme Overhaul

* An overhaul of the dark theme for the dispatch, police, fire, and EMS panels.

Custom Themes

* Added a theme editor in the customization menu.

Taskbar Refresh

* Improved drag-and-drop animations for reordering, clock improvements, and more.

Draggable Window Bar

* Added a double-click to maximize any movable window.

Page Backgrounds

* Added customizable page backgrounds in the emergency services panels.

Multi-Desktop

* Added the option to create multiple desktops in the emergency service panels for more window room.

Multi-Desktop Hotkeys

* Added customizable hotkeys to quickly change between desktops.

Record Drafts

* Added the ability to save a record as a draft to be resumed later before submission.

Card and List View

* Added toggles to change between a newer "card" style and the existing list views for units, unit groups, and emergency calls.

Live Map Hyperlinks

* Added a map pin hyperlink button on units, unit groups, and emergency calls to automatically open the live map and pan to the location.

Call Created Note

* Added a new automatic note when dispatch calls are created to help reflect the creation timestamp.

Timer Automations

* Expanded the dispatch automations tab to allow for countdown/up timers when a unit status is changed.

Saved Types: Import and Export

* Added import and export capabilities to the saved call types.

Database Sync: Import and Export

* Added the ability to import and export DB sync configurations.

Live Map Cache Busting

* Added automatic cache busting to ensure map images update after new tiles are uploaded.

i18n Translations

* Updated dozens of word and phrase references to use proper translation keys.
{% endtab %}
{% endtabs %}

### 3.37.18 11/19/2025

{% tabs %}
{% tab title="Fixed" %}
Duplicate Section Dependencies

* Fixed an issue where section dependencies on duplicated sections when filling out a custom record were always dependent on the first section.
{% endtab %}
{% endtabs %}

### 3.37.17 11/14/2025

{% tabs %}
{% tab title="New" %}
Live Map: Roxwood Expansion Pt. 2

* Added additional tile support for the latest version of the Roxwood expansion.
{% endtab %}
{% endtabs %}

### 3.37.16 11/13/2025

{% tabs %}
{% tab title="New" %}
Cloudflare Custom Domains

* Implemented a new system for custom domains, leveraging Cloudflare for SaaS.

Call Note PDF: Timestamps

* Added timestamps to call notes in the PDF generation.
{% endtab %}

{% tab title="Fixed" %}
Call PDF: ID

* Fixed an issue causing the Call ID number in the PDF to not display the label properly.
{% endtab %}
{% endtabs %}

### 3.37.14 10/27/2025

{% tabs %}
{% tab title="New" %}
PDF Print to In-Game

* Added a new feature to print a PDF record from in-game to FiveM.

API: LOOKUP\_CUSTOM

* Added a new endpoint to search for records via custom lookup types.

Roxwood Live Map: Right Tile

* Added file whitelists for a blank live map tile to the right of the Roxwood expansion.
{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}

### 3.37.10 07/29/2025

{% tabs %}
{% tab title="New" %}
Live Map - Cayo Perico

* Added support to the live map for the Cayo Perico expansion
{% endtab %}
{% endtabs %}

### 3.37.9 07/28/2025

{% tabs %}
{% tab title="Fixed" %}
\#30273 - Date Field Timezone

* Fixed an issue causing the date fields on submitted records to show as a day before or after for users in some timezones.

Record Vehicle and Civ Search - Section Importing

* Fixed an issue where importing data on a vehicle or civ search would only fill out that section and skip importing data to sections below that did not have a separate search button enabled.
{% endtab %}
{% endtabs %}

### 3.37.8 07/16/2025

{% tabs %}
{% tab title="Fixed" %}
Random Fields - Mask Search

* Fixed an issue with masks on random generation fields causing the mask characters to apply to the searchable value - causing a failure on custom searches.
{% endtab %}
{% endtabs %}

### 3.37.7 07/15/2025

{% tabs %}
{% tab title="Fixed" %}
Civilian DMV Auto-Fill

* Fixed an issue causing new civilian records to not automatically import character information.
{% endtab %}
{% endtabs %}

### 3.37.6 07/14/2025

{% tabs %}
{% tab title="New" %}
API NEW\_RECORD: deleteAfterMinutes

* Added a new parameter to automatically delete the new record after X minutes.

API NEW\_CHARACTER: deleteAfterMinutes

* Added a new parameter to automatically delete the new record after X minutes.

API CALL\_911 deleteAfterMinutes

* Added a new parameter to automatically delete the new call after X minutes.

API Lookup Account Param

* Added a new `account` parameter to the lookup endpoint, sending results back to the user's CAD based on their SSO UUID.

API Lookup By Value Account Param

* Added a new `account` parameter to the lookup by value endpoint, sending results back to the user's CAD based on their SSO UUID.

API Attach To Call Account Param

* Added a new `account` parameter to the unit attachment endpoint, attaching the user based on their SSO UUID.

API Detach From Call Account Param

* Added a new `account` parameter to the unit detachment endpoint, attaching the user based on their SSO UUID.
{% endtab %}

{% tab title="Fixed" %}
\#29664 - Custom Report Search Character

* Fixed an issue causing custom reports with multiple, separated character or vehicle search sections to sometimes not import data to the correct section.

\#29582 - Character Random ID

* Fixed an issue causing the random ID field to not automatically work on character records.

\#18235 - Firefox Dropdown

* Fixed an issue in Firefox causing the username dropdown to be empty.
{% endtab %}
{% endtabs %}

### 3.37.4 06/26/2025

{% tabs %}
{% tab title="New" %}
Diagram Builder - Images

* Added image upload support to the diagram builder.

Diagram Builder - Free Draw

* Added free draw support to the diagram builder.

Diagram Builder - Text

* Added text support to the diagram builder.

Random ID Fields

* Added new randomized fields to custom records, allowing communities to specify a specific format to automatically generate text.

Emergency Calls - Merge

* Added the ability to merge emergency calls into new or existing dispatch calls for updated descriptions, locations, and more.

Station Alert - Import Call Info

* When selecting a nearby station from the call editor, the message box will be pre-filled with the call's address and description.

Station Alert - Icon Support

* Added custom icon support to the Station Alert submodule.

DB Sync - Date Formatting

* Added new handling to dynamically detect long timestamps (with time, etc.) from DB sync and strip/convert them to date only strings, allowing for proper mask formatting customization.

DB Sync - Array Support

* Added JSON object array support to DB sync allowing communities on frameworks like ESX to parse license information stored in an array.
{% endtab %}

{% tab title="Fixed" %}
Record Webhooks Encode Format for Images

* Record webhooks no longer capitalize image URLs and include URL formatting for spaces and special characters.

\#29318 - Call Address

* Fixed an issue where importing an emergency call to the dispatch editor and then importing a second call resulted in a cleared address field.
{% endtab %}
{% endtabs %}

### 3.37.3 05/12/2025

{% tabs %}
{% tab title="New" %}
Station Alert: Indicator Colors

* Added support for yellow and magenta color indicators in the station alert panel
{% endtab %}

{% tab title="Fixed" %}
Character Restrictions: Explanation Label

* Removed an explanation label for a feature no longer available to reduce confusion
{% endtab %}
{% endtabs %}

### 3.37.2 04/29/2025

{% tabs %}
{% tab title="New" %}
Call Editor: Nearest via Postal

* Added support for nearest units and stations in the dispatch call editor by adding a postal location, if the emergency call does not contain coordinates.

Wipe Dispatch and Emergency Calls

* Added a new option in the admin records wipe panel to wipe dispatch and emergency calls.

Translation Overhaul Start

* Added CAD translations to translate.sonoransoftware.com for easier community pushes. Added UA translations.
{% endtab %}
{% endtabs %}

### 3.37.0 04/17/2025

{% tabs %}
{% tab title="New" %}
Station Alert - Integration

* Added a new panel and live map integration for the free station alert resource.

Dispatch Call Editor - Nearby Stations

* Added a new nearby stations quick access icon in the dispatch call editor.

Dispatch Call Editor - Nearby Units

* Added a new nearby units quick attach icon in the dispatch call editor.
{% endtab %}
{% endtabs %}

### 3.36.0 04/08/2025

{% tabs %}
{% tab title="New" %}
ERS Integration

* Added a new ERS integration system allowing dispatchers to generate callouts via live map, lookup ERS character records, auto generate 911 calls, and more!

Live Map - Roxwood Support

* Added official support for the Roxwood expansion area on the custom live map.
{% endtab %}

{% tab title="Fixed" %}
\#28018 Leave Community

* Fixed an issue causing the leave community button to not display on a specific screen size.
{% endtab %}
{% endtabs %}

### 3.35.0 03/19/2025

{% tabs %}
{% tab title="New" %}
Scene Diagram Builder

* Added a new scene diagram builder for custom records
{% endtab %}
{% endtabs %}

### 3.34.1 01/22/2025

{% tabs %}
{% tab title="Fixed" %}
\#26902: Unit Column Selector

* Fixed an issue causing the table column selector on the active units panel to fail

\#26857: Saved Call Types Filter

* Fixed an issue causing the type-to-filter in the dispatch editor's saved call types to not properly filter options

\#26833: DMV Pending Hide DB Sync

* Fixed an issue causing the DMV panel to display license and vehicle record filters as an option in the pending area, even if DB sync was enabled
{% endtab %}
{% endtabs %}

### 3.34.0 01/16/2025

{% tabs %}
{% tab title="New" %}
PDF Print - Linked Records

* Added PDF print handling for linked records sections

Dispatch & Emergency Calls - Pagination Overhaul

* Overhauled and added proper server-side pagination for emergency calls and dispatch calls.
* Emergency calls now show all available calls instead of a maximum of 10.
* Active dispatch calls now show all available calls instead of a maximum of 10.
* Table column selector UI has also been refreshed and condensed.
{% endtab %}

{% tab title="Fixed" %}
Unit Info - Overflow

* Fixed an issue causing unit information to overflow the display if long enough

\#26313 - Ident Update

* Fixed an issue causing the local UI to not update when switching your own identifier
{% endtab %}
{% endtabs %}

### 3.33.8 11/08/2024

{% tabs %}
{% tab title="New" %}
Live Map: Custom Roblox Maps

* Added documentation and support for custom Roblox live maps, with initial support for Maple County | Fall Update
{% endtab %}
{% endtabs %}

### 3.33.6 10/07/2024

{% tabs %}
{% tab title="New" %}
MODIFY\_IDENTIFIER API Account Param

* Added an `account` parameter to specify a user as an alternative to `apiId`

GET\_IDENTIFIERS ACCOUNT Param

* Added an `account` parameter to specify a user as an alternative to `apiId`

SET\_IDENTIFIER ACCOUNT Param

* Added an `account` parameter to specify a user as an alternative to `apiId`

UNIT\_STATUS ACCOUNT Param

* Added an `account` parameter to specify a user as an alternative to `apiId`

GET\_ACCOUNT ACCOUNT Param

* Added an `account` parameter to specify a user as an alternative to `apiId`
{% endtab %}

{% tab title="Fixed" %}
\#24607 - Remove Identifier API ID

* Removed the need to supply a valid API ID when removing an identifier via API.

\#24650 Date Input Mask

* Fixed an issue allowing users to manually enter anything into a date field instead of the formatted mask, if the user was not using the date picker.

\#24457 Leave Community on Join

* Fixed an issue causing the leave community button to display on smaller screens when searching to join a new community.

\#20555 - Dispatch Modified Webhook

* Fixed an issue causing the Discord webhook for dispatch call updates to send based on whether or not the new dispatch webhook was enabled, instead of whether or not the modified dispatch webhook was enabled.

API - ADD/Edit Record Custom Section

* Added new handling and documentation to allow for the key-value replacement system via API for non-custom sections on records like charges, record links, etc.

\#25090 - Dispatch Unit Attach API

* Fixed an issue causing the NEW\_DISPATCH endpoint to not always notify the newly attached units of the incoming call
{% endtab %}
{% endtabs %}

### 3.33.5 08/02/2024

{% tabs %}
{% tab title="New" %}
\#22809 Permission Keys - Hide Input

* The permission key input on the community menu will be hidden if the community has no keys configured to reduce user confusion.

Community Selection - UI Overhaul

* Overhauled the community selection menu, complete with the CMS discovery spotlight.

API: GET\_CHARACTERS

* Added an optional account UUID parameter to process the request via Sonoran Account ID.

API: SET\_CHARACTER

* Added an optional account UUID parameter to process the request via Sonoran Account ID.

API: LOOKUP\_VALUE

* The lookup\_int API endpoint has been renamed to lookup\_value. This endpoint now allows for a lookup via account secret ID as a string.
{% endtab %}

{% tab title="Fixed" %}
Permission Check - Refresh

* Fixed an issue causing a permission check to fail when refreshing the page, kicking the user back to the community menu
{% endtab %}
{% endtabs %}

### 3.33.3 03/13/2024

{% tabs %}
{% tab title="New" %}
Live Bodycam

* Added an in-game bodycam feed for units, visible inside the CAD via active units, dedicated window, and live map!
{% endtab %}
{% endtabs %}

### 3.33.2 01/26/2024

{% tabs %}
{% tab title="Changed" %}
Inactive Community - Pending Account Handling

* Users logging into a CAD community that are in a PENDING state (no permissions) will no longer increment the community's last login time. This resolves an issue where old communities that are no longer in use never expire if they have a popular or similar community ID.

\#19828 - Disable Autocomplete

* Autocomplete in browsers has been disabled on search boxes and custom record inputs. This improves user privacy, particularly when streaming.
{% endtab %}

{% tab title="Fixed" %}
\#19672 - Custom Lookup Types

* Fixed an issue causing standard communities to not enable a custom lookup type.
{% endtab %}
{% endtabs %}

### 3.33.1 01/02/2024

{% tabs %}
{% tab title="New" %}
In-Game Integration - UI Improvements

* Re-organized the in-game integration page into three separate tabs. Users can now click to copy their community ID and API key in lowercase.

\#19593 ERLC - Push Event IP

* Communities using the integrated ER:LC live map mode can now specify an IP and port for push events for custom third-party integrations.
{% endtab %}

{% tab title="Fixed" %}
\#19500 Charge and Bond Type

* Fixed an issue where charge types and bond types wouldn't properly save in the penal code customization tab.

Backend Performance Issues

* Updated an internal MySQL library causing unhandled exceptions and performance issues the prior night.
{% endtab %}
{% endtabs %}

### 3.33.0 12/20/2023

{% tabs %}
{% tab title="New" %}
UI Color Revamp

* An all new UI refresh has been put in place brightening up the UI for a more friendly experience. Image uploaders show a preview with an easy click-to-upload, admin customization has been moved to cards, and more!

Custom Records - Header Image

* Custom reports can now have images added to the header that will display on both PDF and on-screen UI.

Community Customization - Free

* All communities can now customize their community image, name, timezone, geographical settings, unit status codes, quick links, notification tones, custom community emails, custom page colors, and user account restrictions on the free version.

Image Uploading - Free

* All communities can now upload tones, images, and more on the free version.

Draggable Windows - Layers

* Clicking anywhere on a popout/draggable window will now bring it to the top layer, vs having to right click and select "Bring to Top".
{% endtab %}

{% tab title="Fixed" %}
\#19351 Discord Rich Presence after Downgrade

* Fixed an issue where downgrading from Pro does not set your Discord Rich Presence button #2 back to a CAD or CMS URL preventing you from updating your community customization.
{% endtab %}
{% endtabs %}

### 3.32.9 11/30/2023

{% tabs %}
{% tab title="New" %}
API: GET\_CHARACTER\_LINKS

* Added the `GET_CHARACTER_LINKS` endpoint to retrieve all linked character sync IDs from a user account.

API: LINK\_CHARACTER Endpoint

* Added the `LINK_CHARACTER` endpoint to add or remove a DB sync character to a user's account.

\#17899 PDF Dependency Hiding

* When printing a record to PDF, sections and fields hidden by dependencies will no longer display on the page.

Tone Board Customization - Icon Search

* The admin tone board icon search now utilizes a new icon search system removing the need to use an external link.
{% endtab %}

{% tab title="Changed" %}
Calls Table - Query Optimization

* Optimized database queries for emergency calls and dispatches to improve loading times.

Record Search - Query Optimization

* Optimized database queries for records to improve loading times.
{% endtab %}

{% tab title="Fixed" %}
\#18514 - Window Lock Removal

* Fixed an issue causing previously locked and removed/closed windows to re-appear on refresh.

\#18735 - Old Links

* Updated old links redirecting users to the wrong pricing page.
{% endtab %}
{% endtabs %}

### 3.32.8 10/12/2023

{% tabs %}
{% tab title="Fixed" %}
DB Sync - Custom Lookup on License

* Fixed an issue causing custom search types to fail on DB sync license records.

\#17855 - Self Dispatch Restore

* Fixed an issue where a user in self-dispatch mode would be stuck in self dispatch mode forever if permissions were removed.

\#17218 - Map Postal Search

* Fixed an issue where postal search would not work in the pop-out desktop version of the live map.
{% endtab %}
{% endtabs %}

### 3.32.7 08/08/2023

{% tabs %}
{% tab title="Fixed" %}
\#15065 Record Dependencies

* Added a more visible ADD button for setting field dependencies to resolve issues with users unable to use dependencies.

\#16407 - Linked Civilians

* Fixed an issue causing linked civilians in dispatch call notes to not open properly.

Lookup Preview - Unneeded Icon

* Removed an unneeded copy style button from the warrants tab in the lookup search previews.
{% endtab %}
{% endtabs %}

### 3.32.6 05/09/2023

{% tabs %}
{% tab title="New" %}
\#14828 Unit Group Name Change

* Added an EVENT\_UNIT\_GROUP\_CHANGE\_NAME push event when unit group names are updated.
{% endtab %}

{% tab title="Fixed" %}
\#14702 - EDIT Record/Character User Field

* Fixed an issue causing the EDIT\_RECORD and EDIT\_CHARACTER endpoint's "user" property from properly updating the record owner.

Login - SSO Username Conflict

* Added additional handling to automatically remedy an edge case where conflicting and outdated usernames would cause account issues on login.

\#14565 - ERLC LiveMap Pop Out

* Fixed an issue causing the ERLC live map to not properly display in a desktop popout window.
{% endtab %}
{% endtabs %}

### 3.32.5 03/20/2023

{% tabs %}
{% tab title="New" %}
Custom Records - Read-only time field - Auto set

* Time fields will now auto populate based on the community time zone when set to read only for new records.

Push Event - Character Selected

* Added a push event for when a user selects a different civilian in the portal.
{% endtab %}

{% tab title="Changed" %}
API EDIT\_RECORD - DB Merge Handling

* Added a `templateId` field on the EDIT\_RECORD/EDIT\_CHARACTER endpoint to specify the type of record being edited. This allows the API to dynamically determine if the record being edited is a DB sync based record, and create a DB merge record for it.
{% endtab %}

{% tab title="Fixed" %}
\#13575 - Civilian Unique Fields

* Fixed an issue with civilian unique fields not working properly.

\#12458 Admin Kick

* Fixed an issue where kicking a user in the admin panel didn't update the UI until a refresh was done.
{% endtab %}
{% endtabs %}

### 3.32.3 02/16/2023

{% tabs %}
{% tab title="New" %}
Call Notes - Local Timezone

* Call notes with the new overhaul now convert to local community timezone format.
{% endtab %}

{% tab title="Changed" %}
S3 Optimization

* Improved S3 storage with community removals.

ERLC Live Map - Single Image

* Consolidated the ERLC live map to a single common image, hosted and updated via ERLC.
{% endtab %}

{% tab title="Fixed" %}
\#12424 Multi-Server Group Dispatches

* Fixed an issue where dispatching with multiple servers and the same group name would cause groups in both servers to be attached and detached from calls.

Record Tab Name Conflicts

* Fixed an issue where different record templates with the same name would conflict in lookup and report center categorization tabs.
{% endtab %}
{% endtabs %}

### 3.32.2 01/11/2023

{% tabs %}
{% tab title="New" %}
API: SET\_API\_ID Account

* Added an `account` GUID field as another option to set a user's API IDs remotely.

API: JOIN\_COMMUNITY

* Added an internal endpoint for the CMS to automatically add users to your CAD when they are accepted in the CMS.

API: LEAVE\_COMMUNITY

* Added an internal endpoint for the CMS to automatically remove users from your CAD when they are removed or de-ranked in the CMS.
{% endtab %}

{% tab title="Fixed" %}
Record Tab Name Conflicts

* Fixed an issue where different record templates with the same name would conflict in lookup and report center categorization tabs.

\#12424 Multi-Server Group Dispatches

* Fixed an issue where dispatching with multiple servers and the same group name would cause groups in both servers to be attached and detached from calls.
{% endtab %}
{% endtabs %}

### 3.32.1 01/04/2023

{% tabs %}
{% tab title="Fixed" %}
Custom Character Records - Unique Fields

* Fixed an issue where unique fields on custom character records would throw an error stating that the unique value was taken by record number -1.

\#12056 Call Notes PDF

* Fixed an issue where dispatch call notes printed to PDF would not be formatted correctly.
{% endtab %}
{% endtabs %}

### 3.32.0 12/19/2022

{% tabs %}
{% tab title="New" %}
Tone Board - Repeat

* Dispatchers can now set a tone to automatically repeat every X seconds for X number of times.

\#9013 Link Records to Dispatch Call

* Call notes have been overhauled and can now have linked records and dispatch calls pasted into them.

Dispatch Call Preview - Copy Link

* Added a copy link button in the dispatch call preview window
{% endtab %}

{% tab title="Fixed" %}
Lookup Record by ID - Set Record Number

* Fixed an issue where opening a record via specific ID would not have the ID field set properly in the record popup.

Create Template - Plate Type Checks

* Fixed an issue with the custom record template editor not properly ensuring a `plate` field mapping ID existed on the vehicle registration type.

Emergency Call - Dispatch Address Autofill

* Fixed an issue where the address field would not auto populate when opening an emergency call in the dispatch call editor.
{% endtab %}
{% endtabs %}

### 3.31.0 11/21/2022

{% tabs %}
{% tab title="New" %}
\#8844 Live Map External Desktop Window

* Windows desktop users can now open the interactive live map in a fully external window.
{% endtab %}

{% tab title="Fixed" %}
Live Map CAD Based Update - Coordinate Removal

* Fixed an issue where updating a smart sign via CAD would cause it to disappear from the live map.

Switch Communities - Bug

* Fixed an issue preventing users from "switching communities" on a custom domain or with a community set as default on the login page.

Discover Button - Custom Domain Fix

* Fixed an issue with detecting custom and non-custom domains, preventing the "Discover" CMS button from appearing on non-custom domains.
{% endtab %}
{% endtabs %}

### 3.30.1 11/08/2022

{% tabs %}
{% tab title="New" %}
CMS Discovery Links

* The CAD now links to the CMS discovery page on all non-custom domains.

Civilian DMV Error

* Added a more descriptive error to the DMV dropdown if DB sync is enabled and there are no other custom types available.
{% endtab %}
{% endtabs %}

### 3.30.0 10/04/2022

{% tabs %}
{% tab title="New" %}
Admin Identifier Search - via Unit Number

* Admins can now search for unit identifiers via unit number.

\#10700 Call Notes Time Zone

* Call notes now display with the local community time zone.
{% endtab %}

{% tab title="Changed" %}
Lookup via Identifier - Optimization

* Updated the way lookups via identifier are ran, now following the explicit department structure defined by admins.

Record Template Optimization

* Moved community record templates to a new database column and separate WS/API methods to send them to the client. This dramatically reduces the size of the community login method, community search, etc. by minimizing the data size.
{% endtab %}

{% tab title="Fixed" %}
\#10859 Call Note Duplication

* Fixed an issue causing dispatch call notes to duplicate after manually running a call update.

Custom Lookup Types - Client Save

* Fixed an issue causing custom lookup types to not save on the client's admin panel without a refresh.

Dispatch Close - Console Error

* Fixed an issue causing dispatch close events from throwing a client error in the console.
{% endtab %}
{% endtabs %}

### 3.29.6 09/20/2022

{% tabs %}
{% tab title="New" %}
\#10281 QB Core Multi-House DB Sync Mapping

* Multi-match for a single field now works for database sync, allowing multiple properties to be displayed specifically for QB Core.
{% endtab %}

{% tab title="Fixed" %}
DB Sync Search Char by Custom Value

* Fixed an issue causing the db sync search by custom value to not properly link all the character information.

\#10725 Civilian Checkbox Fields

* Fixed an issue causing non-db sync creation to not properly copy over checkbox values from a civilian to a new DMV record.
{% endtab %}
{% endtabs %}

### 3.29.5 08/15/2022

{% tabs %}
{% tab title="New" %}
Sonoran CMS - Permissions Sync

* Sonoran CMS can now automatically manage Sonoran CAD user permissions

API ban\_user - accId

* Added an `accId` option to the endpoint.

API set\_account\_permissions - accId

* Added an `accId` option to the endpoint.
{% endtab %}

{% tab title="Fixed" %}
API - Remove 911 UI Call\
\- Fixed an issue with 911 calls being removed via API not updating in the UI until a refresh.
{% endtab %}
{% endtabs %}

### 3.29.4 07/21/2022

{% tabs %}
{% tab title="New" %}
Account Removal - In App

* Added a button to request account removal from within the app, removing the need to use the external accounts website.
{% endtab %}

{% tab title="Fixed" %}
DBSync - Character Pull

* Fixed an issue with loading database sync characters.

Root Domain - Community Query String

* Fixed an issue with the ?comid query string not persisting to the /login page on redirect.

Dispatch From Emergency - Remove Call

* Fixed an issue where creating a dispatch from an emergency call would not remove the emergency call.
{% endtab %}
{% endtabs %}

### 3.29.3 07/12/2022

{% tabs %}
{% tab title="Fixed" %}
Join Community Safety

* Added additional safeties on community join to handle errors and duplication.

Custom Domain DNS

* Fixed an issue with custom domain DNS checks failing.

Tablet Live Map

* Fixed an issue with the live map on tablet devices not having proper default height
{% endtab %}
{% endtabs %}

### 3.29.0 06/01/2022

{% tabs %}
{% tab title="New" %}
Discord SSO

* Added a sign in with Discord option.

Apple SSO

* Added a sign in with Apple option.
{% endtab %}

{% tab title="Fixed" %}
NEW\_RECORD: User Link

* Fixed an issue with the API new\_record endpoint not properly linking the record's owner via API ID.

REMOVE\_BLIP: Map Update

* Fixed an issue where removing an array custom map blips wouldn't remove them from the user's UI without a refresh.

\#9023 Custom Lookup Masks

* Fixed an issue where running a lookup for a custom search type doesn't work if the lookup mask is not clear of formatting

\#9112 Partial Identifier Username Search

* Partial search strings do not work for searching Unit Identifiers in the Admin Panel.
{% endtab %}
{% endtabs %}

### 3.28.2 05/13/2022

{% tabs %}
{% tab title="New" %}
Admin - Identifier Management

* Admins can now view and manage all unit identifiers in the admin accounts menu.
{% endtab %}

{% tab title="Fixed" %}
\#8934 New Dispatch Status Notes

* Fixed an issue causing new dispatch calls to not automatically add notes when a unit changed their status, before the call was "updated" manually.

DB Sync Records - Disable Get Owner

* Fixed an issue causing the admin get owner button on record searches from displaying on database sync records.
{% endtab %}
{% endtabs %}

### 3.28.1 05/11/2022

{% tabs %}
{% tab title="New" %}
Layout - Header/Footer

* Updated the standard layout for consistency with other products.

\#8909 Set Status - Call Note

* The set\_status API endpoint now supports status change notes on dispatch calls, allowing for the in-game /setstatus command to also add a call note.
{% endtab %}

{% tab title="Fixed" %}
\#8893 Dispatch Call Notes

* Fixed an issue where a dispatcher adding call notes and clearing the editor wouldn't show the notes when re-opening the call until a refresh was made.

ID Field - Disable Unique Toggle

* Added a check to prevent the user from toggling the unique field on custom record ID fields.
{% endtab %}
{% endtabs %}

### 3.28.0 05/04/2022

{% tabs %}
{% tab title="New" %}
Preview Field Update - Re-index

* When a record template is updated to add or remove preview fields you can now re-index and update all previously formed records to match.

\#8718 Custom Record Dependency - Equal, Not Equal, Contains

* Custom record dependencies can now be set to equal, not equal, or contains.

Record Webhooks - Dependencies

* Added dependency checking to discord webhooks to not display "hidden" fields or sections.

Live Map - Range Circle

* Custom live map blips can now have a radius field specified. When set, this will show a transparent circle to reflect range.

911 and Dispatch Calls - Last Updated Timestamp

* Emergency and dispatch calls now contain an `updated` timestamp field in UTC. This allows a framework plugin or API method to be used to automatically close any inactive calls after a certain time.
{% endtab %}

{% tab title="Changed" %}
Server ID - Safety Checks

* Added safety checks to ensure all server IDs are 1 based via index and disabled the ID field in the UI.
{% endtab %}

{% tab title="Fixed" %}
Self-Dispatch: Close Call

* Fixed an issue where users in self-dispatch couldn't close a dispatch call from the editor.

\#8682 Supervisor Checkbox

* Fixed an issue with supervisor toggled checkboxes (legacy) from not being removed from the supervisor panel.
{% endtab %}
{% endtabs %}

### 3.27.0 04/12/2022

{% tabs %}
{% tab title="New" %}
\#8372 Multi-Select Emergency & Dispatch Calls

* Dispatchers can now multi-select emergency and dispatch calls to delete multiple at a time.

\#8453 Preview Duplicates

* Previewing custom records with duplicated section preview fields will display an icon. Hovering over the icon will display a tooltip with all duplicate value entries.

API: Lookup By Int - Direct Number Handling

* When looking up a specific record number via the API (Discord bot webhook reactions for new records) the UI will open the full record directly, instead of opening a search tab with the ID inserted.
{% endtab %}

{% tab title="Changed" %}
EVENT\_REMOVE\_911 - ID Array

* The EVENT\_REMOVE\_911 push event has changed the `callId` property to a `callIds` array.

EVENT\_DISPATCH\_CLOSED - ID Array

* The EVENT\_DISPATCH\_CLOSED push event has changed the `callId` property to a `callIds` array.

API: remove\_blip array IDs

* The remove\_blip API method has changed the `id` property to an `ids` array.
{% endtab %}

{% tab title="Fixed" %}
DB Merge - Select

* Fixed an issue causing db merge to not properly set the `value` on select type fields.

\#8338 Custom Records - Supervisor Checkbox

* Removed the supervisor only attribute from the custom record checkbox section, resolving an issue where reports with supervisor checkboxes would always show as awaiting supervisor.

\#8457 Custom Record Required Dependencies

* Fixed an issue where custom record required fields that were hidden via dependency would prevent the user from submitting the record.
{% endtab %}
{% endtabs %}

### 3.26.1 04/01/2022

{% tabs %}
{% tab title="New" %}
Custom Blips - Display JSON

* Custom blips can now have text data displayed upon selection.

Custom Blips - subType

* Added a `subType` property to custom blips, allowing users to toggle visibility on/off for different custom blip types.
{% endtab %}

{% tab title="Fixed" %}
\#8257 Tone Board Shortcut

* Fixed an issue where opening the tone board from a shortcut, like the active units, failed.
{% endtab %}
{% endtabs %}

### 3.26.0 03/21/2022

{% tabs %}
{% tab title="New" %}
Live Map - Custom Blips

* Custom blips can now be added, edited, and removed in real-time via API endpoints.

API: SEND\_PHOTO

* Photos can now be sent from in-game to the user as a pop-up via API. Allowing for easy image attachments for custom records.

\#8028 API lookup\_int Limit

* The lookup\_int endpoint now supports pagination with limits and offsets.
{% endtab %}

{% tab title="Changed" %}
Admin Accounts: Pagination

* The admin page's account table now uses server-sided pagination for a more optimized experience.
{% endtab %}

{% tab title="Fixed" %}
\#8051 Edit Record Webhook

* Fixed an issue where sending a webhook for editing a record was based on the add toggle and not the edit one.
{% endtab %}
{% endtabs %}

### 3.25.7 03/15/2022

{% tabs %}
{% tab title="New" %}
Database Merge - Flag Section Handling

* Database merge now supports saving custom flag sections on database sync records.

Database Merge - Checkbox Handling

* Database merge now supports select and checkbox fields for custom records with database sync.

Database Sync - Checkbox Handling via Friendly Mapping

* Custom record checkboxes can now have their values set via DB Sync and friendly mapping.
{% endtab %}

{% tab title="Changed" %}
Admin Accounts: Pagination

* The admin page's account table now uses server-sided pagination for a more optimized experience.
{% endtab %}

{% tab title="Fixed" %}
\#8051 Edit Record Webhook

* Fixed an issue where sending a webhook for editing a record was based on the add toggle and not the edit one.
{% endtab %}
{% endtabs %}

### 3.25.6 03/14/2022

{% tabs %}
{% tab title="New" %}
\#7977 Link Dispatch Call

* Dispatch calls can now be linked in custom records for quick reference.
{% endtab %}

{% tab title="Changed" %}
ERLC Map Update

* Updated the ERLC live map image.
{% endtab %}

{% tab title="Fixed" %}
Linked Records - Remove

* Fixed an issue where clicking the delete button on a linked record still opened the record preview after removing it.

\#7978 Field Dependency

* Fixed an issue causing field dependencies to not function properly.

\#7981 Field Add Exception

* Fixed an issue generating a console error when adding a new field to a custom record.

Admin Customization - Sonoran One

* Fixed an issue where Sonoran One members couldn't access the proper tone board and custom search customization options.

Custom Record Dependency - Select

* Fixed an issue causing custom record dependencies on a select field to throw an exception.
{% endtab %}
{% endtabs %}

### 3.25.3 03/11/2022

{% tabs %}
{% tab title="New" %}
\#7314 Custom Records - Dependencies

* Custom record sections and fields can now have their visibility toggled via custom dependencies from other record fields.

Custom Records - Copy/Paste Sections

* The custom record editor now allows you to copy/paste record sections.

\#7920 Record Logs

* Modified the custom record add and edit logs to include more details on the record type and ID.

Inactivity - Email Notice

* Automated emails are sent to community owners if no logins have been made in 3 weeks, giving them 7 days notice prior to community deletion.

DB Sync - Safety Checks

* Added safety checks and errors for database sync configurations that have license or vehicle mapping enabled, but no table name or character mapping column set.

Custom Records - Required Type Duplicate Check

* Added additional safety checks to ensure a community does not have duplicate required custom record types and the ability to remove duplicated required types.
{% endtab %}

{% tab title="Fixed" %}
DMV New Record - Disable with Sync

* Fixed an issue allowing new licenses or vehicle registrations to be created in the DMV panel even if DB Sync is enabled.

API SET\_SERVERS - Deploy Map

* Fixed an issue with the SET\_SERVERS endpoint not properly deploying the new live map.
{% endtab %}
{% endtabs %}

### 3.25.2 03/04/2022

{% tabs %}
{% tab title="New" %}
\#7615 Custom Records - Unit Location Field

* The UNIT\_LOCATION custom field type can be used to autofill the unit location on a new record.

API: GET\_IDENTIFIERS

* The new GET\_IDENTIFIERS endpoint allows you to retrieve all unit identifiers for a user and view the currently selected one.

\#7066 API: SET\_IDENTIFIER

* Added an endpoint to change the selected unit identifier via API.

\#7511 Modify Identifier

* Unit identifiers can now be added, edited, and removed via API.
{% endtab %}

{% tab title="Changed" %}
Custom Records - Show Field UIDs

* The custom record editor now shows the field mapping ID column (UID) for all record types.
{% endtab %}
{% endtabs %}

### 3.25.0 02/17/2022

{% tabs %}
{% tab title="New" %}
Live Map - Optimization

* Optimized the live map to increase performance with larger communities.

Live Map - Search for Postal

* Pro communities can now search and zoom to a postal on the live map with the postals plugin configured.

Live Map - Selected Unit Filter

* Units displayed on the live map can now be filtered by selecting units/groups in the active units panel.

\#6998 Blip Customization

* Live map unit blips can now have the unit number display toggled on/off. Unit blips can be filtered down to unit type. Additionally, unit blips have customizable outline colors.

\#7414 Wyze LED Strips

* Expansion of supported light integrations. For example, Wyze has multiple other smart bulbs, such as LED light strips, which could be really cool to have like under a table, behind a desk, or on the walls. Would also allow for more customization.

EVENT\_TONE Push Event

* Added a push event for when tones are played.

Unit Login - Clear Position

* Unit positions are cleared on an initial login until their position is updated in-game. Preventing units who are no longer in-game from displaying on the map.
{% endtab %}

{% tab title="Fixed" %}
\#7092 Live Map Duplication

* Fixed an issue causing the live map image to duplicate after closing and re-opening.

Desktop - Prevent Zoom Out

* Prevented users from ctrl - zooming out in the desktop app.

\#7455 Maintain Full Screen after Toggle Key

* When showing (w/ global hotkeys) a Sonoran CAD Desktop window that was fullscreen when it was hidden (w/ global hotkeys), it'll show back up no longer full screen in a smaller window.

DBSync Save - Handle null columns on trim

* Added safety checks if the user enabled license or vehicle mapping but had a null owner or table name set.
{% endtab %}
{% endtabs %}

### 3.24.0 01/16/2022

{% tabs %}
{% tab title="New" %}
GTA Live Map - Overhaul

* An entirely new live map system allows you to edit and view units, emergency calls, smart signs, and more!

Live Map - Permissions

* Access to the live map is now restricted via user permission.
{% endtab %}

{% tab title="Fixed" %}
Window - Draggable Area

* Fixed an issue causing draggable windows to be draggable from anywhere, preventing users from scrolling or grabbing inside the window.

Custom Layout - Drag-and-Drop

* Fixed an issue causing users with custom layouts to not be able to drag-and-drop elements from one window to another.

\#6859 Window Options

* Fixed an issue causing windows to not force display the close and minimize options.

\#6871 Window Scrolling

* Fixed an issue causing custom windows to have disabled vertical scrolling.
{% endtab %}
{% endtabs %}

### 3.23.1 01/09/2022

{% tabs %}
{% tab title="New" %}
ER:LC - Live Map

* Added an interactive live map for ER:LC Roblox communities

Portuguese Translation

* Added Portuguese translations
{% endtab %}
{% endtabs %}

### 3.23.0 01/06/2022

{% tabs %}
{% tab title="New" %}
Command Line

* Dispatchers can now utilize a CLI to quickly create and close dispatches, attach, detach, view, clear, change statuses, add notes, and more all via keyboard

\#6638 Custom Records - Drag Support

* Custom record sections and fields can now be dragged-and-dropped to be re-ordered

Lighting Integration - Draggable Frames

* Lighting sequence frames can now be dragged-and-dropped for easy re-ordering

Desktop App - Code Signing Certificate

* Added a code signing certificate to the desktop application to help with Windows Defender and general trust

Dispatch Push Event - Include Action Creator Identifer

* Include the identifier of the dispatcher that’s added/modified calls to the push events

Stripe Pending Cancellation - Status

* Added a feature to highlight subscriptions pending cancellation instead of still listing them as active or cancelled

Record Center - Lookup Filter Icon/Number

* Updated the record filter icon to match the lookup window, including displaying the number of record type filters

Custom Record Add - Prevent Duplicate Required Type

* Added safety checks to prevent a user from manually uploading a duplicate required record type, preventing them from removing it

Custom Domain - DNS Check

* Added DNS verification with a TXT record community ID check
{% endtab %}

{% tab title="Fixed" %}
\#6698 BOLO Removal

* Fixed an issue causing bolo removals to locally remove a second one from the UI

\#6694 Close Dispatch without Idents

* Fixed an issue with dispatch auto-status causing an error when closing a dispatch without any attached units
{% endtab %}
{% endtabs %}

### 3.22.6 12/21/2021

{% tabs %}
{% tab title="New" %}
Dispatch - Auto Status Toggles for Attach/Detatch/Close

* Dispatchers can now configure automatic status changes for units when they're attached, detached, or have their dispatch call closed

Record Filter - Icon w/Number

* Updated the lookup's record type filter bar with a better icon, lighter background, and selected count number for better awareness
{% endtab %}

{% tab title="Fixed" %}
API Record Remove - Webhook

* Fixed an issue causing record removal via API to not send a webhook event

API: remove\_record isReport property

* Removed an unused isReport field from the remove record API endpoint
{% endtab %}
{% endtabs %}

### 3.22.4 12/18/2021

{% tabs %}
{% tab title="New" %}
Records API - Simplified Dictionary

* Creating and editing records can now be easily done through the API with a simplified key/value dictionary

Records API - API ID Support Addition

* Record adding and removal via API now also accepts API IDs in addition to the existing user UUID field

Record API - Webhook Support

* Added webhook support for all custom record API endpoints
{% endtab %}

{% tab title="Fixed" %}
\#6255 Notepad Label

* The notepad shows police.header.notepad and when you click on it it does not bring up the notepad. This is both on the desktop app and the website

Wyze Color - API Updates

* Updated the lighting integration to handle Wyze's new payload encryption + encoding
{% endtab %}
{% endtabs %}

### 3.22.0 12/1/2021

{% tabs %}
{% tab title="New" %}
Custom Records - Identifier Fields

* Custom fields can now be added to records to auto-fill unit information for new records

Custom Records - Read Only Toggle

* Custom records can now have auto-filled fields marked as "read only" to prevent users from modifying the values

Notepad

* Added a notepad for quick multi-notes

\#5683 Search Via Department/Agency

* Added the option to search for record by agency, department, or subdivision instead of just a specific identifier. Improved the agency, department, and subdivision drop downs to only display departments that existed in the admin menu. Improved the identifier drop down to auto-filter while typing.

Unit Group - Individual Options Once Expanded

* Added individual unit context menu options when a unit group is expanded

Unit Group - Flash if one is Panicked

* Unit groups will now panic flash if it contains a unit in a panic state. The group can be expanded to view the individual unit in panic

API: GET\_ACTIVE\_UNITS - offline and pagination

* Added support to the GET\_ACTIVE\_UNITS endpoint to include offline unit identifiers. Added proper pagination support up to 100 identifiers per page

New Subscription: Set ID Before Checkout

* When purchasing a subscription, users are asked to set the community ID before purchase to help reduce the number of subscriptions without an ID set after purchase

API Lookup - Identifier Info

* The API lookup endpoint now contains optional properties to search based on an identifier agency, department, or subdivision
{% endtab %}

{% tab title="Fixed" %}
Timer Group Attachment

* Fixed an issue preventing unit groups from being attached to the first timer in an existing list from the group context menu
{% endtab %}
{% endtabs %}

### 3.21.9 11/21/2021

{% tabs %}
{% tab title="New" %}
Unit Info - Include Page

* The unit info object now contains a `page` property reflecting what emergency page the unit is logged into, viewable via API.
{% endtab %}

{% tab title="Fixed" %}
Add Record Push Event - ID

* Fixed an issue where the add record push event didn't have the new record ID set on it

Tablet Record Windows - Resize

* Fixed an issue causing the record windows on the in-game tablet to not save resize preferences

Pagination - Block All Selection

* Fixed an issue with the BOLO and call history tabs where changing the "record per page" to all broke functionality
{% endtab %}
{% endtabs %}

### 3.21.8 11/11/2021

{% tabs %}
{% tab title="New" %}
Unit Groups - Dropdown Expanded View

* Unit groups can now have the units section expanded to view the details of the group
{% endtab %}

{% tab title="Changed" %}
Desktop Download - Round Percentage

* The desktop auto-updater now rounds download progress to one decimal

Bodycam - Anti-Tamper

* Changed the way the bodycam webpage is served, preventing users from tampering with the branding
{% endtab %}

{% tab title="Fixed" %}
Tone Board - UI Limits

* Fixed an issue causing the UI to limit the custom tone board by one more than it should

\#5915 Dispatch Call Notes PDF

* Fixed a formatting issue with dispatch call notes in PDF
{% endtab %}
{% endtabs %}

### 3.21.4 11/05/2021

{% tabs %}
{% tab title="New" %}
Closed Calls - Pagination

* Closed dispatch calls now support full server side pagination to view the entire history

GET\_CALLS API - Pagination

* The GET\_CALLS API endpoint now supports pagination for closed dispatch calls

Emergency Call MetaData - Postal, Block, etc.

* The call\_911 endpoint now has additional metadata support to specify the call postal, block, etc

Active Bolos/Warrants - Pagination

* Added proper server sided pagination for active warrants and bolos. Resolves issues and improves performance for communities with several hundred or more active records at a time
{% endtab %}

{% tab title="Changed" %}
GET\_SERVERS - Standard

* Updated the GET\_SERVERS endpoint to only require the standard version

Translation Updates

* Updated submitted translation files
{% endtab %}

{% tab title="Fixed" %}
\#5831 & 5835 - Dispatch Identifier Change

* Fixed an issue where updating your identifier on the dispatch page doesn't update it for other units, along with displaying the proper dispatch icon after

DB Sync - Structure Save Null Checks

* Added null checks when trimming db sync fields preventing an object reference error

\#5757 - Webhook Tutorial Link

* Fixed a tutorial button for Discord webhooks going to an invalid page

Drag-and-drop Custom Layout

* Fixed an issue preventing drag-and-drop from working on custom layouts
{% endtab %}
{% endtabs %}

### 3.21.3 10/19/2021

{% tabs %}
{% tab title="New" %}
Desktop Update Search - Show Downloading

* The desktop splash screen now includes live details on update searches and download progress
{% endtab %}

{% tab title="Changed" %}
CHANGED: Websocket Connection Endpoint

* Updated the backend websocket connection to resolve disconnection issues
{% endtab %}

{% tab title="Fixed" %}
Govee - Lighting Fixes

* Fixed issues with the Govee lighting integration where the Bluetooth server couldn't be unpacked and WiFi based lights wouldn't load
{% endtab %}
{% endtabs %}

### 3.21.0 10/12/2021

{% tabs %}
{% tab title="New" %}
Dispatch Timers

\- Dispatchers can create customizable timers and attach units, groups, and dispatch calls for periodic notifications

Smart Lights - Unit Status

\- Smart lighting scenes are now available for your unit status

Govee - Lighting Integration

\- Govee smart bulbs are now supported with our lighting integration via Bluetooth and WiFi

Norwegian Translations

\- Added Norwegian translations

Server Config - Trim IP/Port

\- Added additional safety checks on the backend to trim any spaces in server IPs or ports

UNIT\_PANIC Push - Panic Bool

\- The EVENT\_UNIT\_PANIC push event now includes an `isPanic` bool
{% endtab %}

{% tab title="Changed" %}
Unit - Group Menu Consolidation

\- The unit group section on the unit context menu is broken into a separate menu
{% endtab %}
{% endtabs %}

### 3.20.11 10/1/2021

{% tabs %}
{% tab title="New" %}
Friendly Mapping: Import JSON/CSV\
\- Database sync friendly mapping values can now be imported via JSON or CSV

Wyze Color - Black\
\- The Wyze Color bulbs are now checked for a black hex color, and are turned off rather than set to black

Philips Hue - Black\
\- Philips Hue bulbs are now checked for the black RGB code and are toggled off, as Hue does not support a black color code
{% endtab %}

{% tab title="Fixed" %}
DB Sync - Merge in Multi-Table Values\
\- Fixed an issue with DB Sync causing multiple table values for character records to only merge in the first found value in a section and disregard the last

DB Sync - Update Custom Record\
\- Fixed an issue where saving custom records with DBSync would leave some of the old, non-custom fields in the sync config

Smart Lighting Restore\
\- Fixed an issue causing the restore lighting scene to not start until the second trigger

DB Sync - Reserved Word Column Names\
\- Added special handling for selecting reserved MySQL words as column names
{% endtab %}
{% endtabs %}

### 3.20.8 9/28/2021

{% tabs %}
{% tab title="New" %}
Philips Hue - Lighting Integration\
\- Philips hue color bulbs can now be used with the smart lighting integration

Wyze Color - Lighting Integration\
\- Wyze color bulbs can now be used with the smart lighting integration

Import Penal Codes - Int Parse\
\- Added additional handling and safety checks to ensure the bondAmount column for imported penal codes is forced to an integer
{% endtab %}

{% tab title="Fixed" %}
SetServer API\
\- Fixed an issue with the set server endpoint not setting the map URL in the livemap config
{% endtab %}
{% endtabs %}

### 3.20.7 9/14/2021

{% tabs %}
{% tab title="New" %}
TTS - Numbers\
\- Text to speech now separates all numbers. Ex: "Incoming nine hundred and eleven" -> "Incoming nine one one"
{% endtab %}

{% tab title="Fixed" %}
Bodycam - Null Fields\
\- Fixed an issue where bodycam fields set to null would display the {field} key instead of being blank

Modify Unit - Local Update\
\- Fixed an issue where updating your unit identifier wouldn't locally update your information until a refresh
{% endtab %}
{% endtabs %}

### 3.20.6 9/13/2021

{% tabs %}
{% tab title="New" %}
Desktop App - Save Last Size\
\- The desktop app now re-opens with the size it was last set to\
\
Multi-Group Set Status\
\- Dispatchers can now change the status on multiple unit groups at a time
{% endtab %}

{% tab title="Changed" %}
Self-Dispatch - Toggle Improvements\
\- Optimized the toggle process when switching self-dispatch on and off. Additionally, fixed an issue causing the new dispatch TTS to run a second time when you toggled self-dispatch on or off
{% endtab %}

{% tab title="Fixed" %}
Smart Signs - Top Alignment\
\- Fixed an issue causing the smart signs UI to display a sign box on the top row next to the search bar
{% endtab %}
{% endtabs %}

### 3.20.5 9/9/2021

{% tabs %}
{% tab title="New" %}
CAD - Toggle View for In-Game Use\
\- Users can now bind a hotkey to display and hide the CAD on top of the game for a better and more native experience than the Steam Browser. Minimizing with the hotkey will also auto-refocus the game layer below
{% endtab %}

{% tab title="Fixed" %}
Duplicate Sections - Bug\
\- Fixed an issue preventing duplicated sections from being removed once a record was filed

Record Preview - Duplicated Sections\
\- Fixed an issue causing records with duplicated sections to overwrite preview fields further down in the lookup preview
{% endtab %}
{% endtabs %}

### 3.20.2 9/8/2021

{% tabs %}
{% tab title="New" %}
Unit - Drag to Tone Tab\
\- Units can now be dragged to a minimized tone tab to automatically open and attach the unit to the tone

Unit & Call - Drag to Tone Board\
\- Units, groups, and dispatch calls can be dragged-and-dropped to the tone board to automatically add them to the "Send To" box

Unit & Call - Drag to Lookup Tab\
\- Active units and unit groups can be dragged to a pinned lookup tab to automatically open a lookup with those unit(s) selected for result transmission
{% endtab %}

{% tab title="Changed" %}
Dispatch Saved Types - Capitalization\
\- Capitalized all options in the dispatch's saved types dropdown to match consistent formatting
{% endtab %}

{% tab title="Fixed" %}
Multi-Unit: Tone Board\
\- Fixed an issue preventing users from attaching multiple units at a time to the tone board via the active units context menu
{% endtab %}
{% endtabs %}

### 3.20.1 9/7/2021

{% tabs %}
{% tab title="New" %}
Self-Dispatch - Save State\
\- Unit's self-dispatch mode will now save and persist through a refresh/restart

Settings - Sound Volume Save\
\- System volume now saves and persists
{% endtab %}

{% tab title="Changed" %}
FR Translations - Update\
\- Updated French translations
{% endtab %}

{% tab title="Fixed" %}
Tablet - Window Sizes and Dragging\
\- Fixed an issue causing the in-game tablet to lock and misplace windows on re-join, requiring a layout reset to resolve. This had to do with a screen size detection plugin malfunctioning

Unit Groups - Creation\
\- Fixed an issue preventing unit groups from being created via right-click

Multi-Unit - Drag to Lookup\
\- Fixed an issue preventing users from dragging multiple selected units or groups to a lookup window to send them the search results
{% endtab %}
{% endtabs %}

### 3.20.0 9/6/2021

{% tabs %}
{% tab title="New" %}
Active Units - Multi-Select\
\- Active units and unit groups can now be multi-selected for faster management. Multi-select also allows you to drag and drop multiple units or groups at once

DBSync - External Keys\
\- DB Sync now supports mapping a unique license or vehicle registration ID to an external table containing the proper character ID

API: Add Call Note\
\- Added a new API endpoint to add call notes

API: Detach Unit\
\- Added a new API endpoint to detach units from dispatch calls

Push Event: Unit Panic\
\- Added a server push event for unit panic events

Bodycam: Auto-correct Toggles\
\- Improved the bodycam data fields to auto-toggle on if listed but not enabled
{% endtab %}

{% tab title="Changed" %}
Call Note: UTC Timestamp\
\- All dispatch call notes now have timestamps appended to them in UTC

API Kick/Ban - Add username to log\
\- Improved the kick/ban log to include the username when performed via API
{% endtab %}

{% tab title="Fixed" %}
DB Sync - Multi-Table Search by Val\
\- Fixed an issue causing custom lookups with DB sync failing when used with a multi-table civilian config

DB Sync - MySQL v8 Syntax\
\- Fixed an issue causing DB Sync to fail on MySQL v8+ due to a syntax change

Bodycam: Timestamp\
\- Fixed an issue causing the bodycam timestamp to glitch on restart
{% endtab %}
{% endtabs %}

### 3.19.0 9/1/2021

{% tabs %}
{% tab title="New" %}
Community Logs\
\- Communities can now search an in-depth logging history for abuse and other user actions.
{% endtab %}

{% tab title="Fixed" %}
Overlay: Unit Agency\
\- Fixed an issue causing the unit agency to not properly display

Overlay: Department Label\
\- Fixed the department unit update label from being plural.

\#4999 Sonoran CAD Bug Report\
\- Discord webhooks for removed records still get sent even when the sliders are only set to new records only
{% endtab %}
{% endtabs %}

### 3.18.1 8/22/2021

{% tabs %}
{% tab title="New" %}
Stream Overlay: Bodycam\
\- The stream overlay now allows users to easily self-host a customized bodycam webpage to be visible on their livestream.

Unit Group - Drag-and-Drop Unit Changes\
\- Units in a group can now be dragged-and-dropped to another group.

Unit Group - Edit Name\
Dispatchers can easily update a unit group's name by clicking on the group name in the active units panel.
{% endtab %}

{% tab title="Fixed" %}
Pined Tabs - Open Event\
\- Fixed an issue where navigating back to the community menu, then back to an emergency page would cause the pinned tab open event to not properly register.

Permission Key: Modify Street Signs\
\- Fixed an issue causing the modify street signs permission key label to not display properly.

Desktop - Discord Presence\
\- Resolved an error thrown when toggling off Discord rich presence.
{% endtab %}
{% endtabs %}

### 3.18.0 8/21/2021

{% tabs %}
{% tab title="New" %}
Dispatch Lookup - Send to Unit\
\- Dispatchers can send lookup results to specific units. This also supports shortcuts from the active units list and drag-and-drop support.

Stream Overlay: Multi-line\
\- The stream overlay custom text files now has multi-line support.

Twitch Bot - Notes\
\- The livestream bot can now be configured to send chat messages when a new call note is added.

Twitch Bot: Lookup Events\
\- The Twitch bot can now be configured to send chat updates when the user runs a lookup in the CAD.

Tone Files - Formats\
\- Added wav, mp4, and m4a audio file format support to the tone board uploader.

Self-Dispatch: Auto Attach\
\- When creating a new dispatch call via self-dispatch, it will automatically add your identifier to the call.

Server IP - Optional Outbound Field\
\- Community servers can now specify a different inbound/outbound IP address. This is useful for communities on shared hosts, who authenticate and send data on a different IP than they receive push events and traffic to their server.

Stream Overlay - Copy Fields\
\- Users can now more quickly create custom text files by copying field keys right from the UI.

Stream Overlay: Custom Text Safety Checks\
\- Added safety checks to the custom overlay text files to ensure the user has every field enabled.
{% endtab %}

{% tab title="Changed" %}
API ID - Trim Spaces\
\- Added a check to ensure API IDs are not added with leading or trailing spaces.
{% endtab %}

{% tab title="Fixed" %}
Lookup - Header\
\- Fixed an issue causing the lookup window to not display the updated header when searches are ran.
{% endtab %}
{% endtabs %}

### 3.17.0 8/13/2021

{% tabs %}
{% tab title="New" %}
Stream Overlay and Twitch Bot\
\- Our new stream overlay allows you to customize and display your active unit information, call information, and more to your Livestream. Our Twitch bot automatically sends customizable chat updates when your unit information or attached call info is updated.

French Translation\
\- Added French translations.

Active Units - Multiple Sessions\
\- Implemented an improved active unit handler, fixing edge cases where users with multiple sessions would log their unit out even though they're still logged in on another device.

Disable Highlighting\
\- Disabled text highlighting for a better drag-and-drop experience.

Desktop - Livemap Window\
\- For desktop users, the live map now opens in a proper popup window if you click the "External" icon.
{% endtab %}

{% tab title="Fixed" %}
Pinned Tabs - Top Taskbar\
\- Fixed an issue causing user's pinned tabs from loading if their taskbar position was set to the top of the screen.

Mobile - Switch Servers Popup\
\- Fixed an issue on mobile devices preventing a user from changing their server.

Call Editor - Detach and Attach\
\- Fixed an issue where removing units from a call via editor, then adding them back would attach and immediately detach them.

Active Calls - Search by ID\
\- Fixed an issue preventing users from searching in the active calls list by call ID.

Active Calls - Detach\
\- Fixed an issue where users in self-dispatch mode would not see call detachments if they cleared themselves via the active calls window.

Custom Login Page - Direct to Community\
\- Fixed an issue causing custom login pages to not take the user directly to the community menu on login.

Record Center Preview - Capitalization\
\- Fixed an issue causing record previews in the record panel to not be displayed as all uppercase letters.

Dispatch Saved Types - Backspace\
\- Fixed an issue where backspacing on the dispatch's saved call types would remove or freeze the call editor from the UI.
{% endtab %}
{% endtabs %}

### 3.16.1 8/1/2021

{% tabs %}
{% tab title="Fixed" %}
Smart Signs - Push Events\
\- Fixed an issue with smart signs when capital letters were sent from the CAD, resulting in blank spaces on in-game signs.

Lookup - DB Sync\
\- Fixed an issue causing some DB Sync lookups to fail if you had only license or only vehicle mapping enabled.

Close Dispatch\
\- Fixed an issue where closing a call through a manual call update would fail.

Record Searchable Fields - Trim Spaces\
\- Fixed an issue where searchable record fields were not having leading or trailing spaces trimmed.
{% endtab %}
{% endtabs %}

### 3.16.0 7/31/2021

{% tabs %}
{% tab title="New" %}
Tones - Specific Users\
\- The tone board now has a selector to play tones to specific units, groups, dispatch calls, agencies, departments, or subdivisions. You can also click on the active units number/group/agency/department/subdivision or the active call for a dropdown shortcut to add these to the tone board play to selector.

Dispatch Call - Presave Data\
\- Dispatchers can now save filled call templates for use with common calls.

Lookup - Disable Partial\
\- The lookup window now has a partial search toggle, allowing you to run a standard partial search or filter an exact search term. Your preference is also saved to the local device for any new windows.

Active Units Dropdown - Icons\
\- Added icons to the active units dropdown menu for faster selection.

API: Partial Lookup\
\- The API lookup by name/plate now includes a partial flag to toggle a partial or exact search. If undefined, a partial is assumed as default.
{% endtab %}

{% tab title="Fixed" %}
Community Customization - Save\
\- Fixed an issue causing the community customization info to not properly save.

Civilian Records - No Partial\
\- The civilian lookup panel ensures all lookups are exact, preventing partial matches from showing.

Custom Record - UID Values\
\- Added additional safety checks and sanitization for communities that somehow manage to manually add dashes to custom field UID values, resulting in an SQL syntax error if the fields are indexed for unique or custom search values.

Smart Signs - Cancel Edit\
\- Fixed an issue causing the smart signs UI to duplicate the sign if you cancel an edit. Resulting from Lua's 1 based indices vs JS 0 based indices.

Tone Board - Hotkey\
\- Fixed an issue causing the tone board hotkey from not properly detecting if a tone board already existed, resulting in a new window every time.

Dispatch Call Notes - Reversed\
\- Fixed an issue causing the call notes for dispatch to be in reversed history for the initial load in.

Checkout - Set Community ID\
\- Fixed an issue where the popup to set your community ID after purchasing a subscription would be blank.
{% endtab %}
{% endtabs %}

### 3.15.1 7/30/2021

{% tabs %}
{% tab title="Fixed" %}
Server Selector\
\- Fixed an issue where navigating to and from the community menu would display the incorrect server in the server selector, even though you were properly logged into the correct one.\
\
Change Server - Login\
\- Fixed an issue where an undisposed event handler would be registered multiple times with menu navigations, causing multiple unit logins when switching your server.\
\
Active Units - Dispatch Flag\
\- Fixed an issue causing units to display the dispatch flag incorrectly in the active units panel.

Modify Signs Permission - Translation\
\- Fixed an issue causing a translation file error with the modify signs permission label.
{% endtab %}
{% endtabs %}

### 3.15.0 7/27/2021

{% tabs %}
{% tab title="New" %}
Street Signs Integration\
\- Our new street signs integration plugin and UI allows you to modify in-game street signs right from the CAD! This is visible for dispatchers and users in the DMV page.

Street Signs - Permission\
\- Added a new permission to allow users to modify street signs in the dispatch and DMV page. By default, only the CAD owner will have this new permission.

Discord RPC\
\- The desktop application now adds rich presence info and buttons to your Discord profile. You can customize the invite link to your Sonoran CAD community, or your community's Sonoran CMS new member application.

Dispatch Signal - Draggable Window\
\- Desktop users only now can access the dispatch signal window as a draggable/lockable window and not a popup modal.

Tabs - Quick Close\
\- On tabs with multiple minimized windows, the preview will display a close button to more efficiently close multiple tabs.
{% endtab %}

{% tab title="Changed" %}
Push Event: Detach Unit\
\- The EVENT\_UNIT\_DETACH now may contain a plural 'idents' field as opposed to a single 'ident' field when more than one unit is being detached at a time.
{% endtab %}

{% tab title="Fixed" %}
Custom Login Pages\
\- Fixed an issue causing requests for custom login page info to fail.

Record Lookup - Fire and EMS\
\- Fixed a permissions error preventing fire and EMS users from searching for a character or vehicle to import into a custom record.

10-Codes CSV Upload - Null Check\
\- Added a null/empty string check when importing and setting 10-codes.
{% endtab %}
{% endtabs %}

### 3.14.2 7/18/2021

{% tabs %}
{% tab title="New" %}
Permission Update - Auto Update UI\
\- Editing a user's permissions will now live update these without requiring them to refresh their page. This makes the Discord permissions sync feature more seamless.

Discord Bot - Multi-Server\
\- The Discord bot now supports permission sync with multiple different servers for a single community.

Discord Bot - linkme\
\- The discord bot now automatically runs the /syncme command after linking your secret ID.

API: set\_streetsign\_config\
\- Added an endpoint to set the street sign configuration in the CAD. This is for an upcoming integration plugin.

API: update\_streetsign\
\- Added an endpoint to update street signs in the CAD from in-game. This is for an upcoming integration plugin.

Push Event: event\_streetsign\_updated\
\- Added a push event for when street signs are updated in the CAD. This is for an upcoming integration plugin.

Push Event: event\_record\_add\
\- Added a push event when records are added.

Push Event: event\_record\_edit\
\- Added a push event when records are edited.

Push Event: event\_record\_remove\
\- Added a push event when records are removed.

Websocket Connection - Keepalive\
\- Added a manual keepalive heartbeat from server to client in attempt to prevent Cloudflare from closing some user's websocket connections, resulting in an unstable connection.
{% endtab %}

{% tab title="Changed" %}
Mobile Taskbar Focus\
\- The taskbar search no longer auto-focuses for tablet devices.
{% endtab %}

{% tab title="Fixed" %}
Secret ID - Default Blank\
\- Fixed an issue causing the secret ID to be blank for some users, requiring a refresh before utilizing it.

Dispatch Update Call - Duplication\
\- Fixed an issue where dispatchers would see call notes duplicated if they manually updated the call.
{% endtab %}
{% endtabs %}

### 3.14.1 7/14/2021

{% tabs %}
{% tab title="New" %}
Server Selector - Loading\
\- Added a loading screen when switching servers to prevent confusion on delay.
{% endtab %}

{% tab title="Fixed" %}
Server Selector\
\- Fixed an issue causing a failure when trying to switch servers in the fire, police, ems, or dispatch page.

Custom Records - Image\
\- Fixed an issue causing the custom record image field to not display the uploader.

Taskbar - Pinned Windows\
\- Fixed an issue causing the pinned windows on the taskbar to not load after more than one visit back to the community menu.
{% endtab %}
{% endtabs %}

### 3.14.0 7/11/2021

{% tabs %}
{% tab title="New" %}
Start Menu - Quick Search\
\- The start menu now has an auto-focused search box to filter window options for all mid-sized screen users and larger.

Hotkey: Start Menu\
\- Added a new configurable hotkey to toggle the start menu.

Vue 3\
\- Migrated the UI to Vue JS 3. This should also resolve issues some users experienced with the in-game tablet.
{% endtab %}

{% tab title="Changed" %}
Classic Layout - Default Enabled\
\- The "Classic Layout" is enabled by default for all users. This can be disabled in the customization menu to allow users to customize their dispatching panels into different locations.

Desktop Header\
\- Updated the desktop header bar to match the new header in emergency pages.
{% endtab %}

{% tab title="Fixed" %}
New Record - Conflict with Lookup Filters\
\- Fixed an issue causing the saved lookup preferences from also impacting the available records types in the records center.

Tone Board - Direct Upload\
\- Fixed an issue causing direct upload of audio files to the dispatch tone board from properly setting the new URL.

Window Layout\
\- Fixed issues with custom window layouts not saving or persisting properly.

Self-Dispatch: Logout\
\- Fixed a permissions issue for self-dispatchers logging out.

Image Uploader - Name\
\- Changed the file uploader to no longer be labeled as only an image loader.

Admin - Get Owner\
\- Fixed an issue preventing the admin page's "Get Owner" button from properly searching for the record owner.

BOLO Update\
\- Fixed an issue where updating or removing a bolo would not automatically update this in the other unit's screen without re-opening the window or searching again.
{% endtab %}
{% endtabs %}

### 3.13.0 7/1/2021

{% tabs %}
{% tab title="New" %}
Dispatch Tone Board\
\- Custom audio tones can be configured and played by dispatchers. Customizations include the label, icon, color, and sound file.

Hotkey - Tone Board\
\- A global hotkey can be configured to open the dispatch tone board more quickly.

Custom Audio Notifications\
\- Customizable audio notifications for new dispatches, panics, alerts, and more.

Active Units - Show/Hide Dispatchers\
\- The active units panel now has a toggle to show or hide dispatchers.

Custom Records - ID Field\
\- Custom record fields can now have the type set to "ID" to display the unique record ID.

Tone Board - Webhook\
\- Added a Discord webhook to log when a user plays a tone from the tone board.

Lookup Filter - Save Preferences\
\- Lookup filter preferences are saved locally and won't reset when you open a new or different lookup window.

Text-to-speech - Toggle\
\- Toggle off text-to-speech in the settings menu.
{% endtab %}

{% tab title="Changed" %}
API: get\_active\_units - onlyUnits flag\
\- The get\_active\_units endpoint now has an optional `onlyUnits` flag to show or hide dispatchers. Unit objects also contain an `isDispatch` boolean flag.

Dispatch Panel - Table UI\
\- Small UI changes and improvements to the dispatch panels with tables and their column customization, search boxes, and buttons.

S3 Hosting\
\- All image and file uploads have been migrated from AWS S3 to Sonoran S3.

Discord Bot IP - Bad Request Whitelist\
\- SonoranBot API failures no longer count towards a community API blacklist. Ex: verify\_secret
{% endtab %}

{% tab title="Fixed" %}
Tablet - Resize Window Save\
\- Fixed an issue with the in-game tablet not being able to detect as a non-mobile user agent - locking draggable windows and not persisting the saved size preferences.

Custom Records - Disabled Scrollbar\
\- Fixed an issue where text-areas couldn't be scrolled if the record editing was disabled. (Ex: Viewing a civilian record)

Unit Group - Remove from Call\
\- Fixed an issue preventing unit groups from being removed from a dispatch call.

Dispatch Call - PDF\
\- Fixed an issue preventing call logs from printing to PDF.

Records Webhook: Charges\
\- Fixed an issue causing record webhooks to not display values from the "Charges" sections.

SSO - Change Username Push Event\
Improved username update handling with the SSO system.

Unit Group - Add to Call\
\- Fixed an issue causing the unit group's "Add to Call" button to be all white.

Dispatch - Change Server\
\- Fixed an issue where dispatchers changing servers would still show on the active units list for other dispatchers.
{% endtab %}
{% endtabs %}

### 3.12.3 6/16/2021

{% tabs %}
{% tab title="New" %}
PDF - Chinese Localization\
\- PDF records now support Chinese localization, and will print in a font supporting Chinese characters if the user has their language set to Traditional or Simplified Chinese.
{% endtab %}

{% tab title="Fixed" %}
Self Dispatch - Notes\
\- Fixed an issue where self-dispatchers attaching to an active call would not receive new notes on the call until a page refresh was executed.

Hide Secret ID Field Until Logged In\
\- Fixed an issue where the secret ID field was still displayed as blank before logging into a specific community.
{% endtab %}
{% endtabs %}

### 3.12.2 6/14/2021

{% tabs %}
{% tab title="New" %}
Report Window - Save Last Window's Size\
\- Resizing a popout window will save this width and height preference for when you open a new window of this type.

Account Secret ID\
\- User accounts now have a "Secret ID" similar to an API unique to each community account. These can be used with third party/external applications for authentication/security (Discord bot role sync) and can be refreshed/regenerated in the UI if ever leaked.
{% endtab %}

{% tab title="Change" %}
Custom Map Images - File Size\
\- Increased the file size limit of custom map images from 25 to 30MB each.
{% endtab %}

{% tab title="Fixed" %}
Self-Dispatch 911 Calls\
\- Fixed an issue causing self-dispatchers to not receive incoming 911 calls properly.

API: set\_api\_id pushNew Flag\
\- Fixed an issue in the set\_api\_id endpoint preventing the pushNew flag from working properly.
{% endtab %}
{% endtabs %}

### 3.12.1 6/10/2021

{% tabs %}
{% tab title="New" %}
Custom Login Page: DNS Record\
\- Custom login pages can now be created by adding a simple CNAME DNS record. Communities no longer need to host an iFrame webpage. The old query strings (other than community ID) have also been depreciated.

Webhook Footer - Server ID\
\- Added the server ID metadata to specific webhook footers for the discord bot parsing.
{% endtab %}

{% tab title="Fixed" %}
Active Units - Sorting\
\- Fixed an issue where some columns of the active units table wouldn't properly sort.

Custom Search Types - Disable on Civilian\
\- Fixed an issue where custom search types were displayed in the civilian menu.

PDF: Margins\
\- Fixed an issue with PDF records sometimes running outside of the page margins.

Self Clear - Disable without Perms\
\- Fixed an issue where units could not self-clear from a call unless they had dispatch or self-dispatch permissions.

API: Unit Status\
\- Fixed an issue with the unit status API endpoint not updating the status on the user's local UI.
{% endtab %}
{% endtabs %}

### 3.12.0 6/5/2021

{% tabs %}
{% tab title="New" %}
Custom Records - Duplicatable Section\
\- Custom record sections can be toggled as "duplicatable" allowing the user to duplicate a section (similar to charges) while filling out the report.

Custom Records - Unique Field\
\- Custom records now support enforcing unique fields for any non-db sync record type.

Custom Records - Address Type\
\- Custom records now have an "Address" type that will display a dropdown containing the community's imported spreadsheet of street addresses. This auto-filters as you type, just as the dispatch editor does.

Custom Records - Removed Vehicle Limit\
\- Custom records can now have an unlimited number of 'plate' UID fields that will index and make the vehicle plate searchable. (Previous limit of 3 vehicle sections per record.)

Custom Records - Removed Civilian Limit\
\- Custom records can now have an unlimited number of 'first', 'last', and 'mi' UID fields that will index and make the character names searchable. (Previous limit of 3 civilian sections per record.)

Emergency Call Columns - Persist\
\- Modifying the displayed column preferences on the emergency calls list will persist past a refresh on a local device.

Active Calls Columns - Persist\
\- Modifying the displayed column preferences on the calls list will persist past a refresh on a local device.

Active Units Columns - Persist\
\- Modifying the displayed column preferences on the active units list will persist past a refresh on a local device.
{% endtab %}

{% tab title="Changed" %}
Custom Records - Required Field Color\
\- Changed the custom records required field text from red to orange for higher contrast.

API: Set Call Primary\
\- Heavily optimized the set\_call\_primary API endpoint for quick unit tracking updates via Dispatch Notify. Added an additional required 'trackPrimary' field to the call to toggle the unit tracking.

API: Set Call Postal\
\- Heavily optimized the set\_call\_postal API endpoint for quick unit tracking updates via Dispatch Notify.
{% endtab %}

{% tab title="Fixed" %}
Character Tab: Icon\
\- Fixed an issue causing the character Windows minimized tab to not have an icon.

Live Map - Self DIspatch\
\- Fixed an issue where units with self-dispatch enabled would be marked as a true dispatcher, preventing them from being shown on the live map.

Unit Group Columns - Dropdown\
\- Fixed an issue where the active units group column dropdown had incorrect column values.
{% endtab %}
{% endtabs %}

### 3.11.2 6/1/2021

{% tabs %}
{% tab title="Fixed" %}
Dispatch Classic Layout\
\- Fixed an issue where the dispatch classic layout would be off on full-sized desktops.

Server Selector\
\- Fixed an issue where the server selector wouldn't work in the fire, EMS, and police pages.

Electron: Top Taskbar Cover\
\- Fixed a bug in the desktop application where the taskbar would cover the application header.

Active Units - UI\
\- Fixed an issue with the UI causing active units to not properly be displayed when new units login.
{% endtab %}
{% endtabs %}

### 3.11.1 6/1/2021

{% tabs %}
{% tab title="New" %}
Tab: Labels\
\- Tabs can now have their text and icon displays toggled. By default, desktop users have tabs that display both the icon and text with mobile users only seeing the icon.

Dispatch: Unit Identifier\
\- Dispatch now has a unit identifier panel by default.

Dropdown Filter - Backspace\
\- Improved dropdown auto-filtering to properly re-compute options after backspacing from a typo for dropdowns like; dispatch address, code, primary unit, and charge title.

Window: Bring to Top\
\- Added a "Bring to Top" menu option when right-clicking a locked window.

Penal Code - Value Safety Checks\
\- Adding or modifying penal codes will ensure that any property is not set to NULL.
{% endtab %}

{% tab title="Changed" %}
Unit Status - Mobile Enhancement\
\- Improved the unit status buttons display style for mobile users.

Mobile: Auto Height\
\- Improved the automatic height calculation of windows for mobile users.
{% endtab %}

{% tab title="Fixed" %}
Start Menu: Icon\
\- Fixed an issue causing the start menu's Sonoran CAD icon from not properly displaying in apps.

iOS Padding\
\- Fixed an issue where the taskbar wouldn't add extra padding to account for iOS "safe" areas.

Active Units Tab\
\- Fixed an issue where the active units tab had no icon and would not automatically open a new units window if it was pinned with no actively minimized windows.

Mobile: Side Taskbar\
\- Fixed an issue for mobile users where the taskbar would be closed and unable to be reopened if they customized it to be displayed on the side.

Live Map: Dynamic Start Menu Display\
\- Fixed an issue where the live map option in the start menu would still display even if the live map was disabled in the admin menu.

Tabs: Navigation\
\- Fixed an issue where old tabs would still be minimized if you navigated to the menu and back from an emergency services page.

Active BOLOs: Status\
\- Fixed an issue where BOLOs with the status set to CLOSED would still be displayed in the active BOLO window.

Active Calls: Tab\
\- Fixed an issue where the active calls tab had no icon and would not automatically open a new units window if it was pinned with no actively minimized windows.

Emergency Calls: Tab\
\- Fixed an issue where the emergency calls tab had no icon and would not automatically open a new units window if it was pinned with no actively minimized windows.
{% endtab %}
{% endtabs %}

### 3.11.0 5/29/2021

{% tabs %}
{% tab title="New" %}
Discord Bot\
\- Released a new Discord bot to sync Discord roles with CAD account permissions automatically. Kicking and banning a user from Discord will also preform those actions on the user in the CAD.

Emergency Services - Layout Overhaul\
\- The UI for police, fire, EMS, and Dispatchers has been overhauled to a more "Desktop" style theme. This includes a new taskbar with customizable positions. In addition, tabs of the same type now condense together. Tabs can be pinned in addition to dragging and dropping their positions. Pinned tabs will save their position past a reload.

API: set\_call\_postal\
\- Added an endpoint to update a dispatch call's postal code.

API: set\_call\_primary\
\- Added an endpoint to update a dispatch call's primary unit.

Wraith - Custom Fields\
\- Communities can now customize the status and expiration date fields to be displayed in the Wraith lookups with custom records.
{% endtab %}

{% tab title="Changed" %}
Dispatch - Update Call Clearing Editor\
\- Dispatch updating a call no longer clears the call from their UI editor.

Chinese Translation Labels\
\- Changed the Chinese symbols for the simplified and traditional Chinese translation menu options.
{% endtab %}

{% tab title="Fixed" %}
Dispatch Call Notes\
\- Fixed an issue where dispatchers were not getting call notes if the call was not being viewed. Causing them to override the existing call notes if they opened a new existing call and updated it.

Dispatch Call Edits\
\- Fixed an issue where dispatchers were not receiving updated call data if a self-dispatcher updated information.

Department Editor - Error Codes\
\- Fixed an issue with invalid i18n translations in the department editor for error codes.

DMV Pending - Default Filter\
\- Fixed an issue where the PENDING records section for DMV had the default filter set to only DMV records, hiding vehicle and license records.

Wraith Plugin - Closed BOLO Records\
\- Fixed an issue with the Wraith V2 integration plugin where "Closed" BOLO records would still be displayed.

Call Close - Detach Units\
\- Fixed an issue where units were not being detached in the database when a call was closed.

Admin - Lookup Window\
\- Fixed an issue where the "Get Owner" lookup window in the admin menu could not be dragged above the accounts table.
{% endtab %}
{% endtabs %}

### 3.10.3 5/14/2021

{% tabs %}
{% tab title="Changed" %}
SQL Connections\
\- SQL connections are now cleared back to the connection pool in-between data processing to free up idle connections as quickly as possible.
{% endtab %}

{% tab title="Fixed" %}
Dispatch Address - Type to Filter\
\- Fixed an issue causing the dispatch addresses dropdown to not support live filtering via text input.

Record Editor - Copy Link\
\- Fixed an issue where the copy record link button was not showing in the record viewer.

Record Editor - Get Owner\
\- Fixed an issue preventing the "Get Owner' button from displaying in the admin menu's lookup tool.

Dispatch - Note Updates\
\- Fixed an issue where dispatchers could not receive new call notes.

Dispatch Preview - Scroll Description\
\- Fixed an issue where previewing a dispatch call wouldn't allow you to scroll down on the description.

Android - Settings Menu\
\- Fixed an exception for android devices preventing the settings modal from displaying.
{% endtab %}
{% endtabs %}

### 3.10.2 5/12/2021

{% tabs %}
{% tab title="New" %}
Window Layout - Classic Version\
\- Added a toggle in the settings modal to enable "Classic Layout" removing the ability to customize your layout, reverting back to the older static, responsive layout.

Quick Dropdown Menu UI\
\- Improved UI style and consistency for the quick action dropdown menus on the active dispatch calls, units, and emergency call windows.
{% endtab %}

{% tab title="Changed" %}
Capacitor - Disable Stripe Library\
\- Stripe library now only loads on the billing page, removing this from mobile capacitor builds.

Tablet - Allow Window Drag\
\- Popout window dragging is now re-enabled for tablet users.
{% endtab %}

{% tab title="Fixed" %}
Self Dispatch - Duplicated Calls\
\- Fixed an issue where self dispatchers would see new dispatch calls duplicated if they are initially attached.

Set API ID\
\- Fixed an issue causing an error when new accounts set their API ID.

Self Dispatch - Close from Active Calls\
\- Fixed an issue preventing users in self dispatch mode from closing an active call.

Electron - Reload Exception\
\- Fixed an issue on the desktop version causing reloads from resetting a window layout or changing the language translation to throw a popup exception.
{% endtab %}
{% endtabs %}

### 3.10.1 5/12/2021

{% tabs %}
{% tab title="New" %}
Tablet - Auto Set API ID\
\- The tablet resource now automatically sets a users API ID in the CAD when they login.

Quick Resize - Lock Button\
\- Added an additional "Lock Window" button while quick-resize is enabled, preventing users from having to right-click to access the lock menu.
{% endtab %}

{% tab title="Fixed" %}
Dispatch - Call Notes\
\- Fixed an issue where units couldn't see new call notes until they refreshed the page.

Primary Unit - Display\
\- Fixed an issue causing the primary unit on the dispatch call editor to not properly work.

Popout Windows - Save Size/Position on Minimized\
\- Fixed an issue causing some popout windows to not save their size and positioning after being minimized.

Self Dispatch - Create Call\
\- Fixed an issue where users with self-dispatch enabled couldn't create a new dispatch call.

Self Dispatch - Edit Call\
\- Fixed an issue where users with self-dispatch were unable to edit an existing dispatch call.

Self Dispatch - Clear Call\
\- Fixed an issue where users with self-dispatch were unable to clear themselves from a call.

Call Viewer - Initial Width\
\- Fixed an issue where the initial unlocked placement of the call editor was 1px too wide for the police, fire, and EMS pages.

Record Viewer\
\- Fixed an issue with records having a blank space below the bottom action bar.

Small Screens - Increase initial width\
\- Improved and fixed issues with some popout windows being too small by default.

Civilian - Popout Windows\
\- Fixed an issue with civilian popout windows being stuck below the character UI.

Dispatch Login - Security Warning\
\- Fixed an issue where dispatchers logging in would make a get call request resulting a security warning without the police, fire, or EMS permission.
{% endtab %}
{% endtabs %}

### 3.10.0 5/10/2021

{% tabs %}
{% tab title="New" %}
SSO Accounts\
\- All user accounts have been migrated over to a general "Sonoran" account. This allows for a centralized place to edit your account info, view your billing, and more.

Custom Layouts\
\- Users can now fully customize the placement of any window and lock them to create a custom layout. This includes all default dispatching windows and additional popout windows. Layouts are also saved locally to the user's device.

Dispatch Editor - Drag and Drop Units\
\- Active units can be dragged over to the call editor to more easily attach them.

Active Units & Groups - Drag and Drop\
\- Units can be dragged and dropped into a new or existing group.

Dispatch Call History - Drag and Drop Units\
\- Units and unit groups can be dragged and dropped directly to an active call, removed from a call, or dragged from one call to another without having to open the full call in the editor.

Dispatch Call Note: Attach/Detach\
\- Dispatch calls now receive a note when a unit or unit group is attached or detached.

Emergency Calls - Drag and Drop\
\- Emergency/911 calls can now be dragged and dropped from the call list to the dispatch editor.

Status Change - Dispatch Call Note\
\- Units attached to a dispatch call will send a note to the call when updating their status.

Custom Search - Partial Matches\
\- Custom search types now allow for partial searches.

Translation: Chinese\
\- Added Chinese translations to the CAD settings.

Translation - Traditional Chinese\
\- Added Traditional Chinese translations.

Login - Emit Session Data\
\- Data is now emitted to the page's parent (for iframe) allowing the username and session ID to be captured for authentication with the auto API ID set feature.

API: Set API ID\
\- The set API ID endpoint now allows for an array to be sent along with specification to push or overwrite the existing account IDs.

Active Calls - Postal Column\
\- The active calls list now has an optional field to view the call's postal field.

BOLO Records - Status Field\
\- The custom records UI now requires BOLO records to contain a "Status" field.

Civilian 911 - Modify Caller Name\
\- Civilians can now remove their name in the 911 caller to remain anonymous.
{% endtab %}

{% tab title="Changed" %}
Push Events - Server Port\
\- The push event system now utilizes your existing game server port. This reduces the number of open ports your server requires. Push events are now sent to [http://ip:gameport/sonorancad/event](http://ip/:gameport/sonorancad/event). The framework will automatically forward events to this new path if you have not updated your port in the CAD admin panel.

API - SET\_ACCOUNT\_PERMISSIONS\
\- Separated the account permission arrays in the SET\_ACCOUNT\_PERMISSION API endpoint to allow a caller to both add and remove specific permissions in a single call. Also, added an additional option to specify the user by their CAD username as opposed to only their API ID. Additionally, added an option to toggle the account status from PENDING to ACTIVE.

API: NEW\_CHARACTER Response\
\- API NEW\_CHARACTER responds with the full JSON character record built.

API IDs - Array\
\- API IDs are now stored as an array and allow for more API IDs to be stored. The UI has also been improved and will auto-save.

API: Unit Push Events\
\- Push events including unit updates no longer contain the full unit structure, but instead include the unique identifier ID.

API: Change Unit Status\
\- The change unit status endpoint now requires a server ID argument.
{% endtab %}

{% tab title="Fixed" %}
Live Map - Custom Upload\
\- Fixed an upload limit issue causing some custom live map uploads to fail.

Remove Record\
\- Fixed an issue preventing users from removing a record due to an incorrect UUID placement.

Default Records - Flags\
\- Fixed an issue where the default record type templates contained records with hidden flags.

911 - Text to Speech\
\- Fixed an issue where the webpage text to speech for "Incoming 911" would fail.

Record - Get Owner\
\- Fixed an issue where searching for a record's owner would fail on types other than a civilian.

Custom Search - Case Sensitivity\
\- Fixed an issue where custom searches were not case-insensitive and would fail on searches with lowercase DB values.

Unit Location - Duplicate API IDs\
\- Fixed an issue where unit locations would not update via API if multiple user accounts had conflicting API IDs.

DB Sync/Merge Primary Key Column\
\- Resolved issues with DB Sync/Merge mapping manual values properly if the user had a primary key column name set as a reserved MySQL character. Ex: '#"

DB Sync/Merge - Character ID vs Primary Key\
\- Resolved an issue with DB Sync/Merge if the community has a different character unique ID that is not the primary key column.

Character Records: Validation\
\- Fixed an issue where custom character validation was not being processed for required fields.

Custom Records: Supervisor Status\
\- Fixed an issue where custom records with a status field in a section before fields requiring a supervisor may not be indexed properly as requiring supervisor permissions.

DBSync - Character Multi-Table\
\- Fixed an issue where database sync would fail to select the correct "owner ID" when using multiple character tables.

Dispatch Address Filter - Mistype\
\- Fixed an issue on the dispatch address field filtering where backspacing after a misspelling would fail to re-correct the filtered list.

Lookup - Closed BOLO\
\- Fixed an issue with the lookup UI preview showing a BOLO's status as 0 or 1 instead of "Closed" and "Open".

Call Note - Permission\
\- Fixed an issue where units could not add a note to the call unless they were in self-dispatch.

Clear Subscription - Handle non-existing subscriptions\
\- Fixed an issue where clearing a subscription's ID on an expired subscription would fail.

Police Supervisor Panel - DMV Records\
\- Fixed an issue where the police supervisor panel would also show DMV records that required supervisor completion.

Favicon - Alternate Sizes\
\- Fixed an issue with alternate sized favicons not displaying and causing a mixed-media SSL warning.
{% endtab %}
{% endtabs %}

### 3.9.0 2/9/2021

{% tabs %}
{% tab title="New" %}
Lookup - Custom Search\
\- Communities can now create custom lookup search types (Ex: SSN on a civilian, license firearm number, etc.). Search types can also specify a mask format, work with DB Sync, DB Merge, and all custom records.

Custom Records - Custom Search Field\
\- Custom records can now have a custom searchable field set by using the UID field.

Logging - User UUID from Validation\
\- Enhanced user logging for increased security and debugging.

API - GET\_ACCOUNT - Search By Username\
\- The GET\_ACCOUNT API endpoint can now use the username in addition to the API ID.
{% endtab %}

{% tab title="Fixed" %}
DB Sync - Port Length\
\- Fixed an issue where DB Sync port numbers were limited to only 5 integers instead of 6 in the UI.
{% endtab %}
{% endtabs %}

### 3.8.1 - 2/2/2021

{% tabs %}
{% tab title="New" %}
Dispatch - Auto Street Names\
\- The address section on dispatch calls is now a drop-down with auto-suggested street names as you type. You can customize the list of street names in the admin menu by uploading a CSV or JSON file.
{% endtab %}
{% endtabs %}

### 3.8.0 - 2/1/2021

{% tabs %}
{% tab title="New" %}
Geographical Settings - Emergency Code\
\- Improved the geographical setting section's emergency code (911) to be fully customizable.

Geographical Settings - Currency\
\- Geographical customization now allows you to change the currency delimiter from $ to any other currency symbol.

Geographical Settings - 10-Codes\
\- Geographical customization allows you to customize references of "10-Codes" to other phrasing.

Geographical Settings - Penal Codes\
\- Geographical customization allows you to customize references of "Penal Codes" to other phrasing.

10-Codes - Import/Export CSV and JSON\
\- 10-Codes can now be imported and exported via CSV and JSON.

Penal Codes - CSV Export\
\- Penal codes can now be exported to a CSV file as well.

Change Community ID - Update Subscription\
\- For all newly created subscriptions, updating your community ID will auto-update the community ID on your Stripe subscription as well.

Billing - Set Community ID\
\- When setting the community ID of a subscription in the billing page, the options are restricted to communities you are already in.
{% endtab %}
{% endtabs %}

### 3.7.4 - 1/29/2021

{% tabs %}
{% tab title="Fixed" %}
Lookup - Custom Records Tab\
-Fixed an issue causing the reports result section in the lookup window to not properly display the results table.
{% endtab %}
{% endtabs %}

### 3.7.3 - 1/29/2021

{% tabs %}
{% tab title="New" %}
Penal Codes - CSV Import\
\- Communities can now import all penal codes directly from a CSV spreadsheet file.

Translation - Russian\
\- Added Russian translations.
{% endtab %}

{% tab title="Changed" %}
Custom Community ID - Starter\
\- Community IDs are now randomly generated and require the starter plan or higher to customize. This helps ensure less community ID conflicts.

Stripe - Dynamic Tax Rates\
\- Stripe checkout sessions now automatically charge sales tax based on location, rather than requesting the user's ZIP code in the CAD prior.
{% endtab %}

{% tab title="Fixed" %}
Discord - Webhook URL\
\- Fixed an issue requiring Discord webhooks to only work with discordapp.com in the URL and not discord.com.
{% endtab %}
{% endtabs %}

### 3.7.2 - 1/25/2021

{% tabs %}
{% tab title="New" %}
Live Map - Custom Map\
\- Communities can now upload custom map image files if they are using a custom live map.
{% endtab %}

{% tab title="Changed" %}
Requests - Ensure no Username Spoof\
\- Improved a possible security exploit where a user could spoof their username to confuse community webhook logs, making it more difficult for communities to properly stop misuse.
{% endtab %}

{% tab title="Fixed" %}
Custom Records - Lookup Preview Columns\
\- Fixed an issue where custom records with the same name but a different ID would cause a key conflict in the lookup preview.

Live Map - Static URL\
\- Fixed an issue causing the toggle "Static URL" option for the live map to be disabled.

NSIS Installer Update\
\- Updated the Windows Desktop NSIS installer to resolve an issue where users who removed the app without using the uninstaller would have the installer freeze while re-downloading it.

DB Sync - Primary Key Detection\
\- Fixed an issue where database sync could find multiple primary keys in user defined tables if the MySQL database had multiple schemas with the same table name, but different primary keys in each.

Remove Character\
\- Fixed an SQL error causing some users to be unable to remove their characters.

Webhooks - Multiple Embeds\
\- Discord webhooks that failed due to containing more than 25 fields have now been broken down into multiple embeds.

Unit Locations\
\- Fixed an issue where unit locations may not be updated if the last unit object in the API call contained an invalid API ID or had a different server ID selected.
{% endtab %}
{% endtabs %}

### 3.7.1 - 1/15/2021

{% tabs %}
{% tab title="New" %}
Payment - Set Community ID\
\- Added checks to ensure a payment can not have it's community ID set if the community ID already has an existing subscription. This prevents someone from downgrading another community ID if they switch their subscription's community ID back and forth.

Payment - No Community ID Set\
\- Added an additional, clickable warning badge in the payment center when a user has a subscription without a community ID set.
{% endtab %}

{% tab title="Fixed" %}
Records Center - Pending and Supervisor\
\- Fixed an issue in the records center where completing a supervisor or pending record would not auto-update the supervisor/pending panel to remove it and required a search refresh.

DB Merge - Local Edit\
\- Fixed an issue where saving a record with database merge would add a bugged local duplicate of the edited record instead of updating the existing one on the UI.

DBSync - Primary Key Detection\
\- Fixed issues and improved handling for ensuring database sync tables contain a proper primary key.

DB Merge - Primary Key\
\- Fixed an issue where saving database merge records was not using the new unique primary key system and would show merged/saved values on all license and vehicle registrations owned by that character.

Middle Initial - Check Length\
\- Fixed an issue where submitting custom reports with a middle initial field larger than one letter would fail to save in the database.
{% endtab %}
{% endtabs %}

### 3.7.0 - 1/8/2021

{% tabs %}
{% tab title="New" %}
Custom Records - Linked Records\
\- Custom record templates can now have a "linked records" section added. You can now click the "copy link" button in any record header and "paste link" in the linked records section. Linked records can be clicked to cross-reference reports, characters, and more.

Sonoran Servers - Bundle and Save\
\- Sonoran Servers customers can now link their VPS plan in the billing center and save 30% every month!

Lookup Results - Quick Search\
\- On a lookup window's returned results, result rows with a name or license plate have a quick search icon to open a new lookup window with that name or plate.

Items Per Page - Save Preferences\
\- The "Items Per Page" for lookup tables, penal code tables, active units, 10-codes, and others will now locally save your selected preference.

Dispatch - Track Primary Unit\
\- The dispatch UI now has a checkbox to track the primary unit. When paired with the dispatch notify plugin, units in-game will be auto routed to the current position of the primary unit. This is useful in a chase, where units can have their GPS routed to the lead unit in real time. NOTE: This additional plugin functionality is still in development.
{% endtab %}

{% tab title="Fixed" %}
Electron - Settings Modal\
\- Fixed an issue making it difficult to close the settings modal on the Windows desktop application.

Penal Codes - Manual Sort\
\- Fixed an issue causing penal codes to not properly save their position in the list when manually sorted and saved.
{% endtab %}
{% endtabs %}

### 3.6.0 - 12/30/2020

{% tabs %}
{% tab title="New" %}
Hotkeys - Lookup\
\- Hotkeys can now be configured to open a new lookup window.

Hotkeys - Record Center\
\- Hotkeys can now be configured to open the records center.

Custom Records - Custom Flags\
\- The flags section for custom records is now customizable for every individual custom record type.

Custom Records - Label\
\- Custom records now have a "label" type available in the record template editor.

PDF Records - Checkbox\
\- If a custom record has a checkbox that does not have a label set, the PDF will show an "X" if it's checked.

Account - Change Email\
\- Users can now update their account's email address in the account settings menu.
{% endtab %}

{% tab title="Changed" %}
Reconnection Handling - Components\
\- Improved reconnection handling for components and other sub-modules in the CAD's UI.

Lookup - Cooldown\
\- Decreased the lookup cooldown significantly to allow for faster re-searching.
{% endtab %}

{% tab title="Fixed" %}
Reconnection Handling - Logout\
\- Fixed an issue causing some clients to be logged out when connection is lost and re-established.

Custom Record Editor - Width Label\
\- Fixed an issue causing the custom record editor's "Width" section to display with the wrong label.
{% endtab %}
{% endtabs %}

### 3.5.1 - 12/21/2020

{% tabs %}
{% tab title="New" %}
Selected Character\
\- Your currently selected character is saved in the civilian menu and will persist through sessions.

API - Get Characters Ordering\
\- The API get\_characters endpoint ensures that the first character record in the list returned (index 0) is always the account's currently selected character.

Push Event - 911 Removed\
\- API push event EVENT\_REMOVE\_911 is now sent when an emergency call is removed.

Dispatch - 911 Origin MetaData\
\- Dispatch metadata contains the origin call ID if sent from a 911 call.

Translation - Italian\
\- Italian language files have been added.

Custom Records - No Name\
\- The custom record editor will now display an error if a custom record is created without a name set.

Custom Records - No Preview Fields\
\- The record template editor will now error if the template has no record fields with the lookup preview enabled. The lookup UI will also now properly inform the user of the issue when searching and still allow them to click and open the bad record.
{% endtab %}

{% tab title="Fixed" %}
911 Calls - UI Remove from API\
\- Fixed an issue where 911 calls would not be removed from the local user's UI screen when removed via API, requiring a page refresh.

Lookup - DbSync and Regular Mix\
\- Fixed an issue where a lookup finding a manual character, license, or vehicle registration record while DBSync is enabled would break the search loop and return only partial results.
{% endtab %}
{% endtabs %}

### 3.5.0 - 12/07/2020

{% tabs %}
{% tab title="New" %}
Admin - Edit Character\
\- Admins can now search and edit or remove characters for users in addition to getting the character owner's username.

Admin - Edit Records\
\- Admins can now search and edit or remove all records, in addition to searching for the record owner's account username.

DBSync - Friendly Mapping\
\- DBSync now allows you to map specific DB value results like "driver\_license" to a more readable "Driver's License" string format.

Stripe Checkout - External\
\- The payment system has been rewritten to use external Stripe checkout pages for all community subscription management.

API - Get Live Map/Servers Config\
\- The get\_servers API endpoint can now be utilized to retrieve your community's server configuration. This contains valuable information particularly for ensuring your live map ports and IP is correctly configured.
{% endtab %}

{% tab title="Fixed" %}
Custom Records - Null UID\
\- Fixed an issue where older custom record formats without a UID would cause the UI to not properly validate and save the record format.

DMV Edit - Supervisor Permission\
\- Fixed an issue allowing civilians to edit supervisor fields on records they have to apply to.

Import Custom Record\
\- Fixed an issue where importing a custom record from another community with the custom recordTypeId field already being set would fail to add it to your community as a new record.

DBSync - Custom Mapping\
\- Fixed an issue causing DBSync to lose references to custom object mappings in rare cases.
{% endtab %}
{% endtabs %}

### 3.4.3 - 11/28/2020

{% tabs %}
{% tab title="New" %}
Promotional Handling\
\- Added new side menu handling for special promotional banners and URL handling.
{% endtab %}

{% tab title="Fixed" %}
DMV - Status\
\- Fixed an issue causing the STATUS type field in custom records to not be read properly in the backend. This caused cases where all new records would show up in the PENDING section of the DMV page even if they had been approved.

DMV - Record Center Update\
\- Fixed an issue where lookup preview table results would not update locally after editing or removing a record. Causing the user to have to manually refresh the search query.

DB Merge - Error\
\- Fixed an issue causing DB merge searches to fail if the results only contained records, and no civilians.

Civilian - DBSync Add Character\
\- Fixed an issue where civilians couldn't search to link a new character with DBSync due to a race condition with the event registration.
{% endtab %}
{% endtabs %}

### 3.4.2 - 11/23/2020

{% tabs %}
{% tab title="Fixed" %}
My Records\
\- Fixed an issue causing the "My Records" section in the record center to not show properly.

Civilian: Apply\
\- Fixed an issue where civilians without the "Add" permission for records and could only apply would have the sections all disabled.
{% endtab %}
{% endtabs %}

### 3.4.1 - 11/22/2020

{% tabs %}
{% tab title="New" %}
Vehicle Registration - UID Status Required\
\- All vehicle registrations now require a field with a UID of "Status". This enables the radar plugin to pull up and find the vehicle registration status.
{% endtab %}

{% tab title="Changed" %}
Reconnection and Event Handling\
\- Further improvements have been made to the reconnection and event handling logic to improve the overall user experience.
{% endtab %}

{% tab title="Fixed" %}
Law Section - Lookup\
\- Fixed an issue causing the lawyer page lookup section to not work properly.

Event Handling - Page Switch\
\- Fixed an issue where some event handlers would not be properly registered when switching from one page and back to another.

Verify Account\
\- Fixed an issue with the validate page's event handler preventing new users from verifying their email address.

Custom Record - Fail without UID\
\- Additional safety checks have been added to handle any legacy record containing fields without a proper UID property that prevented some users from adding custom records.

Lookup By Int\
\- Fixed an issue causing lookup by integer values (ID, ident, status) from not working properly.

DBSync - License and Vehicle\
\- Fixed an issue causing custom vehicle and license records to not be returned by DBSync if the custom civilian sync record contained data that the mapped vehicle or license records do not.
{% endtab %}
{% endtabs %}

### 3.4.0 - 11/21/2020

{% tabs %}
{% tab title="New" %}
DbSync/Records - Custom Character Mapping Fields\
\- Civilian records are fully customizable in every field. Custom DbSync fields can also be added for every custom field.

DBSync/Records - Custom Vehicle Mapping Fields\
\- Vehicle registration records are fully customizable in every field. Custom DbSync fields can also be added for every custom field.

Login - Multiple Sessions\
\- Users may have multiple valid session tokens based on the IP, time, and session key. This ensures sessions are not invalidated when switching devices, particularly to and from our desktop and mobile apps.

API Endpoint: Version Check\
\- This API endpoint allows you to check the current subscription version of the community.

Re-connection Handling\
\- Improved app re-connection event registration and handling. This greatly improves user experience with connection drop outs, backend service restarts, etc. and fixes common bugs where units may experience with data not updating randomly until the page is refreshed.

Penal Codes - Import/Export\
\- Penal code lists can now be imported and exported from one community to another.

Penal Codes - Manual Sort\
\- Penal codes can now be manually sorted in order using the action buttons in the admin customization menu.

DbSync - Column Space Check\
\- All database sync column and table name values are trimmed to ensure no accidental spaces were entered that could cause an invalid SQL syntax error.

Lookup - Trim trailing spaces\
\- Added additional checks to ensure no beginning or trailing spaces are entered into the search terms.
{% endtab %}

{% tab title="Changed" %}
Stay Signed In\
\- The stay signed in option is now enabled by default. All session tokens are now stored in local storage as opposed to session storage.
{% endtab %}

{% tab title="Fixed" %}
Discord Webhooks\
\- Fixed an issue where Discord webhook URLs with Discord.com instead of discordapp.com would fail.

Side Menu - Scroll\
\- Fixed an issue where the side menu buttons would be overlapping on smaller screens.

Empty Bolo - No Table\
\- Fixed an issue where the view BOLOs tab wouldn't show anything but the top navbar if there were no BOLOs or warrants active. It now properly shows a "No Records Found" to minimize confusion.
{% endtab %}
{% endtabs %}

### 3.3.0 - 10/25/2020

{% tabs %}
{% tab title="New" %}
User Accounts - Purge\
\- Admins can now "purge" inactive users in the admin menu. This will kick all users who have not logged in for the past 30 days.

Signal 100 - Webhook\
\- Webhooks can now be configured for signal 100 notifications.

Custom Records - Import/Export\
\- You can now export and import custom records and share them with other communities.

Query String - Hide Switch Community\
\- Communities hosting a custom login page or using an in-game tablet can specify the "lockCommunity" query string to hide the "switch community" button in the CAD.

i18n Arabic\
\- Arabic translations have been completed and updated.
{% endtab %}

{% tab title="Fixed" %}
Account Delete\
\- Fixed an issue causing some account removal requests to have an error occur when sending the confirmation email.

Side Menu - Vertical Scroll\
\- Fixed an issue where screens in horizontal mode (in-game tablet) would have side drawer buttons overlap. The side drawer now properly scrolls vertically.

Community ID and Account - PostgreSQL Wildcard\
\- Fixed an issue where PostgreSQL queries for a community ID, email, or username with an underscore in them wouldn't escape the underscore. This caused conflict issues if the wildcard had another match.

Record Order - Non DB Sync\
\- Fixed an issue where records in a lookup were not always retrieved in proper chronological order. This caused issues with the UI preview not always showing the most recent template.

Live Map - Static URL Toggle Label\
\- Fixed an incorrect translation label for the live map static URL toggle label.
{% endtab %}
{% endtabs %}

### 3.2.1 - 9/23/2020

{% tabs %}
{% tab title="New" %}
Polish Translations\
\- Added Polish translations to Sonoran CAD.

Arabic Translations\
\- Added Arabic translations to Sonoran CAD.

Penal Codes - New Charge\
\- If your penal code is not in the current charge list, users can press "ENTER" or "TAB" to add the custom value to the charge field.

PDF - Image Error Handling\
\- Improved image conversion error handling and detection in custom record PDF files.
{% endtab %}

{% tab title="Changed" %}
API - Unit Locations\
\- Unit location API now has a more optimized way of sending unit location updates as a single array to the client's frontend. This increases performance with less websocket traffic.
{% endtab %}

{% tab title="Fixed" %}
Panic - UI Flash\
\- Fixed an issue where a unit toggling their PANIC state would not flash their local UI screen red.

Create Account - Password Error\
\- Fixed an issue where users signing up for an account and receiving an error for password standards would not display the proper translation file error message.

API IDs - Auto New Unit Identifier\
\- Fixed an issue where a user setting their API ID before every singing into an emergency page for the first time would cause their new, automatically generated identifier to not contain their API ID by default.

API IDs - Manual New Unit Identifier\
\- Fixed an issue where creating a new unit identifier manually would not have your account API IDs added to the unit information by default.

Webhook - BOLO\
\- Fixed an issue causing the BOLO webhook to send to the general police record URL when being updated.

PDF - Image Section Order\
\- Fixed a race condition causing custom record sections with images to be displayed at the bottom of the PDF after being converted to Base64.
{% endtab %}
{% endtabs %}

### 3.2.0 - 9/12/2020

{% tabs %}
{% tab title="New" %}
i18n - Language Support\
\- Sonoran CAD now supports full i18n language support for non-English translations.

Record PDF - Images\
\- Images are now displayed visually in PDF records.

API - Add/Remove Account Permission\
\- User account permissions can now be added or removed via an API endpoint.

UI Theme Improvements\
\- Improved small UI elements and components to stay consistent with the UI theme.
{% endtab %}

{% tab title="Changed" %}
Police Lookup - DMV\
\- Added DMV record types to the default filter for police and dispatch lookups.

DB Sync - Max Records\
\- Limited the maximum amount of initial search results for DBSync communities to prevent users from requesting tens of thousands of records at a single time.
{% endtab %}

{% tab title="Fixed" %}
Modify Records - Owner\
\- Fixed an issue where updating a record would also update the record owner.

Db Sync - Error on no results\
\- Fixed an issue where DB Sync searches would throw an error if no characters were found under the provided search name.

Voice Commands - Lookup\
\- Fixed an issue causing voice command name and plate lookups to fail.

Db Sync - Lookup Without Specified Column\
\- Fixed an issue where running a lookup via DB sync where a search column (typically middle name) was not provided by the configuration, but was requested via user search, would fail.

Civilian Records - Linked to Unit Identifier\
\- Fixed an issue where creating DMV/civilian records would be linked in "My Files" for the user account's currently selected unit identifier.

PDF - Sections\
\- Fixed an issue causing PDF records to not display sections and custom sections other than the civilian and vehicle ones.

DB Sync - Record Overwrite\
\- Fixed an issue causing database sync to overwrite some fields in custom records on lookup.

Lookup - Switch Tabs\
\- Fixed an issue where searching a license plate and then switching back to a name search would still cause a plate search to be ran on the backend.

Charge Count\
\- Fixed an issue where the charge count field in records would always revert back to 1 after being saved.

DB Sync - Reset to Default\
\- Added additional backend checks to ensure database sync field lists can never be empty. An empty JSON array will now automatically be reset to the default structure.
{% endtab %}
{% endtabs %}

### 3.1.0 - 8/17/2020

{% tabs %}
{% tab title="New" %}
Admin - UI\
\- Improved the admin panel UI to be more consistent with the recent theme changes.
{% endtab %}

{% tab title="Changed" %}
DB Sync - Mixed Lookup\
\- Improved the DB Sync lookup to more properly mix records for communities that may only have character mapping enabled, but not license or vehicle registration mapping enabled.

DMV Record - Status Labels\
\- Updated the DMV status label options to pending/approved/rejected.
{% endtab %}

{% tab title="Fixed" %}
Civilian - DMV Apply\
\- Fixed an issue preventing civilians from being able to apply for other custom DMV record types.

DB Sync - JSON Where Keys\
\- Fixed an issue where DB Sync searches would fail if the user had specific search columns set as a JSON key-value column.

Remove Record - Error\
\- Fixed an issue causing record removal to always result in an error message.

Civilian - Apply for Records\
\- Fixed an issue where civilians applying for a record would not properly set the DMV status as PENDING.

Pending/Supervisor Records\
\- Fixed an issue where pending or supervisor required records would not properly populate in the pending and supervisor panels.

Record Preview - Charges\
\- Fixed an issue causing record charges from not being displayed in the lookup preview.

Webhook - Status Field\
\- Fixed an issue causing the Discord webhooks to display the improper status label for custom status fields.

Record Viewer - Record Number\
\- Fixed an issue causing existing record numbers to display as 'NEW" in the record editor.

PDF - Record Number\
\- Fixed an issue causing the record number to not be displayed in the PDF agency section.

DB Merge - Check Save Record\
\- Fixed an issue where if a community had DB merge enabled but didn't have license or vehicle registration mapping enabled DB merge would still override old records.
{% endtab %}
{% endtabs %}

### 3.0.1 - 8/17/2020

{% tabs %}
{% tab title="New" %}
Civilian - Custom DMV Apply\
\- Civilians can now also apply for custom DMV records other than just licenses and vehicle registrations.
{% endtab %}

{% tab title="Fixed" %}
Download Button - Typo\
\- Fixed a typo in the side menu "Downloads" button.

Custom Records - Duplicate DMV Type\
\- Fixed an issue where the "DMV Record" type was listed twice in the custom record editor.

Account Registration - Error\
\- Fixed an issue preventing new account registrations from receiving proper account registration links.

Civilian - Record Apply Mobile\
\- Fixed an issue where civilians on mobile devices could not apply for a new record.
{% endtab %}
{% endtabs %}

### 3.0.0 - 8/16/2020

{% tabs %}
{% tab title="New" %}
UI Theme - Red\
\- Improved the general UI theme for records, lookup windows, reports center, tabs, etc.

Records System - Overhaul\
\- All existing static record types have been migrated to the new custom records system. This allows communities to completely customize all record types as they would like to.

Custom Reports - Legal Type\
\- Communities can now make custom "Legal" type reports. This could be used for criminal prosecution reports, lawyer reports, etc.

Custom Records - Legal Type\
\- Communities can now make custom "Legal" type records. This could be used for criminal prosecution data, lawyer records, etc.

Law Record - Webhook Event\
\- Communities can now configure a webhook event for whenever a law record/report is added, edited, or removed.

Database Sync - Multiple Character Tables\
\- Database sync now allows you to pull character data from multiple tables. Ex: Your character's name and info comes from the "Characters" table but residence/address information comes from a "housing" table.

Database Sync - JSON Fields\
\- Database sync now allows you to easily add JSON columns in your mapping.

Reports Center - Records\
\- The reports center now includes both records and reports. This allows you to view all of your identifier's past records and reports, and complete supervisor actions on both custom records and reports.

Reports Center - Records\
\- The reports center now includes both records and reports. This allows you to view all of your identifier's past records and reports, and complete supervisor actions on both custom records and reports.

Custom DMV Records - Apply\
\- Custom DMV records with a "STATUS" type field can be applied for by civilians without DMV add permissions.

Reports Center - Filter Types\
\- You can now filter and view record/report types in the report center. This allows you to view your fire and EMS reports in the police page if necessary.

Emergency Call - Push Event\
\- Push events are now sent for new 911/emergency calls in the CAD to your local game server.

Records Lookup - Overhaul\
\- The lookup UI has been updated with filtering types, a new search by identifier, search by ID, reports, and more.

DMV - Overhaul\
\- The DMV page now implements the new lookup and record center windows to easily search for pending records, records requiring supervisors, etc.

Admin - Account Last Login\
\- User account "Last Login" timestamps now show in the admin accounts menu.

Database Sync - Overhaul\
\- The database sync system has been completely rewritten to handle all of the new custom record formats. This creates a more streamlined code base and allows for more advanced features.

Database Merge - Overhaul\
\- The entire database merge functionality has been rewritten to work with new custom records and reports.

Reports Center - Supervisor Completion\
\- Completing all supervisor fields on a record/report in now has local clientside checks to automatically remove the record from your local UI. This removes the need to manually refresh the panel to update pending reports/records.

Custom Records - PDF Section Headers\
\- Custom records now display the custom section name in PDF records.

Custom Fields - Required and Supervisor\
\- If a field is required and supervisor only, the label color displays as orange instead of red to remain visible.

Kick Unit API - Not Found\
\- Added additional handling and 404 response for the KICK\_UNIT API endpoint if the API ID does not exist.

Emergency Code - Australia\
\- Communities can now select "Australia" as their geographical customization setting to change the emergency code to 000.

Custom Record Editor - Section Expansion\
\- Custom sections in the custom record editor can now be expanded or collapsed. This makes organization much cleaner when working with large custom record types.

Admin - Account API IDs\
\- User account API IDs are now displayed in the admin account menu.

Custom Records - Wipe\
\- All custom record and report types can now be wiped in the admin "Advanced" menu.

Admin - Dark Dropdowns\
\- Updated UI dropdown colors for a more consistent dark theme.

API - Set API ID\
\- API IDs can now be set via an API call. This allows for automated API ID configuration via in-game command, or other options.

API - Penal Codes\
\- Penal codes can now be set via an API call.

Record Editor - Action Bar Display\
\- The action bar on the record editor now always displays, but will have the buttons disabled with a tooltip explaining any insufficient permissions.

UI Render Exception Handling\
\- Added a new UI render exception handling system for custom records. This prevents specific corner cases where a malformed custom record will break rendering.

Record Viewer - DB Sync\
\- The record viewer now shows if the record is from "Database Sync" in the top header.

Civilian - Select Server ID\
\- Civilians can now change their current server ID. This allows 911 calls to send to the correct server for communities utilizing multiple servers.

Police Supervisor - Permission\
\- Police record supervisor fields now require the police supervisor account permission to be filled out.

Fire Supervisor - Permission\
\- Fire record supervisor fields now require the fire supervisor account permission to be filled out.

Medical Supervisor - Permission\
\- Medical record supervisor fields now require the medical supervisor account permission to be filled out.

DMV Supervisor - Permission\
\- DMV record supervisor fields now require the DMV supervisor account permission to be filled out.

Law Supervisor - Permission\
\- Law record supervisor fields now require the law supervisor account permission to be filled out.

Law Record - Add Permission\
\- Users with the law record ADD permission can add new law records/reports.

Law Record - Edit Permission\
\- Users with the law record EDIT permission can edit law records/reports.

Law Record - Remove Permission\
\- Users with the law record REMOVE permission can remove law records/reports.

API - Parse Improvements\
\- Added massive efficiency and error information parsing to the API calls. This improves system performance for failed API exceptions, and provides more detailed information to developers.

API - Remove 911 Call\
\- You can now remove existing emergency/911 calls via API.

API - Lookup Record by Int\
\- A new API endpoint has been added to search for records based on integer values representing the record status, supervisor status, associated identifier, or unique record ID.

API - Lookup - Types\
\- API lookups now require a "types" enumerator/integer array to filter specific record types to search.

API - Get Units by ID\
\- You can now search and retrieve unit identifiers via API with the user's API IDs.

API - New Record\
\- You can now add new custom records via API.

API - Edit Record\
\- You can now modify existing custom records via API endpoint.

API - Get Record Templates\
\- You can now get your community's custom record templates via an API endpoint.

API - Get Account\
\- You can now retrieve detailed user account information via API.
{% endtab %}

{% tab title="Changed" %}
API ID - Require Community Login\
\- The API ID section in the settings modal requires that the user is actively logged into a community to be set.

API Lookup - Single Method\
\- API record lookups have been consolidated to a single "Lookup" endpoint. There is no longer a separate name and plate search endpoint.

Custom Record Limits - Increase\
\- Custom record limits have been increased to account for all of the new custom record/report types.

API - Remove Record Endpoint Path\
\- The remove record endpoint has been migrated from the "emergency" path to the "general" API endpoint path to be consistent with the new add and edit record endpoints.

API - Lookup Record Endpoint Path\
\- The lookup API endpoint has been migrated to the /general API endpoint path to be consistent with the new record endpoints.
{% endtab %}

{% tab title="Fixed" %}
Live Map - Duplicate Server Names\
\- Fixed an issue where deploying your live map with two identical server names would cause an overlap issue with our dynamic reverse proxy and override the first server's proxy address/port.

Custom Records - Type\
\- Fixed an issue where custom records would be classified internally as the incorrect type. UI prevention and better backend detection methods were implemented.

Report Center - Exit Tab\
\- Fixed an issue where the report center window could not be closed from the minimized tab.

Search By Identifier - Online Units\
\- Fixed where unit options in a search by identifier method would only show currently online units.

Version Downgrade - Live Map Disable\
\- Fixed an issue where the live map was not disabled when a community CAD's version was downgraded.

Lawyer - Lookup Permissions\
\- Fixed an issue causing users with the lawyer permission only to be unable to lookup records.

Charges - Manual Entry\
\- Fixed an issue preventing issues from manually entering a charge title on a record that does not exist.

NEW\_DISPATCH - Call ID\
\- Fixed an issue where the NEW\_DISPATCH push event would not contain the new call ID.
{% endtab %}
{% endtabs %}

### 2.4.1 - 7/11/2020

{% tabs %}
{% tab title="New" %}
1. My Account - Side Menu Access
   * The account editor can now be more easily accessed through the side navigation menu.
2. Search Vehicle and Civilian - Uppercase
   * Vehicle and Civilian searches for records now properly capitalize all names and information.
{% endtab %}

{% tab title="Changed" %}
1. Account Username - Table Restructure
   * Community account storage in databases has been more properly structured to pull based on the global account UUID for a more efficient way to update account usernames.
{% endtab %}

{% tab title="Fixed" %}
1. Selected Server - Invalid
   * Fixed an issue where users with non-existent or removed community server IDs selected could not login to an emergency page. They are now forcefully set back to a valid server and redirected to the community menu.
2. Reports - Minimized
   * Fixed an issue causing minimized report tabs to not be able to be re-opened.
3. Transfer and Remove CAD
   * Fixed an issue where transferring or removing your CAD failed to send an email when the DB timestamp is null.
{% endtab %}
{% endtabs %}

### 2.4.0 - 6/29/2020

{% tabs %}
{% tab title="New" %}
1. Image Uploading
   * Users can now directly upload images to our AWS S3 bucket, as opposed to manually pasting in the image URL.
2. Payment Center - Modify Card
   * The payment center now allows you to easily change the billing information on your active subscription.
3. Lookup Tables - Sort Columns
   * Allowed all default record type preview columns to be sortable.
{% endtab %}

{% tab title="Fixed" %}
1. Legacy Custom Records - Mask
   * Fixed an issue where legacy custom record text and textfield types would not save or display user input due to a missing mask.
2. Custom Fire Records - Permission
   * Fixed an issue where submitting new custom fire reports and records incorrectly required the medical record add permission.
3. DBSync - Connection String Builder
   * Added a new common connection string builder to prevent issues with user passwords containing SQL escape characters.
4. Report - Remove - Clientside
   * Fixed an issue where custom reports would not be automatically removed from the client view's "My Reports" section when deleted.
{% endtab %}
{% endtabs %}

### 2.3.3 - 6/24/2020

{% tabs %}
{% tab title="New" %}
1. Supervisor - DMV
   * Supervisor fields for custom DMV records are now restricted to users that have the DMV page permission.
2. Civilian - DMV Records - Vehicle Search
   * Custom DMV records now allow civilians to search for a registered vehicle to quickly add it to the field.
3. Custom Records - Checkbox - Required and Supervisor States
   * The checkboxes field on custom records now has color changes for required and supervisor states.
4. Custom Records - Image - Required and Supervisor States
   * The image field on custom records now has color changes for required and supervisor states.
5. iOS Padding - Header/Footer
   * Improved header and footer padding for iOS devices with the "notch"
{% endtab %}

{% tab title="Changed" %}
1. Custom Records - Checkboxes - Centered
   * Custom record checkboxes are now centered in the field column.
{% endtab %}

{% tab title="Fixed" %}
1. Toolbar Overlap - iOS
   * Fixed an issue where the top toolbar overlapped the pages for some iOS app users.
2. DMV Records - Civilian
   * Fixed an issue where civilians could not submit a custom DMV record.
{% endtab %}
{% endtabs %}

### 2.3.2 - 6/24/2020

{% tabs %}
{% tab title="Fixed" %}
1. Fixed an issue where the civilian section would fail to display on emergency pages.
{% endtab %}
{% endtabs %}

### 2.3.1 - 6/23/2020

{% tabs %}
{% tab title="Fixed" %}
1. Fixed an issue where legacy records and custom reports would fail to display the old "input" field type
{% endtab %}
{% endtabs %}

### 2.3.0 - 6/23/2020

{% tabs %}
{% tab title="New" %}
1. Custom Records - DMV
   * Custom DMV records can now be created. This could include things like custom licenses, firearms registrations, etc.
2. Custom Records - Image
   * Custom records and reports now have an image type field.
3. Custom Records - Date
   * Custom records and reports now have a date type field.
4. Custom Records - Time
   * Custom records and reports now have a time type field.
5. Custom Records - Checkboxes
   * Custom records and reports now have a checkbox type field.
6. Custom Records - Mask
   * Custom record and report fields can now have a "mask" specified to force users to follow a specific alphanumeric format, include symbols, and more.
7. Unit Status - Accent Color
   * The red accent color on the top header and side drawer now changes according to the unit status.
8. Browser Check - Connection
   * The UI now checks if your browser/device supports local and session storage to prevent people from using incompatible browsers.
9. Record and Report Dropdown - No Type Check
   * If there are no available record or report types for the page, the dropdown menu will contain an option explaining where an admin can go to add custom records and reports. This helps prevent confusion and support tickets.
{% endtab %}

{% tab title="Changed" %}
1. Disconnect - Toolbar
   * The disconnection banner now takes place in place of the top toolbar.
{% endtab %}

{% tab title="Fixed" %}
1. Quick Links - Remove
   * Fixed an issue where quick links could not be removed from the UI.
2. Lookup Name - Middle Character
   * Fixed an issue where lookups with a middle initial would fail due to an SQL query syntax error.
3. Update Community Data - Websocket Limit
   * Fixed an issue where updating community data could hit a websocket data transfer limit.
4. Lookup - Multiple Value Filter
   * Fixed an issue with SQL syntax not properly filtering record searches with a first and last name.
{% endtab %}
{% endtabs %}

### 2.2.0 - 6/19/2020

{% tabs %}
{% tab title="New" %}
1. Quick Links
   * Communities can now add "quick links" with custom colors, labels, and URLs in all emergency pages.
2. Custom Records/Reports - PDF
   * Added the PDF print option to all custom records and reports.
3. Custom Records - Multiple Civs
   * Custom records and reports can now have up to three independent and searchable civilian characters.
4. Custom Records - Multiple Vehicles
   * Custom records and reports can now have up to three independent and searchable civilian vehicles.
5. Custom Records - Disable Originals
   * Communities can now disable the default police records and replace them with their own custom versions.
6. Custom Records - Name Pre-made Sections
   * You can now set a custom section header name for all pre-made sections in custom records/reports.
7. Record Webhooks - All Caps
   * All wehbook text values are now capitalized by default to reflect the values in the UI.
8. Lookup - Custom Records Tab
   * When running a lookup with only custom record results, the lookup preview will automatically select the first record tab category.
9. Charges - Preview
   * Charges in custom records and reports are now previewed in the lookup table.
10. Reset Password - Email Expiration
    * Reset password emails now properly expire and can be re-sent after 15 minutes.
11. Transfer CAD - Email Expiration
    * CAD transfer emails now properly expire and can be re-sent after 15 minutes.
12. Remove CAD - Email Expiration
    * Remove CAD emails now properly expire and can be re-sent after 15 minutes.
{% endtab %}

{% tab title="Changed" %}
1. 911 Caller - Dispatch Origin - Geographical Settings
   * Changed the "911 Caller" option to a more generic "Caller" value for communities not in the US.
{% endtab %}

{% tab title="Fixed" %}
1. Custom Records - Charges
   * Fixed an issue causing the charges section in custom records to not properly appear.
2. Custom Record Updated - Agency Info
   * Fixed an issue causing the agency header to be updated when editing an existing custom record.
3. Civilian Search - Page Type
   * Fixed an issue where the civilian page records lookup would cause an unknown type server error.
4. Community Transfer - Permissions
   * Fixed an issue where transferring your community to a new account would not ensure the new owner has the new fire and medical permissions.
5. New Community - Permissions
   * Fixed an issue where registering a new community would not ensure the new owner has the new fire and medical permissions.
6. Fire Records - Webhook
   * Fixed an issue causing new and modified fire records to use the police webhook.
7. Medical Records - Webhook
   * Fixed an issue causing new and modified medical records to use the police webhook.
{% endtab %}
{% endtabs %}

### 2.1.0 - 6/12/2020

{% tabs %}
{% tab title="New" %}
1. Admin - Custom Records
   * Custom record types can be created and added for emergency services to fill out.
2. Admin - Custom Incident Reports
   * Custom incident reports can be generated and linked to other record types.
3. Fire - Custom Reports, Records, and Lookup
   * Users on the fire page now have access to custom medical reports, records, and lookups.
4. Medical - Custom Reports, Records, and Lookup
   * Users on the EMS page now have access to custom medical reports, records, and lookups.
5. 911 Calls - Clear All
   * Dispatchers with the admin permission can now clear all active 911/emergency calls. This is particularly useful for servers with automatic 911 calls via API.
6. Live Map - External Window
   * The live map can now be opened into a new external window for better viewing.
7. Webhooks - Fire and EMS
   * Fire and EMS record and report actions are now supported in the Discord webhook config panel.
8. API Endpoint - Apply Permission Key
   * This endpoint allows you to apply permission keys to a user account in your community.
9. API Endpoint - Ban User
   * This endpoint allows you to ban or unban a user in your community.
10. Dispatch Call - API Metadata
    * Dispatch call objects now have a hidden metadata dictionary field for API call information.
11. Disconnect - Status Page Hyperlink
    * Added a "Server Status" button to the disconnected notification bar.
12. Map Deploy - Server Name Characters
    * Added additional checks to the user live map deploy process to check for non alphanumeric characters for the map's subdomain.
13. Social Media Links
    * Social media links to our Twitter, Instagram, YouTube, and Discord have been added to the side menu.
{% endtab %}

{% tab title="Changed" %}
1. AWS SES
   * We've migrated all automated email services over to AWS SES to help maintain compliance and efficiency for all user verification emails.
2. Payment Center - UI
   * Improved the UI, fixed common issues, modified error messages, and simplified the payment center checkout form.
3. Discord Webhook Config - UI
   * Improved the Discord webhook config UI and mobile experience.
{% endtab %}

{% tab title="Fixed" %}
1. User Ban
   * Fixed an issue causing Discord webhooks and user ban information to be incorrect.
2. Development URL Issues
   * Fixed an issue causing users with a specific username in a validation URL to connect to the wrong backend service.
3. Unit Logoff Events
   * Fixed an issue causing unit logoff events to not properly fire and be sent to community listeners.
4. Join Community Logo
   * Fixed an issue causing communities with a thin narrow logo from having text cutoff in the join community preview.
5. Attach Unit(s) - API
   * Fixed an issue with the attach unit(s) API call where an SQL connection was not properly opened. Also fixed a small API documentation issue for this particular call.
6. Unit Status - API Push Event
   * Fixed an issue with the unit status API call sending community listeners a push event with the changed unit identifier ID integers instead of the proper unit JSON data.
7. Admin Panel - Loading without Permissions
   * Fixed an issue causing the admin panel to continually load if the user does not have permissions to view user accounts.
{% endtab %}
{% endtabs %}

### 2.0.0 (Full Release) 5/16/2020

{% tabs %}
{% tab title="New" %}
1. Branding Logo
   * We've switched over to Sonoran CAD's new official logo!
2. API Endpoints:
   * Attach Units
   * Get Calls
   * Get Active Units
   * Unit Status
   * Kick Unit
   * New Dispatch
   * Remove Record
   * New Vehicle Registration
   * Edit Vehicle Registration
   * New License
   * Edit License
   * New Character
   * Edit Character
   * Remove Character
   * Get Characters
   * Check API ID
3. Server Push Events:
   * Unit Login
   * Unit Logout
   * Unit Status Update
   * Dispatch Event
   * Unit Call Clear
4. Integration Plugins
   * Call Commands
   * Check API ID
   * Live Map
   * Locations
   * Lookups
   * Postals
   * Push Events
   * Traffic Stop
   * Unit Status
   * Update Check
   * WraithV2
5. Page Transitions
   * All pages now have an improved smooth loading transition for a more refined user experience.
6. Vehicle Registration - Expiration Date
   * Added a vehicle registration expiration date field.
7. API Key - Generate New
   * Community owners can now request and generate a new API key in the admin menu.
8. Disconnection Banner
   * Server disconnection notices have been moved to a solid banner at the top of the screen.
9. UI Theme Changes
   * Updated UI layouts, accents, colors and more throughout the application.
10. Live Map - One Click Install
    * If your server uses the popular Live Map resource, you can now instantly configure and enable this all from within the admin panel. Sonoran CAD hosts your live map for you, so all you need to do is drag and drop our plugin into your resources folder.
{% endtab %}

{% tab title="Fixed" %}
1. Register - Same Username - Conflicting Keys
   * Fixed an issue where users could re-register the same username with a different email account after the expiration window. This caused user's to be unable to validate their user account.
2. Community Card
   * Fixed an issue where community cards with a wider aspect ratio would not properly expand down to fill the whole area in the community selection menu.
{% endtab %}
{% endtabs %}

### 1.22.0 (Beta) 5/07/2020

{% tabs %}
{% tab title="New" %}
1. Backend Migration
   * All backend and database services have been migrated over to a new docker container system with proper CI/CD integrations. A new development API path has been opened to work with community developers.
{% endtab %}

{% tab title="Fixed" %}
1. Register - Same Username - Conflicting Keys
   * Fixed an issue where users could re-register the same username with a different email account after the expiration window. This caused user's to be unable to validate their user account.
{% endtab %}
{% endtabs %}

### 1.21.1 (Beta) 5/01/2020

{% tabs %}
{% tab title="New" %}
1. Postal Code - Allow Letters
   * Postal code values in the call editor and department editor can now include letters for non-American communities.
2. Vehicle Registration - Unique Plate
   * Added a check to prevent users from creating a new vehicle registration with a license plate that already has a registration.
3. Email Expiration
   * Account verification emails are now properly invalidated and can be resent after 15 minutes.
{% endtab %}

{% tab title="Changed" %}
1. Active Calls - Order
   * Active dispatch calls now properly sort in descending order by default, with the latest calls at the top.
2. 911 Webhook - Geographic Customization
   * Changed the 911 Discord webhook information to "Emergency" for non-American communities.
3. Rate Limits - Increased
   * Increased internal websocket rate limits to help prevent users from being temporarily blocked with false positives.
{% endtab %}

{% tab title="Fixed" %}
1. Email Address - Space
   * Added additional server side checks to prevent users from registering an email with a space.
2. Record Wipe - Error Message
   * Fixed an issue where the error message for non community owners trying to wipe records would not display.
3. Identifier - Blank
   * Added a new check to set unit numbers to 'NOT SET' to prevent an issue where entirely blank units would be displayed improperly.
4. Unban User - Wording
   * Fixed an issue where the confirmation prompt for unbanning a user was still phrased as 'Ban User'
{% endtab %}
{% endtabs %}

### 1.21.0 (Beta) 4/22/2020

{% tabs %}
{% tab title="New" %}
1. Global Configurable Hotkeys
   * All web and desktop users can now configure hotkeys for panic and unit status changes. Global hotkeys are also supported in the desktop application and will trigger regardless of whether or not the application is visible and focused.
2. PDF - Caps
   * Forced all PDF text fields to capitalized text. This aids in consistency between the displayed values in the record editor and exported PDF documents.
3. Discord Webhooks - Caps
   * Forced all Discord record fields to capitalized text. This aids in consistency between the displayed values in the record editor and Discord webhook notifications.
{% endtab %}

{% tab title="Fixed" %}
1. Remember Me - Changed ID
   * Fixed an issue where logging into your default community would produce an error message if your community has recently changed their ID.
2. Lawyer - Civ
   * Fixed an issue where layers could not properly open or view civilians in a records search.
3. PDF - Date
   * Fixed an issue showing the officer's name label in the PDF agency section as 'Date'
{% endtab %}
{% endtabs %}

### 1.20.4 (Beta) - 4/19/2020

{% tabs %}
{% tab title="New" %}
1. Community ID - Change
   * Community owners can now change their community ID in the admin panel.
2. Admin - Wipe Records
   * A CAD wipe can be initiated in the admin panel and can be configured to remove all specified record types.
3. Admin - Tutorials
   * Added a new tutorials button in the admin menu and updated existing tutorial links.
{% endtab %}

{% tab title="Changed" %}
1. Admin Menu - Buttons
   * Updated all admin panel refresh and other buttons to a more consistent styling.
{% endtab %}

{% tab title="Fixed" %}
1. Incoming 911 TTS
   * Fixed an issue causing the "Incoming 911" TTS notification from not playing properly.
2. Version Check - Blank Version
   * Added additional error handling to the version check notification to prevent an issue displaying the notification with the latest version for some users.
3. Community ID - Overlap
   * Fixed an issue causing the community ID badge in the side menu to overlap onto the page for communities with a long ID.
4. Desktop - External Links
   * Fixed an issue where opening the external tutorial site in the desktop app would not open a new browser window.
5. Civilian - Exit Editor
   * Fixed an issue where closing the civilian character editor would swap your currently selected character back to the first character, and not the existing one a user had selected.
{% endtab %}
{% endtabs %}

### 1.20.3 (Beta) - 04/17/2020

{% tabs %}
{% tab title="New" %}
1. Admin - Ownership Authentication
   * Added a new feature for owners of the community to retrieve a unique key to prove ownership. This aids in authenticating users in support tickets, for manual requests particularly in our upcoming customer support app.
2. Side Bar - Community ID
   * Added a small badge to display the current community ID in the side navigation bar. This aids in support questions.
3. Side Bar - Tutorials
   * Added a navigation button to our new guides and tutorials site in the side bar menu.
4. Version Check - UI
   * Added a new popup to inform users if they are running an outdated version of Sonoran CAD.
{% endtab %}

{% tab title="Changed" %}
1. Easter Egg - Removed
   * Removed a voice command Easter egg discovered by users.
{% endtab %}

{% tab title="Fixed" %}
1. Penal Code - Configuration
   * Fixed an issue where new or updated penal codes were not reflected until a page refresh.
{% endtab %}
{% endtabs %}

### 1.20.2 (Beta) - 04/15/2020

{% tabs %}
{% tab title="Fixed" %}
1. Electron Uninstaller - Warning
   * Fixed an issue with the latest NSIS uninstaller for the desktop app that caused a false positive with Windows Defender.
2. Admin - Penal Codes
   * Fixed an issue where penal codes would not populate in the admin menu.
3. PDF - Charge Number
   * Fixed an issue causing the charge numbers in PDF records to be zero based instead of one based.
4. Warrant - Closed
   * Fixed an issue causing closed warrants to still be announced over TTS.
5. BOLO - Active
   * Fixed an issue causing closed warrants to still display locally for users in the active warrants window when closing the record.
{% endtab %}
{% endtabs %}

### 1.20.1 (Beta) - 04/13/2020

{% tabs %}
{% tab title="New" %}
PDF Print - Mobile

* PDF printed records are now accessible on mobile.

BOLO - PDF

* BOLO records can now be printed to PDF format.

Vehicle Registration - PDF

* Vehicle registration records can now be printed to PDF format.

License - PDF

* License records can now be printed to PDF format.

PDF Records - File Name

* PDF downloaded records and call logs now have a proper file name when saving.

Character DOB - Age

* Character age now properly auto-calculates consistently when changing your character's DOB.
{% endtab %}

{% tab title="Fixed" %}
Call History

* Fixed an issue causing call history to pull the oldest closed calls instead of the most recent.

DMV Record - New

* Fixed an issue where civilians could not edit their initial vehicle registration information without the DMV add or edit permission.

Vehicle Citation - Pace Type

* Fixed an issue causing the vehicle citation pace type dropdown to be blank.

New BOLO - TTS Undefined

* Fixed an issue where a new BOLO audio alert would list the name and plate as undefined.

Warrant Status

* Fixed an issue causing warrant statuses to not be properly saved.

DMV - Pending Records

* Fixed an issue causing pending records to not be shown properly in the DMV pending section.

PDF Records - Desktop

* Fixed an issue causing PDF record downloads to be blank in the desktop application.
{% endtab %}
{% endtabs %}

### 1.20.0 (Beta) - 04/12/2020

{% tabs %}
{% tab title="Changed" %}
Records System - Backend Restructure

* The records structure and storage system has been completely overhauled to be more efficient and consistent. This also makes way for future API calls for record lookups.

DBSync - Character Hide ID

* Character ID (often Steam IDs) are no longer displayed on the UI when searching for a character with database sync.

Dispatch - Clear Panic Permissions

* Fixed an issue where dispatchers could not clear a unit's PANIC state if they did not have police, fire, or EMS permissions.

DBMerge - Client Disable Check

* The database merge toggle is now properly disabled client-side to avoid false security warnings.

New Record - BOLO

* BOLO record creation has been moved to the standard new record section.
{% endtab %}

{% tab title="Fixed" %}
Penal Code - Freeze

* Fixed an issue causing some browsers to freeze, lag, or become unresponsive with multiple penal code windows open at once.

Penal Code - Remove Wording

* Fixed the incorrect phrasing when removing a penal code.

Penal Code - Empty Bond

* Fixed an issue causing records to not save if a penal code bond amount or charge count was removed and left empty.
{% endtab %}
{% endtabs %}

### 1.19.1 (Beta) - 04/05/2020

{% tabs %}
{% tab title="New" %}
Record Flags - Customize

* Communities can customize their record flag types.
{% endtab %}

{% tab title="Changed" %}
Pricing Page - Redesign

* Improved and updated the pricing page with more information.
{% endtab %}

{% tab title="Fixed" %}
Self-Dispatch - Calls

* Fixed an issue causing the active calls and call history to not load properly for units in self-dispatch mode.
{% endtab %}
{% endtabs %}

### 1.19.0 (Beta) - 04/04/2020

{% tabs %}
{% tab title="New" %}
Call History

* Previously closed calls can now be viewed for record purposes.

Call History - PDF Print

* Calls in the call history section can now be exported to a PDF record.

Lawyer Page

* Users with the lawyer permission can lookup all records on a name or plate in the lawyer page.

Voice Customization

* Users can now change the text-to-speech voice in the settings popup.

Active Calls - Close

* You can now also close a dispatch call by clicking the call in the active calls window, and selecting "Close Call"

Call ID

* Dispatch Call IDs are now displayed in the active calls list as well.
{% endtab %}

{% tab title="Fixed" %}
Unit Group - Status Change

* Fixed an issue where a unit in a unit group changing their status would change the status of all unit groups.

Character DOB - Disabled

* Fixed an issue preventing non Database Sync communities from editing the civilian DOB field.

Dispatch - Preview Call

* Fixed an issue where dispatchers could not properly preview a call on the active calls list.

Dispatch - Signal

* Fixed an issue where an active signal would not be displayed for dispatchers first loading the page.
{% endtab %}
{% endtabs %}

### 1.18.0 (Beta) - 03/30/2020

{% tabs %}
{% tab title="New" %}
Database Merge

* Database merge can now be enabled in the in-game integration panel for Pro communities. This allows you to save additional information in records not provided by your in-game database. This additional data will be stored by Sonoran and merged with your Database Sync records.
{% endtab %}

{% tab title="Changed" %}
Custom Login - Header Branding

* The custom login page now displays your community name in the top header instead of "Sonoran CAD"
{% endtab %}

{% tab title="Fixed" %}
1. DbSync Character Gender
2. Fixed an issue where database sync character genders wouldn't be properly displayed.
{% endtab %}
{% endtabs %}

### 1.17.1 (Beta) - 03/28/2020

{% tabs %}
{% tab title="New" %}
1. Call Preview
2. You can now open an additional pop-out window to preview a call without having to self-attach or open it in your existing editor.
{% endtab %}

{% tab title="Changed" %}
1. Penal Code: Fine Amount
2. Made the penal code "Bond/Fine Amount" wording consistent in the admin panel and charges section in records.
{% endtab %}

{% tab title="Fixed" %}
1. 10-Codes: Empty
2. Fixed an issue where 10-codes in the popout window would not display properly for units.
3. Active Calls - 10-Code
4. Fixed an issue causing the active calls table from not properly displaying the new 10-code format.
{% endtab %}
{% endtabs %}

### 1.17.0 (Beta) - 03/00/2020

{% tabs %}
{% tab title="New" %}
10-Codes: Redesign

* The 10-Code system has been overhauled to be much more simplistic and customization. You can now more quickly enter in 10-Codes in the new admin UI. All 10-Codes are entered solely as text to no longer limit communities who do not use 10-Codes.

Penal Codes - Custom Bond and Charge Types

* Communities can now customize the penal code bond and charge type values to be selected from. This allows communities outside the US, or communities that do not use the standard penal code type and bond options to specify these values.

Dispatch - 10-Code

* 10-Codes are no longer required to create a dispatch, and do not have to be entered as a specified 10-Code from the admin page.

Server Mode - European/UK

* The admin customization menu now allows you to toggle your community's geographic settings. Changing from American to European will rephrase 911 to 999 and more!
{% endtab %}

{% tab title="Fixed" %}
1. Custom Login Page - Add Account
2. Fixed an issue where creating a new account from a custom login page would not automatically add their account to the community,
3. Voice Commands - Custom Status
4. Fixed an issue where voice commands to change a unit's status code would not work with customized status options.
5. Arrest Record - DBSync Vehicle
6. Fixed an issue where arrest reports with a database sync vehicle added could cause the record to not save if the vehicle type was not specified.
{% endtab %}
{% endtabs %}

### 1.16.0 (Beta) - 03/24/2020

{% tabs %}
{% tab title="New" %}
Unit Grouping

* Units can now be grouped together to more easily dispatch units riding together.

New Unit - Editor

* Loading in the Police, Fire, or EMS page for the first time will auto-open the unit editor to help users set their initial unit information more quickly.

Civilian - Limit Characters

* Communities can now set a limit on how many characters each account can have.

Civilian - Limit Licenses

* Communities can now limit the number of licenses a single civilian can have.

Civilian - Limit Vehicles

* Communities can now limit the number of vehicle registrations a single user can have.

Session Invalidate - UI

* The session expiration/invalidation and invalid cookies alert is now a built-in UI element that will navigate the user back to the login page, as opposed to a standard web alert.
{% endtab %}

{% tab title="Changed" %}
1. Rate Limit - Increase
2. Rate limit values have been increased to prevent blocking users with a legitimate higher frequency of requests.
3. Custom Login Page - Query Strings
   * In order to reduce the strain on Sonoran CAD's servers, all custom login pages must now specify multiple attributes as query strings. You can copy and paste the entire URL from the Custom Login Page section in the Admin Customization menu.
4. Custom URL - Format
5. Custom login URLs are now more properly generated to replace any spaces with the %20 value.
6. Custom Login - Email Query Strings
7. Updated the create account and forgot password URL generators to include all the query strings for a custom login page if the user creates a new account or resets their password on a custom login page.
{% endtab %}

{% tab title="Fixed" %}
1. Unit Login - Active
2. Fixed an issue where units would not show in the active units window for the local user.
3. Dispatch Login - Active Unit
4. Fixed an issue causing dispatchers to display as an online unit.
5. General Citation - Save
6. Fixed an issue where saving/updating an existing general citation causes the database to set the last name as the first name. The record was saved in the database as "First First" even though the data in the record was "First Last".
7. General Citation - Count
8. Fixed an issue causing the general citation tab count to display the wrong number.
9. DBSync - Remove Character
10. Fixed an issue where users could not un-link a database sync character.
{% endtab %}
{% endtabs %}

### 1.15.2 (Beta) - 03/22/2020

{% tabs %}
{% tab title="New" %}
1. Websocket Optimization
   * Started large improvements for backend service websocket calls to help reduce strain on our servers.
2. Rate Limiting - UI and Blacklist
   * A new in-depth rate limiting system ensures users do not abuse backend endpoints, displays convenient UI notifications, improves security, and more.
{% endtab %}
{% endtabs %}

### 1.15.1 (Beta) - 03/18/2020

{% tabs %}
{% tab title="New" %}
1. Custom Login Page - Query Strings
   * In order to reduce the strain on Sonoran CAD's servers, all custom login pages must now specify multiple attributes as query strings. You can copy and paste the entire URL from the Custom Login Page section in the Admin Customization menu.
2. Edit Unit - Permission Label
   * Changed the edit identifier label to have the same label name on both account permissions and permission keys.
{% endtab %}

{% tab title="Fixed" %}
1. Community Branding
   * Fixed an issue where plus communities had branding removed in the top header instead of Pro communities.
2. Community Card - Subtitle Overflow
   * Fixed an issue where communities with a long subtitle value would overflow on the community card. The subtitle now properly cuts off with an ellipsis.
3. DMV Permission
   * Fixed an issue where DMV record statuses could not be edited in the civilian page without the DMV page permission.
4. Lua Resource - Download Links
   * Fixed an issue where the Lua Resource download buttons in the admin panel downloaded the outdated files instead of the latest GutHub release.
5. API Tutorial - Download
   * Fixed an issue where some tutorial video links were downloads for desktop application users.
6. Record Add Vehicle - Plate Search
   * Fixed an issue where searching for a vehicle to add to a record would not work if searching by the plate number.
7. DMV - Database Sync
   * Fixed an issue where license and vehicle registration searches in the DMV page would return no or limited results for communities with database sync.
8. Database Sync - Civilian Link
   * Fixed an issue where you could not view your database sync linked characters unless you also had license or vehicle registration mapping enabled as well.
{% endtab %}
{% endtabs %}

### 1.15.0 (Beta) - 03/04/2020

{% tabs %}
{% tab title="New" %}
1. In-Game /911 and /311
   * Our easy to install integration script now also includes a /911 and /311 command to send emergency and non-emergency calls directly to your dispatchers!
2. Multiple Servers
   * Communities can now configure multiple "servers" in their CAD. This is for communities that have more than one server. All active units and dispatching is kept separate between servers, but all records are shared. To change your server, users can select the server from the drop-down in the top left.
3. Unit - Self Clear
   * Units can now remove themselves from their active dispatch call.
4. Pricing Page
   * A new pricing page helps our team direct users to the most up to date pricing and feature information.
5. Inactive Communities
   * Communities that have no one sign in for 30 days will be automatically removed from the database.
6. Custom Login Page - Instructions
   * The custom login page section now includes additional instructions, informing users to enter their community ID into the index.html file.
7. Database Sync - Tutorial
   * Added a database sync tutorial link in the admin panel.
8. Self Dispatch - Permission
   * Self dispatching is now a permission separate from the dispatch permission.
9. Webhook - Tutorial
   * Added a webhook tutorial link in the admin panel.
10. Permission Key Applied - Notice
    * When a permission key is correctly applied, the user is now notified with an alert.
11. Community Customization - Tutorials
    * Added PDF tutorial links in the community customization menu for query strings and voice command options.
{% endtab %}

{% tab title="Changed" %}
1. Empty Lookup
   * Prevented users from running a blank/empty police or records lookup.
2. Invalid Permissions - Error
   * Included more details into a missing permissions security error.
3. Community Limit - Error
   * Added more detail in community limit reached errors from the server side.
4. Signal - Numeric Check
   * Signal values can now only be a numeric value of up to 4 digits.
5. Header - Community Name
   * Changed the header formatting to ellipsis to better accommodate for long community names.
6. Nav Bar - Version
   * The application version number is now displayed in the bottom of the side navigation menu.
7. Community Card - Ellipsis
   * Changed community card title/header to cut off into an ellipsis if the name is too long. This prevents the remove icon from being bumped down to the next line.
8. Civilian Card - Header
   * Forced all civilian card headers (name) to be capitalized.
9. Privacy Policy - Login Only
   * The privacy policy button only displays in the side nav bar on the login screen. This helps reduce clutter on the community pages.
{% endtab %}

{% tab title="Fixed" %}
1. Ban User
   * Fixed an issue where user could not be banned, as the backend was incorrectly checking that the user being banned was the community owner and not the other way around.
2. Dispatch Note - Webhook
   * Fixed an issue where dispatch call notes were not shown in Discord webhooks.
3. Lookup - Civilian
   * Fixed an issue where the civilian results on a lookup would not show unless a regular record was also shown.
4. Call Closed - Notes
   * Fixed an issue where the call notes would still be displayed when a call was closed.
5. Call Notes - Disable
   * Fixed an issue where call notes could be added when the unit does not yet have an active call.
6. Add Note - Button Width
   * Fixed an issue where the "Add Note" button on the call editor wouldn't take up the full space for mobile devices.
7. Civilian - DMV Records
   * Fixed an issue causing civilians to need the DMV Record Add permission to apply for a new DMV record with the default "PENDING" status. Civilians can now properly apply for a DMV record if they do not have the explicit DMV add record permissions.
8. Civilian Records - Lookup
   * Fixed an issue where civilians could not view their records if they did not have the police or dispatch permission enabled.
9. Transfer Community - Permissions
   * Fixed an issue where transferring ownership of a community did not grant the new owner the new self dispatch and edit other unit permissions.
10. Permission Change - Webhooks
    * Fixed an issue causing the permission change webhook from not showing the newer advanced permissions.
11. Failed Payment
    * Fixed an issue where subscription charges that failed would still bump the subscription expiration date by another month.
12. Call Note - Self Dispatch
    * Fixed an issue where adding a new call note would show an additional active dispatch call for users in self-dispatch mode.
{% endtab %}
{% endtabs %}

### 1.14.0 (Beta) - 02/16/2020

{% tabs %}
{% tab title="New" %}
1. Dispatch - Signal
   * Dispatchers and users in self-dispatch mode can now put the server into a custom signal status. Ex: Signal 100
2. Dispatch - Live Editor
   * If a dispatcher has the call editor open and the call is updated by someone else, this will live-update their editor as well.
3. Timezone
   * All clock values in Sonoran CAD are now synced based upon your community's set timezone. By default, this is UTC time. This can be customized in: Admin > Customization > Community Info
4. Dispatch Call - Notes
   * All dispatch calls now have a notes section. Notes can be added using the input section below, and will be auto formatted with a timestamp and unit number.
5. 911 Call - Autoremove
   * 911 calls are now automatically removed from the queue when you create a dispatch call after selecting "View In Editor"
6. Record - Charge Total
   * All charge/fine totals are calculated for an easy reference at the top of the charges section.
7. Permissions - Guide
   * Added a permissions guide to the account permission and permission key modal.
8. Permissions - Guide
   * Added a permissions guide to the account permission and permission key modal.
9. Self Dispatch - Permission
   * Self dispatching is now a permission separate from the dispatch permission.
10. Edit Other Identifier - Permission
    * A new permission has been added to separate the ability to edit your own identifier, and edit someone else's identifier.
11. Permission Key Applied - Notice
    * When a permission key is correctly applied, the user is now notified with an alert.
12. Penal Code - Sorting
    * Penal codes now sort better, to include codes with integers with more than 1 digit.
13. Support Page
    * Added a new support direction page per Apple's application standards/requirements.
{% endtab %}

{% tab title="Fixed" %}
1. Charges - Edit
   * Fixed an issue preventing users from modifying charge information on a new record.
2. Civilian - Records
   * Fixed an issue causing the civilian page records to not show when searched.
3. Panic - Unit Number
   * Fixed an issue causing PANIC webhooks to not display the unit number.
4. Status Change - Permissions
   * Fixed an issue causing units to not be able to change their status if they did not have the "Police Edit Unit" permission enabled.
5. Account Join - Duplicate
   * Fixed an issue causing the error message when joining a community you are already in from being a message to contact support.
6. Police Search DMV - Permissions
   * Fixed an issue where police could not search for a civilian character or vehicle registration when filling out a record if they did not have DMV permissions.
7. Live Map - Height
   * Fixed an issue where the live map would be displayed in only the top portion of the popout window.
8. Community Card
   * Fixed an issue where the community card could not be selected if the community image did not load for some reason.
9. API Fail - JSON
   * Fixed an issue where failed API calls would not properly return the original JSON body/request object passed in.
{% endtab %}
{% endtabs %}

### 1.13.X (Beta) - 02/09/2020

{% tabs %}
{% tab title="New" %}
1. Unit - Self Dispatch
   *   Units with dispatch permissions can now enable "Self Dispatch"

       Self dispatching allows you to create a call, edit your existing call, or attach yourself onto an existing active call.
2. Lookup - Civilian ID
   * When running a lookup, all applicable civilian ID information will also be displayed.

Window - Dynamic Height

* Popout windows now resize to a dynamic height much more efficiently. This also greatly improves the mobile user experience.

API Fail - JSON

* API failure webhooks now also return the original JSON message to better aid in debugging. API Keys are also censored.

Name Formatting - Dynamic

* Names are displayed with dynamically calculated formatting. This prevents a comma being displayed after the last name if it does not exist, and a period being displayed after the middle initial if it does not exist.

Compare Plans - Pricing

* Subscription pricing amounts are now displayed in the "Compare Plans" window.
{% endtab %}

{% tab title="Fixed" %}
1. BOLO - Penal Code Section
   * Fixed an issue preventing the penal code/charges section on BOLOs to not properly display.
2. DB Sync - Search Characters
   * Fixed an issue where using database sync to search for characters would fail if license or vehicle mapping was not enabled.
3. Transfer Community - Email
   * Fixed an issue where the transfer community feature would fail when the email template could not be located.
{% endtab %}
{% endtabs %}

### 1.12.0 (Beta) - 02/04/2020

{% tabs %}
{% tab title="New" %}
1. BOLO Window - Warrants
   * The BOLOs window will now also let you search and view all active warrants.
2. Webhook - 911
   * Discord webhooks can now be sent when a 911 call is received.

Email Subject - Customize

* Customized community emails now also display your custom community name in the subject line.

Vehicle Type - Aircraft

* "Aircraft" has been added as a vehicle registration type.

Active Units - Panic

*   Regular units can toggle another unit's PANIC status with the proper permissions.

    Active Units - Kick
* Regular units can now kick other units in the active units window if they have the proper permissions.

API Fail - Error Catching

* Added further detail for failed API calls. These details will be displayed in API failed webhook notifications.

Dispatch - 10-Codes Sort

* Dispatch 10-codes are now sorted in order before being filtered by textbox input.

Rate Limiting - Security

* To better combat the recent string of cyber attacks, new rate limiting features have been implemented on Sonoran CAD’s website, websocket connections, and API requests.
{% endtab %}

{% tab title="Changed" %}
Dispatch - Postal/Address

* Dispatch calls no longer require an address or postal to be created.

Ban - Check Owner

* Community owners can no longer ban themselves.
{% endtab %}

{% tab title="Fixed" %}
1. Civilian DMV Edit
   * Fixed an issue where civilians could not edit or remove DMV records if they had DMV edit or remove permissions, but did not have DMV page access.
2. Volume - Null
   * Fixed an issue where the default volume would be an undefined value. This prevented users on the desktop app from changing their status.
3. DbSync - Record Actions
   * Fixed an issue where the record action bar would still display for read-only records via database sync.
4. Compare Plans - Departments
   * Fixed an issue where the compare plans department numbers were incorrectly lower.
{% endtab %}
{% endtabs %}

### 1.11.4 (Beta) - 01/30/2020

{% tabs %}
{% tab title="New" %}
1. Query String - Mute Audio
   * Added a query string to set the default audio volume for communities embedding the CAD inside of a resource.
{% endtab %}

{% tab title="Fixed" %}
1. Admin - Accounts
   * Fixed an issue where navigating away from the admin panel's accounts section would fail to show user accounts when navigating back.
2. Custom Login - New Account
   * Fixed an issue where joining a new community for the first time using a custom login page would fail, resulting in a banned user and account permissions error.
3. Search Character - DbSync
   * Fixed an issue where police and dispatch did not pass permission checks when searching for a civilian character in database sync.
4. Change Username - Error
   * Fixed an issue causing a username switch to throw an error if a member did not have any owned or member communities.
{% endtab %}
{% endtabs %}

### 1.11.3 (Beta) - 01/30/2020

{% tabs %}
{% tab title="New" %}
1. DbSync - JSON Key
   * Communities that have a JSON field can now specify the a key in the column containing the value. The DbSync tutorial document covers this new SQL syntax in section 1.5 (Advanced).
2. Query String - Force Mobile
   *   sonorancad.com/#/?forcemobile=TRUE

       Your CAD will forcefully format the emergency services action bars to mobile format. This is beneficial for communities that are embedding the CAD in-game on a smaller format that does not quite meet the standard mobile dimensions.
{% endtab %}

{% tab title="Changed" %}
Downloads - iOS App

* Updated the iOS app store download link on the downloads page.

UI Border

* Remove the green border from emergency page sections.
{% endtab %}

{% tab title="Fixed" %}
1. Custom Login - New Account
   * Fixed an issue where user accounts were not properly generated when joining a new community from the custom login screen.
2. Vehicle - DbSync
   * Fixed an issue where vehicle attribute textboxes were still enabled for editing when viewing database sync records.
3. Community Branding
   * Fixed an issue where the Sonoran CAD branding would not be removed for PRO communities.
4. Display - Rotate
   * When rotating the display from portrait to landscape, record lookup results will fail to display.
{% endtab %}
{% endtabs %}

### 1.11.2 (Beta) - 01/28/2020

{% tabs %}
{% tab title="New" %}
1. Ban System
   * A new ban system has been implemented to more easily view, add, and remove banned users. This system also comes along with improved security checks to prevent banned users from accessing your community,
2. Webhook - Ban
   * Webhooks are now received when a user is banned or unbanned.
3. Account Status
   * The user accounts table now allows you to quickly filter user accounts by their status: Pending, Active, or Banned.
4. PANIC - Webhook
   * The PANIC webhook now also includes the unit's location.
5. PANIC API - Webhook
   * PANIC webhooks are now also sent out when sent via web API.
{% endtab %}

{% tab title="Fixed" %}
1. Join Community
   * Fixed an issue where users could not search and join a community ID.
2. Fire & EMS Call Viewer
   * Fixed an issue where the Fire and EMS call viewer would still show some default data when no call is present.
3. Fire & EMS - Retrieve Call TTS
   * Fixed an issue where the fire and EMS page would state a null dispatch text to speech when first loading.
4. PANIC Webhook
   * Fixed an issue causing the unit PANIC webhook to use the identifier's unique database ID instead of the unit number.
5. Civilian DMV - Apply for License
   * Fixed an issue where the civilian DMV record page would fail to display the "Apply for DMV Record" button for users who do not have the permission to add a new DMV record.
{% endtab %}
{% endtabs %}

### 1.11.1 (Beta) - 01/25/2020

{% tabs %}
{% tab title="New" %}
1. Community Selection - Redesign
   * The community selection menu has been completely redesigned for a much better mobile UI experience and look.
2. Privacy Policy
   * A standard privacy policy has been added to the side navigation drawer per Apple's standards.
{% endtab %}

{% tab title="Changed" %}
1. Loading Icon - Mobile
   * Redesigned a more dynamically calculated loading icon system. This icon fits more properly for mobile devices.
2. Login Page - Mobile
   * Improved the login screen UI for mobile users.
3. Community Menu - Mobile
   * Mobile UI improvements to the community menu page.
{% endtab %}

{% tab title="Fixed" %}
1. BOLO - Modify
   * Fixed an issue where BOLOs could not be properly removed or modified.
{% endtab %}
{% endtabs %}

### 1.11.0 (Beta) - 01/25/2020

{% tabs %}
{% tab title="New" %}
1. 911 System
   * Allow civilians to create 911 calls to be displayed to dispatchers.
2. 911 API
   * 911 calls can now be sent via Sonoran CAD's web API from in-game.
{% endtab %}

{% tab title="Changed" %}
1. Unit PANIC
   * Unit PANIC now utilizes the faster panic method used in API calls.
2. Switch Identifier
   * Units are prevented from switching their identifier on the UI if they do not have the edit unit permissions.
{% endtab %}

{% tab title="Fixed" %}
1. General Citations - New
   * Fixed an issue where adding a general citation would fail.
2. DB Sync - Case Sensitivity
   * Fixed an issue where database sync searches would still be case sensitive for some communities if their database did not support a particular case sensitivity syntax.
3. Identifier - Edit
   * Fixed an issue where dispatchers and units could not edit other user's identifiers, and unit statuses would not be populated properly in the unit editor.
4. Panic Undefined - Dispatch
   * Fixed an issue where unit PANICs would state "Undefined" for dispatchers.
5. PANIC - Toggle
   * Fixed an issue where units could not properly toggle their PANIC status off if their unit did not have a department set.
{% endtab %}
{% endtabs %}

### 1.10.4 (Beta) - 01/22/2020

{% tabs %}
{% tab title="New" %}
1. Page Loader - Branding
   * The page loader now displays your custom community logo.
2. Limits - Version and Expiration
   * The community limits section now displays your community's current subscription version and expiration date.
{% endtab %}

{% tab title="Changed" %}
1. Community Menu - Loading
   * The community menu now properly has a loading transition. This makes the page no longer snap as permissions are loaded.
2. Civilian & DMV - Icons
   * Updated civilian and DMV page icons to the newer style.
3. Dispatch - Loading
   * The dispatch page now properly has a loading transition. This makes the page no longer snap as permissions are loaded.
4. Tab Bottom Border - Mobile
   * Removed the dotted bottom border on tabs for mobile users.
{% endtab %}

{% tab title="Fixed" %}
1. Call Editor - Mobile
   * Fixed an issue where the call editor's "Address" input would not stretch all the way across the screen for mobile users.
2. API Key - Display
   * Fixed an issue causing the community API key to not display on the in-game integration page.
{% endtab %}
{% endtabs %}

### 1.10.3 (Beta) - 01/22/2020

{% tabs %}
{% tab title="New" %}
1. Themed Scrollbar
   * A new customized scrollbar fits the dark CAD theme better for a much more app-like feel.
2. API Scripts
   * Added a download button to the current .lua in-game integration script in the Admin page's "In-Game Integration" panel.
{% endtab %}

{% tab title="Changed" %}
1. In-Game Integration Config Layout
   * Greatly improved the layout of the in-game integration panel with drop-downs and other mobile UI improvements.
2. Discord Webhook Config Layout
   * Greatly improved the layout of the Discord webhook panel with drop-downs and other mobile UI improvements.
3. Sidebar - Download and Fullscreen
   * The download and fullscreen button no longer displays for users on an app or PWA installation.
4. Admin - Panel Widths
   * Admin panels now span across the entire page regardless of the screen size.
5. Color Customization - Padding
   * Added padding and background color to the page color customization boxes.
6. Added padding to the page color customization boxes.
   * Tabs now display properly on the bottom of the actions container. Close button styling has been modified to be smaller and more precisely placed.
7. Sidebar - Common Buttons
   * Common buttons in the sidebar like logout, settings, etc. are now displayed at the bottom of the navbar.
8. Icons - Consistency
   * Changed icons in the record viewers, BOLO window, admin sections, etc. to the "outlined" version for more consistency.
9. BOLO - Charges
   * Updated the BOLO record charges section to the standardized charges section used in arrest, warrant, and general citation records. This greatly improves the mobile UI experience.
10. No Permission Keys - Error Message
    * Changed the server error message when a community has no permission keys to the standard "Invalid Permission Key" error instead of warning that "NULL" permission keys were found.
{% endtab %}

{% tab title="Fixed" %}
1. Record Windows
   * Fixed an issue where record and other window popups would fail to open.
2. Record Action - Mobile
   * Fixed an issue where action buttons on a record would be moved down to another line on mobile and wouldn’t be fully accessible.
3. Set Default Community - Display
   * Fixed an issue where pressing "Set Default Community" at the community menu failed to immediately hide the button after being toggled.
4. Record Window - Mobile
   * Fixed an issue causing the new record data section to not display properly on certain mobile device screen sizes.
{% endtab %}
{% endtabs %}

### 1.10.2 (Beta) - 01/21/2020

{% tabs %}
{% tab title="New" %}
1. Panic - Location
   * Unit PANIC text-to-speech alerts now state the unit's location
2. BOLO - Agency Information
   * BOLO agency information now properly auto-fills with the identifier's information.
3. Unit Location - API
   * API call to show a unit's location in real time in the unit section.
4. Compare Plans - Description
   * Added an information tooltip next to each feature in the "Compare Plans" popup in the payment center.
{% endtab %}

{% tab title="Changed" %}
1. DMV Record - Search
   * The search button for characters and vehicles in the DMV record will only display on DMV records if the user has the DMV page access permission.
{% endtab %}

{% tab title="Fixed" %}
1. BOLO - WebHook
   * Fixed an issue causing BOLO webhooks to not be properly sent.
2. API Webhook - Label
   * Fixed the wording on the new API webhook to properly display as "API Request" instead of a duplicate of "Penal Code Modified"
{% endtab %}
{% endtabs %}

### 1.10.1 (Beta) - 01/19/2020

{% tabs %}
{% tab title="New" %}
1. Unit Info - Identifiers
   * Units can create and save multiple unit identifiers. These can then be quick selected and changed.
2. Dispatch - Identifiers
   * Dispatchers can configure their current unit identifier to more quickly generate new records.
3. Unit Location - API
   * API call to show a unit's location in real time in the unit section.
4. Panic - API
   * Unit's can have their PANIC status toggled via an API request.
5. Unit Info - Location and AOP
   * Unit identifiers can now specify their current location and AOP.
6. Custom Emails
   * Customize branding and wording in emails sent from your custom login page. This includes account verification/creation and forgotten password emails.
7. Custom Page Colors
   * Communities can now specify the background colors of their custom login page or community menu page.
8. Sonoran CAD Branding
   * Professional communities have their community name displayed on the top left instead of the Sonoran CAD name.
9. Webhook - API Request
   * Discord webhooks can be enabled for successful and failed API requests.
10. Customization Menu - Expandable
    * Added a new expandable section system to the community customization menu. This allows for a more condensed and organized page.
{% endtab %}

{% tab title="Changed" %}
1. Dispatch Call Overhaul
   * Completely overhauled how dispatch calls are stored, retrieved, and modified. This system is much more optimized and will allow for expansion into viewing previously closed calls and adding in 911 calls in the near future.
2. Police/Fire/EMS UI Changes
   * Small UI changes for emergency pages related to styling, spacing, etc.
3. Dispatch - Description
   * A call description is no longer required for dispatches.
4. Record View - DBSync
   * Record views no longer display the "Search" buttons for characters and vehicles when database sync is enabled, as this data is read-only.
5. DMV Records - Search
   * The button to search for a vehicle or civilian character will no longer display on a license or vehicle registration if you do not have permissions to add, edit, or remove the record.
6. Emergency Action Buttons - Mobile
   * Emergency action and PANIC buttons are now smaller to match the size of the status buttons on mobile devices.
7. Default Community - Hide
   * The "Set Default Community" button will no longer display at your community menu if the community is already set as your default.
8. Permission Keys - Spaces
   * Added a check to prevent users from adding a space in a permission key.
9. Emergency Clock - Mobile
   * The clock on all emergency pages no longer displays for mobile screens in order to save space.
{% endtab %}

{% tab title="Fixed" %}
1. Permission Keys - Error
   * Fixed an issue where error messages were not sent if an invalid permission key was applied.
2. Edit Unit - Status
   * Fixed an issue where changing your unit status through the unit editor would always set it to unavailable.
3. Fullscreen - Scrollbar
   * Fixed an issue where the scrollbar would display unnecessarily when in full screen mode on desktop.
{% endtab %}
{% endtabs %}

### 1.9.7 (Beta) - 01/12/2020

{% tabs %}
{% tab title="New" %}
1. Default Community
   * Users can now locally set their "Default Community" in the community menu. This will always display the community's custom login screen even for mobile and desktop applications. This makes signing into your regular community even faster!
2. Admin - Kick Account
   * Community admins can now kick an account to forcefully remove it from a community as opposed to banning the account.
{% endtab %}

{% tab title="Changed" %}
1. Login Page - Icons
   * Small changes to the login page icons and button sizes.
{% endtab %}

{% tab title="Fixed" %}
1. Admin - View Accounts
   * Fixed an issue where navigating from another admin panel back to the user accounts page caused the accounts to be empty until refreshed.
{% endtab %}
{% endtabs %}

### 1.9.6 (Beta) - 01/11/2020

{% tabs %}
{% tab title="New" %}
1. Custom Login Page
   * Communities can customize their own login page to display their community name and logo. Users logging in from this page will be directly logged into the community, as opposed to navigating to the community selection menu.\
     All account creation and password recovery emails sent from this page will also navigate the user to your community's custom login page.
{% endtab %}
{% endtabs %}

### 1.9.5 (Beta) - 01/11/2020

{% tabs %}
{% tab title="New" %}
1. Unit 10-Status - Admin Customization
   * Communities can customize the default 10-06, 10-07, and 10-08 in status options for available, busy and unavailable.
2. Affiliate Tracking System
   * A new affiliate system has been added to help Sonoran CAD grow and reward those who participate.
{% endtab %}

{% tab title="Changed" %}
1. PDF Records - Always Show
   * The action bar under police records will now always display the print to PDF option even if the user does not have permissions to modify or remove the record.
{% endtab %}
{% endtabs %}

### 1.9.4 (Beta) - 01/09/2020

{% tabs %}
{% tab title="New" %}
1. Record - Print to PDF
   * Police arrest, warrant, speeding and citation records can be printed as a PDF record.
2. Vehicle Citation - AKA
   * Added a civilian "AKA" field to the vehicle citation to stay consistent with other record types.
{% endtab %}

{% tab title="Changed" %}
1. Payments - Billing Address
   * Changed the wording for the billing address's "State" to "State/Province" and "ZIP" to "ZIP/Postal Code" to include non-American billing addresses.
{% endtab %}

{% tab title="Fixed" %}
1. General Citation - Supervisor Signature
   * Fixed an issue causing the supervisor signature on general citations to not save properly.
2. Arrest Record - Supervisor Signature
   * Fixed an issue causing the supervisor signature on arrest records to not save properly.
3. Vehicle Citation - Make
   * Fixed an issue where the vehicle make would not save properly in vehicle citation records.
{% endtab %}
{% endtabs %}

### 1.9.3 (Beta) - 01/08/2020

{% tabs %}
{% tab title="New" %}
1. Call Closed - 10-08
   * When a call is closed or a unit is removed, that unit is then marked as 10-08 (Available)
{% endtab %}

{% tab title="Fixed" %}
1. Modify Department
   * Fixed an issue causing users to be unable to modify an existing department.
2. Unverified Email
   * Fixed an issue causing users attempting to login with an unverified email address to receive a blank error message.
{% endtab %}
{% endtabs %}

### 1.9.1 (Beta) - 01/06/2020

{% tabs %}
{% tab title="New" %}
1. New Dispatch - 10-06
   * When receiving a new dispatch, units are automatically updated to 10-06 (Busy)
2. Voice Commands - Status
   * Voice commands for the unit status now include 10-97 and 10-23.
3. Account Subscriptions - Menu Access
   * The payment center to purchase and manage subscriptions is now also available by pressing the "Subscriptions" button at the community selections screen.
4. Payment Center - Discord Username
   * When starting a new subscription, the payment center now allows you to specify an optional discord username to add your "Customer" rank in our support discord.
5. Community Search - Autofocus
   * When searching for a new community, the community ID box is now auto focused when the popup modal is displayed.
{% endtab %}

{% tab title="Changed" %}
1. Dispatch - No Units
   * Dispatch Calls no longer require units to be attached. This allows dispatchers to create a queue of calls while awaiting available units.
2. Dispatch - Unit Attached
   * When a unit is newly attached to an existing call, their UI will alert them that this is a "New Dispatch" instead of an updated dispatch.
3. Penal Codes - Sort
   * Penal codes now sort by default based on the "Codes" column value.
4. Penal Code Charge - Sort
   * Penal codes in the dropdown search for records are now sorted in order by their "Code" value.
{% endtab %}

{% tab title="Fixed" %}
1. Voice Commands - 10 Status
   * Fixed an issue where the set unit status voice command would fail to register properly.
{% endtab %}
{% endtabs %}

### 1.9.0 (Beta) - 01/05/2020

{% tabs %}
{% tab title="New" %}
1. Payment Center
   * Sonoran CAD now has a built in payment center. Here, you can start, stop and manage paid subscriptions for your community. This is currently available in the admin panel’s limits section.
2. Unit Status
   * Units can now set their status to ENROUTE (10-97) or ON SCENE (10-23).
3. Dispatch - Call Status
   * Dispatch call statuses can now be set to either PENDING, ACTIVE or CLOSED and no longer contain status options that are unit specific.
{% endtab %}
{% endtabs %}

### 1.8.2 (Beta) - 01/02/2020

{% tabs %}
{% tab title="Changed" %}
1. Community Menu - Permissions
   * Community menu buttons are now only displayed if the user has the permissions, as opposed to simply being disabled if permissions are not present.
2. Bond Amount -> Bond/Ticket
   * Changed the wording in the charges section from "Bond Amount" to "Bond/Ticket Amount"
{% endtab %}

{% tab title="Fixed" %}
1. Record - Add Button
   * Fixed an issue causing the "Add Record" button from not always displaying properly when generating a new police record on mobile devices.
2. Lookup Results
   * Fixed an issue where records would fail to display on the lookup results for mobile devices.
{% endtab %}
{% endtabs %}

### 1.8.1 (Beta) - 12/23/2019

{% tabs %}
{% tab title="New" %}
1. Lookup - Partial Search Terms
   * You can now input partial first names, last names, and plate numbers into a lookup search.
2. Voice Commands - Custom Trigger Word
   * Paid communities can now customize the voice command trigger word from "Sonoran" to a word of their choice.
3. Voice command improvements
   * Improved voice detection command computing and parsing. Sonoran CAD now dynamically computes where in your phrase the "plate" or "name" word starts and will string together the characters from there to search. Sonoran CAD also no longer looks for the "lookup" word in a hard-coded phrase index. This fixes issues where Google would detect "look up" as one or two different words. Sonoran CAD will also filter out words in-between the keyword and "plate" or "name."
4. Active Units - Status Dropdown
   * In the "Active Units" window, unit's 10-status now displays in a dropdown menu. This allows 10-statuses to be more easily updated without having to open the entire unit editor.
5. Dispatch Call - Block
   * Separate the dispatch call's street address into an optional block number and road.
6. DBSync Lookup - Get All Matches
   * Communities with DBSync now retrieve all characters matching the specified name instead of only the first result.
7. Warrant - Status Closed
   * If a warrant is served/closed, lookup results will not state "ACTIVE WARRANT" when running a lookup.
{% endtab %}

{% tab title="Fixed" %}
1. BOLO WebHook
   * Fixed an issue where BOLO notification webhooks went to the standard police record URL.
2. Get Vehicles - Name
   * Fixed an issue where searching for vehicle registrations to put on a record via name failed to return vehicles.
3. Call Closed - Clear
   * Fixed an issue where unit's screens would not be cleared fully when a dispatch call is closed.
{% endtab %}
{% endtabs %}

### 1.8.0 (Beta) - 12/22/2019

{% tabs %}
{% tab title="New" %}
1. Record Type - General Citation
   * Add a citation record type for all non-vehicle, arrest or warrant records. A written-warning type can also be toggled inside.
2. Window - Z-Indices
   * Clicking on a window will now bring it to the top layer.
3. Menu - Edit Account
   * Allow users to edit their account username, password and email preferences right from the community selection screen.
4. Record - Search for Vehicle
   * Added a search for existing vehicle registration feature for vehicle citations, arrests and BOLOs.
5. 11-Codes
   * 11-Codes can now be added in addition to standard 10-Codes.
6. UI - Color Improvements
   * Emergency pages now have a more standard grey-based color scheme for an overall better look and feel.
7. BOLO - Search for Civilian
   * Added a search for civilian feature on the BOLO creation window for a faster BOLO generation experience.
8. BOLO - Agency Location
   * When creating a new BOLO, agency location and ZIP code are now auto-filled for emergency units in a department with these values specified.
9. Arrest Record - Vehicle Year
   * Added vehicle year data to arrest record.
{% endtab %}

{% tab title="Changed" %}
1. Warrant - Header Wording
   * Changed "Warrant for Arrest" header title on warrant record to "Civilian Information" for a more encompassing and accurate section title.
2. Window - Handles
   * Changed the window handle positioning to be inside of the draggable window boundaries.
3. Arrest Record - Vehicle Section
   * Moved the arrest record's vehicle information section below the civilian section and above the arrest information section.
4. Modal Popup - Background Color
   * Changed the default dark purple gradient on popup modals to a dark grey gradient.
{% endtab %}

{% tab title="Fixed" %}
1. Dispatch - Online Units
   * Fixed an issue where dispatchers couldn't initially view all online units when first loading the page if they did not have fire, police or EMS permissions.
2. EMAIL - SMTP Timeout
   * Fixed an issue causing account creation emails to fail in rare cases due to an SMTP timeout.
3. Window - Page Boundaries
   * Fixed an issue where dragging windows to the edges of the page would cause scrollbars to appear due to an invisible overflow.
4. BOLO - Vehicle Year
   * Fixed an issue causing vehicle year values to not save in BOLO records.
{% endtab %}
{% endtabs %}

### 1.7.4 (Beta) - 12/20/2019

{% tabs %}
{% tab title="Changed" %}
1. Call Viewer - Typo
   * Fixed the "No Actice Calls" wording to "No Active Calls" in the dispatch call viewer.
{% endtab %}

{% tab title="Fixed" %}
1. Link Character
   * Fixed an issue preventing users with database sync from linking a new character.
2. Dispatch - No Postal
   * Fixed an issue causing dispatches without a postal code to fail.
{% endtab %}
{% endtabs %}

### 1.7.3 (Beta) - 12/19/2019

{% tabs %}
{% tab title="New" %}
1. Transfer CAD Ownership
   * Community owners can now transfer ownership of the CAD in the admin menu. This requires email verification.
2. Account Status - Permission Keys
   * Permission keys now update the user account status from "PENDING" to "ACTIVE" as long as the user account has not been banned.
{% endtab %}

{% tab title="Fixed" %}
1. Permission Keys
   * Fixed an issues causing permission keys to not be successfully updated with in-depth permissions.
2. Save Permission Key
   * Fixed an unhandled exception when saving permission keys in specific cases.
3. Admin Accounts Permission
   * Fixed an issue where permission keys with the admin "Accounts" permission would not properly have this permission applied to the user.
{% endtab %}
{% endtabs %}

### 1.7.2 (Beta) - 12/18/2019

{% tabs %}
{% tab title="Changed" %}
1. Menu - Update Permissions
   * Forced users to retrieve new local permissions for client-side checks whenever they access the community menu page.
{% endtab %}

{% tab title="Fixed" %}
1. Admin In-Depth Permissions
   * Fixed an issue preventing user's updated in-depth permissions from displaying properly in the admin account menu.
2. Admin - Status Permissions Change
   * Fixed an issue causing user in-depth permissions to not all be disabled when an account status is changed to PENDING or BANNED.
{% endtab %}
{% endtabs %}

### 1.7.1 (Beta) - 12/18/2019

{% tabs %}
{% tab title="Changed" %}
1. Community Limits - Security
   * Fixed an issue causing the community API key to be exposed in websocket data transfers for admins that do not have the in-depth limit permissions.
2. Community Accounts - Security
   * Fixed a security vulnerability allowing admins without account editing permissions to still retrieve community account information.
{% endtab %}

{% tab title="Fixed" %}
1. Account Permissions
   * Fixed an issue where editing a user's account permissions in the admin menu incorrectly updates the admin's permissions instead of the selected account.
2. Admin - Loading
   * Fixed an issue causing the admin page to continually load if the admin does not have user account editing permissions.
{% endtab %}
{% endtabs %}

### 1.7.0 (Beta) - 12/18/2019

{% tabs %}
{% tab title="New" %}
1. In-Depth Permissions
   * A more in-depth permissions system allows admins to specify more in-depth permissions.
2. Live Map
   * Paid communities can specify a link to a map (commonly used as a live map) for their community. This can be viewed in a pop-out window for all emergency units and dispatchers.
3. Police - Edit Other Units
   * Emergency units with permissions can select a unit in the "Active Units" window to edit their rank, status, department, etc.
4. Discord Configuration - Menu
   * Communities can now specify their community Discord invite link to be displayed in the community menu.
5. Website Configuration - Menu
   * Communities can now specify their community website link to be displayed in the community menu.
{% endtab %}

{% tab title="Changed" %}
1. Permission Keys - Admin UI
   * Improved the layout of the permission key configuration panel in the admin UI for mobile screens.
2. Emergency Pages - Top Action Bar Widths
   * Increased the container widths for all emergency pages. This allows all action buttons to display on one line for medium sized screens.
3. Menu - Permission Key UI
   * Improved the UI layout of the permission key input and button on the community menu page.
{% endtab %}

{% tab title="Fixed" %}
1. Account Permissions
   * Fixed an issue where editing a user's account permissions in the admin menu incorrectly updates the admin's permissions instead of the selected account.
2. WebHooks
   * Fixed a bug causing police record Discord webhooks to fail with empty fields.
{% endtab %}
{% endtabs %}

### 1.6.0 (Beta) - 12/15/2019

{% tabs %}
{% tab title="New" %}
1. Permission Keys
   * Allows admins to generate permission keys for users to enter at the community menu. These keys will grant the users the specified permissions.
2. Discord WebHooks
   * Discord webhook integration can be specified in the admin panel. Discord webhooks can be sent for new dispatches, records, BOLOs, etc.
3. Create Record - Autofill Civilian
   * When filling out a record, officers can search for a registered/created civilian to auto-fill their information.
4. Department - Configure Location
   * Admins can specify department location and zip code to auto-fill when creating a new record.
5. Penal Code - Jail Time
   * Added a jail time specification box in the penal code specification section.
6. Penal Code - No Bail
   * Added a “No Bail” option on the penal code’s bail type drop down.
7. Civilians - Auto Approve DMV Records
   * Civilians with DMV permissions can now modify and approve their licenses and vehicle registrations directly from the civilian page.
8. Login Page - Email Auto Focus
   * Login page email field now is auto-focused for a faster sign-in.
9. Lookup - Auto Focus
   * Opening a new lookup tab will auto-focus the first name box in the search bar for faster searching.
10. Record Viewer - Height Optimizations
    * Improved dynamic height calculations for record viewing component.
11. DBSync - Empty Table Check
    * DbSync now checks for an empty table case when testing mappings.
{% endtab %}

{% tab title="Fixed" %}
1. Penal Code - Infraction and Warning
   * Fixed an issue where editing a penal code to type "Infraction" or "Warning" would cause the penal codes to fail to display.
2. Full Screen Scrolling
   * Fixed an issue that prevented users from scrolling in the in-game integration section and other extended sections while in full screen mode.
3. Penal Code Types - Warning and Infraction
   * Fixed an issue where the new penal code types "WARNING" and "INFRACTION" were not properly displaying in the admin editor.
4. Call Description Scrolling
   * Fixed an issue where a call description is not scroll-able for units on a call.
5. Civilian - Eye Color
   * Fixed an issue where when creating a new character the eye color drop-down would fail.
6. User Accounts - Autofill
   * Prevented Chrome's autocomplete from filling out the admin accounts section search box with the user's saved username.
7. Kick Unit - Permissions
   * Fixed an issue where only admins could force kick units instead of dispatchers.
8. Registration - Email Spaces
   * Prevented users from registering an account with a space in the email address.
{% endtab %}
{% endtabs %}

### 1.5.4 (Beta) - 12/03/2019

{% tabs %}
{% tab title="New" %}
1. Voice Commands - 10-Status
   * Units can now set their 10-Code status via voice command. "Sonoran, set status "
2. Dispatch - Toggle Unit Panic
   * Dispatch can select a unit and manually toggle their PANIC state on or off.
3. Dispatch Kick Unit
   * Dispatchers can now select a unit to forcefully kick them back to the community menu. This is useful for AFK units that have not disconnected/closed the CAD or have not navigated away from the police, fire or EMS page.
4. Character Age - Computed from DOB
   * Civilian Character age will be calculated from their DOB.
5. DMV - Remove Record
   * Removing a license or vehicle registration in the DMV page now automatically removes it from the UI without having to refresh the search.
{% endtab %}

{% tab title="Changed" %}
1. Dispatch Updated - Shorten Notice
   * When a dispatch call is updated, text-to-speech simply states, "Dispatch Updated." This will shorten the lengthy text-to-speech response whenever a call is modified.
2. Primary Officer -> Primary Unit
   * Changed the wording of "Primary Officer" on a dispatch call to "Primary Unit" - This helps better encompass the phrasing for a fire or EMS dispatch.
3. Mobile - Admin Codes UI
   * Improved the UI positioning for admin penal and 10-code editing for mobile devices.
4. Mobile - Window Vertical Position
   * Raised the new window vertical position for an improved mobile UI experience.
{% endtab %}

{% tab title="Fixed" %}
1. Unit Disconnect
   * Fixed an issue where units would only be removed from the dispatch viewer if the app or window was closed. Sonoran CAD now properly removes the unit upon page navigation away from police, fire or EMS.
2. DMV - Submit Vehicle Registration
   * Fixed an issue where DMV submitting a new vehicle registration would fail.
3. Penal Code Types - Warning and Infraction
   * Fixed an issue where the new penal code types "WARNING" and "INFRACTION" were not properly displaying in the admin editor.
4. DB Sync Characters
   * Fixed an issue where an account's linked characters would fail to load when using database sync.
5. Login Button - 404
   * Fixed an issue where the "login" menu button would take you to a 404 page on certain pages.
6. Record Editor - Border Height
   * Fixed an issue where the record editor save and remove button container was displayed slightly outside the window border.
{% endtab %}
{% endtabs %}

### 1.5.3 (Beta) - 11/30/2019

{% tabs %}
{% tab title="New" %}
Delete/Remove CAD

* Community owners can now remove their CAD system in the admin menu. This process requires email verification.
* Penal Code Types
  * Added "Infraction" and "Warning" to penal code charge type options.
* Record Charges - Mobile Optimization
  * Improved UI layout for police record charges.
* Lookup Results - Mobile UI Optimization
  * Increased record lookup results height for mobile users.
{% endtab %}

{% tab title="Fixed" %}
1. DMV Record - Mobile Height
   * Fixed an issue where DMV records on mobile wouldn't be tall enough to scroll.
2. DMV - Mobile Height
   * Fixed an issue where the "New Record" section on mobile took up the entire screen.
3. DMV Pending and Search
   * Fixed an issue where dynamic SQL queries were not formatted correctly when searching for DMV records.
4. Community Characters Table
   * Fixed an issue where community character tables were not properly generated upon CAD registration.
5. Validation Redirect
   * Fixed an issue preventing the validation page from properly redirecting the user to the login page.
{% endtab %}
{% endtabs %}

### 1.5.2 (Beta) - 11/29/2019

{% tabs %}
{% tab title="New" %}
1. Primary Unit - Search Filter
   * The "Primary Unit" box on the call editor is now a search/filter for units only currently attached on the call.
2. Login - Prevent Spaces
   * Sonoran CAD now prevents a user from accidentally entering a space in their user account login.
{% endtab %}

{% tab title="Changed" %}
1. Unit Info - Display Department
   * Changed the unit information at the top of the page to show the department name instead of the subdivision name.
{% endtab %}

{% tab title="Fixed" %}
1. DMV Loading Failure
   * Fixed an issue preventing the DMV page from loading properly.
2. DB Sync Disable Toggle
   * Fixed a bug causing disabled toggles for the Database Sync configuration to still be toggleable.
3. Lookup Voice Commands - Bug
   * Fixed an issue causing voice command name and plate searches to not work properly.
{% endtab %}
{% endtabs %}

### 1.5.1 (Beta) - 11/28/2019

{% tabs %}
{% tab title="New" %}
1. Connection Event Handler - Redesign
   * A new connection and websocket event handling system to improve performance and fix common bugs involving connection registration failures. This improves overall application stability and reliability.
{% endtab %}

{% tab title="Changed" %}
1. Community Cards - Display Bug
   * Certain screen sizes do not show community cards on the menu page.
2. Department Structure - Admin
   * Fixed an issue where the editing department structure in the admin panel failed to load.
3. NULL DB Sync Structure
   * Fixed a bug where new communities would have a NULL DB Sync structure. This would throw an error when accessing the civilian page.
4. Lookup - Empty After Navigation
   * Fixed a bug where after navigating away from the police or dispatch page, the records would not display.
{% endtab %}
{% endtabs %}

### 1.5.0 (Beta) - 11/27/2019

{% tabs %}
{% tab title="New" %}
1. Database Sync
   *   Communities can specify a SQL connection string and mapping for their database structure for characters, vehicle registrations and licenses.

       Sonoran CAD will then search for characters, vehicle registrations and licenses directly from your community's database for full integration!
2. Subscription Upgrades
   * A payment system for communities to upgrade their limits, enable new features and more!
3. Civilian Page
   * A page for civilians to create a character, make emergency calls, view licenses, view vehicle registrations and more.
4. DMV Page
   * A page to edit, add and remove vehicle licenses and registrations for civilian characters.
5. Licenses
   * Civilian license records can be created, modified and searched.
6. Vehicle Registrations
   * Civilian vehicle registration records can be created, modified and searched.
7. BOLO System
   *   A way for police and dispatch to add, edit, search, and remove BOLOs.

       BOLOs can be viewed in the BOLO window or in an applicable name/plate search.
8. License Type Customization
   * Communities with this feature can customize their civilian license types.
9. Community Info Customization
   * Your community ID, name, subtitle and image can now be changed in the customization menu in the admin panel.
10. Community Limits Panel
    * View your community CAD limits in the "Limits" section in the admin panel.
11. Lookup - Dynamic Tabs

    *   The lookup window now only displays record tab types (BOLO, Warrant, Arrest, etc.) if they are present.

        When no results are found, a "No Records Found" message is displayed.

    12\. Record Tabs - Dynamic

    * When running a lookup, the selected record tab will now be set to the first record type available based on priority.

    13\. Unit Info - Clear Department

    * Add the ability to quickly clear a unit's agency, department or subdivision in the unit editor.

    14\. PWA Auto Updater

    * You will no longer have to clear your local cache to get the latest Sonoran CAD version.
{% endtab %}

{% tab title="Changed" %}
1. District Rename to Agency
   *   "Districts" are now called "Agencies" - The full structure is as follows:

       Agency > Department > Subdivision
{% endtab %}

{% tab title="Fixed" %}
1. Socket Connection Event Registering
   * Added additional functionality to more properly handle server-client web socket event registering, destruction and re-registering.
2. Lookup Voice Command - Plate Tab
   * Fixed an issue where looking up a vehicle plate via voice command has the lookup name tab still shown.
3. Page Reseize
   * Fixed an issue where rotating a mobile device or resizing the page would limit the view-able area when switching back,
4. Unit Info - Updated
   * Fixed a bug where updating a unit's information does not display until after a page refresh.
5. Downloads/Discord - Connection Error
   * Fixed an issue causing the downloads and discord pages to have a server connection error on a fresh page load without user navigation.
{% endtab %}
{% endtabs %}

### 1.4.0 (Alpha) - 11/15/2019

{% tabs %}
{% tab title="New" %}
1. Penal Codes
   * Penal codes can now be added, edited and removed in the admin menu.
2. Records Charges - Penal Code Select
   * Police/Dispatch can now add charges by filtering for a specific penal code.
3. Penal Code Window - Police/Dispatch
   * A new window for police to view and search for penal codes.
4. Voice Commands - Lookup
   * The ability to lookup a name or license plate via voice commands. “Sonoran lookup \<name/plate> \<plate/name>”
5. Record Notice Flags
   * Special flags can be added to a name or license plate to be shown when running a lookup. (Armed, Mentally Ill, etc.) These flags are also be repeated aloud by TTS to help officers running lookups via voice commands.
6. Improved Dynamic Window Height
   * Dynamically computed popup window height based upon number of results and content within a window.
7. 10-Codes Filter Search
   * Allows dispatchers to search for a 10-Code in the call editor drop down. This enables faster call creation for communities with a large quantity of 10-Codes.
8. Fire Page
   * Page for users with the FIRE permission to receive dispatch calls.
9. Ems Page
   * Page for users with the EMS permission to receive dispatch calls.
{% endtab %}

{% tab title="Changed" %}
1. Community Selection - Height
   * Community cards in horizontal scroll are now sized more dynamically, greatly improving user's mobile experience.
2. UI Improvements - Color
   * New colors, layouts, borders, etc.
{% endtab %}

{% tab title="Fixed" %}
1. 10-Codes Duplication
   * Fixed an issue where adding a new 10-Code, causes the new code to be duplicated until the codes have been refreshed.
2. Re-Connection Bug
   * Fixed an issue when the application re-connects to the Sonoran API server, events are not re-registered properly to the new connection. This can cause issues preventing a user from logging in or making any actions particularly on mobile platforms.
3. Text-To-Speech Voice
   * Sonoran CAD now searches for the "Google US English" speech synthesis option. Otherwise, use the default system voice. Fixes consistency issues across systems.
4. Voice Commands - Page Navigation
   * Fixed issue causing voice commands to fail after navigating away and back from an emergency page.
{% endtab %}
{% endtabs %}

### 1.3.2 (Alpha) - 11/09/2019

{% tabs %}
{% tab title="New" %}
1. PWA App Installations for OSX and iOS
   * PWA (Progressive Web Application) installations have been configured for all platforms, but specifically allows OSX and iOS users to experience a native app experience with Sonoran CAD. For more information, view the #downloads channel in Discord, or click “Downloads” on the side navigation menu on the website.
{% endtab %}

{% tab title="Changed" %}
Desktop - Splash Screen Font

1.
   * Updated the splash screen font for the electron desktop application for windows
{% endtab %}

{% tab title="Fixed" %}
1. 10-Codes - Admin
   * Fixed an issue causing 10-Codes to not appear for editing on the admin panel.
{% endtab %}
{% endtabs %}

### 1.3.1 (Alpha) - 11/06/2019

{% tabs %}
{% tab title="New" %}
1. Desktop - Splash Screen
   * A new splash screen has been added to the Sonoran CAD Windows desktop application. This smooths out the loading and update checking process.
2. Vehicle Citation - Court Time
   * The court time for the court date has been added onto the vehicle citation record type.
{% endtab %}

{% tab title="Changed" %}
1. Vehicle Citation - Date Validation
   * Default date values have been added for the vehicle citation court date and license expiration. This removed the defaulted red warnings.
{% endtab %}

{% tab title="Fixed" %}
1. Page Scroll - Bug
   * Fixed an issue disabling vertical scrolling on smaller pages.
2. Call Viewer - Medium Display
   * Fixed an issue causing inputs on the call editor/viewer to be uneven on medium sized screens.
3. 10-Codes - Empty Dropdown
   * Fixed an issue causing the 10-codes drop down to be empty for the dispatch call editor.
4. New Record Number - Dispatch
   * Fixed an issue causing the new record number to display as -1 for dispatchers.
{% endtab %}
{% endtabs %}

### 1.3.0 (Alpha) - 11/05/2019

{% tabs %}
{% tab title="New" %}
1. Warrants
   * Police and dispatch can now add, edit, search and remove arrest warrants.
2. Vehicle Citations
   * Police and dispatch can now add, edit, search and remove vehicle citations.
3. View Online Units
   * Police can now press the “Online Units” button to view all active units on their CAD server.
4. View 10-Codes
   * Police and dispatch can now press “10-Codes” at the top menu to view all custom 10-codes currently configured.
5. Stay Signed In
   * Select “Stay Signed In” on the login page to reduce the amount of times a sign in is required.
6. Lookup Search - Shortcut
   * Police and dispatch can now press enter/return in the lookup textbox to search faster than manually pressing the search button.
7. Police Call Viewer - Status
   * Added new functionality to update units on the police call viewer in real time (status changes).
8. Support Discord Links
   * Navigation links to the Sonoran CAD Discord have been added to the side navigation menu.
9. Reset Password - Email Template
   * Added a new styled password reset email template for Sonoran CAD password reset functionality.
10. UI Improvements
    * General UI improvements, darker theme, window calculation sizes, button colors and more!
{% endtab %}

{% tab title="Fixed" %}
App Logo - Android

1.
   * Fixed an issue causing the splash screen logo on Android to get cut off.
{% endtab %}
{% endtabs %}

### 1.2.1 (Alpha) - 10/30/2019

{% tabs %}
{% tab title="New" %}
1. Mobile Action Menu
   * Police and Dispatch pages now have a dropdown "Actions" menu for all action buttons
{% endtab %}

{% tab title="Fixed" %}
1. Desktop Download Link
   * Fixed an issue causing the Windows download link at homepage to be outdated.
{% endtab %}
{% endtabs %}

### 1.2.0 (Alpha) - 10/29/2019

{% tabs %}
{% tab title="New" %}
1. Sonoran CAD Windows Desktop Application
   * Downloadable desktop application for OSX and Windows, powered by Electron. Download link displays for desktop browser users.
   * NOTE: During the Alpha release, the Windows EXE is not currently signed with a developer certificate. You may see warnings on install.
2. Custom Window and Tab System
   * A fully custom draggable, resizable window and tab system. You can minimize, open, close, etc.
   * This allows users to open multiple record or lookup windows at one time, improving multi-tasking.
   * NOTE: The MAXIMIZE functionality has not yet been added.
3. Arrest Records
   * Arrest records can now be added, edited, searched and removed.
   * Create a new arrest record by pressing the "New Record" button on the police or dispatch page.
   * NOTE: Other record types will be added shortly, this is just to test the functionality of the system.
4. Records Lookup
   * Police and dispatch users can now press the "Lookup" button to open a new records search window.
   * Users can enter a full or partial name, or search by a license plate.
   * NOTE: Currently, only arrest records are shown, more will be added soon.
5. Voice Commands - PANIC
   * The police page will now prompt users for access to their microphone (Chrome).
   * The voice command "Sonoran Panic" will toggle your unit's PANIC state.
{% endtab %}

{% tab title="Changed" %}
1. Session Storage
   * Cookies are no longer used to store user's session IDs and information required to handle a page refresh.
   * Local browser session storage is used in place of prior cookie storage.
2. No-Reply Registration Email
   * Sonoran CAD now sends all emails from no-reply@sonoransoftware.com
3. Dispatch - Separate Connection Grouping
   * Dispatchers are now added to an additional SignalR grouping.
   * This will be to ensure server calls (Ex: ackDispatchCall) are only sent to dispatchers, and not all other units within the server.
4. Dispatch - Postal or Address
   * Dispatches now only require the postal or address.
   * Text-to-speech notifications state the postal and/or the address when applicable.
5. Department Structure - Table Wording
   * Admin department structuring, changed to "Districts/Departments/Subdivisions" per page for the table view amount.
{% endtab %}

{% tab title="Fixed" %}
1. Reset Password
   * Fixed an issue with the reset password system not working properly.
   * NOTE: These UI elements are outdated and will be modified soon.
2. Toolbar - Mobile
   * Fixed an issue causing the top toolbar "Sonoran CAD" title gets cut off and brought down on mobile screens.
3. Department Structuring - Toggle Edit
   * When modifying a community's department structure, the background now properly turns red to inform the user that the editing mode is toggled.
4. Registration Email Template
   * Fixed the background of the Sonoran LLC logo.
5. Disconnection - Null Value
   *   Disconnection context values being NULL after hours of inactivity.

       Fixed an issue where this causes an unhandled exception after disconnection from the connection hub.
{% endtab %}
{% endtabs %}

### 1.1.0 (Alpha) - 10/15/2019

{% tabs %}
{% tab title="New" %}
1. Police Panic Button
   * Police units can press the red "PANIC" button to inform other online units and dispatchers when in distress. This will pulse the screen red for the unit. The unit on the dispatcher panel will also pulse red.
2. Audio Alerts
   * Police unit's will recieve customized audio alerts when a dispatch is created, updated or removed.
   * Police unit's will hear a brief tone when changing their 10-status. (10-06, 10-07, 10-08)
3. Settings Modal
   * The left drawer now contains a "Settings" option. Opening this will allow the user to change their system volume for audio alerts and tones.
4. Dispatch Call - Unit Removal Logic
   * Sonoran CAD now tracks the removed units when updating a call. Removing units from a call will now inform the unit that the call is closed (for them) and will clear their screen.
5. Dispatch Active Calls - 10-Status Logic
   * Unit 10-Statuses are updated in real-time. However, when a new dispatcher first loads in, existing calls are pulled from the database. When a unit updates their status, this is not updated in the unit's current active call. As a result, dispatchers loading in previous calls will show unit's status colors incorrectly. Dispatchers now search locally for updated unit statuses on their active calls list.
6. Status - Cooldown
   * A 500ms cooldown delay has been added to prevent units from spam updating their status.
{% endtab %}

{% tab title="Changed" %}
1. Title Bar and Icon
   * The top title bar and icon of the website now displays "Sonoran CAD" and the Sonoran Logo.
2. Login Logo Padding
   * Additional margin space added to the top of the Sonoran logo on the login page for mobile users.
3. Popup Modal Color
   * Popup editor modal backgrounds have been changed from a red-blue gradient to a dark purple gradient.
4. Side Drawer
   * The side navigation drawer is now NOT displayed by default. The drawer now lays over the screen and does not push content over.
{% endtab %}

{% tab title="Fixed" %}
1. Unit Overflow - Mobile
   * Call editor with multiple units can no longer flow over and cover up the call editor.
2. Duplicated Server Calls
   * Fixed issue with client websocket events not being properly un-registered when navigating away from a page.
3. Switch Community
   * Fixed a bug causing users to be unable to view navigation buttons when switching communities without a page refresh.
4. Community Menu
   * Fixed an issue causing the community menu to be blank when navigating back after a page refresh.
5. Police - Empty Call
   * Fixed an issue causing an empty/no active call from displaying some information on the police call viewer. These fields are now blank instead of displaying default values.
6. Sidebar Navigation Items
   * Fixed an issue where sidebar navigation items would be incorrect when refreshing the community admin, police or dispatch page.
{% endtab %}
{% endtabs %}
