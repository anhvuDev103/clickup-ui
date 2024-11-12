import Tabs from '@components/Tabs';
import { GROUP_BY, ORDER_BY, SHOW_SUBTASKS_TYPE } from '@constants/options';
import { Button, Flex, Separator, Switch, Text } from '@uikit';
import Select from '@uikit/components/Select';
import {
  AddIcon,
  BoardViewIcon,
  CalendarViewIcon,
  ChevronDownIcon,
  ColumnIcon,
  CustomizeIcon,
  GroupIcon,
  ListViewIcon,
  SearchIcon,
  SettingsIcon,
} from '@uikit/icons';
import { SelectOption } from '@uikit/types';
import classNames from 'classnames';
import { useState } from 'react';

import { FilterBadge } from './styles';

interface Props {
  isExpandHeader: boolean;
  toggleExpandHeader: () => void;
}

const ViewBarController: React.FC<Props> = ({ isExpandHeader, toggleExpandHeader }) => {
  const [groupBy, setGroupBy] = useState<SelectOption>();
  const [orderBy, setOrderBy] = useState<SelectOption>(ORDER_BY[0]);
  const [showSubtasksType, setShowSubtasksType] = useState<SelectOption>(SHOW_SUBTASKS_TYPE[0]);

  return (
    <>
      <Flex
        backgroundColor='backgroundMain'
        width='100%'
        px='48px'
        borderBottom='1px solid'
        borderBottomColor='borderDefault'
        className='Everything_controller'
      >
        <Flex justifyContent='flex-start'>
          <Tabs.List>
            <Tabs.Trigger value='list'>
              <Button variant='text' scale='sm' startIcon={<ListViewIcon />}>
                List
              </Button>
            </Tabs.Trigger>

            <Tabs.Trigger value='board'>
              <Button variant='text' scale='sm' startIcon={<BoardViewIcon />}>
                Board
              </Button>
            </Tabs.Trigger>

            <Tabs.Trigger value='calendar'>
              <Button variant='text' scale='sm' startIcon={<CalendarViewIcon />}>
                Calendar
              </Button>
            </Tabs.Trigger>
          </Tabs.List>

          <Separator ml='12px' mr={2} />
          <Button variant='text' scale='sm' startIcon={<AddIcon width={16} height={16} />}>
            View
          </Button>
        </Flex>
        <Flex>
          <Button variant='text' scale='sm' startIcon={<SearchIcon width={16} height={16} />}>
            Search
          </Button>
          <Button variant='text' scale='sm' startIcon={<CustomizeIcon width={16} height={16} />}>
            Hide
          </Button>
          <Button variant='text' scale='sm' startIcon={<SettingsIcon width={16} height={16} />}>
            Customize
          </Button>
          <Separator mr='6px' />
          <Button scale='xs'>Add Task</Button>
          <Button
            variant='text'
            scale='xs'
            circle
            backgroundColor='backgroundOnMain'
            backgroundColorHover='backgroundOnMainHover'
            ml='12px'
            label={isExpandHeader ? 'Collapse header' : 'Expand header'}
            labelPlacement={isExpandHeader ? 'top' : 'left'}
            onClick={toggleExpandHeader}
          >
            <ChevronDownIcon width={16} height={16} color='contentTertiary' className='Everything_arrowIcon' />
          </Button>
        </Flex>
      </Flex>
      <Flex
        backgroundColor='backgroundMain'
        px='48px'
        height={40}
        gap={1}
        justifyContent='flex-start'
        className='Everything_viewSettings'
      >
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
        <Select.Root selected={showSubtasksType} onSelect={setShowSubtasksType}>
          <Select.Trigger>
            <FilterBadge
              variant='outlined'
              scale='xs'
              borderRadius='12px'
              startIcon={<GroupIcon width={14} height={14} />}
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
        <Button
          variant='outlined'
          scale='xs'
          borderRadius='12px'
          borderColor='borderControlTagBorder'
          color='contentControlTag'
          startIcon={<ColumnIcon width={14} height={14} />}
        >
          Columns
        </Button>
      </Flex>
    </>
  );
};

export default ViewBarController;
