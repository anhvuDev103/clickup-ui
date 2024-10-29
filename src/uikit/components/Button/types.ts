import { Theme } from '@configs/ui/tokens';
import { Placement } from '@popperjs/core';
import { Color } from '@vite-env';
import { BorderProps, ColorProps, FlexboxProps, LayoutProps, SpaceProps } from 'styled-system';

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
    ColorProps<Theme>,
    BorderProps<Theme>,
    SpaceProps,
    LayoutProps,
    FlexboxProps {
  scale?: Scale;
  variant?: Variant;
  square?: boolean;
  circle?: boolean;
  color?: Color;
  textVariant?: TextVariant;
  backgroundColorHover?: Color;

  label?: string;
  labelPlacement?: Placement;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;

  children: React.ReactNode;
  className?: string;
}
