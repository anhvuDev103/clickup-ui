import DropdownMenuGroup from './DropdownMenuGroup';
import { DropdownMenuSubContentProps } from './types';

const DropdownMenuSubContent: React.FC<DropdownMenuSubContentProps> = ({ children, ...props }) => {
  return (
    <DropdownMenuGroup px={2} {...props}>
      {children}
    </DropdownMenuGroup>
  );
};

export default DropdownMenuSubContent;
