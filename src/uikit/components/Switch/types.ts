import { FlexProps } from '@uikit/types';
import { SpaceProps } from 'styled-system';

export type Props = (
  | {
      label: string;
      children?: never;
    }
  | {
      label?: never;
      children: React.ReactNode;
    }
) &
  ({
    handlerProps?: SpaceProps;
    disabled?: boolean;
  } & FlexProps);
