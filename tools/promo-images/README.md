# ERLC documentation promo images

Build every promo fresh from source assets and the shared template. **Never feed
a finished promo back through image generation.** This causes logo, lettering,
map, and UI degradation over successive edits.

## Standard format

- 1920 × 1080, RGB PNG, 16:9.
- Dark navy background with restrained blue-left/red-right accents.
- One large feature title across the top (up to 116px), white with a CAD red (`#ed1c24`)
  keyword: **3D**, **BODYCAM**, or **PIN DROP**. No separate marketing headline.
- Original Sonoran CAD logo and official ERLC logo in a smaller bottom-left group,
  giving the feature title the full header width.
- The webhook promo also includes the official blurple Discord symbol in this footer group.
- Same framed content area for all features. Preserve product proportions;
  letterbox instead of stretching or clipping controls.
- Webhook promos can place the aerial image beside complete Discord examples.
  Keep each example's call details and embedded image visible together; short
  labels identify the event without introducing another marketing headline.
- One short, factual feature description beside the logos below the content.
  Describe what it does rather than using a slogan. No second title,
  pricing, URLs, or unverified feature claims.
- Logos, copy, and product content remain separate editable sources.

`erlc.json` contains the features' copy, red accent phrase, source paths,
and optional crops. The location-image feature is titled **3D Location Webhooks**,
with a subtitle explaining that in-game location images accompany calls to Discord.
`render_erlc.py` controls layout. Change these inputs, never the exported PNG.
Optional `content_box` and `examples` entries define the multi-image layout;
example paths, labels, and placement remain editable in the configuration.

## Render

Requires Python 3 and Pillow. Use the already installed runtime where available.
From the documentation repository root:

```powershell
python tools/promo-images/render_erlc.py
```

Render only the webhook revision without rebuilding the other promos:

```powershell
python tools/promo-images/render_erlc.py --feature notifications
```

Exports go to `tools/promo-images/drafts/`, with a manifest recording source,
font, logo, and output SHA-256 hashes. Font files stay outside the repository.
On another machine, supply the same licensed font files explicitly:

```powershell
python tools/promo-images/render_erlc.py --bold-font "path/to/ariblk.ttf" --regular-font "path/to/arialbd.ttf"
```

Repeated renders with identical inputs must produce identical output hashes.
The renderer does not call an image-generation API or read an old promo as its
layout source. Do not commit drafts or comparison sheets; approved exports live
under `cad/sonoran-cad/.gitbook/assets/`.

## Original brand sources

- `sources/erlc-logo.png`: original downloaded from
  <https://i.erlc.gg/erlc-logo.png> on September 29, 2026, kept at native
  8851 × 6500 resolution. The renderer trims transparent padding and scales it
  once per export. Never ask an image model to reconstruct this logo.
- `sources/sonoran-cad.png`: original `CAD_FULL_WHITE.png` from Sonoran Marketing's
  `apps/sonoran-video-studio/public/branding-logos/`, native 2178 × 282.
- `sources/discord-blurple.svg`: original blurple symbol from
  <https://discord.com/branding>, downloaded September 29, 2026. Asset URL:
  <https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e3d80db9971f10a9757c99_Symbol.svg>.
  `discord-blurple.png` is a 512px rasterization of that original vector.

When a logo changes, replace its source with the new official original, record
its provenance, inspect it, then re-render. Do not crop a logo out of a promo.

## Feature content and provenance

- **3D Live Map:** `sources/map-scene.png`, original September 28, 2026 local
  capture from CAD's real `map3d.vue` with synthetic P-21/P-24, E-3, M-2 and call
  1042. Capture fixture: Sonoran Marketing
  `tools/product-ui-capture/erlc-promo-20260928-fixture.js`.
- **Bodycam:** existing documentation asset `erlc-bodycam-map.png`, an actual
  CAD map/bodycam video frame. Original Studio project
  `b7b2dfaf-97ca-4d45-95e4-1eb5d5657d2f`, timeline 10.5 seconds, clip source 8.308
  seconds. The promo crop excludes the right-side legend; it preserves the unit
  menu and bodycam pixels.
