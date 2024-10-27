import { zodResolver } from '@hookform/resolvers/zod';
import http, { ApiReponse } from '@services/http';
import { useRootStore } from '@stores/root';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  email: z.string({ required_error: 'Email required!' }).email({ message: 'This email is invalid!' }).trim(),
  password: z
    .string({
      required_error: 'Password required!',
    })
    .min(8, { message: 'Password must be 8 characters or longer!' })
    .trim(),
});

type LoginResult = {
  access_token: string;
  refresh_token: string;
};

type Schema = z.infer<typeof schema>;

const useLoginForm = (): [UseFormReturn<Schema>, SubmitHandler<Schema>] => {
  const { setTokens } = useRootStore();

  const form = useForm<Schema>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Schema> = async (data) => {
    const response = await http.post<never, ApiReponse<LoginResult>>('/auth/sign-in', data);

    const { access_token, refresh_token } = response.result;

    setTokens({
      accessToken: access_token,
      refreshToken: refresh_token,
    });

    localStorage.setItem('access_token', access_token);
  };

  return [form, onSubmit];
};

export default useLoginForm;
