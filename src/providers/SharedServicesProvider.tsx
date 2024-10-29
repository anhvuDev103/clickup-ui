import AuthService from '@services/authService';
import UsersService from '@services/usersService';

import { SharedServicesContext as Context } from './contexts';

interface Props {
  children: React.ReactNode;
}

const SharedServicesProvider: React.FC<Props> = ({ children }) => {
  const authService = new AuthService();
  const usersService = new UsersService();

  return (
    <Context.Provider
      value={{
        authService,
        usersService,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default SharedServicesProvider;
