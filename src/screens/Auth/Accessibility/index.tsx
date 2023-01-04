import { SafeAreaView } from 'react-native-safe-area-context'
import { ButtonBack } from 'src/components/Button/ButtonBack'
import { CardAccessDifficulty } from 'src/components/Card/CardAccessDifficulty'

import {
  AccessibilityContainer,
  AccessibilityWrapper,
  Subtitle,
  Title,
  Button,
  TextButtons,
  Header,
  CardRow,
} from './styles'

export function Accessibility() {
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
          <CardRow>
            <CardAccessDifficulty
              accessibility="Elevator"
              onSelectDifficulty={(Text) => console.log(Text)}
              toggleAccessDifficulty={true}
            />

            <CardAccessDifficulty
              accessibility="TactileFloor"
              onSelectDifficulty={(Text) => console.log(Text)}
              toggleAccessDifficulty={true}
            />
          </CardRow>

          <CardRow>
            <CardAccessDifficulty
              accessibility="FloorUneven"
              onSelectDifficulty={(Text) => console.log(Text)}
              toggleAccessDifficulty={true}
            />

            <CardAccessDifficulty
              accessibility="SupportBars"
              onSelectDifficulty={(Text) => console.log(Text)}
              toggleAccessDifficulty={true}
            />
          </CardRow>

          <CardRow>
            <CardAccessDifficulty
              accessibility="BrailleSignage"
              onSelectDifficulty={(Text) => console.log(Text)}
              toggleAccessDifficulty={true}
            />

            <CardAccessDifficulty
              accessibility="DifferentDimensions"
              onSelectDifficulty={(Text) => console.log(Text)}
              toggleAccessDifficulty={false}
            />
          </CardRow>

          <CardRow>
            <CardAccessDifficulty
              accessibility="ServicePounds"
              onSelectDifficulty={(Text) => console.log(Text)}
              toggleAccessDifficulty={false}
            />

            <Button activeOpacity={0.7}>
              <TextButtons>Confirmar</TextButtons>
            </Button>
          </CardRow>
        </AccessibilityWrapper>
      </AccessibilityContainer>
    </SafeAreaView>
  )
}
