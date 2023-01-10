import { InputBase } from '../InputBase'

import { theme } from 'src/styles/theme'
import { TextInput, TextInputProps } from 'react-native-paper'
import { EnvelopeSimple, Lock, User } from 'phosphor-react-native'

interface InputFormProps extends Omit<TextInputProps, 'theme'> {
  icon: 'mail' | 'user' | 'password'
}

export function InputForm({ icon, ...rest }: InputFormProps) {
  function renderIcon() {
    switch (icon) {
      case 'mail':
        return (
          <EnvelopeSimple
            color={theme.colors.red_900}
            size={18}
            weight="bold"
          />
        )
      case 'user':
        return <User color={theme.colors.red_900} size={18} weight="bold" />
      case 'password':
        return <Lock color={theme.colors.red_900} size={18} weight="bold" />
      default:
        return <User color={theme.colors.red_900} size={18} weight="bold" />
    }
  }

  return (
    <InputBase
      placeholderTextColor={theme.colors.gray_600}
      selectionColor={theme.colors.gray_600}
      textColor={theme.colors.gray_1000}
      underlineColor={theme.colors.gray_600}
      activeUnderlineColor={theme.colors.gray_600}
      outlineColor={theme.colors.gray_600}
      {...rest}
      left={<TextInput.Icon icon={() => renderIcon()} />}
    />
  )
}
