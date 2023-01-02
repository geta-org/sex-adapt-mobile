/* eslint-disable jsx-a11y/alt-text */
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {
  LoginContainer,
  LoginButton,
  TextButton,
  LoginWrapper,
  PasswordButton,
  PasswordText,
  Subtitle,
  SingUpText,
  SingUpButtonText,
  Header,
  BackgroundLogin,
} from './styles'

import { BackgroundSignIn, LogoWithText } from '@assets'
import { InputBase } from 'src/components/Input/InputBase'
import { useState } from 'react'
import { Lock, User } from 'phosphor-react-native'
import { TextInput } from 'react-native-paper'

export function SignIn() {
  const navigation = useNavigation()
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  })

  function handleGoPasswordRecover() {
    navigation.navigate('RecoverPassword')
  }

  function handleGoSignUp() {
    navigation.navigate('SignUp')
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
        <InputBase
          label="E-mail"
          value={userInfo.email}
          onChangeText={(text) =>
            setUserInfo((prev) => ({ ...prev, email: text }))
          }
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
          left={
            <TextInput.Icon icon={() => <User color="#bababa" size={18} />} />
          }
        />

        <InputBase
          label="Senha"
          value={userInfo.password}
          onChangeText={(text) =>
            setUserInfo((prev) => ({ ...prev, password: text }))
          }
          returnKeyType="done"
          secureTextEntry
          left={
            <TextInput.Icon icon={() => <Lock color="#bababa" size={18} />} />
          }
        />
        <PasswordButton activeOpacity={0.7} onPress={handleGoPasswordRecover}>
          <PasswordText>Esqueci a senha</PasswordText>
        </PasswordButton>

        <LoginButton activeOpacity={0.7}>
          <TextButton>Login </TextButton>
        </LoginButton>
        <SingUpText onPress={handleGoSignUp}>
          Não possui conta? Faça o <SingUpButtonText>cadastro</SingUpButtonText>
        </SingUpText>
      </LoginWrapper>
    </LoginContainer>
  )
}
