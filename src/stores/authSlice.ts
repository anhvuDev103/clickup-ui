import { LocalStorageKey } from '@constants/enums';
import _ from 'lodash';
import { StateCreator } from 'zustand';

import { RootStore } from './root';

export interface AuthSlice {
  isSignedIn: boolean;

  setIsSignedIn: (signedIn: boolean) => void;
}

export const createAuthSlice: StateCreator<
  RootStore,
  [['zustand/devtools', never], ['zustand/subscribeWithSelector', never], ['zustand/immer', never]],
  [],
  AuthSlice
> = (set) => {
  let isSignedIn = false;

  const accessToken = localStorage.getItem(LocalStorageKey.AccessToken);
  const refreshToken = localStorage.getItem(LocalStorageKey.RefreshToken);

  isSignedIn = Boolean(accessToken && refreshToken);

  return {
    isSignedIn,

    setIsSignedIn(signedIn) {
      set({
        isSignedIn: signedIn,
      });
    },
  };
};
