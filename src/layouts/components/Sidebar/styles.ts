import { Box, Flex } from '@uikit';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import SidebarItem from './SidebarItem';

export const SidebarFrame = styled(Flex)`
  width: 100%;
  max-width: 368px;
  background-color: ${({ theme }) => theme.colors.backgroundSubtle};
  border-right: 1px solid ${({ theme }) => theme.colors.borderDefault};

  &:hover {
    .Sidebar_sidebarToggleBtn {
      opacity: 1;
    }
  }

  .Sidebar_head {
  }

  .Sidebar_workspaceOptions {
    display: flex;
    align-items: center;

    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundMainHoverStrong};

      cursor: pointer;
    }
  }

  .Sidebar_sidebarToggleBtn {
    opacity: 0;
    transition: 200ms;

    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundMainHoverStrong};
    }
  }

  .Sidebar_scrollable {
    flex: 1 1 0;
    min-height: 0;
    overflow-y: auto;
    margin-right: 2px;
  }
`;

export const SidebarItemFlex = styled(Flex)`
  height: 32px;
  border-radius: 6px;
  padding: 6px 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundMainHoverStrong};

    cursor: pointer;
  }
`;

export const SidebarItemFrame = styled(Flex)``;

export const NavigatorFrame = styled(Flex)``;

export const NavigatorItem = styled(SidebarItem)`
  width: 100%;
`;

export const FavoritesFrame = styled(Flex)`
  &.Favorites_isExpand {
    .Favorites_expanseBtn {
      svg {
        rotate: 0deg;
      }
    }
  }

  .Favorites_expanseBtn {
    gap: 0;

    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundMainHoverStrong};

      cursor: pointer;
    }

    svg {
      rotate: -90deg;
      transition: 200ms;
    }
  }

  .Favorites_actionBtn {
    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundMainHoverStrong};

      cursor: pointer;
    }
  }

  .Favorites_list {
    max-height: 0;
    overflow: hidden;
    transition: 200ms;
  }
`;

export const SpaceNodeFrame = styled(SidebarItemFlex)`
  padding-block: 0;
  &:hover {
    .SpaceNode_expandBtn {
      display: inline-block;
    }

    .SpaceNode_icon {
      display: none;
    }
  }

  &.SpaceNode_opened {
    .SpaceNode_expandBtn {
      svg {
        rotate: 90deg;
      }
    }
  }

  a {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
  }

  .SpaceNode_expandBtn {
    display: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundOnSubtleHover};
    }

    &:active {
      background-color: transparent;
    }

    svg {
      transition: 200ms;
    }
  }

  .SpaceNode_icon {
    flex-shrink: 0;
    width: 20px;
    height: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .SpaceNode_listBtn {
    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundOnSubtleHover};
    }

    &:active {
      background-color: transparent;
    }
  }
`;

export const FavoriteItemFrame = styled(SidebarItem)``;

export const SpacesFrame = styled(Flex)`
  .Spaces_actionBtn.text {
    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundMainHoverStrong};

      cursor: pointer;
    }
  }
`;

export const SpaceItemFrame = styled(SidebarItem)`
  width: 100%;
`;

export const SpaceTreeFrame = styled(Box)`
  [role='tree'] {
    height: fit-content !important;

    & > div {
      height: fit-content !important;
    }
  }
`;

export const SidebarFooterFrame = styled(Flex)`
  /* position: absolute;
  left: 0;
  right: 0;
  bottom: 0; */

  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};

  .SidebarFooter_actionBtn {
    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundOnMainHover};
    }
  }
`;
