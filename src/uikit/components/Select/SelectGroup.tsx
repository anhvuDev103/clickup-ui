import { Flex } from '../Box';
import { SelectGroupProps } from './types';

const SelectGroup: React.FC<SelectGroupProps> = ({ children }) => {
  return (
    <Flex flexDirection='column' width='100%' alignItems='stretch' px={2}>
      {children}
    </Flex>
  );
};

export default SelectGroup;
