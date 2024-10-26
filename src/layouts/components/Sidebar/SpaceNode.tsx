import Avatar from '@components/Avatar';
import { Box, Button, Flex, Text } from '@uikit';
import { CaretIcon, FolderIcon, FolderOpenIcon, ListIcon } from '@uikit/icons';
import classNames from 'classnames';
import { NodeRendererProps } from 'react-arborist';

import { SpaceItemFrame } from './styles';
import { SpaceNodeData } from './types';

const SpaceNode: React.FC<NodeRendererProps<SpaceNodeData>> = ({ node, style, dragHandle }) => {
  const isSpace = node.level === 0;
  const isFolder = node.level > 0 && !node.isLeaf;
  const isList = node.level > 0 && node.isLeaf;

  return (
    <SpaceItemFrame
      style={isSpace ? {} : style}
      ref={dragHandle}
      onClick={() => node.toggle()}
      className={classNames({ SpaceNode_opened: node.isOpen })}
    >
      <Flex justifyContent='flex-start' gap='10px'>
        {(isSpace || isFolder) && (
          <>
            <Button variant='text' scale='xxs' className='SpaceNode_expandBtn' square>
              <CaretIcon width={16} height={16} color='contentButton' />
            </Button>
            <Box className='SpaceNode_icon'>
              {isSpace && <Avatar size={20} label={node.data.name} />}
              {isFolder && (
                <>
                  {node.isOpen ? (
                    <FolderOpenIcon width={20} height={20} color='contentSecondary' />
                  ) : (
                    <FolderIcon width={20} height={20} color='contentSecondary' />
                  )}
                </>
              )}
            </Box>
          </>
        )}

        {isList && (
          <Button scale='xxs' variant='text' className='SpaceNode_listBtn' square>
            <ListIcon width={18} height={18} color='contentSecondary' />
          </Button>
        )}
        <Text variant='regular14' lineHeight='unset'>
          {node.data.name}
        </Text>
      </Flex>
    </SpaceItemFrame>
  );
};

export default SpaceNode;
