import { FlexProps } from '@uikit/types';
import { Color } from '@vite-env';
import { BoxShadowProps, LayoutProps } from 'styled-system';

export const variants = {
  CONTAINED: 'contained',
  OUTLINED: 'outlined',
} as const;

export const scales = {
  XS: 'xs',
  MD: 'md',
} as const;

export type Variant = (typeof variants)[keyof typeof variants];
export type Scale = (typeof scales)[keyof typeof scales];

export interface PaperProps extends FlexProps, LayoutProps, BoxShadowProps {
  variant?: Variant;
  scale?: Scale;
  color?: Color;
}
