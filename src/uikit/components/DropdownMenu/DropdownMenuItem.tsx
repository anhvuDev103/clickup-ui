import { forwardRef } from 'react';

import Text from '../Text';
import { DropdownMenuItemFrame } from './styles';
import { DropdownMenuItemProps } from './types';

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = forwardRef(
  ({ children, startIcon, ...props }, ref: React.Ref<HTMLDivElement>) => {
    return (
      <DropdownMenuItemFrame p={0} width='100%' gap='10px' justifyContent='flex-start' ref={ref} {...props}>
        {startIcon && <div className='DropdownMenuItem_startIcon'>{startIcon}</div>}

        <Text variant='regular14'>{children}</Text>
      </DropdownMenuItemFrame>
    );
  },
);

export default DropdownMenuItem;
