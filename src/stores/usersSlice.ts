import { GetProfileResponse, GetProfileResult, Workspace } from '@schemas/responses/users';
import _ from 'lodash';
import { StateCreator } from 'zustand';

import { RootStore } from './root';

interface User {
  _id: string;
  name: string;
  email: string;
  description: string;
  workspaces: Workspace[];
}

export interface UsersSlice {
  profile: Omit<User, 'workspaces'> | null;
  setProfile: (payload: GetProfileResult) => void;
}

export const createUsersSlice: StateCreator<
  RootStore,
  [['zustand/devtools', never], ['zustand/subscribeWithSelector', never], ['zustand/immer', never]],
  [],
  UsersSlice
> = (set) => {
  return {
    profile: null,

    setProfile({ workspaces, ...payload }) {
      set({
        profile: payload,
        workspaces: workspaces,
        workspace: workspaces[0],
      });
    },
  };
};
