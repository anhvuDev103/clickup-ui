import { Box, Flex } from '@uikit';

import { PageFrame } from './styles';
import { Props } from './types';

const Page: React.FC<Props> = ({ children, heading }) => {
  return (
    <PageFrame flexDirection='column' alignItems='stretch'>
      <Flex p={2} borderBottom='1px solid' borderBottomColor='borderDefault' className='Page_head'>
        {heading}
      </Flex>
      <Box className='Page_body'>{children}</Box>
    </PageFrame>
  );
};

export default Page;
