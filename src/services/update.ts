import {version} from "../consts.json";
import {remoteConfig} from '../firebase';
import { fetchAndActivate, getString } from "firebase/remote-config";

export class UpdateService {
  public async checkForUpdate(): Promise<string | null> {
    await fetchAndActivate(remoteConfig);
    let latestVersion = getString(remoteConfig, "currentVersion");
    if (version < latestVersion)
      return latestVersion;

    return null;
  }
}

export default new UpdateService();
