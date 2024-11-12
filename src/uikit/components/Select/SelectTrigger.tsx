import { cloneElement } from 'react';

import { Flex } from '../Box';
import { useSelectContext } from './context';
import { SelectTriggerProps } from './types';

const SelectTrigger: React.FC<SelectTriggerProps> = ({ children }) => {
  const { id } = useSelectContext();

  return (
    <Flex>
      {cloneElement(children as React.ReactElement, {
        id,
      })}
    </Flex>
  );
};

export default SelectTrigger;
