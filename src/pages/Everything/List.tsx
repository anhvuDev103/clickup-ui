import { Flex } from '@uikit';

import ColumnsBadge from './ColumnsBadge';
import GroupBadge from './GroupBadge';
import SubtasksBadge from './SubtasksBadge';

const List = () => {
  return (
    <Flex
      backgroundColor='backgroundMain'
      px='48px'
      height={40}
      gap={1}
      justifyContent='flex-start'
      className='Everything_viewSettings'
    >
      <GroupBadge />
      <SubtasksBadge />
      <ColumnsBadge />
    </Flex>
  );
};

export default List;
