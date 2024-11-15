import { Workspace } from '@schemas/responses/users';
import _ from 'lodash';
import { StateCreator } from 'zustand';

import { RootStore } from './root';

export interface HierarchySlice {
  workspace: Workspace | null;
  workspaces: Workspace[];

  setWorkspace: (payload: Workspace) => void;
}

export const createHierarchySlice: StateCreator<
  RootStore,
  [['zustand/devtools', never], ['zustand/subscribeWithSelector', never], ['zustand/immer', never]],
  [],
  HierarchySlice
> = (set) => {
  return {
    workspace: null,
    workspaces: [],

    setWorkspace(payload) {
      set({ workspace: payload });
    },
  };
};
