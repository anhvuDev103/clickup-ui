import { auth_layout_bg, auth_layout_bg_dots, auth_layout_bg_top } from '@assets';
import styled from 'styled-components';

export const MainLayoutFrame = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  .MainLayout_content {
    flex: 1;

    display: flex;
    align-items: stretch;
  }
`;

export const AuthLayoutFrame = styled.div`
  height: 100%;
  background-color: #fafbfc;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  .AuthLayout_content {
    display: flex;
    align-items: stretch;

    position: relative;
    flex-grow: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 70px;
  }

  .AuthLayout_contentMain {
    position: absolute;
    z-index: 2;

    width: 100%;
  }

  .AuthLayout_contentBg {
    position: absolute;
    height: calc(100% - 17vh);
    width: 100%;
    top: 17vh;
    left: 0;
    overflow: hidden;
    pointer-events: none;
    background: url(${auth_layout_bg}) center 10px no-repeat;
    background-size: cover;
    z-index: 1;

    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 200%;
      height: 300%;
      top: -100%;
      left: -50%;
      background: url(${auth_layout_bg_dots});
      transform: rotate(-28deg);
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: url(${auth_layout_bg_top}) center top no-repeat;
      background-size: 100%;
    }
  }
`;
