import {} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  FloorUneven,
  BarsWithSupport,
  PoundWithSupport,
  TactileFloorWith,
  BrailleWithSupport,
  ElevatorWith,
  DoorWide
} from '@assets';

import {
  AccessibilityContainer,
  AccessibilityWrapper,
  Subtitle,
  Title,
  Container,
  Button,
  TextButtons,
  Box,
  BoxContainer,
  BoxText
} from './styles';
import { StatusBar } from 'expo-status-bar';
import { CaretLeft } from 'phosphor-react-native';
import { BackButton } from 'src/components/BackButton';

export function Accessibility() {
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <AccessibilityContainer>
      <BackButton />
      <Container>
        <Title>Qual sua necessidade quanto ao acesso?</Title>
        <Subtitle>
          Conte-nos um pouco sobre as estruturas que dificultam a sua autonomia
          em um motel
        </Subtitle>
      </Container>
      <AccessibilityWrapper>
        <BoxContainer>
          <Box>
            <ElevatorWith width={70} height={70} />
            <BoxText>Elevador</BoxText>
          </Box>

          <Box>
            <TactileFloorWith width={70} height={70} />
            <BoxText>Piso tátil</BoxText>
          </Box>
        </BoxContainer>

        <BoxContainer>
          <Box>
            <FloorUneven width={70} height={70} />
            <BoxText>Sem desníveis</BoxText>
          </Box>

          <Box>
            <BarsWithSupport width={70} height={70} />
            <BoxText> Barras de suporte</BoxText>
          </Box>
        </BoxContainer>

        <BoxContainer>
          <Box>
            <BrailleWithSupport width={70} height={70} />
            <BoxText> Sinalização em braile</BoxText>
          </Box>

          <Box>
            <DoorWide width={70} height={70} />
            <BoxText>Dimensões diversas</BoxText>
          </Box>
        </BoxContainer>

        <BoxContainer>
          <Box>
            <PoundWithSupport width={70} height={70} />
            <BoxText> Atendimento em Libras</BoxText>
          </Box>
          <Button>
            <TextButtons activeOpacity={0.7}>Continuar</TextButtons>
          </Button>
        </BoxContainer>
      </AccessibilityWrapper>
    </AccessibilityContainer>
  );
}
