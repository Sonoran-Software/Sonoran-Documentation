---
description: Learn more about SonoranBot's Discord moderation capabilities.
---

# Moderation

Using SonoranBot, you have access to several commands that are all logged to a special channel. Keep moderation actions organized and easily control access!

{% hint style="info" %}
Moderation commands are available to any Discord server linked to a community, including those on the Free version of CAD and/or CMS!
{% endhint %}

## Getting Started

### Set Permissions

{% hint style="warning" %}
The permissions in the below table are also what SonoranBot will need to perform them, otherwise you will get an error message.
{% endhint %}

By default, all commands are set to what you expect:

| Command | Required Permission       |
| ------- | ------------------------- |
| `/ban`  | Ban Members               |
| `/kick` | Kick Members              |
| `/mute` | Timeout Members           |
| `/warn` | Manage Guild ("disabled") |

The `/warn` command is attached to Manage Guild by default like all other commands - you will want to give this command to certain roles as desired. This can be accomplished within Discord's Integrations settings (Desktop/Web only).

![SonoranBot - Manage Integration](../../.gitbook/assets/bot_discordmanageintegration.png)

<img src="../../.gitbook/assets/bot_discordintegrationsettings.png" alt="SonoranBot - Warn Permission" width="563">

Managing integration permissions is outside the scope of this guide, but Discord [has a guide](https://support.discord.com/hc/en-us/articles/4644915651095-Command-Permissions) of their own to walk you through the process. Chances are, you've already done this if you're using the CAD/CMS integrations.

## Usage Examples

When a command is used, a logging entry will be created depending on the action.

### Ban/Unban

![SonoranBot - /Ban Command](../../.gitbook/assets/bot_bancommand.png) ![SonoranBot - Ban Message](../../.gitbook/assets/bot_banmessage.png)

***

### Kick

![SonoranBot - /Kick Command](../../.gitbook/assets/bot_kick.png) ![SonoranBot - Kick Message](../../.gitbook/assets/bot_kickedlog.png)

***

### Mute/Unmute

![SonoranBot - /Mute Command](../../.gitbook/assets/bot_mute.png) ![SonoranBot - /Unmute Command](../../.gitbook/assets/bot_unmute.png)

***

### Warn

![SonoranBot - /Warn Command](../../.gitbook/assets/bot_warn.png) ![SonoranBot - /Warn Message](../../.gitbook/assets/bot_warnlog.png)
