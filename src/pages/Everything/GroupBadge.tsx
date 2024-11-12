import { GROUP_BY } from '@constants/options';
import { Select, Switch, Text } from '@uikit';
import { GroupIcon } from '@uikit/icons';
import { SelectOption } from '@uikit/types';
import classNames from 'classnames';
import { useState } from 'react';

import { FilterBadge } from './styles';

const GroupBadge = () => {
  const [groupBy, setGroupBy] = useState<SelectOption>();

  return (
    <Select.Root selected={groupBy} onSelect={setGroupBy}>
      <Select.Trigger>
        <FilterBadge
          variant='outlined'
          scale='xs'
          borderRadius='12px'
          startIcon={<GroupIcon width={14} height={14} />}
          className={classNames({ FilterBadge_active: Boolean(groupBy) })}
        >
          Group: {groupBy?.label || 'None'}
        </FilterBadge>
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          {GROUP_BY.map((option) => {
            const OptionIcon = option.icon;
            return (
              <Select.Item option={option} key={option.value}>
                {OptionIcon && <OptionIcon width='16px' height='16px' color='iconFill' mr='10px' />}
                <Text fontSize='14px'>{option.label}</Text>
              </Select.Item>
            );
          })}
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Switch label='Also group by List' />
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default GroupBadge;
