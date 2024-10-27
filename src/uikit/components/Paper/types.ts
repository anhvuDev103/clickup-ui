import { ColorTokens } from '@configs/ui/tokens/types';
import { FlexProps } from '@uikit/types';
import { LayoutProps } from 'styled-system';

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

export interface PaperProps extends FlexProps, LayoutProps {
  variant?: Variant;
  scale?: Scale;
  color?: keyof ColorTokens['colors'] | (string & {});
}
