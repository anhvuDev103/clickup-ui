import _ from 'lodash';
import { StateCreator } from 'zustand';

import { RootStore } from './root';

interface User {
  id: string;
  name: string;
  email: string;
  description: string;
}

export interface UsersSlice extends User {
  setUser: (payload: Partial<User>) => void;
}

export const createUsersSlice: StateCreator<
  RootStore,
  [['zustand/devtools', never], ['zustand/subscribeWithSelector', never], ['zustand/immer', never]],
  [],
  UsersSlice
> = (set, get) => {
  return {
    id: '',
    name: '',
    email: '',
    description: '',

    setUser(payload) {
      set(_.merge({}, _.pick(get(), ['id', 'name', 'email', 'description']), payload));
    },
  };
};
