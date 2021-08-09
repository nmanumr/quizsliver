import * as fs from 'fs';
import * as path from 'path';

export default function writeManifest(outDir) {
  const consts = JSON.parse(fs.readFileSync('src/consts.json').toString());

  let manifest = {
    name: consts.name,
    version: consts.version,
    description: consts.description,
    manifest_version: 2,
    content_security_policy: consts.content_security_policy,
    icons: Object.fromEntries([16, 48, 128].map((s) => [s, `${consts.iconsDir}/icon${s}.png`])),
    permissions: [
      ...consts.services,
      ...consts.portalUrls,
      ...consts.externalUrls,
    ],
    content_scripts: [{
      matches: [...consts.portalUrls],
      js: ['injector.js']
    }],
    web_accessible_resources: ['sliver.js'],
  }

  fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 4));
}
