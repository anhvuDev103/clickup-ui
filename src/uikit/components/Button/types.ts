import { ColorTokens } from '@configs/ui/tokens/types';
import { SpaceProps } from 'styled-system';

export const scales = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
} as const;

export const variants = {
  TEXT: 'text',
  OUTLINED: 'outlined',
  CONTAINED: 'contained',
} as const;

type Scale = (typeof scales)[keyof typeof scales];
type Variant = (typeof variants)[keyof typeof variants];

export interface ButtonProps extends SpaceProps {
  scale?: Scale;
  variant?: Variant;
  square?: boolean;
  color?: keyof ColorTokens['colors'] | (string & {});

  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;

  children: React.ReactNode;
  className?: string;
}
