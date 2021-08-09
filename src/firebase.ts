import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./consts.json";

import {getFirestore} from "firebase/firestore/lite";
import {getRemoteConfig} from "firebase/remote-config";

const firebaseApp = initializeApp(JSON.parse(atob(firebaseConfig)));
export default firebaseApp;

export const db = getFirestore(firebaseApp);
export const remoteConfig = getRemoteConfig(firebaseApp);


remoteConfig.settings = {
  fetchTimeoutMillis: 3600000,
  minimumFetchIntervalMillis: 600000,
};
