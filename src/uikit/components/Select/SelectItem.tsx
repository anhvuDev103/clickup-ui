import classNames from 'classnames';

import { CheckIcon } from '../Svg';
import { useSelectContext } from './context';
import { SelectItemFrame } from './styles';
import { SelectItemProps } from './types';

const SelectItem: React.FC<SelectItemProps> = ({ children, option, ...props }) => {
  const { selected, select } = useSelectContext();

  const isSelected = selected && selected.value === option.value;

  return (
    <SelectItemFrame
      onClick={select(option)}
      className={classNames([props.className, { SelectItem_active: isSelected }])}
      {...props}
    >
      {children}

      {isSelected && <CheckIcon width='16px' height='16px' color='contentPrimary' ml='auto' />}
    </SelectItemFrame>
  );
};

export default SelectItem;
