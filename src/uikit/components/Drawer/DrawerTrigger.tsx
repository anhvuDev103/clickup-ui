import { Box } from '../Box';
import { useDrawerContext } from './context';
import { DrawerTriggerProps } from './types';

const DrawerTrigger: React.FC<DrawerTriggerProps> = ({ children }) => {
  const { triggerRef, toggleOpen } = useDrawerContext();

  return (
    <Box ref={triggerRef} onClick={() => toggleOpen()}>
      {children}
    </Box>
  );
};

export default DrawerTrigger;
