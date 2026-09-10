# Error Codes

## Error and Warning Codes

SonoranCAD FiveM uses structured `ERR-XX-###` and `WRN-XX-###` codes that point back to this document.

You can link directly to any code by appending it as a fragment identifier. Example: `sonorancad.com/error/WRN-CORE-001`

Warnings use a `WRN-*` prefix. Errors use an `ERR-*` prefix. Some warning-level log paths still intentionally reference `ERR-*` codes when the condition represents a real support issue even if the integration can keep running.

### Core Errors

#### ERR-CORE-001

**Key:** `STEAM_ERROR`

**What it means:** SonoranCAD is configured to use Steam identifiers, but the FXServer Steam Web API key is missing.

**How to fix it:** Set `steam_webapiKey` in your server configuration or switch `primaryIdentifier` away from `steam`.

#### ERR-CORE-002

**Key:** `PORT_MISSING_ERROR`

**What it means:** The configured CAD server entry could not be found for the active `serverId`.

**How to fix it:** Verify the `serverId` in `config.json` or your convars and confirm that the same server exists in the CAD server list.

#### ERR-CORE-003

**Key:** `PORT_CONFIG_ERROR`

**What it means:** The game server port does not match the port configured in CAD.

**How to fix it:** Align the FXServer `netPort` with the CAD server entry, or allow the integration to auto-correct the CAD entry.

#### ERR-CORE-004

**Key:** `MAP_CONFIG_ERROR`

**What it means:** The live map port configured in CAD does not match the server configuration.

**How to fix it:** Update the CAD map or listener port for the affected `serverId` so it matches the actual server port.

#### ERR-CORE-005

**Key:** `PORT_OUTBOUND_ERROR`

**What it means:** The detected outbound IP does not match the configured CAD IP.

**How to fix it:** Update the CAD server IP or outbound IP settings so they match the actual public IP used by the server.

#### ERR-CORE-006

**Key:** `PORT_OUTBOUND_MISMATCH`

**What it means:** SonoranCAD detected an IP mismatch between runtime networking and CAD configuration.

**How to fix it:** Review `mapIp`, `outboundIp`, and `differingOutbound` in the CAD server entry and correct them.

#### ERR-CORE-007

**Key:** `CONFIG_ERROR`

**What it means:** The core configuration could not be loaded or parsed.

**How to fix it:** Ensure `sonorancad/configuration/config.json` exists, contains valid JSON, and was not accidentally renamed to something like `config.json.json`.

#### ERR-CORE-008

**Key:** `API_ERROR`

**What it means:** The integration could not retrieve version information from the CAD API.

**How to fix it:** Check the API key, community ID, outbound connectivity, and SonoranCAD API status, then restart the resource.

#### ERR-CORE-010

**Key:** `ERROR_ABORT`

**What it means:** Startup was aborted because one or more critical errors were encountered.

**How to fix it:** Review the earlier `ERR-*` entries in the console or log output, correct the first critical failure, and restart the resource.

#### ERR-CORE-011

**Key:** `PLUGIN_DEPENDENCY_ERROR`

**What it means:** A submodule was enabled but one of its required dependencies was not loaded.

**How to fix it:** Install or start the missing dependency resource, or disable the submodule that requires it.

#### ERR-CORE-012

**Key:** `PLUGIN_VERSION_MISMATCH`

**What it means:** A submodule requires a newer version of another plugin or resource than is currently installed.

**How to fix it:** Update the named plugin or resource to the required version, or disable the dependent submodule until versions match.

#### ERR-CORE-013

**Key:** `PLUGIN_CONFIG_OUTDATED`

**What it means:** A submodule configuration file is older than the current template version.

**How to fix it:** Compare your `*_config.lua` with the matching `*_config.dist.lua` and carry forward any missing options. [Learn more about this process here](../../submodule-configuration/submodule-configuration-updates.md).

#### ERR-CORE-014

**Key:** `PLUGIN_CORE_OUTDATED`

**What it means:** A plugin requires a newer SonoranCAD core version than the one currently installed.

**How to fix it:** Update the SonoranCAD core resource to the required version.

#### ERR-CORE-015

**Key:** `CUSTOM_POSTALS_FILE_NOT_FOUND`

**What it means:** The configured custom postals file could not be found.

**How to fix it:** Place the referenced file in the expected postals directory or update the configuration to point to the correct filename.

#### ERR-CORE-016

**Key:** `POSTAL_RESOURCE_MISSING`

**What it means:** The configured postal resource name does not exist on the server.

**How to fix it:** Correct the resource name in configuration or install the missing postal resource.

#### ERR-CORE-017

**Key:** `POSTAL_RESOURCE_STOPPED`

**What it means:** The postal resource exists but is not started.

**How to fix it:** Add the postal resource to your startup config and ensure it starts before players connect.

#### ERR-CORE-018

**Key:** `POSTAL_RESOURCE_BAD_STATE`

**What it means:** The postal resource is present but in an invalid runtime state.

**How to fix it:** Inspect that resource for startup errors, fix them, and restart it before starting SonoranCAD features that rely on it.

#### ERR-CORE-019

**Key:** `POSTAL_FILE_READ_ERROR`

**What it means:** SonoranCAD could not read the configured postal data file.

