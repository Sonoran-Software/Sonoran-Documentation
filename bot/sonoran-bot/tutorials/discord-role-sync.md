---
description: Mirror Discord roles between servers linked to the same Sonoran community.
---

# Discord-to-Discord Role Sync

Sonoran Bot can automatically mirror roles between Discord servers connected to the same Sonoran community. For example, a **Police Department** role in a department server can automatically grant the matching **Police Department** role in your main community server.

## Choose the Right Sync Path

The `/rolemap` command contains two separate role sync options:

| Sync path | Use it for |
| --- | --- |
| **Discord → Discord** | Mirroring roles from one Discord server to another Discord server. |
| **Discord → Sonoran Products** | Mapping Discord roles to Sonoran CAD, CMS, or Radio permissions. |

{% hint style="info" %}
Changes made under **Discord → Discord** do not change your Sonoran CAD, CMS, or Radio permission mappings.
{% endhint %}

{% hint style="info" %}
**Screenshot placeholder:** `/rolemap` home menu showing the separate **Discord → Discord** and **Discord → Sonoran** buttons.
{% endhint %}

## Before You Begin

Make sure that:

* [Sonoran Bot is set up](getting-started.md) in both Discord servers.
* Both servers are linked to the same Sonoran community.
* You have the Discord **Manage Server** permission.
* Sonoran Bot has **Manage Roles** in the destination server.
* The destination role is below Sonoran Bot's highest role.
* The member exists in the destination server before Sonoran Bot can assign the destination role.

You will need the Discord server and role IDs when creating a mapping. Enable **Developer Mode** in Discord, then use **Copy Server ID** and **Copy Role ID** from the appropriate Discord menus.

{% hint style="warning" %}
Discord-managed roles and roles above Sonoran Bot cannot be used as destination roles.
{% endhint %}

## Create a Mapping

1. Run `/rolemap` in a linked Discord server.
2. Select **Discord → Discord**.
3. Select **Create**.
4. Enter the requested IDs:
   * **Source Discord Server ID:** The server containing the role you want Sonoran Bot to watch.
   * **Source Role ID:** The role that controls access.
   * **Destination Discord Server ID:** The server that should receive the mirrored role.
   * **Destination Role ID:** The role Sonoran Bot should add or remove.
   * **Administrator Note:** An optional description to help your team identify the mapping.
5. Submit the form. New mappings are enabled immediately.

{% hint style="info" %}
**Screenshot placeholder:** Discord-to-Discord dashboard showing mapping totals and the **View Mappings**, **Create**, **Edit**, **Enable / Disable**, and **Delete** actions.
{% endhint %}

{% hint style="info" %}
**Screenshot placeholder:** Create mapping form with example source and destination server and role IDs.
{% endhint %}

### Example

| Field | Example selection |
| --- | --- |
| Source server | Police Department server |
| Source role | Police Department |
| Destination server | Main community server |
| Destination role | Police Department |

When a member receives the source role, Sonoran Bot adds the destination role. When the source role is removed, Sonoran Bot removes the destination role.

## Manage Existing Mappings

Run `/rolemap` and select **Discord → Discord** to manage your mappings:

* **View Mappings:** Review each mapping, its enabled state, and any warning that needs attention.
* **Edit:** Change the source, destination, or administrator note.
* **Enable / Disable:** Pause a mapping without deleting it, or turn it back on later.
* **Delete:** Permanently remove a mapping.

{% hint style="info" %}
**Screenshot placeholder:** Mapping list showing an enabled mapping, source and destination names, and a ready status.
{% endhint %}

{% hint style="info" %}
**Screenshot placeholder:** Mapping details screen showing the edit, enable or disable, and delete confirmation actions.
{% endhint %}

## How Role Mirroring Works

* Mappings are one-way. The source role controls the destination role.
* To mirror roles in both directions, create a separate mapping for each direction.
* Sonoran Bot matches the same Discord user across both servers.
* Role changes are synchronized automatically while the mapping is enabled.
* If several source mappings grant the same destination role, the member keeps the destination role while any enabled source mapping still applies.

You can also run `/sync` to manually synchronize your own roles. Administrators can run `/sync community: yes` to synchronize the linked community.

## Troubleshooting

### A Mapping Shows a Warning

Open **View Mappings** and review the warning shown below the mapping. Common fixes include:

* Reinvite Sonoran Bot if it is no longer in one of the linked servers.
* Replace a role that was deleted.
* Grant Sonoran Bot the **Manage Roles** permission in the destination server.
* Move Sonoran Bot's role above the destination role.

### A Member Did Not Receive the Destination Role

Check that:

1. The mapping is enabled.
2. The member has the source role.
3. The member is in the destination server.
4. Sonoran Bot can manage the destination role.

After correcting the issue, run `/sync` or ask an administrator to run `/sync community: yes`.

### A Mapping Cannot Be Created

Confirm that both servers are linked to the same Sonoran community and that each server and role ID was copied correctly. The source and destination cannot be the exact same role.
