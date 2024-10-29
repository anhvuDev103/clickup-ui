import Tabs from '@components/Tabs';
import Page from '@layouts/components/Page';
import { Button, Flex, Separator, Text } from '@uikit';
import {
  AddIcon,
  BoardViewIcon,
  CalendarViewIcon,
  ChevronDownIcon,
  CustomizeIcon,
  ListViewIcon,
  SearchIcon,
  SettingsIcon,
} from '@uikit/icons';

import ViewBarController from './ViewBarController';

const Everything = () => {
  return (
    <Page
      heading={
        <Flex pl={2} height='100%'>
          <Text variant='medium14'>Everything</Text>
        </Flex>
      }
    >
      <Tabs.Root defaultValue='list'>
        <Flex pl='16px' pr='12px' borderBottom='1px solid' borderBottomColor='borderDefault'>
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
              label='Expand header'
              labelPlacement='left'
            >
              <ChevronDownIcon width={16} height={16} color='contentTertiary' />
            </Button>
          </Flex>
        </Flex>

        <Tabs.Content value='list'>LIST</Tabs.Content>
        <Tabs.Content value='board'>BOARD</Tabs.Content>
        <Tabs.Content value='calendar'>CALENDAR</Tabs.Content>
      </Tabs.Root>
      <ViewBarController />
    </Page>
  );
};

export default Everything;
