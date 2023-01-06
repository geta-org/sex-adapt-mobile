import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { useEffect, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  enableNetworkProviderAsync,
  Accuracy,
} from "expo-location";

import MapViewDirections from "react-native-maps-directions";

import { UserMarker } from "src/components/Map/UserMarker";
import { MotelMarker } from "src/components/Map/MotelMarker";

import { MapContainer, mapStyle, styles } from "./styles";
import { HeaderMotel } from "src/components/HeaderMotel";

interface UserProps {
  latitude: number;
  longitude: number;
}

const initialRegion = {
  latitude: -1.4612767,
  longitude: -48.490165,
  latitudeDelta: 0.04,
  longitudeDelta: 0.04,
};

export function Map() {
  const [region, setRegion] = useState({
    latitude: -1.4612767,
    longitude: -48.490165,
    latitudeDelta: 0.04,
    longitudeDelta: 0.04,
  });

  const [userLocation, setUserLocation] = useState<UserProps>({
    latitude: -1.4612767,
    longitude: -48.490165,
  });

  const [navigation, setNavigation] = useState(false);
  const [destiny, setDestiny] = useState({
    latitude: -1.361,
    longitude: -48.403945651296,
  });

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    (async () => {
      const { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      const { coords } = await getCurrentPositionAsync({
        accuracy: Accuracy.High,
      });

      const { latitude, longitude } = coords;

      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.004,
        longitudeDelta: 0.004,
      });
    })();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    (async () => {
      const { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      const { coords } = await getCurrentPositionAsync({
        timeInterval: 5000,
        accuracy: Accuracy.Highest,
      });
      enableNetworkProviderAsync();
      const { latitude, longitude } = coords;

      setUserLocation({
        latitude,
        longitude,
      });
    })();
  });

  // DEV
  const moteis = [
    {
      id: 1,
      name: "Locomotiva",
      price: 3,
      average_grade: 3,
      latitude: -1.4612767,
      longitude: -48.490165,
    },
  ];

  return (
    <MapContainer>
      <HeaderMotel onChangeText={() => console.log("search")} />
      <MapView
        initialRegion={initialRegion}
        region={region}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={mapStyle}
      >
        {navigation === false ? (
          <>
            <UserMarker
              latitude={userLocation.latitude}
              longitude={userLocation.longitude}
            />

            {moteis.map((motel) => (
              <MotelMarker
                key={motel.id}
                latitude={motel.latitude}
                longitude={motel.longitude}
                userLatitude={userLocation.latitude}
                userLongitude={userLocation.longitude}
                name={motel.name}
                price={motel.price}
                average_grade={motel.average_grade}
              />
            ))}
          </>
        ) : (
          <>
            <UserMarker
              latitude={userLocation.latitude}
              longitude={userLocation.longitude}
            />

            {moteis.map((motel) => (
              <MotelMarker
                key={motel.id}
                latitude={motel.latitude}
                longitude={motel.longitude}
                userLatitude={userLocation.latitude}
                userLongitude={userLocation.longitude}
                name={motel.name}
                price={motel.price}
                average_grade={motel.average_grade}
              />
            ))}

            <MapViewDirections
              origin={{
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
              }}
              destination={destiny}
              apikey={""}
              strokeWidth={5}
              strokeColor="#CC3333"
            />
          </>
        )}
      </MapView>
    </MapContainer>
  );
}
