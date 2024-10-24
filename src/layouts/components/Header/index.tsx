import { clickup_symbol } from '@assets/icons';
import { Flex } from '@uikit';
import Image from '@uikit/components/Image';

import Actions from './Actions';
import Search from './Search';
import { HeaderFrame } from './styles';

const Header = () => {
  return (
    <HeaderFrame alignItems='stretch'>
      <Flex style={{ flex: 1 }}>
        <Image src={clickup_symbol} alt='logo' height={16} mx={2} pl='5px' />
      </Flex>
      <Search flex={1} my='2px' />
      <Actions flex={1} />
    </HeaderFrame>
  );
};

export default Header;
