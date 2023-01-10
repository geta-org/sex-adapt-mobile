import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Rating } from "react-native-ratings";

import {
  CardMotelContainer,
  MotelAccessibility,
  MotelText,
  MotelLogo,
  MotelTextField,
  MotelTitle,
  MotelWrapper,
  MotelInfo,
  ModelTextRed,
} from "./styles";

import { CardAccessibility } from "../CardAccessibility";
import { PriceRating } from "../../PriceRating";
import logo from "../../../../assets/icon.png";

import { theme } from "src/styles/theme";

// TODO: TYPE MOTEL DATA

interface CardMotelProps {
  name: string;
}

interface Props extends TouchableWithoutFeedbackProps {
  data: CardMotelProps;
}

export function CardMotel({ data, ...rest }: Props) {
  const navigation = useNavigation();

  function handleOpenMotel() {
    navigation.navigate("MotelDetails", { name: data.name });
  }

  return (
    <TouchableWithoutFeedback
      accessibilityLabel={"Card de nome do motel"}
      accessibilityHint={"Navega para página do motel"}
      accessibilityRole={"button"}
      onPress={handleOpenMotel}
      {...rest}
    >
      <CardMotelContainer>
        <MotelWrapper>
          <MotelLogo accessibilityLabel={"Logo do motel x "} source={logo} />
          <MotelTextField>
            <MotelTitle>{data.name}</MotelTitle>
            <MotelText>Av. Pedro Álvares C. - Sacramenta</MotelText>
            <MotelInfo>
              <MotelText accessible={true}>
                Distância:&nbsp;
                <ModelTextRed>10 Km</ModelTextRed>
              </MotelText>

              <View accessible={true}>
                <MotelText>
                  Preço:&nbsp; <PriceRating cost={2} />
                </MotelText>
              </View>
            </MotelInfo>

            <Rating
              type="custom"
              imageSize={20}
              readonly
              startingValue={3.0}
              ratingColor={theme.colors.red_900}
              ratingBackgroundColor={theme.colors.gray_700}
              style={{ alignSelf: "flex-start", paddingVertical: 1.8 }}
            />
          </MotelTextField>
        </MotelWrapper>
        <MotelAccessibility>
          <CardAccessibility
            uneeveness={true}
            bar={false}
            braille={true}
            elevator={true}
            signLanguage={false}
            tactileFloor={true}
            incompatibleDimensions={false}
          />
        </MotelAccessibility>
      </CardMotelContainer>
    </TouchableWithoutFeedback>
  );
}
