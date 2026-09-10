---
description: >-
  Developers can access the Pro version for free and work with upcoming CAD
  features, API changes, and more.
---

# Development Branch

{% hint style="warning" %}
The development API, database and website are entirely separate from the current production version. For more information in working with our development team please [contact us](https://support.sonoransoftware.com). or join our community [Discord](http://discord.sonorancad.com/).
{% endhint %}

### Development API Server

All API endpoints and requests should be made to the following address:

```
https://staging-api.dev.sonorancad.com
```

### Development CAD

The latest CAD development version can be accessed at the following address:

```
https://staging.dev.sonorancad.com
```

### FiveM Resource

To switch the [SonoranCADFiveM](../integration-plugins/in-game-integration/fivem-installation/) resource to the development environment, set the core config mode to:

```json
"mode": "development"
```

You can also override this with a server convar:

```cfg
setr sonoran_mode development
```

That mode switch automatically updates the resource to use:

* `https://staging-api.dev.sonorancad.com/` for API requests
* `https://staging-api.dev.sonorancad.com/apiWsHub` for API websocket traffic
* `https://staging.dev.sonorancad.com` for CAD link/UI URLs

### Development Subscription - Free

{% hint style="warning" %}
Data will be reset at random times and **this environment is not suitable for production use**.\
\
Use only for testing new features when requested by Sonoran Software Development and for developing API based resources.
{% endhint %}

While our APIs are not restricted based on subscription level, some specific panels or features may be. Communities on the development branch can be upgraded for free with the following steps:

1. Create a new PRO subscription in the development CAD billing portal.
2. At checkout enter `4242 4242 4242 4242` as the card number with any CVV and expiration date.
3. Apply the subscription to your development testing CAD.

### Developer Discord

Join our [Discord](http://discord.sonorancad.com/) and access the `#community-development` channel. Here you can discuss API related issues, development, and more.
