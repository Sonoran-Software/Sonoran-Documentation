---
description: >-
  Speak to our AI dispatcher over the radio to manage CAD status, dispatch
  calls, run record lookups, and more.
---

# Dispatch AI

<figure><img src="../../.gitbook/assets/DispatchAI.webp" alt=""><figcaption></figcaption></figure>

{% hint style="danger" %}
This feature is in a public **BETA** state.

Services may be intermittent and unreliable. Some features may experience issues.

Dispatch AI is not yet approved for full, production use. Utilize dispatch AI at your own risk.
{% endhint %}

{% hint style="warning" %}
This feature has limits based on your current subscription tier, but is still fully available on the free version of both Sonoran CAD and Sonoran Radio.

[Learn more about our paid subscription plans.](../../pricing/pricing-faq/standalone-pricing.md)
{% endhint %}

## Language Support

Sonoran Radio is fully translated in over a dozen languages, with our [public portal allowing communities to submit translation improvements](https://docs.sonoransoftware.com/other/translation-support). By default, dispatch AI uses the same language selected for the app. Users can select a different option just for the AI. Or, [change their app's language](https://docs.sonoransoftware.com/other/translation-support).

<figure><img src="../../.gitbook/assets/image (339).png" alt="" width="375"><figcaption></figcaption></figure>

## Setup Documentation

### 1. Copy Sonoran CAD API Information

<details>

<summary>Copy Sonoran CAD API Information</summary>

Dispatch AI requires a Sonoran CAD community ID, API key, and server ID.

The community ID and API key are located in the **Admin** panel > **Advanced** > **In-Game Integration** > **API**.

The server ID can be found in the **Admin** panel > **Customization** > **Servers**. The default server ID is `1`.

<div><figure><img src="../../.gitbook/assets/image (323).png" alt=""><figcaption></figcaption></figure> <figure><img src="../../.gitbook/assets/image (324).png" alt=""><figcaption></figcaption></figure></div>

</details>

### 2. Link CAD In Radio

<details>

<summary>Link CAD In Radio</summary>

In the radio **Customization** panel > **Dispatch AI** > Select a server or create one. Then, enter your Sonoran CAD community ID, API key, and server ID.

Ensure that you toggle Dispatch AI to **enabled**.

<figure><img src="../../.gitbook/assets/image (338).png" alt=""><figcaption></figcaption></figure>

</details>

### 3. Prompt Customization

<details>

<summary>AI Prompt Phrases</summary>

The AI has a set of tools it can use to take action in the CAD and on the radio—such as running lookups, creating calls, or updating statuses.

Radio traffic varies by community. One agency might say, “show me out on traffic with a blue sedan,” while another says, “create a traffic stop call with a blue sedan.”

Prompt phrase customization lets you train the AI to map your agency’s specific radio language to the correct system actions, so it responds appropriately to local lingo.

Keep your phrases short and direct. Adding too many phrases can eventually overload the AI's context window.

<figure><img src="../../.gitbook/assets/image (326).png" alt=""><figcaption></figcaption></figure>

</details>

## Enable/Disable the AI

<details>

<summary>Manually</summary>

The AI can be manually toggled on or off via the CAD link page.

<figure><img src="../../.gitbook/assets/image (297).png" alt="" width="227"><figcaption></figcaption></figure>

</details>

<details>

<summary>Auto Disable w/Human Dispatcher</summary>

The AI can be automatically disabled whenever an active dispatcher is in the CAD.

When this feature is enabled, the AI will check for a dispatcher once per minute.

<figure><img src="../../.gitbook/assets/image (298).png" alt="" width="227"><figcaption></figcaption></figure>

</details>

## Using the AI

### Invoke the AI

{% hint style="info" %}
When first connecting to the radio, if you are the only user in the room, the AI agent may take up to 15 seconds to join.

When the agent has joined, a brief "Dispatch Online" audio will play.
{% endhint %}

{% hint style="warning" %}
FiveM users must be logged into the radio with their Sonoran account (4-digit link code on first use) or have ran `/link` in-game to link their CAD. Otherwise, Dispatch AI will be unable to determine the CAD user to run the AI actions against.
{% endhint %}

<details>

<summary>Via Wake Work</summary>

When pressing your push-to-talk key, a local AI listens to your microphone feed for the customizable wake word. By default, this is **Dispatch**.

Users can customize their wake words by pressing the microphone button and speaking their custom wake words.

Communities can also [customize the default wake word for all users](../usage/dispatch-panel/default-user-settings.md).

<figure><img src="../../.gitbook/assets/image (327).png" alt=""><figcaption></figcaption></figure>

#### Prompting the AI

In order to reduce false triggers and conserve local resources, the AI will only listen to the first five seconds of your transmission. This amount can be modified in the **Advanced** tab of the **Audio** settings.

Upon detection of the wake word, an audible beep indicates that the AI has been activated. Users may begin speaking before the beep is heard, as long as the tone occurs at some point during the same transmission.

**Example**

If your wake word is **Dispatch**, then your transmissions to the AI would be as follows:

\<wake word>, \<optional: my unit number>, \<action to do>\
\&#xNAN;_**Dispatch**, A-10, mark me as available._\
\&#xNAN;_**Dispatch**, A-10, run a lookup on the license plate ABC123_

</details>

<details>

<summary>Via Hotkey (Web and Desktop)</summary>

Web and desktop users can also set a [customizable hotkey in the settings menu](../usage/dispatch-panel/using-the-dispatch-panel.md#dispatch-hotkeys). Pressing this keybind will enable the AI (same as the wake word) for your transmission.

<figure><img src="../../.gitbook/assets/image (296).png" alt=""><figcaption></figcaption></figure>

</details>

<details>

<summary>FiveM: Via Hotkey</summary>

FiveM users can also set a manual keybind in the settings. Pressing this keybind will enable the AI (same as the wake word) for your transmission.

<figure><img src="../../.gitbook/assets/image (28).png" alt="" width="375"><figcaption></figcaption></figure>

</details>

### User Customization

<details>

<summary>Transcripts and Overrides</summary>

A local speech-to-text AI generates a text transcript of your transmission. Sometimes, the AI can mishear common phrases resulting in poor performance.

Users can view their latest transcripts under **Settings** > **AI** > **Recent Transcripts**.

To improve these common mixups, add a **Phrase Override** manually.

<figure><img src="../../.gitbook/assets/image (328).png" alt=""><figcaption></figcaption></figure>

</details>

## AI Commands & Features

### CAD Functionality

<details>

<summary>CAD Status</summary>

The AI can update the status of you and other units to the stated, customizable status code.

_**Dispatch**, A-10, mark my status as available._\
\&#xNAN;_**Dispatch**, A-10, set B-11 and I to 10-8._

</details>

<details>

<summary>CAD Lookup</summary>

The AI agent can perform a name or plate lookup, send the results to your CAD, and notify you of brief details.

_**Dispatch**, A-10, run a lookup on the plate ABC123._\
\&#xNAN;_**Dispatch**, A-10, do a record check on first name John last name Doe._

</details>

<details>

<summary>CAD Dispatch Calls</summary>

**Create Call**

The AI can create a call and assign your unit. If your unit has a location, it will be automatically applied to the call unless otherwise specified. If a license plate is provided, it will automatically run a plate lookup and send the results to your CAD.

_**Dispatch**, A-10, show me out on traffic with a blue four-door sedan. License plate ABC123._

***

**Attach to Call**

The AI can attach you and other units to an existing call by mentioning the call ID, location, postal, title, etc.

_**Dispatch**, A-10, attach me to the robbery in progress call._\
\&#xNAN;_**Dispatch**, A-10, attach B-11 to my call._

***

**Call Notes**

The AI can add a note to your active dispatch call for other units to see.

_**Dispatch**, A-10, add a note on the call that I am arriving on-scene now, it's a white vehicle._

***

**Detach from Call**

The AI can lookup your current dispatch call and remove you from it.

_**Dispatch**, A-10, clear my call._

***

**Close Call**

The AI can lookup and close your current dispatch call.\
\&#xNAN;_**Dispatch**, A-10, close my call._

</details>

<details>

<summary>CAD Unit Groups</summary>

**Group Units**

The AI can add your unit (and others) to a new or existing group.

_**Dispatch**, A-10, add me to group 'Ladder 12'._\
\&#xNAN;_**Dispatch**, A-10, add myself and B-11 to group 'Ladder 12'._

***

**Clear Unit Group**

The AI can remove your unit (and others) from a group.

_**Dispatch**, A-10, clear my unit group._\
\&#xNAN;_**Dispatch**, A-10, remove B-11 and I's unit group._

</details>

<details>

<summary>CAD Panic</summary>

_**Dispatch**, A-10, toggle my panic status._

The AI agent will enable or disable your panic status.

</details>

<details>

<summary>FiveM and ER:LC: Emergency Call Readout</summary>

Create emergency zones and assign radio channels to each zone for the room running Dispatch AI. For FiveM, use the Radio Zones menu. For ER:LC, select ER:LC under **Customize** > **Game Integration** and use the emergency zone editor on the ER:LC map.

When a 911 call is generated in the linked CAD server with coordinates inside a configured emergency zone, the AI automatically creates a new dispatch call, removes the original 911 call, and reads the dispatch call over the channels configured for that zone. Calls without coordinates or outside the configured zones are not automatically read out.

For ER:LC, connect the private server to Sonoran CAD and enable emergency call synchronization for the desired teams. Link that CAD server to Dispatch AI in Radio. ER:LC emergency calls imported into CAD include the coordinates used to match Radio's emergency zones; linking the ER:LC server to Radio alone does not import emergency calls into CAD.

<figure><img src="../../.gitbook/assets/image (307).png" alt=""><figcaption></figcaption></figure>

</details>

<details>

<summary>FiveM: GPS Route to Postal</summary>

{% hint style="warning" %}
In order to route your GPS to a postal code, the **Nearest Postal** resource is required.\
Or, another resource that can handle the command `/postal <id>`.
{% endhint %}

The AI can draw an in-game GPS route to a postal code on the map.

**Raw Postal:**

_**Dispatch**, A-10, route me to postal 123._\
\&#xNAN;_**Dispatch**, A-10, directions to postal 123._

***

**Postal on a Dispatch Call**

The AI can find an active dispatch call based on the ID, location, title, etc.\
\&#xNAN;_**Dispatch**, A-10, route me to call 123._\
\&#xNAN;_**Dispatch**, A-10, route me to the traffic stop call._

</details>

<details>

<summary>FiveM: GPS Route to Unit</summary>

The AI will route you to the coordinates of another active unit by providing their unit name, number, etc.

_**Dispatch**, A-10, route me unit B-11._\
\&#xNAN;_**Dispatch**, A-10, directions to unit J. Doe._

</details>

<details>

<summary>FiveM: Auto-Status on GPS Route + Arrival</summary>

{% hint style="warning" %}
This feature requires the **Nearest Postal** resource version v1.5.4 or newer.
{% endhint %}

When the AI routes a user to a specific [postal code](dispatch-ai.md#fivem-gps-route-to-postal) or [GPS coordinate (unit location) ](dispatch-ai.md#fivem-gps-route-to-unit)it will automatically set your status as en-route. Upon arrival, the AI will automatically mark your status as on-scene.

The radio resource's [config.lua](../getting-started/installing-the-in-game-resource.md#configuration-options) contains `Config.autoOnSceneStatus` with options to tweak the settings.

</details>

### Radio Functionality

Coming soon!

## Settings

<details>

<summary>AI Volume</summary>

The AI's reply volume can be changed in the settings menu.

<figure><img src="../../.gitbook/assets/image (330).png" alt="" width="350"><figcaption></figcaption></figure>

</details>

<details>

<summary>Hear AI Replies</summary>

By default, users hear AI replies directed to anyone in their primary or scanned channel. The radio setting allows you to switch from hearing AI replies for all users to hearing only replies addressed to you.

<figure><img src="../../.gitbook/assets/image (329).png" alt="" width="352"><figcaption></figcaption></figure>

</details>

## Token Usage

Dispatch AI usage is limited by total AI token usage. Token usage varies depending on request length, task complexity, and the number of actions performed. You can learn more about these limits on our [pricing page](../../pricing/pricing-faq/standalone-pricing.md#dispatch-ai). These limits reset on the first of every month.

#### Viewing Token Usage

Users can view their community's current token usage under **Settings** > **AI** > **Token Usage**. When a community reaches their token usage limit, the AI will be disabled and unable to take additional requests until the limits are reset on the first of the month or the community is upgraded.

<figure><img src="../../.gitbook/assets/image (337).png" alt=""><figcaption></figcaption></figure>
