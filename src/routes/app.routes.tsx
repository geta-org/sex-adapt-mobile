import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  getFocusedRouteNameFromRoute,
  useNavigation
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CaretLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';

import { Home, Map, MotelDetails, Support } from '../screens/App/index';

const { Navigator, Screen } = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeNavigation}
        options={({ route }) => ({
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            return { display: routeName === 'MotelDetails' ? 'none' : 'flex' };
          })(route)
        })}
      />
      <Tab.Screen name="MapTab" component={MapNavigation} />
      <Tab.Screen name="SupportTab" component={SupportNavigation} />
    </Tab.Navigator>
  );
}

function HomeNavigation() {
  const navigation = useNavigation();

  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="MotelDetails"
        component={MotelDetails}
        options={{
          title: 'Perfil',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <CaretLeft size={28} color="#333" weight="bold" />
            </TouchableOpacity>
          ),
          contentStyle: {
            height: 63,
            borderBottomWidth: 0,
            elevation: 0
          }
        }}
      />
    </Navigator>
  );
}

function MapNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Map" component={Map} />
    </Navigator>
  );
}

function SupportNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Support" component={Support} />
    </Navigator>
  );
}
