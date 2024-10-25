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

const Actions: React.FC<FlexProps> = (props) => {
  return (
    <Flex justifyContent='flex-end' {...props}>
      <Button mr={1} variant='text' startIcon={<AddCircleIcon width={16} height={16} />} color='contentOnDark'>
        New
      </Button>
      <Separator backgroundColor='backgroundOnDarkPressed' />
      <Flex gap={1} ml={1}>
        <Button variant='text' color='contentOnDark' square>
          <CircleCheckFilledIcon width={16} height={16} />
        </Button>
        <Button variant='text' color='contentOnDark' square>
          <NotepadIcon width={16} height={16} />
        </Button>
        <Button variant='text' color='contentOnDark' square>
          <CameraIcon width={16} height={16} />
        </Button>
        <Button variant='text' color='contentOnDark' square>
          <ClockIcon width={16} height={16} />
        </Button>
        <Button variant='text' color='contentOnDark' square>
          <DocsIcon width={16} height={16} />
        </Button>
        <Button variant='text' color='contentOnDark' square>
          <NineDotsIcon width={16} height={16} />
        </Button>
      </Flex>
      <ProfileSettings />
    </Flex>
  );
};

export default Actions;
