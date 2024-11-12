import Page from '@layouts/components/Page';
import { Props as PageProps } from '@layouts/components/Page/types';
import { Button } from '@uikit';
import styled, { css } from 'styled-components';

type EverythingFrameProps = PageProps & {
  isExpandHeader: boolean;
};

export const EverythingFrame = styled(Page)<EverythingFrameProps>`
  .Everything_expandHeader {
    transition: 400ms;
    height: 68px;
  }

  .Everything_arrowIcon {
    transform: rotate(180deg);
  }

  .Everything_controller,
  .Everything_viewSettings {
    transition: 400ms;
  }

  ${({ isExpandHeader }) =>
    !isExpandHeader &&
    css`
      .Everything_expandHeader {
        height: 0;
        opacity: 0;
        pointer-events: none;
      }

      .Everything_controller,
      .Everything_viewSettings {
        padding-inline: 16px 12px;
      }

      .Everything_arrowIcon {
        transform: rotate(0);
      }
    `}
`;

export const ViewBarControllerFrame = styled.div`
  .ViewBarController_removeBtn {
    &:hover {
      color: red;
    }
  }
`;

export const FilterBadge = styled(Button)`
  color: ${({ theme }) => theme.colors.contentControlTag};
  border-color: ${({ theme }) => theme.colors.borderControlTagBorder};

  padding-inline: 8px !important;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundMainHover};
  }

  &.FilterBadge_active {
    background-color: ${({ theme }) => theme.colors.backgroundPrimarySubtle};
    color: ${({ theme }) => theme.colors.contentPrimary};
    border-color: ${({ theme }) => theme.colors.borderPrimaryLowContrast};

    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundPrimaryOnSubtle};
    }
  }
`;
