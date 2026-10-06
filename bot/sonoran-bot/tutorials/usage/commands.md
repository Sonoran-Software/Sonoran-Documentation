---
description: Learn more about SonoranBot's Discord commands.
---

# Commands

Configure [CAD role sync in the CAD admin panel](https://docs.sonoransoftware.com/cad/integration-plugins/discord/role-sync).

## Commands Reference

By default, only server administrators (those with Administrator in the guild) can execute any of the below commands. You must use [Discord's permissions setting feature](https://discord.com/blog/slash-commands-permissions-discord-apps-bots) to give users access.

| Command         | Product | Function                                                                                                                                                        |
| --------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/rolemap`      | Discord/CMS/Radio | Opens Discord-to-Discord, CMS, and Radio role mapping settings                                                                                              |
| `/settings`     |         | Allows adjustment of various [settings](settings.md) in the bot                                                                                                 |
| `/ticket`       |         | Creates, configures, and manages private support tickets. See the [Ticket System](tickets.md) guide.                                                            |
| `/linkme`       | All     | Links your Discord account to your Sonoran account                                                                                                                   |
| `/sync`         | All     | Syncs your roles across Sonoran products. Select `community: Yes` to sync everyone in the linked servers. |
| `/syncuser`     | All     | Syncs the selected member across Sonoran products.                                                                                                              |
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
| `/syncroles`   | `/sync`     | Select `community: Yes` to sync all linked servers. Run `/sync` alone to sync your own account.                                                                                                                                 |
| `/syncme`      | `/sync`     | Run `/sync` to sync your own account.                                                                                                                                                         |
| `/setsyncmode` | None        | Automatically detects sync mode. If a CMS community has been linked to your guild, then it will sync to that, and and CAD roles will have to be mapped using [CMS -> CAD Permission Sync](https://info.sonorancms.com/integration-capabilities/sonoran-cad-sync) |
