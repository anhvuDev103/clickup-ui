import useToggle from '@hooks/useToggle';

import { Flex } from '../Box';
import { CheckIcon, ChevronDownIcon } from '../Svg';
import Text from '../Text';
import { SelectFrame, SelectItem, SelectTrigger } from './styles';
import { Props, SelectItem as SelectItemType } from './types';

const Select: React.FC<Props> = ({ options, selected, activeIcon, triggerProps, onSelect }) => {
  const [visible, toggleVisible] = useToggle();

  const select = (option: SelectItemType) => () => {
    onSelect(option);
    toggleVisible();
  };

  const hide = () => toggleVisible(false);

  const SelectedIcon = selected.icon;

  return (
    <SelectFrame
      visible={visible}
      onClickOutside={hide}
      handler={
        <SelectTrigger width='120px' onClick={() => toggleVisible()} {...triggerProps}>
          {SelectedIcon && <SelectedIcon width='16px' height='16px' color='iconFill' mr='10px' />}
          <Text fontSize='14px' mr='auto'>
            {selected.label}
          </Text>
          <ChevronDownIcon width='16px' height='16px' color='contentPlaceholder' />
        </SelectTrigger>
      }
      placement='bottom-start'
      paperProps={{
        minWidth: '184px',
        maxWidth: '256px',
      }}
    >
      <Flex p={2} flexDirection='column' alignItems='stretch' flex={1}>
        {options.map((option) => {
          const OptionIcon = option.icon;

          const isSelected = selected.label === option.label;

          return (
            <SelectItem key={option.label} onClick={select(option)}>
              {OptionIcon && <OptionIcon width='16px' height='16px' color='iconFill' mr='10px' />}
              <Text fontSize='14px' mr='auto'>
                {option.label}
              </Text>
              {isSelected && (activeIcon || <CheckIcon width='16px' height='16px' color='contentPrimary' />)}
            </SelectItem>
          );
        })}
      </Flex>
    </SelectFrame>
  );
};

export default Select;
