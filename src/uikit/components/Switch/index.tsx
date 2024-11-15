import Text from '../Text';
import { SwitchFrame, SwitchToggleFrame } from './styles';
import { Props } from './types';

const Switch: React.FC<Props> = ({ label, children, handlerProps, ...props }) => {
  return (
    <SwitchFrame p={2} border='6px' width='100%' as='label' {...props}>
      {label && (
        <Text variant='regular14' color='currentColor'>
          {label}
        </Text>
      )}
      {children}
      <SwitchToggleFrame {...handlerProps} />
    </SwitchFrame>
  );
};

export default Switch;
