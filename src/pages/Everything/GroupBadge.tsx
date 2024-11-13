import { GROUP_BY, ORDER_BY } from '@constants/options';
import { Button, Flex, Select, Switch, Text } from '@uikit';
import { ChevronDownIcon, GroupIcon, TrashIcon } from '@uikit/icons';
import { SelectOption } from '@uikit/types';
import { delay } from '@utils/common';
import classNames from 'classnames';
import { useState } from 'react';

import { FilterBadge, SelectTrigger } from './styles';

const GroupBadge = () => {
  const [groupBy, setGroupBy] = useState<SelectOption>();
  const [orderBy, setOrderBy] = useState<SelectOption>(ORDER_BY[0]);

  const reset = () => {
    setGroupBy(undefined);
    setOrderBy(ORDER_BY[0]);
  };

  return (
    <Select.Root selected={groupBy} onSelect={setGroupBy} hideOnSelect={false}>
      <Select.Trigger>
        <FilterBadge
          variant='outlined'
          scale='xs'
          borderRadius='12px'
          startIcon={<GroupIcon width={14} height={14} />}
          className={classNames({ FilterBadge_active: !groupBy?.default })}
        >
          Group: {groupBy?.label || 'None'}
        </FilterBadge>
      </Select.Trigger>
      <Select.Content>
        {({ close }) => {
          const clear = async () => {
            close();
            await delay(150);
            reset();
          };

          return (
            <>
              <>
                {groupBy && (
                  <Flex mx={2} gap={2}>
                    <Select.Root selected={groupBy} onSelect={setGroupBy}>
                      <Select.Trigger>
                        {(selected) => {
                          const Icon = selected?.icon;
                          return (
                            <SelectTrigger width='200px'>
                              {Icon && <Icon width='16px' height='16px' color='contentTertiary' mr={2} />}
                              <Text fontSize='14px' mr='auto'>
                                {selected?.label}
                              </Text>
                              <ChevronDownIcon width='16px' height='16px' color='contentPlaceholder' />
                            </SelectTrigger>
                          );
                        }}
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
                    <Select.Root selected={orderBy} onSelect={setOrderBy}>
                      <Select.Trigger>
                        {(selected) => {
                          const Icon = selected?.icon;
                          return (
                            <SelectTrigger width='200px'>
                              {Icon && <Icon width='16px' height='16px' color='contentTertiary' mr={2} />}
                              <Text fontSize='14px' mr='auto'>
                                {selected?.label}
                              </Text>
                              <ChevronDownIcon width='16px' height='16px' color='contentPlaceholder' />
                            </SelectTrigger>
                          );
                        }}
                      </Select.Trigger>
                      <Select.Content>
                        <Select.Group>
                          {ORDER_BY.map((option) => {
                            return (
                              <Select.Item option={option} key={option.value}>
                                <Text fontSize='14px'>{option.label}</Text>
                              </Select.Item>
                            );
                          })}
                        </Select.Group>
                      </Select.Content>
                    </Select.Root>
                    <Button
                      backgroundColorHover='backgroundDangerSubtle'
                      colorHover='contentDanger'
                      variant='text'
                      square
                      onClick={clear}
                    >
                      <TrashIcon width='16px' height='16px' />
                    </Button>
                  </Flex>
                )}
                {!groupBy && (
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
                )}
              </>
              <Select.Separator />
              <Select.Group>
                <Switch label='Also group by List' />
              </Select.Group>
            </>
          );
        }}
      </Select.Content>
    </Select.Root>
  );
};

export default GroupBadge;
