import { Box } from '@uikit';

import { PageFrame } from './styles';
import { Props } from './types';

const Page: React.FC<Props> = ({ children, heading, ...props }) => {
  return (
    <PageFrame flexDirection='column' alignItems='stretch' {...props}>
      <Box p={2} borderBottom='1px solid' borderBottomColor='borderDefault' className='Page_head'>
        {heading}
      </Box>
      <Box className='Page_body' position='relative'>
        {children}
      </Box>
    </PageFrame>
  );
};

export default Page;
