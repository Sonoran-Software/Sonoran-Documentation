---
description: View the changelog for the Sonoran Radio application and in-game resource.
---

# 📋 Changelog

### 2.28.4 09/23/2026

{% tabs %}
{% tab title="Changed" %}
FiveM Radio Frames: Portal Customization

* Existing local skins migrate automatically, and frame layouts and vehicle class rules are now managed in Customize > Overlay.
{% endtab %}

{% endtabs %}
### 2.28.2 09/21/2026

{% tabs %}
{% tab title="New" %}
Overlay Config Overhaul

* Overhaul of the desktop overlay configurator with options to select the screen theme, resize items easier, etc.
* Added an option to reset your overlay configuration to default for your game.

Arma 3 Integration

* Added full in-game integration for Arma 3.

Game Selection

* Select your game when registering your community for easier default customization.
{% endtab %}

{% tab title="Fixed" %}
Community Deletion

* Fixed an issue after deleting a community causing an error, even though the community was fully deleted.
{% endtab %}
{% endtabs %}



### 2.28.0 09/10/2026

{% tabs %}
{% tab title="New" %}
Dispatch AI: Radio Channel Controls

* Added voice commands to switch radio channels, manage scanned channels, report current channels, and repeat current call details.

ER:LC Towers

* Added virtual towers for ER:LC desktop signal strength
{% endtab %}

{% tab title="Fixed" %}
Mobile Builds: Store Publishing

* Updated Android compatibility for Google Play and enabled replacement of pending TestFlight reviews for production iOS builds.
{% endtab %}
{% endtabs %}

### 2.27.18 08/19/2026

{% tabs %}
{% tab title="Fixed" %}
Desktop Overlay: Fullscreen Support

* Fixed desktop radio overlays disappearing behind fullscreen applications when interacted with.
{% endtab %}
{% endtabs %}

### 2.27.12 07/16/2026

{% tabs %}
{% tab title="New" %}
Dispatch AI - Translation Support

* Added multi-language support to Dispatch AI. Allowing users to speak and listen to the AI with non-English languages.
{% endtab %}
{% endtabs %}

### 2.27.11 07/14/2026

{% tabs %}
{% tab title="New" %}
General Theme Update

* Updated the overall theme for dispatchers and admins

Emergency Call Locality

* Added customization to the "Call 911" button to use different numbers other than 911 for other countries

Dial Pad SFX

* Added customizable dial pad SFX when dialing a number in the emergency call tab or in the dispatcher's call tab
{% endtab %}

{% tab title="Fixed" %}
AI Wake Word Disabled

* Fixed an issue where dispatch AI would say that it was offline when a wake word was detected even if your community had disabled the AI
{% endtab %}
{% endtabs %}

### 2.27.10 07/13/2026

{% tabs %}
{% tab title="Fixed" %}
Hotkey Clear

* When pressing ESC on hotkey recording, the radio now properly clears the key instead of only working with the right click menu.
{% endtab %}
{% endtabs %}

### 2.27.9 07/03/2026

{% tabs %}
{% tab title="New" %}
Dispatch AI - Free

* Unlocked dispatch AI to now be available on the free plan of both Sonoran Radio and CAD, with tiered token limits per-month.

Billing Portal UI Revamp

* Updated and revamped the Sonoran Radio billing portal

Portal Revamp

* Updated the main community selection portal to be more consistent with CMS and CAD portals

Account Menu Revamp

* Updated the account menu to be more consistent with the CMS and CAD menus, along with a social connect modal
{% endtab %}

{% tab title="Changed" %}
Header Logo Navigation

* Updated the routing behavior when clicking on the Sonoran Radio logo in the top right
{% endtab %}
{% endtabs %}

### 2.27.7 07/01/2026

{% tabs %}
{% tab title="New" %}
Transmission Transcripts

* All transmission logs for pro communities now contain transcripts from localized AI, no longer requiring communities to enter an external API key and pay for AI usage.

Tone Board Voice Effects

* Added a customization option to disable voice effects for tone board tones.
{% endtab %}

{% tab title="Fixed" %}
Tone Board TTS

* Fixed an issue causing the localized text-to-speech tones on the tone board requiring pro instead of the free version
{% endtab %}
{% endtabs %}

### 2.27.6 06/27/2026

{% tabs %}
{% tab title="New" %}
FiveM Phone Dial

* Added the ability to dial specific phone numbers in FIveM from the dispatch panel

Server Rename

* Added the ability to manually rename a server name in the radio panel for communities who have multiple
{% endtab %}

{% tab title="Changed" %}
Channel ID Display

* Channel IDs are now displayed in the admin configuration menu
{% endtab %}
{% endtabs %}

### 2.27.2 06/08/2026

{% tabs %}
{% tab title="New" %}
Dispatch AI v2

* An overhaul to the AI dispatcher, no longer requiring you to bring your own AI API key.
{% endtab %}
{% endtabs %}

### 2.27.0 06/01/2026

{% tabs %}
{% tab title="New" %}
App Emergency Call

* Added the ability to make emergency calls from the web, desktop, or mobile version instead of only in-game FiveM.

In-Game Name Sync

* Added a new config option allowing communities to sync users' in-game names to their radio display name.

In-Game Emergency Call Mic Setup

* Added a new command for users to change their microphone input device when placing in-game emergency calls.

Custom Zone Maps

* Added the ability to upload custom FiveM maps to the zone editor.

Permission ID Generator

* Added a UI in the members panel to generate and copy a bitwise permission ID for external use (Discord bot role sync).

Admin Permissions

* Removed the ability for users to remove their own admin permission.

Tone Voice Effects

* Tones played on the radio now have the custom voice effects applied to them.

In-Game Errors

* Added standardized error codes to the in-game resource complete with short links to specific documentation.
{% endtab %}

{% tab title="Changed" %}
Permission Removal

* Restricted the ability to remove permissions from your own account

Tone Stop on Channel Exit

* Local tones now stop playing right away when exiting the channel they were playing on

Framework Startup Retry

* Added retry logic when the radio resource starts up if it fails to detect a framework (QB, QBox, ESX) due to startup order.
{% endtab %}

{% tab title="Fixed" %}
In-Game User List Resize

