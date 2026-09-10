---
description: Automatically register vehicles using an in-game command!
---

# Vehicle Registrations

## ER:LC Vehicle Registration

Automatically register vehicles using an in-game command!

<figure><img src="../../.gitbook/assets/erlc_reg_promo.png" alt=""><figcaption></figcaption></figure>

## Civilian Panel Access

Automatically register your current vehicle via the civilian panel.

<details>

<summary>Civilian Panel Automatic Registration</summary>

Users can automatically register their current vehicle via the civilian panel.

1. Create and Select a Character

Create and select the character you wish to register the vehicle to.

2. Trigger ER:LC Automatic Registration

* **Civilian** > **DMV** > **ER:LC Automatic Registration**

3. View the Registration

* Select the **Records** button to search and view your new vehicle registration.

</details>

## In-Game Registration Command Configuration

Register a vehicle via a custom in-game command.

### Persistent Registration

<details>

<summary>In-Game Persistent Registration Command</summary>

When the registration command is ran a new vehicle registration will be created under the user's currently selected character in the CAD. The registration information will include the character information, license plate, make, and color.

If the user already has this license plate registered under any of their characters, the registration will be moved to the currently selected character and the vehicle information will be updated.

</details>

### Temporary Registration

<details>

<summary>In-Game Temporary Registration Command</summary>

Running the temporary registration command will perform the same actions as above. However, the registration record will be automatically **deleted after 24 hours**.

</details>

#### Note: Vehicle Registration Persistence

Vehicles purchased in public ER:LC servers persist their license plate across public and private servers. If a vehicle is purchased in a private server, vehicles are not persisted and are removed when the user leaves the game. For private server vehicles, it is best to use the temporary registration command.

## CAD Permission Requirements

In order to use this command in-game, players must have a [linked Roblox account](getting-started.md#linking-your-roblox-account) with the **DMV Record Add** and **DMV Record Edit** permissions to add or update vehicle registrations.

## Using the In-Game Commands

When in-game, users can run the customizable vehicle registration commands followed by the license plate on the vehicle.

Ex: `;register`

Once the registration has been created in the CAD, users will be notified by an optional in-game message.

<div><figure><img src="../../.gitbook/assets/image (31).png" alt=""><figcaption></figcaption></figure> <figure><img src="../../.gitbook/assets/image (43).png" alt=""><figcaption></figcaption></figure> <figure><img src="../../.gitbook/assets/image (44).png" alt=""><figcaption></figcaption></figure></div>

[In-game commands not working? Make sure you have connected the webhook.](getting-started.md#id-3.-link-er-lc-event-webhooks-to-sonoran-cad)

## Troubleshooting

### Registration Fields Blank

<details>

<summary>Registration Fields Blank</summary>

In order for Sonoran CAD to know where to place information (license plate, color, etc.) in your custom record fields, the field IDs must match.

<figure><img src="../../.gitbook/assets/image (45).png" alt=""><figcaption></figcaption></figure>

| Field ID | Use                                              |
| -------- | ------------------------------------------------ |
| `plate`  | <p>License Plate<br>Ex: <code>ABC-123</code></p> |
| `make`   | <p>Vehicle Name<br>Ex: <code>Captain</code></p>  |
| `model`  | <p>Vehicle Model<br>Ex: <code>Chevlon</code></p> |
| `year`   | <p>Vehicle Year<br>Ex: <code>1992</code></p>     |
| `color`  | <p>Vehicle Color<br>Ex: <code>Crimson</code></p> |

</details>
