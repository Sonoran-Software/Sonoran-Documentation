---
description: >-
  Easily link your in-game FiveM user to Sonoran CAD by running the /link
  command.
---

# Link User In-Game

## Linking FiveM to Sonoran CAD

Sonoran CAD requires players to link their in-game identity to a CAD account in order to match units and other integration features correctly.

Players can do this by running the `/link` command in-game and selecting the **Link CAD** button. This opens an external browser to `sonorancad.com/id`, where the link code is automatically applied.

<div><figure><img src="../../.gitbook/assets/image (581).png" alt=""><figcaption></figcaption></figure> <figure><img src="../../.gitbook/assets/image (582).png" alt=""><figcaption></figcaption></figure></div>

<details>

<summary>Developer Information</summary>

Once completed, the player’s FiveM license ID (or the configured `primaryIdentifier`) is associated with the `communityUserId` field via the API.

Learn more about [mapping players to CAD users](../../api-integration/getting-started/setting-your-api-id.md).

</details>

### Enforce Player Links

Communities can optionally configure the [**Force Register**](available-plugins/forcereg.md) submodule to help remind, or even force, users to link their CAD before playing.

The [tablet resource](available-plugins/tablet.md) can also be used to automatically link the user when they login.
