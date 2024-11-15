import { PaperProps } from '../Paper/types';

export interface DrawerContext {
  triggerRef: React.RefObject<HTMLDivElement> | null;
  open: boolean;
  toggleOpen: (targetState?: boolean) => void;
  containerSelector?: string;
}

export interface DrawerRootProps {
  children: React.ReactNode;
  containerSelector?: string;
}

export interface DrawerTriggerProps {
  children: React.ReactNode;
}

export interface DrawerContentProps extends Omit<PaperProps, 'children'> {
  children: React.ReactNode | (({ close }: { close: () => void }) => React.ReactNode);
}
