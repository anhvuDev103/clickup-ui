import { FlexProps, SvgProps } from '@uikit/types';

import { PaperProps } from '../Paper/types';

export interface SelectRootProps extends FlexProps {
  children: React.ReactNode;
  paperProps?: PaperProps;
  defaultValue?: string;
}

export interface SelectTriggerProps extends FlexProps {
  children: React.ReactNode;
}

export interface SelectContentProps extends FlexProps {
  children: React.ReactNode;
}

export interface SelectItemProps extends FlexProps {
  children: React.ReactNode;
}

export interface SelectGroupProps extends FlexProps {
  children: React.ReactNode;
}

export interface SelectItem {
  label: string;
  icon?: React.FC<SvgProps>;
  value: string;
}
