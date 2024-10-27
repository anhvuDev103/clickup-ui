import useUserSummary from '@hooks/users/useUserSummary';
import { createContext } from 'react';

interface Props {
  children: React.ReactNode;
}

interface AppData {
  user: null;
}

export const Context = createContext<AppData>({
  user: null,
});

const AppDataProvider: React.FC<Props> = ({ children }) => {
  // const { data: userSummary, isLoading: isUserSummaryLoading } = useUserSummary();

  return (
    <Context.Provider
      value={{
        user: null,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppDataProvider;
