---
description: >-
  Sonoran CAD's open API endpoints allow you to automatically update unit
  locations, panic statuses, send 911 calls and more from in-game.
---

# 📖 API Integration

<figure><img src="../.gitbook/assets/api-integration.png" alt=""><figcaption></figcaption></figure>

## How are API calls sent?

All API calls are sent via an HTTP POST with a JSON formatted body.

## Can I integrate this with my gamemode/framework?

Yes, our API calls can be integrated into nearly any gamemode with nearly any programming language.

We provide a library of drag-and-drop plugins written in Lua.<br>

You can also write your own script using our API endpoints:

{% content-ref url="api-endpoints/" %}
[api-endpoints](api-endpoints/)
{% endcontent-ref %}

Easily integrate external scripts with our LUA and JS export examples:

{% content-ref url="/broken/pages/ONoZRRBy208JfLTCy8VK" %}
[Broken link](/broken/pages/ONoZRRBy208JfLTCy8VK)
{% endcontent-ref %}

Or, learn more about receiving push events directly to your game server:

{% content-ref url="push-events/" %}
[push-events](push-events/)
{% endcontent-ref %}

## Are there rate limits?

Yes, Sonoran CAD will automatically block any malicious or spammed traffic. While we don't publicly publish these limits, it's best to not make more than one call per second for an extended period of time.

{% content-ref url="getting-started/" %}
[getting-started](getting-started/)
{% endcontent-ref %}
