import { Color } from '@vite-env';
import { FlexboxProps, LayoutProps, SpaceProps } from 'styled-system';

import { Variant as TextVariant } from '../Text/types';

export const scales = {
  XXS: 'xxs',
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
} as const;

export const variants = {
  TEXT: 'text',
  OUTLINED: 'outlined',
  CONTAINED: 'contained',
} as const;

type Scale = (typeof scales)[keyof typeof scales];
type Variant = (typeof variants)[keyof typeof variants];

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    SpaceProps,
    LayoutProps,
    FlexboxProps {
  scale?: Scale;
  variant?: Variant;
  square?: boolean;
  color?: Color;
  textVariant?: TextVariant;

  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;

  children: React.ReactNode;
  className?: string;
}
