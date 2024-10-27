import styled from 'styled-components';
import { layout, space } from 'styled-system';

import { InputProps } from './types';

export const InputFrame = styled.div<InputProps>`
  position: relative;

  ${layout}
  ${space}

  .Input_main {
    position: relative;

    height: 40px;
  }

  .Input_startIcon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    z-index: 1;
  }

  input {
    border: none;
    outline: none;
    flex: 1;

    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color: ${({ theme }) => theme.colors.contentDefault};

    position: absolute;
    inset: 0;

    padding: 0 20px 0 36px;
    border-radius: 9px;
    border: 1px solid ${({ theme }) => theme.colors.backgroundOnSubtleHover};
  }

  .Input_error {
    position: absolute;
    left: 0;
    top: calc(100% + 2px);
  }
`;
