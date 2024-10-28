import { Flex } from '../Box';
import Text from '../Text';
import { DropdownMenuGroupProps } from './types';

const DropdownMenuGroup: React.FC<DropdownMenuGroupProps> = ({ children, label, ...props }) => {
  return (
    <Flex flexDirection='column' width='100%' px={2} {...props}>
      {label && (
        <Text
          variant='medium12'
          letterSpacing={0.55}
          lineHeight='11px'
          p={2}
          color='contentDropdownListTitle'
          width='100%'
          textAlign='left'
        >
          {label}
        </Text>
      )}
      {children}
    </Flex>
  );
};

export default DropdownMenuGroup;
