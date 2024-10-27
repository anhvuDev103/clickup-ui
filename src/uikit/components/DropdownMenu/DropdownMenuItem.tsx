import { forwardRef } from 'react';

import Text from '../Text';
import { DropdownMenuItemFrame } from './styles';
import { DropdownMenuItemProps } from './types';

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = forwardRef(({ children }, ref: any) => {
  return (
    <DropdownMenuItemFrame width='100%' ref={ref}>
      <Text variant='regular14'>{children}</Text>
    </DropdownMenuItemFrame>
  );
});

export default DropdownMenuItem;
