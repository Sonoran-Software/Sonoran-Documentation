---
description: Learn more about specific in-game error and warning codes.
---

# Error Codes

This page documents the structured error and warning codes emitted by the Sonoran Radio FiveM resource.

Direct links can target any code on this page using fragments such as `#ERR-121`.

## Current Resource Codes

### Errors

#### ERR-101

**Internal Key:** `ERR_OX_LIB_NOT_STARTED`

**Meaning:** ox\_lib must be started before Sonoran Radio when that dependency path is used.

**First Troubleshooting Step:** Start `ox_lib` before Sonoran Radio and restart the resource.

#### ERR-102

**Internal Key:** `ERR_OX_LIB_INIT_LOAD_FAILED`

**Meaning:** Sonoran Radio could not load `@ox_lib/init.lua`.

**First Troubleshooting Step:** Verify that `ox_lib` is installed correctly and that `init.lua` exists.

#### ERR-103

**Internal Key:** `ERR_OX_LIB_NOTIFY_UNAVAILABLE`

**Meaning:** `ox_lib` notifications were selected, but `lib.notify` was unavailable.

**First Troubleshooting Step:** Confirm `ox_lib` is running and initialized without errors.

#### ERR-104

**Internal Key:** `ERR_RADIO_ITEM_INVENTORY_MISSING`

**Meaning:** `enforceRadioItem` is enabled, but no supported inventory resource was detected.

**First Troubleshooting Step:** Start `qb-inventory` or `ox_inventory`, or disable `Config.enforceRadioItem`.

#### ERR-105

**Internal Key:** `ERR_RADIO_ITEM_FRAMEWORK_MISSING`

**Meaning:** `enforceRadioItem` is enabled, but no supported framework resource was detected.

**First Troubleshooting Step:** Start `qb-core` or `qbx_core`, or disable `Config.enforceRadioItem`.

#### ERR-106

**Internal Key:** `ERR_API_CREDENTIALS_MISSING`

**Meaning:** The API key or community ID is missing from configuration.

**First Troubleshooting Step:** Set `apiKey` and `comId` correctly in your config and restart the resource.

#### ERR-107

**Internal Key:** `ERR_API_FATAL_DISABLED`

**Meaning:** A fatal API error disabled radio API functionality until the issue is corrected.

**First Troubleshooting Step:** Fix the reported API or community configuration issue, then restart the resource.

#### ERR-108

**Internal Key:** `ERR_API_CRITICAL_ABORTED`

**Meaning:** A request was aborted because the resource is already in a critical API error state.

**First Troubleshooting Step:** Resolve the earlier fatal API error before retrying requests.

#### ERR-109

**Internal Key:** `ERR_FRAMES_DEPARTMENTS_MISSING`

**Meaning:** `Config.frames.departments` is missing for the selected frame permission mode.

**First Troubleshooting Step:** Add the required departments list under `Config.frames.departments`.

#### ERR-110

**Internal Key:** `ERR_JAMMERS_PERMISSION_MODE_INVALID`

**Meaning:** The configured permission mode for radio jammers is invalid.

**First Troubleshooting Step:** Review the jammer permission mode in config and change it to a supported option.

#### ERR-111

**Internal Key:** `ERR_RADIO_ITEM_CONFIG_MISSING`

**Meaning:** Radio item enforcement is enabled, but `Config.RadioItem` is missing.

**First Troubleshooting Step:** Define `Config.RadioItem` or disable radio item enforcement.

#### ERR-112

**Internal Key:** `ERR_SCANNER_ITEM_CONFIG_MISSING`

**Meaning:** Scanner item enforcement is enabled, but `Config.ScannerItem` is missing.

**First Troubleshooting Step:** Define `Config.ScannerItem` or disable scanner item enforcement.

#### ERR-113

**Internal Key:** `ERR_QBOX_OX_RADIO_ITEM_MISSING`

**Meaning:** The configured radio item does not exist in Ox Inventory on Qbox.

**First Troubleshooting Step:** Add the radio item to `/ox_inventory/data/items.lua` or correct the configured item name.

#### ERR-114

**Internal Key:** `ERR_QBOX_OX_SCANNER_ITEM_MISSING`

**Meaning:** The configured scanner item does not exist in Ox Inventory on Qbox.

