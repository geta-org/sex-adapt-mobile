import { Lock, NumberOne, User } from 'phosphor-react-native';
import { Text, StyleSheet, TextInput,Image, View, ImageBackground} from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import logoImg from '../../../assets/logotipo.png';
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


export function SignIn() {
  return (
    
    <LoginContainer>
      <StatusBar style="light" />
     <Background source={background} resizeMode='cover'>
      <Header>

      
      <Image source={logoImg}  />
       
      
      <TextSubmit>
        Ache o melhor motel para experimentar sua independência
      </TextSubmit>
      </Header>
      </Background>
      <LoginWrapper>
        <InputPassword>
         
          <TextInput placeholder="Usuário" placeholderTextColor="#bababa" />
        </InputPassword>

        <InputPassword>
          
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#bababa"
        
            secureTextEntry
          ></TextInput>
        </InputPassword>

        
        <PasswordButton activeOpacity={0.3}>
        <PasswordText>Esqueci a senha</PasswordText>
        </PasswordButton>

        <Button activeOpacity={0.3}>
          <TextButton>Login </TextButton>
        </Button>

       <AnotherButton>
        <TextSingUp>Não possui conta? Faça o      
        <TextAnother> cadastro</TextAnother>
        </TextSingUp>
        </AnotherButton>
               
      </LoginWrapper>
    </LoginContainer>
  );
}






