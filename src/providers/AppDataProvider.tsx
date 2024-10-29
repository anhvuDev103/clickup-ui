import useUserSummary from '@hooks/users/useUserSummary';

import { AppDataContext as Context } from './contexts';

interface Props {
  children: React.ReactNode;
}

const AppDataProvider: React.FC<Props> = ({ children }) => {
  const { data: userSummary } = useUserSummary();

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
