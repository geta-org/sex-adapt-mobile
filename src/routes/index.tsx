import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
