import { Text } from '@uikit';
import { FlexProps } from '@uikit/types';

import { SpaceItemFrame } from './styles';

interface Props extends FlexProps {
  label: string;
  icon: React.ReactNode;
}

const SpaceItem: React.FC<Props> = ({ label, icon, ...props }) => {
  return (
    <SpaceItemFrame justifyContent='flex-start' gap='10px' {...props}>
      {icon}
      <Text variant='regular14'>{label}</Text>
    </SpaceItemFrame>
  );
};

export default SpaceItem;
