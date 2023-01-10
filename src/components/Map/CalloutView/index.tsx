/* eslint-disable jsx-a11y/alt-text */
import { Text } from "react-native";
import { Rating } from "react-native-ratings";
import { getDistance } from "geolib";
// import haversine from 'haversine-distance'

import { PriceRating } from "src/components/PriceRating";
import { theme } from "src/styles/theme";

import logo from "../../../../assets/icon.png";
import {
  CalloutViewContainer,
  CalloutViewWrapper,
  Distance,
  MotelLogo,
  MotelName,
  PriceWrapper,
  styles,
} from "./styles";

// eslint-disable-next-line no-undef
interface CalloutViewProps extends establishment {
  userLatitude: number;
  userLongitude: number;
}

export function CalloutView(props: CalloutViewProps) {
  const distanceBetweenMotel = (
    getDistance(
      { latitude: props.latitude, longitude: props.longitude },
      {
        latitude: props.userLatitude,
        longitude: props.userLongitude,
      }
    ) / 1000
  ).toFixed(1);

  // console.log(props.longitude)

  return (
    <CalloutViewContainer>
      <MotelLogo source={logo} />

      <CalloutViewWrapper>
        <MotelName>{props.name}</MotelName>

        <Text accessible={true}>
          Distância:&nbsp;
          <Distance>{distanceBetweenMotel} Km</Distance>
        </Text>

        <PriceWrapper>
          <Text>
            Preço:&nbsp;
            <PriceRating cost={3} />
          </Text>
        </PriceWrapper>

        <Rating
          type="custom"
          imageSize={20}
          readonly
          startingValue={
            props.average_grade == null ? 3.0 : props.average_grade
          }
          ratingColor={theme.colors.red_900}
          ratingBackgroundColor={theme.colors.gray_700}
          style={styles.rating}
        />
      </CalloutViewWrapper>
    </CalloutViewContainer>
  );
}

export default CalloutView;
