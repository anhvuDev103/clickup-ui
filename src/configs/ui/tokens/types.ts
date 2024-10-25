import _ from 'lodash';

import { baseTokens } from './base';
import { darkColors, lightColors } from './colors';

const _mergedColorTokens = _.merge({}, lightColors, darkColors);

export interface ColorTokens {
  colors: Record<keyof typeof _mergedColorTokens, string>;
}

export interface BaseTokens {
  fonts: {
    primary: string;
    secondary: string;
  };
  radii: Record<number | `${number}px` | keyof typeof baseTokens.radii, number>;
}

export interface Tokens extends BaseTokens, ColorTokens {}
