import Tabs from '@components/Tabs';
import { GROUP_BY, ORDER_BY } from '@constants/options';
import { Box, Button, Divider, Flex, Popover, Separator, Text } from '@uikit';
import Select from '@uikit/components/Select';
import Switch from '@uikit/components/Switch';
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
  SubtaskIcon,
  TrashIcon,
} from '@uikit/icons';
import { SelectItem } from '@uikit/types';
import { useState } from 'react';

interface Props {
  isExpandHeader: boolean;
  toggleExpandHeader: () => void;
}

const ViewBarController: React.FC<Props> = ({ isExpandHeader, toggleExpandHeader }) => {
  const [groupBy, setGroupBy] = useState<SelectItem>(GROUP_BY[0]);
  const [orderBy, setOrderBy] = useState<SelectItem>(ORDER_BY[0]);

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
        <Popover
          placement='bottom-start'
          handler={
            <Button
              variant='outlined'
              scale='xs'
              borderRadius='12px'
              borderColor='borderControlTagBorder'
              color='contentControlTag'
              startIcon={<GroupIcon width={14} height={14} />}
            >
              Group: Status
            </Button>
          }
          paperProps={{
            pt: 1,
            pb: 2,
            flexDirection: 'column',
          }}
        >
          <Box p={2}>
            <Text pl={2} pb={2} variant='medium12' color='contentTertiary'>
              Group by
            </Text>
            <Flex gap={2}>
              <Select
                options={GROUP_BY}
                selected={groupBy}
                onSelect={setGroupBy}
                triggerProps={{
                  width: 200,
                }}
              />
              <Select options={ORDER_BY} selected={orderBy} onSelect={setOrderBy} />
              <Button backgroundColorHover='backgroundDangerSubtle' colorHover='contentDanger' variant='text' square>
                <TrashIcon width='16px' height='16px' />
              </Button>
            </Flex>
          </Box>
          <Divider mt={0} />
          <Box px={2} width='100%'>
            <Switch label='Also group by List' />
          </Box>
        </Popover>
        <Button
          variant='outlined'
          scale='xs'
          borderRadius='12px'
          borderColor='borderControlTagBorder'
          color='contentControlTag'
          startIcon={<SubtaskIcon width={14} height={14} />}
        >
          Subtasks: Collapse all
        </Button>
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
