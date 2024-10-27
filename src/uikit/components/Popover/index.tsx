import Tippy from '@tippyjs/react/headless';

import Paper from '../Paper';
import { Props } from './types';

const Popover: React.FC<Props> = ({ handler, children, paperProps, ...props }) => {
  return (
    <Tippy
      render={(attrs) => (
        <Paper boxShadow='0 1px 10px 0 rgba(0, 0, 0, .25)' borderRadius={6} tabIndex={-1} {...paperProps} {...attrs}>
          {children}
        </Paper>
      )}
      trigger='click'
      interactive
      {...props}
    >
      {handler}
    </Tippy>
  );
};

export default Popover;
