import Avatar from '@components/Avatar';
import { Button, DropdownMenu, Flex, Text } from '@uikit';
import {
  AddReactIcon,
  BrushIcon,
  ChevronDownIcon,
  ClickappIcon,
  CommandIcon,
  HelpIcon,
  LogoutIcon,
  MuteIcon,
  NotificationsIcon,
  RewardIcon,
  SettingsIcon,
  TrashIcon,
  UserIcon,
} from '@uikit/icons';

import { ProfileSettingsFrame, ProfileSettingsHandler, ProfileSettingsPaper } from './styles';

const ProfileSettings = () => {
  return (
    <ProfileSettingsFrame
      handler={
        <ProfileSettingsHandler gap={0.5} ml='6px'>
          <Avatar size={20} label='Vu Duc Anh' borderRadius='full' online />
          <ChevronDownIcon width={10} height={10} mr='2px' color='contentOnDark' />
        </ProfileSettingsHandler>
      }
      paperProps={{
        flexDirection: 'column',
        alignItems: 'stretch',
        width: 280,
        py: 2,
      }}
    >
      <ProfileSettingsPaper flexDirection='column' alignItems='stretch'>
        <Flex gap={3} py={2} px='16px' justifyContent='unset'>
          <Avatar size={32} label='Vu Duc Anh' borderRadius='full' />
          <Flex flexDirection='column' alignItems='flex-start'>
            <Text variant='medium14'>Vũ Đức Anh</Text>
            <Text variant='regular12' color='contentTertiary'>
              Online
            </Text>
          </Flex>
        </Flex>
        <Button
          variant='outlined'
          color='contentPlaceholder'
          startIcon={<AddReactIcon width={16} height={16} color='contentPlaceholder' />}
          textVariant='regular14'
          justifyContent='flex-start'
          flexShrink={0}
          mx={2}
          className='ProfileSettings_addReactBtn'
        >
          Set status
        </Button>
        <DropdownMenu.Root my={2}>
          <DropdownMenu.Group>
            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger startIcon={<MuteIcon width={16} height={16} color='iconFill' />}>
                Mute notifications
              </DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent label='Mute notifications'>
                <DropdownMenu.Item>Profile0</DropdownMenu.Item>
                <DropdownMenu.Item>Profile1</DropdownMenu.Item>
                <DropdownMenu.Item>Profile2</DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            <DropdownMenu.Item startIcon={<UserIcon width={16} height={16} color='iconFill' />}>
              Profile
            </DropdownMenu.Item>
            <DropdownMenu.Item startIcon={<BrushIcon width={16} height={16} color='iconFill' />}>
              Themes
            </DropdownMenu.Item>
            <DropdownMenu.Item startIcon={<SettingsIcon width={16} height={16} color='iconFill' />}>
              Settings
            </DropdownMenu.Item>
            <DropdownMenu.Item startIcon={<NotificationsIcon width={16} height={16} color='iconFill' />}>
              Notifications
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            <DropdownMenu.Item startIcon={<CommandIcon width={16} height={16} color='iconFill' />}>
              Keyboard shortcuts
            </DropdownMenu.Item>
            <DropdownMenu.Item startIcon={<ClickappIcon width={16} height={16} color='iconFill' />}>
              Download apps
            </DropdownMenu.Item>
            <DropdownMenu.Item startIcon={<RewardIcon width={16} height={16} color='iconFill' />}>
              Referrals
            </DropdownMenu.Item>
            <DropdownMenu.Item startIcon={<HelpIcon width={16} height={16} color='iconFill' />}>Help</DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            <DropdownMenu.Item startIcon={<TrashIcon width={16} height={16} color='iconFill' />}>
              Trash
            </DropdownMenu.Item>
            <DropdownMenu.Item startIcon={<LogoutIcon width={16} height={16} color='iconFill' />}>
              Log out
            </DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Root>
      </ProfileSettingsPaper>
    </ProfileSettingsFrame>
  );
};

export default ProfileSettings;
