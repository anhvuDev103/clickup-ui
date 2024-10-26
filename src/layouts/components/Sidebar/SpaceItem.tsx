import { Text } from '@uikit';

import { SpaceItemFrame } from './styles';

interface Props {
  label: string;
  icon: React.ReactNode;
}

const SpaceItem: React.FC<Props> = ({ label, icon }) => {
  return (
    <SpaceItemFrame justifyContent='flex-start' gap='10px'>
      {icon}
      <Text variant='regular14'>{label}</Text>
    </SpaceItemFrame>
  );
};

export default SpaceItem;
