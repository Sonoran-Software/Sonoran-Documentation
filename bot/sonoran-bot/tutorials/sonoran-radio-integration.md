---
description: Sync Sonoran Radio permissions with Discord roles for easy management!
---

# Sonoran Radio Integration

## Sonoran Radio Integration

Sonoran Bot makes managing your Sonoran Radio permissions a breeze! Map specific permissions to Discord roles. Users with those Discord roles will be granted the assigned permissions.

{% hint style="warning" %}
Sonoran Radio role mapping is not available when Sonoran Bot is in CMS mode. Sonoran CMS manages your [CAD](https://docs.sonoransoftware.com/cms/integration-capabilities/sonoran-cad-sync) and [Radio](https://docs.sonoransoftware.com/cms/integration-capabilities/sonoran-radio-sync) permissions inside the app with CMS user ranks.
{% endhint %}

## Setup

### 1. Invite the Bot and Link Your Radio

<details>

<summary>Inviting and Linking Your Radio</summary>

If you have not already, be sure to [invite the Discord bot and link your Radio community ID and API key.](getting-started.md)

If you already have Sonoran Bot configured for another product, you can add the Radio community ID and API key in the `/settings` menu under **API Menu** > **Change Radio Setup**.

<figure><img src="../.gitbook/assets/image (20).png" alt="" width="237"><figcaption><p><code>/settings</code> -> <code>API Menu</code> -> <code>Change Radio Setup</code></p></figcaption></figure>

After the Radio credentials are saved, the bot enables one of these sync modes automatically:

* `RADIO` if only Radio is configured
* `CAD_RADIO` if both CAD and Radio are configured
* `CMS_BIDIR` if CMS is configured

{% hint style="info" %}
CMS takes priority over CAD and Radio sync. If CMS credentials are present, live role sync runs through the CMS path until CMS is removed from the community setup.
{% endhint %}

{% hint style="warning" %}
Radio credentials are saved without setup-time validation. The first real validation usually happens when you open the Radio role mapping menu or run `/sync`.
{% endhint %}

</details>

### 2. Create a Radio Bit Map

<details>

<summary>Generating Radio Bit Maps</summary>

<figure><img src="../.gitbook/assets/image (21).png" alt=""><figcaption></figcaption></figure>

In Sonoran Radio, navigate to **Members** > **Permission Generator**

Toggle the desired permissions to generate a bit map below. Toggling private channels will add the channel IDs as a comma separated list at the end.

Once complete, copy the bit map to be entered into Sonoran Bot.

<div><figure><img src="../.gitbook/assets/image (22).png" alt="" width="224"><figcaption></figcaption></figure> <figure><img src="../.gitbook/assets/image (23).png" alt="" width="178"><figcaption></figcaption></figure></div>

</details>

### 3. Configure Role Mapping

<details>

<summary>Configuring Radio Role Mapping</summary>

Run `/rolemap` to configure how Discord roles translate into Sonoran Radio access.

If your community is in `CAD_RADIO` mode, the bot first asks whether you want to manage CAD mappings or Radio mappings. If your community is in `RADIO` mode, the bot opens the Radio mapping menu directly.

<div><figure><img src="../.gitbook/assets/image (17).png" alt="" width="229"><figcaption><p><code>/rolemap</code> product selector in <code>CAD_RADIO</code> mode</p></figcaption></figure> <figure><img src="../.gitbook/assets/image (18).png" alt="" width="262"><figcaption><p><code>/rolemap</code> Radio main menu showing selector</p></figcaption></figure></div>

Select the Discord role you wish to map to specific Radio permissions. Enter the radio permission bit map from the previous step.

<div><figure><img src="../.gitbook/assets/image (19).png" alt=""><figcaption><p>Selected Radio role view in <code>/rolemap</code></p></figcaption></figure> <figure><img src="../.gitbook/assets/image (32).png" alt=""><figcaption></figcaption></figure></div>

To delete an existing role mapping, edit it and enter `0` as the value.

</details>

### 4. Syncing Users

<details>

<summary>Syncing User Permissions</summary>

In order for the bot to sync users in your radio community, their Sonoran account must be linked to Discord. Users can run `/linkme` to link their Discord to their Sonoran Software account.

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

### Troubleshooting

If Radio sync does not work, check these first:

1. Confirm the user's Sonoran account is linked to Discord (`/linkme`).
2. Confirm the correct Sonoran Radio community ID and API key are saved.
3. Confirm the Discord role is actually mapped in `/rolemap`.
4. Confirm the permission integer was generated correctly.
5. Run `/sync` manually to test the user.

If `/rolemap` or `/sync` fails immediately after setup, the most likely causes are invalid Radio credentials or a missing linked Sonoran account.
