import { FlexProps, SvgProps } from '@uikit/types';

import { PaperProps } from '../Paper/types';

export type SelectValue = string | number;

export interface SelectRootProps extends Omit<FlexProps, 'onSelect'> {
  children: React.ReactNode;
  selected?: SelectOption;
  onSelect: React.Dispatch<React.SetStateAction<SelectOption>> | ((option: SelectOption) => void);
  hideOnSelect?: boolean;
}

export interface SelectTriggerProps extends Omit<FlexProps, 'children'> {
  children: React.ReactNode | ((selected?: SelectOption) => React.ReactNode);
}

export interface SelectContentProps extends Omit<FlexProps, 'children'> {
  children: React.ReactNode | (({ close }: { close: () => void }) => React.ReactNode);
  paperProps?: PaperProps;
  trigger?: React.ReactNode;
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
  default?: boolean;
}

export interface SelectContext {
  ref: React.MutableRefObject<HTMLElement | null> | null;
  selected?: SelectOption;
  select: (value: SelectOption) => () => void;
}
