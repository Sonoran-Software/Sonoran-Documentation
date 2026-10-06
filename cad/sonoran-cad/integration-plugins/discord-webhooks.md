---
description: Choose which CAD events send notifications to your Discord channels.
---

# Webhooks

Send CAD alerts to Discord, including panic alerts, call updates, record changes, and account activity.

## Set up notifications

1. [Connect your Discord server](discord-bot-integration.md).
2. Open **Administration > Advanced > Discord Integration > Webhooks**.
3. Expand an event group and turn on the events you want.
4. Choose the **Server** and **Channel** for each event.
5. Optionally choose **Roles to ping (optional)**. Changes save automatically.

<figure><img src="../.gitbook/assets/cad-discord-webhooks.png" alt="CAD Webhooks tab with a panic alert routed to the cad-alerts channel and Police Officer role"><figcaption><p>Choose a channel for each notification.</p></figcaption></figure>

To stop a notification, turn off that event. The bot must have permission to view and send messages in the selected channel.
