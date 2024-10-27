import { TippyProps } from '@tippyjs/react';

import { PaperProps } from '../Paper/types';

export interface Props extends Omit<TippyProps, 'children'> {
  handler: React.ReactElement;
  children: React.ReactNode;
  paperProps?: PaperProps;
}
