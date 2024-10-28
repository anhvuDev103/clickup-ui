import { Flex } from '../Box';
import Text from '../Text';
import { DropdownMenuGroupProps } from './types';

const DropdownMenuGroup: React.FC<DropdownMenuGroupProps> = ({ children, label, ...props }) => {
  return (
    <Flex flexDirection='column' width='100%' px={2} {...props}>
      {label && (
        <Text
          variant='medium12'
          px='16px'
          letterSpacing={0.55}
          lineHeight='11px'
          py={2}
          color='contentDropdownListTitle'
        >
          {label}
        </Text>
      )}
      {children}
    </Flex>
  );
};

export default DropdownMenuGroup;
