import styled from 'styled-components';

import { Box } from '../Box';

export const Separator = styled(Box)`
  width: 1px;
  height: 16px;
  margin: 0 4px;
`;

Separator.defaultProps = {
  backgroundColor: 'borderDefault',
};

export const Divider = styled(Box)`
  width: 100%;
  height: 1px;
  margin-block: 8px;
`;

Divider.defaultProps = {
  backgroundColor: 'borderDefault',
};
