import { Flex } from '../Box';
import Text from '../Text';
import { SelectGroupProps } from './types';

const SelectGroup: React.FC<SelectGroupProps> = ({ children, label }) => {
  return (
    <Flex flexDirection='column' width='100%' alignItems='stretch' px={2}>
      {label && (
        <Text p={2} variant='medium12' color='contentDropdownListTitle'>
          {label}
        </Text>
      )}
      {children}
    </Flex>
  );
};

export default SelectGroup;
