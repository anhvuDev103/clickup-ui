import { Flex } from '../Box';
import { WarningIcon } from '../Svg';
import Text from '../Text';
import { InputFrame } from './styles';
import { InputProps, scales } from './types';

const Input: React.FC<InputProps> = ({
  scale = scales.MD,
  label,
  startIcon,
  error,
  inputProps,
  labelVariant,
  ...props
}) => {
  return (
    <InputFrame scale={scale} {...props}>
      {label && (
        <Text variant={labelVariant || 'medium12'} className='Input_label' pb={1}>
          {label}
        </Text>
      )}
      <Flex className='Input_main'>
        {startIcon && <div className='Input_startIcon'>{startIcon}</div>}

        <input {...inputProps} />
      </Flex>

      {error && (
        <Flex className='Input_error' justifyContent='unset'>
          <Text color='contentError'>{error}</Text>
        </Flex>
      )}
    </InputFrame>
  );
};

export default Input;
