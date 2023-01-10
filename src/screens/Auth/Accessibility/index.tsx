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
  // eslint-disable-next-line no-unused-vars
  const [userNeed, setUserNeed] = useState<userNeedProps[]>(userNeedList)

  function handleToggleUserNeed() {}

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
