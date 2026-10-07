"""Crop the supplied phone pixels and mask only the surrounding game background."""
import hashlib
import json
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent
source = ROOT/'sources/emergency-phone-original.png'
output = ROOT/'sources/emergency-phone-cutout.png'
image = Image.open(source).convert('RGBA')
# Trace the outside bezel; keep the phone screen, lettering and original pixels.
bezel = (25,23,317,596)
mask = Image.new('L',(image.width*4,image.height*4))
ImageDraw.Draw(mask).rounded_rectangle(tuple(v*4 for v in bezel),radius=62*4,fill=255)
mask = mask.resize(image.size,Image.Resampling.LANCZOS)
image.putalpha(mask)
crop = (20,21,325,600)
image.crop(crop).save(output,optimize=True)
sha = lambda p: hashlib.sha256(p.read_bytes()).hexdigest()
(ROOT/'sources/emergency-phone-crop.json').write_text(json.dumps({
    'source':source.name,'source_sha256':sha(source),'crop':crop,
    'bezel_bounds':bezel,'bezel_radius':62,'output':output.name,'output_sha256':sha(output),
    'provenance':'User-supplied ERLC screenshot, September 30, 2026. Only source crop and background mask; no regenerated phone or text.'
},indent=2)+'\n',encoding='utf-8')
print(f'Prepared transparent phone cutout: {output}')
