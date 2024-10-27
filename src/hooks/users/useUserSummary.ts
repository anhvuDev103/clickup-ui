import { queryKeysFactory } from '@constants/queries';
import useSharedServicesProvider from '@hooks/useSharedServicesProvider';
import { useRootStore } from '@stores/root';
import { useQuery } from '@tanstack/react-query';

const useUserSummary = () => {
  const { isSignedIn } = useRootStore();
  const { usersService } = useSharedServicesProvider();

  return useQuery({
    queryKey: queryKeysFactory.getProfile,
    queryFn: usersService?.getProfile,
    enabled: isSignedIn,
  });
};

export default useUserSummary;
