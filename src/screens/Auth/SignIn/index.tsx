import { TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import {
  LoginContainer,
  LoginButton,
  TextButton,
  LoginWrapper,
  UserInput,
  InputPassword,
  PasswordButton,
  PasswordText,
  TextSubmit,
  SingUpText,
  SingUpButtonText,
  Header,
  SingUpButton,
  Background,
} from './styles'

import { BackgroundSignIn, LogoWithText } from '@assets'


export function SignIn() {
  const navigation = useNavigation()

  function handlePasswordReset() {
    navigation.navigate('RecoverPassword')
  }

  function handleSingUp() {
    navigation.navigate('SignUp')
  }

  return (
    <LoginContainer>
      <Background source={BackgroundSignIn} resizeMode="cover">
        <Header>
          <Image source={LogoWithText} />

          <TextSubmit>
            Ache o melhor motel para experimentar sua independência
          </TextSubmit>
        </Header>
      </Background>

      <LoginWrapper>
        <UserInput>
          <TextInput placeholder="Usuário" placeholderTextColor="#bababa" />
        </UserInput>

        <InputPassword>
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#bababa"
            secureTextEntry
          ></TextInput>
        </InputPassword>

        <PasswordButton activeOpacity={0.7} onPress={handlePasswordReset}>
          <PasswordText>Esqueci a senha</PasswordText>
        </PasswordButton>

        <LoginButton activeOpacity={0.7}>
          <TextButton>Login </TextButton>
        </LoginButton>

        <SingUpText>
          Não possui conta? Faça o
          <SingUpButton onPress={handleSingUp}>
            <SingUpButtonText>cadastro</SingUpButtonText>
          </SingUpButton>
        </SingUpText>
      </LoginWrapper>
    </LoginContainer>
  )
}
