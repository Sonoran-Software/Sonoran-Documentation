const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { execFileSync, spawn } = require('node:child_process');
const { S3Client, ListBucketsCommand, CreateBucketCommand, ListObjectsV2Command, HeadObjectCommand, PutObjectCommand, CopyObjectCommand, PutBucketCorsCommand, GetBucketCorsCommand } = require(process.env.AWS_SDK_MODULE || '@aws-sdk/client-s3');

// Example: node r2-assets.cjs inventory --repo /path/to/docs --ref origin/master
// --manifest ./asset-manifest.json --bucket docs-mintlify --credentials-file /private/.env
// Credentials may instead come from S3_*, R2_*, or AWS_* environment variables.
// Uses existing @aws-sdk/client-s3; never installs packages or deletes objects.
const args = process.argv.slice(2);
const flags = {};
const positionals = [];
for (let i = 0; i < args.length; i++) {
  if (!args[i].startsWith('--')) { positionals.push(args[i]); continue; }
  const [name, inline] = args[i].slice(2).split(/=(.*)/s);
  if (name === 'help') flags.help = true;
  else flags[name] = inline !== undefined ? inline : args[++i];
}
const command = positionals[0];
if (!command || flags.help) {
  process.stdout.write('Commands: inspect, create, inventory, upload, verify, public-verify, upload-optimized, external, branding, priority, cors, metadata-fix, diagnose\nFlags: --repo PATH --ref REF --bucket NAME --credentials-file PATH --endpoint HTTPS_URL --manifest PATH --public-base HTTPS_URL --optimized-dir PATH\nExisting dependencies: @aws-sdk/client-s3; sharp only for branding inspection; ffprobe for upload-optimized. AWS_SDK_MODULE and SHARP_MODULE may point to existing installations.\nNew buckets are private by default. Public domain setup is a separate Cloudflare dashboard/control-plane action. create refuses to alter existing buckets; upload requires its isolated bucket-state.json and uses conditional create-only writes. No command deletes objects or buckets.\n');
  process.exit(0);
}
const envFile = flags['credentials-file'] || process.env.R2_CREDENTIALS_FILE;
const repo = path.resolve(flags.repo || process.cwd());
const inputRef = flags.ref || process.env.DOCS_GIT_REF || 'HEAD';
const revision = execFileSync('git', ['-C', repo, 'rev-parse', '--verify', inputRef + '^{commit}'], {encoding:'utf8'}).trim();
const bucket = flags.bucket || process.env.R2_BUCKET || 'docs-mintlify';
if (!/^[a-z0-9][a-z0-9.-]{1,61}[a-z0-9]$/.test(bucket)) throw new Error('Invalid R2 bucket name');
const manifestPath = path.resolve(flags.manifest || process.env.DOCS_ASSET_MANIFEST || path.join(process.cwd(), 'asset-manifest.json'));
const stateDir = path.dirname(manifestPath);
const optimizedDir = path.resolve(flags['optimized-dir'] || process.env.DOCS_OPTIMIZED_DIR || path.join(stateDir, 'optimized'));
fs.mkdirSync(stateDir, {recursive:true});
const publicBase = (flags['public-base'] || process.env.R2_PUBLIC_BASE || '').replace(/\/$/, '');
if (publicBase && !/^https:\/\/[^\s?#]+$/.test(publicBase)) throw new Error('Public media base must be an HTTPS URL');
const env = {...process.env};

if (envFile) for (const line of fs.readFileSync(envFile, 'utf8').split(/\r?\n/)) {
  const match = /^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/.exec(line);
  if (!match) continue;
  let value = match[2];
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
  env[match[1]] = value;
}
env.S3_ACCESS_KEY ||= env.R2_ACCESS_KEY_ID || env.AWS_ACCESS_KEY_ID;
env.S3_SECRET_KEY ||= env.R2_SECRET_ACCESS_KEY || env.AWS_SECRET_ACCESS_KEY;
env.S3_URL = flags.endpoint || env.S3_URL || env.R2_ENDPOINT || (env.R2_ACCOUNT_ID ? `https://${env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com` : undefined);
for (const name of ['S3_ACCESS_KEY', 'S3_SECRET_KEY', 'S3_URL']) if (!env[name]) throw new Error(`Missing ${name}`);
const endpoint = new URL(env.S3_URL);
if (!endpoint.hostname.endsWith('.r2.cloudflarestorage.com') || endpoint.protocol !== 'https:' || endpoint.username || endpoint.password || endpoint.search) throw new Error('Unexpected R2 endpoint configuration');
const s3 = new S3Client({ region: 'auto', endpoint: endpoint.origin, forcePathStyle: true, credentials: { accessKeyId: env.S3_ACCESS_KEY, secretAccessKey: env.S3_SECRET_KEY }, requestChecksumCalculation: 'WHEN_REQUIRED', responseChecksumValidation: 'WHEN_REQUIRED' });
const output = value => process.stdout.write(`${JSON.stringify(value)}\n`);
const safeError = error => ({ name: error.name, code: error.Code || error.code, status: error.$metadata?.httpStatusCode, message: String(error.message || '').replaceAll(env.S3_ACCESS_KEY, '[redacted]').replaceAll(env.S3_SECRET_KEY, '[redacted]').replaceAll(endpoint.hostname, '[endpoint]') });
const save = (name, data) => fs.writeFileSync(name === 'asset-manifest.json' ? manifestPath : path.join(stateDir, name), JSON.stringify(data, null, 2) + '\n');

class GitBatch {
  constructor() {
    this.child = spawn('git', ['-C', repo, 'cat-file', '--batch'], { windowsHide: true, stdio: ['pipe', 'pipe', 'ignore'] });
    this.iterator = this.child.stdout[Symbol.asyncIterator]();
    this.pending = Buffer.alloc(0);
  }
  async more() {
    const next = await this.iterator.next();
    if (next.done) throw new Error('Git object stream ended unexpectedly');
    this.pending = Buffer.concat([this.pending, next.value]);
  }
  async read(oid) {
    if (!/^[a-f0-9]{40}$/.test(oid)) throw new Error('Invalid Git object identifier');
    this.child.stdin.write(oid + '\n');
    while (!this.pending.includes(10)) await this.more();
    const boundary = this.pending.indexOf(10);
    const header = this.pending.subarray(0, boundary).toString('ascii');
    this.pending = this.pending.subarray(boundary + 1);
    const match = /^([a-f0-9]{40}) blob (\d+)$/.exec(header);
    if (!match || match[1] !== oid) throw new Error('Unexpected Git object response');
    const size = Number(match[2]);
    const chunks = [];
    let received = 0;
    while (received < size) {
      if (!this.pending.length) await this.more();
      const length = Math.min(size - received, this.pending.length);
      chunks.push(this.pending.subarray(0, length));
      this.pending = this.pending.subarray(length);
      received += length;
    }
    if (!this.pending.length) await this.more();
    if (this.pending[0] !== 10) throw new Error('Missing Git object delimiter');
    this.pending = this.pending.subarray(1);
    return Buffer.concat(chunks, size);
  }
  close() { this.child.stdin.end(); }
}

const types = { png:'image/png', jpg:'image/jpeg', jpeg:'image/jpeg', gif:'image/gif', webp:'image/webp', avif:'image/avif', xlsx:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', svg:'image/svg+xml', ico:'image/x-icon', mp4:'video/mp4', webm:'video/webm', mov:'video/quicktime', m4v:'video/mp4', mp3:'audio/mpeg', wav:'audio/wav', ogg:'audio/ogg', pdf:'application/pdf', zip:'application/zip', json:'application/json', txt:'text/plain', csv:'text/csv', yml:'text/yaml', yaml:'text/yaml', lua:'text/plain', xml:'application/xml', html:'text/html', css:'text/css', js:'text/javascript', rar:'application/vnd.rar', '7z':'application/x-7z-compressed' };
function fileType(sourcePath, bytes) {
  let extension = path.extname(sourcePath).slice(1).toLowerCase();
  if (!/^[a-z0-9]{1,8}$/.test(extension)) extension = '';
  const head = bytes.subarray(0, 40);
  if (head.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) extension = 'png';
  else if (head[0] === 255 && head[1] === 216 && head[2] === 255) extension = 'jpg';
  else if (head.toString('ascii').startsWith('GIF8')) extension = 'gif';
  else if (head.toString('ascii', 0, 4) === 'RIFF' && head.toString('ascii', 8, 12) === 'WEBP') extension = 'webp';
  else if (head.toString('ascii').startsWith('%PDF')) extension = 'pdf';
  return { extension: extension || 'bin', contentType: types[extension] || 'application/octet-stream' };
}

async function inventory() {
  const tree = execFileSync('git', ['-C', repo, 'ls-tree', '-r', '-l', '-z', revision], { maxBuffer: 5 * 1024 * 1024 }).toString('utf8');
  const entries = tree.split('\0').filter(Boolean).map(row => {
    const match = /^\d+ blob ([a-f0-9]{40})\s+(\d+)\t([\s\S]+)$/.exec(row);
    return match && { oid: match[1], size: Number(match[2]), sourcePath: match[3] };
  }).filter(entry => entry && /(^|\/)\.gitbook\/assets\//.test(entry.sourcePath));
  const reader = new GitBatch();
  const hashed = new Map();
  const manifest = { version: 1, bucket, revision, createdAt: new Date().toISOString(), keyFormat: 'sha256/<first2>/<hash>.<ext>', entries: [] };
  try {
    for (const entry of entries) {
      let content = hashed.get(entry.oid);
      if (!content) {
        const bytes = await reader.read(entry.oid);
        if (bytes.length !== entry.size) throw new Error('Git object size mismatch');
        if (bytes.subarray(0, 100).toString('utf8').startsWith('version https://git-lfs.github.com/spec/v1')) throw new Error('Git LFS asset requires materialization');
        content = { sha256: crypto.createHash('sha256').update(bytes).digest('hex'), md5: crypto.createHash('md5').update(bytes).digest('hex'), ...fileType(entry.sourcePath, bytes) };
        hashed.set(entry.oid, content);
      }
      manifest.entries.push({ ...entry, ...content, key: `sha256/${content.sha256.slice(0, 2)}/${content.sha256}.${content.extension}` });
      if (manifest.entries.length % 500 === 0) output({ mode: 'inventory', processed: manifest.entries.length, total: entries.length });
    }
  } finally { reader.close(); }
  const unique = [...new Map(manifest.entries.map(entry => [entry.key, entry])).values()];
  manifest.summary = { sourceAssets: entries.length, sourceBytes: entries.reduce((sum, entry) => sum + entry.size, 0), uniqueObjects: unique.length, uniqueBytes: unique.reduce((sum, entry) => sum + entry.size, 0) };
  save('asset-manifest.json', manifest);
  output({ mode: 'inventory', ...manifest.summary, manifest: manifestPath });
}

async function upload() {
  const state = JSON.parse(fs.readFileSync(path.join(stateDir, 'bucket-state.json'), 'utf8'));
  if (state.bucket !== bucket || state.revision !== revision || !state.emptyAfterCreation) throw new Error('Isolated migration bucket state is required');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  if (manifest.bucket !== bucket || manifest.revision !== revision) throw new Error('Manifest target mismatch');
  const entries = [...new Map(manifest.entries.map(entry => [entry.key, entry])).values()];
  const logPath = path.join(stateDir, 'upload-progress.jsonl');
  const completed = new Set(fs.existsSync(logPath) ? fs.readFileSync(logPath, 'utf8').split('\n').filter(Boolean).map(line => JSON.parse(line).key) : []);
  let next = 0, uploaded = 0, skipped = 0, bytesUploaded = 0;
  const failures = [];
  async function worker() {
    const reader = new GitBatch();
    try {
      while (next < entries.length) {
        const entry = entries[next++];
        if (completed.has(entry.key)) { skipped++; continue; }
        try {
          let exists = false;
          try {
            const head = await s3.send(new HeadObjectCommand({ Bucket: bucket, Key: entry.key }));
            if (head.ContentLength !== entry.size || head.Metadata?.sha256 !== entry.sha256) throw new Error('Existing migration object differs');
            exists = true;
          } catch (error) { if (error.$metadata?.httpStatusCode !== 404 && error.name !== 'NotFound') throw error; }
          if (!exists) {
            const bytes = await reader.read(entry.oid);
            if (bytes.length !== entry.size || crypto.createHash('sha256').update(bytes).digest('hex') !== entry.sha256) throw new Error('Source object differs from manifest');
            await s3.send(new PutObjectCommand({ Bucket: bucket, Key: entry.key, Body: bytes, ContentLength: entry.size, ContentType: entry.contentType, CacheControl: 'public, max-age=31536000, immutable', Metadata: { sha256: entry.sha256 }, IfNoneMatch: '*' }));
            const head = await s3.send(new HeadObjectCommand({ Bucket: bucket, Key: entry.key }));
            if (head.ContentLength !== entry.size || head.Metadata?.sha256 !== entry.sha256 || head.ContentType !== entry.contentType) throw new Error('Uploaded object verification failed');
            uploaded++; bytesUploaded += entry.size;
          } else skipped++;
          fs.appendFileSync(logPath, JSON.stringify({ key: entry.key, bytes: entry.size, verifiedAt: new Date().toISOString() }) + '\n');
          if ((uploaded + skipped) % 100 === 0) output({ mode: 'upload', completed: uploaded + skipped, total: entries.length, uploaded, skipped, bytesUploaded });
        } catch (error) {
          failures.push({ sourcePath: entry.sourcePath, key: entry.key, ...safeError(error) });
          output({ mode: 'upload-error', sourcePath: entry.sourcePath, ...safeError(error) });
          if (failures.length >= 5) throw new Error('Upload stopped after repeated failures');
        }
      }
    } finally { reader.close(); }
  }
  await Promise.all([worker(), worker(), worker(), worker()]);
  const result = { bucket, revision, uploaded, skipped, bytesUploaded, failures, finishedAt: new Date().toISOString() };
  save('upload-result.json', result);
  output({ mode: 'upload-complete', ...result });
  if (failures.length) process.exitCode = 1;
}

async function diagnose() {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const needle = positionals[1];
  const entry = manifest.entries.find(item => item.sourcePath === needle);
  if (!entry) throw new Error('Manifest path not found');
  const head = await s3.send(new HeadObjectCommand({ Bucket: bucket, Key: entry.key }));
  output({ mode:'diagnose', entry, remote: { length: head.ContentLength, type: head.ContentType, sha256: head.Metadata?.sha256, etag: head.ETag } });
}

async function priority() {
  if (!publicBase) throw new Error('priority requires --public-base');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const entries = manifest.entries.filter(entry => /welcome\/documentation-portal\/\.gitbook\/assets\/product-cards\/(cad|cms|radio|store|bot|studio)\.png$/.test(entry.sourcePath));
  if (entries.length !== 6) throw new Error('Six product cards were not found');
  const reader = new GitBatch();
  try {
    for (const entry of entries) {
      const bytes = await reader.read(entry.oid);
      if (crypto.createHash('sha256').update(bytes).digest('hex') !== entry.sha256) throw new Error('Priority source checksum mismatch');
      try { await s3.send(new PutObjectCommand({ Bucket:bucket, Key:entry.key, Body:bytes, ContentType:entry.contentType, ContentLength:bytes.length, ContentMD5:Buffer.from(entry.md5,'hex').toString('base64'), CacheControl:'public, max-age=31536000, immutable', Metadata:{sha256:entry.sha256}, IfNoneMatch:'*' })); }
      catch(error) { if (error.$metadata?.httpStatusCode !== 412) throw error; }
      const head = await s3.send(new HeadObjectCommand({ Bucket:bucket, Key:entry.key }));
      if (head.ETag?.replaceAll('"','') !== entry.md5) throw new Error('Priority stored checksum mismatch');
      fs.appendFileSync(path.join(stateDir,'upload-progress.jsonl'), JSON.stringify({key:entry.key,bytes:entry.size,verifiedAt:new Date().toISOString()})+'\n');
      const publicResponse = await fetch((publicBase + '/')+entry.key+'?migration-check=1', {method:'HEAD'});
      output({mode:'priority',sourcePath:entry.sourcePath,key:entry.key,publicStatus:publicResponse.status});
    }
  } finally { reader.close(); }
}

async function metadataFix() {
  const manifest = JSON.parse(fs.readFileSync(manifestPath,'utf8'));
  const changed = [];
  for (const entry of manifest.entries) {
    const type = entry.extension === 'avif' ? 'image/avif' : entry.extension === 'xlsx' ? 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' : undefined;
    if (!type) continue;
    const head = await s3.send(new HeadObjectCommand({Bucket:bucket,Key:entry.key}));
    if (head.ETag?.replaceAll('"','') !== entry.md5) throw new Error('Metadata fix source checksum mismatch');
    if (head.ContentType === type) { entry.contentType=type; continue; }
    await s3.send(new CopyObjectCommand({Bucket:bucket,Key:entry.key,CopySource:bucket+'/'+entry.key,CopySourceIfMatch:head.ETag,MetadataDirective:'REPLACE',ContentType:type,CacheControl:'public, max-age=31536000, immutable',Metadata:{sha256:entry.sha256}}));
    const verified = await s3.send(new HeadObjectCommand({Bucket:bucket,Key:entry.key}));
    if(verified.ContentType !== type || verified.ETag?.replaceAll('"','') !== entry.md5) throw new Error('Metadata correction verification failed');
    entry.contentType=type;
    changed.push({key:entry.key,contentType:type});
  }
  save('asset-manifest.json',manifest);
  save('metadata-corrections.json',changed);
  output({mode:'metadata-fix',changed});
}

async function cors() {
  const state=JSON.parse(fs.readFileSync(path.join(stateDir,'bucket-state.json'),'utf8'));
  if(state.bucket!==bucket || !state.emptyAfterCreation) throw new Error('Isolated migration bucket state required');
  const rules=[{AllowedOrigins:['*'],AllowedMethods:['GET','HEAD'],AllowedHeaders:['Range'],ExposeHeaders:['ETag','Content-Length','Content-Range','Accept-Ranges'],MaxAgeSeconds:3600}];
  await s3.send(new PutBucketCorsCommand({Bucket:bucket,CORSConfiguration:{CORSRules:rules}}));
  const actual=await s3.send(new GetBucketCorsCommand({Bucket:bucket}));
  save('cors-result.json',{bucket,rules:actual.CORSRules});
  output({mode:'cors',bucket,rules:actual.CORSRules});
}

async function external() {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const sources = ['welcome/documentation-portal/promotions/hire-a-developer.md', 'studio/sonoran-studio/sonoran-studio/stream-widgets.md'];
  const externalEntries = [];
  for (const sourcePage of sources) {
    const markdown = execFileSync('git', ['-C', repo, 'show', `${revision}:${sourcePage}`], { encoding:'utf8', maxBuffer:1024 * 1024 });
    const matches = [...markdown.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/gi)];
    const match = matches.find(item => /https:\/\/[^/]*gitbook\.(?:com|io)\//.test(item[1]));
    if (!match) throw new Error('Expected external image reference was not found');
    const sourceUrl = match[1].replace(/&#x26;|&#38;|&amp;/gi, '&');
    const parsed = new URL(sourceUrl);
    const fetchUrl = parsed.searchParams.has('url') ? parsed.searchParams.get('url') : sourceUrl;
    const source = new URL(fetchUrl);
    if (source.protocol !== 'https:' || !/^(?:files\.gitbook\.com|[0-9]+-files\.gitbook\.io)$/.test(source.hostname)) throw new Error('Unexpected external media host');
    const response = await fetch(fetchUrl, { redirect: 'follow', signal: AbortSignal.timeout(60000) });
    if (!response.ok) throw new Error(`External image HTTP ${response.status}`);
    if (Number(response.headers.get('content-length')) > 20 * 1024 * 1024) throw new Error('External image is too large');
    const chunks = [];
    let length = 0;
    for await (const chunk of response.body) {
      length += chunk.length;
      if (length > 20 * 1024 * 1024) throw new Error('External image is too large');
      chunks.push(chunk);
    }
    const bytes = Buffer.concat(chunks, length);
    const type = fileType(decodeURIComponent(source.pathname), bytes);
    if (!type.contentType.startsWith('image/') || (!response.headers.get('content-type')?.startsWith('image/'))) throw new Error('External media is not an image');
    const sha256 = crypto.createHash('sha256').update(bytes).digest('hex');
    const md5 = crypto.createHash('md5').update(bytes).digest('hex');
    const entry = { sourcePage, sourceUrl, fetchUrl, size: length, sha256, md5, ...type, key: `sha256/${sha256.slice(0,2)}/${sha256}.${type.extension}` };
    let exists = false;
    try {
      const head = await s3.send(new HeadObjectCommand({ Bucket: bucket, Key: entry.key }));
      if (head.ContentLength !== length || head.Metadata?.sha256 !== sha256) throw new Error('Existing external media object differs');
      exists = true;
    } catch (error) { if (error.$metadata?.httpStatusCode !== 404 && error.name !== 'NotFound') throw error; }
    if (!exists) await s3.send(new PutObjectCommand({ Bucket: bucket, Key: entry.key, Body: bytes, ContentLength:length, ContentMD5:Buffer.from(md5, 'hex').toString('base64'), ContentType:type.contentType, CacheControl:'public, max-age=31536000, immutable', Metadata:{sha256}, IfNoneMatch:'*' }));
    const head = await s3.send(new HeadObjectCommand({ Bucket:bucket, Key:entry.key }));
    if (head.ContentLength !== length || head.ETag?.replaceAll('"','') !== md5) throw new Error('External media verification failed');
    externalEntries.push(entry);
    output({ mode:'external-image', sourcePage, key:entry.key, bytes:length, contentType:type.contentType, existed:exists });
  }
  manifest.externalEntries = externalEntries;
  save('asset-manifest.json', manifest);
  output({ mode:'external-complete', count:externalEntries.length, bytes:externalEntries.reduce((sum,entry) => sum + entry.size,0) });
}

async function branding() {
  const html = await (await fetch('https://docs.sonoransoftware.com/')).text();
  const tags = [...html.matchAll(/<img\b[^>]*>/gi)].map(match => match[0]).filter(tag => /alt="Logo"/.test(tag));
  const light = tags.find(tag => /class="block dark:hidden/.test(tag));
  const dark = tags.find(tag => /class="hidden dark:block/.test(tag));
  const favicon = [...html.matchAll(/<link\b[^>]*>/gi)].map(match => match[0]).find(tag => /rel="icon"/.test(tag));
  const manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));
  const entries=[];
  if (!publicBase) throw new Error('branding requires --public-base');
  const sharp=require(process.env.SHARP_MODULE || 'sharp');
  for(const [role,tag] of [['logoLight',light],['logoDark',dark],['favicon',favicon]]) {
    if(!tag) throw new Error('Expected official branding reference was not found');
    const sourceUrl=tag.match(/(?:src|href)="([^"]+)"/)[1].replace(/&amp;|&#x26;/g,'&');
    const fetchUrl=new URL(sourceUrl).searchParams.get('url');
    if(!fetchUrl || !/^[0-9]+-files\.gitbook\.io$/.test(new URL(fetchUrl).hostname)) throw new Error('Unexpected branding host');
    const response=await fetch(fetchUrl,{signal:AbortSignal.timeout(30000)});
    if(!response.ok || !response.headers.get('content-type')?.startsWith('image/')) throw new Error('Official branding image unavailable');
    const bytes=Buffer.from(await response.arrayBuffer());
    if(bytes.length>2*1024*1024) throw new Error('Unexpectedly large branding image');
    const dimensions=await sharp(bytes).metadata();
    const sha256=crypto.createHash('sha256').update(bytes).digest('hex');
    const md5=crypto.createHash('md5').update(bytes).digest('hex');
    const type=fileType(new URL(fetchUrl).pathname,bytes);
    const entry={role,sourceUrl,fetchUrl,size:bytes.length,sha256,md5,...type,key:`sha256/${sha256.slice(0,2)}/${sha256}.${type.extension}`,width:dimensions.width,height:dimensions.height};
    try{await s3.send(new PutObjectCommand({Bucket:bucket,Key:entry.key,Body:bytes,ContentLength:bytes.length,ContentType:type.contentType,ContentMD5:Buffer.from(md5,'hex').toString('base64'),CacheControl:'public, max-age=31536000, immutable',Metadata:{sha256},IfNoneMatch:'*'}));}catch(error){if(error.$metadata?.httpStatusCode!==412)throw error;}
    const head=await s3.send(new HeadObjectCommand({Bucket:bucket,Key:entry.key}));
    if(head.ETag?.replaceAll('"','')!==md5)throw new Error('Branding object checksum mismatch');
    const publicResponse=await fetch((publicBase + '/')+entry.key,{method:'HEAD'});
    entries.push(entry);
    output({mode:'branding',role,key:entry.key,width:entry.width,height:entry.height,publicStatus:publicResponse.status});
  }
  manifest.brandingEntries=entries;
  save('asset-manifest.json',manifest);
}

async function uploadOptimized() {
  const manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));
  if(manifest.bucket!==bucket)throw new Error('Optimized media bucket differs from manifest');
  const descriptorPath=path.join(optimizedDir,'derivatives.json');
  const descriptors=fs.existsSync(descriptorPath)?JSON.parse(fs.readFileSync(descriptorPath,'utf8')).entries:manifest.optimizedEntries;
  if(!Array.isArray(descriptors)||!descriptors.length)throw new Error('Derivative descriptors or optimizedEntries are required');
  const records=[];
  for(const descriptor of descriptors){
    const original=manifest.entries.find(entry=>entry.sourcePath===descriptor.sourcePath);
    if(!original)throw new Error('Derivative source path is not in the preserved source manifest');
    const file=descriptor.file||descriptor.previewFile;
    if(!file||path.basename(file)!==file||path.extname(file).toLowerCase()!=='.mp4')throw new Error('Derivative must be a local MP4 basename');
    const localPath=path.join(optimizedDir,file);
    const bytes=fs.readFileSync(localPath);
    if(bytes.length>20*1024*1024)throw new Error('Optimized preview exceeds the reviewed size limit');
    const probe=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','stream=codec_name,codec_type,width,height,duration,nb_frames,pix_fmt,r_frame_rate:format=duration','-of','json',localPath],{encoding:'utf8'}));
    const video=probe.streams.find(stream=>stream.codec_type==='video');
    if(!video||video.codec_name!=='h264'||video.pix_fmt!=='yuv420p'||probe.streams.some(stream=>stream.codec_type==='audio'))throw new Error('Derivative must be a silent H264 yuv420p MP4');
    const frames=Number(video.nb_frames);
    const width=video.width,height=video.height;
    if(descriptor.width!==width||descriptor.height!==height||descriptor.frames!==frames)throw new Error('Derivative dimensions or frame count differ from reviewed source');
    const sha256=crypto.createHash('sha256').update(bytes).digest('hex');
    const md5=crypto.createHash('md5').update(bytes).digest('hex');
    const key=`sha256/${sha256.slice(0,2)}/${sha256}.mp4`;
    const record={sourcePath:original.sourcePath,sourceKey:original.key,originalBytes:original.size,file,key,size:bytes.length,sha256,md5,extension:'mp4',contentType:'video/mp4',width,height,frames,originalFrames:descriptor.originalFrames||descriptor.frames,originalDurationSeconds:descriptor.originalDurationSeconds,durationSeconds:Number(video.duration||probe.format.duration),frameCountEquivalent:frames===(descriptor.originalFrames||descriptor.frames),dimensionsEquivalent:true,hasAudio:false,videoCodec:video.codec_name,pixelFormat:video.pix_fmt,rangeSampleHex:bytes.subarray(0,64).toString('hex'),derivationSourcePath:descriptor.derivationSourcePath||original.sourcePath,encoding:descriptor.encoding,sourceSsim:descriptor.sourceSsim};
    try{await s3.send(new PutObjectCommand({Bucket:bucket,Key:key,Body:bytes,ContentLength:bytes.length,ContentType:'video/mp4',ContentMD5:Buffer.from(md5,'hex').toString('base64'),CacheControl:'public, max-age=31536000, immutable',Metadata:{sha256},IfNoneMatch:'*'}));}catch(error){if(error.$metadata?.httpStatusCode!==412)throw error;}
    const head=await s3.send(new HeadObjectCommand({Bucket:bucket,Key:key}));
    if(head.ContentLength!==bytes.length||head.ContentType!=='video/mp4'||head.ETag?.replaceAll('"','')!==md5||head.Metadata?.sha256!==sha256||head.CacheControl!=='public, max-age=31536000, immutable')throw new Error('Optimized upload verification failed');
    records.push(record);
    output({mode:'upload-optimized',sourcePath:record.sourcePath,key,size:record.size,width,height,frames,hasAudio:false});
  }
  const preserved=new Map((manifest.optimizedEntries||[]).map(entry=>[entry.sourcePath,entry]));
  for(const record of records)preserved.set(record.sourcePath,record);
  manifest.optimizedEntries=[...preserved.values()];
  save('asset-manifest.json',manifest);
}

async function verify() {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const expected = new Map([...manifest.entries, ...(manifest.externalEntries || []), ...(manifest.brandingEntries || []), ...(manifest.optimizedEntries || [])].map(entry => [entry.key, entry]));
  const actual = new Map();
  let continuation;
  do {
    const result = await s3.send(new ListObjectsV2Command({ Bucket: bucket, ContinuationToken: continuation, MaxKeys: 1000 }));
    for (const object of result.Contents || []) actual.set(object.Key, object);
    continuation = result.IsTruncated ? result.NextContinuationToken : undefined;
  } while (continuation);
  const missing = [], mismatched = [], unexpected = [];
  for (const [key, entry] of expected) {
    const object = actual.get(key);
    if (!object) missing.push(key);
    else if (object.Size !== entry.size || (entry.md5 && object.ETag?.replaceAll('"', '') !== entry.md5)) mismatched.push({ key, sizeMatches: object.Size === entry.size, md5Matches: object.ETag?.replaceAll('"', '') === entry.md5 });
  }
  for (const key of actual.keys()) if (!expected.has(key)) unexpected.push(key);
  const result = { bucket, revision, expectedObjects: expected.size, actualObjects: actual.size, expectedBytes: [...expected.values()].reduce((sum, entry) => sum + entry.size, 0), actualBytes: [...actual.values()].reduce((sum, entry) => sum + entry.Size, 0), contentMd5Compared: [...expected.values()].every(entry => !!entry.md5), missing, mismatched, unexpected, verifiedAt: new Date().toISOString() };
  save('verification-result.json', result);
  output({ mode:'verify', ...result, missing:missing.length, mismatched:mismatched.length, unexpected:unexpected.length });
  if (missing.length || mismatched.length || unexpected.length) process.exitCode = 1;
}

async function publicVerify() {
  if (!publicBase) throw new Error('public-verify requires --public-base');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const completed = new Set(fs.readFileSync(path.join(stateDir, 'upload-progress.jsonl'), 'utf8').split('\n').filter(Boolean).map(line => JSON.parse(line).key));
  const selected = [...(manifest.externalEntries || []), ...(manifest.optimizedEntries || [])];
  const types = new Set(selected.map(entry => entry.contentType));
  for (const entry of manifest.entries) if (completed.has(entry.key) && !types.has(entry.contentType)) { selected.push(entry); types.add(entry.contentType); }
  const results = [];
  const reader = new GitBatch();
  try {
    for (const entry of selected) {
      const url = (publicBase + '/') + entry.key;
      const head = await fetch(url, { method:'HEAD', signal:AbortSignal.timeout(30000) });
      const result = { key:entry.key, type:entry.contentType, status:head.status, contentType:head.headers.get('content-type'), length:Number(head.headers.get('content-length')), cacheControl:head.headers.get('cache-control') };
      if (head.status !== 200 || result.contentType !== entry.contentType || result.length !== entry.size) throw new Error('Public object headers differ from manifest');
      const ranged = entry.contentType.startsWith('video/') || entry.size > 1024 * 1024;
      const response = await fetch(url, { headers:ranged ? {Range:'bytes=0-63'} : {}, signal:AbortSignal.timeout(30000) });
      const bytes = Buffer.from(await response.arrayBuffer());
      if (ranged) {
        const source = entry.rangeSampleHex ? Buffer.from(entry.rangeSampleHex,'hex') : await reader.read(entry.oid);
        result.rangeStatus = response.status;
        result.contentRange = response.headers.get('content-range');
        result.sampleContentMatches = response.status === 206 && bytes.equals(source.subarray(0,64));
      } else result.sampleContentMatches = response.status === 200 && crypto.createHash('sha256').update(bytes).digest('hex') === entry.sha256;
      if (!result.sampleContentMatches) throw new Error('Public object bytes differ from source');
      if(entry.rangeSampleHex){
        const fullResponse=await fetch(url,{headers:{Origin:'https://sonoran-test.mintlify.app'},signal:AbortSignal.timeout(30000)});
        const fullBytes=Buffer.from(await fullResponse.arrayBuffer());
        result.fullSha256Matches=fullResponse.status===200&&crypto.createHash('sha256').update(fullBytes).digest('hex')===entry.sha256;
        result.allowOrigin=fullResponse.headers.get('access-control-allow-origin');
        if(!result.fullSha256Matches||result.allowOrigin!=='*')throw new Error('Public optimized object content or CORS differs');
      }
      results.push(result);
    }
  } finally { reader.close(); }
  const result = { baseUrl:publicBase, checked:results.length, results, checkedAt:new Date().toISOString() };
  save('public-verification-result.json', result);
  output({ mode:'public-verify', ...result });
}

async function inspect() {
  const result = await s3.send(new ListBucketsCommand({}));
  output({ mode: 'inspect', buckets: result.Buckets.map(b => ({ name: b.Name, created: b.CreationDate })), endpointPath: endpoint.pathname, credentialsSource: envFile || '<process environment>', credentialsPrinted: false });
}

async function create() {
  const result = await s3.send(new ListBucketsCommand({}));
  if (result.Buckets.some(b => b.Name === bucket)) {
    const objects = await s3.send(new ListObjectsV2Command({ Bucket: bucket, MaxKeys: 1 }));
    output({ mode: 'create', bucket, existed: true, empty: objects.KeyCount === 0 });
    return;
  }
  await s3.send(new CreateBucketCommand({ Bucket: bucket }));
  const objects = await s3.send(new ListObjectsV2Command({ Bucket: bucket, MaxKeys: 1 }));
  const state = { bucket, createdFor: 'Sonoran documentation Mintlify migration', createdAt: new Date().toISOString(), emptyAfterCreation: objects.KeyCount === 0, revision };
  if (!state.emptyAfterCreation) throw new Error('New bucket unexpectedly contains objects');
  save('bucket-state.json', state);
  output({ mode: 'create', ...state });
}

async function main() {
  const mode = command;
  if (mode === 'inspect') return inspect();
  if (mode === 'create') return create();
  if (mode === 'inventory') return inventory();
  if (mode === 'upload') return upload();
  if (mode === 'diagnose') return diagnose();
  if (mode === 'verify') return verify();
  if (mode === 'external') return external();
  if (mode === 'public-verify') return publicVerify();
  if (mode === 'priority') return priority();
  if (mode === 'metadata-fix') return metadataFix();
  if (mode === 'cors') return cors();
  if (mode === 'branding') return branding();
  if (mode === 'upload-optimized') return uploadOptimized();
  throw new Error('Unsupported mode');
}
main().catch(error => { output({ error: safeError(error) }); process.exitCode = 1; });
