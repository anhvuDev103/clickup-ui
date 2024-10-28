import useUserSummary from '@hooks/users/useUserSummary';
import { GetProfileResult } from '@schemas/responses/users';
import { createContext } from 'react';

interface Props {
  children: React.ReactNode;
}

interface AppDataContext {
  user: GetProfileResult | undefined;
}

export const Context = createContext<AppDataContext>({
  user: undefined,
});

const AppDataProvider: React.FC<Props> = ({ children }) => {
  const { data: userSummary, isLoading: isUserSummaryLoading } = useUserSummary();

  return (
    <Context.Provider
      value={{
        user: userSummary,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppDataProvider;
