# Documentation media

Original assets remain in `asset-manifest.json` under `entries`. Three silent MP4 derivatives use `optimizedEntries`, keyed by the original GIF `sourcePath`; `sourceKey` keeps the original fallback. The verified public host is `https://docs-assets.sonoransoftware.com`. Storage and response evidence is in [evidence/media-verification.json](evidence/media-verification.json).

## Sources and measured results

All sources are from commit `d01ddc8d7df4cc47d0d15d6e0e2842aa7a7d41c3`.

| Clip | GIF bytes | MP4 bytes | Dimensions | Frames | MP4 duration |
| --- | ---: | ---: | --- | ---: | ---: |
| CAD bodycam | 68,347,688 | 5,786,560 | 1916 × 892 | 452 | 15.066667 s |
| Radio jammer | 67,565,335 | 1,011,382 | 1920 × 1080 | 70 | 4.681319 s |
| Store safety vest | 29,133,700 | 1,490,758 | 800 × 450 | 240 | 8 s |

The three downloads fall from 165,046,723 to 8,288,700 bytes, a 94.98% reduction. CAD uses the existing same-basename MP4 as its encoding input. Its visual track has the same dimensions and 452 frames as the GIF; removing its audio track also removes the 0.21-second audio tail. Radio and vest are encoded directly from their GIFs.

Source SHA-256 values:

- CAD GIF `20260225-2332-49.6056763.gif`: `0cd8f54c81183c989068d83b23e68e8aadcd0d10f65d316457f177eb1eac9200`.
- CAD MP4 encoding input `20260225-2332-49.6056763.mp4`: `1906ca577fa44fc268da84b1342848192bff40d4bbabc69f34588afd3153b441`.
- Radio `jammer_radio.gif`: `874f9069e8fa4fabcfdf130da68d41b2fb3693fd7ebe0ffa535b21aeba503718`.
- Store `vest.gif`: `d2b59395c9302f95853653edd1fdbecf7ebcf2c2c01f975f3337baf165c37af9`.

## Reproduce the derivatives

The reviewed build used FFmpeg/ffprobe `8.0.1-full_build-www.gyan.dev`. These PowerShell commands read immutable public originals and write small files into the ignored reports directory. They do not upload or change the source tree. Use the same encoder build for byte-level comparison; another build may produce different hashes with the same dimensions, frame counts, and settings.

```powershell
$mediaBase = 'https://docs-assets.sonoransoftware.com'
$out = 'tools/mintlify-migration/reports/optimized'
New-Item -ItemType Directory -Force -Path $out | Out-Null

ffmpeg -v error -i "$mediaBase/sha256/19/1906ca577fa44fc268da84b1342848192bff40d4bbabc69f34588afd3153b441.mp4" -an -c:v libx264 -preset fast -crf 23 -pix_fmt yuv420p -movflags +faststart -n "$out/20260225-2332-49.6056763-preview.mp4"

ffmpeg -v error -i "$mediaBase/sha256/87/874f9069e8fa4fabcfdf130da68d41b2fb3693fd7ebe0ffa535b21aeba503718.gif" -an -c:v libx264 -preset fast -crf 21 -pix_fmt yuv420p -movflags +faststart -fps_mode vfr -n "$out/jammer_radio-preview.mp4"

ffmpeg -v error -i "$mediaBase/sha256/d2/d2b59395c9302f95853653edd1fdbecf7ebcf2c2c01f975f3337baf165c37af9.gif" -an -c:v libx264 -preset fast -crf 21 -pix_fmt yuv420p -movflags +faststart -fps_mode vfr -n "$out/vest-preview.mp4"

Get-FileHash "$out/*.mp4" -Algorithm SHA256
```

No scaling, cropping, interpolation, or frame-rate cap is applied. H.264 uses `yuv420p`; `-an` removes audio, and `+faststart` places MP4 metadata before the video data. The Radio and vest commands were rerun against the public sources and reproduced the recorded SHA-256 values. The checked-in optimized records contain output SHA-256, MD5, dimensions, frame counts, durations, and encoding settings.

## Upload and verify

The uploader requires `@aws-sdk/client-s3`, plus `ffprobe` on PATH for `upload-optimized`. Supply existing credentials through the environment or an untracked credentials file; no credential values belong in these commands or reports. `AWS_SDK_MODULE` can point to an existing SDK installation. Ordinary site validation and reproduction do not require storage credentials.

Use a working manifest in the ignored reports directory so generated verification files stay out of the public site. If `derivatives.json` is absent from the optimized directory, `upload-optimized` uses the working manifest's existing `optimizedEntries` as its input descriptors.

```powershell
Copy-Item tools/mintlify-migration/asset-manifest.json tools/mintlify-migration/reports/asset-manifest.json

node tools/mintlify-migration/r2-assets.cjs upload-optimized --repo . --ref d01ddc8d7df4cc47d0d15d6e0e2842aa7a7d41c3 --bucket docs-mintlify --manifest tools/mintlify-migration/reports/asset-manifest.json --optimized-dir "$out" --public-base https://docs-assets.sonoransoftware.com

node tools/mintlify-migration/r2-assets.cjs verify --repo . --ref d01ddc8d7df4cc47d0d15d6e0e2842aa7a7d41c3 --bucket docs-mintlify --manifest tools/mintlify-migration/reports/asset-manifest.json
```

Uploads use new SHA-256 keys and `If-None-Match: *`; existing object content is verified rather than overwritten. Review any newly encoded hashes before promoting the working manifest. `verify` compares the complete expected object inventory, byte counts, and single-upload ETag/MD5 values. `public-verify` additionally checks HTTP headers, ranges, and full public SHA-256 for optimized videos; it requires the migration's original-asset upload progress log beside its working manifest.

## Review limits

Three temporal samples per clip were inspected at reduced preview size. Native output dimensions and frame counts match, but this is lossy encoding, not pixel identity. Measured GIF-to-MP4 SSIM was 0.985609 for Radio and 0.938707 for the vest. Observed duration differences are about 6.7 ms for CAD and 11.3 ms for Radio; vest timing matches.

Render inline video with `autoPlay`, `loop`, `muted`, and `playsInline`, retain the original fallback, and test the staged page on desktop and mobile. Browser autoplay policies can prevent playback. The evidence confirms storage and public media delivery; it does not replace browser layout and playback acceptance.
