import { createContext, useContext } from 'react';

import { SelectContext } from './types';

export const Context = createContext<SelectContext>({
  ref: null,
  select: () => () => {},
});

export const useSelectContext = () => {
  const context = useContext(Context);

  if (!context) throw new Error('Component should be wrapped inside <SelectContext.Provider/>');

  return context;
};
