import { Text as Subtitle } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ButtonBack } from 'src/components/Button/ButtonBack'
import { CaretDoubleRight } from 'phosphor-react-native'

import { InputForm } from 'src/components/Input/InputForm'

import {
  SingUpContainer,
  Title,
  Header,
  FormWrapper,
  TitleInput,
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
      <ButtonBack />
      <Header>
        <Title>Cadastro</Title>
        <Subtitle>
          Conte-nos um pouco mais sobre você para realizarmos o seu cadastro
        </Subtitle>
      </Header>

      <FormWrapper>
        <TitleInput>Usuário</TitleInput>
        <InputForm icon="user" label="Nome" placeholder="john doe" />

        <TitleInput>E-mail</TitleInput>
        <InputForm
          icon="mail"
          label="Insira seu e-mail"
          placeholder="john@doe.com"
        />

        <TitleInput>Senha</TitleInput>

        <InputForm
          icon="password"
          label="Senha"
          placeholder="******"
          secureTextEntry
        />

        <TitleInput>Confirmação da senha </TitleInput>

        <InputForm
          icon="password"
          label="Senha"
          placeholder="******"
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
