import { FlexProps } from '@uikit/types';
import { forwardRef } from 'react';

import { SidebarItemFlex, SidebarItemFrame } from './styles';

interface Props extends Omit<FlexProps, 'ref'> {
  to: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: any;
}

const SidebarItem: React.FC<Props> = forwardRef(({ to, children, ...props }, ref: React.Ref<HTMLAnchorElement>) => {
  return (
    <SidebarItemFrame to={to} ref={ref}>
      <SidebarItemFlex {...props}>{children}</SidebarItemFlex>
    </SidebarItemFrame>
  );
});

export default SidebarItem;
