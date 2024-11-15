import { FlexProps } from '@uikit/types';
import styled, { css } from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import { Flex } from '../Box';

export const SwitchToggleFrame = styled.input<SpaceProps>`
  appearance: none;
  color: ${({ theme }) => theme.colors.contentPlaceholder};

  width: 24px;
  height: 14px;
  background-color: currentColor;

  border-radius: 999px;
  border: 2px solid;
  border-color: currentColor;

  position: relative;

  ${space}

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.contentOnDark};

    position: absolute;
    inset: 0 50% 0 0;

    transition: 200ms;
  }

  &:checked {
    color: ${({ theme }) => theme.colors.backgroundPrimary};

    &::before {
      inset: 0 0 0 50%;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

SwitchToggleFrame.defaultProps = {
  type: 'checkbox',
};

export const SwitchFrame = styled(Flex)<FlexProps & { as?: string; disabled?: boolean }>`
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.contentDefault};

  ${({ disabled, theme }) =>
    disabled &&
    css`
      cursor: not-allowed;
      color: ${theme.colors.contentDisabled};

      input {
        pointer-events: none;
      }
    `}

  ${({ disabled, theme }) =>
    !disabled &&
    css`
      svg {
        color: ${({ theme }) => theme.colors.contentTertiary};
      }

      &:hover {
        background-color: ${theme.colors.backgroundMainHoverStrong};

        cursor: pointer;
      }
    `}
`;
