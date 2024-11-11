import { Flex } from '../Box';
import { SelectContentProps } from './types';

const SelectContent: React.FC<SelectContentProps> = ({ children }) => {
  return <Flex flexDirection='column'>{children}</Flex>;
};

export default SelectContent;
