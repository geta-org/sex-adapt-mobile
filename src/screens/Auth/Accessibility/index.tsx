import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { ButtonBack } from 'src/components/Button/ButtonBack'
import { CardAccessDifficulty } from 'src/components/Card/CardAccessDifficulty'
import { userNeedList } from './userNeedList'

import {
  AccessibilityContainer,
  AccessibilityWrapper,
  Subtitle,
  Title,
  Button,
  Header,
  CardsWrapper,
  TextButton,
} from './styles'

interface userNeedProps {
  name: string
  isSelected: boolean
}

export function Accessibility() {
  const [userNeed, setUserNeed] = useState<userNeedProps[]>(userNeedList)

  function handleToggleUserNeed(accessibility: string) {
    const updatedUserNeed = userNeed.map((item) => ({ ...item }))

    const foundItem = updatedUserNeed.find(
      (item) => item.name === accessibility,
    )

    if (!foundItem) {
      throw new Error(
        'Could not find the item. A string was passed which does not exist in the "userNeed" object',
      )
    }

    foundItem.isSelected = !foundItem.isSelected
    setUserNeed(updatedUserNeed)
  }

  return (
    <SafeAreaView>
      <AccessibilityContainer>
        <ButtonBack />
        <Header>
          <Title>Qual sua necessidade quanto ao acesso?</Title>
          <Subtitle>
            Conte-nos um pouco sobre as estruturas que dificultam a sua
            autonomia em um motel
          </Subtitle>
        </Header>

        <AccessibilityWrapper>
          {userNeed.map((need) => (
            <CardsWrapper key={need.name}>
              <CardAccessDifficulty
                accessibility={need.name}
                onSelectDifficulty={handleToggleUserNeed}
                toggleAccessDifficulty={need.isSelected}
              />
            </CardsWrapper>
          ))}

          <Button activeOpacity={0.7}>
            <TextButton>Confirmar</TextButton>
          </Button>
        </AccessibilityWrapper>
      </AccessibilityContainer>
    </SafeAreaView>
  )
}
