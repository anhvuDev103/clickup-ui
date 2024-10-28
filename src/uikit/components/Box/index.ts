import { getSpacingValue } from '@uikit/utils/getSpacingValue';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { background, border, color, flexbox, layout, position, space } from 'styled-system';

import { BoxProps, FlexProps } from './types';

const getGap = ({ gap }: { gap?: number | `${number}px` }) => {
  if (!gap) return 'unset';

  if (typeof gap === 'number') return getSpacingValue(gap) + 'px';
  return gap;
};

export const Box = styled.div<BoxProps>`
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
  ${color}
`;

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${getGap};

  ${flexbox};
`;

export const MotionFlex = styled(motion.div)<FlexProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${getGap};

  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
  ${color}
  ${flexbox};
`;
