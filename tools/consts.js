import fs from "fs";

let originalConsts;

export function replaceConstsFromEnv() {
  if (!process.env.EXT_VERSION || !process.env.FIREBASE_CONFIG) {
    return;
  }

  originalConsts = fs.readFileSync('src/consts.json').toString();
  const consts = JSON.parse(originalConsts);
  consts.version = process.env.EXT_VERSION;
  consts.firebaseConfig = process.env.FIREBASE_CONFIG;

  if (process.env.DEBUG_PORTAL) {
    consts.portalUrls.push(process.env.DEBUG_PORTAL);
  }

  fs.writeFileSync('src/consts.json', JSON.stringify(consts, null, 4));
}

export function revertConsts() {
  if (!originalConsts) return;
  fs.writeFileSync('src/consts.json', originalConsts);
}