**How to fix it:** Verify the file exists, is readable by the server process, and is valid for the selected postal mode.

#### ERR-CORE-020

**Key:** `POSTAL_CUSTOM_RESOURCE_FILE_ERROR`

**What it means:** A custom postal resource did not expose the expected postal file metadata.

**How to fix it:** Add the expected `postal_file` metadata to that resource's `fxmanifest.lua` or use a supported postal resource.

#### ERR-CORE-021

**Key:** `IDCARD_RESOURCE_NOT_STARTED`

**What it means:** The `sonoran_idcard` resource is installed but not running.

**How to fix it:** Start `sonoran_idcard` in your server config before using civilian ID display features.

#### ERR-CORE-022

**Key:** `IDCARD_RESOURCE_MISSING`

**What it means:** The `sonoran_idcard` resource could not be found.

**How to fix it:** Install the correct `sonoran_idcard` resource and keep the resource name exact.

#### ERR-CORE-023

**Key:** `IDCARD_RESOURCE_BAD_STATE`

**What it means:** The ID card resource exists but is not in a usable runtime state.

**How to fix it:** Check that resource for load errors and fix them before enabling ID card UI integration.

#### ERR-CORE-024

**Key:** `INCORRECT_WKWARS2X_VERSION`

**What it means:** The installed `wk_wars2x` resource version is incompatible with this integration.

**How to fix it:** Replace it with the supported version from Sonoran Software's repository.

#### ERR-CORE-025

**Key:** `CAD_API_DISABLED`

**What it means:** API sending is disabled by configuration or a runtime toggle.

**How to fix it:** Re-enable API sending in config or convars, or stop using features that require outbound CAD API requests.

#### ERR-CORE-026

**Key:** `UPDATE_CHILD_PERMISSION`

**What it means:** Auto-update failed because FiveM child-process permission was not granted.

**How to fix it:** Run `exec sonorancad.cfg` or add the required child-process ACE permission for SonoranCAD's updater.

#### ERR-CORE-027

**Key:** `INVALID_API_MODE`

**What it means:** The configured SonoranCAD API mode was invalid and the resource fell back to production.

**How to fix it:** Set `mode` to a supported value such as `production` or `development`.

#### ERR-CORE-028

**Key:** `FILE_WRITE_FAILED`

**What it means:** The resource failed to write a required file to disk.

**How to fix it:** Check folder permissions, available disk space, and whether the target path is writable by the server process.

#### ERR-CORE-029

**Key:** `CAD_API_REQUEST_FAILED`

**What it means:** A request to the Sonoran CAD API failed.

**How to fix it:** The API call failed for some reason. This could be a bad API payload format from the resource or an issue with the backend. Double-check for other errors related to a bad API key. Otherwise, enable debug mode to capture the full API payload being sent at the same time as the error occurs and provide that to the support team/developers.

#### ERR-CORE-030

**Key:** `TABLET_RESOURCE_NOT_STARTED`

**What it means:** The `tablet` resource is installed but not running.

**How to fix it:** Use `exec sonorancad.cfg` and make sure `sonorancad.cfg` contains `ensure tablet` before `ensure sonorancad`.

#### ERR-CORE-031

**Key:** `TABLET_RESOURCE_MISSING`

**What it means:** The `tablet` resource could not be found.

**How to fix it:** Use the bundled `sonorancad.cfg`, confirm it contains `ensure tablet`, and install the resource with the exact name `tablet`.

#### ERR-CORE-032

**Key:** `TABLET_RESOURCE_BAD_STATE`

**What it means:** The `tablet` resource exists but is not in a usable runtime state.

**How to fix it:** Use `exec sonorancad.cfg`, confirm it contains `ensure tablet`, and fix the startup errors reported by `tablet`.

#### ERR-CORE-033

**Key:** `LOCAL_NETWORK_TIMEOUT`

**What it means:** The local FiveM server network timed out while connecting to Sonoran CAD.

**How to fix it:** If you are seeing this routinely, contact your server host. The network may be overwhelmed or experiencing degraded performance. This suggests your FiveM server is getting timeouts and connection drops.

#### ERR-CORE-034

**Key:** `LOCAL_NETWORK_CONNECT_TIMEOUT`

**What it means:** The local FiveM server connection to Sonoran CAD timed out.

**How to fix it:** If you are seeing this routinely, contact your server host. Check the server host, firewall, proxy, or upstream network connection for connection setup delays or blocked outbound traffic.

#### ERR-CORE-035

**Key:** `CAD_RECORD_UNIQUE_CONFLICT`

**What it means:** A CAD record create or edit request failed because one of the fields marked unique already has the same value on another record.

**How to fix it:** Find the unique field value in the record payload, choose a value that is not already used, or update the existing CAD record instead of creating a duplicate.

#### ERR-CORE-036

**Key:** `APIKEY_CONVAR_UNINITIALIZED`

**What it means:** SonoranCAD was started without the required convar and permission setup from the bundled `sonorancad.cfg`. This can break SonoranCAD updates and third-party integrations.

**How to fix it:** In `server.cfg`, remove every `ensure sonorancad` line, use `exec @sonorancad/sonorancad.cfg` instead, and then fully restart FXServer.

