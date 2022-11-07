import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  CaretLeft,
  Gear,
  HouseSimple,
  MapTrifold
} from 'phosphor-react-native';

import { Home, Map, MotelDetails, Support } from '../screens/App/index';
import { theme } from 'src/styles/theme';

const { Navigator, Screen } = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function AppRoutes() {
  const navigation = useNavigation();

  return (
    <Navigator>
      <Screen
        name="Home"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
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

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'HomeTab') {
            return <HouseSimple color={color} size={size} />;
          } else if (route.name === 'MapTab') {
            return <MapTrifold color={color} size={size} />;
          } else if (route.name === 'SupportTab') {
            return <Gear color={color} size={size} />;
          }
        },
        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: '#990033',
        tabBarStyle: {
          backgroundColor: theme.colors.red_900,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true
      })}>
      <Tab.Screen name="MapTab" component={Map} />
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="SupportTab" component={Support} />
    </Tab.Navigator>
  );
}
