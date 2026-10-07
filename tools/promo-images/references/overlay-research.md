# ERLC overlay promo research — September 30, 2026

## Revised source

The user subsequently supplied a real downtown police-car screenshot and
requested it replace the generated scene. The current export uses
`sources/overlay-user-gameplay.png`, cropped to exclude capture controls,
with the same real theme panels. The title now uses one shared text rendering
and a common baseline. The research and generation details below document the
earlier draft; its generated scene is preserved separately.

The game scene is generated supporting artwork. The overlay windows are actual
CAD component captures. Keep these separate so revisions do not degrade logos,
lettering, icons or product UI.

## Visual references

- [Official ERLC website](https://erlc.gg/), Police & Sheriff artwork:
  [law.png](https://i.erlc.gg/team-showcase/law.png), preserved as
  `erlc-official-law.png`. Verified official source for River City police
  white/blue/yellow livery, roof lightbar and push bumper. The official artwork
  is more polished than gameplay; it guides the livery, not the realism level.
- [River City starter vehicle screenshot](https://x.com/erlc_roblox/status/1927623573557920015),
  [image](https://pbs.twimg.com/media/GsBLM4oW4AA_iPz.jpg), preserved as
  `erlc-police-starter.jpg`. Community news account, not the official PRC
  account. Primary generation reference for vehicle mesh, dark windows,
  steel wheels, blue/yellow side stripe, bumper, and brick/blue police station.
- [Roblox developer forum gameplay screenshot](https://devforum.roblox.com/t/image-load-in-very-low-quality-in-game/2838379),
  preserved as `erlc-gameplay.jpg`. Third-person ERLC view demonstrates the
  simpler game environment, roads, trees, ordinary lighting and proportions.
  Its HUD is excluded from the generated scene.
- [Official ERLC pursuit artwork](https://i.erlc.gg/pursuit.png), preserved as
  `erlc-official-pursuit.png`. Additional visual research only; it was not
  passed into generation because the action and cinematic style are unsuitable.

The generated scene imitates the researched game style and vehicle appearance.
It does not prove exact map geometry or a live CAD/game integration.

## Capture and composition

- CAD source: `cc2297ec` from `origin/master`, clean existing
  `desktop-overlay-theme` worktree fast-forwarded to that revision.
- UI: actual `src/pages/desktopOverlay.vue`, shared theme application, presets,
  styles, retro icon assets and English translations from the same checkout.
- Theme labels: Sonoran, Spillboy, CentralCircle, taken from English i18n.
- Fictional call 1042: traffic stop, code 10-38, Freedom Avenue, postal 218;
  attached unit P-21, On Scene. Identical sample state for each preset.
- Viewport: 620 × 280 CSS pixels at DPR 2. Opaque overlay for legible comparison.
- Checks: no browser errors, overflowing panel, or clipped field/description.
- Generation: built-in image tool; exact prompt in `overlay-scene-prompt.txt`.
- Composition: `erlc.json` and `render_erlc.py`; original CAD/ERLC brand sources.
  Three separately captured panels sit over the right side of the game scene.
- Final review export: RGB PNG, 1920 × 1080. Public overlay asset awaits review.
