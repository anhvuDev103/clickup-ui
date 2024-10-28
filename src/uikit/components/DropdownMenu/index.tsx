import { Flex } from '../Box';
import DropdownMenuGroup from './DropdownMenuGroup';
import DropdownMenuItem from './DropdownMenuItem';
import DropdownMenuSeparator from './DropdownMenuSeparator';
import DropdownMenuSub from './DropdownMenuSub';
import DropdownMenuSubContent from './DropdownMenuSubContent';
import DropdownMenuSubTrigger from './DropdownMenuSubTrigger';
import { DropdownMenuRootProps } from './types';

const DropdownMenuRoot: React.FC<DropdownMenuRootProps> = ({ children, ...props }) => {
  return (
    <Flex flexDirection='column' {...props}>
      {children}
    </Flex>
  );
};

const DropdownMenu = {
  Root: DropdownMenuRoot,
  Item: DropdownMenuItem,
  Group: DropdownMenuGroup,
  Separator: DropdownMenuSeparator,
  Sub: DropdownMenuSub,
  SubTrigger: DropdownMenuSubTrigger,
  SubContent: DropdownMenuSubContent,
};

export default DropdownMenu;
