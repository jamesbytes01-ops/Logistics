const fs = require('fs');
const path = require('path');

function patchFile(filePath, transforms) {
  if (!fs.existsSync(filePath)) return false;
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const { search, replace, name } of transforms) {
    if (content.includes(search)) {
      content = content.replace(search, replace);
      changed = true;
      console.log(`[patch-opennext] Applied ${name} in ${filePath}`);
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

function run() {
  console.log('[patch-opennext] Checking for OpenNext files to patch...');

  // 1. Target load-manifest.js in @opennextjs/cloudflare
  const openNextDir = path.resolve(__dirname, '../node_modules/@opennextjs/cloudflare');
  if (fs.existsSync(openNextDir)) {
    const manifestPlugin = path.join(openNextDir, 'dist/cli/build/patches/plugins/load-manifest.js');
    if (fs.existsSync(manifestPlugin)) {
      let content = fs.readFileSync(manifestPlugin, 'utf8');
      let changed = false;

      // 1. Prevent throwing on missing manifests (return {} instead)
      if (content.includes('Unexpected loadManifest')) {
        content = content.replace(/throw new Error\([`\\].*?Unexpected loadManifest.*?[`\\].*?\);/g, 'return {};');
        changed = true;
        console.log('[patch-opennext] Replaced Unexpected loadManifest throw with return {};');
      }

      // 2. Add preview-props to manifest whitelist
      if (content.includes('prefetch-hints') && !content.includes('preview-props')) {
        content = content.replace('p.endsWith("prefetch-hints")', 'p.endsWith("prefetch-hints") || p.endsWith("preview-props")');
        content = content.replace('prefetch-hints}.json', 'prefetch-hints,preview-props}.json');
        changed = true;
        console.log('[patch-opennext] Added preview-props to manifest whitelist');
      }

      if (changed) {
        fs.writeFileSync(manifestPlugin, content, 'utf8');
      }
    }
  }

  // 2. Also search recursively in .open-next if it exists
  const dotOpenNext = path.resolve(__dirname, '../.open-next');
  if (fs.existsSync(dotOpenNext)) {
    function scanDir(dir) {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          scanDir(full);
        } else if (entry.name.endsWith('.js') || entry.name.endsWith('.mjs')) {
          patchFile(full, [
            {
              name: 'compiled loadManifest throw prevention',
              search: 'throw new Error(`Unexpected loadManifest(${path',
              replace: 'return {}; // throw new Error(`Unexpected loadManifest(${path'
            }
          ]);
        }
      }
    }
    scanDir(dotOpenNext);
  }

  console.log('[patch-opennext] Patching completed successfully.');
}

try {
  run();
} catch (err) {
  console.warn('[patch-opennext] Warning during patch:', err.message);
}
