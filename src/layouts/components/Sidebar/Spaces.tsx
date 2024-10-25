import { Button, Flex, Text } from '@uikit';
import { AddIcon, EllipsisIcon, SearchIcon } from '@uikit/icons';

import Favorites from './Favorites';
import { SpacesFrame } from './styles';

const Spaces = () => {
  return (
    <SpacesFrame flexDirection='column' alignItems='stretch'>
      <Favorites />

      <Flex height={32} pl='16px' pr='12px'>
        <Text variant='medium12' color='contentTertiary'>
          Spaces
        </Text>
        <Flex>
          <Button variant='text' scale='xs' square className='Spaces_actionBtn'>
            <SearchIcon width={16} height={16} />
          </Button>
          <Button variant='text' scale='xs' square className='Spaces_actionBtn' mr='2px'>
            <EllipsisIcon width={16} height={16} />
          </Button>
          <Button scale='xs' square className='Spaces_actionBtn'>
            <AddIcon width={16} height={16} />
          </Button>
        </Flex>
      </Flex>
    </SpacesFrame>
  );
};

export default Spaces;