- **Location Notifications / 3D Location Webhooks:** `sources/notification-content.png`, a one-time
  extraction of the approved notification illustration's interior from the
  September 29 promo. This is an existing generated illustration, **not an
  independently verified Discord screenshot**. Its existing content is retained
  without another image-generation pass. For a future product refresh, replace
  this source with an actual generated notification or fresh verified capture.
  The September 30, 2026 review draft retains that large illustration and adds
  the two full Discord screenshots from the updated documentation:
  `.gitbook/assets/image (638).png` (dispatch update) and `image (639).png`
  (incoming emergency call). These were supplied in documentation master
  `40de6e0`; they are used directly, without redrawing their UI or image content.
  The manifest records both example hashes alongside the main image hash.
  This composition is a review draft until approved for publication.
- **Pin Drop:** `sources/pin-map.jpg`, 1600px review image of the official labeled
  ERLC map. A separate code-native pin and street/postal annotation illustrate
  selection; they are marketing annotations, not extra product UI controls.
- **In-Game Overlay:** September 30 revised review draft.
  `sources/overlay-user-gameplay.png` is the user's real ERLC police-car
  screenshot. Its configured crop excludes capture controls and fits the shared
  frame. The complete title is rendered on a shared baseline, with the red
  keyword taken from the same text rendering, and centered as requested.
  Real overlay panels are separately captured
  from released CAD master `cc2297ec`, using `desktopOverlay.vue`, the shared
  `applyV2Theme.js`, original CSS, preset data and English translations. Preset
  names are **Sonoran** (`dark`), **Spillboy** (`retro`) and **CentralCircle**
  (`metro`). `sources/overlay-capture.json` records viewport, state and checks.
  The private harness lives in Sonoran Marketing's `tools/product-ui-capture/`
  as `erlc-overlay-preview.mjs`, `erlc-overlay-fixture.js` and
  `capture-erlc-overlay.mjs`. It uses existing dependencies and a loopback-only
  endpoint. Capture panels at 620 × 280 CSS pixels, DPR 2, with a fictional
  attached call and unit; Electron IPC is disabled. Labels, logos and product
  UI are added by the shared renderer, never generated with the game scene.
- **Emergency Calls:** September 30 review draft combines the user's nighttime
  fire-engine scene, `sources/emergency-firetruck-user-gameplay.png`, the matching
  live CAD map capture, `sources/emergency-cad-user-map.png`, and the supplied
  in-game Fire phone screenshot. The scene crop excludes the capture toolbar;
  the CAD capture retains its call marker and live bodycam panel. `prepare_emergency_phone.py`
  crops the phone and masks the surrounding background while preserving the
  original screen pixels. `sources/emergency-phone-crop.json` records that
  crop, alpha mask and input/output hashes. The fire was started through the
  ERLC API at the user's request; its automatic Fire call reported **Near City
  Hall**. No credential is stored in the documentation or capture sources.

Refreshing a product scene means taking a new capture from current CAD
components, not regenerating an old screenshot. Keep source commit, fixture,
viewport, date, and mocked boundaries with the capture. Never redraw CAD UI or
invent map details. If image generation is useful for supporting scenery, start
with a fresh prompt and original references, exclude logos/text/UI from that
pass, then render the source assets through this template.

## Review and publish

1. Render and inspect each PNG at full size and as a documentation card thumbnail.
   Use lossless PNG review sheets. JPEG compression and small contact sheets can
   create visible artifacts around red lettering; judge text quality from the
   individual full-resolution PNG exports.
2. Check exact copy, sharp logos, correct map context, visible controls, and no
   clipping or accidental distortion. Verify 1920 × 1080 and input/output hashes.
3. Get approval of changed promos before replacing public documentation assets.
4. Copy approved exports to versioned `.gitbook/assets/` names. Update both the
   feature page and its card in `integration-plugins/erlc/README.md` together.
5. Check local links, then push only when publication is authorized. Verify
   GitBook separately; a Git push does not establish that the live page updated.

The September 29, 2026 set was approved for publication and standardizes all four
features. Public pages and the main ERLC cards use the same approved exports.
