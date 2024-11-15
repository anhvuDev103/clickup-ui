import useCreateSpaceForm, { CreateSpaceSchema } from '@hooks/hierarchy/useCreateSpaceForm';
import useSharedServices from '@hooks/useSharedServices';
import { Box, Button, Flex, Modal, Switch, Text } from '@uikit';
import Input from '@uikit/components/Input';
import { ModalProps } from '@uikit/types';
import { SubmitHandler } from 'react-hook-form';

const CreateSpace: React.FC<ModalProps> = ({ close }) => {
  const { hierarchyService } = useSharedServices();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useCreateSpaceForm();
  console.log('>> Check | errors:', errors);

  const createSpace: SubmitHandler<CreateSpaceSchema> = async (data) => {
    console.log('>> Check | data:', data);
    try {
      await hierarchyService?.createSpace();
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <Modal
      flexDirection='column'
      alignItems='stretch'
      justifyContent='flex-start'
      width='100%'
      maxWidth='580px'
      borderRadius='12px'
      overflow='hidden'
    >
      <form onSubmit={handleSubmit(createSpace)} className='Login_form'>
        <Box p='24px' pb='12px'>
          <Text fontSize='18px' fontWeight={500}>
            Create a space
          </Text>
          <Text fontSize='14px' color='contentTertiary'>
            A Space represents teams, departments, or groups, each with its own Lists, workflows, and settings.
          </Text>
          <Text as='h3' variant='medium14' color='contentSecondary' mb={2} mt='20px'>
            Icon & name
          </Text>
          <Flex gap='12px' mb='32px'>
            <Flex
              justifyContent='center'
              width='34px'
              height='34px'
              borderRadius='8px'
              border='1px solid'
              borderColor='borderHighContrast'
              color='contentPlaceholder'
            >
              M
            </Flex>
            <Input
              borderRadius='8px'
              scale='lg'
              height='42px'
              flex={1}
              error={errors.name?.message}
              inputProps={{
                placeholder: 'e.g. Marketing, Engineering, HR',
                ...register('name', { required: true }),
              }}
            />
          </Flex>
          <Flex alignItems='baseline' justifyContent='flex-start' gap={1} mb={2}>
            <Text color='contentSecondary' variant='medium14'>
              Description
            </Text>
            <Text color='contentTertiary'>(optional)</Text>
          </Flex>
          <Input
            borderRadius='8px'
            scale='lg'
            height='42px'
            error={errors.description?.message}
            inputProps={{
              ...register('description'),
            }}
          />
          <Flex mt='32px' mb={2}>
            <Flex flexDirection='column' alignItems='stretch' justifyContent='flex-start'>
              <Text color='contentSecondary' variant='medium14'>
                Make Private
              </Text>
              <Text color='contentSecondary' fontSize='14px'>
                Only you and invited members have access
              </Text>
            </Flex>
            <Switch
              compact
              handlerProps={{
                ...register('private'),
              }}
            />
          </Flex>
          <Flex mt='16px'>
            <Text color='contentSecondary' fontSize='14px'>
              Share only with:
            </Text>
          </Flex>
        </Box>
        <Flex borderTop='1px solid' borderColor='borderDefault' p='16px' backgroundColor='backgroundSubtle'>
          <Button variant='text'>Use Templates</Button>
          <Button type='submit'>Continue</Button>
        </Flex>
      </form>
    </Modal>
  );
};

export default CreateSpace;
