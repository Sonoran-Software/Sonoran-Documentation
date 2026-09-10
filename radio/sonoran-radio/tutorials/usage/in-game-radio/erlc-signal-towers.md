---
description: Configure virtual ER:LC radio towers and preview live signal coverage.
---

# ER:LC Signal Towers

Virtual signal towers let ER:LC communities apply location-based signal quality without installing a game resource. Signal is strongest near a tower and gradually weakens as a player approaches the edge of its range.

## Before You Begin

Make sure that:

* The community server is set to **ER:LC** under **Customize** > **Game Integration**.
* The ER:LC private server displays **Hub synced** if you want to preview live players and apply signal changes.
* Each player has linked the Roblox account they use in ER:LC to their Sonoran account for live signal.

If the private server is not connected yet, follow [Configure a Game Integration](../../getting-started/configure-game-integration.md#erlc).

## Open the ER:LC Tower Map

1. Navigate to **Customize** > **Game Integration**.
2. Select **ER:LC**.
3. Scroll to **Virtual Signal Towers** below the private-server settings.

The separate **Zones** page also uses your game selection automatically. ER:LC servers use the ER:LC map for emergency zones, while FiveM servers use the FiveM map and continue to provide Geo Channels and Degrade Zones.

## Place a Tower

1. Select **Place Tower**.
2. Select the desired tower location on the ER:LC map.
3. Enter a descriptive **Tower name**.
4. Set the tower's **Range** in map units.

Changes save automatically. Drag a tower marker to reposition it, or use the delete button beside a tower to remove it.

<figure><img src="../../../.gitbook/assets/erlc-tower-configuration.png" alt="ER:LC map with three overlapping virtual signal towers, live player markers, and a signal percentage tooltip"><figcaption><p>Overlapping tower ranges use the strongest signal and live player markers display their current percentage.</p></figcaption></figure>

## Understand Signal Coverage

Each tower displays a circular coverage overlay:

* **Green** at the tower represents the strongest signal.
* Signal gradually transitions through yellow toward **red** at the edge.
* The edge of the circle and locations outside it have no signal from that tower.
* Where tower ranges overlap, the strongest available tower signal is used.

Hover over any location on the map to preview its signal percentage. The calculation uses the straight-line distance from that point to each tower and displays the strongest resulting percentage.

{% hint style="info" %}
Emergency zones remain visible on the ER:LC map so you can plan radio coverage around important areas.
{% endhint %}

## Live Player Positions

While the Signal Towers map is open, linked players in the connected ER:LC private server appear as blue markers with their current signal percentage. Player positions refresh every five seconds.

Each connected user's Radio signal also refreshes every five seconds. Moving closer to a tower improves signal quality; moving toward or beyond its range reduces it.

## Troubleshooting

### The Tower Editor Is Not Available

Open **Customize** > **Game Integration** and confirm that the community server is set to **ER:LC**. The Virtual Signal Towers editor is not shown while FiveM is selected.

### The Server Does Not Show Hub Synced

Confirm that the ER:LC private server has the API Pack, then copy a current API key from **Server Info** > **Edit Server Settings** > **ER:LC API** and update the link.

### A Player Is Missing From the Map

Confirm that the player:

* Is currently in the linked ER:LC private server.
* Linked the correct Roblox account to their Sonoran account.
* Waited at least five seconds for the next position refresh.

### A Player Has No Signal

Confirm that at least one tower has been placed and that the player is inside a tower's range. A player who is not matched to a linked Roblox account or is not present in the connected ER:LC server cannot receive location-based signal.
