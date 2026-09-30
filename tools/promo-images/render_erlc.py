"""Render from original logos and content; never use a previous promo as a template."""
import argparse
import hashlib
import json
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parent
SIZE = (1920, 1080)
RED = '#ed1c24'  # CAD's v2-primary brand color.
WHITE = '#ffffff'


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def font(path, size):
    return ImageFont.truetype(str(path), size)


def text_fit(draw, text, path, size, width):
    while size > 28:
        face = font(path, size)
        if draw.textlength(text, font=face) <= width:
            return face
        size -= 1
    raise ValueError(f'Copy does not fit: {text}')


def logo(canvas, path, box):
    source = Image.open(path).convert('RGBA')
    # Trim transparent padding without changing the original source file.
    source = source.crop(source.getbbox())
    image = ImageOps.contain(source, (box[2], box[3]), Image.Resampling.LANCZOS)
    canvas.alpha_composite(image, (box[0] + (box[2]-image.width)//2,
                                  box[1] + (box[3]-image.height)//2))


def render(key, config, output, bold, regular):
    canvas = Image.new('RGBA', SIZE, '#07101b')
    # Code-native, identical navy background with restrained red/blue edge glows.
    row = Image.new('RGB', (1920, 1))
    pixels = row.load()
    for x in range(1920):
        left = max(0, 1-x/660)**2
        right = max(0, 1-(1919-x)/660)**2
        pixels[x, 0] = (int(7+13*right), int(16+5*left), int(27+16*left))
    canvas.alpha_composite(row.resize(SIZE).convert('RGBA'))
    draw = ImageDraw.Draw(canvas)
    title_face = text_fit(draw, config['title'], bold, 116, 1792)
    prefix, accent, suffix = config['title'].partition(config['accent'])
    if not accent:
        raise ValueError(f"Accent is absent from title: {config['accent']}")
    x = 64
    for part, color in [(prefix, WHITE), (accent, RED), (suffix, WHITE)]:
        draw.text((x, 35), part, font=title_face, fill=color)
        x += draw.textlength(part, font=title_face)
    logo(canvas, ROOT/'sources/sonoran-cad.png', (64, 976, 290, 70))
    draw.line((378, 978, 378, 1048), fill='#47647c', width=2)
    logo(canvas, ROOT/'sources/erlc-logo.png', (398, 973, 106, 80))
    if config.get('discord_logo'):
        draw.line((526, 985, 526, 1041), fill='#47647c', width=2)
        logo(canvas, ROOT/'sources/discord-blurple.png', (546, 979, 84, 68))

    # Product pixels are pasted directly, never synthesized or re-drawn.
    source_path = (ROOT/config['source']).resolve()
    source = Image.open(source_path).convert('RGBA')
    crop = config.get('crop') or [0, 0, source.width, source.height]
    source = source.crop(crop)
    content = ImageOps.contain(source, (1784, 756), Image.Resampling.LANCZOS)
    origin = (68+(1784-content.width)//2, 194+(756-content.height)//2)
    canvas.alpha_composite(content, origin)
    draw = ImageDraw.Draw(canvas)
    # A symbolic map annotation, separate from the product UI.
    if 'pin' in config:
        scale = content.width/source.width
        x = round(origin[0]+(config['pin'][0]-crop[0])*scale)
        y = round(origin[1]+(config['pin'][1]-crop[1])*scale)
        draw.polygon([(x,y), (x-22,y-39), (x+22,y-39)], fill=RED)
        draw.ellipse((x-23,y-63,x+23,y-17), fill=RED, outline=WHITE, width=2)
        draw.ellipse((x-8,y-48,x+8,y-32), fill=WHITE)
        label = (x+85, y-130, x+440, y-27)
        draw.line((x+15,y-38,label[0],label[3]-20), fill=WHITE, width=3)
        draw.rounded_rectangle(label, radius=8, fill='#07101b', outline=RED, width=3)
        draw.text((label[0]+18,label[1]+12), 'Freedom Avenue', font=font(regular,32), fill=WHITE)
        draw.text((label[0]+18,label[1]+54), 'Postal 218', font=font(regular,32), fill=RED)
    for x in range(64,1856):
        t = (x-64)/1792
        color = (int(16+239*t), int(174-150*t), int(255-206*t))
        draw.line((x,190,x,193),fill=color,width=1)
        draw.line((x,950,x,953),fill=color,width=1)
    draw.line((64,190,64,953),fill='#10aeff',width=4)
    draw.line((1855,190,1855,953),fill=RED,width=4)
    subtitle_width = 1080 if config.get('discord_logo') else 1290
    subtitle_x = 1310 if config.get('discord_logo') else 1205
    sub_face = text_fit(draw,config['subtitle'],regular,35,subtitle_width)
    draw.text((subtitle_x,1012),config['subtitle'],font=sub_face,anchor='mm',fill='#bccde3')
    destination = output/f'erlc_{key}_promo.png'
    canvas.convert('RGB').save(destination,optimize=True)
    return {'output':destination.name,'dimensions':list(SIZE),
            'source':config['source'],'source_sha256':digest(source_path),
            'output_sha256':digest(destination),'copy':config}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--output', type=Path, default=ROOT/'drafts')
    parser.add_argument('--bold-font',type=Path,default=Path('C:/Windows/Fonts/ariblk.ttf'))
    parser.add_argument('--regular-font',type=Path,default=Path('C:/Windows/Fonts/arialbd.ttf'))
    args = parser.parse_args()
    args.output.mkdir(parents=True,exist_ok=True)
    for path in (args.bold_font,args.regular_font):
        if not path.exists():
            parser.error(f'Font missing: {path}; supply its path explicitly.')
    config = json.loads((ROOT/'erlc.json').read_text(encoding='utf-8'))
    records = {key:render(key,value,args.output,args.bold_font,args.regular_font)
               for key,value in config.items()}
    manifest = {'template_version':6,'dimensions':list(SIZE),
                'logos':{name:digest(ROOT/'sources'/name) for name in ['erlc-logo.png','sonoran-cad.png','discord-blurple.png']},
                'fonts':{str(p):digest(p) for p in [args.bold_font,args.regular_font]},
                'images':records}
    (args.output/'manifest.json').write_text(json.dumps(manifest,indent=2)+'\n',encoding='utf-8')
    print(f'Rendered {len(records)} promos to {args.output}')


if __name__ == '__main__':
    main()
