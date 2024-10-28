import AuthService from '@services/authService';
import UsersService from '@services/usersService';
import { createContext } from 'react';

interface Props {
  children: React.ReactNode;
}

interface SharedServicesContext {
  authService: AuthService | null;
  usersService: UsersService | null;
}

export const Context = createContext<SharedServicesContext>({
  authService: null,
  usersService: null,
});

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