#### ERR-CORE-900

**Key:** `UNHANDLED_SERVER_ERROR`

**What it means:** An unexpected server-side error occurred and was normalized into a generic coded failure.

**How to fix it:** Use the support reference in the logs to find the exact exception details and fix the underlying code path or bad input.

#### ERR-CORE-901

**Key:** `UNHANDLED_WARNING`

**What it means:** A warning occurred that did not map to a more specific registered error code.

**How to fix it:** Review the warning text and support reference in the logs. This usually indicates degraded behavior rather than a full failure.

#### ERR-CORE-902

**Key:** `INVALID_COMMAND_ARGUMENT`

**What it means:** A command was called with missing or invalid arguments.

**How to fix it:** Re-run the command with the documented arguments, or update the calling script or UI if it is sending malformed parameters.

#### ERR-CORE-903

**Key:** `FEATURE_UNAVAILABLE`

**What it means:** The requested feature cannot be completed in the current state.

**How to fix it:** Confirm required caches, resources, and dependent subsystems are available, then retry.

#### ERR-CORE-904

**Key:** `MALFORMED_PAYLOAD`

**What it means:** SonoranCAD received incomplete or invalid structured data.

**How to fix it:** Validate the event payload, HTTP body, or NUI or client request that triggered the error.

#### ERR-CORE-905

**Key:** `PERMISSION_DENIED`

**What it means:** The user or command source does not have permission for the requested action.

**How to fix it:** Grant the necessary ACE permission or disable the permission gate for that feature if appropriate.

#### ERR-CORE-906

**Key:** `CLIENT_RUNTIME_ERROR`

**What it means:** A client-side runtime or NUI or browser-side error was caught and sanitized before raw error details could be dumped to the player console.

**How to fix it:** Check the matching support reference in the server and client logs, then verify the affected UI or runtime dependency is loaded and the triggering state is valid.

### CAD Errors

#### ERR-CAD-101

**Key:** `PLAYER_NOT_LINKED`

**What it means:** The player does not have a linked CAD account.

**How to fix it:** Run the configured link command, complete the link flow, and verify the link exists in CAD.

#### ERR-CAD-102

**Key:** `PLAYER_NOT_ONLINE`

**What it means:** The player is linked but not currently logged into a CAD unit or profile.

**How to fix it:** Log into an eligible CAD profile before using the feature.

#### ERR-CAD-103

**Key:** `PLAYER_NOT_IN_CAD`

**What it means:** The player must be both linked and active in CAD before the feature can be used.

**How to fix it:** Link the account first, then log into a valid CAD character or unit.

### Support Errors

#### ERR-SUP-101

**Key:** `SUPPORT_INVALID_ID`

**What it means:** The provided support upload or request ID was invalid.

**How to fix it:** Use the correct numeric support request ID from Sonoran support.

#### ERR-SUP-102

**Key:** `SUPPORT_UPLOAD_FAILED`

**What it means:** Support logs could not be uploaded.

**How to fix it:** Retry the upload, then verify outbound API access and the validity of the support request ID.

#### ERR-SUP-103

**Key:** `SUPPORT_UPLOAD_SUCCESS`

**What it means:** Support logs were uploaded successfully.

**How to fix it:** No action is required. Provide the generated support reference and upload context to support if requested.

### Smart Signs Errors

#### ERR-SS-101

**Key:** `SMARTSIGNS_PLAN_REQUIRED`

**What it means:** Smart Signs authentication failed because the CAD community does not have access to the required Smart Signs feature or plan.

**How to fix it:** Verify the CAD community has the required Smart Signs access or subscription, then retry Smart Signs authentication.

#### ERR-SS-102

**Key:** `SMARTSIGNS_AUTH_FAILED`

**What it means:** Smart Signs authentication failed because Sonoran CAD could not authorize the configured community or server.

**How to fix it:** Check the Sonoran CAD API key, community ID, and server ID configured for the Smart Signs resource.

#### ERR-SS-103

**Key:** `SMARTSIGNS_HELPER_STARTED`

**What it means:** The `smartsigns_sonoran_helper` resource was started directly, but it is only intended for Smart Signs internal update handling.

**How to fix it:** Remove `ensure smartsigns_sonoran_helper` or `start smartsigns_sonoran_helper` from the server startup configuration and start only the main Smart Signs resource.

### Bodycam Errors

#### ERR-BC-101

**Key:** `BODYCAM_FORCEOFF_PERMISSION`

**What it means:** The user attempted to use the bodycam force-off command without permission.

**How to fix it:** Grant the configured bodycam force-off ACE permission to the appropriate staff group.

#### ERR-BC-102

**Key:** `BODYCAM_CHILD_PERMISSION`

**What it means:** Bodycam recording could not start because child-process permission was missing.

**How to fix it:** Add the required child-process permission or use the bundled `sonorancad.cfg` permissions.

#### ERR-BC-104

**Key:** `BODYCAM_F8_PERMISSION`

**What it means:** The bodycam keybind commands are blocked by ACE permissions.

**How to fix it:** Allow `command.SonoranCAD::bodycam::Keybind` and `command.SonoranCAD::bodycam::RecordingKeybind` for the intended player group.

#### ERR-BC-105

