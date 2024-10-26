import useToggle from '@hooks/useToggle';
import { Button, Flex } from '@uikit';
import { ChevronDownIcon, PinIcon, SearchIcon } from '@uikit/icons';
import classNames from 'classnames';

import FavoriteItem from './FavoriteItem';
import { FavoritesFrame } from './styles';

const Favorites = () => {
  const [isExpand, toggleExpand] = useToggle();

  return (
    <FavoritesFrame
      width='100%'
      flexDirection='column'
      alignItems='stretch'
      px={2}
      className={classNames({ Favorites_isExpand: isExpand })}
    >
      <Flex>
        <Button
          variant='text'
          scale='xs'
          endIcon={<ChevronDownIcon width={16} height={16} />}
          className={'Favorites_expanseBtn'}
          onClick={() => toggleExpand()}
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
      <Flex
        flexDirection='column'
        alignItems='stretch'
        className='Favorites_list'
        style={{
          maxHeight: isExpand ? 32 * 3 : 0,
        }}
      >
        {[...Array(3)].map(() => (
          <FavoriteItem />
        ))}
      </Flex>
    </FavoritesFrame>
  );
};

export default Favorites;
