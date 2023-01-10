import { useNavigation } from '@react-navigation/native'
import { CaretDoubleRight } from 'phosphor-react-native'

import { DismissKeyboard } from 'src/utils/DismissKeyBoard'

import { InputForm } from 'src/components/Input/InputForm'
import { ButtonBack } from 'src/components/Button/ButtonBack'

import {
  SingUpContainer,
  Title,
  Header,
  FormWrapper,
  Button,
  TextButton,
  InputContainer,
  Label,
  Subtitle,
} from './styles'

export function SignUp() {
  const navigation = useNavigation()

  function handleAccessibility() {
    navigation.navigate('Accessibility')
  }

  return (
    <DismissKeyboard>
      <SingUpContainer>
        <ButtonBack />
        <Header>
          <Title>Cadastro</Title>
          <Subtitle>
            Conte-nos um pouco mais sobre você para realizarmos o seu cadastro
          </Subtitle>
        </Header>

        <FormWrapper>
          <InputContainer>
            <Label>Usuário</Label>
            <InputForm
              icon="user"
              label="Nome"
              placeholder="john doe"
              returnKeyType="next"
            />
          </InputContainer>

          <InputContainer>
            <Label>E-mail</Label>
            <InputForm
              icon="mail"
              label="Insira seu e-mail"
              placeholder="john@doe.com"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
            />
          </InputContainer>

          <InputContainer>
            <Label>Senha</Label>
            <InputForm
              icon="password"
              label="Senha"
              placeholder="******"
              secureTextEntry
              returnKeyType="next"
            />
          </InputContainer>

          <InputContainer>
            <Label>Confirmação da senha</Label>
            <InputForm
              icon="password"
              label="Senha"
              placeholder="******"
              secureTextEntry
              returnKeyType="done"
            />
          </InputContainer>
        </FormWrapper>

        <Button activeOpacity={0.7} onPress={handleAccessibility}>
          <TextButton>Próximo</TextButton>
          <CaretDoubleRight size={24} color="#FFF" weight="bold" />
        </Button>
      </SingUpContainer>
    </DismissKeyboard>
  )
}
