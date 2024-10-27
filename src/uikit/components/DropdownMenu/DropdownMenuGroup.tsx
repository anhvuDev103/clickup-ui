import { Flex } from '../Box';
import { DropdownMenuGroupProps } from './types';

const DropdownMenuGroup: React.FC<DropdownMenuGroupProps> = ({ children, ...props }) => {
  return (
    <Flex flexDirection='column' width='100%' px={2} {...props}>
      {children}
    </Flex>
  );
};

export default DropdownMenuGroup;
