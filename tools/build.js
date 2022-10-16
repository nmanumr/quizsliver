import fs from "fs-extra";
import dotenv from 'dotenv';

import rollupBundle from './rollup.js'
import writeManifest from './build-manifest.js';
import {replaceConstsFromEnv, revertConsts} from './consts.js';

dotenv.config();

let outDir = 'dist';

async function build(outDir) {
  // Step 1: ensure that output directory exists
  console.log(`Outputting in directory: ${outDir}`);
  fs.ensureDirSync(outDir);

  // Step 2: replace const (ie firebaseConfig and version) with env values
  replaceConstsFromEnv();

  // Step 3: compile sliver.js and injector.js
  console.log("Compiling sliver.js ...");
  let promises = ['sliver'].map((file) => (
      rollupBundle({
        input: `src/${file}.ts`,
        dest: `${outDir}/${file}.js`,
      })
  ));
  await Promise.all(promises);

  // Step 4: write manifest file
  console.log("Compiling manifest.json ...");
  writeManifest(outDir);

  // Step 5: Copy readme and icons
  console.log("Copying README.md, icons/ ...");
  fs.copySync('README.md', `${outDir}/README.md`);
  fs.copySync('icons', `${outDir}/icons`);

  // Step 6: revert consts.json file
  // only for local builds
  revertConsts();
}


build(outDir);
