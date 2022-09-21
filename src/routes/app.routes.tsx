import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Map } from '../screens/App/index';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Map" component={Map} />
    </Navigator>
  );
}
