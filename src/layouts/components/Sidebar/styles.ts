import { Flex } from '@uikit';
import styled from 'styled-components';

export const SidebarFrame = styled.div`
  width: 100%;
  max-width: 368px;
  background-color: ${({ theme }) => theme.colors.backgroundSubtle};
  border-right: 1px solid ${({ theme }) => theme.colors.borderDefault};

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
    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundMainHoverStrong};
    }
  }
`;

export const NavigatorFrame = styled(Flex)`
  .Navigator_link {
    text-decoration: none;
  }

  .Navigator_linkContent {
    height: 32px;
    border-radius: 6px;
    padding: 6px 10px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundMainHoverStrong};

      cursor: pointer;
    }
  }
`;

export const FavoritesFrame = styled(Flex)`
  .Favorites_expanseBtn {
    gap: 0;

    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundMainHoverStrong};

      cursor: pointer;
    }
  }

  .Favorites_actionBtn {
    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundMainHoverStrong};

      cursor: pointer;
    }
  }
`;

export const FavoriteItemFrame = styled(Flex)`
  height: 32px;
  border-radius: 6px;
  padding: 6px 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundMainHoverStrong};

    cursor: pointer;
  }
`;

export const SpacesFrame = styled(Flex)`
  .Spaces_actionBtn.text {
    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundMainHoverStrong};

      cursor: pointer;
    }
  }
`;
