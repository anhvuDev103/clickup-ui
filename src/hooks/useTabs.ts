import { TabsContext as Context } from '@components/Tabs/context';
import { useContext } from 'react';

const useTabs = () => {
  const context = useContext(Context);

  if (!context) throw new Error('Component should be wrapped inside <ModalProvider/>');

  return context;
};

export default useTabs;
