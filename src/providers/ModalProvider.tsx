import ModalManager, { ModalKey } from '@components/modals';
import { useState } from 'react';

import { ModalContext as Context } from './contexts';
import { ModalContextType } from './types';

interface Props {
  children: React.ReactNode;
}

const ModalProvider: React.FC<Props> = ({ children }) => {
  const [modal, setModal] = useState<ModalContextType['modal']>(null);

  const open = (name: ModalKey, args?: Record<string, unknown>) => {
    setModal({ name, args });
  };

  const close = () => setModal(null);

  return (
    <Context.Provider
      value={{
        modal,
        open,
        close,
      }}
    >
      <ModalManager />
      {children}
    </Context.Provider>
  );
};

export default ModalProvider;
