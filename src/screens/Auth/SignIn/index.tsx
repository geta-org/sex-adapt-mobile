import { Lock, NumberOne, User } from 'phosphor-react-native';
import {
  Text,
  StyleSheet,
  TextInput,
  Image,
  View,
  ImageBackground
} from 'react-native';
//import React, { useState } from 'react';
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
  Title,
  TextSingUp,
  ButtonSingUp,
  TextAnother,
  Header,
  AnotherButton,
  Input,
  Background
} from './styles';
import { SignUp } from '../SignUp';

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
      <StatusBar style="light" />
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
          <TextSingUp>
            Não possui conta? Faça o<TextAnother> cadastro</TextAnother>
          </TextSingUp>
        </AnotherButton>
      </LoginWrapper>
    </LoginContainer>
  );
}
