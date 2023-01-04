import { ButtonBack } from 'src/components/Button/ButtonBack'
import { CardAccessDifficulty } from 'src/components/Card/CardAccessDifficulty'

import {
  AccessibilityContainer,
  AccessibilityWrapper,
  Subtitle,
  Title,
  Button,
  TextButtons,
  BoxContainer,
  Header,
} from './styles'

export function Accessibility() {
  return (
    <AccessibilityContainer>
      <ButtonBack />
      <Header>
        <Title>Qual sua necessidade quanto ao acesso?</Title>
        <Subtitle>
          Conte-nos um pouco sobre as estruturas que dificultam a sua autonomia
          em um motel
        </Subtitle>
      </Header>

      <AccessibilityWrapper>
        <BoxContainer>
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
        </BoxContainer>

        <BoxContainer>
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
        </BoxContainer>

        <BoxContainer>
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
        </BoxContainer>

        <BoxContainer>
          <CardAccessDifficulty
            accessibility="ServicePounds"
            onSelectDifficulty={(Text) => console.log(Text)}
            toggleAccessDifficulty={false}
          />

          <Button activeOpacity={0.7}>
            <TextButtons>Confirmar</TextButtons>
          </Button>
        </BoxContainer>
      </AccessibilityWrapper>
    </AccessibilityContainer>
  )
}
