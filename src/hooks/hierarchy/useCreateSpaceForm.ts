import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z
    .string()
    .min(1, { message: 'Space name is required' })
    .max(32, { message: 'Space name should not go over 32 characters' })
    .trim(),
  description: z
    .string()
    .max(350, { message: 'Space description should not go over 350 characters' })
    .trim()
    .optional(),
  is_private: z.boolean(),
});

export type CreateSpaceSchema = z.infer<typeof schema>;

const useCreateSpaceForm = () => {
  return useForm<CreateSpaceSchema>({
    defaultValues: {
      name: '',
      description: '',
      is_private: false,
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  });
};

export default useCreateSpaceForm;
