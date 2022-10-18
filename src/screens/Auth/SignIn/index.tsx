import { TextInput, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import logoImg from '../../../assets/logotipo.png';
import { useNavigation } from '@react-navigation/native';
import background from '../../../assets/background-login.png';
import {
  LoginContainer,
  Button,
  TextButton,
  LoginWrapper,
  InputUser,
  InputPassword,
  PasswordButton,
  PasswordText,
  TextSubmit,
  SingUpText,
  TextAnother,
  Header,
  AnotherButton,
  Background
} from './styles';
import { SignUp } from '../SignUp';
import { useEffect } from 'react';

export function SignIn() {
  const navigation = useNavigation();

  function handlePasswordReset() {
    navigation.navigate('RecoverPassword');
  }

  function handleSingUp() {
    navigation.navigate('SignUp');
  }

  return (
    <LoginContainer>
      <Background source={background} resizeMode="cover">
        <Header>
          <Image source={logoImg} />

          <TextSubmit>
            Ache o melhor motel para experimentar sua independência
          </TextSubmit>
        </Header>
      </Background>
      <LoginWrapper>
        <InputUser>
          <TextInput placeholder="Usuário" placeholderTextColor="#bababa" />
        </InputUser>

        <InputPassword>
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#bababa"
            secureTextEntry></TextInput>
        </InputPassword>

        <PasswordButton activeOpacity={0.3} onPress={handlePasswordReset}>
          <PasswordText>Esqueci a senha</PasswordText>
        </PasswordButton>

        <Button activeOpacity={0.3}>
          <TextButton>Login </TextButton>
        </Button>

        <AnotherButton onPress={handleSingUp}>
          <SingUpText>
            Não possui conta? Faça o<TextAnother> cadastro</TextAnother>
          </SingUpText>
        </AnotherButton>
      </LoginWrapper>
    </LoginContainer>
  );
}
