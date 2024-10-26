import { create } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { AuthSlice, createAuthSlice } from './authSlice';
import { createUsersSlice, UsersSlice } from './usersSlice';

export type RootStore = UsersSlice & AuthSlice;

export const useRootStore = create<RootStore>()(
  subscribeWithSelector(
    immer(
      devtools((...args) => {
        return {
          ...createUsersSlice(...args),
          ...createAuthSlice(...args),
        };
      }),
    ),
  ),
);
