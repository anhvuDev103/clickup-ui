import { ModalContext as Context } from '@providers/contexts';
import { useContext } from 'react';

const useModal = () => {
  const context = useContext(Context);

  if (!context) throw new Error('Component should be wrapped inside <ModalProvider/>');

  return context;
};

export default useModal;
