import { ModalKey } from '@components/modals';
import { GetProfileResult } from '@schemas/responses/users';
import AuthService from '@services/authService';
import HierarchyService from '@services/hierarchyService';
import UsersService from '@services/usersService';

export interface SharedServicesContextType {
  authService: AuthService | null;
  usersService: UsersService | null;
  hierarchyService: HierarchyService | null;
}

export interface AppDataContextType {
  user: GetProfileResult | undefined;
}

export type Modal = {
  name: ModalKey;
  args?: Record<string, unknown>;
};

export interface ModalContextType {
  modal: Modal | null;
  open: (name: ModalKey, args?: Record<string, unknown>) => void;
  close: () => void;
}
