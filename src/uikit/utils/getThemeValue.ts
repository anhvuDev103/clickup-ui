import get from 'lodash/get';
import { DefaultTheme } from 'styled-components';

export const getThemeValue = (theme: DefaultTheme, path: string, fallback?: string | number): string =>
  get(theme, path, fallback);

export const getColor = ({ theme, color }: { theme: DefaultTheme; color?: string }) =>
  getThemeValue(theme, `colors.${color}`, color);
