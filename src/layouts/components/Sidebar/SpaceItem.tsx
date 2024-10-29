import { Text } from '@uikit';

import { SpaceItemFrame } from './styles';

interface Props {
  label: string;
  icon: React.ReactNode;
  to: string;
}

const SpaceItem: React.FC<Props> = ({ label, icon, to }) => {
  return (
    <SpaceItemFrame to={to} justifyContent='flex-start' gap='10px'>
      {icon}
      <Text variant='regular14'>{label}</Text>
    </SpaceItemFrame>
  );
};

export default SpaceItem;
