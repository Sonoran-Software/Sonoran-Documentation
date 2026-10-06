---
description: Configure Discord role permissions directly in the CAD admin panel.
---

# Sonoran CAD Integration

Choose a Discord role and the CAD permissions it gives members, all inside CAD.

## 1. Connect Discord

1. In CAD, open **Administration > Advanced > Discord Integration > Invite bot**.
2. Select **Invite Sonoran Bot** and choose your server.
3. In Discord, run `/settings`. Choose a logging channel, select **Discord Only**, and enter the **Community ID** and **API Key** shown in CAD.
4. Return to CAD and select **Refresh Discord connection**.

If the bot is already set up, use `/settings > API Settings > Change CAD Setup` to connect your CAD community.

## 2. Choose role permissions in CAD

1. Open the **Role sync** tab and select **Add role**.
2. Search for a Discord role. Check its color and server name before selecting it.
3. Choose permissions under **Access**, **Records**, and **Administration**.
4. Wait for **Saved automatically**, then select **Done**.

<figure><img src="../.gitbook/assets/cad-discord-role-sync.png" alt="CAD Role sync tab showing Police Officer and Dispatcher role mappings"><figcaption><p>Manage role permissions directly in CAD.</p></figcaption></figure>

<figure><img src="../.gitbook/assets/cad-discord-role-permissions.png" alt="Police Officer role mapping with CAD permissions selected and Saved automatically confirmation"><figcaption><p>Choose what members with this role can do.</p></figcaption></figure>

Select **Edit permissions** beside an existing role to change it. Changes save automatically.

## 3. Sync members

1. Members join your CAD community.
2. Members run `/sync` in Discord. The bot guides them through account linking if needed.

Mapping changes automatically resync all linked members **5 minutes after your last edit**. Finishing the sync may take a little longer.

Members receive the combined permissions from their mapped roles. Sync replaces manually assigned and permission-key permissions.

{% hint style="info" %}
If this community uses Sonoran CMS, configure [CAD permissions in CMS](https://docs.sonoransoftware.com/cms/integration-capabilities/sonoran-cad-sync). The CAD role mapping editor is disabled for CMS-managed communities.
{% endhint %}

{% content-ref url="https://docs.sonoransoftware.com/cad/integration-plugins/discord/role-sync" %}
[CAD Role sync guide](https://docs.sonoransoftware.com/cad/integration-plugins/discord/role-sync)
{% endcontent-ref %}
