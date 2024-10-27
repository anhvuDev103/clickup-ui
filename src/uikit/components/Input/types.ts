import { LayoutProps, SpaceProps } from 'styled-system';

import { Variant as TextVariant } from '../Text/types';

export interface InputProps extends LayoutProps, SpaceProps {
  label?: string;
  startIcon?: React.ReactNode;
  error?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  labelVariant?: TextVariant;
}
