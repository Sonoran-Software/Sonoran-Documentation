---
description: Connect Discord to manage Radio permissions and private channel access.
---

# Discord

Connect your Discord server once, then choose the Radio permissions each role gives members.

## 1. Connect your server

You need **Manage Server** in Discord to invite and set up the bot.

1. [Invite Sonoran Bot](https://sonoranbot.com/invite) and choose your Discord server.
2. In Radio, open **Administration** and copy your **Community ID** and **Community API Key**.
3. In Discord, run `/settings`. Choose a logging channel, select **Discord Only**, and enter your Radio community ID and API key. Leave CAD blank if you do not use it.
4. Return to Radio, open **Customize > Discord**, and select **Refresh Discord roles**.

**Already using the bot?** Open `/settings` and use **Change Radio Setup** in the API settings to connect this Radio community, then refresh in Radio.

**Using CMS?** Manage [Radio permissions in CMS](https://docs.sonoransoftware.com/cms/integration-capabilities/sonoran-radio-sync). Radio role mapping is disabled for communities managed by CMS.

## 2. Set up role sync

{% content-ref url="discord/role-sync.md" %}
[Role sync](discord/role-sync.md)
{% endcontent-ref %}

For other bot features, see the [Sonoran Bot guides](https://docs.sonoransoftware.com/bot/tutorials/getting-started).

