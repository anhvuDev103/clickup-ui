import AuthService from '@services/authService';
import { createContext } from 'react';

interface Props {
  children: React.ReactNode;
}

interface SharedServices {
  authService: AuthService | null;
}

export const Context = createContext<SharedServices>({
  authService: null,
});

const SharedServicesProvider: React.FC<Props> = ({ children }) => {
  const authService = new AuthService();

  return (
    <Context.Provider
      value={{
        authService,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default SharedServicesProvider;
