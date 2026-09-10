---
description: >-
  Receive instant notifications in your Discord channel when new records are
  added, dispatches are modified, admin actions occur, and more!
---

# Discord Webhooks

{% hint style="info" %}
The free version of Sonoran CAD is limited to one (1) Discord webhook.\
For more information, see our [pricing](../pricing/faq/) or view how to check your community [limits](../tutorials/getting-started/view-your-limits.md).
{% endhint %}

{% hint style="warning" %}
Currently, Discord webhooks can only be created using the Desktop version of Discord.
{% endhint %}

<figure><img src="../.gitbook/assets/webhook.png" alt=""><figcaption></figcaption></figure>

### 1. Open your Server Settings

Open the "Server Settings" panel in the top right of your Discord server.

![](<../.gitbook/assets/Screen Shot 2020-08-20 at 10.56.54 PM.png>)

### 2. Open your Discord Integrations

In the server settings panel, select the “Integrations” tab.

![](<../.gitbook/assets/Screen Shot 2020-08-20 at 10.54.04 PM.png>)

### 3. View your Webhooks

On the right, click to view all of your current Discord webhooks.

![](<../.gitbook/assets/Screen Shot 2020-08-20 at 10.54.37 PM.png>)

### 4. Create a New Webhook URL

Select the "New Webhook" button.

![](<../.gitbook/assets/Screen Shot 2020-08-20 at 10.54.59 PM.png>)

### 5. Customize the New Webhook

Here, you can set the Webhook name, channel and icon.

Press the "Copy Webhook URL" button to copy the webhook's URL.\
Press the "Save Changes" button to save your new webhook in Discord.

![](<../.gitbook/assets/Screen Shot 2020-08-20 at 10.55.39 PM.png>)

### 6. Configure the Sonoran CAD Webhook

{% hint style="warning" %}
New webhooks are created as "discord.com". If you are having problems please change the URLs of the old webhooks from "discordapp.com" to "discord.com" so they will function.
{% endhint %}

In the Sonoran CAD Admin panel, select “Advanced > Discord Integration”\
Paste your Webhook URL in the desired webhook configuration box.\
Toggle the desired notification events for the specific webhook. Press the “Save Configuration” button.

![](<../.gitbook/assets/Screen Shot 2020-08-20 at 11.02.11 PM.png>)

{% hint style="info" %}
_Note:_ Some webhooks allow you to customize the notification settings even further. For example, you can specify to only receive a webhook when a police record is added, edited or removed.
{% endhint %}

### 7. Footer Metadata

{% hint style="danger" %}
As of Sonoran Bot v2, the ability to react to webhooks to create actions has been depreciated.

Footer metadata is still available to all communities.

[Submit a suggestion](https://support.sonoransoftware.com) to see this reimplemented!
{% endhint %}

### Footer Metadata

Webhook footers contain metadata that can be pulled from a bot for further integration.\
These follow the format: `USERNAME or UUID` | `TYPE` | `ID`

![Sonoran CAD - Webhook Footer Data](<../.gitbook/assets/image (151).png>)

| Type               | ID Value                            |
| ------------------ | ----------------------------------- |
| 0: UNIT\_PANIC     | Identifier ID                       |
| 1: TEN\_CODES      |                                     |
| 2: PENAL\_CODES    |                                     |
| 3: SIGNAL          | Signal Value                        |
| 4: ACCOUNT         |                                     |
| 5: NEW\_DISPATCH   | Call ID \| Server ID                |
| 6: EDIT\_DISPATCH  | Call ID \| Server ID                |
| 7: CLOSE\_DISPATCH | Call ID                             |
| 8: EMERGENCY       | Call ID \| Server ID                |
| 9: RECORD\_ADD     | Record ID                           |
| 10: RECORD\_EDIT   | Record ID                           |
| 11: RECORD\_REMOVE | Record ID                           |
| 12: TONE\_PLAYED   | Tone Label                          |
| 999: SYSTEM        | Systemwide Broadcast (From Sonoran) |