* Fixed an issue with the in-game user list not being able to be resized and moved in some cases.
{% endtab %}
{% endtabs %}

### 2.26.4 04/21/2026

{% tabs %}
{% tab title="New" %}
Translations

* Added translation support

Log Search

* Added the ability to view and search logs from user actions.

FiveM Guest Login

* Added a login method based on in-game ACE permissions, allowing users to login as guest and not require an account.

Ban User

* Added the ability to ban a user, preventing them from re-joining as a pending user.

Tone Board Improvements

* Added the ability to save tone stacks and the board now auto-selects your currently transmitting channels.

Desktop Overlay

* Added customizable desktop overlays to see your radio in-game on any application.

Community Image Customization

* Communities can now set a custom logo for their radio community

Connected Users Popout

* Added a new overlay window with a hotkey to show connected users

Privacy Tab - Recordings

* Added a tab to toggle on/off the ability to send local transmission recordings

Stun

* Added the ability to stun a user from talking temporarily.

TTS Tone

* Added AI text-to-speech support for tone board tones.

Channel Volume

* Added per-channel volume

Client FX

* Added client-sided customizable voice effects.
{% endtab %}

{% tab title="Fixed" %}
Emergency Call Disconnect

* Fixed an issue where creating an emergency call would cause other users to listen in.

URL Migration

* Updated internal S3 storage URLs for newer infrastructure paths.

Temporary Transmit Channel Change

* Fixed an issue where using a hotkey to temporarily transmit in another channel resulted in the first channel still hearing you for a few seconds
{% endtab %}
{% endtabs %}

### 2.26.3 - 04/07/2026

{% tabs %}
{% tab title="New" %}
Client Side Voice FX

* Individual users can now customize voice effects on their own, bypassing community channel-level FX.

Vocoder Preview

* Added audio preview support to the vocoder in the voice effect editor.

Voice Effects: Unlimited

* Removed paid restrictions, allowing the free tier to create unlimited custom voice effect profiles.
{% endtab %}

{% tab title="Changed" %}
EQ V1 Depreciation

* Removed the old, depreciated V1 EQ option from the voice FX customization.
{% endtab %}
{% endtabs %}

### 2.26.0 - 04/03/2026

{% tabs %}
{% tab title="New" %}
Stream Deck Plugin

* Added an official Stream Deck plugin for advanced control and integration

Text-to-Speech Tones

* Added free, localized text-to-speech tones in the tone board editor (permanent) and in the tone board (temporary)
* Tone board users can use speech-to-text to quickly enter text into the text-to-speech input

Per-Channel Volume

* Right-click or select the volume icon on a channel to adjust the per-channer volume
{% endtab %}
{% endtabs %}

### 2.25.0 - 03/30/2026

{% tabs %}
{% tab title="New" %}
Radio Channels: Unlimited for Free

* Free communities can now configure unlimited channels without limits

Tone Board: Unlimited for Free

* Free communities can now configure unlimited tones without limits

Stun User

* Added a new right-click menu option and permission to stun a user from talking temporarily.

Ping User

* Added a new right-click menu option to ping a user

User List Overlay

* Added a new desktop overlay option with a hotkey to display the current list of users and channels

Community Image

* Added the ability to customize your radio community's logo

Hotkey Recording

* Added support for multi-combination hotkeys
* Hotkeys now auto-save after releasing the combination Open Overlay Mobile Button

Open Overlay Mobile Button

* Added a button on the "mobile" (non-dispatch) UI panel for desktop users with smaller windows

Overlay Back Button

* Tweaked the close button on the desktop overlay to swap back to the main radio screen instead of the community menu

Settings Privacy Tab

* Users can now individually opt-out of having their radio transmissions recorded
{% endtab %}

{% tab title="Fixed" %}
Temporary Transmit

* Fixed an issue where using a hotkey to temporarily transmit in a specific channel resulted in your current channel still hearing your transmission briefly
{% endtab %}
{% endtabs %}

### 2.24.5 - 02/18/2026

{% tabs %}
{% tab title="Changed" %}
Desktop Overlay Promo

* Added a check to ensure the community is on Pro before uploading a custom frame.
* Added a popup promotional to encourage upgrading when uploading a custom frame.
{% endtab %}

{% tab title="Fixed" %}
Desktop Overlay Overflow

* Fixed an issue where users in channel would overflow the screen in the desktop overlay.

Free Community Upload Overlay Frame

* Fixed an issue with an undefined error message when a community on the free version would attempt to upload a custom radio frame.
{% endtab %}
{% endtabs %}

### 2.24.4 - 02/17/2026

{% tabs %}
{% tab title="New" %}
Desktop Overlay

* Added a desktop overlay with customizable frames to display your radio on top of any game window.
{% endtab %}
{% endtabs %}

### 2.24.0 - 01/29/2026

{% tabs %}
{% tab title="New" %}
Geo Channels

* Communities can now specify custom coordinate zones with specific radio channels to transmit and scan. When a player enters the zones, their radio channels will be automatically updated.

Degrade/Tunnel Zones - Panel UI

* Degredation zones can now be viewed and configured via the zones panel in Sonoran Radio.

AI Emergency Zones

* Communities can now create emergency zones for dispatch AI to read out CAD emergency calls to specific channels based on location.

AI Auto-Status Routing

* When the AI GPS routes a user to a specific postal or coordinate locations, the AI will automatically mark the unit as en-route and on-scene.

FiveM Guest Login - Framework

* Integrated the guest login with QB-Core, QBox, and ESX to use the player's character name by default.

FiveM Guest Display Name Function

* Communities can now use a custom function to set user's guest display names for their framework.

FiveM Tablet

* Added an in-game tablet to view the dispatch panel.

Tone Board Improvements

* Tone board now auto-selects your currently transmitting channels.
* Tone stacks can now be saved for faster, repeated use.

Notifications

* In-game notifications now support an "auto" mode, automatically detecting any of the new notification options: native, pNotify, ox\_lib, okokNotify, chat, lation\_ui or custom.
{% endtab %}

{% tab title="Changed" %}
FiveM Resource Restart Auto-Connect

