import styled from 'styled-components';

import { Flex } from '../Box';

export const DropdownMenuItemFrame = styled(Flex)`
  padding: 0 8px;
  height: 32px;
  border-radius: 6px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundMainHoverStrong};

    cursor: pointer;
  }
`;
