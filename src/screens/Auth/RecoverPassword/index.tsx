import { View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { EnvelopeSimple } from 'phosphor-react-native'

import { ButtonBack } from 'src/components/Button/ButtonBack'
import { InputBase } from 'src/components/Input/InputBase'

import {
  RecoverPasswordWrapper,
  Title,
  Subtitle,
  Button,
  TextButton,
  FormWrapper,
} from './styles'
import { theme } from 'src/styles/theme'

export function RecoverPassword() {
  return (
    <RecoverPasswordWrapper>
      <ButtonBack />
      <View>
        <Title>Esqueceu sua Senha?</Title>
        <Subtitle>Seu e-mail pode ajudar a recuperar</Subtitle>
      </View>

      <FormWrapper>
        <InputBase
          label="E-mail"
          placeholder="Insira seu e-mail"
          placeholderTextColor={theme.colors.gray_600}
          selectionColor={theme.colors.gray_600}
          textColor={theme.colors.gray_1000}
          underlineColor={theme.colors.gray_600}
          activeUnderlineColor={theme.colors.gray_600}
          outlineColor={theme.colors.gray_600}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="done"
          left={
            <TextInput.Icon
              icon={() => (
                <EnvelopeSimple
                  color={theme.colors.red_900}
                  size={18}
                  weight="bold"
                />
              )}
            />
          }
        />
      </FormWrapper>

      <Button activeOpacity={0.7}>
        <TextButton>Recuperar senha</TextButton>
      </Button>
    </RecoverPasswordWrapper>
  )
}
