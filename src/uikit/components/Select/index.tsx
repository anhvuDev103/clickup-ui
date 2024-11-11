import { Children } from 'react';

import Popover from '../Popover';
import SelectContent from './SelectContent';
import SelectGroup from './SelectGroup';
import SelectItem from './SelectItem';
import SelectSeparator from './SelectSeparator';
import SelectTrigger from './SelectTrigger';
import { SelectRootProps } from './types';

const SelectRoot: React.FC<SelectRootProps> = ({ children, paperProps, defaultValue }) => {
  const [selectTrigger, selectContent] = Children.toArray(children);

  return (
    <Popover
      placement='bottom-start'
      handler={<div>{selectTrigger}</div>}
      paperProps={{
        py: 2,
        ...paperProps,
      }}
    >
      {selectContent}
    </Popover>
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
