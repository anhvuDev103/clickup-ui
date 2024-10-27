import { clickup_large_symbol } from '@assets';
import { Button, Flex, Image, Text } from '@uikit';

import { AuthLayoutFrame } from './styles';

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <AuthLayoutFrame>
      <Flex height={100} px={30} as='header' position='relative' zIndex={1}>
        <Flex flexDirection='column' alignItems='flex-start'>
          <Image src={clickup_large_symbol} alt='large_logo' height={30} />
          <Text variant='medium12' mt={1}>
            The everything app for work.
          </Text>
        </Flex>
        <Flex gap={5}>
          <Text variant='medium14'>Don't have an account?</Text>
          <Button scale='lg' textVariant='bold14'>
            Sign up
          </Button>
        </Flex>
      </Flex>
      <div className='AuthLayout_content'>
        <div className='AuthLayout_contentMain'>{children}</div>
        <div className='AuthLayout_contentBg' />
      </div>
    </AuthLayoutFrame>
  );
};

export default AuthLayout;
