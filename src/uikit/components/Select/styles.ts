import styled from 'styled-components';

import { Flex } from '../Box';
import Popover from '../Popover';

export const SelectFrame = styled(Popover)``;

export const SelectItem = styled(Flex)`
  padding: 8px;
  border-radius: 6px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundMainHoverStrong};

    cursor: pointer;
  }
`;

export const SelectTrigger = styled(Flex)`
  height: 32px;
  padding: 7px;
  border: 1px solid ${({ theme }) => theme.colors.borderHighContrast};
  border-radius: 6px;

  &:hover {
    cursor: pointer;
  }
`;
