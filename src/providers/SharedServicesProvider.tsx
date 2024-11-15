import AuthService from '@services/authService';
import HierarchyService from '@services/hierarchyService';
import UsersService from '@services/usersService';

import { SharedServicesContext as Context } from './contexts';

interface Props {
  children: React.ReactNode;
}

const SharedServicesProvider: React.FC<Props> = ({ children }) => {
  const authService = new AuthService();
  const usersService = new UsersService();
  const hierarchyService = new HierarchyService();

  return (
    <Context.Provider
      value={{
        authService,
        usersService,
        hierarchyService,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default SharedServicesProvider;
