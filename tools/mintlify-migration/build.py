"""Repeatable GitBook -> Mintlify build. Reads Git sources; writes only mintlify/."""
from __future__ import annotations
import argparse, collections, hashlib, html, json, posixpath, re, urllib.parse
from pathlib import Path
import yaml
from bs4 import BeautifulSoup

BASE = Path(__file__).resolve().parent
PORTABLE = (BASE / 'routing-manifest.json').is_file()
REPO = BASE.parents[1] if PORTABLE else BASE / 'docs-mintlify'
OUT = REPO / 'mintlify'
MANIFEST = BASE / 'routing-manifest.json' if PORTABLE else BASE / 'migration-routing/routing-manifest-verified.json'
REPORT = BASE / 'conversion-report.json' if PORTABLE else BASE / 'migration-conversion.json'
PRODUCTS = [('welcome','Overview','house'),('cad','CAD','car-side'),('cms','CMS','building'),('radio','Radio','walkie-talkie'),('bot','Bot','robot'),('store','Store','bag-shopping'),('studio','Studio','clapperboard')]
SPACE_IDS = {'-M4pGN81fb4R6zFhodcu':'cad','-MdBOa9OFjtdqw9FdXli':'cms','fCk5zoeun5gx3ujYW6eg':'radio','gJnyZgUQPWpA5p9njAAR':'bot','A1LA3ay59CDyDKnfXPfc':'store','SNDrCcXxwsnYIi72Ym9Z':'studio','YoRQIjwkmv5RMxz7UhfR':''}
LEGACY = {'info.sonorancad.com':'cad','info.sonorancms.com':'cms','info.sonoranradio.com':'radio','info.sonoranbot.com':'bot','docs.sonoran.store':'store'}

def clean_title(s):
    s = re.sub(r'\[([^\]]+)\]\((?:[^()]|\([^()]*\))*\)',r'\1',s)
    s = BeautifulSoup(s,'html.parser').get_text(' ',strip=True)
    return re.sub(r'\s+',' ',re.sub(r'[*_`\\]','',s)).strip()

