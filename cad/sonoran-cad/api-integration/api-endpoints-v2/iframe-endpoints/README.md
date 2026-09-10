---
description: Exchange local data and commands with an embedded Sonoran CAD frontend.
---

# Iframe API

The iframe API uses the browser [`window.postMessage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) interface to exchange messages between Sonoran CAD and the page embedding it. These messages stay on the local client; they are not HTTP API requests and do not require a community API key.

The following iframe integrations are available:

* [Notepad Sync](notepad-sync.md) provides bidirectional synchronization of the user's locally stored CAD notes and runs name or plate searches from external text selections.
* [Screenshot Capture](screenshot-capture.md) requests a PNG capture of the current CAD viewport.
* [Set Community Link](../general/accounts/set-community-link.md#cad-frontend-iframe-event) documents the account-link event emitted after a successful CAD login.

## Message Security

Sonoran CAD only accepts iframe API requests from its direct parent window. The parent must also validate messages received from CAD:

```javascript
const cadFrame = document.getElementById('cadFrame');
const cadOrigin = new URL(cadFrame.src).origin;

window.addEventListener('message', (event) => {
  if (event.source !== cadFrame.contentWindow || event.origin !== cadOrigin) return;

  // Handle supported event.data.type values here.
});
```

Send requests to the exact CAD origin whenever the iframe has a standard HTTP or HTTPS URL:

```javascript
cadFrame.contentWindow.postMessage(message, cadOrigin);
```

FiveM NUI pages can have an opaque origin. Sonoran CAD accepts messages from its direct parent in that environment and replies directly to the verified sender. Keep the iframe and its parent under trusted control.

## Common Fields

Iframe API messages are plain objects with a namespaced `type`. A request may include an opaque string or number in `requestId`; the corresponding response echoes it so callers can match concurrent operations.
