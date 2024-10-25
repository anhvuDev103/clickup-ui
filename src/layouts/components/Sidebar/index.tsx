import { Divider } from '@uikit';

import Navigator from './Navigator';
import SidebarHead from './SidebarHead';
import Spaces from './Spaces';
import { SidebarFrame } from './styles';

const Sidebar = () => {
  return (
    <SidebarFrame>
      <SidebarHead />
      <Navigator />
      <Divider />
      <Spaces />
    </SidebarFrame>
  );
};

export default Sidebar;
