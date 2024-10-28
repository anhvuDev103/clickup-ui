import styled from 'styled-components';
import { boxShadow, layout, variant } from 'styled-system';

import { Flex, MotionFlex } from '../Box';
import { PaperProps, scales, variants } from './types';

const styleVariants = {
  [variants.CONTAINED]: {
    backgroundColor: 'backgroundMain',
  },
  [variants.OUTLINED]: {},
};

const scaleVariants = {
  [scales.XS]: {},
  [scales.MD]: {},
};

export const Paper = styled(Flex)<PaperProps>`
  ${variant({
    variants: styleVariants,
  })}

  ${variant({
    prop: 'scale',
    variants: scaleVariants,
  })}

  ${layout}
  ${boxShadow}
`;

Paper.defaultProps = {
  variant: variants.CONTAINED,
  scale: scales.MD,
};

export const MotionPaper = styled(MotionFlex)<PaperProps>`
  ${variant({
    variants: styleVariants,
  })}

  ${variant({
    prop: 'scale',
    variants: scaleVariants,
  })}

  ${layout}
  ${boxShadow}
`;

MotionPaper.defaultProps = {
  variant: variants.CONTAINED,
  scale: scales.MD,
};
