import { queryKeysFactory } from '@constants/queries';
import useSharedServices from '@hooks/useSharedServices';
import { useRootStore } from '@stores/root';
import { useQuery } from '@tanstack/react-query';

const useUserSummary = () => {
  const { isSignedIn } = useRootStore();
  const { usersService } = useSharedServices();

  return useQuery({
    queryKey: queryKeysFactory.getProfile,
    queryFn: usersService?.getProfile,
    enabled: isSignedIn,
  });
};

export default useUserSummary;
