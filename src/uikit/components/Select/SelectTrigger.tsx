import { Flex } from '../Box';
import { useSelectContext } from './context';
import { SelectTriggerProps } from './types';

const SelectTrigger: React.FC<SelectTriggerProps> = ({ children }) => {
  const { selected } = useSelectContext();

  if (typeof children === 'function') {
    return <Flex>{children(selected)}</Flex>;
  }

  return <Flex>{children}</Flex>;
};

export default SelectTrigger;
