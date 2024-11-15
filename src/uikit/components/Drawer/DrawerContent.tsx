import useClickOutside from '@hooks/useClickOutside';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { useDrawerContext } from './context';
import { DrawerContentFrame } from './styles';
import { DrawerContentProps } from './types';

const DrawerContent: React.FC<DrawerContentProps> = ({ children, ...props }) => {
  const { triggerRef, open, toggleOpen, containerSelector } = useDrawerContext();
  const [container, setContainer] = useState<HTMLElement>();
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, (e) => {
    const isTriggerClicked = triggerRef?.current?.contains(e.target as Node);

    if (!isTriggerClicked) {
      toggleOpen(false);
    }
  });

  useEffect(() => {
    const container = containerSelector
      ? (document.querySelector(containerSelector) as HTMLElement)
      : document.getElementById('root');

    if (container) {
      Object.assign(container.style, {
        position: 'relative',
        overflow: 'hidden',
      });

      setContainer(container);
    }
  }, [containerSelector]);

  if (!container) {
    return null;
  }

  if (typeof children === 'function') {
    return createPortal(
      <DrawerContentFrame
        className={classNames({
          DrawerContent_open: open,
        })}
        ref={ref}
        {...props}
      >
        {children({ close: () => toggleOpen(false) })}
      </DrawerContentFrame>,
      container,
    );
  }

  return createPortal(
    <DrawerContentFrame
      className={classNames({
        DrawerContent_open: open,
      })}
      ref={ref}
      {...props}
    >
      {children}
    </DrawerContentFrame>,
    container,
  );
};

export default DrawerContent;
