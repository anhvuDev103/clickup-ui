import { create } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { AuthSlice, createAuthSlice } from './authSlice';
import { createHierarchySlice, HierarchySlice } from './hierarchySlice';
import { createUsersSlice, UsersSlice } from './usersSlice';

export type RootStore = HierarchySlice & UsersSlice & AuthSlice;

export const useRootStore = create<RootStore>()(
  subscribeWithSelector(
    immer(
      devtools((...args) => {
        return {
          ...createHierarchySlice(...args),
          ...createUsersSlice(...args),
          ...createAuthSlice(...args),
        };
      }),
    ),
  ),
);
