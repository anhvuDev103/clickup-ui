import Avatar from '@components/Avatar';
import { Button, DropdownMenu, Flex, Text } from '@uikit';
import { AddReactIcon, ChevronDownIcon } from '@uikit/icons';

import { ProfileSettingsFrame, ProfileSettingsHandler } from './styles';

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
      }}
    >
      <Flex gap={3}>
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
        className='ProfileSettings_addReactBtn'
      >
        Set status
      </Button>
      <DropdownMenu.Root>
        <DropdownMenu.Group>
          <DropdownMenu.Item>Profile</DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>Ahihi</DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <DropdownMenu.Item>Profile0</DropdownMenu.Item>
              <DropdownMenu.Item>Profile1</DropdownMenu.Item>
              <DropdownMenu.Item>Profile2</DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>
          <DropdownMenu.Item>Profile</DropdownMenu.Item>
          <DropdownMenu.Item>Profile</DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Root>
    </ProfileSettingsFrame>
  );
};

export default ProfileSettings;
