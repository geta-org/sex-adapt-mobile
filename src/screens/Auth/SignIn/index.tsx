import { NumberOne } from 'phosphor-react-native';
import { Text, StyleSheet, TextInput, StatusBar } from 'react-native';
import React, { useState } from 'react';

import {
  LoginContainer,
  Button,
  TextButton,
  LoginWrapper,
  Input,
  PasswordButton,
  PasswordText,
  TextSubmit,
  Title,
  TextSingUp,
  ButtonSingUp,
  TextAnother,
  Header,
} from './styles';


export function SignIn() {
  return (
    <LoginContainer>
      <StatusBar  barStyle={'light-content'} />
      <Header>
      <Title>SexAdapt</Title>
      <TextSubmit>
        Ache o melhor motel para experimentar sua independência
      </TextSubmit>
      </Header>
      <LoginWrapper>
        <Input>
          <TextInput placeholder="Usuário" placeholderTextColor="#fff" />
        </Input>

        <Input>
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#fff"
            underlineColorAndroid={'#fff'}
          />
        </Input>

        
        <PasswordButton activeOpacity={0.3}>
        <PasswordText>Esqueci a senha</PasswordText>
        </PasswordButton>

        <Button activeOpacity={0.3}>
          <TextButton>Login </TextButton>
        </Button>

        <ButtonSingUp>
        <TextSingUp>Não possui conta? Faça o
          <TextAnother> cadastro</TextAnother>
          </TextSingUp>
        </ButtonSingUp>
        
      </LoginWrapper>
    </LoginContainer>
  );
}

/*
const styles = StyleSheet.create({
  input:{
    backgroundColor: '#fff',
    color:'#FFF',
    fontSize:18,
    
    marginTop: 100,
    
    
    
   
   
   },

}) */




