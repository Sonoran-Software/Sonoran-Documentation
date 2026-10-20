"""Check generated Mintlify routes, navigation, published heading IDs, and links.

Defaults resolve from this file, so the command works from any working directory.
Uses only the Python standard library and performs no network requests.
"""
from pathlib import Path
from collections import Counter
from urllib.parse import urlsplit, unquote
import argparse, html, json, re, sys

if hasattr(sys.stdout,'reconfigure'):sys.stdout.reconfigure(encoding='utf-8')
HERE=Path(__file__).resolve().parent
REPO=HERE.parents[1]

def without_code(text):
    lines=[];fence=None
    for line in text.splitlines():
        match=re.match(r'^\s*(`{3,}|~{3,})',line)
        if match:
            if fence is None:fence=match.group(1)[0]
            elif fence==match.group(1)[0]:fence=None
            continue
        if not fence:lines.append(line)
    return '\n'.join(lines)

def anchors(text):
    ids=set(re.findall(r'\bid=["\']([^"\']+)["\']',text))
    used=Counter()
    for match in re.finditer(r'^#{1,6}\s+(.+?)\s*$',text,re.M):
        title=match.group(1)
        explicit=re.search(r'\{#([^}]+)\}',title)
        if explicit:ids.add(explicit.group(1));continue
        title=re.sub(r'<[^>]*>','',title)
        title=re.sub(r'\[([^]]+)\]\([^)]*\)',r'\1',title)
        title=html.unescape(title).replace('`','').lower()
        title=re.sub(r'[^\w\s-]','',title)
        slug=re.sub(r'\s','-',title)
        suffix=used[slug];used[slug]+=1
        ids.add(slug+('-'+str(suffix) if suffix else ''))
    return ids

