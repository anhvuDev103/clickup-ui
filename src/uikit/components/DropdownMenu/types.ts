import { FlexProps } from '@uikit/types';

export interface DropdownMenuRootProps extends FlexProps {
  children: React.ReactNode;
}

export interface DropdownMenuGroupProps extends FlexProps {
  children: React.ReactNode;
  label?: string;
}

export interface DropdownMenuItemProps extends FlexProps {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
}

export interface DropdownMenuSubProps {
  children: React.ReactNode;
}

export interface DropdownMenuSubTriggerProps extends FlexProps {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DropdownMenuSubContentProps extends DropdownMenuGroupProps {}