* When the FiveM resource is restarted, all users will now automatically re-connect to their radio.
{% endtab %}
{% endtabs %}

### 2.23.2 - 01/07/2026

{% tabs %}
{% tab title="New" %}
Recording Filtering

* Added the ability to filter transmission recordings by user and channel.

User Ban

* Added the ability to ban a user account from the members tab, preventing them from re-joining as a pending user.
{% endtab %}

{% tab title="Fixed" %}
Mobile Server Selection

* Disabled the automatic connect on mobile if the community has multiple servers configured. Allowing the user to select the server prior to connecting.

Members Panel Pagination

* Added pagination to the members table, resolving a timeout issue for communities with several thousand users.
{% endtab %}
{% endtabs %}

### 2.22.2 - 01/02/2026

{% tabs %}
{% tab title="New" %}
Dispatch UI Revamp

* Initial UI revamps for the dispatch panel
{% endtab %}

{% tab title="Fixed" %}
Audio Synchronization

* Fixed an issue where users could sometimes hear transmissions they were not scanning
{% endtab %}
{% endtabs %}

### 2.22.1 - 12/30/2025

{% tabs %}
{% tab title="Fixed" %}
Audio Leak Degradation

* Fixed an issue where scanning and listening to 50-100 users at once would slowly create a node leak, resulting in laggy or stuttering audio until after a refresh.

Push-To-Talk Hotmic

* Fixed an issue where quickly pressing push-to-talk could result in a stuck "hot mic" on.
{% endtab %}
{% endtabs %}

### 2.22.0 - 12/29/2025

{% tabs %}
{% tab title="New" %}
FiveM Login as Guest

* Added a new option for FiveM communities. Allowing users to **bypass the need for a linked Sonoran account to login and utilizing ACE permissions** for all radio access.
{% endtab %}

{% tab title="Fixed" %}
Audio Node Disposal

* Improved audio node disposal for temporarily muted users and channels in attempt to resolve an issue with distortion over time.
{% endtab %}
{% endtabs %}

### 2.21.7 - 12/22/2025

{% tabs %}
{% tab title="New" %}
AI Pursuit Callout Hear

* Added a settings option to toggle on the ability to hear your AI pursuit callouts when enabled.

Community Log Search

* Added a panel to view user logs for configuration edits and more.

Translations

* Added translation support along with several new language examples.
{% endtab %}

{% tab title="Changed" %}
Custom Domain Removal

* Added handling on community downgrade to remove the custom domain from Cloudflare.

Bandwidth

* Tweaked connection subscription events in an effort to minimize bandwidth usage.
{% endtab %}

{% tab title="Fixed" %}
API Channel

* Fixed an issue where changing the radio channel via API would result in client side errors.

Trialing Status

* Fixed an issue where trial subscription days would still place the user on the free version.
{% endtab %}
{% endtabs %}

### 2.21.3 - 10/28/2025

{% tabs %}
{% tab title="New" %}
Resource Exports

* Added and documented several new developer exports in the FiveM resource.
{% endtab %}

{% tab title="Fixed" %}
Shared Channel UI

* Fixed an issue with shared channels causing the in-game/mini UI to show the user in the main shared channel instead of the per-group subchannel.

UI Positions

* Fixed an issue with saving radio UI positions in-game.

CF Custom Domains

* Fixed an issue with newly created custom domains on Cloudflare.

Desktop Split Error

* Fixed an error that would popup on the desktop version.
{% endtab %}
{% endtabs %}

### 2.21.2 - 10/21/2025

{% tabs %}
{% tab title="Changed" %}
Custom Domains Cloudflare for SaaS

* Updated the custom domain setup to use the newer "Cloudflare for SaaS" method, with legacy being depreciated in the near future.
{% endtab %}

{% tab title="Fixed" %}
Reconnection Handling

* Fixed an issue primarily in-game, where users would be unable to hear other transmissions after a network reconnection.
{% endtab %}
{% endtabs %}

### 2.21.0 - 10/17/2025

{% tabs %}
{% tab title="New" %}
Shared Radio Channels

* Communities can now link multiple radio channels together from separate groups. Useful for shared "Interops" or other communication channels between departments.

Signal Jammers

* Added in-game signal jammer items, configurable with QB Core and ESX to block radio signals within a specified radius.

Emergency Call Redial

* Added the ability to re-dial an emergency caller after the call has been ended.

AI Callouts: Postal Code

* Added postal code text-to-speech in the AI pursuit callouts.

Earpiece Notifications

* Added an in-game notification whenever a configured earpiece is inserted or removed, confirming if other players nearby can hear your radio or not.
{% endtab %}
{% endtabs %}

### 2.20.0 - 07/21/2025

{% tabs %}
{% tab title="New" %}
Voice EQ: V2

* Added a new pre and post-effect advanced EQ in the voice effect settings.

Persistent Scanners: Model Options

* Added new model options for in-game persistent scanners.

Persistent Scanners: Move

* Added the ability to move an existing in-game persistent scanner instead of needing to delete and re-add it.

Radio Frame & User List Size Safety

* Added checks to prevent users from resizing the radio or connected users list to be off of their screen, reducing the need for the `/radio reset` command.

Default Settings: ESC Behavior

* Added the ability to set the in-game FiveM ESC default behavior.

VFX Customization: XMIT vs RECV Signal Strength

* Added two sliders in the voice customization testing menu to better reflect in-game usage for both transmitter and receiver signal strength.
{% endtab %}

{% tab title="Fixed" %}
Desktop Channel Hotkey

* Fixed an issue with desktop per-channel hotkeys not being able to be re-registered with a new key.

\#29952 - Persist Frame

* Fixed an issue where frame selection would not persist when in QB item mode.
{% endtab %}
{% endtabs %}

### 2.19.0 - 07/10/2025

{% tabs %}
{% tab title="New" %}
Custom Domain

* Added the ability to utilize a custom domain, logging users directly into your radio community.

Vanity URLs

* Communities now have a free vanity URL located at COMMUNITYID.sonoranradio.com.

Custom Community ID

* Communities can now customize their community ID for easier user joining and vanity URL customization.

Scanner UI Menu

* Added a graphical UI to interact with in-game scanners.

Frame Customization: In-Game Placement Menu

