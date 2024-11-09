import { FlexProps, SvgProps } from '@uikit/types';

export type SelectItem = {
  label: string;
  icon?: React.FC<SvgProps>;
};

export interface Props {
  options: SelectItem[];
  selected: SelectItem;
  activeIcon?: React.ReactNode;
  triggerProps?: FlexProps;
  onSelect: React.Dispatch<React.SetStateAction<SelectItem>>;
}
