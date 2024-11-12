import Tippy from '@tippyjs/react/headless';
import { useSpring } from 'framer-motion';
import { forwardRef } from 'react';

import { MotionPaper } from '../Paper';
import { Props } from './types';

const Popover = forwardRef<React.ElementRef<typeof Tippy>, Props>(
  ({ handler, children, paperProps, ...props }, ref) => {
    const springConfig = { damping: 15, stiffness: 300 };
    const initialScale = 0.9;
    const opacity = useSpring(0, springConfig);
    const scale = useSpring(initialScale, springConfig);

    function onMount() {
      scale.set(1);
      opacity.set(1);
    }

    function onHide({ unmount }: { unmount: () => void }) {
      const cleanup = scale.onChange((value) => {
        if (value <= initialScale) {
          cleanup();
          unmount();
        }
      });

      scale.set(initialScale);
      opacity.set(0);
    }

    return (
      <Tippy
        ref={ref}
        render={(attrs) => (
          <MotionPaper
            boxShadow='0 1px 10px 0 rgba(0, 0, 0, .25)'
            borderRadius={6}
            tabIndex={-1}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            style={{ scale, opacity } as any}
            {...paperProps}
            {...attrs}
          >
            {children}
          </MotionPaper>
        )}
        animation={true}
        onMount={onMount}
        onHide={onHide}
        trigger={props.visible === undefined ? 'click' : undefined}
        interactive
        {...props}
      >
        {handler}
      </Tippy>
    );
  },
);

export default Popover;
