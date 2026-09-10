---
description: Capture the current embedded CAD viewport as a PNG data URL.
---

# Screenshot Capture

Send `scad:screenshot:request` to capture the visible CAD viewport:

```javascript
cadFrame.contentWindow.postMessage({
  type: 'scad:screenshot:request',
  requestId: 'capture-1',
  options: {
    maxWidth: 1920,
    maxHeight: 1080,
    scale: window.devicePixelRatio,
  },
}, cadOrigin);
```

All options are optional. The default maximum output size is 1920 by 1080 pixels. `scale` controls the requested pixel ratio, but the result is reduced as needed to remain within `maxWidth` and `maxHeight`.

CAD responds with a PNG data URL and its pixel dimensions:

```json
{
  "type": "scad:screenshot:response",
  "requestId": "capture-1",
  "image": "data:image/png;base64,...",
  "width": 1920,
  "height": 1080
}
```

Only one capture can run at a time. Failures return `scad:screenshot:error`:

```json
{
  "type": "scad:screenshot:error",
  "requestId": "capture-1",
  "error": "capture_in_progress"
}
```
