import { ROUTES } from '@configs/app/routes';
import { Text } from '@uikit';
import { NavLink } from 'react-router-dom';

import { NavigatorFrame, NavigatorItem } from './styles';

const Navigator = () => {
  return (
    <NavigatorFrame flexDirection='column' alignItems='stretch' mt={2} gap='2px'>
      {ROUTES.filter((route) => route.navigation).map((route) => {
        const Icon = route.icon!;

        return (
          <NavLink to={route.path} className='Navigator_link'>
            <NavigatorItem gap='10px' color='contentDefault' justifyContent='unset' mx={2}>
              <Icon width={20} height={20} />
              <Text variant='regular14'>{route.label}</Text>
            </NavigatorItem>
          </NavLink>
        );
      })}
    </NavigatorFrame>
  );
};

export default Navigator;
