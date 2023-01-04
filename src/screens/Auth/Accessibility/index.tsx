import { ButtonBack } from 'src/components/Button/ButtonBack'

import {
  FloorUneven,
  BarsWithSupport,
  PoundWithSupport,
  TactileFloorWith,
  BrailleWithSupport,
  ElevatorWith,
  DoorWide,
} from '@assets'

import {
  AccessibilityContainer,
  AccessibilityWrapper,
  Subtitle,
  Title,
  Button,
  TextButtons,
  AccessibilityBox,
  BoxContainer,
  TextBox,
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
          <AccessibilityBox>
            <ElevatorWith width={70} height={70} />
            <TextBox>Elevador</TextBox>
          </AccessibilityBox>

          <AccessibilityBox>
            <TactileFloorWith width={70} height={70} />
            <TextBox>Piso tátil</TextBox>
          </AccessibilityBox>
        </BoxContainer>

        <BoxContainer>
          <AccessibilityBox>
            <FloorUneven width={70} height={70} />
            <TextBox>Sem desníveis</TextBox>
          </AccessibilityBox>

          <AccessibilityBox>
            <BarsWithSupport width={70} height={70} />
            <TextBox> Barras de suporte</TextBox>
          </AccessibilityBox>
        </BoxContainer>

        <BoxContainer>
          <AccessibilityBox>
            <BrailleWithSupport width={70} height={70} />
            <TextBox> Sinalização em braile</TextBox>
          </AccessibilityBox>

          <AccessibilityBox>
            <DoorWide width={70} height={70} />
            <TextBox>Dimensões diversas</TextBox>
          </AccessibilityBox>
        </BoxContainer>

        <BoxContainer>
          <AccessibilityBox>
            <PoundWithSupport width={70} height={70} />
            <TextBox> Atendimento em Libras</TextBox>
          </AccessibilityBox>

          <Button activeOpacity={0.7}>
            <TextButtons>Confirmar</TextButtons>
          </Button>
        </BoxContainer>
      </AccessibilityWrapper>
    </AccessibilityContainer>
  )
}
