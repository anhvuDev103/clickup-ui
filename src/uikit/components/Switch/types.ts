import { FlexProps } from '@uikit/types';
import { SpaceProps } from 'styled-system';

export const scales = {
  SM: 'sm',
  MD: 'md',
} as const;

type Scale = (typeof scales)[keyof typeof scales];
export interface HandlerProps extends React.InputHTMLAttributes<HTMLInputElement>, SpaceProps {
  scale?: Scale;
}

export interface Props extends FlexProps {
  label?: string;
  children?: React.ReactNode;
  handlerProps?: HandlerProps;
  disabled?: boolean;
  compact?: boolean;
}
