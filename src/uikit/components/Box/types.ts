import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

export interface BoxProps extends BackgroundProps, BorderProps, LayoutProps, PositionProps, SpaceProps, ColorProps {}

export interface FlexProps extends BoxProps, FlexboxProps {
  gap?: number;
}
