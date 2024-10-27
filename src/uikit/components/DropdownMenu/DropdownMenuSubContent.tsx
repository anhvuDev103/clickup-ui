import DropdownMenuGroup from './DropdownMenuGroup';
import { DropdownMenuSubContentProps } from './types';

const DropdownMenuSubContent: React.FC<DropdownMenuSubContentProps> = ({ children }) => {
  return <DropdownMenuGroup py={2}>{children}</DropdownMenuGroup>;
};

export default DropdownMenuSubContent;
