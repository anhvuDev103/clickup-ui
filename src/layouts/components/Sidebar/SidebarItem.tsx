import { FlexProps } from '@uikit/types';
import { forwardRef } from 'react';

import { SidebarItemFlex, SidebarItemFrame } from './styles';

const SidebarItem = forwardRef<HTMLDivElement, FlexProps>(({ children, ...props }, ref) => {
  return (
    <SidebarItemFrame ref={ref}>
      <SidebarItemFlex {...props}>{children}</SidebarItemFlex>
    </SidebarItemFrame>
  );
});

export default SidebarItem;
