import { FlexProps } from '@uikit/types';
import styled, { css } from 'styled-components';
import { space, variant } from 'styled-system';

import { Flex } from '../Box';
import { HandlerProps, scales } from './types';

const scaleVariants = {
  [scales.SM]: {
    width: '24px',
    height: '14px',
    border: '2px solid',

    '&::before': {
      width: '10px',
      height: '10px',
    },
  },
  [scales.MD]: {
    width: '36px',
    height: '21px',
    border: '3px solid',

    '&::before': {
      width: '15px',
      height: '15px',
    },
  },
};

export const SwitchToggleFrame = styled.input<HandlerProps>`
  appearance: none;
  color: ${({ theme }) => theme.colors.contentPlaceholder};

  background-color: currentColor;

  border-radius: 999px;
  border-color: currentColor;

  position: relative;

  ${variant({
    prop: 'scale',
    variants: scaleVariants,
  })}

  ${space}

  &::before {
    content: '';
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
  scale: scales.MD,
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