* Added an in-game menu to easily customize new frames and live adjust the positioning, sizing, etc.

Aircraft Frame Support

* Added support to specify custom radio frames for aircraft use.

Proxy URL - IP Backup

* In the event that the CFX proxy fails for push events, servers will automatically fall back to a direct IP and port.

AI Pursuit Callouts

* Added AI powered pursuit callouts, toggleable with a hotkey. When enabled, your radio will automatically transmit your heading, street, and speed.

Speaker Grouping

* Added the ability to group multiple in-game speakers to a single location, cleaning up the dispatch tone board.

\#28477 Panic Open Mic

* Added the option to automatically leave the user's microphone on for a configurable amount of time after pressing the panic button.

Desktop: Side Mouse Button Support

* Overhauled and wrote a custom keybind handler, allowing for better keybind support with side mouse buttons and more.

QBox Death Support

* Added death detection support for QBox, allowing the radio to shut off when dead.
{% endtab %}

{% tab title="Fixed" %}
\#29110 - CAD Call Info Close

* Fixed an issue causing radio call information screens to not clear when a CAD call is closed or your unit is unassigned.

ACE Perm Sync - Don't Require Auto-Approve

* Fixed an issue causing ACE permission sync to require the auto-approve permission before granting any other permissions.

User List Improvements

* Fixed an issue with the in-game online users list not allowing for complete scrolling with large player counts.

\#29490 - Talking while Dead

* Fixed an issue allowing some users to talk on the radio when the prevent transmission while dead feature was enabled.

\#29213 - Server Rack Positioning

* Fixed an issue causing server rack repeaters to spawn and save slightly off of their proper position.

In-Game Chatter - Custom Community PTT SFX

* Fixed an issue causing in-game chatter to use the default mic clicks instead of the custom community-wide microphone clicks.

Text UI Condense Improvements

* Fixed an issue causing the transmitting username on the text based UI to show twice, taking up space and shifting the UI into two parts.

Multiple Servers - Same IP

* Fixed an issue where running multiple servers on the same IP (but different ports) and on the same radio community would cause one to override the push url for the other.

Servers - Admin Delete

* Fixed an issue where users with the admin permission could not delete servers.
{% endtab %}
{% endtabs %}

### 2.18.0 - 05/08/2025

{% tabs %}
{% tab title="New" %}
Simulated Background

* Added new functionality to add in simulated background noise for in-game sirens, boat engines, helicopter rotors, and gunshots.

Multi-Server

* Added support for multiple radio servers under one community.

LB Phone Integration

