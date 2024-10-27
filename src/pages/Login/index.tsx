import useLoginForm, { SignInSchema } from '@hooks/auth/useLoginForm';
import useSharedServicesProvider from '@hooks/useSharedServicesProvider';
import { useRootStore } from '@stores/root';
import { Button, Flex, Paper, Spinner, Text } from '@uikit';
import Input from '@uikit/components/Input';
import { EmailIcon, PasswordIcon } from '@uikit/icons';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { LoginFrame } from './styles';

const Login = () => {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const { setIsSignedIn } = useRootStore();
  const { authService } = useSharedServicesProvider();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useLoginForm();

  const signIn: SubmitHandler<SignInSchema> = async (data) => {
    try {
      setIsSigningIn(true);
      await authService?.signIn(data);
      setIsSignedIn(true);
    } catch (error) {
      console.error('Login failed', error);
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <LoginFrame justifyContent='center'>
      <Paper width='100%' maxWidth='480px' px={60} py={30} borderRadius={12} className='Login_formModal'>
        <form onSubmit={handleSubmit(signIn)} className='Login_form'>
          <Flex width='100%' flexDirection='column' alignItems='stretch'>
            <Text fontSize='32px' fontWeight={800} lineHeight={1.5} textAlign='center' mb={20}>
              Welcome back!
            </Text>

            <Input
              label='Work Email'
              startIcon={<EmailIcon width={20} height={20} color='contentIcon' />}
              error={errors.email?.message}
              inputProps={{
                placeholder: 'Enter your work email',
                ...register('email', { required: true }),
              }}
              mb={26}
            />
            <Input
              label='Password'
              startIcon={<PasswordIcon width={20} height={20} color='contentIcon' />}
              error={errors.password?.message}
              inputProps={{
                placeholder: 'Enter password',
                type: 'password',
                ...register('password', { required: true }),
              }}
              mb={26}
            />
            <Button scale='xl'>{isSigningIn ? <Spinner /> : 'Log In'}</Button>
          </Flex>
        </form>
      </Paper>
    </LoginFrame>
  );
};

export default Login;
