---
description: Learn how to invite and manage users in your Sonoran Radio community!
---

# Invite and Manage Users

{% embed url="https://youtu.be/5cPJCugzP4g" %}

## Automatic Join, Kick, Ban, and Permission Sync

Sonoran CMS allows you to automatically add and manage user permissions with user applications, sync them with Discord roles, and more!

{% content-ref url="../integrations/sonoran-cms.md" %}
[sonoran-cms.md](../integrations/sonoran-cms.md)
{% endcontent-ref %}

If you are building your own integration, Sonoran Radio also exposes API endpoints to approve members, kick members, ban members, update member display names, and set member permissions.

{% content-ref url="../../developer-documentation/developer-documentation/api-endpoints/users/" %}
[users](../../developer-documentation/developer-documentation/api-endpoints/users/)
{% endcontent-ref %}

***

## Discord Role Sync

Sync radio permissions with Discord roles.

{% content-ref url="https://app.gitbook.com/s/gJnyZgUQPWpA5p9njAAR/tutorials/sonoran-radio-integration" %}
[Sonoran Radio Integration](https://app.gitbook.com/s/gJnyZgUQPWpA5p9njAAR/tutorials/sonoran-radio-integration)
{% endcontent-ref %}

***

## FiveM Management

All user permission management, including inviting and approving members, can be automated with FiveM ACE permissions.

{% content-ref url="../usage/in-game-radio/configuring-ace-permissions.md" %}
[configuring-ace-permissions.md](../usage/in-game-radio/configuring-ace-permissions.md)
{% endcontent-ref %}

## Manual User Management

### Inviting Members

Users will need the `Community ID` located in the `Administrator` panel.\
Communities can also [customize this community ID](../usage/dispatch-panel/custom-domain-vanity-url.md#vanity-urls).

<figure><img src="../../.gitbook/assets/image (262).png" alt="" width="375"><figcaption><p>Sonoran Radio: Community ID</p></figcaption></figure>

When logged into Sonoran Radio, they can select the `+` button in the portal to paste in the `Community ID`.

<figure><img src="../../.gitbook/assets/image (263).png" alt="" width="170"><figcaption><p>Sonoran Radio: Join Community</p></figcaption></figure>

### Approving Members

When a member joins your community with an invite code, they will be pending until approved.

Users with the `Approve Pending Members` permission can approve in the `Members` tab

<figure><img src="../../.gitbook/assets/chrome_q9hd1Yw3VE.png" alt="" width="375"><figcaption><p>Sonoran Radio - Approve Members</p></figcaption></figure>

### Manage User Permissions

User permissions can be manually set by clicking the shield icon on a user in the `Members` tab

<figure><img src="../../.gitbook/assets/image (261).png" alt="" width="284"><figcaption></figcaption></figure>

***

## Next Steps

Installing the In-Game Resource

{% content-ref url="installing-the-in-game-resource.md" %}
[installing-the-in-game-resource.md](installing-the-in-game-resource.md)
{% endcontent-ref %}
