import Tabs from '@components/Tabs';
import { Box, Button, Flex, Text } from '@uikit';
import { useState } from 'react';

import List from './List';
import { EverythingFrame } from './styles';
import ViewBarController from './ViewBarController';

const Everything = () => {
  const [isExpandHeader, setIsExpandHeader] = useState(false);

  const toggleExpandHeader = () => {
    setIsExpandHeader((prev) => !prev);
  };

  return (
    <EverythingFrame
      isExpandHeader={isExpandHeader}
      heading={
        <Flex pl={2} height='100%'>
          <Text variant='medium14'>Everything</Text>
        </Flex>
      }
    >
      <Tabs.Root defaultValue='list'>
        <Flex flexDirection='column' alignItems='stretch' className='Everything_header'>
          <Box className='Everything_expandHeader'>
            <Flex p='24px 48px 16px'>
              <Text variant='medium24'>Everything</Text>
              <Button scale='sm'>Add Task</Button>
            </Flex>
          </Box>
          <ViewBarController isExpandHeader={isExpandHeader} toggleExpandHeader={toggleExpandHeader} />
        </Flex>

        <Tabs.Content value='list' component={<List />}></Tabs.Content>
      </Tabs.Root>
    </EverythingFrame>
  );
};

export default Everything;