def main():
    ap=argparse.ArgumentParser(description=__doc__,formatter_class=argparse.ArgumentDefaultsHelpFormatter)
    ap.add_argument('--root',type=Path,default=REPO/'mintlify',help='Generated Mintlify site directory')
    ap.add_argument('--manifest',type=Path,default=HERE/'routing-manifest.json',help='Recorded source and published-route manifest')
    ap.add_argument('--report',type=Path,default=HERE/'reports'/'route-qa.json',help='JSON diagnostic report to write')
    args=ap.parse_args();root=args.root.resolve();report=args.report.resolve()
    manifest=json.loads(args.manifest.resolve().read_text(encoding='utf-8'))
    canonicalHost=urlsplit(manifest['domain']).hostname
    files={}
    for ext in ['*.mdx','*.md']:
        for path in root.rglob(ext):
            rel=path.relative_to(root).as_posix()
            if '.gitbook/' in rel or rel.startswith(('.git/','node_modules/','migration/')):continue
            route='/'+rel.rsplit('.',1)[0]
            if route=='/index':route='/'
            files[route]=path
    docs=json.loads((root/'docs.json').read_text(encoding='utf-8-sig'))
    redirects={item['source']:item['destination'] for item in docs.get('redirects',[]) if isinstance(item,dict) and 'source' in item and 'destination' in item}
    navrefs=[]
    def readnav(value):
        if isinstance(value,list):
            for item in value:readnav(item)
        elif isinstance(value,dict):
            for key,item in value.items():
                if key=='root' and isinstance(item,str):navrefs.append(item)
                elif key=='pages' and isinstance(item,list):
                    for page in item:
                        if isinstance(page,str):navrefs.append(page)
                        else:readnav(page)
                elif isinstance(item,(dict,list)):readnav(item)
    readnav(docs.get('navigation',{}))
    missingNav=[p['publishedPath'] for p in manifest['pages'] if not p['hidden'] and p['mintlifyPage'] not in navrefs]
    hiddenInNav=[p['publishedPath'] for p in manifest['pages'] if p['hidden'] and p['mintlifyPage'] in navrefs]
    contents={route:without_code(path.read_text(encoding='utf-8-sig')) for route,path in files.items()}
    ids={route:anchors(text) for route,text in contents.items()}
    duplicateIds=[]
    for route,text in contents.items():
        explicit=re.findall(r'\bid=["\']([^"\']+)["\']',text)+re.findall(r'\{#([^}]+)\}',text)
        duplicateIds.extend({'page':route,'id':anchor,'count':count} for anchor,count in Counter(explicit).items() if count>1)
    missingPublishedIds=[]
    for page in manifest['pages']:
        existing=ids.get(page['publishedPath'],set())
        for heading in page.get('publishedHeadings',[]):
            if heading.get('id') and heading['id'] not in existing:missingPublishedIds.append({'page':page['publishedPath'],'id':heading['id'],'text':heading['text']})
    missingPages=[p['publishedPath'] for p in manifest['pages'] if p['publishedPath'] not in files]
    missingAliases=[]
    for p in manifest['pages']:
        for alias in p['aliases']:
            if alias not in files and redirects.get(alias)!=p['publishedPath']:missingAliases.append({'source':alias,'destination':p['publishedPath']})
    badLinks=[];badFragments=[];oldGitBook=[];linksChecked=0
    def resolve(path):
        seen=set()
        while path in redirects and path not in seen:seen.add(path);path=redirects[path]
        return path
    for route,text in contents.items():
        links=re.findall(r'\]\(([^)\s]+)(?:\s+"[^"]*")?\)',text)+re.findall(r'\b(?:href|url)=["\']([^"\']+)["\']',text)
        for target in links:
            target=html.unescape(target)
            if 'app.gitbook.com' in target:oldGitBook.append({'page':route,'target':target});continue
            parsed=urlsplit(target)
            if parsed.netloc and parsed.hostname!=canonicalHost:continue
            if parsed.scheme and parsed.scheme not in ['http','https']:continue
            if not parsed.path and not parsed.fragment:continue
            if parsed.path.startswith('/'):
                path=unquote(parsed.path).rstrip('/') or '/'
            elif parsed.path:
                continue  # Relative media links are owned by the asset audit.
            else:path=route
            if re.search(r'\.(png|jpe?g|gif|webp|avif|svg|mp4|mp3|wav|css|js|ico|zip|xlsx|json|yaml|yml|pdf)$',path,re.I):continue
            if path.startswith(('/images/','/assets/','/mintlify-assets/')):continue
            path=resolve(path)
            if path not in files:
                badLinks.append({'page':route,'target':target,'resolved':path});continue
            linksChecked+=1
            fragment=unquote(parsed.fragment)
            if fragment and fragment not in ids[path]:badFragments.append({'page':route,'target':target,'resolved':path,'fragment':fragment})
    out={'root':str(root),'sourceCommit':manifest['sourceCommit'],'counts':{'expectedPages':len(manifest['pages']),'generatedRoutes':len(files),'checkedLinks':linksChecked,'missingPages':len(missingPages),'missingAliases':len(missingAliases),'badPageLinks':len(badLinks),'badFragments':len(badFragments),'remainingGitBookLinks':len(oldGitBook),'missingVisibleNavigation':len(missingNav),'hiddenPagesInNavigation':len(hiddenInNav),'missingPublishedHeadingIds':len(missingPublishedIds),'duplicateExplicitIds':len(duplicateIds)},'missingPages':missingPages,'missingAliases':missingAliases,'missingVisibleNavigation':missingNav,'hiddenPagesInNavigation':hiddenInNav,'missingPublishedHeadingIds':missingPublishedIds,'duplicateExplicitIds':duplicateIds,'badPageLinks':badLinks,'badFragments':badFragments,'remainingGitBookLinks':oldGitBook}
    report.parent.mkdir(parents=True,exist_ok=True)
    report.write_text(json.dumps(out,ensure_ascii=False,indent=2),encoding='utf-8')
    print(json.dumps(out['counts'],indent=2))
    print('Report:',report)
    failures=sum(out['counts'][key] for key in ['missingPages','missingAliases','badPageLinks','badFragments','remainingGitBookLinks','missingVisibleNavigation','hiddenPagesInNavigation','missingPublishedHeadingIds','duplicateExplicitIds'])
    return 1 if failures else 0

if __name__=='__main__':raise SystemExit(main())
