---
description: >-
  Restrict user access to community approval, permissions, commands and features
  in-game with ACE permissions.
---

# Configuring ACE Permissions

## **Command ACE Permissions**

ACE permissions allow you to restrict what users have access to certain commands.

ACE permissions are configured in your `server.cfg` file.\
To keep them organized, you can also place them in a separate file (e.g., `permissions.cfg` in the same directory) and then `exec permissionss.cfg` from within your `server.cfg`.

### **1. Create a Permission Group**

Here, we'll create an `admin` ACE group that has access to all of the `sonoranradio.example` categorized permissions.

```
# ACE group name 'admin' for 'sonoranradio.example' permission category
add_principal group.admin sonoranradio.example
```

### **2. Assign Permissions to the Group**

This adds all of the Sonoran Radio permissions (configuring repeaters, using the radio, and repairing repeaters) to the `sonoranradio.example` category that the `admin` ACE group has access to.

<details>

<summary>Group Permission Example</summary>

```
# Add permissions to the ace category "sonoranradio.example"

# Tower Configuration Menu
add_ace sonoranradio.example command.radiomenu allow

# Radio Access (Optional: If `acePermsForRadio` is `true` in config.lua)
# If using `acePermSync` in config.lua, this will also auto-approve the user in the community
add_ace sonoranradio.example sonoranradio.use allow

# Radio Display Name Command Access
add_ace sonoranradio.example sonoranradio.displayname allow

# ACE Permission Sync (Optional: If `acePermSync` is `true` in config.lua)
# See the "ACE Permission Sync" section below this documentation section for more info
# This example auto-approves the user in the radio community
add_ace sonoranradio.example sonoranradio.autoapprove allow

# Tower Repair (Optional: If `acePermsForTowerRepair` is `true` in config.lua)
add_ace sonoranradio.example sonoranradio.repair allow

# Connected Users List (Optional: If `acePermsForRadioUsers` is `true` in config.lua)
add_ace sonoranradio.example sonoranradio.radiousers allow

# Radio Scanner Menu (Optional: If `chatter` is `true` in config.lua)
add_ace sonoranradio.example sonoranradio.scanner allow

# Radio Scanner Channel Access (Optional: If `chatter` is `true` in config.lua)
# Number is based off of the channel ID
add_ace sonoranradio.example sonoranradio.channel.123

# Give the group access to /radio scanner
add_ace group.admin sonoranradio.jammers allow

# You can restrict specifc jammer types to specific ace groups
add_ace group.admin sonoranradio.jammer_handheld allow
```

</details>

### **3. Add Users to the ACE Group**

This grants a user the `admin` ACE permission group, specific to their in-game license ID.

```
add_principal identifier.license:{GTA License} group.admin
```

***

## ACE Permission Sync

{% hint style="danger" %}
**ACE permission sync will override all existing user permissions.**

**Any manually granted permissions will be removed**, ensuring the user has only the permissions configured through ACE.
{% endhint %}

ACE permission sync allows you to automatically approve users in the radio community, grant access to private channels, and give user permissions like name changes, kick, etc.

This sync is ran whenever you turn the radio on and connect.

[View other ways to manage user permissions.](../../getting-started/invite-and-manage-users.md)

### Enable ACE Permission Sync

To enable this feature, set your [`config.lua`'s `Config.acePermSync` value](../../getting-started/installing-the-in-game-resource.md#updates) to `true`.

### Guest Login

ACE permission sync also allows new users to bypass the Sonoran account login and [sign in as a guest](using-the-in-game-radio/#login-as-guest).

#### Restrict Guest Logins

The [config.lua's `acePermsForRadioGuests` property](../../getting-started/installing-the-in-game-resource.md#updates) is `false` by default.

* When `false`: All users can see and use the **Login as Guest** button.
* When `true`: Users must have the `sonoranradio.use` ACE permission to see the **Login as Guest** button.

Once logged in as a guest, radio permissions will be granted based on the[ configured ACE permissions](configuring-ace-permissions.md#permission-sync-options).

### Permission Sync Options

<details>

<summary>Community Approval</summary>

Community members must be approved when first joining the radio. The approval behavior is dependent upon your [config.lua's `acePermsForRadio` value](../../getting-started/installing-the-in-game-resource.md#updates).

If `acePermsForRadio` is `true` users will need the `sonoranradio.autoapprove` permission to be automatically approved in the community.

If `acePermsForRadio` is `false` users will be automatically approved when turning on the radio.

</details>

<details>

<summary>Private Channels</summary>

Access to private channels can be granted via ACE permissions.

You will need the channel ID ([visible in the dispatch panel](../dispatch-panel/using-the-dispatch-panel.md#channel-ids) or [in-game radio](using-the-in-game-radio/fivem-keybinds-and-commands.md#copying-channel-and-scan-list-ids)) for each channel ACE permission.

`sonoranradio.channel.123`

</details>

<details>

<summary>General Permissions</summary>

General radio community permissions can also be granted via ACE permissions.

Admin: `sonoranradio.admin`

Approve Members: `sonoranradio.communityapprove`

Change Display Name: `sonoranradio.setmynickname`

Manage Display Name: `sonoranradio.setnickname`

Kick from Community: `sonoranradio.communitykick`

Kick from Radio: `sonoranradio.radiokick`

Move Radio Users: `sonoranradio.radiomove`

Play Dispatch Tones: `sonoranradio.radiotones`

Override Talkover Protection: `sonoranradio.radiotalkover`

Stun Radio Users: `sonoranradio.radiostun`

![](<../../../.gitbook/assets/image (260).png>)

</details>

### Permission Sync Example

<details>

<summary>Permission Sync Configuration Example</summary>

```
# Grant the ADMIN radio permission to everyone in the admin group
add_ace group.admin sonoranradio.admin allow

# Grant the talkover-override permission to everyone in the admin group
add_ace group.admin sonoranradio.radiotalkover

# Grant the radio-stun permission to everyone in the admin group
add_ace group.admin sonoranradio.radiostun allow

# Auto-approve everyone in the leo group
add_ace group.leo sonoranradio.autoapprove allow
```

</details>

## ACE Permission Tools

You can also use external services like [Sonoran CMS](https://info.sonorancms.com/integration-capabilities/qb-core-game-panel/using-the-game-panel/aces-and-principals) to easily manage ACE permissions via ranks and Discord roles.

<div><figure><img src="../../../.gitbook/assets/image (119).png" alt="" width="375"><figcaption><p>Sonoran CMS - QB Core Panel</p></figcaption></figure> <figure><img src="../../../.gitbook/assets/image (120).png" alt="" width="375"><figcaption><p>Sonoran CMS - vMenu Panel</p></figcaption></figure></div>
