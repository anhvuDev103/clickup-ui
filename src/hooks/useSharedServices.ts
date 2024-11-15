import { SharedServicesContext as Context } from '@providers/contexts';
import { useContext } from 'react';

const useSharedServices = () => {
  const context = useContext(Context);

  if (!context) throw new Error('Component should be wrapped inside <SharedServicesProvider/>');

  return context;
};

export default useSharedServices;
