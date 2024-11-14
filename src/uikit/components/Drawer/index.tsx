import useToggle from '@hooks/useToggle';
import { useRef } from 'react';

import { Context as DrawerContext } from './context';
import DrawerContent from './DrawerContent';
import DrawerTrigger from './DrawerTrigger';
import { DrawerRootProps } from './types';

const DrawerRoot: React.FC<DrawerRootProps> = ({ children, containerSelector }) => {
  const [open, toggleOpen] = useToggle();
  const triggerRef = useRef<HTMLDivElement>(null);

  return (
    <DrawerContext.Provider value={{ triggerRef, open, toggleOpen, containerSelector }}>
      {children}
    </DrawerContext.Provider>
  );
};

const Drawer = {
  Root: DrawerRoot,
  Trigger: DrawerTrigger,
  Content: DrawerContent,
};

export default Drawer;
