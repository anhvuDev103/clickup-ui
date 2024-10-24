import { getSpacingValue } from '@uikit/utils/getSpacingValue';
import styled from 'styled-components';
import { background, border, color, flexbox, layout, position, space } from 'styled-system';

import { BoxProps, FlexProps } from './types';

const getGap = ({ gap }: { gap?: number }) => (gap ? getSpacingValue(gap) + 'px' : 'unset');

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
