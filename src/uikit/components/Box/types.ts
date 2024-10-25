import { Theme } from '@configs/ui/tokens';
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

export interface BoxProps
  extends BackgroundProps,
    BorderProps<Theme>,
    LayoutProps,
    PositionProps,
    SpaceProps,
    ColorProps<Theme> {}

export interface FlexProps extends BoxProps, FlexboxProps {
  gap?: number | `${number}px`;
}
