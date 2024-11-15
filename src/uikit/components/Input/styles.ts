import styled from 'styled-components';
import { border, flexShrink, layout, space, variant } from 'styled-system';

import { InputProps, scales } from './types';

const scaleVariants = {
  [scales.XXS]: {
    '.Input_main': {
      height: 20,
    },
  },
  [scales.XS]: {
    '.Input_main': {
      height: 24,
    },
  },
  [scales.MD]: {
    '.Input_main': {
      height: 32,
    },
  },
  [scales.LG]: {
    '.Input_main': {
      height: 40,
    },
  },
};

export const InputFrame = styled.div<InputProps>`
  position: relative;

  border-radius: 9px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundOnSubtleHover};

  overflow: hidden;

  ${variant({ prop: 'scale', variants: scaleVariants })};

  ${layout}
  ${space}
  ${border}
  ${flexShrink}

  .Input_main {
    position: relative;
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
  }

  .Input_error {
    position: absolute;
    left: 0;
    top: calc(100% + 2px);
  }
`;
