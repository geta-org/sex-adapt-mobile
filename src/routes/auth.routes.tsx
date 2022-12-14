import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn, SignUp, RecoverPassword, Accessibility } from '../screens/Auth/index';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Accessibility" component={Accessibility} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="RecoverPassword" component={RecoverPassword} />
    </Navigator>
  );
}
