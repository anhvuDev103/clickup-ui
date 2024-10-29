import { useState } from 'react';

import { TabsContext as Context } from './context';
import TabsContent from './TabsContent';
import TabsList from './TabsList';
import TabsTrigger from './TabsTrigger';

interface Props {
  defaultValue: string;
  children: React.ReactNode;
}

const TabsRoot: React.FC<Props> = ({ defaultValue, children }) => {
  const [tab, setTab] = useState(defaultValue);
  console.log('>> Check | tab:', tab);

  const activateTab = (tab: string) => () => {
    setTab(tab);
  };

  return (
    <Context.Provider
      value={{
        tab,
        activateTab,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
};

export default Tabs;
