import { } from 'react-native';
import escadas from '../../../assets/escadas.png'
import semPisoTatil from '../../../assets/sem-piso-tatil (1).png'
import desnivel from '../../../assets/desnivel (1).png'
import semBarra from '../../../assets/sem-barra (1).png'
import semBraile from '../../../assets/sem-braile (1).png'
import dimensoes from '../../../assets/dimensoes-incompativeis (1).png'
import semLibras from '../../../assets/sem-libras (1).png'
import { SignInContainer,
  SignInWrapper,
  Text, 
  TextSingUp,
  Container,
  PicContainer,
  Image,
  Button,
  BackButton,
  TextButtons } from './styles';

export function Accessibility() {
  return (
    <SignInContainer>
      <SignInWrapper>
        <Text>Qual a sua dificuldade quanto ao acesso?</Text>
        <TextSingUp>Conte-nos um pouco sobre as estruturas que dificultam a sua autonomia em um motel :(</TextSingUp>
      </SignInWrapper>

    <Container>
      <PicContainer>
      <Image source={escadas}/>
      </PicContainer>
      <PicContainer>
      <Image source={semPisoTatil}/>
      </PicContainer>
    </Container>

    <Container>
      <PicContainer>
      <Image source={desnivel}/>
      </PicContainer>
      <PicContainer>
      <Image source={semBarra}/>
      </PicContainer>
    </Container>

    <Container>
      <PicContainer>
      <Image source={semBraile}/>
      </PicContainer>
      <PicContainer>
      <Image source={dimensoes}/>
      </PicContainer>
    </Container>

    <Container>
    <PicContainer>
      <Image source={semLibras}/>
      <Button>
        <TextButtons>Continuar</TextButtons>
      </Button>
      <BackButton>
        <TextButtons>Voltar</TextButtons>
      </BackButton>
      </PicContainer>
    </Container>
    
    </SignInContainer>
  );
}
