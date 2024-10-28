import { ChevronDownIcon } from '../Svg';
import Text from '../Text';
import { DropdownMenuSubTriggerFrame } from './styles';
import { DropdownMenuSubTriggerProps } from './types';

const DropdownMenuSubTrigger: React.FC<DropdownMenuSubTriggerProps> = ({ children, startIcon, ...props }) => {
  return (
    <DropdownMenuSubTriggerFrame alignItems='center' width='100%' gap='10px' {...props}>
      {startIcon && <div className='DropdownMenuSubTrigger_startIcon'>{startIcon}</div>}

      <Text variant='regular14' lineHeight={1.15}>
        {children}
      </Text>

      <ChevronDownIcon
        width={16}
        height={16}
        color='contentPlaceholder'
        ml='auto'
        className='DropdownMenuSubTrigger_arrowIcon'
      />
    </DropdownMenuSubTriggerFrame>
  );
};

export default DropdownMenuSubTrigger;