**Key:** `BODYCAM_NOT_ON_DUTY`

**What it means:** The player must be online in CAD before toggling bodycam.

**How to fix it:** Log into CAD duty first, then toggle bodycam again.

#### ERR-BC-106

**Key:** `BODYCAM_UPLOAD_TOKEN_INVALID`

**What it means:** The bodycam upload token was invalid, expired, or belonged to a different player or session.

**How to fix it:** Reinitialize bodycam upload configuration and retry with a fresh token.

#### ERR-BC-107

**Key:** `BODYCAM_UPLOAD_INIT_FAILED`

**What it means:** Bodycam upload setup failed before file chunks could be accepted.

**How to fix it:** Check temporary file creation, upload parameters, and server write permissions.

#### ERR-BC-108

**Key:** `BODYCAM_UPLOAD_CHUNK_FAILED`

**What it means:** A bodycam upload chunk could not be appended to the target file.

**How to fix it:** Check disk permissions, available disk space, and whether the temporary recording path is writable.

#### ERR-BC-109

**Key:** `BODYCAM_UPLOAD_INCOMPLETE`

**What it means:** The upload completion request arrived before all expected chunks were received.

**How to fix it:** Retry the upload and inspect client or network interruptions that may have dropped chunks.

#### ERR-BC-110

**Key:** `BODYCAM_TURN_FAILED`

**What it means:** TURN credentials for bodycam streaming could not be retrieved.

**How to fix it:** Verify the CAD API is reachable, the API key is valid, and any TURN-related configuration overrides are correct.

#### ERR-BC-111

**Key:** `BODYCAM_RECORDINGS_UNWRITABLE`

**What it means:** The bodycam recordings directory could not be written by the server process, so upload setup or clip finalization could not save the recording file.

**How to fix it:** Set `sonorancad/submodules/bodycam` and its `recordings` directory to permission mode `777`, then retry the upload.

#### ERR-BC-112

**Key:** `BODYCAM_RECORDING_ACTIVE`

**What it means:** A start-recording request was ignored because a recording was already in progress.

**How to fix it:** Stop the active recording before starting another one, or debounce duplicate start requests in the caller or UI.

#### ERR-BC-113

**Key:** `BODYCAM_RECORDING_BLOCKED`

**What it means:** Bodycam recording was blocked by a privacy override or an invalid runtime state.

**How to fix it:** Remove the privacy override or restore the bodycam or stream state required for recording.

#### ERR-BC-114

**Key:** `BODYCAM_RECORDING_INACTIVE`

**What it means:** A stop or cancel request was made when there was no active recording to stop.

**How to fix it:** Start a recording first, or suppress duplicate stop or cancel requests in the caller or UI.

#### ERR-BC-115

**Key:** `BODYCAM_RECORDING_FAILED`

**What it means:** The bodycam recording pipeline failed before the clip could be finalized successfully.

**How to fix it:** Review the support reference, then verify the bodycam stream, recorder pipeline, duration or size limits, and upload handoff path.

#### ERR-BC-116

**Key:** `BODYCAM_NOT_WORN`

**What it means:** The player attempted to enable bodycam without matching the configured clothing or bodycam requirements.

**How to fix it:** Equip the required bodycam clothing or components, or relax the configured clothing validation.

#### ERR-BC-117

**Key:** `BODYCAM_WATCH_ACTIVE`

**What it means:** Bodycam disable was blocked because the bodycam is currently being watched.

**How to fix it:** Stop the remote watch session first, or use an authorized force-off flow if policy allows it.

#### ERR-BC-118

**Key:** `BODYCAM_SOUND_LEVEL_INVALID`

**What it means:** The requested bodycam sound level was not a valid number within the accepted range.

**How to fix it:** Pass a numeric value greater than `0` and less than or equal to `1`.

#### ERR-BC-119

**Key:** `BODYCAM_UPLOAD_FAILED`

**What it means:** The finalized bodycam clip failed to upload to CAD.

**How to fix it:** Check API connectivity, authentication, upload endpoint availability, and the support reference for the upload failure context.

#### ERR-BC-120

**Key:** `BODYCAM_RECORDING_START_TIMEOUT`

**What it means:** A recording start request timed out while waiting for bodycam initialization, display activation, or the client media stream to become ready.

**How to fix it:** Review the state details printed with the error and the matching `[bodycam-recording]` server warning. Verify bodycam initialization, CAD duty state, TURN connectivity, and the reported NUI stream reason.

### CAD Display Errors

#### ERR-CD-101

**Key:** `CADDISPLAY_F8_PERMISSION`

**What it means:** CAD display keybind commands are blocked by ACE permissions.

**How to fix it:** Grant the listed CAD display command permissions to players who should be able to use them.

#### ERR-CD-102

**Key:** `CADDISPLAY_FRAMEWORK_UNAVAILABLE`

**What it means:** CAD display could not access the configured framework export.

**How to fix it:** Confirm the selected framework resource is started and that its export name matches the integration configuration.

#### ERR-CD-103

**Key:** `CADDISPLAY_PLACEMENT_INVALID`

**What it means:** CAD display placement data could not be loaded or parsed.

**How to fix it:** Repair the placement file JSON or Lua data, or delete the bad saved placement data so defaults can be rebuilt.

