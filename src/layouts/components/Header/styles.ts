import { Flex, Popover } from '@uikit';
import { FlexProps } from '@uikit/types';
import styled from 'styled-components';

export const HeaderFrame = styled(Flex)<FlexProps>`
  height: 40px;
  background-color: ${({ theme }) => theme.colors.backgroundGlobalActionsBar};
  padding: 4px 8px;
`;

export const ProfileSettingsFrame = styled(Popover)``;

export const ProfileSettingsPaper = styled(Flex)`
  max-height: 100%;
  overflow-y: auto;
  margin-right: 2px;

  .ProfileSettings_addReactBtn {
    padding-inline: 6px;
  }
`;

export const ProfileSettingsHandler = styled(Flex)`
  height: 32px;
  border-radius: ${({ theme }) => theme.radii.full + 'px'};
  background-color: ${({ theme }) => theme.colors.backgroundOnDarkHover};
  padding: 0 2px 0 5px;
  border: 1px solid transparent;

  &:hover {
    border-color: ${({ theme }) => theme.colors.backgroundOnDarkHover};

    cursor: pointer;
  }

  &.ProfileSettings_visible {
    .ProfileSettings_arrowIcon {
      transform: rotate(180deg);
    }
  }

  .ProfileSettings_arrowIcon {
    transition: 200ms;
  }
`;
