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
  Button,
  TextButton,
  InputContainer,
  Label,
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
        <InputContainer>
          <Label>Usuário</Label>
          <InputForm icon="user" label="Nome" placeholder="john doe" />
        </InputContainer>

        <InputContainer>
          <Label>E-mail</Label>
          <InputForm
            icon="mail"
            label="Insira seu e-mail"
            placeholder="john@doe.com"
          />
        </InputContainer>

        <InputContainer>
          <Label>Senha</Label>
          <InputForm
            icon="password"
            label="Senha"
            placeholder="******"
            secureTextEntry
          />
        </InputContainer>

        <InputContainer>
          <Label>Confirmação da senha</Label>
          <InputForm
            icon="password"
            label="Senha"
            placeholder="******"
            secureTextEntry
          />
        </InputContainer>

        <Button activeOpacity={0.7} onPress={handleAccessibility}>
          <TextButton>Próximo</TextButton>
          <CaretDoubleRight size={32} color="#FFF" weight="bold" />
        </Button>
      </FormWrapper>
    </SingUpContainer>
  )
}
