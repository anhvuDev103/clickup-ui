import { Context } from '@providers/SharedServicesProvider';
import { useContext } from 'react';

const useSharedServicesProvider = () => {
  const context = useContext(Context);

  if (!context) throw new Error('Component should be wrapped inside <SharedServicesProvider/>');

  return context;
};

export default useSharedServicesProvider;
