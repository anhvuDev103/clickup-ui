import Avatar from '@components/Avatar';
import useAppData from '@hooks/useAppData';
import { Button, Flex, Text } from '@uikit';
import { ChevronDownIcon, SidebarToggleIcon } from '@uikit/icons';

const SidebarHead = () => {
  const { user } = useAppData();

  if (!user) {
    return null;
  }

  const selectedWorkspace = user.workspaces[0];

  return (
    <Flex className='Sidebar_head' p={2} pl='12px' borderBottom='1px solid' borderBottomColor='borderDefault'>
      <Flex className='Sidebar_workspaceOptions' borderRadius={1.5} p={1} justifyContent='unset'>
        <Avatar label={selectedWorkspace.name} backgroundColor='backgroundAvatarSpace' mr='6px' />
        <Text font='secondary' variant='medium16'>
          {selectedWorkspace.name}
        </Text>
        <ChevronDownIcon width={10} height={10} ml={1} mr='2px' color='contentSecondary' />
      </Flex>
      <Button variant='text' className='Sidebar_sidebarToggleBtn' square>
        <SidebarToggleIcon width={20} height={20} color='contentSecondary' />
      </Button>
    </Flex>
  );
};

export default SidebarHead;
