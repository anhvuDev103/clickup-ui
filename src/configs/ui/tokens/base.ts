import { getSpacingValueObj } from '@uikit/utils/getSpacingValue';

export const baseTokens = {
  fonts: {
    primary: "'Roboto', serif",
    secondary: '',
  },
  radii: {
    ...getSpacingValueObj([1.5, 3]),
    full: 999,
  },
};
