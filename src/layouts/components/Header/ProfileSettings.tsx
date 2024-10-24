import { Flex } from '@uikit';
import { ChevronDownIcon } from '@uikit/components/Svg';
import styled from 'styled-components';

import Avatar from './Avatar';

const ProfileSettings = () => {
  return (
    <ProfileSettingsFrame gap={0.5} ml='6px'>
      <Avatar username='Vu Duc Anh' />
      <ChevronDownIcon width={10} height={10} mr='2px' color='contentOnDark' />
    </ProfileSettingsFrame>
  );
};

const ProfileSettingsFrame = styled(Flex)`
  height: 32px;
  border-radius: ${({ theme }) => theme.radii.full + 'px'};
  background-color: ${({ theme }) => theme.colors.backgroundOnDarkHover};
  padding: 0 2px 0 5px;
  border: 1px solid transparent;

  &:hover {
    border-color: ${({ theme }) => theme.colors.backgroundOnDarkHover};

    cursor: pointer;
  }
`;

export default ProfileSettings;
