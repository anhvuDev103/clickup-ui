import useUserSummary from '@hooks/users/useUserSummary';
import { useRootStore } from '@stores/root';
import _ from 'lodash';
import { useEffect } from 'react';

import { AppDataContext as Context } from './contexts';

interface Props {
  children: React.ReactNode;
}

const AppDataProvider: React.FC<Props> = ({ children }) => {
  const { setProfile } = useRootStore();

  const { data: user } = useUserSummary();

  useEffect(() => {
    if (user) {
      setProfile(user);
    }
  }, [setProfile, user]);

  return (
    <Context.Provider
      value={{
        user,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppDataProvider;
