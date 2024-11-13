import _ from 'lodash';
import { Children, cloneElement, isValidElement, useEffect, useRef } from 'react';

import { Context as SelectContext } from './context';
import SelectContent from './SelectContent';
import SelectGroup from './SelectGroup';
import SelectItem from './SelectItem';
import SelectSeparator from './SelectSeparator';
import SelectTrigger from './SelectTrigger';
import { SelectOption, SelectRootProps } from './types';

const SelectRoot: React.FC<SelectRootProps> = ({ children, selected, onSelect, hideOnSelect = true }) => {
  const ref = useRef<HTMLElement | null>(null);

  const select = (option: SelectOption) => () => {
    onSelect(option);

    if (hideOnSelect && ref.current?._tippy) {
      ref.current._tippy.hide();
    }
  };

  const [trigger, content] = _.sortBy(Children.toArray(children), (o) => isValidElement(o) && o.type !== SelectTrigger);

  return (
    <SelectContext.Provider value={{ selected, select, ref }}>
      {cloneElement(content as React.ReactElement, {
        trigger,
      })}
    </SelectContext.Provider>
  );
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
