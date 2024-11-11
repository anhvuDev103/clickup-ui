import { SelectItemFrame } from './styles';
import { SelectItemProps } from './types';

const SelectItem: React.FC<SelectItemProps> = ({ children, ...props }) => {
  return <SelectItemFrame {...props}>{children}</SelectItemFrame>;
};

export default SelectItem;
