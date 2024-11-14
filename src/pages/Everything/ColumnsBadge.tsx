import { Button, Drawer, Flex, Text } from '@uikit';
import Input from '@uikit/components/Input';
import { ArrowLeftIcon, CloseIcon, ColumnIcon, SearchIcon } from '@uikit/icons';

const ColumnsBadge = () => {
  return (
    <Drawer.Root containerSelector='.Page_body'>
      <Drawer.Trigger>
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
      </Drawer.Trigger>
      <Drawer.Content px={0} py='12px'>
        <Flex width='100%' height='100%' column justifyContent='flex-start'>
          <Flex pr='12px' pb={2} pl='16px' gap={2}>
            <Button scale='xs' variant='text' square>
              <ArrowLeftIcon width='16px' height='16px' color='contentButton' />
            </Button>
            <Text variant='semi16'>Fields</Text>
            <Button variant='text' square ml='auto'>
              <CloseIcon width='16px' height='16px' color='contentButton' />
            </Button>
          </Flex>
          <Flex column px='12px'>
            <Input
              borderRadius='6px'
              startIcon={<SearchIcon width='16px' height='16px' color='contentIcon' />}
              inputProps={{
                placeholder: 'Search...',
              }}
            />
            <Flex column>
              <Flex py={2}>
                <Button variant='text' scale='xxs' height='16px' backgroundColorHover='transparent'>
                  Shown
                </Button>
                <Button variant='text' scale='xxs' height='16px' backgroundColorHover='transparent'>
                  Hide all
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Drawer.Content>
    </Drawer.Root>
  );
};

export default ColumnsBadge;
