import styled from 'styled-components';
import { layout, variant } from 'styled-system';

import { Flex } from '../Box';
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

const Paper = styled(Flex)<PaperProps>`
  ${variant({
    variants: styleVariants,
  })}

  ${variant({
    prop: 'scale',
    variants: scaleVariants,
  })}

  ${layout}
`;

Paper.defaultProps = {
  variant: variants.CONTAINED,
  scale: scales.MD,
};

export default Paper;
