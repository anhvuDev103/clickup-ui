import { Flex } from '@uikit';
import { FlexProps } from '@uikit/types';
import { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';

import { SidebarItemFlex, SidebarItemFrame } from './styles';

interface Props extends FlexProps {
  to?: string;
}

const SidebarItem = forwardRef<HTMLDivElement, Props>(({ children, to, ...props }, ref) => {
  return (
    <SidebarItemFrame as={to ? NavLink : Flex} to={to} ref={ref}>
      <SidebarItemFlex {...props}>{children}</SidebarItemFlex>
    </SidebarItemFrame>
  );
});

export default SidebarItem;
