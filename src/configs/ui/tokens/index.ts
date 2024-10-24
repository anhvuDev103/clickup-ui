import { baseTokens } from './base';
import { lightColors } from './colors';
import { ColorTokens, Tokens } from './types';

type Mode = 'dark' | 'light';

export const getDesignTokens = (mode: Mode): Tokens => {
  const tokensByTheme = {
    light: {
      colors: lightColors,
    },
    dark: {
      colors: lightColors,
    },
  }[mode] as ColorTokens;

  return {
    ...baseTokens,
    ...tokensByTheme,
  };
};

export type Theme = ReturnType<typeof getDesignTokens>;
