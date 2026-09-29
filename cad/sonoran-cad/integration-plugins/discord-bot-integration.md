---
description: Automatically grant CAD permissions based on Discord roles.
---

# Discord Bot Integration

Sonoran Bot automatically grants CAD permissions based on members' Discord roles.

1. [Invite Sonoran Bot and link your CAD community](https://docs.sonoransoftware.com/bot/tutorials/getting-started).
2. In CAD, open **Administration > Permission Keys > Bot permissions**. Select permissions and copy the **Permission code**.
3. In Discord, run `/rolemap` and select **Discord → Sonoran > Create Mapping**. Choose **CAD** and the Discord role, paste the code under **Set Permission**, then save with **Create Mapping**.
4. Members run `/linkme` to link their accounts and `/sync` to apply their permissions.

See the [illustrated setup guide](https://docs.sonoransoftware.com/bot/tutorials/sonoran-cad-integration) for screenshots.

{% hint style="warning" %}
Sync replaces members' CAD permissions with the combined permissions from their mapped roles. Manual grants and permission-key grants are overwritten.
{% endhint %}

If your bot uses CMS, configure [CAD permissions through CMS ranks](https://docs.sonoransoftware.com/cms/integration-capabilities/sonoran-cad-sync) instead.
