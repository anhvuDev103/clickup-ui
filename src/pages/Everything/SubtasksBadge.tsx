import { SHOW_SUBTASKS_TYPE } from '@constants/options';
import { Flex, Select, Text } from '@uikit';
import { SubtaskIcon } from '@uikit/icons';
import { SelectOption } from '@uikit/types';
import classNames from 'classnames';
import { useState } from 'react';

import { FilterBadge } from './styles';

const SubtasksBadge = () => {
  const [showSubtasksType, setShowSubtasksType] = useState<SelectOption>(SHOW_SUBTASKS_TYPE[0]);

  return (
    <Select.Root selected={showSubtasksType} onSelect={setShowSubtasksType}>
      <Select.Trigger>
        <FilterBadge
          variant='outlined'
          scale='xs'
          borderRadius='12px'
          startIcon={<SubtaskIcon width={14} height={14} />}
          className={classNames({ FilterBadge_active: !showSubtasksType?.default })}
        >
          Subtasks: {showSubtasksType.label}
        </FilterBadge>
      </Select.Trigger>
      <Select.Content>
        <Select.Group label='Show subtasks'>
          {SHOW_SUBTASKS_TYPE.map((option) => {
            return (
              <Select.Item option={option} key={option.value}>
                <Flex flexDirection='column' alignItems='flex-start' gap={2}>
                  <Flex gap={1} alignItems='baseline'>
                    <Text fontSize='14px'>{option.label}</Text>
                    {option.note && (
                      <Text fontSize='12px' color='contentPlaceholder'>
                        {option.note}
                      </Text>
                    )}
                  </Flex>
                  {option.describe && (
                    <Text fontSize='11px' color='contentPlaceholder'>
                      {option.describe}
                    </Text>
                  )}
                </Flex>
              </Select.Item>
            );
          })}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default SubtasksBadge;
