import { createContext } from 'react';

import { AppDataContextType, ModalContextType, SharedServicesContextType } from './types';

export const SharedServicesContext = createContext<SharedServicesContextType>({
  authService: null,
  usersService: null,
  hierarchyService: null,
});

export const AppDataContext = createContext<AppDataContextType>({
  user: undefined,
});

export const ModalContext = createContext<ModalContextType>({
  modal: null,
  open: () => {},
  close: () => {},
});
