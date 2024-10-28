import ModalManager, { ModalKey } from '@components/modals';
import { createContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

type Modal = {
  name: ModalKey;
  args: Record<string, unknown>;
};

interface ModalContext {
  modal: Modal | null;
  open: (name: ModalKey, args: Record<string, unknown>) => void;
  close: () => void;
}

export const Context = createContext<ModalContext>({
  modal: null,
  open: () => {},
  close: () => {},
});

const ModalProvider: React.FC<Props> = ({ children }) => {
  const [modal, setModal] = useState<ModalContext['modal']>(null);

  const open = (name: ModalKey, args: Record<string, unknown>) => {
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