#### ERR-CD-104

**Key:** `CADDISPLAY_VEHICLE_UNIDENTIFIED`

**What it means:** CAD display could not determine which vehicle the player was targeting.

**How to fix it:** Retry while targeting a valid supported vehicle and verify the display interaction logic has the correct entity context.

### Call Errors

#### ERR-CALL-101

**Key:** `CALL_MISSING_DETAILS`

**What it means:** A call-related command was used without the required details.

**How to fix it:** Re-run the command with the required message, description, or argument payload.

#### ERR-CALL-102

**Key:** `CALL_SEND_FAILED`

**What it means:** A call could not be sent to CAD.

**How to fix it:** Check the support reference, then verify CAD API availability, call payload validity, and that API sending is enabled.

#### ERR-CALL-103

**Key:** `CALL_TEMPLATE_INVALID`

**What it means:** The configured call template file is missing or invalid.

**How to fix it:** Verify the template file exists, contains valid JSON, and matches the configured filename or path.

#### ERR-CALL-104

**Key:** `PANIC_F8_PERMISSION`

**What it means:** The panic keybind command is blocked by ACE permissions.

**How to fix it:** Allow `command.panic` for the intended players in ACE permissions.

#### ERR-CALL-105

**Key:** `CALL_CREATE_FAILED`

**What it means:** A dispatch call creation operation failed before returning a valid call ID.

**How to fix it:** Inspect the payload fields sent to CAD and verify API availability and permissions.

#### ERR-CALL-106

**Key:** `CALL_UNEXPECTED_RESPONSE`

**What it means:** CAD returned a success path without the expected data, such as a missing call ID.

**How to fix it:** Review the API response body and confirm the integration and API versions are compatible.

### Vehicle Registration Errors

#### ERR-VR-101

**Key:** `VEHREG_NO_CHARACTER`

**What it means:** No active CAD character was found for the vehicle registration action.

**How to fix it:** Log into a CAD character first, then retry the registration action.

#### ERR-VR-102

**Key:** `VEHREG_CREATE_FAILED`

**What it means:** The vehicle registration record could not be created in CAD.

**How to fix it:** Check record template or configuration values, payload data, and CAD API availability.

#### ERR-VR-103

**Key:** `VEHREG_PLATE_TAKEN`

**What it means:** The requested plate is already registered in CAD.

**How to fix it:** Choose a different plate or locate and update the existing CAD registration record.

### Unit Status Errors

#### ERR-US-101

**Key:** `UNITSTATUS_INVALID_STATUS`

**What it means:** The requested unit status does not exist in configuration or is outside the supported range.

**How to fix it:** Use a configured status name or number and verify `unitstatus` status mappings in its config file.

### API WebSocket Errors

#### ERR-WS-101

**Key:** `APIWS_DEPENDENCY_MISSING`

**What it means:** The SignalR dependency required for API WebSocket connectivity is missing.

**How to fix it:** Install the missing package in the `sonorancad` resource, typically `@microsoft/signalr`, and restart the resource.

#### ERR-WS-102

**Key:** `APIWS_AUTH_FAILED`

**What it means:** The API WebSocket hub rejected authentication.

**How to fix it:** Verify `communityID`, `apiKey`, and `serverId`, then confirm the key is valid for the target community.

#### ERR-WS-103

**Key:** `APIWS_CONFIG_MISSING`

**What it means:** The API WebSocket connection could not start because required configuration values were missing.

**How to fix it:** Ensure `communityID`, `apiKey`, and `serverId` are all present and loaded before WebSocket startup.

#### ERR-WS-104

**Key:** `APIWS_CONNECTION_FAILED`

**What it means:** The API WebSocket transport could not establish a connection.

**How to fix it:** Check outbound HTTPS and WebSocket connectivity, API URL correctness, and any firewall or proxy rules.

#### ERR-WS-105

**Key:** `APIWS_RECONNECT_FAILED`

**What it means:** Reconnect attempts to the API WebSocket hub are repeatedly failing.

**How to fix it:** Treat this as a persistent connectivity or authentication problem, then review the first connection failure and fix that root cause.

#### ERR-WS-106

**Key:** `APIWS_PUSH_EVENT_FAILED`

**What it means:** A push event delivered over the WebSocket connection could not be decoded or processed.

**How to fix it:** Validate the incoming event payload shape and inspect the support reference for the handler that failed.

#### ERR-WS-107

**Key:** `APIWS_SEND_FAILED`

**What it means:** A message could not be sent over the API WebSocket connection.

**How to fix it:** Confirm the WebSocket connection is active and authenticated before sending unit or call updates.

### Plugin Loader Errors

#### ERR-PLUG-101

**Key:** `PLUGIN_VERSION_FILE_LOAD_FAILED`

**What it means:** The local plugin version file could not be loaded from disk.

**How to fix it:** Confirm `sonorancad/version.json` exists and is readable.

#### ERR-PLUG-102

**Key:** `PLUGIN_VERSION_FILE_PARSE_FAILED`

**What it means:** The local plugin version file exists but could not be parsed.

**How to fix it:** Repair malformed JSON in `version.json` or replace it with a clean release copy.

#### ERR-PLUG-103

