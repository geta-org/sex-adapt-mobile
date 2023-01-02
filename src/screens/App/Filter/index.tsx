import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Dimensions } from 'react-native'

import { ButtonBase } from 'src/components/Button/ButtonBase'
import { FilterSlider } from 'src/components/Filter/FilterSlider'

import {
  FilterContainer,
  FilterWrapper,
  GoBackWrapper,
  Label,
  ShowMeWrapper,
} from './styles'

export function Filter() {
  const navigation = useNavigation()

  const [userPreferences, setUserPreferences] = useState({
    listMotels: 'all',
    price: 30,
    positionTextPrice: 0,
    distance: 1,
    positionTextDistance: 0,
  })

  function handleToggleAll() {
    setUserPreferences((prev) => ({
      ...prev,
      listMotels: 'all',
    }))
  }

  function handleToggleFavorites() {
    setUserPreferences((prev) => ({
      ...prev,
      listMotels: 'favorites',
    }))
  }

  const windowWidth = Dimensions.get('window').width
  const windowWidthWithoutPadding = windowWidth - 32 - 56

  function handleChangePrice(value: number) {
    const positionText = ((value - 30) * windowWidthWithoutPadding) / 100

    setUserPreferences((prev) => ({
      ...prev,
      price: value,
      positionTextPrice: positionText,
    }))
  }

  function handleChangeDistance(value: number) {
    const positionText = ((value - 1) * 4.8 * windowWidthWithoutPadding) / 100

    setUserPreferences((prev) => ({
      ...prev,
      distance: value,
      positionTextDistance: positionText,
    }))
  }

  const handleGoBack = () => {
    navigation.goBack()
  }

  return (
    <FilterContainer>
      <Label>Me mostre:</Label>
      <ShowMeWrapper>
        <ButtonBase
          text="Todos"
          active={userPreferences.listMotels === 'all'}
          onPress={handleToggleAll}
        />
        <ButtonBase
          text="Favoritos"
          active={userPreferences.listMotels === 'favorites'}
          onPress={handleToggleFavorites}
        />
      </ShowMeWrapper>

      <FilterWrapper>
        <FilterSlider
          heading={'Preço'}
          minimumValue={30}
          maximumValue={120}
          text={'R$' + userPreferences.price}
          textPosition={userPreferences.positionTextPrice}
          changeValue={handleChangePrice}
        />

        <FilterSlider
          heading={'Distância'}
          minimumValue={1}
          maximumValue={20}
          text={userPreferences.distance + 'Km'}
          textPosition={userPreferences.positionTextDistance}
          changeValue={handleChangeDistance}
        />
      </FilterWrapper>

      <GoBackWrapper>
        <ButtonBase text="Aplicar" onPress={handleGoBack} />
      </GoBackWrapper>
    </FilterContainer>
  )
}
