import { FlexProps } from '@uikit/types';
import styled from 'styled-components';

import { Flex } from '../Box';

export const SwitchToggleFrame = styled.input`
  appearance: none;
  color: ${({ theme }) => theme.colors.contentPlaceholder};

  width: 24px;
  height: 14px;
  background-color: currentColor;
  margin-block: 3px;

  border-radius: 999px;
  border: 2px solid;
  border-color: currentColor;

  position: relative;

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

export const SwitchFrame = styled(Flex)<FlexProps & { as?: string }>`
  border-radius: 6px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundMainHoverStrong};

    cursor: pointer;
  }
`;
