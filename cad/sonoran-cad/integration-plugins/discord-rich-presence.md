---
description: Our desktop app allows you to advertise your community right in Discord!
---

# Discord Rich Presence

{% hint style="info" %}
Rich presence is included with all versions of Sonoran CAD, but customization requires the **Standard** plan or higher, and the **Pro** plan for complete customization with the icon.\
For more information, see our [pricing](../pricing/faq/) or view how to check your community [limits](../tutorials/getting-started/view-your-limits.md).
{% endhint %}

## What is Discord Rich Presence?

When running our [desktop application](../download/), Discord can automatically detect and display information about your community.

![Sonoran CAD - Discord Rich Presence](<../.gitbook/assets/image (362).png>)

## Customizing your Rich Presence

![Sonoran CAD - Discord Presence Customization](<../.gitbook/assets/image (402).png>)

### Customizing Buttons

Discord presence currently allows for two customizable buttons.

Navigate to Admin > Customization > Customization > Discord Rich Presence

#### For communities on the **Standard** plan or higher:

\- Button #2 may be customized to any [Sonoran CAD](../tutorials/customization/custom-login-page.md#in-game-tablet) or [Sonoran CMS](https://info.sonorancms.com/why-choose-sonoran-cms/why-choose-sonoran-cms) invitation link.\
\- Ex: `https://sonorancad.com/#/?comid=mycommunityid` or `https://sonorancms.com/#/?comid=mycommunityid`

#### For communities on the Pro plan:

\- Both buttons may be customized to any URL desired.\
\- The Icon and title can also be customized with a Discord developer application.

### Customizing the Icon

Communities on the **Pro** version may customize the rich presence icon:

#### 1. Create a new Discord Application

On [https://discord.com/developers/applications](https://discord.com/developers/applications) create a new application

![Discord Developer - New Application](<../.gitbook/assets/image (246).png>)

#### 2. Copy your Client ID

Under OAuth2, copy your `Client ID`

![Discord Developer - Application Client ID](<../.gitbook/assets/image (136).png>)

#### 3. Add an Icon

Next, upload an icon for your new application. Be sure to copy down the name of the icon for later.

![Discord Developer - Application Icon](<../.gitbook/assets/image (405).png>)

#### 4. Configure in Sonoran CAD

Back in the admin customization menu, we can paste the Discord application's Client ID and Icon name.

![Sonoran CAD - Custom Discord Presence Config](<../.gitbook/assets/image (238).png>)

Once saved, your Discord presence for all community members will reflect your custom icon, title, and buttons.

![Sonoran CAD - Custom Discord Presence View](<../.gitbook/assets/image (328).png>)

## Toggle On/Off Rich Presence

### Community Toggle

To hide the invite button for your community's Discord rich presence, simply leave the button text and URL blank.

### User Toggle

In the settings menu, users can toggle this display on or off for their individual desktop client.

![Sonoran CAD Settings - Disable Discord's Rich Presence](<../.gitbook/assets/image (297).png>)

## Known Issues

#### My presence visible, but not to others?

If your Discord presence is visible to you personally but not to others, ensure the button labels don't include any sort of `:emoji:` in them.
