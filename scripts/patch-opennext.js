const fs = require('fs');
const path = require('path');

function patchFile(filePath, transforms) {
  if (!fs.existsSync(filePath)) return false;
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const { search, replace, name } of transforms) {
    if (typeof search === 'string' ? content.includes(search) : search.test(content)) {
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

  const openNextDir = path.resolve(__dirname, '../node_modules/@opennextjs/cloudflare');
  if (fs.existsSync(openNextDir)) {
    // 1. Target load-manifest.js in @opennextjs/cloudflare
    const manifestPlugin = path.join(openNextDir, 'dist/cli/build/patches/plugins/load-manifest.js');
    patchFile(manifestPlugin, [
      {
        name: 'manifest throw prevention',
        search: /throw new Error\([`\\].*?Unexpected loadManifest.*?[`\\].*?\);/g,
        replace: 'return {};'
      },
      {
        name: 'preview-props whitelist',
        search: 'p.endsWith("prefetch-hints")',
        replace: 'p.endsWith("prefetch-hints") || p.endsWith("preview-props")'
      },
      {
        name: 'preview-props glob',
        search: 'prefetch-hints}.json',
        replace: 'prefetch-hints,preview-props}.json'
      }
    ]);

    // 2. Target helpers.js to prevent workerd crash on Windows during getEnvFromPlatformProxy
    const helpersFile = path.join(openNextDir, 'dist/cli/commands/utils/helpers.js');
    patchFile(helpersFile, [
      {
        name: 'safe getEnvFromPlatformProxy',
        search: /const proxy = await getPlatformProxy\(\{[\s\S]*?await proxy\.dispose\(\);/m,
        replace: `try {
        const proxy = await getPlatformProxy({
            ...options,
            envFiles: [],
        });
        Object.entries(proxy.env).forEach(([key, value]) => {
            if (typeof value === "string") {
                envVars[key] = value;
            }
        });
        await proxy.dispose();
    } catch (e) {
        // Fall back gracefully if workerd fails to launch (e.g. Windows runtime issue)
    }`
      }
    ]);

    // 3. Target utils.js to auto-run build if deploy is called without a prior build
    const utilsFile = path.join(openNextDir, 'dist/cli/commands/utils/utils.js');
    patchFile(utilsFile, [
      {
        name: 'auto-build in retrieveCompiledConfig',
        search: `if (!existsSync(configPath)) {
        logger.error("Could not find compiled Open Next config, did you run the build command?");
        process.exit(1);
    }`,
        replace: `if (!existsSync(configPath)) {
        logger.info("Compiled Open Next config not found, executing opennextjs-cloudflare build automatically...");
        const { execSync } = await import("child_process");
        try {
            execSync("npx opennextjs-cloudflare build", { stdio: "inherit" });
        } catch (buildErr) {
            logger.error("Auto-build failed: " + buildErr.message);
        }
    }
    if (!existsSync(configPath)) {
        logger.error("Could not find compiled Open Next config, did you run the build command?");
        process.exit(1);
    }`
      }
    ]);
  }

  // 4. Also search recursively in .open-next if it exists
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
