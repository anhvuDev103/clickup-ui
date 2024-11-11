import { Flex } from '../Box';
import { SelectTriggerProps } from './types';

const SelectTrigger: React.FC<SelectTriggerProps> = ({ children }) => {
  return <Flex>{children}</Flex>;
};

export default SelectTrigger;
