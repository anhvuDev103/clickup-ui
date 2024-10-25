import { Flex } from '@uikit';
import { FlexProps } from '@uikit/types';
import styled from 'styled-components';

export const HeaderFrame = styled(Flex)<FlexProps>`
  height: 40px;
  background-color: ${({ theme }) => theme.colors.backgroundGlobalActionsBar};
  padding: 4px 8px;
`;
