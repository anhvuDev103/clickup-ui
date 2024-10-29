import useModal from '@hooks/useModal';
import { ModalBackdrop, ModalRoot } from '@uikit';

import CreateItems from './CreateItems';

const ModalLookup = {
  CreateItems,
};

export type ModalKey = keyof typeof ModalLookup;

const ModalManager = () => {
  const { modal, close } = useModal();

  if (!modal) return null;

  const MatchedModal = ModalLookup[modal.name];

  return (
    <ModalRoot>
      <ModalBackdrop onClick={close} />
      <MatchedModal close={close} />
    </ModalRoot>
  );
};

export default ModalManager;