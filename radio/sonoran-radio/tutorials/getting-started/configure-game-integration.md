---
description: Select FiveM or ER:LC and connect your game server to Sonoran Radio.
---

# Configure a Game Integration

Each Sonoran Radio community server can be configured for **FiveM** or **Emergency Response: Liberty County (ER:LC)**. Your selection controls the installation tools, location features, and zone map shown together under **Game Integration**.

Open your Radio community, then navigate to **Customize** > **Game Integration**.

Community administrators manage the game selection, private-server link, towers, and zones here. Members do not need administrator access to link their own Roblox accounts.

## FiveM

Select **FiveM** to display the FiveM zone editor. Expand **FiveM Installation** above the map when you need the resource setup and download tools; it stays collapsed when you are editing zones.

Continue with [Installing the In-Game Resource](installing-the-in-game-resource.md) to download and configure the resource.

## ER:LC

Select **ER:LC** to connect an ER:LC private server and enable location-based radio signal.

### 1. Link Your Roblox Account

Radio matches your Sonoran account to your player in ER:LC through your linked Roblox account. Once the community has a linked ER:LC server, signed-in users without a linked Roblox account see a **Link Roblox** banner across community tabs and in the standalone radio view. This includes ordinary members, not just administrators.

1. Select **Link Roblox**.
2. Sign in to Roblox in the new window and authorize the account link.
3. Return to Sonoran Radio. The banner will disappear once the link is detected.

{% hint style="warning" %}
Every Radio user who wants ER:LC location-based signal must link the Roblox account they use to play ER:LC.
{% endhint %}

A Roblox account link already completed through another Sonoran product is reused by Radio.

The banner is hidden when the community has no linked ER:LC server, FiveM is selected, or the current user's Roblox account is already linked. Linking the private server does not link members' personal accounts; each user must complete that step for themselves.

### 2. Create an ER:LC API Key

ER:LC API access requires the private server's paid **API Pack** upgrade.

1. In ER:LC, open **Menu** > **Servers** > **Owned Servers**.
2. Select your private server, then open **Upgrade Packs** > **API Pack** if it is not already enabled.
3. Join the private server and open **Server Info**.
4. Select **Edit Server Settings**.
5. Navigate to **ER:LC API**, select **Edit**, and copy the API key.

{% hint style="danger" %}
Treat the ER:LC API key like a password. Do not post it in Discord, screenshots, source code, or other public locations.
{% endhint %}

### 3. Link the Private Server

1. Paste the key into **ER:LC API Key**.
2. Select **Link Server**.
3. Confirm that the API key form disappears and the private server's join code appears beside **ER:LC Private Server**.

Once linked, the server section is a compact row containing **ER:LC Private Server**, the join code, and **Unlink**. To replace the key or connect a different private server, unlink the current server first, then use the API key form to link it again.

To disconnect the private server, select **Unlink** and confirm the prompt. Live player positions and ER:LC signal updates stop until another server is linked.

### 4. Configure Signal Coverage

The unified **ER:LC Map Configuration** editor appears directly below the private-server settings. You can lay out towers before linking the server, but the server must be synced before Radio can display live players or update their signal.

Use **Towers** to configure signal coverage, or switch the same map to **Emergency Zones** to draw and edit room-specific zones. Switching back to FiveM restores the FiveM map and its emergency, geo-channel, and signal degradation zone options.

{% content-ref url="../usage/in-game-radio/erlc-signal-towers.md" %}
[erlc-signal-towers.md](../usage/in-game-radio/erlc-signal-towers.md)
{% endcontent-ref %}
