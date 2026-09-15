---
description: Learn more about SonoranBot's Discord commands.
---

# Commands

## Commands Reference

By default, only server administrators (those with Administrator in the guild) can execute any of the below commands. You must use [Discord's permissions setting feature](https://discord.com/blog/slash-commands-permissions-discord-apps-bots) to give users access.

| Command         | Product | Function                                                                                                                                                        |
| --------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/rolemap`      | All     | Opens Discord-to-Discord and Sonoran product role mapping settings                                                                                              |
| `/settings`     |         | Allows adjustment of various [settings](settings.md) in the bot                                                                                                 |
| `/linkme`       | CAD     | Links your Discord to your SonoranCAD account                                                                                                                   |
| `/sync`         | CAD/CMS | Forces a sync with CAD/CMS. If `community` is toggled, it will force a sync for everyone in all linked guilds. If not, it will only sync the server its run in. |
| `/syncuser`     | CAD/CMS | Forces a sync with CAD/CMS for the specified user.                                                                                                              |
| `/help`         |         | Links to sonoranbot.com                                                                                                                                         |
| `/promote`      | CMS     | Trigger a CMS [promotion flow](https://docs.sonoransoftware.com/cms/tutorials/user-management/rank-promotions)                                                  |
| `/demote`       | CMS     | Trigger a CMS [demotion flow](https://docs.sonoransoftware.com/cms/tutorials/user-management/rank-promotions)                                                   |
| `/clockincms`   | CMS     | Clock in to CMS                                                                                                                                                 |
| `/clockoutcms`  | CMS     | Clock out of CMS                                                                                                                                                |
| `/caduser`      | CAD     | Get information on a linked CAD user                                                                                                                            |
| `/embedbuilder` |         | Possible flags are `link` and `build`                                                                                                                           |
| `/info`         |         | Returns server and community information                                                                                                                        |
| `/ping`         |         | Pings the server                                                                                                                                                |
| `/ban`          |         | Ban Members                                                                                                                                                     |
| `/unban`        |         | Unban Members                                                                                                                                                   |
| `/kick`         |         | Kick Members                                                                                                                                                    |
| `/mute`         |         | Timeout Members                                                                                                                                                 |
| `/unmute`       |         | Unmute Members                                                                                                                                                  |
| `/warn`         |         | Warn Members                                                                                                                                                    |

## Deprecated Commands <a href="#deprecated-commands" id="deprecated-commands"></a>

These commands are no longer in use, please use the specified replacements (or see notes).

| Command        | Replacement | Notes                                                                                                                                                                                                                                                            |
| -------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/guildlink`   | None        | Setup additional communities through `/settings` and they will be linked automatically                                                                                                                                                                           |
| `/syncroles`   | `/sync`     | Set `community` to `Yes` to sync all linked guides. Set `community` to `No` or run `/sync` alone to sync the current guild only.                                                                                                                                 |
| `/syncme`      | `/sync`     | There is no way to only sync your user. You must sync either the current guild or all guilds (see above)                                                                                                                                                         |
| `/setsyncmode` | None        | Automatically detects sync mode. If a CMS community has been linked to your guild, then it will sync to that, and and CAD roles will have to be mapped using [CMS -> CAD Permission Sync](https://info.sonorancms.com/integration-capabilities/sonoran-cad-sync) |
