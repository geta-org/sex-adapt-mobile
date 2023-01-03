/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'
import { Image, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Lock, User } from 'phosphor-react-native'
import { TextInput } from 'react-native-paper'

import { DismissKeyboard } from 'src/utils/DismissKeyBoard'

import { InputBase } from 'src/components/Input/InputBase'

import {
  SignInContainer,
  SignInBackground,
  Header,
  Subtitle,
  SignInWrapper,
  SignInButton,
  SignInTextButton,
  PasswordRecoverButton,
  Label,
  SignUp,
  SignUpUnderline,
  FormWrapper,
} from './styles'
import { theme } from 'src/styles/theme'
import { BackgroundSignIn, LogoWithText } from '@assets'

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

  const behavior = Platform.OS === 'ios' ? 'padding' : 'height'

  return (
    <DismissKeyboard>
      <SignInContainer behavior={behavior}>
        <SignInBackground source={BackgroundSignIn} resizeMode="cover">
          <Header>
            <Image source={LogoWithText} />

            <Subtitle>
              Ache o melhor motel para experimentar sua independência
            </Subtitle>
          </Header>
        </SignInBackground>

        <SignInWrapper>
          <FormWrapper>
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
                <TextInput.Icon
                  icon={() => (
                    <User color={theme.colors.white} size={18} weight="bold" />
                  )}
                />
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
                <TextInput.Icon
                  icon={() => (
                    <Lock color={theme.colors.white} size={18} weight="bold" />
                  )}
                />
              }
            />
          </FormWrapper>
          <PasswordRecoverButton
            activeOpacity={0.7}
            onPress={handleGoPasswordRecover}
          >
            <Label>Esqueci a senha</Label>
          </PasswordRecoverButton>

          <SignInButton activeOpacity={0.7}>
            <SignInTextButton>Login</SignInTextButton>
          </SignInButton>

          <SignUp onPress={handleGoSignUp}>
            Não possui conta? Faça o <SignUpUnderline>cadastro</SignUpUnderline>
          </SignUp>
        </SignInWrapper>
      </SignInContainer>
    </DismissKeyboard>
  )
}
