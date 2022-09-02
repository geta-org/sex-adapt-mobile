import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import { theme } from './src/styles/theme';
import { Routes } from './src/routes';
import { Text } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        {fontsLoaded ? <Routes /> : <Text>Loading...</Text>}
        <StatusBar />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