**Key:** `PLUGIN_UPDATER_RESPONSE_INVALID`

**What it means:** The remote updater responded with invalid or unusable data.

**How to fix it:** Retry later and verify outbound network access to GitHub or raw content endpoints.

#### ERR-PLUG-104

**Key:** `PLUGIN_NOT_FOUND`

**What it means:** A requested plugin or submodule could not be found locally.

**How to fix it:** Verify the plugin name, installation path, and that its configuration or resource files exist.

#### ERR-PLUG-105

**Key:** `PLUGIN_MANIFEST_ENTRY_MISSING`

**What it means:** A local submodule was not present in the remote updater manifest.

**How to fix it:** If it is a custom submodule this may be expected, otherwise update to an official supported submodule build.

#### ERR-PLUG-106

**Key:** `PLUGIN_MANIFEST_VERSION_MISSING`

**What it means:** A remote updater manifest entry was missing a version field.

**How to fix it:** Replace the manifest source with a valid upstream release or retry after the remote manifest is corrected.

#### ERR-PLUG-107

**Key:** `PLUGIN_CONFIG_VERSION_MISSING`

**What it means:** A plugin config did not declare its current config version.

**How to fix it:** Update the plugin config from the latest `*_config.dist.lua` and ensure the version field is present.

#### ERR-PLUG-108

**Key:** `PLUGIN_CONFIG_BACKUP_FAILED`

**What it means:** The plugin updater could not create a config backup before modifying files.

**How to fix it:** Check write permissions for the SonoranCAD configuration directory and available disk space.

#### ERR-PLUG-109

**Key:** `PLUGIN_CONFIG_PARSE_FAILED`

**What it means:** A plugin or submodule configuration file could not be parsed, compiled, or executed safely.

**How to fix it:** Repair the matching `*_config.lua` file so it defines a valid `local config = {}` table and contains no Lua syntax or runtime errors.

### Civilian Integration Errors

#### ERR-CIV-101

**Key:** `CIV_NO_CHARACTERS_FOUND`

**What it means:** No CAD character records were found for the player.

**How to fix it:** Ensure the player is linked and has at least one valid CAD character, or enable custom IDs if you want a fallback workflow.

#### ERR-CIV-102

**Key:** `CIV_CUSTOM_IDS_DISABLED`

**What it means:** The server has disabled custom civilian IDs.

**How to fix it:** Enable `allowCustomIds` in the civilian integration configuration if that workflow should be allowed.

#### ERR-CIV-103

**Key:** `CIV_REFRESH_DISABLED`

**What it means:** Manual character cache refresh is disabled.

**How to fix it:** Enable the purge or refresh option in configuration if players should be allowed to force-refresh ID data.

#### ERR-CIV-104

**Key:** `CIV_UNKNOWN_SUBCOMMAND`

**What it means:** An invalid civilian ID command subcommand was used.

**How to fix it:** Use `/id help` and re-run the command with a supported subcommand.

#### ERR-CIV-105

**Key:** `CIV_NO_NEARBY_PLAYERS`

**What it means:** The player attempted to show an ID but no nearby viewers were found.

**How to fix it:** Move closer to another player and retry the `show` action.

### Civilian Registration Errors

See [Civilian Registration (CivReg)](../../available-plugins/civilian-registration.md) for setup, usage, and base64 portrait uploads.

#### ERR-CR-101

**Key:** `CIVREG_TEMPLATE_FAILED`

**What it means:** The live CAD character template could not be loaded or did not contain the expected sections.

**How to fix it:** Check the CAD connection and `templateId` in `civreg_config.lua` (`7` for the civilian character template). Review the accompanying API error, keep template caching enabled, and retry after any rate limit has cleared.

#### ERR-CR-102

**Key:** `CIVREG_SUBMISSION_INVALID`

**What it means:** The registration form expired or contains invalid data, such as a missing required value, an invalid field format, or malformed or oversized base64 portrait data.

**How to fix it:** Correct the validation message shown in the form. For an invalid portrait, retake it and check the decoded image size against `maxSelfieBytes` (1 MiB by default). If the session expired, close it and reopen `/civreg`, or the configured registration command. Registration sessions last 10 minutes.

#### ERR-CR-103

**Key:** `CIVREG_SELFIE_URL_MISSING`

**What it means:** An older URL-based version of CivReg could not determine a public image URL for a portrait. Current versions submit base64 image data and do not emit this code.

