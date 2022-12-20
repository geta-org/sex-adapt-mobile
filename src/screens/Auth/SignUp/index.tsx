import { useNavigation } from '@react-navigation/native'
import { Text as Subtitle } from 'react-native'
import {
  TitleInput,
  Header,
  SingUpContainer,
  Input,
  Title,
  Button,
  TextButton,
  Container,
} from './styles'
import { CaretDoubleRight } from 'phosphor-react-native'
import { BackButton } from 'src/components/BackButton'

export function SignUp() {
  const navigation = useNavigation()

  function handleAccessibility() {
    navigation.navigate('Accessibility')
  }

  return (
    <SingUpContainer>
      <BackButton />
      <Container>
        <Title>Cadastro</Title>
        <Subtitle>
          Conte-nos um pouco mais sobre você para realizarmos o seu cadastro
        </Subtitle>
      </Container>

      <Header>
        <TitleInput>Usuário</TitleInput>
        <Input placeholder="Usuário" placeholderTextColor="#bababa"></Input>
        <TitleInput>E-mail</TitleInput>

        <Input
          placeholder="Insira seu e-mail"
          placeholderTextColor="#bababa"
        ></Input>
        <TitleInput>Senha</TitleInput>
        <Input
          placeholder="Senha"
          placeholderTextColor="#bababa"
          secureTextEntry
        ></Input>
        <TitleInput>Confirmação da senha </TitleInput>

        <Input
          placeholder="Senha"
          placeholderTextColor="#bababa"
          secureTextEntry
        />

        <Button activeOpacity={0.7} onPress={handleAccessibility}>
          <TextButton>Próximo</TextButton>
          <CaretDoubleRight size={32} color="#FFF" weight="bold" />
        </Button>
      </Header>
    </SingUpContainer>
  )
}
