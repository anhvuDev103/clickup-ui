import { getColor } from '@uikit/utils';
import { getSpacingValue } from '@uikit/utils/getSpacingValue';
import styled from 'styled-components';
import { space, variant } from 'styled-system';

import { ButtonProps, scales, variants } from './types';

const buttonVariants = {
  [variants.CONTAINED]: {
    backgroundColor: 'backgroundPrimary',
    color: 'contentOnDark',

    '&:hover': {
      backgroundColor: 'backgroundPrimaryHover',
    },
  },
  [variants.OUTLINED]: {
    backgroundColor: 'backgroundMain',
    color: 'contentButton',
    border: '1px solid',
    borderColor: 'borderDefault',

    '&:hover': {
      backgroundColor: 'backgroundButtonHover',
    },
  },
  [variants.TEXT]: {
    backgroundColor: 'transparent',
    color: 'contentTertiary',

    '&:hover': {
      backgroundColor: 'backgroundOnDarkHover',
    },
  },
};

const scaleVariants = {
  [scales.XS]: {
    height: 24,
    borderRadius: getSpacingValue(1),
    paddingInline: 8,
    lineHeight: '16px',

    '&:has(.Button_startIcon)': {
      paddingLeft: '4px',
    },

    '&:has(.Button_endIcon)': {
      paddingRight: '4px',
    },

    '&.Button_square': {
      width: 24,
    },
  },
  [scales.SM]: {
    height: 28,
    borderRadius: getSpacingValue(1.5),
    paddingInline: 10,
    lineHeight: '13px',

    '&:has(.Button_startIcon)': {
      paddingLeft: 2,
    },

    '&:has(.Button_endIcon)': {
      paddingRight: 2,
    },

    '&.Button_square': {
      width: 28,
    },
  },
  [scales.MD]: {
    height: 32,
    borderRadius: getSpacingValue(1.5),
    paddingInline: 11,
    lineHeight: 1.1428571429,

    '&:has(.Button_startIcon)': {
      paddingLeft: '9px',
    },

    '&:has(.Button_endIcon)': {
      paddingRight: '9px',
    },

    '&.Button_square': {
      width: 32,
    },
  },
};

export const ButtonFrame = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 4px;

  &.Button_square {
    padding: 0;
    justify-content: center;
  }

  ${variant({ variants: buttonVariants })};

  ${variant({ prop: 'scale', variants: scaleVariants })};

  color: ${getColor};

  ${space};
`;
