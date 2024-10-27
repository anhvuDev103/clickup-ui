import { Children, isValidElement } from 'react';

import Popover from '../Popover';
import DropdownMenuItem from './DropdownMenuItem';
import { DropdownMenuSubProps } from './types';

const DropdownMenuSub: React.FC<DropdownMenuSubProps> = ({ children }) => {
  const trigger = Children.toArray(children).find(
    (child) => isValidElement(child) && typeof child.type !== 'string' && child.type.name === 'DropdownMenuSubTrigger',
  ) as React.ReactNode;

  const items = Children.toArray(children).find(
    (child) => isValidElement(child) && typeof child.type !== 'string' && child.type.name !== 'DropdownMenuSubTrigger',
  );

  return (
    <Popover placement='auto-start' handler={<DropdownMenuItem>{trigger}</DropdownMenuItem>}>
      {items}
    </Popover>
  );
};

export default DropdownMenuSub;
