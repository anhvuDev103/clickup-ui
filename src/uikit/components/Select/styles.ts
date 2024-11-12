import styled from 'styled-components';

import { Flex } from '../Box';

export const SelectItemFrame = styled(Flex)`
  padding: 8px;
  border-radius: 6px;
  justify-content: flex-start;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundMainHoverStrong};

    cursor: pointer;
  }

  &.SelectItem_active {
  }
`;
