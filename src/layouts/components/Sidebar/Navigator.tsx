import { ROUTES } from '@configs/app/routes';
import { Flex, Text } from '@uikit';
import { NavLink } from 'react-router-dom';

import { NavigatorFrame } from './styles';

const Navigator = () => {
  return (
    <NavigatorFrame flexDirection='column' alignItems='stretch' mt={2} gap='2px'>
      {ROUTES.map((route) => {
        const Icon = route.icon;

        return (
          <NavLink to={route.path} className='Navigator_link'>
            <Flex gap='10px' color='contentDefault' justifyContent='unset' mx={2} className='Navigator_linkContent'>
              <Icon width={20} height={20} />
              <Text variant='regular14'>{route.label}</Text>
            </Flex>
          </NavLink>
        );
      })}
    </NavigatorFrame>
  );
};

export default Navigator;
