---
description: Sync Sonoran Radio permissions with Discord roles for easy management!
---

# Sonoran CAD Integration

## Sync Discord Roles to CAD Permissions

Sonoran Bot makes managing your Sonoran CAD permissions a breeze! Map specific permissions to Discord roles. Users with those Discord roles will be granted the assigned permissions.

{% hint style="warning" %}
Sonoran CAD role mapping is not available when Sonoran Bot is in CMS mode. Sonoran CMS manages your [CAD](https://docs.sonoransoftware.com/cms/integration-capabilities/sonoran-cad-sync) and [Radio](https://docs.sonoransoftware.com/cms/integration-capabilities/sonoran-radio-sync) permissions inside the app with CMS user ranks.
{% endhint %}

## Setup

### 1. Invite the Bot and Link Your CAD

<details>

<summary>Inviting and Linking Your CAD</summary>

If you have not already, be sure to [invite the Discord bot and link your CAD community ID and API key](getting-started.md).

If you already have Sonoran Bot configured for another product, you can add the CAD community ID and API key in the `/settings` menu under **API Menu** > **Change CAD Setup**.

<figure><img src="../.gitbook/assets/image (20).png" alt="" width="237"><figcaption><p><code>/settings</code> -> <code>API Menu</code> -> <code>Change Radio Setup</code></p></figcaption></figure>

After the Radio credentials are saved, the bot enables one of these sync modes automatically:

* `RADIO` if only Radio is configured
* `CAD_RADIO` if both CAD and Radio are configured
* `CMS_BIDIR` if CMS is configured

{% hint style="info" %}
CMS takes priority over CAD and Radio sync. If CMS credentials are present, live role sync runs through the CMS path until CMS is removed from the community setup.
{% endhint %}

{% hint style="warning" %}
CAD credentials are saved without setup-time validation. The first real validation usually happens when you open the CAD role mapping menu or run `/sync`.
{% endhint %}

</details>

### 2. Configure Role Mapping

<details>

<summary>Configuring CAD Role Mapping</summary>

Run `/rolemap` to configure how Discord roles translate into Sonoran CAD access.

If your community is in `CAD_RADIO` mode, the bot first asks whether you want to manage CAD mappings or Radio mappings. If your community is in `CAD` mode, the bot opens the CAD mapping menu directly.

<div><figure><img src="../.gitbook/assets/image (17).png" alt="" width="229"><figcaption><p><code>/rolemap</code> product selector in <code>CAD_RADIO</code> mode</p></figcaption></figure> <img src="../.gitbook/assets/bot_cadrolemap01.png" alt="Sonoran Bot - CAD Role Mapping" width="235"></div>

Select the Discord role you wish to map to specific CAD permissions. The embed will link you to a [permission bit map generator](https://sonoran-software.github.io/sonoranbot-perms). Toggle the specific CAD permissions and copy the code below.

<div><img src="../.gitbook/assets/bot_cadrolemap02.png" alt="CAD Mapping: Role Select" width="298"> <img src="../.gitbook/assets/bot_cadrolemap03.png" alt="CAD Mapping: Bit Map Enter" width="219"> <figure><img src="../.gitbook/assets/image (24).png" alt="" width="375"><figcaption><p>CAD Permission Bit Map Generator</p></figcaption></figure></div>

To delete an existing role mapping, edit it and enter `0` as the value.

</details>

### 4. Syncing Users

<details>

<summary>Syncing User Permissions</summary>

In order for the bot to sync users in your CAD community, their Sonoran account must be linked to Discord. Users can run `/linkme` to link their Discord to their Sonoran Software account.

{% hint style="info" %}
User permissions are synced across all linked Discord guilds. If you have multiple Discord servers linked to the same Sonoran community, the bot gathers all of them and checks the member's roles across every linked server that the bot is in.
{% endhint %}

**Automatic Sync**

Sonoran Bot will automatically sync and update Radio permissions on:

* Discord role changes
* Members exiting the Discord guild
* Members being banned from the Discord guild

**Manual Sync**

Users can run `/sync` to force a manual permission sync.

Administrators can force a community-wide sync by running `/sync community: yes`

</details>

### Best Practices and FAQ

<details>

<summary>Best Practices and FAQ</summary>

* It is advised to not sync potentially dangerous permissions (such as Admin Access permissions) with Discord roles **unless** you trust staff with that role, or it's just you.
* The community owner is completely ignored during the synchronization process.
* "Principle of Least Privilege" should be exercised during this setup. Don't give out permissions you don't think users performing the role would need.
* Discontinue use of permission keys ASAP. The bot "takes over" synchronization and will remove permissions granted by permission keys if they don't have a role that grants it.
  * Same goes for manual permission grants, **unless there is no role granting that permission**.

</details>
