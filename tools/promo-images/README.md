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
- One short, factual feature description beside the logos below the content.
  Describe what it does rather than using a slogan. No second title,
  pricing, URLs, or unverified feature claims.
- Logos, copy, and product content remain separate editable sources.

`erlc.json` contains the four features' copy, red accent phrase, source paths,
and optional crops. The location-image feature is titled **3D Location Webhooks**,
with a subtitle explaining that in-game location images accompany calls to Discord.
`render_erlc.py` controls layout. Change these inputs, never the exported PNG.

## Render

Requires Python 3 and Pillow. Use the already installed runtime where available.
From the documentation repository root:

```powershell
python tools/promo-images/render_erlc.py
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
- **Location Notifications:** `sources/notification-content.png`, a one-time
  extraction of the approved notification illustration's interior from the
  September 29 promo. This is an existing generated illustration, **not an
  independently verified Discord screenshot**. Its existing content is retained
  without another image-generation pass. For a future product refresh, replace
  this source with an actual generated notification or fresh verified capture.
- **Pin Drop:** `sources/pin-map.jpg`, 1600px review image of the official labeled
  ERLC map. A separate code-native pin and street/postal annotation illustrate
  selection; they are marketing annotations, not extra product UI controls.

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
