import styled from 'styled-components';

import { Paper } from '../Paper';

export const Modal = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 2;
`;

export const ModalBackdrop = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;

  background-color: #2a2e348f;
`;

export const ModalRoot = styled.div`
  position: fixed;
  inset: 0;
  z-index: 99;

  background-color: #2a2e348f;
`;
