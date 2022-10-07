import { } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import escadas from '../../../assets/escadas.png'
import semPisoTatil from '../../../assets/sem-piso-tatil (1).png'
import desnivel from '../../../assets/desnivel (1).png'
import semBarra from '../../../assets/sem-barra (1).png'
import semBraile from '../../../assets/sem-braile (1).png'
import dimensoes from '../../../assets/dimensoes-incompativeis (1).png'
import semLibras from '../../../assets/sem-libras (1).png'
import { AccessibilityContainer,
  AccessibilityWrapper,
  Subtitle, 
  Title,
  Container,
  PicContainer,
  Image,
  Button,
  BackButton,
  TextButtons,
  Box,
  BoxContainer,
  BoxText } from './styles';

export function Accessibility() {
  return (
    <AccessibilityContainer>
      <Container>
      <Title>Qual sua dificuldade quanto ao acesso?</Title>
      <Subtitle>Conte-nos um pouco sobre as estruturas que dificultam a sua autonomia em um motel </Subtitle>

      </Container>
      
      <AccessibilityWrapper>
        <BoxContainer>
      <Box>
        <BoxText>
          Escadas
        </BoxText>
        </Box>
      <Box>
        <BoxText>
        Sem piso tátil 
        </BoxText>
      </Box>
      </BoxContainer>

      <BoxContainer>
      <Box>
      <BoxText>
          Desníveis
          </BoxText>
      </Box>
      <Box>
      <BoxText>
          Sem barras
          </BoxText>
      </Box>
      </BoxContainer>

      <BoxContainer>
      <Box>
      <BoxText>
          
          </BoxText>
      </Box>
      <Box>
      <BoxText>
          
          </BoxText>
      </Box>
      </BoxContainer>

      <BoxContainer>
      <Box>
      <BoxText>
          
          </BoxText>
      </Box>
      <Button>
        <TextButtons>Continuar</TextButtons>
      </Button>
      </BoxContainer>

      
      </AccessibilityWrapper>
<Container>


</Container>
    
    
    </AccessibilityContainer>
  );
}
