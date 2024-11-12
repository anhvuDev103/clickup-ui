import { getColor } from '@uikit/utils';
import { getSpacingValue } from '@uikit/utils/getSpacingValue';
import styled, { css } from 'styled-components';
import { border, color, flexbox, space, variant } from 'styled-system';

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
      backgroundColor: 'backgroundHover',
    },
  },
};

const scaleVariants = {
  [scales.XXS]: {
    height: 20,
    borderRadius: getSpacingValue(1),
    paddingInline: 8,

    '&:has(.Button_startIcon)': {
      paddingLeft: '4px',
    },

    '&:has(.Button_endIcon)': {
      paddingRight: '4px',
    },

    '&.Button_square': {
      width: 20,
    },

    '&.Button_circle': {
      width: 20,
      borderRadius: '999px',
    },
  },
  [scales.XS]: {
    height: 24,
    borderRadius: getSpacingValue(1),
    paddingInline: 8,

    '&:has(.Button_startIcon)': {
      paddingLeft: '4px',
    },

    '&:has(.Button_endIcon)': {
      paddingRight: '4px',
    },

    '&.Button_square': {
      width: 24,
    },

    '&.Button_circle': {
      width: 24,
      borderRadius: '999px',
    },
  },
  [scales.SM]: {
    height: 28,
    borderRadius: getSpacingValue(1.5),
    paddingInline: 10,

    '&:has(.Button_startIcon)': {
      paddingLeft: 2,
    },

    '&:has(.Button_endIcon)': {
      paddingRight: 2,
    },

    '&.Button_square': {
      width: 28,
    },

    '&.Button_circle': {
      width: 28,
      borderRadius: '999px',
    },
  },
  [scales.MD]: {
    height: 32,
    borderRadius: getSpacingValue(1.5),
    paddingInline: 11,

    '&:has(.Button_startIcon)': {
      paddingLeft: '9px',
    },

    '&:has(.Button_endIcon)': {
      paddingRight: '9px',
    },

    '&.Button_square': {
      width: 32,
    },

    '&.Button_circle': {
      width: 32,
      borderRadius: '999px',
    },
  },
  [scales.LG]: {
    height: 40,
    borderRadius: getSpacingValue(2.25),
    paddingInline: 20,

    '&:has(.Button_startIcon)': {
      paddingLeft: '16px',
    },

    '&:has(.Button_endIcon)': {
      paddingRight: '16px',
    },

    '&.Button_square': {
      width: 40,
    },

    '&.Button_circle': {
      width: 40,
      borderRadius: '999px',
    },
    '.Button_label': {
      letterSpacing: '0.4px',
    },
  },
  [scales.XL]: {
    height: 50,
    borderRadius: getSpacingValue(2.25),
    paddingInline: 20,

    '&:has(.Button_startIcon)': {
      paddingLeft: '16px',
    },

    '&:has(.Button_endIcon)': {
      paddingRight: '16px',
    },

    '&.Button_square': {
      width: 50,
    },

    '&.Button_circle': {
      width: 50,
      borderRadius: '999px',
    },

    '.Button_label': {
      letterSpacing: '0.4px',
    },
  },
};

export const ButtonFrame = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex-shrink: 0;

  &.Button_square,
  &.Button_circle {
    padding: 0;
    justify-content: center;
  }

  .Button_label {
    display: flex;
    align-items: center;
    justify-content: center;

    line-height: 1.5;
    color: currentColor;
  }

  ${variant({ variants: buttonVariants })};

  ${variant({ prop: 'scale', variants: scaleVariants })};

  color: ${getColor};

  ${({ theme, backgroundColorHover }) =>
    backgroundColorHover &&
    css`
      &:hover {
        background-color: ${getColor({ theme, color: backgroundColorHover })};
      }
    `};

  ${({ theme, colorHover }) =>
    colorHover &&
    css`
      &:hover {
        color: ${getColor({ theme, color: colorHover })};

        svg {
          color: ${getColor({ theme, color: colorHover })};
        }
      }
    `};

  ${color};
  ${border};
  ${space};
  ${flexbox};
`;
