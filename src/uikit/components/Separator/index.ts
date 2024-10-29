import styled from 'styled-components';

import { Box } from '../Box';

export const Separator = styled(Box)`
  width: 1px;
  height: 16px;
`;

Separator.defaultProps = {
  backgroundColor: 'borderDefault',
  ml: 1,
  mr: 1,
};

export const Divider = styled(Box)`
  width: 100%;
  min-height: 1px;
  margin-block: 8px;
`;

Divider.defaultProps = {
  backgroundColor: 'borderDefault',
};
