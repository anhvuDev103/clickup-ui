import classNames from 'classnames';

import { Flex } from '../Box';
import Popover from '../Popover';
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
  label,
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

  const button = (
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

  if (!label) return button;

  return (
    <Popover interactive={false} trigger='mouseenter focus' handler={button} delay={[500, 0]}>
      <Flex backgroundColor='backgroundTooltip' px={3} py={2} borderRadius={8}>
        <Text variant='medium12' color='contentOnDark'>
          {label}
        </Text>
      </Flex>
    </Popover>
  );
};

export default Button;
