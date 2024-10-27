import { Flex } from '../Box';
import { DropdownMenuSubTriggerProps } from './types';

const DropdownMenuSubTrigger: React.FC<DropdownMenuSubTriggerProps> = ({ children }) => {
  return (
    <Flex flexDirection='column' width='100%'>
      {children}
    </Flex>
  );
};

export default DropdownMenuSubTrigger;
