---
description: Granting permissions to user accounts is easy! We'll help you get started.
---

# Granting Account Permissions

## Permission Granting Options

User accounts can be granted automatically with our [Discord bot](../../integration-plugins/discord-bot-integration.md), manually granted by an administrator in your community, or by generating a "[Permission Key](permissions.md#permission-keys)" for users to access independently.

### [Sonoran CMS - Permission Sync](https://info.sonorancms.com/why-choose-sonoran-cms/why-choose-sonoran-cms)

Sonoran CMS is your single point of management for your community's documents, whitelisting, in-game permissions, community website, and more!

In addition to whitelisting and in-game permissions, [Sonoran CMS can automatically manage your Sonoran CAD permissions](https://info.sonorancms.com/integration-capabilities/sonoran-cad-sync)!

![Sonoran CAD x Sonoran CMS - Permission Sync](../../.gitbook/assets/CMS-CAD-Sync.png)

### Discord Bot Roles

Our [Discord bot](https://info.sonoranbot.com/en/tutorials/getting-started) allows you to automatically sync Discord roles with CAD permissions.

### Manually Granting Permissions

#### 1. Open the Accounts Menu

In the admin menu, select the "Accounts" option to view all user accounts in your community.

{% hint style="info" %}
New and Pending User Accounts

New accounts are automatically set to "PENDING"\
To view pending accounts, you will need to change the accounts drop down in the top left of the window from "Active" to "Pending"
{% endhint %}

![The account grid displays all user accounts in your community](../../.gitbook/assets/CAD_Accounts.png)

#### 2. Select an Account

Simply click on an account to manually edit the permissions, ban, or kick a user.\
After changing a user's permissions, don't forget to press save!

![The account management panel allows you to toggle individual user permissions](../../.gitbook/assets/permissions.PNG)

### Permission Keys

Permission keys are a great way to allow users to automatically grant themselves their necessary permissions.

#### 1. Create a Permission Key

In the admin menu, select `Accounts > Permission Keys`\
Here, you can create a new permission key. Simply enter the new key name, toggle the associated permissions, and press save.

![Sonoran CAD - Permission Key Editor](../../.gitbook/assets/permkey.PNG)

#### 2. Apply a Permission Key

At the community menu, your users can enter the new permission key. After pressing enter, the associated permissions will automatically be applied to their account.

![Sonoran CAD - Apply Permission Key](../../.gitbook/assets/CAD_MenuPermKey.png)

{% hint style="info" %}
Invalid Key Error?

Permission keys are _case sensitive_, so ensure your users are entering the key exactly, with the proper capitalization.
{% endhint %}
