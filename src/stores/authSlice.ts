import { LocalStorageKey } from '@constants/localStorage';
import { jwtDecode } from 'jwt-decode';
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

  const now = Math.floor(new Date().getTime() / 1000);
  const accessToken = localStorage.getItem(LocalStorageKey.AccessToken);

  if (accessToken) {
    const decodedToken = jwtDecode(accessToken!);

    isSignedIn = decodedToken.exp! > now;
  }

  return {
    isSignedIn,

    setIsSignedIn(signedIn) {
      set({
        isSignedIn: signedIn,
      });
    },
  };
};
