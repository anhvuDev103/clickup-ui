import { useEffect, useRef } from 'react';

import { Flex } from '../Box';
import Popover from '../Popover';
import { useSelectContext } from './context';
import { SelectContentProps } from './types';

const SelectContent: React.FC<SelectContentProps> = ({ children, paperProps }) => {
  const { id } = useSelectContext();

  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    ref.current = document.getElementById(id);
  }, [id]);

  return (
    <Popover
      reference={ref}
      placement='bottom-start'
      paperProps={{
        py: 2,
        minWidth: 184,
        ...paperProps,
      }}
    >
      <Flex flexDirection='column' width='100%'>
        {children}
      </Flex>
    </Popover>
  );
};

export default SelectContent;
