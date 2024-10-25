import Avatar from '@components/Avatar';
import { Button, Flex, Text } from '@uikit';
import { ChevronDownIcon, SidebarToggleIcon } from '@uikit/icons';

const SidebarHead = () => {
  return (
    <Flex className='Sidebar_head' p={2} pl='12px' borderBottom='1px solid' borderBottomColor='borderDefault'>
      <Flex className='Sidebar_workspaceOptions' borderRadius={1.5} p={1} justifyContent='unset'>
        <Avatar label='K' backgroundColor='backgroundAvatarSpace' mr='6px' />
        <Text font='secondary' variant='medium16'>
          Không gian của dân chơi
        </Text>
        <ChevronDownIcon width={10} height={10} ml={1} mr='2px' color='contentSecondary' />
      </Flex>
      <Button variant='text' className='Sidebar_sidebarToggleBtn' square>
        <SidebarToggleIcon color='contentSecondary' />
      </Button>
    </Flex>
  );
};

export default SidebarHead;
