import Text from '../Text';
import { SwitchFrame, SwitchToggleFrame } from './styles';
import { Props } from './types';

const Switch: React.FC<Props> = ({ label, ...props }) => {
  return (
    <SwitchFrame p={2} border='6px' width='100%' as='label' {...props}>
      <Text variant='regular14'>{label}</Text>
      <SwitchToggleFrame />
    </SwitchFrame>
  );
};

export default Switch;