**First Troubleshooting Step:** Add the scanner item to `/ox_inventory/data/items.lua` or correct the configured item name.

#### ERR-115

**Internal Key:** `ERR_COMMUNITY_CHANNELS_FETCH_FAILED`

**Meaning:** Community channels could not be fetched from the radio service.

**First Troubleshooting Step:** Check the HTTP status in the server log and verify API connectivity.

#### ERR-116

**Internal Key:** `ERR_SKIN_SAVE_FAILED`

**Meaning:** A radio skin configuration file could not be saved.

**First Troubleshooting Step:** Verify that the target file path is writable by the server process.

#### ERR-117

**Internal Key:** `ERR_CONFIG_SAVE_FAILED`

**Meaning:** A JSON configuration file could not be saved.

**First Troubleshooting Step:** Check file permissions and confirm the resource directory is writable.

#### ERR-118

**Internal Key:** `ERR_SERVER_IP_SET_FAILED`

**Meaning:** Sonoran Radio could not register or update the server IP with the radio service.

**First Troubleshooting Step:** Verify `apiKey`, `comId`, and outbound API connectivity.

#### ERR-119

**Internal Key:** `ERR_SERVER_IP_INVALID_ROOM`

**Meaning:** The radio service returned an invalid `roomId` while setting the server IP.

**First Troubleshooting Step:** Check the API response and confirm the configured community is valid for radio.

#### ERR-120

**Internal Key:** `ERR_FRAMES_CONFIG_MISSING`

**Meaning:** `Config.frames` is missing.

**First Troubleshooting Step:** Add the `Config.frames` block to your configuration.

#### ERR-121

**Internal Key:** `ERR_SERVER_SPEAKERS_SET_FAILED`

**Meaning:** Sonoran Radio could not synchronize in-game speaker locations with the radio service.

**First Troubleshooting Step:** Check the API response and confirm speaker configuration is valid.

#### ERR-122

**Internal Key:** `ERR_SERVER_NAME_SET_FAILED`

**Meaning:** Sonoran Radio could not update a user display name in the radio service.

**First Troubleshooting Step:** Verify API connectivity and confirm the target user exists in the linked community.

#### ERR-123

**Internal Key:** `ERR_INVALID_COMMUNITY_ID`

**Meaning:** The configured community ID is invalid or not enabled for the API.

**First Troubleshooting Step:** Confirm the configured community ID belongs to a community with radio API access.

### Warnings

#### WRN-201

**Internal Key:** `WRN_LB_PHONE_NOT_STARTED`

**Meaning:** lb-phone integration is waiting for the `lb-phone` resource to start.

**First Troubleshooting Step:** Start `lb-phone` if phone integration is expected.

#### WRN-202

**Internal Key:** `WRN_LUXART_RESOURCE_DEFAULTED`

**Meaning:** `Config.luxartResourceName` was empty, so the default `lvc` resource name was applied.

**First Troubleshooting Step:** Set `Config.luxartResourceName` explicitly if your Luxart resource uses a different name.

#### WRN-203

**Internal Key:** `WRN_API_REQUEST_FAILED`

**Meaning:** A Sonoran Radio API request failed.

**First Troubleshooting Step:** Inspect the logged request type and reason, then verify API connectivity.

#### WRN-204

**Internal Key:** `WRN_API_ENDPOINT_UNREGISTERED`

**Meaning:** An API request was attempted for an endpoint type that is not registered.

**First Troubleshooting Step:** Register the endpoint type before making that request.

#### WRN-205

**Internal Key:** `WRN_GEO_ZONE_SYNC_FAILED`

**Meaning:** Geo and degrade zones could not be synchronized with the radio service.

**First Troubleshooting Step:** Check the earlier API response details for the zone sync request.

#### WRN-206

**Internal Key:** `WRN_COMMUNITY_CHANNELS_FETCH_FAILED`

**Meaning:** Community channels could not be fetched for a player request.

**First Troubleshooting Step:** Check the HTTP status in the warning and verify the player has valid access to radio data.

#### WRN-207

**Internal Key:** `WRN_SKIN_SAVE_DEBUG_BLOCKED`

**Meaning:** A client attempted to save a radio skin while debug mode was disabled.

