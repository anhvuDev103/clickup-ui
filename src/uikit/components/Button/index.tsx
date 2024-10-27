import classNames from 'classnames';

import Text from '../Text';
import { Variant as TextVariant } from '../Text/types';
import { ButtonFrame } from './styles';
import { ButtonProps, scales, variants } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  scale = scales.MD,
  variant = variants.CONTAINED,
  startIcon,
  endIcon,
  square,
  className,
  textVariant: _textVariant,
  ...props
}) => {
  const textVariant =
    _textVariant ||
    ({
      [scales.XXS]: 'medium12',
      [scales.XS]: 'medium12',
      [scales.SM]: 'medium14',
      [scales.MD]: 'medium14',
      [scales.LG]: 'medium14',
      [scales.XL]: 'bold14',
    }[scale] as TextVariant);

  const textColor =
    props.color ||
    {
      [variants.CONTAINED]: 'contentOnDark',
      [variants.OUTLINED]: 'contentButton',
      [variants.TEXT]: 'contentTertiary',
    }[variant];

  return (
    <ButtonFrame
      scale={scale}
      variant={variant}
      className={classNames([className, variant, { Button_square: square }])}
      {...props}
    >
      {startIcon && <div className='Button_startIcon'>{startIcon}</div>}

      <Text variant={textVariant} color={textColor} className='Button_label'>
        {children}
      </Text>

      {endIcon && <div className='Button_endIcon'>{endIcon}</div>}
    </ButtonFrame>
  );
};

export default Button;
