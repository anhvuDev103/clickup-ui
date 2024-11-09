import useModal from '@hooks/useModal';
import { Button, Modal } from '@uikit';
import { ModalProps } from '@uikit/types';

const CreateItems: React.FC<ModalProps> = ({ label, close: _ }) => {
  const { modal } = useModal();
  console.log('>> Check | modal:', modal);
  return (
    <Modal>
      <Button>Click me to close [{label}]</Button>
    </Modal>
  );
};

export default CreateItems;
