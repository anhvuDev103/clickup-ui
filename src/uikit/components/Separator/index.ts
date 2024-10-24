import styled from 'styled-components';

export const Separator = styled.div`
  width: 1px;
  height: 16px;
  margin: 0 4px;
  background-color: ${({ theme }) => theme.colors.backgroundOnDarkPressed};
`;
