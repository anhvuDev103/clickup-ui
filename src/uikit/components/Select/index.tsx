import { useEffect, useId, useRef } from 'react';

import { Context as SelectContext } from './context';
import SelectContent from './SelectContent';
import SelectGroup from './SelectGroup';
import SelectItem from './SelectItem';
import SelectSeparator from './SelectSeparator';
import SelectTrigger from './SelectTrigger';
import { SelectOption, SelectRootProps } from './types';

const SelectRoot: React.FC<SelectRootProps> = ({ children, selected, onSelect }) => {
  const id = useId();
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    ref.current = document.getElementById(id);
  }, [id]);

  const select = (option: SelectOption) => () => {
    onSelect(option);

    if (ref.current?._tippy) {
      ref.current._tippy.hide();
    }
  };

  return <SelectContext.Provider value={{ id, selected, select }}>{children}</SelectContext.Provider>;
};

const Select = {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Item: SelectItem,
  Group: SelectGroup,
  Separator: SelectSeparator,
};

export default Select;
