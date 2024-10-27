import styled, { keyframes } from 'styled-components';

const BtnBounceDelay = keyframes`
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

export const SpinnerFrame = styled.div`
  display: flex;
  height: 50px;
  max-width: 50px;
  align-items: center;
  justify-content: center;

  & > div {
    width: 12px;
    height: 12px;
    background-color: #fff;
    border-radius: 100%;
    display: inline-block;
    animation: ${BtnBounceDelay} 1.4s infinite ease-in-out both;
  }

  .Spinner_bounce1 {
    animation-delay: -0.32s;
  }

  .Spinner_bounce2 {
    animation-delay: -0.16s;
  }

  .Spinner_bounce3 {
  }
`;
