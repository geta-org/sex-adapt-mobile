/* eslint-disable jsx-a11y/alt-text */
import { TextInput, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {
  LoginContainer,
  LoginButton,
  TextButton,
  LoginWrapper,
  UserInput,
  PasswordInput,
  PasswordButton,
  PasswordText,
  Subtitle,
  SingUpText,
  SingUpButtonText,
  Header,
  BackgroundLogin,
} from "./styles";

import { BackgroundSignIn, LogoWithText } from "@assets";

export function SignIn() {
  const navigation = useNavigation();

  function handlePasswordReset() {
    navigation.navigate("RecoverPassword");
  }

  function handleSingUp() {
    navigation.navigate("SignUp");
  }

  return (
    <LoginContainer>
      <BackgroundLogin source={BackgroundSignIn} resizeMode="cover">
        <Header>
          <Image source={LogoWithText} />

          <Subtitle>
            Ache o melhor motel para experimentar sua independência
          </Subtitle>
        </Header>
      </BackgroundLogin>

      <LoginWrapper>
        <UserInput>
          <TextInput placeholder="Usuário" placeholderTextColor="#bababa" />
        </UserInput>

        <PasswordInput>
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#bababa"
            secureTextEntry
          />
        </PasswordInput>

        <PasswordButton activeOpacity={0.7} onPress={handlePasswordReset}>
          <PasswordText>Esqueci a senha</PasswordText>
        </PasswordButton>

        <LoginButton activeOpacity={0.7}>
          <TextButton>Login </TextButton>
        </LoginButton>

        <SingUpText onPress={handleSingUp}>
          Não possui conta? Faça o <SingUpButtonText>cadastro</SingUpButtonText>
        </SingUpText>
      </LoginWrapper>
    </LoginContainer>
  );
}
