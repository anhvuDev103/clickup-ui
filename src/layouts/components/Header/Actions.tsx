import { Flex } from '@uikit';
import Button from '@uikit/components/Button';
import { Separator } from '@uikit/components/Separator';
import {
  AddCircleIcon,
  CameraIcon,
  CircleCheckFilledIcon,
  ClockIcon,
  DocsIcon,
  NineDotsIcon,
  NotepadIcon,
} from '@uikit/icons';
import { FlexProps } from '@uikit/types';

import ProfileSettings from './ProfileSettings';
import { ActionsFrame } from './styles';

const Actions: React.FC<FlexProps> = (props) => {
  return (
    <ActionsFrame justifyContent='flex-end' {...props}>
      <Button
        mr={1}
        variant='text'
        startIcon={<AddCircleIcon width={16} height={16} />}
        color='contentOnDark'
        label='Create items'
      >
        New
      </Button>
      <Separator backgroundColor='backgroundOnDarkPressed' />
      <Flex gap={1} ml={1}>
        <Button variant='text' color='contentOnDark' square label='Open My Tasks'>
          <CircleCheckFilledIcon width={16} height={16} />
        </Button>
        <Button variant='text' color='contentOnDark' square label='Open Notepad'>
          <NotepadIcon width={16} height={16} />
        </Button>
        <Button variant='text' color='contentOnDark' square label='Record a Clip'>
          <CameraIcon width={16} height={16} />
        </Button>
        <Button variant='text' color='contentOnDark' square label='Create a Reminder'>
          <ClockIcon width={16} height={16} />
        </Button>
        <Button variant='text' color='contentOnDark' square label='Create a Doc'>
          <DocsIcon width={16} height={16} />
        </Button>
        <Button variant='text' color='contentOnDark' square label='Quick Action Menu'>
          <NineDotsIcon width={16} height={16} />
        </Button>
      </Flex>
      <ProfileSettings />
    </ActionsFrame>
  );
};

export default Actions;
