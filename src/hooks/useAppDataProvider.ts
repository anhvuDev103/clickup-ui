import { Context } from '@providers/AppDataProvider';
import { useContext } from 'react';

const useAppDataProvider = () => {
  const context = useContext(Context);

  if (!context) throw new Error('Component should be wrapped inside <AppDataProvider/>');

  return context;
};

export default useAppDataProvider;
