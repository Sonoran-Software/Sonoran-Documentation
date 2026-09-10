---
description: Learn more about in-game client timeouts throwing error messages.
---

# In-Game Timeouts

Some users may see `SonoranRadio::ReceiveRadioStates` listed multiple times after receiving a timeout.

When your client receives a timeout from the server for any reason, it will display a list of the most recent requests. Because Sonoran radio frequently sends client data requests, these will consequently be displayed.

**This is not an issue with or related to Sonoran Radio**. This is a general timeout between the client and server listing all recent calls as diagnostic information.

<figure><img src="../../../.gitbook/assets/image (269).png" alt="" width="281"><figcaption><p>Sonoran Radio - Client Timeouts</p></figcaption></figure>
