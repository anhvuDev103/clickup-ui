import useUserSummary from '@hooks/users/useUserSummary';
import { GetProfileResponse, GetProfileResult } from '@schemas/responses/users';
import { createContext } from 'react';

interface Props {
  children: React.ReactNode;
}

interface AppData {
  user: GetProfileResult | undefined;
}

export const Context = createContext<AppData>({
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
