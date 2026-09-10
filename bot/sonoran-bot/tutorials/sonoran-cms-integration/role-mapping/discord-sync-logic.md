---
description: Learn more about how Sonoran Bot syncs permissions with Discord.
---

# Discord Sync Logic

<figure><img src="../../../.gitbook/assets/CMSxDiscord.webp" alt=""><figcaption></figcaption></figure>

## About

The Sonoran Bot offers automated permission syncing by "mapping" CMS ranks to Discord roles.

There are several different cases where these permissions are continually synced.

## CMS -> Discord Events

### User Discord Link

When a user newly links their Discord account in the CMS:

* CMS requests all existing Discord roles that the user has
* CMS adds all associated "mapped" CMS ranks based on existing Discord roles
* CMS [removes the Discord link](discord-sync-logic.md#user-discord-unlink) from any other CMS accounts

### User Discord Unlink

When a user has their Discord account unlinked from their CMS account:

* CMS removes all associated "mapped" ranks
* Bot removes all associated "mapped" roles

_This ensures a user cannot unlink their Discord account from CMS prior to a ban, and keep their Discord roles._

### User CMS Join

When a user joins the CMS community:

* CMS checks for a linked Discord account
* CMS requests all existing Discord roles that the user has
* CMS adds all associated "mapped" CMS ranks based on existing Discord roles

### User CMS Leave

When a user leaves the CMS community:

* CMS removes all ranks for the user
* CMS informs the bot of a user leaving the CMS community
* Bot removes all associated "mapped" Discord roles&#x20;

### User CMS Ban

When a user is banned in the CMS community:

* CMS removes all ranks for the user
* CMS informs the bot of a user ban
* Bot removes all associated "mapped" Discord roles
* If [ban sync](../../usage/settings.md#ban-sync) is enabled, bot will ban user in any remaining guilds

## Discord -> CMS Events

### Account Join

When an account joins a Discord Guild:

* Bot requests any existing CMS ranks the user has
* Bot applies any associated "mapped" roles from the existing CMS ranks

### Account Leave

When an account leaves a Discord Guild:

* If [kick on leave](../../usage/settings.md#toggle-kick-on-leave) is enabled
  * The user will be kicked from the CMS
  * The user will be kicked from any remaining Discord Guilds
* Bot checks for remaining "mapped" roles in any other linked Discord Guilds
  * Any mapped ranks in remaining other Discord Guilds will remain unchanged
  * Any mapped ranks that no longer remain in any Discord Guild will be removed

### Account Role Added

When a new Discord role is added to a user:

* Bot informs the CMS of the new role
* The associated "mapped" rank is applied in CMS
* Bot applies all associated "mapped" roles to all additional Discord Guilds

### Account Role Removed

When a Discord role is removed from a user:

* Bot informs the CMS of the role removal
* The associated "mapped" rank is removed in CMS
* Bot removes all associated "mapped" roles to all additional Discord Guilds

### Account Manual Sync

When a user runs the `/sync` command in a Discord Guild:

* Bot requests all existing CMS ranks the user has
* Bot applies any associated "mapped" roles from the existing CMS ranks
* Bot informs CMS of any existing Discord roles the user has
* CMS adds any associated "mapped" roles from the existing Discord roles

_A manual sync will never result in any role or rank removal. It will only "complete" any missing pieces to the mapping._

### Account Kicked

When a user is kicked from a Discord Guild:

* If [kick on leave](../../usage/settings.md#toggle-kick-on-leave) is enabled
  * The user will be kicked from the CMS
  * The user will be kicked from any remaining Discord Guilds
* Bot checks for remaining "mapped" roles in any other linked Discord Guilds
  * Any mapped ranks in remaining other Discord Guilds will remain unchanged
  * Any mapped ranks that no longer remain in any Discord Guild will be removed

### Account Banned

When a user is banned from a Discord Guild:

* If [ban sync](../../usage/settings.md#ban-sync) is enabled
  * The user will be banned from the CMS
  * The user will be banned in any remaining Discord Guilds
* Bot checks for remaining "mapped" roles in any other linked Discord Guilds
  * Any mapped ranks in remaining other Discord Guilds will remain unchanged
  * Any mapped ranks that no longer remain in any Discord Guild will be removed

