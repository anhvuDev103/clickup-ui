import { getColor } from '@uikit/utils';
import styled from 'styled-components';
import { space } from 'styled-system';

import { SvgProps } from './types';

export const Svg = styled.svg<SvgProps>`
  ${space}

  color: ${getColor}
`;
