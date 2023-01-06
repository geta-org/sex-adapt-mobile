/* eslint-disable jsx-a11y/alt-text */
import { Marker } from "react-native-maps";
import { Image } from "react-native";

import { PinUser } from "@assets";
import { styles } from "./styles";

interface UserMarkerProps {
  latitude: number;
  longitude: number;
}

export function UserMarker({ latitude, longitude }: UserMarkerProps) {
  return (
    <Marker coordinate={{ latitude, longitude }} style={styles.marker}>
      <Image source={PinUser} />
    </Marker>
  );
}
