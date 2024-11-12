import { FlexProps, SvgProps } from '@uikit/types';

import { PaperProps } from '../Paper/types';

export type SelectValue = string | number;

export interface SelectRootProps extends Omit<FlexProps, 'onSelect'> {
  children: React.ReactNode;
  selected?: SelectOption;
  onSelect: React.Dispatch<React.SetStateAction<SelectOption>> | ((option: SelectOption) => void);
}

export interface SelectTriggerProps extends FlexProps {
  children: React.ReactNode;
}

export interface SelectContentProps extends FlexProps {
  children: React.ReactNode;
  paperProps?: PaperProps;
}

export interface SelectItemProps extends FlexProps {
  children: React.ReactNode;
  option: SelectOption;
}

export interface SelectGroupProps extends FlexProps {
  children: React.ReactNode;
  label?: string;
}

export interface SelectOption {
  label: string;
  icon?: React.FC<SvgProps>;
  value: SelectValue;
  note?: string;
  describe?: string;
}

export interface SelectContext {
  id: string;
  selected?: SelectOption;
  select: (value: SelectOption) => () => void;
}
