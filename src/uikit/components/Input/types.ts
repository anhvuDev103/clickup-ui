import { BorderProps, FlexboxProps, LayoutProps, SpaceProps } from 'styled-system';

import { Variant as TextVariant } from '../Text/types';

export const scales = {
  XXS: 'xxs',
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;

type Scale = (typeof scales)[keyof typeof scales];

export interface InputProps extends LayoutProps, SpaceProps, BorderProps, FlexboxProps {
  scale?: Scale;
  label?: string;
  startIcon?: React.ReactNode;
  error?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement> & SpaceProps;
  labelVariant?: TextVariant;
}