* Added integration with LB phone to call emergency services and hide the emergency call banner from the user's screen.
* Thank you to [IC-Technologies](https://github.com/IC-Technologies) for providing much of the LB Phone integration code!

Default Community Settings

* Added a new customization option for default user settings when joining a community.

Auto-Gain Control

* Set automatic microphone gain to be enabled by default.

Menu: Repair all Repeaters

* Added a new menu option to repair all radio towers and repeaters at once.

\#28108 - Extended Frequency Options

* Removed frequency restrictions from radio channels in advanced mode.

Management Panel Lookups

* Added new internal tools for faster customer support.
{% endtab %}

{% tab title="Fixed" %}
\#28202 Connected Users List

* Fixed an issue with users transmitting on multiple channels not showing properly on the in-game user list.

\#28418 - Enforce Radio Item

* Fixed an issue causing the enforce radio inventory item function to not work.

HF: Chatter Exclusions

* Fixed an issue with non-props not working properly as earpieces when configured.

Siren Volume Increase Pop

* Removed the volume increase/decrease sound effect when toggled via the in-game siren toggle.

\#28572 - Desktop Copy

* Fixed a permission issue preventing the community ID/key copy function from working on desktop.
{% endtab %}
{% endtabs %}

### 2.17.2 - 04/07/2025

{% tabs %}
{% tab title="Fixed" %}
Audio Duplication and Static

* Fixed an issue causing some users to transmit doubled audio (echoing) and/or constant static when not using the vocoder.

\#28123 - Local SFX

* Fixed an issue causing local custom mic click SFX to not work.

RocketNode Promotional Images

* Fixed an issue causing RocketNode promotional images to not load in the app versions of Sonoran Radio.
{% endtab %}
{% endtabs %}

### 2.17.0 - 04/03/2025

{% tabs %}
{% tab title="New" %}
Multi-Channel Transmit

* `CTRL` + `Click` on a channel to transmit on multiple at once.

Chatter: Volume Level from Source Player

* In-game chatter volume is based on the person's actual radio volume. Turning down your radio on a traffic stop will make it quieter for people around you.

Hotkeys: Per-Channel PTT

* Added customizable per-channel PTT buttons in the dispatcher panel, allowing users to quickly switch and talk in a specific channel with one key.

Hotkeys: Clear/Un-Set

* Right-click on a hotkey to clear it.

Radio Event: 911 Call Answered - Dispatcher Name

* Added the ability to see the 911 call's dispatcher name both in-game and programmatically with the resource API.

Tower Destruction Events

* Added in-game events on tower destruction to help log who damaged the repeaters.
{% endtab %}

{% tab title="Fixed" %}
\#27676: Mic Perm Reset

* If a user clicks deny on the in-game F8 mic permissions, it will reprompt them every time they try and use the radio.

Modern UI - Remove Scrollbar

* Hid the vertical scrollbar on the modern UI when in-game.

Channel TTS Cache Busting

* Fixed an issue causing the channel AI TTS audio to not clear cache when updated directly from the dispatch panel.
{% endtab %}
{% endtabs %}

### 2.16.0 - 03/10/2025

{% tabs %}
{% tab title="New" %}
Qbox & OX Inventory Support

* Added support for OX inventory in both QBCore and QBox

Display Name: CAD Sync

* Added a new CAD integration feature to automatically update your radio display name based on unit information

Display Name: Command

* Added an in-game command to set your radio display name

Display Name: Export

* Added a developer export to set your radio display name

Voice Effects: Import/Export

* Added a modal to import and export radio voice effect profiles

Radio Active Export

* Added a developer export to check if the radio is active (turned on)
{% endtab %}

{% tab title="Fixed" %}
Config.lua Malformat - Throw Clear Error

* In the event of a malformed config.lua, the resource will throw a clear error message

Neaby Chatter: Buzz

* Fixed an issue causing a loud but short "buzz" sound when passing a nearby radio (chatter) at rapid speeds

HF: #27364 Panic Keybind

* Fixed an issue throwing an error when pressing the in-game panic keybind

Scan List Restore Post-Transmit

* Fixed an issue causing the scan list to not properly restore after a super short transmit (by yourself or others) in your primary channel
{% endtab %}
{% endtabs %}

### 2.15.0 - 02/12/2025

{% tabs %}
{% tab title="New" %}
ACE Permission Sync (Auto-Approve + Community Perms)

* Added an ACE permission sync option to automatically approve users and grant community permissions based on in-game ACE permissions.

In-Game Channel Changer - Group Handling

* Added a right-click option on the top channel change knob in-game to toggle between changing channels and channel groups.

Tone Board: Live TTS AI

* Added the ability to generate temporary AI powered text-to-speech tones directly from the tone board.

Scanned Channel Audio Indicator

* Added new UI elements on the in-game radio to indicate a transmission from a scanned channel, along with the user's name and channel.

\#27054 Mute Scanned on Primary Transmission

* Added the setting option (enabled by default) to mute scanned channels when another user is talking on your primary channel.

\#27143 Group Change Channel Persistence

* Using hotkeys to change your group from one to another now saves and restores your last used channel when going back to a previous group.

Volume Hotkey SFX

* Added customizable hotkey sound effects for the volume hotkeys.

Tunnels: Menu Expansion

* Added a toggle visibility button in the tunnel editor menu.
* Added the ability to select and remove a configured tunnel via menu.

Dispatch UI: Show Channel IDs

* Dispatch UI now has a toggle button to view channel IDs for in-game permissions.

Channel & Group Hotkey: In-Game Notify on No Options

* Added small in-game notices on channel and group change hotkeys if there is no other group or channel to page to, in order to reduce confusion.
{% endtab %}

{% tab title="Fixed" %}
\#27173 Hotkey Resize

* Fixed an issue causing desktop hotkeys to stop working if the screen was resized down to mobile UI mode and back.
{% endtab %}
{% endtabs %}

### 2.14.0 - 01/30/2025

{% tabs %}
{% tab title="New" %}
Panic: Radio & Dispatch Display

* Expanded radio panic functionality to reflect in the in-game and dispatch UI with a customizable sound.

Volume Hotkeys

* Added in-game and in-app hotkeys to quickly adjust the radio volume by a configurable amount.

Channel Hotkeys

* Added in-game and in-app hotkeys to quickly page through channels in your group.

Group Hotkeys

* Added in-game and in-app hotkeys to quickly page through channel groups.

Sirens On Volume Increase

* Added automatic, configurable volume adjustment when sirens are toggled on in-game.

In-Game Channel Transmit Command

* Added a new in-game command to toggle transmitting on a specific channel.

In-Game Scan List Command

* Added a new in-game command to toggle a scan list.

In-Game Scan Channel Command

* Added a new in-game command to toggle a channel scan.

In-Game Stream Deck Integration

* Documented Stream Deck integration with the new FiveM commands.

Frame Selection Persist

* In-game frame selection now persists/saves for the next time you join.

Emergency Call Export: Answered + Ended

* Added additional integration values for in-game emergency calls to determine when the call is answered by a dispatcher or ended by a dispatcher.

Emergency Call Resource Export: Name Parameter

* Added an additional parameter to customize the caller's name for in-game emergency calls.

Scan List: Drag-and-Drop Reorder

* Scan lists can now be reordered via drag-and-drop

Modern UI: Group Name Display

* The modern in-game radio style display now also lists the channel group.
{% endtab %}

{% tab title="Fixed" %}
Speaker Menu: Live Updates + JSON Corrupted

* Fixed issues causing the in-game speaker location menu to not live update in the dispatch tone board and cause the JSON config to become malformed.
{% endtab %}
{% endtabs %}

### 2.13.2 - 01/22/2025

{% tabs %}
{% tab title="Fixed" %}
AI Tone TTS: Removed Character Limit

* Removed the 50 character limit for community integrated AI text-to-speech tones.

Transmission Logs: Vocoder Cutoff

* Fixed an issue causing transmission logs to be cutoff when using the vocoder effect due to other optimizations.

Transmission Logs: Download

* Fixed an issue causing downloaded transmission logs to be corrupt and not playable.
{% endtab %}
{% endtabs %}

### 2.13.0 - 01/21/2025

{% tabs %}
{% tab title="New" %}
In-Game Physical Scanners

* Added in-game physical scanner items for civilians to hear radio transmissions

Transmission Logs

* Added transmission logs in the dispatch panel with optional AI transcriptions

\#26361 Transmit to In-Game Speakers

* Added the ability to locally record microphone audio to play over the tone board to radios and in-game speakers

AI: Tone Text to Speech

* Added the ability to generate AI text to speech tones

\#26385 Stacked Tones

* Added the ability to "stack" and play multiple tones in a row

\#26534 In-Game/Mobile Radio Scan Lists

* Added configurable scan lists to quickly swap between multiple scanned channel groups

\#26414 Persist scanned channels

* Scanned channels now save locally to be restored when turning the radio back on

Vocoder Bitrates

* Added adjustable bitrates to the vocoder voice effect

Free Vocoder

* Made the new vocoder available to the free version of Sonoran Radio

In-Game Text Radio SONORAN Branding

* Added small branding to the text based display in-game when large enough (vehicle display)

Vocoder PTT Timing

* Overhauled and improved vocoder PTT handling to ensure local UIs update much faster without a long delay before and after the transmissions
{% endtab %}

{% tab title="Fixed" %}
\#26458 Connect: Permission Denied Mic General Error

* Added improved notice and handling in the browser version if microphone permissions are not granted

Hotkey: Prevent Left Mouse

* Blacklisted the left mouse button from being used as a hotkey
{% endtab %}
{% endtabs %}

### 2.12.0 (Full Release) - 12/31/2024

{% tabs %}
{% tab title="New" %}
Radio Chatter: Vehicle Detection

* Added vehicle detection to lower and muffle nearby radio chatter if the user enters a vehicle. Chatter volume resumes if the window is down/broken or the door opens.

Emergency Call: Nearby Chatter

* When a user is making an emergency call on the phone, nearby users can now faintly hear the dispatcher talking on the other side of the phone.

Voice Effect: Clipping

* Added a new "clipping" voice effect to cut audio in and out when the radio signal is poor. This effect is designed to pair particularly well with the vocoder.

Transfer Community

* Added an option in the administration panel to transfer community ownership to another user.

Emergency Call: SFX

* Added a community customizable incoming emergency call sound effect for dispatchers.
{% endtab %}

{% tab title="Fixed" %}
Backend Error API Clearnup

* Cleaned up general backend errors from the API

In-Game Debug

* Removed leftover in-game debug prints
{% endtab %}
{% endtabs %}

### 2.11.0 (Beta) - 12/19/2024

{% tabs %}
{% tab title="New" %}
Text Style Display

* Added a new screen display style with a "text-based" UI for older radio styles

Settings UI: Tabs

* Overhauled the settings modal with tabs for each section

Hide Radio ESC User Config

* Added three radio display options for ESC behavior (stay on screen, hide, show only while transmitting)

Expired Community Removal

* Added automatic community deletion, if on the free version, after 30 days with a 21 day notice
{% endtab %}

{% tab title="Fixed" %}
Emergency Call: Fix Hear Radio Chatter Nearby

* Fixed an issue where users could not hear nearby radio chatter while on a 911 call

Hide/Close Radio when QB Item Gone

* Fixed an issue where removing the QB/ESX radio item would not turn off and remove the radio from the user's screen
{% endtab %}
{% endtabs %}

### 2.10.0 (Beta) - 12/03/2024

{% tabs %}
{% tab title="New" %}
\#25437 Radio In-Game Display

* The in-game radio will now persist on the user's screen, until they use `/radio hide`. Per-user customization will be released in a coming update.

\#25917 - EUP Chatter

* Added support for drawable items (in addition to the existing prop support) for EUP chatter exclusion.

Permission Reactivity

* When connected to the radio, user permissions will now update in real time.

Customize 911 Command

* Added a new config `emergencyCallCommand` property to customize the /radio 911 to other numbers or words based on locality.

Configure Default Keybinds

* Added new configuration values to customize the default radio keybinds for new in-game users.

In-Game Unlink via Pending Screen

* Added an account un-link for the in-game pending community approval screen.

Community Cards - Leave Community

* Added a leave community button in the portal.

In-Game Audio Subprocess Info

* Added a short URL guide in the in-game volume slider to help users who may be having a hard time hearing people.

Homepage - Emergency Call Promo

* Added a promotional tab on the front page for the in-game emergency call feature.
{% endtab %}

{% tab title="Fixed" %}
\#25858 Radio Frames

* Fixed an issue causing some communities to have no frame options available in settings based on their config values.

HUD Disconnect

* Fixed an issue causing the HUD view to show as disconnected.

\#25846 - Connected Users API

* Fixed an API 500 error when requesting the active users, but none are connected.

\#25741 - Radio Inventory

* Fixed an issue where using enforceRadioItem would throw an error that the radio item is not in your inventory.
{% endtab %}
{% endtabs %}

### 2.9.0 (Beta) - 11/07/2024

{% tabs %}
{% tab title="New" %}
In-Game Emergency Calls

* Added a way for players in-game to place an emergency (911) call to dispatchers

Developer Export - Radio Signal

* Added an export to get a user's radio signal quality

Developer Export - Panic

* Added an export to listen for a radio panic press

\#24896 Radio Item - Customize ID and Name

* Added customization options for the in-game radio item's ID and name

Auto-Join User on URL Load

* Users automatically join the community if they load a community's specific URL

Disable PTT SFX For Myself and/or Others

* Added a settings option to disable hearing mic-clicks for yourself and/or other users

Mute Scanned When Transmitting

* Added a settings option to mute scanned channels while transmitting

Debug Mode Toggle Command

* Added a toggle command for debug mode

Sonoran Account Avatar

* Added the user's Sonoran account avatar in the panel

Core Security Update

* Improved credential storage security

Browser Hotkey Notice - Not Global

* Added a notice in the settings page, if using the web version, that hotkeys are not "global" and the page must be in focus
{% endtab %}

{% tab title="Fixed" %}
Apple Silicon Hotkey Fix

* Fixed an issue causing global desktop hotkeys to be unavailable on Apple silicon based computers

In-Game Channel Selector - Private Channels

* Fixed an issue allowing users without permissions to access a private channel if they used the channel selector in-game

Toggle repeater mapping spamming chat

* Removed debug logs on repeater toggle

\#24958 QB Item Check Function

* Updated a depreciated QB item check method

HF: #25273 - PTT/Audio Flicker

* Fixed an issue causing vMenu Proxychat and Mumble Chat to flicker and stick with TalkSync enabled

HF: QB Metadata Tower Break

* Fixed an issue in QB Core mode causing tower signals to always be perfiect if the player had no metadata property.

HF: Member Tab

* Fixed an issue causing the members tab to not display if the user had a permission to kick, rename, or approve members but not the admin permission.

HF: Channel Permissions Owner Bypass

* Fixed an issue causing private channels to be hidden for the server owner.

HF: Move User 500

* Fixed an issue where moving your channel via context menu would throw a 500 error.

HF: Channel Add in Group via Dispatch

* Fixed an issue where adding a new channel via dispatch panel would put it in the first channel group, not the group that it was added from.

HF: TTS Replay On Reconnect

* Fixed an issue where connecting to a non-default channel, disconnecting by switching radio panel tabs, and re-connecting would start playing the TTS of the old channel name before correcting.

HF: AI TTS Generation on Create Channel

* Fixed an issue causing AI TTS generation to fail when creating a new channel.
{% endtab %}
{% endtabs %}

### 2.8.0 (Beta) - 10/10/2024

{% tabs %}
{% tab title="New" %}
CAD Integration

* Added `sonrad` integration to display Sonoran CAD call information on the in-game radio, along with panic functionality

Top-Down HUD Improvements

* Improved the top-down radio HUD to display the channel name, frequencies, and color changes when a user is transmitting

Talkover Override

* Added a new permission granting users the ability to double-press their PTT button to override the talkover protection and silence the other transmitter

CMS Sync - Talkover Override Permission

* Added the ability to manage talkover override permission via Sonoran CMS

Talkover Override Success Tone

* Added a new, community-customizable talkover override success sound effect

Homepage Revamp

* Completely revamped the homepage for feature highlights

UI Cleanup/Component Optimization

* General internal cleanup and optimizations, making way for new future UI possibilities

Community Kick - Disconnect from Radio

* When a player is kicked from the community (via Radio members tab or CMS) they will now be automatically disconnected from the radio, preventing them from transmitting any further

Home Button - Auto-Reconnect

* Pressing the home button on the in-game radio (to hard refresh) will now automatically re-connect the user

Optimized Signal Quality Reports

* Optimized in-game tower signal reporting to spam fewer updates across the websockets, only reporting when there is a significant enough change
{% endtab %}

{% tab title="Fixed" %}
Permission Checks

* Fixed multiple backend permission checks preventing users without the `Admin` permission from accessing functionality

Key Input on Power Toggle

* Fixed an issue causing the in-game "press any key" popup to display every time you turned off/on the radio, instead of just once at the initial game join

\#25095 - TTS Fast

* AI channel name TTS will now stop playing if you quickly switch to another channel before the audio has finished

Radio Frame - Persist Selection

* Fixed an issue where selecting a different radio frame in the settings would not save/persist after closing the radio

Mobile repeaters won't toggle on

* Fixed an issue causing the `G` button in vehicles configured to act as a mobile repeater to not work

Admin Panels - No Perm Redirect

* Added local permission checks to prevent users from loading UI panels by changing the browser URL, even though the backend properly prevented data manipulation

Unable to Leave Pending Community

* Fixed an unauthorized error from happening when trying to leave a community you were pending in.

New User - Unknown Display Name

* Fixed an issue where a user newly joining the community and connecting to the radio would display as "Unknown User" to people already connected

QB Reference Error

* Fixed an error causing the in-game resource to fail under certain QB Core modes
{% endtab %}
{% endtabs %}

### 2.7.2 (Beta) - 09/27/2024

{% tabs %}
{% tab title="Fixed" %}
Voice Degradation

* Fixed an issue causing some users to experience gradual voice degradation that was only fixed after refreshing/power toggling the radio

Digital Voice Effect

* Smoothed and reduced the initial digital voice filter effect
{% endtab %}
{% endtabs %}

### 2.7.0 (Beta) - 09/25/2024

{% tabs %}
{% tab title="New" %}
Voice Effect Customization

* Added the ability to create multiple custom voice effect filters and apply them per-channel.

Tone Board - Play to In-Game Speakers

* Added the ability configure in-game speakers and play radio tones to them.

Tunnel Signal Degrade

* Added the ability to configure in-game tunnels and other 3D areas that reduce radio signal quality.

AI Channel Text-To-Speech

* Added automatic AI generated channel name TTS that will play when connecting and switching channels.

Context Menu Name Change

* Added the ability to right-click on a connected user to quickly modify their display name.

Private Channel Permissions

* Added the ability to toggle channel visibility to private, requiring a user permission to connect.

CMS x Radio - Private Channel Permissions

* Added the ability to automatically manage private radio channel permissions via Sonoran CMS.

CMS x Radio - Name Sync

* Added the ability to automatically manage radio display names via Sonoran CMS.

Nearby Radio Chatter - Earpiece

* Added the ability to configure in-game earpiece EUP that will prevent people nearby from hearing your radio.

Game Resource Optimization

* Added multiple new in-game optimizations to improve resource performance.

Connected Users List - Save Position

* Added size and position persistence to the in-game connected users list.

Proxy URL - Retry

* Added retry logic and UI errors in the event that the in-game resource can not get the proxy URL.
{% endtab %}

{% tab title="Fixed" %}
\#24819 - Talkover on Scan

* Fixed an issue causing talkover protection to prevent someone listening to a channel with someone transmitting from transmitting in their own, clear channel.

Tone Configuration Fixes

* Fixed multiple issues with tone files and tone cosmetic customizations not being persisted or removed.

CAD Livemap Repeater Types

* Fixed an issue causing only the radio tower type repeaters to show on the CAD livemap.
{% endtab %}
{% endtabs %}

### 2.6.2 (Beta) - 09/13/2024 (In-Game Only)

{% tabs %}
{% tab title="Fixed" %}
In-Game Connected Users

* Fixed an issue with the connected users list causing some names to not change to green while the user was talking
{% endtab %}
{% endtabs %}

### 2.6.1 (Beta) - 09/11/2024 (In-Game Only)

{% tabs %}
{% tab title="New" %}
In-Game Connected Users

* When talking, user names will display as green
* Added proper CSS ellipsis to display names
* Added tooltip to user display names
* Alphabetically sorted display names
{% endtab %}

{% tab title="Fixed" %}
Radio and Connected User Hide

* Fixed an issue causing the radio and connected user menu to not hide when pressing ESC if no hotkey was set
{% endtab %}
{% endtabs %}

### 2.6.0 (Beta) - 09/11/2024

{% tabs %}
{% tab title="New" %}
Hear Chatter In-Game

* Civilians can now hear live radio chatter when there is a nearby radio. This requires the pro version.

Top-Down HUD

* Added the top-down radio HUD UI in-game

Multi-Frame

* Added four radio frame options in-game to choose from, customizable by the community

In-Game Connected List

* Added an in-game connected users list

Cache Busting

* Added improved cache busting to ensure in-game radio updates are recieved faster by users

Mic Clicks - For Local Only

* Per-user custom mic clicks are now only heard by that user, instead of everyone on the radio

In-Game Talk Sync

* Talk in-game at the same time you talk in the radio
{% endtab %}

{% tab title="Fixed" %}
Vehicle Radio Blue Screen

* Fixed an issue causing switching from the handheld to vehicle radio causing a blue radio screen for some users until turned off and back on

In-Game Talkover

* Fixed an issue allowing some users to talkover others while talkover protection was enabled
{% endtab %}
{% endtabs %}

### 2.5.0 (Beta) - 08/16/2024

{% tabs %}
{% tab title="New" %}
Sonoran CMS Integration

* Added the ability to manage your radio user's joining, permissions, and kicking via Sonoran CMS ranks and Discord roles.

Input/Output Device Selection

* Added the ability to customize and test the input and output sources via the settings menu.

Tone Board

* Added a customizable toneboard allowing dispatchers to play or repeat tones on specific channels and groups.

Server Customization UI

* Consolidated the server customization menu into organized tabs and improved the in-game install with a step-by-step tutorial.

Animation Download

* Added a tutorial step in the server customization menu to install the custom radio animations.
{% endtab %}

{% tab title="Fixed" %}
New Join 403

* Hotfix: Fixed an issue causing newly joined members to get an error on the web and desktop versions.
{% endtab %}
{% endtabs %}

### 2.4.0 (Alpha) - 08/05/2024

{% tabs %}
{% tab title="New" %}
Channel Groups & Organization

* Added the ability to create channel groups and easily organize via drag-and-drop

Custom Talkover Tone

* Added the ability to customize a community-wide talkover error SFX

Signal Bars

* Added visual signal bars in-game to view your tower connectivity

SFX Volume

* Added the ability to customize the sound effect volume in the settings menu

Auto-Join on Link

* Users now automatically join the Sonoran Radio community after linking in-game

In-Game Enhanced Error Handling

* Improved errors and ensured the resource fails to start without a proper community ID and API key

Mobile UI improvements

* Added multiple improvements for mobile users, including a dedicated UI for the radio panel

Mobile PTT Button

* Added a push to talk button to the mobile version (web, apps coming soon) to utilize the rado on mobile devices
{% endtab %}

{% tab title="Fixed" %}
Fix: Desktop Updater

* Fixed an issue causing the desktop application auto-updater from working

PTT In-Game & Radio

* Fixed an issue preventing scripts from making the player talk in-game at the same time as they're talking on the radio

\#23608 - Server Members

* Fixed an issue limiting the number of users visible in the server members tab

\#23542 - Tower Components

* Fixed an issue causing pieces of a radio tower to be left after removal

\#23758 Discord and Apple Login Window

* Fixed an issue on the desktop app opening the radio in a second window after login via Discord or Apple
{% endtab %}
{% endtabs %}

### 2.3.0 (Alpha) - 7/11/2024

{% tabs %}
{% tab title="New" %}
Repeaters - UI Menu

* Added an in-game repeater menu to add, edit, and remove repeaters.

In-Game Volume

* Added the ability to adjust the system-wide volume in-game via the settings menu.

In-Game Per-User Volume

* Added the ability to right click on a user in-game to adjust their volume.

Panel - Customized Download

* Added a new download link in the radio panel that includes a pre-configured community ID and API key.

In-game Radio - Logout

* Added an option to logout and unlink your radio in-game via the settings menu.

Startup - Link IP

* Added an automatic API call to link your server's IP address to your community ID. This will be used for an upcoming integration.

API Key - Rotate

* Added the ability to rotate and refresh your API key if leaked.

Menu CMS Discovery

* Added the CMS community discovery spotlight to the portal's community selection menu.
{% endtab %}

{% tab title="Fixed" %}
Talkover Protection In-Game

* Fixed an issue causing talkover protection in-game to fail.

Distortion Inconsistencies

* Fixed an issue causing in-game distortion due to tower signal to not work consistently.

In-Game Permission Re-Request

* Fixed an issue causing the user to be asked for microphone permissions on every join.
{% endtab %}
{% endtabs %}

### 2.2.1 (Alpha) - 07/03/2024 (In-Game Only)

{% tabs %}
{% tab title="Fixed" %}
Tower Distance

* Fixed an issue causing tower distortion levels to "freeze" in certain cases.
{% endtab %}
{% endtabs %}

### 2.2.0 (Alpha) - 07/02/2024

{% tabs %}
{% tab title="New" %}
In-Game Tower Signal

* Added variable audio distortion based on how close a user in-game is to a radio repeater model.

User Display Names

* Added the ability to customize user display names and two new permissions to set who can change their, and others', display name.

Link UI Refresh

* Improved the /link portal UI with automatic focusing, forward/back navigation, and submission.

In-Game Towers

* Added three radio repeater models for in-game signal strength.

In-Game Resize and Move

* Added the ability to resize and move the radio UI.

Custom Animation Support

* Added the ability to disable in-game animations while talking, for custom animation scripts.

Developer Exports - PTT

* Added developer exports when a user activates and deactivates their PTT hotkey.
{% endtab %}

{% tab title="Fixed" %}
\#23262 - Desktop Hotkey

* Fixed an issue with updating your keybind not setting until an application restart
*
{% endtab %}
{% endtabs %}

### 2.1.1 (Alpha) - 06/21/2024

{% tabs %}
{% tab title="New" %}
Desktop Application - Hotkey Setting

* Improved handling for detecting a wider array of hotkeys in the desktop application, including standard mouse buttons.
{% endtab %}
{% endtabs %}

### 2.1.0 (Alpha) - 06/18/2024

{% tabs %}
{% tab title="New" %}
Login Link

* New login for in-game resource/mobile

Community ID

* Use community IDs in URL instead of numeric IDs

Volume Control

* Added per-user volume controls

Talkover Protection

* Added toggleable talkover protection

Channel Change: Drag-and-drop

* Move users by dragging and dropping
{% endtab %}

{% tab title="Fixes" %}
* Fixed connecting on another window redirecting to home (which would break the in-game resource)
{% endtab %}
{% endtabs %}

### 2.0.1 (Alpha) - 06/18/2024

{% tabs %}
{% tab title="Fixes" %}
Community ID

* Accept community ID in place of standalone ID

\#22925 - ESC Error

* Fixed ESC with the radio open causing an error, preventing you from leaving the radio
{% endtab %}
{% endtabs %}

### 2.0.0 (Alpha) - 06/06/2024

{% tabs %}
{% tab title="New" %}
Initial Release
{% endtab %}
{% endtabs %}
