import { Button, Flex, Text } from '@uikit';
import { AddIcon, EllipsisIcon, EverythingIcon, SearchIcon, SpacesIcon } from '@uikit/icons';

import Favorites from './Favorites';
import SpaceItem from './SpaceItem';
import SpaceTree from './SpaceTree';
import { SpacesFrame } from './styles';

const Spaces = () => {
  return (
    <SpacesFrame flexDirection='column' alignItems='stretch' justifyContent='unset' flex={1}>
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

      <Flex flexDirection='column' alignItems='stretch' justifyContent='unset' flex={1} px={2} pb='14px'>
        <SpaceItem label='Everything' icon={<EverythingIcon width={18} height={18} color='contentSecondary' />} />
        <SpaceTree />
        <SpaceItem label='View all spaces' icon={<SpacesIcon width={18} height={18} color='contentSecondary' />} />
        <SpaceItem label='Create Space' icon={<AddIcon width={18} height={18} color='contentSecondary' />} />
      </Flex>
    </SpacesFrame>
  );
};

export default Spaces;
