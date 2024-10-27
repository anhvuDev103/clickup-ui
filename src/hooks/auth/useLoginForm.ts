import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  email: z.string().min(1, { message: 'Email required!' }).email({ message: 'This email is invalid!' }).trim(),
  password: z
    .string()
    .min(1, { message: 'Password required!' })
    .min(8, { message: 'Password must be 8 characters or longer!' })
    .trim(),
});

export type SignInSchema = z.infer<typeof schema>;

const useLoginForm = (): UseFormReturn<SignInSchema> => {
  return useForm<SignInSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(schema),
  });
};

export default useLoginForm;
