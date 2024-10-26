import { Button, Separator } from '@uikit';
import { HelpIcon, InviteIcon } from '@uikit/icons';

import { SidebarFooterFrame } from './styles';

const SidebarFooter = () => {
  return (
    <SidebarFooterFrame px={2} height={40} mt='auto'>
      <Button
        variant='text'
        scale='sm'
        startIcon={<InviteIcon width={18} height={18} color='contentDefault' />}
        color='contentDefault'
        className='SidebarFooter_actionBtn'
        textVariant='regular14'
        flex={1}
        justifyContent='center'
      >
        Invite
      </Button>
      <Separator />
      <Button
        variant='text'
        scale='sm'
        startIcon={<HelpIcon width={18} height={18} color='contentDefault' />}
        color='contentDefault'
        className='SidebarFooter_actionBtn'
        textVariant='regular14'
        flex={1}
        justifyContent='center'
      >
        Help
      </Button>
    </SidebarFooterFrame>
  );
};

export default SidebarFooter;
