import { createContext, useContext } from 'react';

import { DrawerContext } from './types';

export const Context = createContext<DrawerContext>({
  triggerRef: null,
  open: false,
  toggleOpen: () => {},
});

export const useDrawerContext = () => {
  const context = useContext(Context);

  if (!context) throw new Error('Component should be wrapped inside <DrawerContext.Provider/>');

  return context;
};
