import { getSpacingValueObj } from '@uikit/utils/getSpacingValue';

import { BaseTokens } from './types';

export const baseTokens = {
  fonts: {
    primary: "'Segoe UI'",
    secondary: '',
  },
  radii: {
    ...getSpacingValueObj([1.5, 3]),
    full: 999,
  },
} as BaseTokens;
