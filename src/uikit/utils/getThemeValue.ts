import { ColorTokens } from '@configs/ui/tokens/types';
import { Font } from '@uikit/components/Text/types';
import get from 'lodash/get';
import { DefaultTheme } from 'styled-components';

export const getThemeValue = (theme: DefaultTheme, path: string, fallback?: string | number): string =>
  get(theme, path, fallback);

export const getColor = ({ theme, color }: { theme: DefaultTheme; color?: ColorTokens['colors'] | string }) =>
  getThemeValue(theme, `colors.${color}`, color as string);

export const getFontFamily = ({ theme, font }: { theme: DefaultTheme; font?: Font }) =>
  getThemeValue(theme, `fonts.${font}`);
