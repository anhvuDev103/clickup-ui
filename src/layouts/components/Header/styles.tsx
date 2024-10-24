import { Flex } from '@uikit';
import styled from 'styled-components';

export const HeaderFrame = styled(Flex)`
  height: 40px;
  background-color: ${({ theme }) => theme.colors.backgroundGlobalActionsBar};
  padding: 4px 8px;
`;
