import Avatar from '@components/Avatar';
import { LocalStorageKey } from '@constants/localStorage';
import useAppDataProvider from '@hooks/useAppDataProvider';
import { useRootStore } from '@stores/root';
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
import classNames from 'classnames';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProfileSettingsFrame, ProfileSettingsHandler, ProfileSettingsPaper } from './styles';

const ProfileSettings = () => {
  const navigate = useNavigate();
  const { setIsSignedIn } = useRootStore();
  const { user } = useAppDataProvider();

  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const logOut = () => {
    localStorage.removeItem(LocalStorageKey.AccessToken);
    localStorage.removeItem(LocalStorageKey.RefreshToken);

    setIsSignedIn(false);
    navigate('/login');
  };

  if (!user) return null;

  return (
    <ProfileSettingsFrame
      visible={visible}
      onClickOutside={hide}
      handler={
        <ProfileSettingsHandler
          gap={0.5}
          ml='6px'
          onClick={visible ? hide : show}
          className={classNames({ ProfileSettings_visible: visible })}
        >
          <Avatar
            size={20}
            label={user.name}
            borderRadius='full'
            statusColor='backgroundAvatarCutOut'
            statusSize={9}
            online
          />
          <ChevronDownIcon
            width={10}
            height={10}
            mr='2px'
            color='contentOnDark'
            className='ProfileSettings_arrowIcon'
          />
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
          <Avatar size={32} label={user.name} borderRadius='full' online />
          <Flex flexDirection='column' alignItems='flex-start'>
            <Text variant='medium14'>{user.name}</Text>
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
            <DropdownMenu.Sub width='220px'>
              <DropdownMenu.SubTrigger startIcon={<MuteIcon width={16} height={16} color='iconFill' />}>
                Mute notifications
              </DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent label='Mute notifications'>
                <DropdownMenu.Item>For 30 minutes</DropdownMenu.Item>
                <DropdownMenu.Item>For 1 hour</DropdownMenu.Item>
                <DropdownMenu.Item>For 4 hours</DropdownMenu.Item>
                <DropdownMenu.Item>Until tomorrow</DropdownMenu.Item>
                <DropdownMenu.Item>Until next week</DropdownMenu.Item>
                <DropdownMenu.Item>Custom date and time</DropdownMenu.Item>
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
            <DropdownMenu.Item startIcon={<LogoutIcon width={16} height={16} color='iconFill' />} onClick={logOut}>
              Log out
            </DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Root>
      </ProfileSettingsPaper>
    </ProfileSettingsFrame>
  );
};

export default ProfileSettings;
