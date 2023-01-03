import { Text as Subtitle } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ButtonBack } from 'src/components/Button/ButtonBack'
import { CaretDoubleRight } from 'phosphor-react-native'

import {
  SingUpContainer,
  Title,
  Header,
  FormWrapper,
  TitleInput,
  Input,
  Button,
  TextButton,
} from './styles'

export function SignUp() {
  const navigation = useNavigation()

  function handleAccessibility() {
    navigation.navigate('Accessibility')
  }

  return (
    <SingUpContainer>
      <Header>
        <ButtonBack />

        <Title>Cadastro</Title>
        <Subtitle>
          Conte-nos um pouco mais sobre você para realizarmos o seu cadastro
        </Subtitle>
      </Header>

      <FormWrapper>
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
      </FormWrapper>
    </SingUpContainer>
  )
}
