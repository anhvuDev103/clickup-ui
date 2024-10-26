import _ from 'lodash';
import { StateCreator } from 'zustand';

import { RootStore } from './root';

export interface AuthSlice {
  accessToken: string;
  refreshToken: string;

  setTokens: (payload: { accessToken: string; refreshToken: string }) => void;
}

export const createAuthSlice: StateCreator<
  RootStore,
  [['zustand/devtools', never], ['zustand/subscribeWithSelector', never], ['zustand/immer', never]],
  [],
  AuthSlice
> = (set) => {
  return {
    accessToken: '',
    refreshToken: '',

    setTokens({ accessToken, refreshToken }) {
      set({
        accessToken,
        refreshToken,
      });
    },
  };
};
