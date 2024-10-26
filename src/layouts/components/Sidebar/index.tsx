import { Divider, Flex } from '@uikit';

import Navigator from './Navigator';
import SidebarFooter from './SidebarFooter';
import SidebarHead from './SidebarHead';
import Spaces from './Spaces';
import { SidebarFrame } from './styles';

const Sidebar = () => {
  return (
    <SidebarFrame flexDirection='column' alignItems='stretch' justifyContent='unset'>
      <SidebarHead />
      <Flex flexDirection='column' alignItems='stretch' justifyContent='unset' className='Sidebar_scrollable'>
        <Navigator />
        <Divider />
        <Spaces />
      </Flex>
      <SidebarFooter />
    </SidebarFrame>
  );
};

export default Sidebar;
