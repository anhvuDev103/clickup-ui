import { Button, Flex } from '@uikit';
import { ChevronDownIcon, PinIcon, SearchIcon } from '@uikit/icons';

import FavoriteItem from './FavoriteItem';
import { FavoritesFrame } from './styles';

const Favorites = () => {
  return (
    <FavoritesFrame width='100%' flexDirection='column' alignItems='stretch' px={2}>
      <Flex>
        <Button
          variant='text'
          scale='xs'
          endIcon={<ChevronDownIcon width={16} height={16} />}
          className='Favorites_expanseBtn'
        >
          Favorites
        </Button>
        <Flex>
          <Button variant='text' scale='xs' square className='Favorites_actionBtn'>
            <SearchIcon width={16} height={16} />
          </Button>
          <Button variant='text' scale='xs' square className='Favorites_actionBtn'>
            <PinIcon width={16} height={16} />
          </Button>
        </Flex>
      </Flex>
      <Flex flexDirection='column' alignItems='stretch'>
        {[...Array(3)].map(() => (
          <FavoriteItem />
        ))}
      </Flex>
    </FavoritesFrame>
  );
};

export default Favorites;
