import Text, { Flex } from '@uikit';
import { FlexProps } from '@uikit/components/Box/types';
import { SearchIcon } from '@uikit/components/Svg';
import styled from 'styled-components';

const Search: React.FC<FlexProps> = (props) => {
  return (
    <SearchFrame borderRadius={1.5} gap={2} justifyContent='center' {...props}>
      <SearchIcon width={16} height={16} color='contentOnDarkSecondary' />
      <Text variant='regular14' color='contentOnDarkSecondary'>
        Search...
      </Text>
    </SearchFrame>
  );
};

const SearchFrame = styled(Flex)`
  position: relative;
  overflow: hidden;

  width: 100%;
  max-width: 500px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: ${({ theme }) => theme.colors.backgroundOnDarkHover};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundOnDarkHover};
    cursor: pointer;
  }
`;

export default Search;