**First Troubleshooting Step:** Verify the caller is expected and only enable this workflow while debugging.

#### WRN-208

**Internal Key:** `WRN_CONFIG_RENAME_FAILED`

**Meaning:** A default configuration file could not be renamed to its writable target path.

**First Troubleshooting Step:** Check whether the destination file already exists or is locked.

#### WRN-209

**Internal Key:** `WRN_CONFIG_SAVE_FALLBACK`

**Meaning:** Saving a configuration file failed, so Sonoran Radio fell back to writing the default file.

**First Troubleshooting Step:** Check write permissions on the preferred config file path.

#### WRN-210

**Internal Key:** `WRN_SERVER_IP_USING_EXISTING_ROOM`

**Meaning:** The server IP update failed, but an existing `roomId` was reused while retrying in the background.

**First Troubleshooting Step:** Confirm the existing `roomId` is still valid and investigate the API failure.

#### WRN-211

**Internal Key:** `WRN_SERVER_IP_RETRYING`

**Meaning:** The server IP update failed and will be retried.

**First Troubleshooting Step:** Check API availability and confirm the configured credentials are correct.

#### WRN-212

**Internal Key:** `WRN_SERVER_ID_CONFIG_WRITE_FAILED`

**Meaning:** The resolved `serverId` could not be written back to `config.lua`.

**First Troubleshooting Step:** Check whether `config.lua` is read-only or locked by the OS.

#### WRN-213

**Internal Key:** `WRN_APIKEY_CONVAR_UNINITIALIZED`

**Meaning:** The `apiKey` convar was not initialized from `sonoranradio.cfg`.

**First Troubleshooting Step:** Ensure `sonoranradio.cfg` is executed before the resource starts.

#### WRN-214

**Internal Key:** `WRN_CHATTER_EXCLUSIONS_OVERWRITE_DEPRECATED`

**Meaning:** `Config.chatterExclusions` overwrote `earpieces.json` even though that config path is deprecated.

**First Troubleshooting Step:** Remove `Config.chatterExclusions` from config and migrate to `earpieces.json`.

#### WRN-215

**Internal Key:** `WRN_CHATTER_EXCLUSIONS_DEPRECATED`

**Meaning:** `Config.chatterExclusions` is deprecated.

**First Troubleshooting Step:** Move chatter exclusion management to `earpieces.json` or the in-game menu.

#### WRN-216

**Internal Key:** `WRN_MOBILE_REPEATERS_CONFIG_MIGRATED`

**Meaning:** Legacy `Config.repeaterVehicleSpawncodes` entries were imported into `mobileRepeaters.json`.

**First Troubleshooting Step:** Remove the deprecated `Config.repeaterVehicleSpawncodes` block and use `/radiomenu` for future changes.

#### WRN-217

**Internal Key:** `WRN_LISTENER_PRO_REQUIRED`

**Meaning:** Nearby radio chatter and scanners were disabled because the community does not have a Pro subscription.

**First Troubleshooting Step:** Upgrade the Radio community to Pro, or set `Config.chatter` to `false`.

## Legacy Troubleshooting Codes

The entries below are older support references that may still appear in existing guides, logs, or support replies.

### ERR 101: Unable to get a valid pushUrl

Sonoran Radio uses your CFX Nucleus Proxy URL to send push events from the radio to your game server. For example, this allows playing a tone on the radio to an in-game speaker.

In the event that Sonoran Radio cannot obtain or verify your CFX Proxy URL, it tries to use your server's public IP address as a backup for push events. On some hosts, that fallback may also fail.

If you receive this error, try setting `Config.overridePushUrl` to `http://ip:port/sonoranradio/events`, where `ip:port` is the IP and port of your FiveM server. The default FiveM port is `30120`.

If this does not resolve the issue, contact your host provider. They are likely blocking inbound traffic to your server.

### ERR 102: No push event URL set

Sonoran Radio uses your CFX Nucleus Proxy URL to send push events from the radio to your game server.

1. Check your server console for `ERR 101`. That error indicates a problem setting or validating the push URL.
2. If you are using a non-FiveM server but still utilizing push events, ensure the `pushUrl` property is sent with a full HTTP(S) address with the [set-server-ip API endpoint](../../../developer-documentation/developer-documentation/api-endpoints/#set-server-ip).
