import styled from 'styled-components';
import { space } from 'styled-system';

import { ImageProps } from './types';

const Image = styled.img<ImageProps>`
  ${space}
`;

export default Image;
