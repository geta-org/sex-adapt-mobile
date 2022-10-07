import { TouchableWithoutFeedback, View } from 'react-native';

import {
  CardMotelContainer,
  MotelAccessibility,
  MotelText,
  MotelLogo,
  MotelTextField,
  MotelTitle,
  MotelWrapper,
  MotelInfo,
  ModelTextRed
} from './styles';

import logo from '../../../../assets/icon.png';
import { PriceRating } from '../../PriceRating';
import { Rating } from 'react-native-ratings';
import { CardAccessibility } from '../CardAccessibility';
import { theme } from 'src/styles/theme';

export function CardMotel(props: any) {
  return (
    <TouchableWithoutFeedback
      accessibilityLabel={'Card de ' + props.nome}
      accessibilityHint={'Navega para página de ' + props.nome}
      accessibilityRole={'button'}
      onPress={props.press}>
      <CardMotelContainer>
        <MotelWrapper>
          <MotelLogo accessibilityLabel={'Logo do motel x '} source={logo} />
          <MotelTextField>
            <MotelTitle>Motel Locomotiva</MotelTitle>
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
              style={{ alignSelf: 'flex-start', paddingVertical: 1.8 }}
            />
          </MotelTextField>
        </MotelWrapper>
        <MotelAccessibility>
          <CardAccessibility uneeveness />
        </MotelAccessibility>
      </CardMotelContainer>
    </TouchableWithoutFeedback>
  );
}
