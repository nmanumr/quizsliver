import {Globals as LoaderGlobals} from "../components/Loader";
import {_app$} from "./index";

declare global {
  interface Window {
    [_app$]: LoaderGlobals;
  }
}
