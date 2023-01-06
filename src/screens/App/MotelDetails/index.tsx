import { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { Heart } from 'phosphor-react-native'
import { ScrollView, TouchableWithoutFeedback, View } from 'react-native'
import { Rating } from 'react-native-ratings'

import { CardAccessibility } from 'src/components/Card/CardAccessibility'
import { PriceRating } from 'src/components/PriceRating'
import { theme } from 'src/styles/theme'

import {
  MotelDetailsContainer,
  AddressText,
  ButtonHeart,
  ButtonNext,
  ButtonText,
  CommentText,
  MotelImage,
  MotelInfo,
  MotelInfoWrapper,
  MotelText,
  ReviewContainer,
  ReviewText,
  ReviewWrapper,
  TelephoneText,
  Title,
  ReviewContent,
  ModelTextRed,
} from './styles'

// TODO: configure route parameters
// TODO: create a section comment

export function MotelDetails() {
  const route = useRoute()

  const [favoriteMotel, setFavoriteMotel] = useState(false)

  // eslint-disable-next-line no-undef
  const motel = route.params as establishment

  return (
    <MotelDetailsContainer>
      <MotelImage
        source={{
          uri: 'https://cdn.guiademoteis.com.br/imagens/suites/big/1130_big_9188_1.jpg',
        }}
      />

      {/* TODO:  Create a button component */}
      <TouchableWithoutFeedback
        onPress={() => setFavoriteMotel((curr) => !curr)}
      >
        <ButtonHeart style={{ shadowOpacity: 0.29, elevation: 3 }}>
          <Heart
            weight="duotone"
            color={favoriteMotel ? theme.colors.red_900 : theme.colors.gray_500}
          />
        </ButtonHeart>
      </TouchableWithoutFeedback>

      <ScrollView>
        <MotelInfoWrapper>
          <Title>{motel.name}</Title>
          <AddressText>
            Avenida Pedro Álvares Cabral, 4765 - Castanheira - Belém - PA
          </AddressText>
          <TelephoneText>(091) 3244-1356</TelephoneText>

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
        </MotelInfoWrapper>

        <CardAccessibility
          uneeveness={true}
          bar={false}
          braille={true}
          elevator={true}
          signLanguage={false}
          tactileFloor={true}
          incompatibleDimensions={false}
        />

        <ReviewContainer>
          <Title>Avaliações</Title>
          <TelephoneText>Deixe sua opinião</TelephoneText>
          <ReviewWrapper>
            <ReviewContent>
              <ReviewText>3.0</ReviewText>
            </ReviewContent>
            <Rating
              type="custom"
              imageSize={20}
              readonly
              startingValue={3.0}
              ratingColor={theme.colors.red_900}
              ratingBackgroundColor={theme.colors.gray_700}
              style={{ marginLeft: 12, borderColor: '#000000' }}
            />
          </ReviewWrapper>
          <CommentText>Comente</CommentText>
        </ReviewContainer>

        <TouchableWithoutFeedback>
          <ButtonNext>
            <ButtonText>Ir até o motel</ButtonText>
          </ButtonNext>
        </TouchableWithoutFeedback>
      </ScrollView>
    </MotelDetailsContainer>
  )
}
