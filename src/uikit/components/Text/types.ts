import { LayoutProps, SpaceProps, TypographyProps } from 'styled-system';

export const variants = {
  REGULAR12: 'regular12',
  MEDIUM12: 'medium12',
  BOLD12: 'bold12',
  REGULAR14: 'regular14',
  MEDIUM14: 'medium14',
  BOLD14: 'bold14',
  REGULAR16: 'regular16',
  MEDIUM16: 'medium16',
  BOLD16: 'bold16',
} as const;

export type Variant = (typeof variants)[keyof typeof variants];

export interface TextProps extends SpaceProps, TypographyProps, LayoutProps {
  variant?: Variant;
}