**How to fix it:** Update CivReg to use base64 portrait submissions. Preserve the existing image files and public route for records that already reference them. See [Updating from URL-Based Portraits](../../available-plugins/civilian-registration.md#updating-from-url-based-portraits).

#### ERR-CR-104

**Key:** `CIVREG_SELFIE_SAVE_FAILED`

**What it means:** An older URL-based version of CivReg could not validate or save a portrait to `sonorancad/filestore/civreg`. Current versions submit base64 image data and report invalid portraits with `ERR-CR-102`.

**How to fix it:** Update CivReg. For a current portrait validation error, retake the image and check `maxSelfieBytes`. For an older installation that still saves files, also check [read and write permissions](read-and-write-permissions.md) and available storage.

#### ERR-CR-105

**Key:** `CIVREG_CREATE_FAILED`

**What it means:** CAD could not create the civilian character from the submitted form.

**How to fix it:** Review the accompanying API failure in the server console. Confirm the linked CAD account and character template, correct the reported issue, and retry the registration.

#### ERR-CR-106

**Key:** `CIVREG_DB_SYNC_FAILED`

**What it means:** CivReg detected CAD character database sync but could not initialize or update the configured framework character table.

**How to fix it:** Start QBCore or ESX and `oxmysql` or `mysql-async` before `sonorancad`. Confirm the CivReg database sync table and character ID column match the CAD DB Sync character mapping, and allow the database user to alter and update the character table.

### Dispatch Errors

#### ERR-DISP-101

**Key:** `DISPATCH_CALL_NOT_FOUND`

**What it means:** A dispatch action referenced a call that was not present in cache.

**How to fix it:** Verify the call ID is current and that call cache synchronization is working before retrying the action.

### ERS Integration Errors

#### ERR-ERS-101

**Key:** `ERS_MAPPING_FAILED`

**What it means:** ERS field mapping logic failed while converting ERS data into CAD payload fields.

**How to fix it:** Review custom mapping functions and field names in the ERS integration configuration for `nil` values or bad return types.

#### ERR-ERS-102

**Key:** `ERS_PAYLOAD_MALFORMED`

**What it means:** An ERS event payload was missing required top-level fields or had an invalid structure.

**How to fix it:** Validate the ERS event payload contract and adjust any custom hooks that modify it.

#### ERR-ERS-103

**Key:** `ERS_COORDS_MISSING`

**What it means:** An ERS event did not provide usable coordinates for the CAD action.

**How to fix it:** Ensure the originating ERS event includes proper coordinates and that any transform step preserves them.

#### ERR-ERS-104

**Key:** `ERS_CALL_ID_INVALID`

**What it means:** ERS attempted to update or attach to a call using an invalid stored call ID.

**How to fix it:** Check the local saved-call cache and ensure the create-call step succeeded before later actions reference it.

#### ERR-ERS-105

**Key:** `ERS_RESOURCE_NOT_STARTED`

**What it means:** The Night ERS resource required by the integration is not started.

**How to fix it:** Start the ERS resource before enabling the ERS integration submodule.

### Framework Errors

#### ERR-FW-101

**Key:** `FRAMEWORK_RESOURCE_MISSING`

**What it means:** A required framework resource such as `qb-core` or `es_extended` is not running.

**How to fix it:** Start the configured framework resource and verify the integration is targeting the correct framework.

#### ERR-FW-102

**Key:** `FRAMEWORK_IDENTITY_MISSING`

**What it means:** Framework identity or player data could not be retrieved.

**How to fix it:** Check that the player is fully loaded into the framework and that the expected identity export or event is available.

#### ERR-FW-103

**Key:** `FRAMEWORK_QUERY_INVALID`

**What it means:** A framework SQL query or parameter set was invalid and was rejected before execution.

**How to fix it:** Ensure the query is a non-empty string and the parameters are passed as a key or value table rather than an array.

### Locations and Livemap Errors

#### ERR-LOC-101

**Key:** `LOCATIONS_CONFIG_MISSING`

**What it means:** The locations or livemap vehicle model configuration file could not be found.

**How to fix it:** Restore the missing configuration file or update the configured path to a valid file.

#### ERR-LOC-102

**Key:** `LOCATIONS_CONFIG_INVALID`

**What it means:** The locations or livemap configuration file exists but could not be decoded.

**How to fix it:** Repair malformed JSON in the vehicle model configuration file.

#### ERR-LOC-103

**Key:** `LOCATIONS_CLIENT_ERROR`

**What it means:** A client reported an error while sending location data.

**How to fix it:** Check client logs for the specific failure and verify required dependencies such as postals and location hooks are configured.

#### ERR-LOC-104

**Key:** `POSTALS_RESOURCE_UNAVAILABLE`

**What it means:** A client-side feature requested postal data, but the configured postal source was unavailable.

**How to fix it:** Start the configured postal resource or switch to a valid postal mode or source in configuration.

#### ERR-LOC-105

**Key:** `POSTALS_FILE_INVALID`

**What it means:** The configured client-side postal file was missing or invalid.

**How to fix it:** Restore the referenced postal file, validate its JSON, and confirm the configured filename is correct.

#### ERR-LOC-106

**Key:** `POSTALS_LOOKUP_FAILED`

**What it means:** Client-side postal lookup failed at runtime, but Sonoran CAD continued sending location updates without a postal prefix.

**How to fix it:** Sonoran CAD comes bundled with the `nearest-postals` resource. Ensure your community is only using the bundled nearest-postals resource and NOT a duplicate or copied version that may be out of date. You can check where your `nearest-postals` resource is running inside of TxAdmin > Resources. It should be running inside of the `[sonorancad]` folder.

Additionally, startup order matters. The Sonoran CAD resource is started by adding the following line to your `server.cfg`:

```
exec @sonorancad/sonorancad.cfg
```

The `exec` command above runs a script to ensure the Sonoran CAD resource, the bundled nearest-postals resource, and more in a specific order.

If your `server.cfg` contains anything like `ensure sonorancad` or `ensure nearest-postals` remove those and **only** use the `exec` command listed above.

### Record Printer Errors

#### ERR-RP-101

**Key:** `RECORDPRINTER_UNIT_MISSING`

**What it means:** Record printer could not resolve the player to an active CAD unit.

**How to fix it:** Ensure the player is logged into CAD and present in the unit cache before printing.

#### ERR-RP-102

**Key:** `RECORDPRINTER_DIRECTORY_FAILED`

**What it means:** Record printer could not create or resolve its output directory.

**How to fix it:** Check write permissions and folder creation behavior for the record printer output path.

#### ERR-RP-103

**Key:** `RECORDPRINTER_SAVE_FAILED`

**What it means:** Record printer failed to save the generated PDF.

**How to fix it:** Verify write permissions, available disk space, and that the generated PDF data is valid.

#### ERR-RP-104

**Key:** `RECORDPRINTER_SHARE_INVALID`

**What it means:** Record printer rejected a share request because the URL or target list was invalid.

**How to fix it:** Validate the shared URL and ensure at least one valid target player or identifier is supplied.

#### ERR-RP-105

**Key:** `RECORDPRINTER_FILESYSTEM_PERMISSION`

**What it means:** The FXServer process does not have permission to create or write record printer PDF files.

**How to fix it:** Grant the FXServer process write access to `sonorancad/submodules/recordPrinter/pdfs`, then restart the Sonoran CAD resource.

### Sonrad Errors

#### ERR-SR-101

**Key:** `SONRAD_CALLCOMMANDS_MISSING`

**What it means:** Sonrad attempted an action that depends on the `callcommands` submodule.

**How to fix it:** Enable or start the `callcommands` submodule before using Sonrad panic or call features.

#### ERR-SR-102

**Key:** `SONRAD_CONFIG_MISSING`

**What it means:** Critical Sonrad configuration values are missing.

**How to fix it:** Update `sonrad_config.lua` from the latest template and fill in the missing required values.

### Kick Module Errors

#### ERR-KICK-101

**Key:** `KICK_QUEUE_UNAVAILABLE`

**What it means:** The kick module could not queue a CAD logout or kick for the player.

**How to fix it:** Ensure the player is linked and currently represented by an active unit before the kick action runs.

### Warning Codes

#### WRN-CORE-001

**Key:** `INVALID_API_MODE`

**What it means:** The configured SonoranCAD API mode was invalid, so the resource fell back to production mode.

**How to fix it:** Set `mode` to a supported value such as `production` or `development`.

#### WRN-CORE-002

**Key:** `DEPRECATED_DEBUGPRINT`

**What it means:** Deprecated logging helper `debugPrint` was used somewhere in the runtime path.

**How to fix it:** Replace `debugPrint(...)` calls with `debugLog(...)` in custom integrations or older submodule code.

#### WRN-CORE-003

**Key:** `JSON_DECODE_FAILED`

**What it means:** SonoranCAD failed to decode a JSON string and continued with a default or empty value.

**How to fix it:** Validate the JSON source that triggered the warning and correct malformed payload or file contents.

#### WRN-CORE-004

**Key:** `JSON_ENCODE_FAILED`

**What it means:** SonoranCAD failed to encode a Lua value into JSON and continued with a fallback value.

**How to fix it:** Check the table being encoded for unsupported values such as functions, userdata, or recursive structures.

#### WRN-CORE-005

**Key:** `APIKEY_CONVAR_UNINITIALIZED`

**What it means:** Older SonoranCAD versions reported missing `sonorancad.cfg` startup setup with this warning. Current versions report the same condition as `ERR-CORE-036` because it can break SonoranCAD updates and third-party integrations.

**How to fix it:** In `server.cfg`, remove every `ensure sonorancad` line, use `exec @sonorancad/sonorancad.cfg` instead, and then fully restart FXServer.

#### WRN-CORE-006

**Key:** `OLD_FXSERVER_VERSION`

**What it means:** The running FXServer build is older than the version this SonoranCAD release was tested against.

**How to fix it:** Update FXServer to the tested version or newer before troubleshooting feature regressions.

#### WRN-CAD-101

**Key:** `PLAYER_IDENTIFIER_MISSING`

**What it means:** A player connected without the configured primary identifier, so some CAD features may not work for that player.

**How to fix it:** Ensure the configured identifier type is actually available on your server and that the player is connecting through the expected identity provider.

#### WRN-CAD-102

**Key:** `PLAYER_LINK_REQUIRED`

**What it means:** A player attempted a CAD-linked workflow without having a linked CAD account.

**How to fix it:** Have the player run the configured link command, complete the link flow, and retry after the CAD link exists.

#### WRN-WS-101

**Key:** `LEGACY_HTTP_PUSH_EVENT`

**What it means:** SonoranCAD received a legacy HTTP push event on `/event` while WebSocket push delivery is preferred.

**How to fix it:** Review your CAD or server push-event configuration and move the server onto the API WebSocket push path where available.

#### WRN-CORE-900

**Key:** `UNHANDLED_WARNING`

**What it means:** A warning was logged without a more specific registered warning code, so it was normalized into the generic warning bucket.

**How to fix it:** Use the support reference and warning text in the logs to identify the exact caller, then register a dedicated warning code if the condition needs clearer support guidance.
