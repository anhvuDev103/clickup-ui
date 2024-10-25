import { Text } from '@uikit';
import { PlanetIcon } from '@uikit/icons';

import { FavoriteItemFrame } from './styles';

const FavoriteItem = () => {
  return (
    <FavoriteItemFrame justifyContent='flex-start' gap='10px'>
      <PlanetIcon width={20} height={20} color='contentSecondary' />
      <Text variant='regular14'>Team Space</Text>
    </FavoriteItemFrame>
  );
};

export default FavoriteItem;
