import { useState } from 'react'
import { ButtonBase } from 'src/components/Button/ButtonBase'
import { ButtonRight, FilterContainer, Label, ShowMeWrapper } from './styles'

export function Filter() {
  const [isEnabled, setIsEnabled] = useState({
    all: true,
    favorites: false,
  })

  function handleToggleAll() {
    setIsEnabled({
      all: true,
      favorites: false,
    })
  }

  function handleToggleFavorites() {
    setIsEnabled({
      all: false,
      favorites: true,
    })
  }

  return (
    <FilterContainer>
      <Label>Me mostre:</Label>

      <ShowMeWrapper>
        <ButtonBase
          text="Todos"
          active={isEnabled.all}
          onPress={handleToggleAll}
        />
        <ButtonRight>
          <ButtonBase
            text="Favoritos"
            active={isEnabled.favorites}
            onPress={handleToggleFavorites}
          />
        </ButtonRight>
      </ShowMeWrapper>
    </FilterContainer>
  )
}