class Converter:
    def __init__(self, asset_manifest=None, asset_base=None):
        self.manifest=json.loads(MANIFEST.read_text('utf-8'))
        self.pages={p['source']:p for p in self.manifest['pages']}
        self.routes={p['publishedPath']:p for p in self.pages.values()}
        self.aliases={a:p for p in self.pages.values() for a in p.get('aliases',[])}
        self.assets={}
        self.external_assets={}
        self.branding={}
        self.optimized_media={}
        if asset_manifest:
            raw=json.loads(Path(asset_manifest).read_text('utf-8'))
            rows=raw.get('entries',raw.get('assets',raw.get('objects',[]))) if isinstance(raw,dict) else raw
            if isinstance(rows,dict): rows=[dict(sourcePath=k,**v) if isinstance(v,dict) else {'sourcePath':k,'key':v} for k,v in rows.items()]
            for a in rows:
                source=a.get('sourcePath',a.get('path',a.get('source')))
                key=a.get('key',a.get('objectKey'))
                if source: self.assets[source]=a.get('url') or (asset_base.rstrip('/')+'/'+key if asset_base and key else None)
            for a in raw.get('externalEntries',[]):
                if asset_base and a.get('sourceUrl') and a.get('key'):
                    self.external_assets[html.unescape(a['sourceUrl'])]=asset_base.rstrip('/')+'/'+a['key']
            branding=raw.get('brandingEntries',[])
            if isinstance(branding,dict): branding=[dict(role=k,**v) for k,v in branding.items()]
            for a in branding:
                if asset_base and a.get('role') and a.get('key'): self.branding[a['role']]=asset_base.rstrip('/')+'/'+a['key']
            for a in raw.get('optimizedEntries',[]):
                original=self.assets.get(a.get('sourcePath'))
                if original and asset_base and a.get('key'):
                    self.optimized_media[original]=asset_base.rstrip('/')+'/'+a['key']
        self.asset_base=asset_base
        heading_file=BASE/'migration-routing/published-headings.json'
        self.live_checks=json.loads(heading_file.read_text('utf-8')).get('checks',{}) if heading_file.exists() else {}
        overrides=BASE/'migration-routing/link-overrides.json'
        if not overrides.exists(): overrides=BASE/'link-overrides.json'
        override_data=json.loads(overrides.read_text('utf-8')) if overrides.exists() else {}
        self.link_overrides=override_data.get('bySource',override_data)
        self.content_changes=override_data.get('contentChanges',[])
        alias_file=BASE/'migration-routing/fragment-aliases.json'
        if not alias_file.exists(): alias_file=BASE/'fragment-aliases.json'
        alias_data=json.loads(alias_file.read_text('utf-8')) if alias_file.exists() else {}
        self.fragment_aliases=alias_data.get('byPage',{})
        self.fragment_rewrites=alias_data.get('linkRewrites',{})
        self.warnings=[]
        self.counts=collections.Counter()
        self.source=''
        self.tokens=[]

    def token(self,s):
        n=len(self.tokens); self.tokens.append(s); return f'ZZMINTTOKEN{n}ZZ'

    def rewrite_url(self,url):
        target=self._rewrite_url(url)
        lookup=target
        if target.startswith('#'): lookup=self.pages[self.source]['publishedPath']+target
        return self.fragment_rewrites.get(lookup,target)

    def _rewrite_url(self,url):
        url=html.unescape(url.strip()).replace('\\','/')
        if url in self.external_assets: return self.external_assets[url]
        if isinstance(self.link_overrides,dict):
            override=self.link_overrides.get(self.source,{}).get(url)
            if override: return override
        if not url or url.startswith(('mailto:','tel:','data:','#')): return url
        parts=urllib.parse.urlsplit(url)
        path=urllib.parse.unquote(parts.path)
        fragment=parts.fragment
        suffix=('?'+parts.query if parts.query else '')+('#'+fragment if fragment else '')
        if parts.netloc == 'app.gitbook.com':
            match=re.search(r'/s/([^/]+)(/.*)?',path)
            if match and match.group(1) in SPACE_IDS:
                prefix=SPACE_IDS[match.group(1)]
                rest=(match.group(2) or '').strip('/')
                path='/'+('/'.join(x for x in [prefix,rest] if x))
                parts=parts._replace(netloc='docs.sonoransoftware.com',path=path)
        if parts.netloc in LEGACY:
            prefix=LEGACY[parts.netloc]
            path='/'+prefix+'/'+path.lstrip('/')
            path=path.replace('/'+prefix+'/sonoran-'+prefix+'/', '/'+prefix+'/')
            parts=parts._replace(netloc='docs.sonoransoftware.com',path=path)
        if parts.netloc == 'docs.sonoransoftware.com':
            norm=path.rstrip('/') or '/'
            norm=re.sub(r'\.md$','',norm)
            page=self.routes.get(norm) or self.aliases.get(norm)
            if not page:
                # Previous GitBook space slugs occasionally remain in internal links.
                norm=re.sub(r'^/(cad|cms|radio|bot|store|studio)/sonoran-\1(?=/|$)',r'/\1',norm)
                page=self.routes.get(norm) or self.aliases.get(norm)
            return (page['publishedPath'] if page else norm)+suffix
        if parts.scheme or parts.netloc: return url
        source_path=posixpath.normpath(posixpath.join(posixpath.dirname(self.source),path))
        if source_path in self.pages: return self.pages[source_path]['publishedPath']+suffix
        for candidate in [source_path+'/README.md',source_path+'.md']:
            if candidate in self.pages: return self.pages[candidate]['publishedPath']+suffix
        if source_path.endswith('.md') and source_path[:-3]+'/README.md' in self.pages:
            return self.pages[source_path[:-3]+'/README.md']['publishedPath']+suffix
        if '/.gitbook/assets/' in source_path:
            self.counts['assetReferences']+=1
            if self.assets.get(source_path): return self.assets[source_path]+suffix
            self.warnings.append({'source':self.source,'kind':'unresolved-asset','target':source_path})
            return 'https://docs-assets-pending.invalid/'+urllib.parse.quote(source_path,safe='/')
        if path.endswith('.md') or '.md#' in url:
            self.warnings.append({'source':self.source,'kind':'unresolved-page','target':url,'resolvedSource':source_path})
        return url

    def protect_code(self,s):
        s=re.sub(r'(?ms)^([ \t]*)(`{3,}|~{3,})([^\n]*)\n.*?^\1\2[ \t]*$',lambda m:self.token(m.group()),s)
        return re.sub(r'(`+)([^`\n]+?)\1',lambda m:self.token(m.group()),s)

    def image(self,node):
        src=self.rewrite_url(node.get('src',''))
        if src in self.optimized_media:
            self.counts['optimizedAnimations']+=1
            attrs='src='+json.dumps(self.optimized_media[src])+' aria-label='+json.dumps(node.get('alt') or 'Documentation animation')
            return self.token('<video '+attrs+' autoPlay loop muted playsInline controls preload="metadata" className="w-full rounded-xl"><a href='+json.dumps(src)+'>View original animation</a></video>')
        attrs=f'src={json.dumps(src)} alt={json.dumps(node.get("alt", ""))}'
        width=node.get('width')
        if width and str(width).isdigit(): attrs+=f' width="{width}"'
        return self.token('<img '+attrs+' />')

    def html_heading_markers(self,node):
        markers=[]
        for head in node.find_all(re.compile('^h[1-6]$')):
            text=clean_title(head.decode_contents())
            if re.fullmatch(r':[\w-]+:',text): text=''
            found=next((h for h in self.published_headings if h.get('id') and h['id'] not in self.html_heading_ids and clean_title(h.get('text',''))==text),None)
            if found:
                self.html_heading_ids.add(found['id'])
                markers.append(self.token('<span id='+json.dumps(found['id'])+' />'))
        return ''.join(markers)

    def table(self,m):
        soup=BeautifulSoup(m.group(),'html.parser'); table=soup.find('table')
        rows=table.find_all('tr')
        self.counts['htmlTables']+=1
        if table.get('data-view')=='cards':
            cards=[]
            for tr in table.select('tbody > tr'):
                cells=tr.find_all(['td','th'],recursive=False)
                links=tr.find_all('a',href=True)
                if not cells or not links: continue
                href=self.rewrite_url(links[-1]['href'])
                texts=[clean_title(c.get_text(' ',strip=True)) for c in cells]
                meaningful=[x for x in texts if x and not x.startswith(':') and not x.endswith(('.md','.png','.webp','.jpg'))]
                title=meaningful[0] if meaningful else clean_title(links[-1].get_text())
                description=meaningful[1] if len(meaningful)>1 else ''
                image=next((a['href'] for a in links[:-1] if re.search(r'\.(png|webp|jpe?g)(?:\?|$)',a['href'],re.I)),None)
                attrs='title='+json.dumps(title)+' href='+json.dumps(href)
                if image: attrs+=' img='+json.dumps(self.rewrite_url(image))
                markers=self.html_heading_markers(tr)
                cards.append(self.token('<Card '+attrs+'>')+'\n\n'+markers+'\n\n'+description+'\n\n'+self.token('</Card>'))
            self.counts['cardTables']+=1
            return '\n\n'+self.token('<CardGroup cols={2}>')+'\n\n'+'\n\n'.join(cards)+'\n\n'+self.token('</CardGroup>')+'\n\n'
        def cell(c):
            markers=self.html_heading_markers(c)
            for a in c.find_all('a',href=True):
                a.replace_with('['+a.get_text(' ',strip=True)+']('+self.rewrite_url(a['href'])+')')
            for im in c.find_all('img'): im.replace_with(self.image(im))
            for br in c.find_all('br'): br.replace_with(' / ')
            for code in c.find_all('code'): code.replace_with(self.token('`'+code.get_text()+'`'))
            return markers+c.get_text(' ',strip=True).replace('|','\\|').replace('\n',' ')
        matrix=[[cell(c) for c in tr.find_all(['td','th'],recursive=False)] for tr in rows]
        matrix=[r for r in matrix if r]
        if not matrix: return ''
        n=max(map(len,matrix)); matrix=[r+['']*(n-len(r)) for r in matrix]
        return '\n\n'+'\n'.join(['| '+' | '.join(matrix[0])+' |','| '+' | '.join(['---']*n)+' |']+['| '+' | '.join(r)+' |' for r in matrix[1:]])+'\n\n'

    def convert(self,page):
        self.source=page['source']; self.tokens=[]
        s=(REPO/self.source).read_text('utf-8').replace('\r\n','\n')
        fm={}
        if s.startswith('---\n'):
            _,raw,s=s.split('---\n',2)
            fm=yaml.safe_load(raw) or {}
        for change in self.content_changes:
            if change.get('source')==self.source and change.get('removeExactLine'):
                s=s.replace(change['removeExactLine']+'\n','')
            if change.get('source')==self.source and change.get('replaceExact'):
                s=s.replace(change['replaceExact'],change['replacement'])
        # GitBook does not publish intentionally disabled branches.
        s=re.sub(r'{%\s*if\s+false\s*%}.*?{%\s*endif\s*%}','',s,flags=re.S|re.I)
        check=self.live_checks.get(page['publishedUrl'],{})
        self.published_headings=page.get('publishedHeadings',check.get('headings',[]))
        self.html_heading_ids=set()
        title=page.get('publishedTitle') or page['title']
        s=re.sub(r'^\s*# [^\n]+\n','',s,count=1)
        def pre(m):
            node=BeautifulSoup(m.group(),'html.parser').find('pre')
            code=node.find('code') or node
            text=code.get_text()
            language=' '.join(node.get('class',[])+code.get('class',[]))
            lang=re.search(r'(?:language-|lang-)([\w+-]+)',language)
            attrs=(' className="language-'+lang[1]+'"') if lang else ''
            payload=json.dumps(text,ensure_ascii=False).replace('|','\\u007c')
            return self.token('<pre><code'+attrs+'>{'+payload+'}</code></pre>')
        s=re.sub(r'<pre\b.*?</pre>',pre,s,flags=re.S|re.I)
        s=self.protect_code(s)
        # Three legacy pages contain an escaped, orphaned response-tab directive.
        # It is visible as source text in GitBook; render the intended response label.
        s=re.sub(r'\\\{%\s*tab\s+title="([^"]*)"\s*%\\\}',lambda m:'#### '+m[1]+'\n',s)
        # GitBook directive equivalents, retaining all authored content.
        s=re.sub(r'{%\s*tabs\s*%}',lambda m:self.token('<Tabs>'),s)
        s=re.sub(r'{%\s*tab\s+title="([^"]*)"\s*%}',lambda m:self.token('<Tab title='+json.dumps(html.unescape(m[1]))+'>')+'\n',s)
        for old,new in [('endtab','</Tab>'),('endtabs','</Tabs>')]: s=re.sub(r'{%\s*'+old+r'\s*%}',lambda m,n=new:'\n'+self.token(n),s)
        hint={'info':'Info','warning':'Warning','danger':'Warning','success':'Check'}
        s=re.sub(r'{%\s*hint\s+style="([^"]*)"\s*%}',lambda m:self.token('<'+hint.get(m[1],'Note')+'>')+'\n',s)
        # Closing hint type has to follow nested opening tags.
        stack=[]
        lines=[]
        for line in s.splitlines():
            for token_match in re.finditer(r'ZZMINTTOKEN(\d+)ZZ',line):
                tag=self.tokens[int(token_match[1])]
                if tag in ['<Info>','<Warning>','<Check>','<Note>']: stack.append(tag[1:-1])
            if re.search(r'{%\s*endhint\s*%}',line):
                line=re.sub(r'{%\s*endhint\s*%}',lambda m:self.token('</'+(stack.pop() if stack else 'Note')+'>'),line)
            lines.append(line)
        s='\n'.join(lines)
        def content_ref(m):
            href=self.rewrite_url(m[1]); label=clean_title(m[2])
            target=self.routes.get(urllib.parse.urlsplit(href).path)
            if target and (not label or label.lower()=='broken link' or label.endswith('.md')): label=clean_title(target.get('publishedTitle') or target['title'])
            if label.lower()=='broken link': label='Support' if 'support.sonoransoftware.com' in href else 'Read more'
            return '\n\n'+self.token('<Card title='+json.dumps(label or 'Read more')+' href='+json.dumps(href)+' />')+'\n\n'
        s=re.sub(r'{%\s*content-ref\s+url="([^"]*)"\s*%}\s*(.*?)\s*{%\s*endcontent-ref\s*%}',content_ref,s,flags=re.S)
        def embed(m):
            url=self.rewrite_url(m[1]); self.counts['embeds']+=1
            p=urllib.parse.urlsplit(url)
            video=None
            if p.netloc in ['youtube.com','www.youtube.com']: video=urllib.parse.parse_qs(p.query).get('v',[None])[0] or (p.path.split('/')[-1] if p.path.startswith(('/embed/','/shorts/')) else None)
            elif p.netloc=='youtu.be': video=p.path.strip('/')
            if video: return '\n\n'+self.token('<iframe src='+json.dumps('https://www.youtube-nocookie.com/embed/'+video)+' title="Video tutorial" className="w-full aspect-video rounded-xl" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />')+'\n\n'
            if 'guidde.com' in p.netloc: return '\n\n'+self.token('<iframe src='+json.dumps(url)+' title="Interactive tutorial" className="w-full aspect-video rounded-xl" allowFullScreen />')+'\n\n'
            return '\n\n'+self.token('<Card title="Open guide" href='+json.dumps(url)+' />')+'\n\n'
        s=re.sub(r'{%\s*embed\s+url="([^"]*)"[^%]*%}',embed,s)
        s=re.sub(r'{%\s*(?:endembed|code[^%]*|endcode)\s*%}','',s)
        # A GitBook condition in Radio only selects a product-specific instruction.
        s=re.sub(r'{%\s*(?:if|endif)[^%]*%}','',s)
        s=re.sub(r'<details(?:\s[^>]*)?>\s*<summary>(.*?)</summary>',lambda m:'\n\n'+self.token('<Accordion title='+json.dumps(clean_title(m[1]))+'>')+'\n\n',s,flags=re.S|re.I)
        s=re.sub(r'</details>',lambda m:'\n\n'+self.token('</Accordion>')+'\n\n',s,flags=re.I)
        s=re.sub(r'<table\b.*?</table>',self.table,s,flags=re.S|re.I)
        def figure(m):
            soup=BeautifulSoup(m.group(),'html.parser'); im=soup.find('img'); cap=soup.find('figcaption')
            return '\n\n'+(self.image(im) if im else '')+('\n\n*'+cap.get_text(' ',strip=True)+'*' if cap and cap.get_text(strip=True) else '')+'\n\n'
        s=re.sub(r'<figure\b.*?</figure>',figure,s,flags=re.S|re.I)
        s=re.sub(r'<img\b[^>]*>',lambda m:self.image(BeautifulSoup(m.group(),'html.parser').find('img')),s,flags=re.I)
        # Large animated screenshots retain their exact motion in compact silent video.
        def markdown_image(m):
            if not urllib.parse.urlsplit(m[2].strip('<>')).path.lower().endswith('.gif'): return m.group()
            src=self.rewrite_url(m[2].strip('<>'))
            if src not in self.optimized_media: return m.group()
            return self.image({'src':m[2].strip('<>'),'alt':m[1]})
        s=re.sub(r'!\[([^\]\n]*)\]\(((?:[^()\n]|\([^()\n]*\))*)\)',markdown_image,s)
        s=re.sub(r'<h([1-6])[^>]*>(.*?)</h\1>',lambda m:'\n\n'+'#'*int(m[1])+' '+clean_title(m[2])+'\n\n',s,flags=re.S|re.I)
        s=re.sub(r'<mark[^>]*>(.*?)</mark>',r'\1',s,flags=re.S|re.I)
        s=re.sub(r'</?(?:div|span|p|center|font|i)\b[^>]*>','',s,flags=re.I)
        def anchor(m):
            a=BeautifulSoup('<a '+m[1]+'>','html.parser').find('a')
            ident=a.get('id') or a.get('name')
            marker=self.token('<span id='+json.dumps(ident)+' />') if ident else ''
            text=clean_title(m[2])
            return marker+('['+text+']('+self.rewrite_url(a['href'])+')' if a.get('href') and text else text)
        s=re.sub(r'<a\b([^>]*)>(.*?)</a>',anchor,s,flags=re.S|re.I)
        s=re.sub(r'<br\s*/?>',lambda m:self.token('<br />'),s,flags=re.I)
        s=re.sub(r'<hr\s*/?>','\n\n---\n\n',s,flags=re.I)
        s=re.sub(r'<!--.*?-->','',s,flags=re.S)
        # Rewrite Markdown links with balanced parentheses (filenames commonly contain spaces).
        def mdlink(m):
            label=m[1]; target=m[2].strip()
            if target.startswith('<') and target.endswith('>'): target=target[1:-1]
            return '['+label+']('+self.rewrite_url(target)+')'
        s=re.sub(r'\[([^\]\n]*)\]\(((?:[^()\n]|\([^()\n]*\))*)\)',mdlink,s)
        # Preserve all explicit published heading IDs, once the routing audit supplies them.
        live=collections.defaultdict(collections.deque)
        published_headings=self.published_headings
        for h in published_headings:
            if h.get('id') and h.get('level')!=1 and h['id'] not in self.html_heading_ids: live[clean_title(h['text'])].append(h['id'])
        def heading(m):
            level,text=m[1],m[2]
            custom=re.search(r'\{#([^}]+)\}\s*$',text)
            original=custom[1] if custom else None
            if custom: text=text[:custom.start()].rstrip()
            visible=re.sub(r'ZZMINTTOKEN(\d+)ZZ',lambda t:self.tokens[int(t[1])],text)
            q=live.get(clean_title(visible)); ident=q.popleft() if q else None
            ident=ident or original
            marker=self.token('<span id='+json.dumps(original)+' />')+'\n\n' if original and original!=ident else ''
            if ident: return marker+level+' '+text+' '+self.token('{#'+ident+'}')
            return m.group()
        s=re.sub(r'(?m)^(#{2,6})\s+(.+)$',heading,s)
        def empty_heading(m):
            q=live.get(''); ident=q.popleft() if q else None
            return self.token('<span id='+json.dumps(ident)+' />') if ident else ''
        s=re.sub(r'(?m)^#{2,6}[ \t]*$',empty_heading,s)
        for h in published_headings:
            if h.get('id') and h.get('level')==1:
                s=self.token('<span id='+json.dumps(h['id'])+' />')+'\n\n'+s
        # Literal MDX expressions in prose must never execute; code/tag tokens remain untouched.
        s=re.sub(r'\\?[{}]',lambda m:'\\'+m.group()[-1],s)
        s=re.sub(r'<(?=[^A-Za-z/!])','&lt;',s)
        allowed={'strong','b','em','u','sup','sub','del','s','kbd','small','blockquote','ul','ol','li','pre','code'}
        def rawtag(m):
            name=re.match(r'</?([\w-]+)',m.group())[1].lower()
            if name in allowed: return m.group()
            return m.group().replace('<','&lt;').replace('>','&gt;')
        s=re.sub(r'</?[A-Za-z][^>\n]*>',rawtag,s)
        lines=[]
        for line in s.splitlines():
            table_line=line.lstrip().startswith('|')
            for _ in range(5):
                if not re.search(r'ZZMINTTOKEN\d+ZZ',line): break
                def restore(m):
                    value=self.tokens[int(m[1])]
                    if table_line and value.startswith('`'): value=re.sub(r'(?<!\\)\|',r'\\|',value)
                    return value
                line=re.sub(r'ZZMINTTOKEN(\d+)ZZ',restore,line)
            lines.append(line)
        s='\n'.join(lines)
        # Keep source anchor aliases, while giving each DOM ID one owning target.
        heading_ids=set(re.findall(r'(?m)^#{1,6}\s+.*?\{#([^}]+)\}',s))
        spans_seen=set()
        def dedupe_span(m):
            ident=json.loads(m[1])
            if ident in heading_ids or ident in spans_seen: return ''
            spans_seen.add(ident); return m.group()
        s=re.sub(r'<span id=("(?:[^"\\]|\\.)*")\s*/>',dedupe_span,s)
        for alias,target in self.fragment_aliases.get(page['publishedPath'],{}).items():
            if alias in heading_ids or alias in spans_seen: continue
            marker='<span id='+json.dumps(alias)+' />'
            pat=r'(?m)^(#{1,6}\s+[^\n]*\{#'+re.escape(target)+r'\}[^\n]*)$'
            s,n=re.subn(pat,lambda m:marker+'\n\n'+m[1],s,count=1)
            if not n:
                s,n=re.subn(r'(<span id='+re.escape(json.dumps(target))+r'\s*/>)',lambda m:marker+m[1],s,count=1)
            if n: spans_seen.add(alias)
        if '{%' in s: self.warnings.append({'source':self.source,'kind':'remaining-gitbook-directive'})
        front={'title':clean_title(title)}
        if page.get('mappingMethod')=='source-only-unpublished' or page.get('liveStatus')==404: front['noindex']=True
        if fm.get('description'): front['description']=str(fm['description'])
        if fm.get('tags'): front['keywords']=fm['tags']
        s='---\n'+yaml.safe_dump(front,allow_unicode=True,sort_keys=False).rstrip()+'\n---\n\n'+s.strip()+'\n'
        target=OUT/(page['mintlifyPage']+'.mdx'); target.parent.mkdir(parents=True,exist_ok=True); target.write_text(s,'utf-8',newline='\n')
        self.counts['pages']+=1

    def nav(self):
        products=[]
        for key,label,icon in PRODUCTS:
            entries=[dict(x) for x in self.manifest['navigation'] if x['product']==key]
            cats=collections.OrderedDict()
            for ent in entries: cats.setdefault(ent.get('category') or 'Start here',[]).append(ent)
            groups=[]
            def recurse(items,start=0,depth=0):
                result=[]; i=start
                while i<len(items):
                    e=items[i]
                    if e['depth']<depth: break
                    source=posixpath.normpath(posixpath.join(posixpath.dirname(e['source']),urllib.parse.unquote(e['target'].split('#')[0])))
                    page=self.pages.get(source)
                    child=[]; next_i=i+1
                    if next_i<len(items) and items[next_i]['depth']>e['depth']: child,next_i=recurse(items,next_i,items[next_i]['depth'])
                    if child:
                        group={'group':clean_title(e['title']),'pages':child}
                        if page and not page.get('hidden'): group['root']=page['mintlifyPage']
                        result.append(group)
                    elif page and not page.get('hidden'): result.append(page['mintlifyPage'])
                    i=next_i
                return result,i
            for cat,items in cats.items():
                pages,_=recurse(items,0,items[0]['depth'] if items else 0)
                if pages: groups.append({'group':clean_title(cat),'pages':pages})
            products.append({'product':label,'icon':icon,'groups':groups})
        return {'products':products}

    def run(self):
        OUT.mkdir(exist_ok=True)
        for p in self.pages.values(): self.convert(p)
        redirects=[]
        for p in self.pages.values():
            for alias in p.get('aliases',[]):
                if alias not in self.routes and alias!=p['publishedPath']:
                    redirects.append({'source':alias,'destination':p['publishedPath']})
        cfg={'$schema':'https://mintlify.com/docs.json','theme':'mint','name':'Sonoran Software Documentation','colors':{'primary':'#1D7DCF','light':'#3297ED','dark':'#1465AA'},'navigation':self.nav(),'navbar':{'links':[{'label':'Support','href':'https://support.sonoransoftware.com'},{'label':'Website','href':'https://sonoransoftware.com'}]},'seo':{'indexing':'all','metatags':{'robots':'noindex, follow','canonical':'https://docs.sonoransoftware.com'}},'redirects':redirects}
        if self.branding.get('logoLight') and self.branding.get('logoDark'):
            cfg['logo']={'light':self.branding['logoLight'],'dark':self.branding['logoDark'],'href':'/'}
        if self.branding.get('favicon'): cfg['favicon']=self.branding['favicon']
        (OUT/'docs.json').write_text(json.dumps(cfg,ensure_ascii=False,indent=2)+'\n','utf-8')
        (OUT/'style.css').write_text('/* Sonoran documentation: preserve original branding and readable media. */\nimg { max-width: 100%; height: auto; }\niframe { border: 0; }\n/* Starter preview: the Assistant service is also inactive in the dashboard. */\n#assistant-entry, #assistant-entry-mobile, #chat-assistant-sheet, #ask-assistant-code-block-button { display: none !important; }\n','utf-8')
        report={'sourceCommit':self.manifest['sourceCommit'],'counts':dict(self.counts),'warnings':self.warnings}
        REPORT.write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n','utf-8')
        print(json.dumps({'counts':dict(self.counts),'warningCounts':dict(collections.Counter(w['kind'] for w in self.warnings))}))

if __name__=='__main__':
    ap=argparse.ArgumentParser()
    ap.add_argument('--asset-manifest',default=str(BASE/'asset-manifest.json') if (BASE/'asset-manifest.json').exists() else None); ap.add_argument('--asset-base',default='https://docs-assets.sonoransoftware.com')
    ap.add_argument('--source-root',type=Path,default=REPO)
    ap.add_argument('--routing-manifest',type=Path,default=MANIFEST)
    ap.add_argument('--data-root',type=Path,default=BASE)
    ap.add_argument('--output',type=Path)
    ap.add_argument('--report',type=Path,default=REPORT)
    args=ap.parse_args()
    BASE=args.data_root.resolve(); REPO=args.source_root.resolve(); MANIFEST=args.routing_manifest.resolve()
    OUT=args.output.resolve() if args.output else REPO/'mintlify'; REPORT=args.report.resolve()
    if OUT==REPO or REPO not in OUT.parents: raise SystemExit('Output must be a subdirectory of the source checkout')
    Converter(args.asset_manifest,args.asset_base).run()
