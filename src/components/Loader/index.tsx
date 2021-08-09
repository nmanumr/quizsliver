import { h } from 'preact';
import {useEffect, useState} from 'preact/hooks';

import {Loader as Loader_} from './styles';
import Spinner from '../Spinner';
import {_app$} from "../../@types";
import { CheckIcon, XIcon } from '@heroicons/react/outline'

export enum LoaderState {
  Loading = "loading",
  Error = "error",
  Success = "success"
}

export interface Globals {
  updateLoaderState: (state: LoaderState, message: string) => void;
}

let icons: Record<LoaderState, any> = {
  [LoaderState.Loading]: <Spinner/>,
  [LoaderState.Success]: <CheckIcon style={{width: '16px', height: '16px'}} />,
  [LoaderState.Error]: <XIcon style={{width: '16px', height: '16px'}} />,
};

export default function Loader() {
  const [state, setState] = useState(LoaderState.Loading);
  const [message, setMessage] = useState("");
  const [isExpanded, setExpand] = useState(true);
  const [interval, setIntervalVal] = useState<number>();

  window[_app$].updateLoaderState = (state: LoaderState, message: string) => {
    setState(state);
    setMessage(message);
    setExpand(true);

    setIntervalVal((interval) => {
      if (interval) {
        clearInterval(interval);
      }

      return window.setInterval(() => setExpand(false), 3000);
    })
  };

  useEffect(() => {
    setInterval(() => setExpand(false), 5000);
  }, []);

  return (
    <Loader_ state={state} expanded={isExpanded}>
      {icons[state]}
      <span className="message">{message}</span>
    </Loader_>
  )
}
