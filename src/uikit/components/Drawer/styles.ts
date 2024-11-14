import styled from 'styled-components';

import { Paper } from '../Paper';
import { PaperProps } from '../Paper/types';

export const DrawerContentFrame = styled(Paper)<PaperProps>`
  box-shadow: rgba(0, 0, 0, 0.106) 0px 4px 6px -1px;
  border-left: solid 1px ${({ theme }) => theme.colors.borderDefault};

  width: 100%;
  max-width: 320px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;

  transition: 200ms;
  transform: translateX(100%);

  &.DrawerContent_open {
    transform: translateX(0);
  }
`;
