/* eslint-disable camelcase */
import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import { Routes } from "./src/routes";
import { Loading } from "./src/components/Loading";
import { GlobalContext } from "./src/contexts/GlobalContext";
import { useEffect } from "react";
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    (async () => {
      const { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      // eslint-disable-next-line no-unused-vars
      const { coords } = await getCurrentPositionAsync({});
    })();
  }, []);

  return (
    <GlobalContext>
      {fontsLoaded ? (
        <Routes />
      ) : (
        <Loading isTransparent={false} size="large" />
      )}
      <StatusBar />
    </GlobalContext>
  );
}
