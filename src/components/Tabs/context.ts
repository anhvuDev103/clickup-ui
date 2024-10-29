import { createContext } from 'react';

export interface TabsContextType {
  tab: string | null;
  activateTab: (tab: string) => () => void;
}

export const TabsContext = createContext<TabsContextType>({
  tab: null,
  activateTab: (_tab: string) => () => {},
});
